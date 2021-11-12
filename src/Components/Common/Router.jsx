import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../../Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<p>Page Not Found</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
