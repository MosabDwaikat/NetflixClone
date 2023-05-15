import React from "react";
import { Container, Box, Typography, useTheme } from "@mui/material";
import GetStarted from "../GetStarted";
import hero from "./hero.jpg";
import styled from "@emotion/styled";

const Hero = () => {
  const bg = `linear-gradient(65.68deg, rgba(0, 8, 29, 0.6) 9.51%,
    rgba(53, 13, 49, 0.6) 72.89%, rgba(132, 5, 25, 0.6) 101.01%),
    linear-gradient(102.21deg, rgba(0, 0, 0, 0.04) 16.09%,
    rgba(1, 1, 1, 0.17) 39.27%, rgba(1, 1, 1, 0.24) 64.25%,
    rgba(4, 4, 4, 0.8) 96.63%),url( ${hero}  )`;
  const theme = useTheme();

  return (
    <div>
      <Box>
        <Box
          boxSizing={"border-box"}
          borderRadius={"16px"}
          display={"flex"}
          alignItems={"center"}
          minHeight={"37.5rem"}
          width={"100%"}
          sx={{
            backgroundImage: bg,
            backgroundSize: "cover  ",
            backgroundPosition: "center",
          }}
        >
          <Box
            minWidth={"280px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            margin={0}
            paddingTop={{ xs: "3.75rem", sm: "3.75rem" }}
            paddingRight={{ xs: "min(10%, 1rem)", sm: "min(10%, 6rem)" }}
            paddingBottom={{ xs: "3rem", sm: "4rem" }}
            paddingLeft={{ xs: "min(10%, 1rem)", sm: "min(10%, 6rem)" }}
          >
            <Typography
              variant="h1"
              color={"white"}
              marginTop={"16px"}
              width={"66.66666666666666%"}
            >
              Unlimited movies, TV shows, and more
            </Typography>
            <Typography variant="body1" color={"white"} marginTop={"16px"}>
              Plans now start at USD3.99/month.
            </Typography>
            <GetStarted />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
