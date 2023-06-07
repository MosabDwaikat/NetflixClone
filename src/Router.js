import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import GuardLogin from "./GuardLogin";
// import GuardNotLoggedin from "./GuardNotLoggedin";
// import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUpSteps";
import ProtectedRoute from "./ProtectedRoute";
import RedirectAuthed from "./RedirectAuthed";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RedirectAuthed element={<Landing />} />} />
        {/* <Layout /> */}
        <Route
          path="/SignIn"
          element={<RedirectAuthed element={<SignIn />} />}
        />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route
          path="/SignUp"
          element={<RedirectAuthed element={<SignUp />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
