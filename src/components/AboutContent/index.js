import { Box, Typography } from "@mui/material";
import React from "react";

const AboutContent = ({ cast, creators, geners, info, thisIs, title }) => {
  return (
    <Box paddingBottom={"2em"}>
      <Typography variant="h3" color={"white"}>
        About <strong>{title}</strong>
      </Typography>
      {creators && (
        <Box margin={".5em .5em .5em 0"}>
          <Typography
            variant="body2"
            color={"rgb(119, 119, 119)"}
            display={"inline"}
          >
            {"Creators: "}
          </Typography>
          <Typography variant="body2" color={"white"} display={"inline"}>
            {creators.map((e, i) => {
              return (
                <span key={i}>
                  {e}
                  {i !== creators.length - 1 && ","}
                </span>
              );
            })}
          </Typography>
        </Box>
      )}
      <Box margin={".5em .5em .5em 0"}>
        <Typography
          variant="body2"
          color={"rgb(119, 119, 119)"}
          display={"inline"}
        >
          {"Cast: "}
        </Typography>
        <Typography variant="body2" color={"white"} display={"inline"}>
          {cast.map((e, i) => {
            return (
              <span key={i}>
                {e}
                {i !== cast.length - 1 && ","}
              </span>
            );
          })}
        </Typography>
      </Box>
      <Box margin={".5em .5em .5em 0"}>
        <Typography
          variant="body2"
          color={"rgb(119, 119, 119)"}
          display={"inline"}
        >
          {"Geners: "}
        </Typography>
        <Typography variant="body2" color={"white"} display={"inline"}>
          {geners.map((e, i) => {
            return (
              <span key={i}>
                {e}
                {i !== geners.length - 1 && ","}
              </span>
            );
          })}
        </Typography>
      </Box>
      {thisIs && (
        <Box margin={".5em .5em .5em 0"}>
          <Typography
            variant="body2"
            color={"rgb(119, 119, 119)"}
            display={"inline"}
          >
            {`this ${info.type} is: `}
          </Typography>
          <Typography variant="body2" color={"white"} display={"inline"}>
            {thisIs}
          </Typography>
        </Box>
      )}
      <Box margin={".5em .5em .5em 0"}>
        <Typography
          variant="body2"
          color={"rgb(119, 119, 119)"}
          display={"inline"}
        >
          {"Maturity rating: "}
        </Typography>
        <Typography
          display={"inline"}
          border={"1px solid rgba(255, 255, 255, 0.4)"}
          paddingX={" 0.4em"}
          maxWidth={"300px"}
          marginRight={"8px"}
          fontWeight={500}
          fontSize={"16px"}
          color={"rgb(188, 188, 188)"}
        >{`${info.maturity}+`}</Typography>
        {info.about && (
          <Typography variant="body2" color={"white"} display={"inline"}>
            {info.about}
          </Typography>
        )}

        <Typography
          variant="body2"
          color={"white"}
          display={"inline"}
          marginLeft={"15px"}
        >
          Recommended for ages {info.maturity} and up
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutContent;
