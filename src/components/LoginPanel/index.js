import React from "react";
import LoginForm from "../LoginForm";
import { Box, Typography } from "@mui/material";

const LoginPanel = () => {
  return (
    <Box
      bgcolor={"rgba(0,0,0,.75);"}
      paddingTop={"60px"}
      paddingX={{ xs: "5%", sm: "68px" }}
      paddingBottom={"40px"}
      marginBottom={"90px"}
      width={{ xs: "auto", sm: "320px" }}
    >
      <Typography
        variant="h2"
        color={"white"}
        marginX={"auto"}
        marginBottom={"0.67em"}
      >
        Sign In
      </Typography>
      <LoginForm />
      <Box paddingBottom={{ xs: "0", sm: "100px" }}>
        <Typography
          color={"rgb(115, 115, 115)"}
          variant="body1"
          marginTop={"16px"}
        >
          New to Netflix?{" "}
          <Typography
            display={"inline"}
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Sign up now
          </Typography>
        </Typography>
        <Typography
          color={"rgb(140, 140, 140)"}
          variant="body2"
          marginTop={"11px"}
        >
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <Typography
            display={"inline"}
            variant="body2"
            color={"rgb(0, 113, 235)"}
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Learn more.
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPanel;
