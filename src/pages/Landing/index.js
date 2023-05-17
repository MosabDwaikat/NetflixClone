import { Box } from "@mui/system";
import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";

const Landing = () => {
  return (
    <Box bgcolor={"rgb(0, 8, 29)"}>
      <Header />
      <Box paddingLeft={"2rem"} paddingRight={"2rem"}>
        <Hero />
        <Features />
      </Box>
    </Box>
  );
};

export default Landing;
