import React from "react";
import LoginForm from "../LoginForm";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPanel = () => {
  const navigate = useNavigate();
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
        <Box marginTop={"16px"}>
          <Typography
            color={"rgb(115, 115, 115)"}
            variant="body1"
            display={"inline"}
          >
            {"New to Netflix? "}
          </Typography>
          <Typography
            display={"inline"}
            color={"white"}
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => navigate("/SignUp")}
          >
            Sign up now
          </Typography>
        </Box>
        <Box marginTop={"11px"}>
          <Typography
            color={"rgb(140, 140, 140)"}
            variant="body2"
            display={"inline"}
          >
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Typography>
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
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPanel;
