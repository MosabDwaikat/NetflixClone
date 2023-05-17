import { Box } from "@mui/material";
import React from "react";
import Feature from "../Feature";

const Features = () => {
  const bg =
    "linear-gradient(146.51deg, rgba(0, 8, 29, 0.75) 0%, rgba(53, 13, 49, 0.6) 80.34%, rgba(132, 5, 25, 0.6) 110.79%);";

  return (
    <Box marginTop={"24px"} borderRadius={"16px"} sx={{ backgroundImage: bg }}>
      {data.map((e, i) => {
        return (
          <>
            <Feature key={i} data={e} picPos={i % 2 === 0 ? "right" : "left"} />
            {i !== data.length - 1 && (
              <Box
                // width={"100%"}
                height={"8px"}
                marginLeft={"min(10%, 6rem)"}
                marginRight={"min(10%, 6rem)"}
                bgcolor={"rgba(255, 255, 255, 0.1)"}
              />
            )}
          </>
        );
      })}
    </Box>
  );
};

export default Features;
const data = [
  {
    head: "Enjoy on your TV",
    body: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png",
  },
  {
    head: "Watch everywhere",
    body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png",
  },
  {
    head: "Create profiles for kids",
    body: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en.png",
  },
  {
    head: "Download your shows to watch offline",
    body: "Save your favorites easily and always have something to watch.",
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png",
  },
];
