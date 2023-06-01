import { Box } from "@mui/system";
import React from "react";

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

        {showVideo && heroPreview.video && (
          <Box position={"absolute"} top={0} left={0} width={"100%"}>
            <video
              key={heroPreview.video}
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
