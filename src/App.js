import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import RegistrationPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import OurProductsPage from "./pages/OurProductsPage";
import { useState } from "react";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/products/" element={<OurProductsPage/>} />
        <Route path="/products/:id" element={<ProductPage/>} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
