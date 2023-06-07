import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaPlay, FaPlus, FaCheck } from "react-icons/fa";
import styled from "@emotion/styled";
import { usePreferences } from "../../providers/ContentPreferencesProvider";
import axios from "axios";
import { useAuth } from "../../providers/AuthProvider";

const PopupControls = ({ playVariant, circleBg, contentID }) => {
  const { likes, list, setList, setLikes } = usePreferences();
  const [listed, setListed] = useState(false);
  const [liked, setLiked] = useState(false);
  const { setAuthed } = useAuth();

  useEffect(() => {
    if (likes.includes(contentID)) setLiked(true);
    if (list.includes(contentID)) setListed(true);
  }, [likes, list, contentID]);

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
        console.log(config);
        axios
          .delete("http://localhost:5000/list/" + contentID, config)
          .then((res) => {
            console.log("newList", res.data);
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
          .put("http://localhost:5000/list/" + contentID, null, config)
          .then((res) => {
            console.log("newList", res.data.newList);
            setList(res.data.newList);
            setListed(true);
          });
      } catch (error) {
        console.log("Error updating Firestore data:", error);
      }
      //call api to add to list
    }
  };
  const handleLikeClick = (e) => {
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

    if (liked) {
      try {
        console.log(config);
        axios
          .delete("http://localhost:5000/likes/" + contentID, config)
          .then((res) => {
            console.log("newList", res.data);
            setLikes(res.data.newList);
            setLiked(false);
          });
      } catch (error) {
        console.log("Error retrieving Firestore data:", error);
      }
    } else {
      try {
        console.log(config);
        axios
          .put("http://localhost:5000/likes/" + contentID, null, config)
          .then((res) => {
            console.log("newList", res.data.newList);
            setLikes(res.data.newList);
            setLiked(true);
          });
      } catch (error) {
        console.log("Error updating Firestore data:", error);
      }
      //call api to add to list
    }
  };
  return (
    <Box display={"flex"} alignItems={"center"}>
      {playVariant === "circle" && (
        <CircleButton
          sx={{ backgroundColor: "rgba(255,255,255,1)" }}
          onClick={(e) => {
            e.stopPropagation();
            console.log("Play button clicked");
          }}
        >
          <FaPlay color="black" />
        </CircleButton>
      )}
      {playVariant === "square" && (
        <Box display={"flex"} marginTop={"1.5vw"}>
          <PlayButton variant="contained" size="small">
            <FaPlay />
            Play
          </PlayButton>
        </Box>
      )}
      <CircleButton
        sx={{
          backgroundColor:
            circleBg === "dark" ? "rgb(20,20,20)" : "transparent",
        }}
        onClick={handleListClick}
      >
        {listed ? <FaCheck /> : <FaPlus />}
      </CircleButton>
      <CircleButton
        sx={{
          backgroundColor:
            circleBg === "dark" ? "rgb(20,20,20)" : "transparent",
        }}
        onClick={handleLikeClick}
      >
        {liked ? <AiFillLike /> : <AiOutlineLike />}
      </CircleButton>
    </Box>
  );
};

export default PopupControls;
const CircleButton = styled(Button)(({ color, sx }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: color || "white",
  minWidth: "30px",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "50%",
  height: "35px",
  width: "35px",
  margin: "4px",
  sx: { backgroundColor: sx ? sx.backgroundColor : "transparent" },
  "&:hover": {
    backgroundColor: sx ? sx.backgroundColor : "transparent",
    border: "1px solid rgba(255,255,255,1)",
  },
}));

const PlayButton = styled(Button)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "black",
  backgroundColor: "white",
  fontSize: "1.2vw",
  fontWeight: 700,
  height: "3.2vw",
  width: "6.5vw",
  minWidth: "20px",
  paddingBottom: ".5vw",
  paddingTop: ".5vw",
  paddingLeft: "1.3vw",
  paddingRight: "1.5vw",
  marginRight: "1rem",
  marginBottom: "1rem",
  "&:hover": { backgroundColor: "rgba(255,255,255,0.4)" },
});
