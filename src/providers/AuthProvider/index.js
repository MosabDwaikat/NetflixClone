import React, { useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

export const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false);

  const login = async (info) => {
    console.log("before");
    const result = await loginToServer(info);
    console.log("result", result);
    if (result) {
      console.log("user has logged in");
      setAuthed(true);
    }
  };

  const loginToServer = async (info) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/Login",
        info
      );
      console.log(response);
      localStorage.setItem("token", response.data.token);
      if (response.data.message === "User logged successfully") {
        return response.data.message;
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.slice(5));
    }
  };

  const logout = async () => {
    const result = await fakeAsyncLogout();
    if (result) {
      console.log("The User has logged out");
      setAuthed(false);
    }
  };

  // Mock Async Logout API call.
  // TODO: Replace with your actual logout API Call code
  const fakeAsyncLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/logout");
      console.log(response);
      localStorage.removeItem("token");
      if (response.data.message === "User Signed out successfully") {
        return response.data.message;
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.slice(5));
    }
  };

  return (
    <AuthContext.Provider value={{ authed, setAuthed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
