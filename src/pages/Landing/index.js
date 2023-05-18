import { Box } from "@mui/system";
import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import ControlledAccordions from "../../components/Accordion";
import Footer from "../../components/Footer";
import { useTheme } from "@mui/material";

const Landing = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={"rgb(0, 8, 29)"}>
      <Header />
      <Box paddingLeft={"2rem"} paddingRight={"2rem"}>
        <Hero />
        <Features />
        <Box
          paddingLeft={"6rem"}
          paddingBottom={"6rem"}
          paddingRight={"6rem"}
          marginTop={"52px"}
          sx={{
            [theme.breakpoints.down("sm")]: {
              padding: 0,
            },
          }}
        >
          <ControlledAccordions />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
