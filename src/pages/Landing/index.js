import { Box } from "@mui/system";
import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import ControlledAccordions from "../../components/Accordion";

const Landing = () => {
  return (
    <Box bgcolor={"rgb(0, 8, 29)"}>
      <Header />
      <Box paddingLeft={"2rem"} paddingRight={"2rem"}>
        <Hero />
        <Features />
        <ControlledAccordions />
      </Box>
    </Box>
  );
};

export default Landing;
