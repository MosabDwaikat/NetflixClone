import { Box, Button } from "@mui/material";
import React from "react";
import { SlLike } from "react-icons/sl";
import { FaPlay, FaPlus } from "react-icons/fa";
import styled from "@emotion/styled";

const PopupControls = ({ playVariant, circleBg }) => {
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
        onClick={(e) => {
          e.stopPropagation();
          console.log("'Add to My List' button clicked");
        }}
      >
        <FaPlus />
      </CircleButton>
      <CircleButton
        sx={{
          backgroundColor:
            circleBg === "dark" ? "rgb(20,20,20)" : "transparent",
        }}
        onClick={(e) => {
          e.stopPropagation();
          console.log("Like button clicked");
        }}
      >
        <SlLike />
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
