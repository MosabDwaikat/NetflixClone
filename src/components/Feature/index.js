import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Feature = ({ data, picPos }) => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      paddingTop={"12px"}
      paddingBottom={"12px"}
      paddingLeft={"min(10%, 6rem)"}
      paddingRight={"min(10%, 6rem)"}
      sx={{
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "flex-start",
        },
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        order={picPos === "left" ? 1 : 0}
        width={"50%"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      >
        <Typography
          variant="body1"
          fontSize={"2rem"}
          fontWeight={700}
          color={"white"}
        >
          {data.head}
        </Typography>
        <Typography
          variant="body2"
          fontSize={"1rem"}
          fontWeight={400}
          color={"white"}
        >
          {data.body}
        </Typography>
      </Box>
      <Box
        width={"50%"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      >
        <img src={data.img} alt="" width={"100%"} />
      </Box>
    </Box>
  );
};

export default Feature;
