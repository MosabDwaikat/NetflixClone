import { Box, Typography } from "@mui/material";
import React from "react";
import ep from "./episode.jpg";

const EpisodeCard = () => {
  return (
    <Box
      display={"flex"}
      borderBottom={"1px solid rgb(64, 64, 64)"}
      borderRadius={"4px"}
      boxSizing={"border-box"}
      padding={"1em"}
      sx={{ cursor: "pointer" }}
    >
      <Box display={"flex"} alignItems={"center"} paddingRight={"1em"}>
        <Typography variant="h2" color={"white"}>
          1
        </Typography>
      </Box>
      <Box width={"255px"} display={"flex"} alignItems={"center"}>
        <img src={ep} alt="xx" width={"100%"} />
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"1em 1em .5em"}
        >
          <Typography variant="body1" color={"rgb(255, 255, 255)"}>
            {data.title}
          </Typography>
          <Typography variant="body1" color={"rgb(255, 255, 255)"}>
            {data.length}
          </Typography>
        </Box>
        <Box padding={"0 1em 1em;"}>
          <Typography variant="body2" color={"rgb(210, 210, 210)"}>
            {data.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EpisodeCard;
const data = {
  title: "Earth Skills",
  description:
    "Having discovered that Jasper may still be alive, Clarke, Bellamy, Octavia, Finn and Monty set out on a mission to locate their friend.",
  length: "41m",
};
