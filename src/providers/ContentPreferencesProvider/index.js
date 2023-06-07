import React, { useState, useContext, useEffect } from "react";
import ContentPreferencesContext from "../../contexts/ContentPreferencesContext";
import axios from "axios";
import { useAuth } from "../AuthProvider";

export const ContentPreferencesProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const [list, setList] = useState([]);
  const { authed } = useAuth();

  useEffect(() => {
    if (authed) {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get("http://localhost:5000/list", config).then((res) => {
          setList(res.data);
        });
      } catch (error) {
        console.log("Error retrieving Firestore data:", error);
      }
    }
  }, [authed]);
  useEffect(() => {
    if (authed)
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get("http://localhost:5000/likes", config).then((res) => {
          setLikes(res.data);
        });
      } catch (error) {
        console.log("Error retrieving Firestore data:", error);
      }
  }, [authed]);

  return (
    <ContentPreferencesContext.Provider
      value={{ likes, setLikes, list, setList }}
    >
      {children}
    </ContentPreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(ContentPreferencesContext);
