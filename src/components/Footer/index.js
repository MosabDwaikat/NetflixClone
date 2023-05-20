import { Box, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import LanguageSelect from "../LanguageSelect";

const Footer = () => {
  return (
    <Box>
      <Typography
        variant="body1"
        color={"white"}
        sx={{ textDecoration: "underline", cursor: "pointer" }}
      >
        Questions? Contact us.
      </Typography>
      <Box color={"white"} display={"grid"} marginBottom={"36px"}>
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
      <LanguageSelect />
      <Typography variant="body2" color={"white"} marginTop={"36px"}>
        Netflix <span>{location}</span>
      </Typography>
    </Box>
  );
};

export default Footer;

const location = "Palestinian Territories";
const listItems = [
  { title: "FAQ", url: "" },
  { title: "Help Center", url: "" },
  { title: "Account", url: "" },
  { title: "Media Center", url: "" },
  { title: "Investor Relations", url: "" },
  { title: "Jobs", url: "" },
  { title: "Ways to Watch", url: "" },
  { title: "Terms of Use", url: "" },
  { title: "Privacy", url: "" },
  { title: "Cookie Preferences", url: "" },
  { title: "Corporate Information", url: "" },
  { title: "Contact Us", url: "" },
  { title: "Speed Test", url: "" },
  { title: "Legal Notices", url: "" },
  { title: "Only on Netflix", url: "" },
];
