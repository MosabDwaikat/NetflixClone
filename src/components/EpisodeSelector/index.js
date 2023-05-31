import {
  Box,
  Button,
  FormControl,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import styled from "@emotion/styled";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const EpisodeSelector = () => {
  const [season, setSeason] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const episodeSelectorRef = useRef(null);
  const handleChange = (event) => {
    setSeason(event.target.value);
  };

  const filteredData = data.slice(0, expanded ? data.length : 10);

  const scrollToTop = () => {
    if (episodeSelectorRef.current) {
      episodeSelectorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box marginTop={"30px"}>
      <Box
        ref={episodeSelectorRef}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3" fontWeight={700} color="white">
          Episodes
        </Typography>
        <FormControl sx={{ width: "150px" }}>
          <Select
            value={season}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              backgroundColor: "rgb(36,36,36)",
              border: "1px solid rgb(77,77,77)",
              "&:hover": { backgroundColor: "rgb(36,36,36)" },
            }}
            MenuProps={{
              style: { zIndex: 4000 },
            }}
            renderValue={(value) => `Season ${value}`}
          >
            <MenuItem value={1}>
              <ListItemText primary="Season 1" secondary="(10 Episodes)" />
            </MenuItem>
            <MenuItem value={2}>
              <ListItemText primary="Season 2" secondary="(10 Episodes)" />
            </MenuItem>
            <MenuItem value={3}>
              <ListItemText primary="Season 3" secondary="(10 Episodes)" />
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        {filteredData.map((e, i) => {
          return <EpisodeCard key={i} />;
        })}
        {!expanded && data.length > 10 && (
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
        {expanded && data.length > 10 && (
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

export default EpisodeSelector;

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
