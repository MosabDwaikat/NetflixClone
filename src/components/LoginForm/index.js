import styled from "@emotion/styled";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import React, { useState } from "react";

const LoginForm = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const CustomButton = styled(Button)({
    minWidth: "195px",
    height: "48px",
    fontSize: "1.5rem",
    padding: "0.75rem 1.5rem",
    // [theme.breakpoints.down("sm")]: {
    //   marginLeft: 0,
    //   marginTop: "16px",
    // },
  });
  return (
    <Box paddingBottom={"50px"}>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          label="Email or phone number"
          required
          variant="filled"
          fullWidth
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "rgb(51, 51, 51)",
              "& input": {
                color: "white",
              },
            },
            "&:hover": {
              backgroundColor: "rgb(51, 51, 51)",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            marginBottom: "16px",
          }}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          required
          variant="filled"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </IconButton>
            ),
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "rgb(51, 51, 51)",
              "& input": {
                color: "white",
              },
            },
            "&:hover": {
              backgroundColor: "rgb(51, 51, 51)",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            marginBottom: "16px",
          }}
        />

        <CustomButton variant="contained" size="large" fullWidth>
          Sign In
        </CustomButton>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{ color: "white", paddingRight: "2px" }}
              />
            }
            label={
              <Typography
                variant="body2"
                color="rgb(179, 179, 179)"
                sx={{ fontSize: "14px" }}
              >
                Remember me
              </Typography>
            }
            sx={{ color: "white" }}
          />
          <Typography
            variant="body2"
            color={"rgb(179, 179, 179)"}
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Need help?
          </Typography>
        </Box>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
