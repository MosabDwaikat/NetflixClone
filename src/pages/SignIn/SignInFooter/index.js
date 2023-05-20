import { Box, Typography } from "@mui/material";
import React from "react";
import LanguageSelect from "../../../components/LanguageSelect";

const SignInFooter = () => {
  return (
    <Box
      width={"100%"}
      boxSizing={"border-box"}
      paddingY={"30px"}
      bgcolor={"rgba(0, 0, 0, 0.75)"}
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
