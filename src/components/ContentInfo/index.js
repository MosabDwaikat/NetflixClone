import { Box, Typography } from "@mui/material";
import React from "react";

const ContentInfo = ({ info }) => {
  return (
    <Box margin={"12px 0"} display={"flex"} alignItems={"center"}>
      <Typography
        maxWidth={"300px"}
        marginRight={"8px"}
        fontWeight={500}
        fontSize={"16px"}
        color={"rgb(70, 211, 105)"}
      >{`${info.match}% Match`}</Typography>
      <Typography
        border={"1px solid rgba(255, 255, 255, 0.4)"}
        paddingX={" 0.4em"}
        maxWidth={"300px"}
        marginRight={"8px"}
        fontWeight={500}
        fontSize={"16px"}
        color={"rgb(188, 188, 188)"}
      >{`${info.maturity}+`}</Typography>
      <Typography
        maxWidth={"300px"}
        marginRight={"8px"}
        fontWeight={500}
        fontSize={"16px"}
        color={"rgb(188, 188, 188)"}
      >{`${info.length}`}</Typography>
      <Typography
        border={"1px solid rgba(255, 255, 255, 0.4)"}
        paddingX={" 0.5em"}
        maxWidth={"300px"}
        marginRight={"8px"}
        fontWeight={500}
        fontSize={"11px"}
        color={"rgba(255, 255, 255, 0.9)"}
      >{`${info.quality}`}</Typography>
    </Box>
  );
};

export default ContentInfo;
