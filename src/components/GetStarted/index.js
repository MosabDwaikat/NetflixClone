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

const GetStarted = ({ hero }) => {
  const theme = useTheme();

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
