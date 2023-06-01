import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";

const LanguageSelect = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <FormControl
      variant="filled"
      size="small"
      sx={{ m: 1, minWidth: 100, height: "32px" }}
    >
      <Select
        id="demo-simple-select-filled"
        value={language}
        onChange={handleChange}
        sx={{
          height: "32px",
          paddingBottom: "16px",
        }}
      >
        <MenuItem value={"en"} sx={{ height: "32px" }}>
          English
        </MenuItem>
        <MenuItem value={"ar"} sx={{ height: "32px" }}>
          العربية
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
