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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            // <GuardLogin>
            <Landing />
            // </GuardLogin>
          }
        />
        {/* <Layout /> */}
        <Route
          path="/SignIn"
          element={
            //   <GuardNotLoggedin>
            <SignIn />
            //   </GuardNotLoggedin>
          }
        />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route
          path="/SignUp"
          element={
            //   <GuardNotLoggedin>
            <SignUp />
            //   </GuardNotLoggedin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
