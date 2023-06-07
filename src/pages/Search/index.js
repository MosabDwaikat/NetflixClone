import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../../providers/SearchProvider";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import ContentCard from "../../components/ContentCard";
import HoverPopup from "../../components/HoverPopup";
import InfoPanel from "../../components/InfoPanel";
import { useAuth } from "../../providers/AuthProvider";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { searchInput, setSearchInput } = useSearch();
  const { setAuthed } = useAuth();
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [popupProps, setPopupProps] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    display: "hide popup",
    content: null,
  });
  const [infoProps, setInfoProps] = useState({
    initialPosition: { x: 0, y: 0 },
    initialDimensions: { width: 0, height: 0 },
    display: "hideInfoPanel",
    content: null,
  });

  useEffect(() => {
    const result = {
      q: searchParams.get("q"),
    };
    setSearchInput(result.q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuthed(false);
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get("http://localhost:5000/search/" + searchInput, config)
        .then((res) => {
          setSearchResults(res.data);
        });
    }, 500);

    setTypingTimeout(timeout);

    return () => {
      clearTimeout(typingTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <Box padding={"0 4%"} paddingTop={"min(70px,10%)"} marginBottom={"36px"}>
      {popupProps.display === "view popup" && (
        <HoverPopup
          popupProps={popupProps}
          setPopupProps={setPopupProps}
          setInfoProps={setInfoProps}
        />
      )}
      {infoProps.display === "showInfoPanel" && (
        <InfoPanel infoProps={infoProps} setInfoProps={setInfoProps} />
      )}
      <Grid container spacing={2} columns={60}>
        {searchResults.map((e, i) => {
          return (
            <Grid key={i} item xs={30} sm={20} md={15} lg={12} xl={10}>
              <ContentCard content={e} setPopupProps={setPopupProps} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Search;
