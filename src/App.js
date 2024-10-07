import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/Register";
import LoginPage from "./pages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
