import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <Box
      margin={"20px auto 0"}
      width={"100%"}
      maxWidth={"980px"}
      boxSizing={"border-box"}
      padding={"0 4%"}
    >
      <Box width={"100%"} margin={"auto"}>
        <Box display={"flex"} fontSize={"25px"} color={"rgb(255, 255, 255)"}>
          <Box marginRight={"18px"} sx={{ cursor: "pointer" }}>
            <FaFacebookF />
          </Box>
          <Box marginRight={"18px"} sx={{ cursor: "pointer" }}>
            <FaInstagram />
          </Box>
          <Box marginRight={"18px"} sx={{ cursor: "pointer" }}>
            <FaTwitter />
          </Box>
          <Box marginRight={"18px"} sx={{ cursor: "pointer" }}>
            <FaYoutube />
          </Box>
        </Box>

        <Box
          color={"rgb(115, 115, 115)"}
          display={"grid"}
          marginBottom={"36px"}
          sx={{
            ul: {
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              padding: 0,
            },
            li: {
              marginTop: "12px",
              flexBasis: "50%",
              fontSize: "0.875rem",
              "@media (min-width:800px)": {
                flexBasis: "25%",
              },
            },
          }}
        >
          <ul className="footer-ul">
            {listItems.map((e, i) => {
              return (
                <li key={i} className="footer-li">
                  <Typography
                    display={"inline"}
                    variant="body2"
                    sx={{
                      "&:hover": { textDecoration: "underline" },
                      cursor: "pointer",
                    }}
                  >
                    {e.title}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>
      <Box marginBottom={"20px"}>
        <Button
          size="large"
          sx={{
            color: "rgb(115, 115, 115)",
            border: "1px solid white",
            "&:hover": {
              backgroundColor: "transparent",
              color: "rgb(255, 255, 255)",
            },
          }}
          onClick={(e) => (e.target.innerText = "477-477")}
        >
          Service Code
        </Button>
      </Box>
      <Typography
        fontSize={"11px"}
        color={"rgb(128, 128, 128)"}
        marginBottom={"15px"}
      >
        © 1997-2023 Netflix, Inc.
      </Typography>
    </Box>
  );
};

export default HomeFooter;

const listItems = [
  { title: "Audio Description", url: "/" },
  { title: "Help Center", url: "/" },
  { title: "Gift Cards", url: "/" },
  { title: "Media Center", url: "/" },
  { title: "Investor Relations", url: "/" },
  { title: "Jobs", url: "/" },
  { title: "Terms of Use", url: "/" },
  { title: "Privacy", url: "/" },
  { title: "Legal Notices", url: "/" },
  { title: "Cookie Preferences", url: "/" },
  { title: "Corporate Information", url: "/" },
  { title: "Contact Us", url: "/" },
];
