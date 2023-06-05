import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { IoMdArrowDropup } from "react-icons/io";
import { Typography } from "@mui/material";
import {
  MdHelpOutline,
  MdOutlineAccountCircle,
  MdOutlineEdit,
} from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import kids from "./kids.png";
import { useAuth } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomeHeaderDropdown = ({ onMouseEnter, onMouseLeave }) => {
  const { logout, authed } = useAuth();
  const navigate = useNavigate();

  const handleSignout = async () => {
    await logout();
  };
  useEffect(() => {
    if (!authed) {
      navigate("/");
    }
  }, [authed, navigate]); // navigate is added for the lint to stop the warning - its so annoying

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      position={"absolute"}
      top={"60px"}
      right={0}
      sx={{
        width: "200px",
        maxWidth: 360,
        color: "white",
        bgcolor: "rgba(0,0,0,0.9)",
      }}
    >
      <Box
        display={"inline"}
        position={"absolute"}
        top={"-22px"}
        right={"24px"}
      >
        <IoMdArrowDropup color="white" fontSize={"28px"} />
      </Box>
      <nav aria-label="main">
        <List>
          {ListItems.map((e, i) => {
            return (
              <ListItem disablePadding key={i}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "white", fontSize: "25px" }}>
                    {e.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">{e.title}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
      <Divider color={"white"} />
      <nav aria-label="secondary">
        <List>
          <ListItem disablePadding onClick={handleSignout}>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography textAlign={"center"} variant="body2">
                    Sign out of Netflix
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default HomeHeaderDropdown;
const ListItems = [
  { title: "Kids", icon: <img src={kids} alt="" /> },
  { title: "Manage Profiles", icon: <MdOutlineEdit /> },
  { title: "Transfer Profile", icon: <BiTransfer /> },
  { title: "Account", icon: <MdOutlineAccountCircle /> },
  { title: "Help Center", icon: <MdHelpOutline /> },
];
