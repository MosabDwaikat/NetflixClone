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
import { usePreferences } from "../../providers/ContentPreferencesProvider";
import { useAuth } from "../../providers/AuthProvider";

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
  const { setAuthed } = useAuth();
  const { list } = usePreferences();

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
      const token = localStorage.getItem("token");
      if (!token)
        return () => {
          setAuthed(false);
        };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.get("http://localhost:5000/hero", config).then((res) => {
        setHeroPreview(res.data);
      });
    } catch (error) {
      console.error("Error retrieving Firestore data:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [myList, setMyList] = useState({ title: "", content: [] });
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token)
        return () => {
          setAuthed(false);
        };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.get("http://localhost:5000/list/content", config).then((res) => {
        setMyList(res.data);
      });
    } catch (error) {
      console.error("Error retrieving Firestore data:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const [slidersContent, setSlidersContent] = useState([]);
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token)
        return () => {
          setAuthed(false);
        };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.get("http://localhost:5000/sliders", config).then((res) => {
        setSlidersContent(res.data);
      });
    } catch (error) {
      console.log("Error retrieving Firestore data:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <HomeCarousel title={myList.title}>
            {myList.content.map((element, index) => {
              return (
                <ContentCard
                  key={index}
                  content={element}
                  setPopupProps={setPopupProps}
                />
              );
            })}
          </HomeCarousel>
          {slidersContent.map((e, i) => {
            return (
              <HomeCarousel title={e.title} key={i}>
                {e.content.map((element, index) => {
                  return (
                    <ContentCard
                      key={index}
                      content={element}
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
