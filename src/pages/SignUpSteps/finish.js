import styled from "@emotion/styled";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import finish from "./finish.png";

const Finish = ({ setPage }) => {
  const handleNext = async () => {
    setPage(2);
  };

  return (
    <Box
      padding={"160px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <img src={finish} alt="" />
      <Box maxWidth={"340px"} textAlign={"center"}>
        <Typography variant="body2">STEP 1 OF 3</Typography>
        <Typography fontSize={"32px"} fontWeight={700}>
          Finish setting up your account
        </Typography>
        <Typography variant="body1">
          Netflix is personalized for you.
        </Typography>
        <Typography variant="body1">
          Create a password to watch on any device at any time.
        </Typography>
      </Box>

      <CustomButton
        variant="contained"
        size="large"
        fullWidth
        onClick={handleNext}
      >
        Next
      </CustomButton>
    </Box>
  );
};

export default Finish;
const CustomButton = styled(Button)({
  minWidth: "195px",
  height: "68px",
  width: "360px",
  fontSize: "1.5rem",
  padding: "0.75rem 1.5rem",
});
