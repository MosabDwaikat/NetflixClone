import { Box, Typography } from "@mui/material";
import React from "react";

const EpisodeCard = ({ episode }) => {
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
          {episode.num}
        </Typography>
      </Box>
      <Box width={"255px"} display={"flex"} alignItems={"center"}>
        <img src={episode.img} alt="xx" width={"100%"} />
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"1em 1em .5em"}
        >
          <Typography variant="body1" color={"rgb(255, 255, 255)"}>
            {episode.title}
          </Typography>
          <Typography variant="body1" color={"rgb(255, 255, 255)"}>
            {episode.duration + "m"}
          </Typography>
        </Box>
        <Box padding={"0 1em 1em;"}>
          <Typography variant="body2" color={"rgb(210, 210, 210)"}>
            {episode.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EpisodeCard;
