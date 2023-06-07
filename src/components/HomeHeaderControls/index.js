import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { BiBell } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import "./HomeHeaderControls.css";
import pic from "./ProfilePic.png";
import HomeHeaderDropdown from "../HomeHeaderDropdown";
import SearchInput from "../SearchInput";

const HomeHeaderControls = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 500);
  };

  return (
    <Box display="flex" alignItems="center">
      {/* <BiSearch className="header-controls-item" /> */}
      <SearchInput />
      <Typography
        variant="body1"
        marginRight="14px"
        color="white"
        display={{ xs: "none", lg: "inline" }}
      >
        Kids
      </Typography>
      <BiBell className="header-controls-item" />
      <Box
        display="flex"
        alignItems="center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="ProfilePic" src={pic} alt="" />
        <IoMdArrowDropdown color="white" fontSize="22px" />
      </Box>
      {isDropdownVisible && (
        <HomeHeaderDropdown
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </Box>
  );
};

export default HomeHeaderControls;
