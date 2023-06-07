import React, { useState, useContext } from "react";
import SearchContext from "../../contexts/SearchContext";

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
