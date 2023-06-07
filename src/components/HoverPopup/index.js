import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "@emotion/styled";
import PopupControls from "../PopupControls";
import ContentInfo from "../ContentInfo";

const HoverPopup = ({ popupProps, setPopupProps, setInfoProps }) => {
  const [animate, setAnimate] = useState(false);
  const popupRef = useRef(null);
  const [styles, setStyles] = useState();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleMouseEnter = (e) => {
    setPopupProps({ ...popupProps, display: "view popup" });
  };
  const handleMouseLeave = () => {
    setAnimate(false);
    setTimeout(() => {
      setPopupProps({ display: "hide popup" });
    }, 300);
  };

  useEffect(() => {
    const boxElement = popupRef.current;

    const boxRect = boxElement.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    if (boxRect.left - 50 < windowWidth * 0.04) {
      setStyles({
        transform: `translate(0px, -50px)`,
        width: "350px !important",
      });
    } else if (boxRect.right + 50 > windowWidth - windowWidth * 0.04) {
      setStyles({
        transform: `translate(${-1 * (350 - popupProps.width)}px, -50px)`,
        width: "350px !important",
      });
    } else {
      setStyles({
        transform: "translate(-50px, -50px)",
        width: "350px !important",
      });
    }
  }, [popupProps.width]);

  const handleExpand = () => {
    console.log("Box clicked");
    //get video current time
    const pos = popupRef.current.getBoundingClientRect();

    setInfoProps({
      initialPosition: {
        x: pos.x,
        y: pos.y,
      },
      initialDimensions: {
        width: pos.width,
        height: pos.height,
      },
      display: "showInfoPanel",
      content: popupProps.content,
    });
  };

  return (
    <Box
      ref={popupRef}
      zIndex={2000}
      width={popupProps.width}
      height={popupProps.height}
      position={"absolute"}
      top={popupProps.y}
      left={popupProps.x}
      sx={
        animate
          ? {
              ...styles,
              transition:
                "width 0.3s ease-in-out, height 0.3s ease-in-out,transform 0.3s ease-in-out",
            }
          : {
              transition:
                "width 0.3s ease-in-out, height 0.3s ease-in-out,transform 0.3s ease-in-out",
            }
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {popupProps.content && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          borderRadius={"6px"}
          boxSizing={"border-box"}
          boxShadow={"rgba(0, 0, 0, 0.75) 0px 3px 10px 0px"}
        >
          <img
            src={popupProps.content.img}
            alt=""
            width={"100%"}
            style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
          />
          <Box
            width={"100%"}
            padding={"16px"}
            boxSizing={"border-box"}
            bgcolor={"rgb(24, 24, 24)"}
            onClick={handleExpand}
            sx={{
              cursor: "pointer",
              borderBottomLeftRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              marginBottom={"8px"}
            >
              <PopupControls
                playVariant={"circle"}
                circleBg={"dark"}
                contentID={popupProps.content.id}
              />
              <Box width={"60%"} display={"flex"} justifyContent={"flex-end"}>
                <CircleButton
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Expand button clicked");
                  }}
                >
                  <IoIosArrowDown />
                </CircleButton>
              </Box>
            </Box>
            <ContentInfo info={popupProps.content.info} />
            <Box marginBottom={"8px"}>
              {popupProps.content.tags.map((e, i) => {
                return (
                  <Box display={"inline"} key={i}>
                    <Typography
                      display={"inline"}
                      maxWidth={"300px"}
                      marginRight={"8px"}
                      fontWeight={500}
                      fontSize={"16px"}
                      color={"rgb(255, 255, 255)"}
                    >
                      {e}
                    </Typography>
                    {i < popupProps.content.tags.length - 1 && (
                      <Typography
                        display={"inline-flex"}
                        alignItems={"center"}
                        maxWidth={"300px"}
                        marginRight={"8px"}
                        fontWeight={500}
                        fontSize={"1.4vw;"}
                        color={"rgb(100, 100, 100)"}
                      >
                        {"•"}
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HoverPopup;

const CircleButton = styled(Button)(({ color, sx }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: color || "white",
  minWidth: "30px",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "50%",
  height: "35px",
  width: "35px",
  margin: "4px",
  sx: { backgroundColor: sx ? sx.backgroundColor : "transparent" },
  "&:hover": {
    backgroundColor: sx ? sx.backgroundColor : "transparent",
    border: "1px solid rgba(255,255,255,1)",
  },
}));
