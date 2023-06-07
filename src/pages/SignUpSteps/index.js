import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import NetflixLogo from "../../components/NetflixLogo";
import { useLocation, useNavigate } from "react-router-dom";
import EnterPassword from "./enterPassword.js";
import SignInFooter from "../../components/SignInFooter";
import Finish from "./finish";

const SignUpSteps = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.data;

  return (
    <Box width={"100%"} bgcolor={"white"}>
      <Box
        height={{ xs: "45px", md: "75px", lg: "90px" }}
        boxSizing={"border-box"}
        borderBottom={"1px solid rgb(230,230,230)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginX={"3%"}
      >
        <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <NetflixLogo
            sx={{
              width: "167px",
              height: { xs: "25px", md: "35px", lg: "45px" },
            }}
          />
        </Box>
        <Typography
          color={"#333"}
          fontSize={"19px"}
          fontWeight={"500"}
          display={"inline"}
          height={"auto"}
          sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
          onClick={() => navigate("/signin")}
        >
          Sign In
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {page === 1 && <Finish setPage={setPage} />}
          {page === 2 && <EnterPassword Email={email} />}
        </Box>
        <SignInFooter bgcolor={"rgb(243, 243, 243)"} />
      </Box>
    </Box>
  );
};

export default SignUpSteps;
