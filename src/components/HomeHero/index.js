import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { BiInfoCircle } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { VscUnmute, VscMute } from "react-icons/vsc";

const HomeHero = ({ heroPreview, showVideo, muteVideo, handleVideoEnd }) => {
  return (
    <Box position={"relative"} width={"100%"}>
      <Box position={"relative"} width={"100%"}>
        <Box height={"37vw"}>
          <img
            src={heroPreview.img}
            alt=""
            width={"100%"}
            style={{ objectFit: "cover", overflow: "clip" }}
          />
        </Box>

        {showVideo && (
          <Box position={"absolute"} top={0} left={0} width={"100%"}>
            <video
              autoPlay
              muted={muteVideo}
              width={"100%"}
              height={"70%"}
              onEnded={handleVideoEnd}
            >
              <source src={heroPreview.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomeHero;
