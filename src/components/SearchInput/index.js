import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../providers/SearchProvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const SearchInput = ({ search }) => {
  const { searchInput, setSearchInput } = useSearch();
  const navigate = useNavigate();
  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("q", e.target.value);
    if (e.target.value === "") navigate("/home");
    else navigate(`/Search?${urlSearchParams.toString()}`);
  };

  return (
    <Box
      height={"100%"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Box margin={"20px"}>
        <Box
          display={"inline-block"}
          position={"relative"}
          className={"xxxxxx"}
          sx={{
            ":after": {
              content: '""',
              background: "#ffffff",
              width: "3px",
              height: "10px",
              position: "absolute",
              top: "22px",
              right: "-1px",
              transform: "rotate(135deg)",
            },
          }}
        >
          <CustomInput
            type="text"
            value={searchInput}
            placeholder="Search Here"
            required
            onChange={(e) => handleChange(e)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchInput;

const CustomInput = styled.input`
  color: #ffffff;
  font-size: 14px;
  background: transparent;
  width: 1px;
  height: 1px;
  padding: 10px;
  border: solid 3px #ffffff;
  outline: none;
  border-radius: 35px;
  transition: width 0.5s;

  &::placeholder {
    color: #ffffff;
    opacity: 0;
    transition: opacity 150ms ease-out;
  }

  &:focus::placeholder {
    opacity: 1;
  }

  &:focus,
  &:not(:placeholder-shown) {
    width: 20vw;
  }
`;
