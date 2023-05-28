import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "./HomeCarousel.css";

const HomeCarousel = ({ children, title }) => {
  const [viewDots, setViewDots] = useState(false);
  const [viewExplore, setViewExplore] = useState(false);
  const [expandExplore, setExpandExplore] = useState(false);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        zIndex={1000}
        display={viewDots ? "flex" : "none"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"rgba(0,0,0,0.5)"}
        color={"white"}
        width={"4%"}
        height={"100%"}
        position={"absolute"}
        left={"-4% "}
        top={0}
        fontSize={"36px"}
        sx={{ cursor: "pointer", "&:hover": { fontSize: "44px" } }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </Box>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        display={viewDots ? "flex" : "none"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"rgba(0,0,0,0.5)"}
        color={"white"}
        width={"4%"}
        height={"100%"}
        position={"absolute"}
        right={"-4%"}
        top={0}
        fontSize={"36px"}
        sx={{ cursor: "pointer", "&:hover": { fontSize: "44px" } }}
        onClick={onClick}
      >
        <FaAngleRight />
      </Box>
    );
  };

  var settings = {
    swipe: false,
    arrows: true,
    dots: viewDots,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    centerPadding: "50px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: function (i) {
      return <Box width={"12px"} height={"2px"}></Box>;
    },
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box
      marginTop={"3vw"}
      paddingX={"4%"}
      onMouseEnter={() => setViewExplore(true)}
      onMouseLeave={() => setViewExplore(false)}
    >
      <Typography
        variant="h3"
        display={"inline"}
        fontSize={"max(1.4vw,12px)"}
        color={"white"}
        marginLeft={"4px"}
        onMouseEnter={() => setExpandExplore(true)}
        onMouseLeave={() => setExpandExplore(false)}
        sx={{ cursor: "pointer" }}
      >
        {title}
        <Box
          display={"inline-flex"}
          maxWidth={viewExplore ? "100px" : 0}
          alignItems={"center"}
          color={"rgb(84, 185, 197)"}
          width={"100px"}
        >
          <Typography
            marginLeft={"5px"}
            display={"inline"}
            fontSize={"max(0.9vw,8px)"}
            fontWeight={700}
            marginRight={"0px"}
            maxWidth={expandExplore ? "90px" : 0}
            whiteSpace={"nowrap"}
            sx={{
              opacity: expandExplore ? 1 : 0,
              transition: "max-width 1s,opacity 1s,transform .75s",
            }}
          >
            Explore all
          </Typography>

          <IoIosArrowForward fontSize={expandExplore ? "14px" : "20px"} />
        </Box>
      </Typography>
      <Box
        onMouseEnter={() => setViewDots(true)}
        onMouseLeave={() => setViewDots(false)}
        marginTop={"0.5em"}
      >
        <Slider {...settings} className="Slider">
          {children}
        </Slider>
      </Box>
    </Box>
  );
};

export default HomeCarousel;
