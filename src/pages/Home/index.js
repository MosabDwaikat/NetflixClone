import { Box } from "@mui/material";
import React from "react";
import HomeHeader from "../../components/HomeHeader";
import HomeHero from "../../components/HomeHero";

const Home = () => {
  return (
    <Box>
      <HomeHeader />
      <HomeHero />
    </Box>
  );
};

export default Home;
