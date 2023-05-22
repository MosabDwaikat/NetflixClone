import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NetflixLogo from "../NetflixLogo";
import "./HomeHeader.css";

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
  return (
    <Box>
      <Box
        height={{ sm: "41px", md: "68px" }}
        // border={"1px solid"}
        position={"fixed"}
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
          <NetflixLogo sx={{ width: "92px" }} />
          <ul className="home-header-ul">
            {HeaderMenuItems.map((e, i) => {
              return (
                <li
                  key={i}
                  className={"home-header-ul-li " + (i === 0 ? " active" : "")}
                >
                  {e.title}
                </li>
              );
            })}
          </ul>
          <Box position={"absolute"} right={"35px"}>
            xxx
          </Box>
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
