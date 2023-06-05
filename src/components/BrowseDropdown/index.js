import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { IoMdArrowDropup } from "react-icons/io";
import { Typography } from "@mui/material";

const BrowseDropdown = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      borderTop={"2px solid white"}
      position={"absolute"}
      top={"60px"}
      //   left={"0"}
      sx={{
        width: "200px",
        maxWidth: 360,
        color: "white",
        bgcolor: "rgba(0,0,0,0.9)",
      }}
    >
      <Box display={"inline"} position={"absolute"} top={"-22px"} left={"86px"}>
        <IoMdArrowDropup color="white" fontSize={"28px"} />
      </Box>
      <nav aria-label="main">
        <List>
          {ListItems.map((e, i) => {
            return (
              <ListItem disablePadding key={i}>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography textAlign={"center"} variant="body2">
                        {e.title}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default BrowseDropdown;
const ListItems = [
  { title: "Home" },
  { title: "TV Shows" },
  { title: "Movies" },
  { title: "Latest" },
  { title: "My List" },
  { title: "Browse by Language" },
];
