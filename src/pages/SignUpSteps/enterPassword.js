import styled from "@emotion/styled";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const EnterPassword = ({ Email }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(Email || "");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (error) {
      if (!value || value.length < 6) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };
  const handleBlur = (e) => {
    const value = e.target.value;
    if (!value || value.length < 6) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = () => {
    console.log(email, password);

    const info = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/register", info)
      .then((res) => {
        console.log(res);
        navigate("../signin");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response);
      });
  };

  return (
    <Box padding={"130px"} maxWidth={"400px"}>
      <Typography variant="body2" color={"rgb(51, 51, 51)"}>
        STEP 1 OF 3
      </Typography>
      <Typography fontSize={"32px"} fontWeight={700} color={"rgb(51, 51, 51)"}>
        Joining Netflix is easy.
      </Typography>
      <Typography variant="body1" color={"rgb(51, 51, 51)"}>
        Enter your password and you'll be watching in no time.
      </Typography>

      <TextField
        label="Email or phone number"
        required
        name="email"
        value={email}
        onChange={handleEmailChange}
        variant="filled"
        fullWidth
        sx={{
          "& .MuiFilledInput-root": {
            //   backgroundColor: "rgb(51, 51, 51)",
            "& input": {
              color: "rgb(51, 51, 51)",
            },
          },

          "& .MuiInputLabel-root": {
            color: "rgb(51, 51, 51)",
          },
          marginBottom: "20px",
          marginTop: "30px",
        }}
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        type={showPassword ? "text" : "password"}
        required
        variant="filled"
        fullWidth
        onBlur={handleBlur}
        helperText={error && "password is required with at least 6 charachters"}
        error={error}
        InputProps={{
          endAdornment: (
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </IconButton>
          ),
        }}
        sx={{
          "& .MuiFilledInput-root": {
            //   backgroundColor: "rgb(51, 51, 51)",
            "& input": {
              color: "rgb(51, 51, 51)",
            },
          },

          "& .MuiInputLabel-root": {
            color: "rgb(51, 51, 51)",
          },
          marginBottom: "36px",
        }}
      />
      <CustomButton
        variant="contained"
        size="large"
        fullWidth
        onClick={handleSubmit}
      >
        Sign Up
      </CustomButton>
    </Box>
  );
};

export default EnterPassword;
const CustomButton = styled(Button)({
  minWidth: "195px",
  height: "68px",
  fontSize: "1.5rem",
  padding: "0.75rem 1.5rem",
});
