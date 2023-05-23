import { Box } from "@mui/material";
import React from "react";
import HomeHeader from "../../components/HomeHeader";
import HomeHero from "./HomeHero.jpg";

const Home = () => {
  return (
    <Box>
      <HomeHeader />
      <img src={HomeHero} alt="" style={{ width: "100%" }} />
    </Box>
  );
};

export default Home;
