import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { BiInfoCircle } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { VscUnmute, VscMute } from "react-icons/vsc";
//***************** */
import the100 from "./the100.jpg";
import the100Logo from "./the100Logo.png";

const HomeHero = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [muteVideo, setMuteVideo] = useState(true);

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
  const InfoButton = styled(Button)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    backgroundColor: "rgba(109,109,109,0.7)",
    fontSize: "1.2vw",
    fontWeight: 500,
    height: "3.2vw",
    width: "11vw",
    minWidth: "20px",
    paddingBottom: ".5vw",
    paddingTop: ".5vw",
    paddingLeft: "1.3vw",
    paddingRight: "1.5vw",
    marginRight: "1rem",
    marginBottom: "1rem",
    "&:hover": { backgroundColor: "rgba(109,109,109,0.4)" },
  });
  const VideoButton = styled(Button)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    minWidth: "30px",
    border: "1px solid white",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0)",
    height: "35px",
    width: "35px",
    marginRight: "1vw",

    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
  });
  const handleVideoEnd = () => {
    setShowVideo(false);
  };
  const handleVideoButton = () => {
    if (!showVideo) {
      //play video
      setShowVideo(true);
    } else if (muteVideo) {
      setMuteVideo(false);
      //unmute
    } else {
      setMuteVideo(true);
      //mute
    }
  };
  return (
    <Box position={"relative"} width={"100%"}>
      <Box position={"relative"} width={"100%"} zIndex={-10}>
        {showVideo ? (
          <video
            autoPlay
            muted={muteVideo}
            width={"100%"}
            onEnded={handleVideoEnd}
          >
            <source src={heroPreview.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={heroPreview.img} alt="" width={"100%"} />
        )}
      </Box>
      <Box
        zIndex={0}
        className="info-container"
        width={"36%"}
        position={"absolute"}
        bottom={"35%"}
        left={"4%"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <Box width={"100%"}>
          <img src={heroPreview.logo} alt="" width={"100%"} />
          <Typography fontSize={"1.2vw"} color={"white"}>
            {heroPreview.description}
          </Typography>
          <Box display={"flex"} marginTop={"1.5vw"}>
            <PlayButton variant="contained" size="small">
              <FaPlay />
              Play
            </PlayButton>
            <InfoButton variant="contained" size="small">
              <BiInfoCircle fontSize={"2.3vw"} fontWeight={500} />
              More Info
            </InfoButton>
          </Box>
        </Box>
      </Box>

      <Box
        zIndex={0}
        className="controls-container"
        // width={"36%"}
        position={"absolute"}
        bottom={"35%"}
        right={"0"}
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"flex-start"}
      >
        <Box>
          <VideoButton onClick={handleVideoButton}>
            {showVideo ? (
              muteVideo ? (
                <VscMute />
              ) : (
                <VscUnmute />
              )
            ) : (
              <MdReplay fontSize={"20px"} />
            )}
          </VideoButton>
        </Box>
        <Box
          bgcolor={"rgba(51,51,51,0.6)"}
          padding={".5vw 3.5vw .5vw .8vw"}
          borderLeft={"3px solid rgb(220, 220, 220)"}
          color={"white"}
          fontSize={"14px"}
        >
          18+
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;

const heroPreview = {
  title: "The 100",
  img: the100,
  video: "the100.mp4",
  logo: the100Logo,
  description: `A century after Earth was devastated by a nuclear apocalypse, 100
  space station residents are sent to the planet to determine whether
  it's habitable.`,
};
