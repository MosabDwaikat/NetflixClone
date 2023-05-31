import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import HomeHero from "../../components/HomeHero";
import HomeCarousel from "../../components/HomeCarousel";
import ContentCard from "../../components/ContentCard";
//******************************** */
import HoverPopup from "../../components/HoverPopup";
import HomeMain from "../../components/HomeMain";
import HomeFooter from "../../components/HomeFooter";
import InfoPanel from "../../components/InfoPanel";
import axios from "axios";

const Home = () => {
  const [popupProps, setPopupProps] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    display: "hide popup",
    content: null,
  });
  const [infoProps, setInfoProps] = useState({
    initialPosition: { x: 0, y: 0 },
    initialDimensions: { width: 0, height: 0 },
    display: "hideInfoPanel",
    content: null,
  });
  const [showVideo, setShowVideo] = useState(true);
  const [muteVideo, setMuteVideo] = useState(true);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };
  const handleVideoButton = () => {
    if (!showVideo) {
      //play video
      setShowVideo(true);
    } else if (muteVideo) {
      setMuteVideo(false);
      //unmute
    } else {
      setMuteVideo(true);
      //mute
    }
  };
  const [heroPreview, setHeroPreview] = useState({});

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/").then((res) => {
        setHeroPreview(res.data);
      });
    } catch (error) {
      console.error("Error retrieving Firestore data:", error);
    }
  }, []);
  const sliders = [
    {
      title: "Popular on Netflix",
      content: [
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
      ],
    },
    {
      title: "Trending Now",
      content: [
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
      ],
    },
    {
      title: "My List",
      content: [
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
        heroPreview,
      ],
    },
  ];

  return (
    <Box bgcolor={"rgb(20, 20, 20)"}>
      <HomeHeader />
      <HomeHero
        heroPreview={heroPreview}
        showVideo={showVideo}
        muteVideo={muteVideo}
        handleVideoEnd={handleVideoEnd}
      />
      <HomeMain
        heroPreview={heroPreview}
        showVideo={showVideo}
        muteVideo={muteVideo}
        handleVideoButton={handleVideoButton}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        zIndex={10}
        width={"100%"}
        top={0}
        left={0}
      >
        {popupProps.display === "view popup" && (
          <HoverPopup
            popupProps={popupProps}
            setPopupProps={setPopupProps}
            setInfoProps={setInfoProps}
          />
        )}
        {infoProps.display === "showInfoPanel" && (
          <InfoPanel infoProps={infoProps} setInfoProps={setInfoProps} />
        )}
        <Box
          zIndex={10}
          paddingBottom={"50px"}
          sx={{
            background:
              "linear-gradient(transparent 0, transparent 100px, rgb(20,20,20) 200px)",
          }}
        >
          {sliders.map((e, i) => {
            return (
              <HomeCarousel title={e.title} key={i}>
                {e.content.map((element, index) => {
                  return (
                    <ContentCard
                      key={index}
                      content={heroPreview}
                      setPopupProps={setPopupProps}
                    />
                  );
                })}
              </HomeCarousel>
            );
          })}
        </Box>
        <HomeFooter />
      </Box>
    </Box>
  );
};

export default Home;

// const heroPreview = {
//   title: "The 100",
//   img: the100,
//   video: "the100.mp4",
//   logo: the100Logo,
//   description: `A century after Earth was devastated by a nuclear apocalypse, 100
//   space station residents are sent to the planet to determine whether
//   it's habitable.`,
//   info: {
//     type: "TV show", //or movie
//     match: 99, //percentage
//     maturity: 18, //+18
//     length: "7 Seasons", //seasons, episodes, or movie time
//     quality: "HD", //HD, 4K
//   },
//   tags: ["Dystopian", "Violent", "Sci-Fi TV"],
// };

// const sliders = [
//   {
//     title: "Popular on Netflix",
//     content: [
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//     ],
//   },
//   {
//     title: "Trending Now",
//     content: [
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//     ],
//   },
//   {
//     title: "My List",
//     content: [
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//       heroPreview,
//     ],
//   },
// ];
