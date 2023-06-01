import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Button,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = ({ hero }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const CustomButton = styled(Button)({
    minWidth: "195px",
    width: "195px",
    height: "56px",
    marginLeft: "8px",
    fontSize: "1.5rem",
    padding: "0.75rem 1.5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "16px",
    },
  });
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (error) {
      if (!value || !validateEmail(value)) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };
  const handleBlur = (e) => {
    const value = e.target.value;
    if (!value || !validateEmail(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setError(true);
      return;
    }
    axios
      .post("http://localhost:5000/auth/validateEmail", { email: email })
      .then((res) => {
        navigate("/SignIn");
      })
      .catch((error) => {
        if (error.response.data.message === "email does not exist") {
          navigate("/SignUp");
        } else {
          alert(error);
        }
      });
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box
      width={hero ? "66.66666666666666%" : "100%"}
      marginTop={"16px"}
      sx={{
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }}
    >
      <Typography variant="h3" color={"white"}>
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>
      <Box
        overflow={"visible"}
        maxWidth={"36.625rem"}
        sx={{
          width: "100%",
          paddingTop: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              alignItems: "flex-start",
            },
          }}
        >
          <TextField
            label="Email address"
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            variant="filled"
            helperText={error && "Email is required"}
            error={error}
            fullWidth
            sx={{
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "1px solid white",
              height: "56px",
              boxSizing: "border-box",
              minWidth: "12.5rem",
            }}
          />
          <CustomButton
            variant="contained"
            onClick={handleSubmit}
            size="large"
            type="submit"
          >
            {"Get Started >"}
          </CustomButton>
        </FormControl>
      </Box>
    </Box>
  );
};

export default GetStarted;
