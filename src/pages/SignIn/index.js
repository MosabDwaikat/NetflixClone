import { Box } from "@mui/material";
import React from "react";
import bg2 from "./bg2.jpg";
import LoginPanel from "../../components/LoginPanel";
import NetflixLogo from "../../components/NetflixLogo";
import SignInFooter from "./SignInFooter";

const SignIn = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      bgcolor={{
        xs: "rgb(0,0,0)",
        sm: `none`,
      }}
      sx={{
        backgroundImage: {
          sm: `linear-gradient(rgba(0, 0, 0, 0.5) 0px, transparent),url(${bg2})`,
        },
        backgroundSize: "cover  ",
        backgroundPosition: "center",
      }}
    >
      <Box
        height={"90px"}
        width={"100%"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <NetflixLogo
          sx={{ width: "167px", height: "45px", marginLeft: "3%" }}
        />
      </Box>
      <LoginPanel />
      <SignInFooter />
    </Box>
  );
};

export default SignIn;
