import { Box, Button } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { FaPlus } from "react-icons/fa";

const RelatedCard = ({ content }) => {
  return (
    <Box border={"1px solid"} bgcolor={"rgb(47, 47, 47)"}>
      <img src={content.img} alt="" width={"100%"} />
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} padding={"1em"}>
          <Box>info</Box>
          <Box>
            <CircleButton>
              <FaPlus />
            </CircleButton>
          </Box>
        </Box>
        <Box padding={"0 1em 1em;"}>content.description</Box>
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
