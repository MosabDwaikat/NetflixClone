import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React, { memo, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import PopupControls from "../PopupControls";
import AboutContent from "../AboutContent";
import Trailers from "../Trailers";
import MoreLikeThis from "../MoreLikeThis";
import EpisodeSelector from "../EpisodeSelector";
import ContentInfo from "../ContentInfo";
import { useAuth } from "../../providers/AuthProvider";
import axios from "axios";

const InfoPanel = memo(({ infoProps, setInfoProps }) => {
  const InfoPanelRef = useRef(null);
  const { setAuthed } = useAuth();
  const [content, setContent] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token)
        return () => {
          setAuthed(false);
        };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get("http://localhost:5000/showByID/" + infoProps.id, config)
        .then((res) => {
          setContent(res.data);
        });
    } catch (error) {
      console.error("Error retrieving Firestore data:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoProps]);

  const handleClose = () => {
    setInfoProps({
      initialPosition: { x: 0, y: 0 },
      display: "hideInfoPanel",
    });
    setContent(null);
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
        {content && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            bgcolor={"rgb(24,24,24)"}
            // boxShadow={"rgba(0, 0, 0, 0.75) 0px 3px 10px 0px"}
          >
            <Box position={"relative"} height={"auto"}>
              <img
                src={content.img}
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
                  <img src={content.logo} alt="" width={"100%"} />
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
                    <ContentInfo info={content.info} />
                    {content.info.about && (
                      <Box>
                        <Typography variant="body2" color={"white"}>
                          {content.info.about}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <Box marginTop={"1em"} marginBottom={"0.5em"}>
                    <Typography variant="body2" color={"white"}>
                      {content.description}
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
                      {content.cast.slice(0, 3).map((e, i) => {
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
                      {content.geners.slice(0, 3).map((e, i) => {
                        return (
                          <span key={i}>
                            {e}
                            {i !== 2 && ","}
                          </span>
                        );
                      })}
                    </Typography>
                  </Box>
                  {content.thisIs && (
                    <Box margin={".5em .5em .5em 0"}>
                      <Typography
                        variant="body2"
                        color={"rgb(119, 119, 119)"}
                        display={"inline"}
                      >
                        {`this ${content.info.type} is: `}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={"white"}
                        display={"inline"}
                      >
                        {content.thisIs}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
              {content.seasons && <EpisodeSelector seasons={content.seasons} />}
              <MoreLikeThis />
              <Trailers />
              <AboutContent
                title={content.title}
                info={content.info}
                cast={content.cast}
                creators={content.creators}
                geners={content.geners}
                thisIs={content.thisIs}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default InfoPanel;

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
