import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FaCheck, FaPlus } from "react-icons/fa";
import { usePreferences } from "../../providers/ContentPreferencesProvider";
import { useAuth } from "../../providers/AuthProvider";
import axios from "axios";

const RelatedCard = ({ content }) => {
  const { list, setList } = usePreferences();
  const { setAuthed } = useAuth();
  const [listed, setListed] = useState(false);

  useEffect(() => {
    if (list.includes(content.id)) setListed(true);
  }, [list, content]);

  const handleListClick = (e) => {
    e.stopPropagation();
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

    if (listed) {
      try {
        axios
          .delete("http://localhost:5000/list/" + content.id, config)
          .then((res) => {
            setList(res.data.newList);
            setListed(false);
          });
      } catch (error) {
        console.log("Error retrieving Firestore data:", error);
      }
    } else {
      try {
        console.log(config);
        axios
          .put("http://localhost:5000/list/" + content.id, null, config)
          .then((res) => {
            setList(res.data.newList);
            setListed(true);
          });
      } catch (error) {
        console.log("Error updating Firestore data:", error);
      }
      //call api to add to list
    }
  };

  return (
    <Box border={"1px solid"} bgcolor={"rgb(47, 47, 47)"}>
      <img src={content.img} alt="" width={"100%"} />
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} padding={"1em"}>
          <Box color={"white"}>{content.title}</Box>
          <Box>
            <CircleButton onClick={handleListClick}>
              {listed ? <FaCheck /> : <FaPlus />}
            </CircleButton>
          </Box>
        </Box>
        <Box padding={"0 1em 1em;"} color={"white"}>
          {content.description}
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedCard;

const CircleButton = styled(Button)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  minWidth: "30px",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "50%",
  height: "35px",
  width: "35px",
  margin: "4px",
  backgroundColor: "rgb(20,20,20)",
  "&:hover": {
    backgroundColor: "rgb(20,20,20)",
    border: "1px solid rgba(255,255,255,1)",
  },
}));
