import { Box } from "@mui/system";
import { useRef } from "react";

const ContentCard = ({ content, setPopupProps }) => {
  const timeoutRef = useRef(null);

  const handleMouseEnter = (e) => {
    timeoutRef.current = setTimeout(() => {
      const element = e.target;
      const top =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop;

      const popup = {
        x: element.getBoundingClientRect().left + "px",
        y: top + "px",
        width: element.getBoundingClientRect().width,
        height: element.getBoundingClientRect().height,
        display: "view popup",
        content: content,
      };
      setPopupProps(popup);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setPopupProps({ display: "hide popup" });
  };

  return (
    <Box
      // width={"calc(100% - 10px)"}
      zIndex={5}
      marginX={"4px"}
      display={"flex"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ cursor: "pointer" }}
    >
      <img
        src={content.img}
        alt=""
        width={"100%"}
        height={"100%"}
        className={`ContentCardImg`}
      />
    </Box>
  );
};

export default ContentCard;
