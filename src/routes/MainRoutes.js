import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import PostDetails from "../components/PostDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<PostDetails />} />
    </Routes>
  );
};

export default MainRoutes;
