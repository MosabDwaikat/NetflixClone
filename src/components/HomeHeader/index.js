import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import NetflixLogo from "../NetflixLogo";
import "./HomeHeader.css";
import { IoMdArrowDropdown } from "react-icons/io";
import HomeHeaderControls from "../HomeHeaderControls";
import BrowseDropdown from "../BrowseDropdown";

const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Change the threshold value according to your requirements
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <Box width={"100%"} zIndex={2}>
      <Box
        height={{ xs: "41px", md: "68px" }}
        position={"fixed"}
        zIndex={100}
        width={"100%"}
        top={"0"}
        sx={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,.7) 10%, transparent)",
          backgroundColor: isScrolled ? "#000" : "transparent",
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          paddingX={"4%"}
        >
          <NetflixLogo sx={{ width: { md: "92px", xs: "56px" } }} />
          <Box display={{ xs: "none", md: "block" }}>
            <ul className="home-header-ul">
              {HeaderMenuItems.map((e, i) => {
                return (
                  <li
                    key={i}
                    className={
                      "home-header-ul-li " + (i === 0 ? " active" : "")
                    }
                  >
                    {e.title}
                  </li>
                );
              })}
            </ul>
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              variant="body2"
              color={"white"}
              paddingLeft={"18px"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              browse {<IoMdArrowDropdown />}
            </Typography>
          </Box>
          <Box position={"absolute"} right={"4%"}>
            <HomeHeaderControls />
          </Box>
          {isDropdownVisible && (
            <BrowseDropdown
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHeader;

const HeaderMenuItems = [
  { title: "Home", url: "" },
  { title: "TV Shows", url: "" },
  { title: "Movies", url: "" },
  { title: "Latest", url: "" },
  { title: "My List", url: "" },
  { title: "Browse by Language", url: "" },
];
