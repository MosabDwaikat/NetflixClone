import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React, { memo, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import PopupControls from "../PopupControls";
import AboutContent from "../AboutContent";
import Trailers from "../Trailers";
import MoreLikeThis from "../MoreLikeThis";
import EpisodeSelector from "../EpisodeSelector";
import ContentInfo from "../ContentInfo";

const InfoPanel = memo(({ infoProps, setInfoProps }) => {
  const InfoPanelRef = useRef(null);

  const handleClose = () => {
    setInfoProps({
      initialPosition: { x: 0, y: 0 },
      display: "hideInfoPanel",
      content: null,
    });
    enableScroll();
  };

  function disableScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    document.body.classList.add("disable-scroll"); //in app.css
    window.scrollTo(0, scrollPosition);
  }

  function enableScroll() {
    document.body.classList.remove("disable-scroll");
  }

  useEffect(() => {
    disableScroll();

    return () => {
      enableScroll();
    };
  }, []);

  return (
    <Box //aura
      zIndex={4000}
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      height={"100%"}
      overflow={"auto"}
      bgcolor={"rgba(0,0,0,0.9)"}
      onClick={handleClose}
    >
      <Box //info panel
        ref={InfoPanelRef}
        zIndex={3000}
        width={"90%"}
        maxWidth={"980px"}
        position={"relative"}
        boxSizing={"border-box"}
        top={"5%"}
        left={"50%"}
        sx={{ transform: "translate(-50%)" }}
        onClick={(e) => e.stopPropagation()}
        // left={infoProps.initialPosition.x}
      >
        <Box position={"absolute"} top={0} right={0} margin={"1em"} zIndex={2}>
          <CircleButton onClick={handleClose}>
            <IoMdClose fontSize={"28px"} />
          </CircleButton>
        </Box>
        {infoProps.content && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            bgcolor={"rgb(24,24,24)"}
            // boxShadow={"rgba(0, 0, 0, 0.75) 0px 3px 10px 0px"}
          >
            <Box position={"relative"} height={"auto"}>
              <img
                src={infoProps.content.img}
                alt=""
                width={"100%"}
                style={{
                  borderTopLeftRadius: "6px",
                  borderTopRightRadius: "6px",
                }}
              />
              <Box
                className="info-container"
                width={"36%"}
                position={"absolute"}
                bottom={"5%"}
                left={"4%"}
                display={"flex"}
                justifyContent={"flex-end"}
              >
                <Box width={"100%"}>
                  <img src={infoProps.content.logo} alt="" width={"100%"} />
                  <Box display={"flex"} marginTop={"1.5vw"}>
                    <PopupControls playVariant={"square"} circleBg={"dark"} />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              width={"100%"}
              padding={"0 3em"}
              boxSizing={"border-box"}
              bgcolor={"rgb(24, 24, 24)"}
              sx={{
                // cursor: "pointer",
                borderBottomLeftRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box width={"64%"} display={"flex"} flexDirection={"column"}>
                  <Box margin={"0.8em 0"}>
                    <ContentInfo info={infoProps.content.info} />
                    {infoProps.content.info.about && (
                      <Box>
                        <Typography variant="body2" color={"white"}>
                          {infoProps.content.info.about}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <Box marginTop={"1em"} marginBottom={"0.5em"}>
                    <Typography variant="body2" color={"white"}>
                      {infoProps.content.description}
                    </Typography>
                  </Box>
                </Box>
                <Box width={"32%"}>
                  <Box margin={".5em .5em .5em 0"}>
                    <Typography
                      variant="body2"
                      color={"rgb(119, 119, 119)"}
                      display={"inline"}
                    >
                      {"Cast: "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={"white"}
                      display={"inline"}
                    >
                      {infoProps.content.cast.slice(0, 3).map((e, i) => {
                        return (
                          <span key={i}>
                            {e}
                            {i !== 2 && ","}
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
                    <Typography
                      variant="body2"
                      color={"white"}
                      display={"inline"}
                    >
                      {infoProps.content.geners.slice(0, 3).map((e, i) => {
                        return (
                          <span key={i}>
                            {e}
                            {i !== 2 && ","}
                          </span>
                        );
                      })}
                    </Typography>
                  </Box>
                  {infoProps.content.thisIs && (
                    <Box margin={".5em .5em .5em 0"}>
                      <Typography
                        variant="body2"
                        color={"rgb(119, 119, 119)"}
                        display={"inline"}
                      >
                        {`this ${infoProps.content.info.type} is: `}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={"white"}
                        display={"inline"}
                      >
                        {infoProps.content.thisIs}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
              <EpisodeSelector />
              <MoreLikeThis />
              <Trailers />
              <AboutContent
                info={infoProps.content.info}
                cast={infoProps.content.cast}
                creators={infoProps.content.creators}
                geners={infoProps.content.geners}
                thisIs={infoProps.content.thisIs}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default InfoPanel;

// const api = {};

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
