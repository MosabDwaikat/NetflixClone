import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

import styled from "@emotion/styled";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RelatedCard from "./RelatedCard";

const MoreLikeThis = () => {
  const [expanded, setExpanded] = useState(false);
  const moreLikeThisRef = useRef(null);

  const filteredData = data.slice(0, expanded ? data.length : 9);

  const scrollToTop = () => {
    if (moreLikeThisRef.current) {
      moreLikeThisRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box marginTop={"30px"}>
      <Box
        ref={moreLikeThisRef}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3" fontWeight={700} color="white">
          More Like This
        </Typography>
      </Box>
      <Box>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
          rowGap={"1em"}
          columnGap={"1em"}
        >
          {filteredData.map((e, i) => {
            return <RelatedCard content={e} key={i} />;
          })}
        </Box>

        {!expanded && data.length > 9 && (
          <Box
            width="100%"
            height="3px"
            bgcolor="rgb(77,77,77)"
            display="flex"
            position="relative"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Box position="relative" top="-20px">
              <CircleButton
                sx={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                onClick={() => {
                  setExpanded(true);
                }}
              >
                <IoIosArrowDown />
              </CircleButton>
            </Box>
          </Box>
        )}
        {expanded && data.length > 9 && (
          <Box
            width="100%"
            height="3px"
            bgcolor="rgb(77,77,77)"
            display="flex"
            position="relative"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Box position="relative" top="-20px">
              <CircleButton
                sx={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                onClick={() => {
                  setExpanded(false);
                  scrollToTop();
                }}
              >
                <IoIosArrowUp />
              </CircleButton>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MoreLikeThis;

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

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
  backgroundColor: sx ? sx.backgroundColor : "transparent",
  "&:hover": {
    backgroundColor: sx ? sx.backgroundColor : "transparent",
    border: "1px solid rgba(255,255,255,1)",
  },
}));
