import { Box, Typography } from "@mui/material";
import React from "react";
import LanguageSelect from "../LanguageSelect";

const SignInFooter = ({ bgcolor }) => {
  return (
    <Box
      width={"100%"}
      boxSizing={"border-box"}
      paddingY={"30px"}
      bgcolor={bgcolor || "rgba(0, 0, 0, 0.75)"}
    >
      <Box width={"90%"} maxWidth={"1000px"} margin={"auto"}>
        <Typography
          variant="body1"
          display={"inline"}
          color={"rgb(115, 115, 115)"}
          sx={{ "&:hover": { textDecoration: "underline" }, cursor: "pointer" }}
        >
          Questions? Contact us.
        </Typography>
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
              flexBasis: "100%",
              fontSize: "0.875rem",
              "@media (min-width:600px)": {
                flexBasis: "50%",
              },
              "@media (min-width:960px)": {
                flexBasis: "33.3333333%",
              },
              "@media (min-width:1280px)": {
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
        <LanguageSelect />
      </Box>
    </Box>
  );
};

export default SignInFooter;

const listItems = [
  { title: "FAQ", url: "/" },
  { title: "Help Center", url: "/" },
  { title: "Terms of Use", url: "/" },
  { title: "Privacy", url: "/" },
  { title: "Cookie Preferences", url: "/" },
  { title: "Corporate Information", url: "/" },
];
