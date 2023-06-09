import React from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import LanguageSelect from "../LanguageSelect";

import NetflixLogo from "../NetflixLogo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const CustomButton = styled(Button)({
    width: "75px",
    height: "32px",
    marginLeft: "12px",
    padding: "0.25rem 1rem",
  });

  return (
    <Box
      height={"5.375rem"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingLeft={"2rem"}
      paddingRight={"2rem"}
    >
      <NetflixLogo />
      <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
        <LanguageSelect />
        <CustomButton variant="contained" onClick={() => navigate("/signin")}>
          Sign in
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Header;
