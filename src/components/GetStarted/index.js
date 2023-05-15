import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Button,
  useTheme,
} from "@mui/material";
import React from "react";

const GetStarted = () => {
  const theme = useTheme();
  const CustomTextField = styled(TextField)({
    "& input": {
      color: "white",
    },
    "& .MuiInput-root": {
      color: "white",
      height: "86px",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
  });
  const CustomButton = styled(Button)({
    backgroundColor: "rgb(229, 9, 20)",

    minWidth: "195px",
    width: "195px",
    color: "white",
    height: "56px",
    marginLeft: "8px",
    fontSize: "1.5rem",
    fontWeight: 500,
    textTransform: "none",
    lineHeight: 1,
    padding: "0.75rem 1.5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "16px",
    },
    ":hover": {
      backgroundColor: "rgb(193, 17, 25);",
    },
  });
  return (
    <Box
      width={"66.66666666666666%"}
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
          <CustomTextField
            id="filled-basic"
            label="Email address"
            required
            variant="filled"
            fullWidth
            sx={{
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "1px solid white",
              height: "56px",
              boxSizing: "border-box",
              minWidth: "12.5rem",
            }}
          />
          <CustomButton variant="contained" size="large">
            {"Get Started >"}
          </CustomButton>
        </FormControl>
      </Box>
    </Box>
  );
};

export default GetStarted;
