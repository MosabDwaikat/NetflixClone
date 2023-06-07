import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUpSteps";
import ProtectedRoute from "./ProtectedRoute";
import RedirectAuthed from "./RedirectAuthed";
import Search from "./pages/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RedirectAuthed element={<Landing />} />} />
        <Route
          path="/SignIn"
          element={<RedirectAuthed element={<SignIn />} />}
        />
        <Route
          path="/SignUp"
          element={<RedirectAuthed element={<SignUp />} />}
        />
        <Route path="/" element={<Layout />}>
          <Route
            path="/home"
            element={<ProtectedRoute element={<h1>Home</h1>} />}
          />
          <Route
            path="/Search"
            element={<ProtectedRoute element={<Search />} />}
          />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
