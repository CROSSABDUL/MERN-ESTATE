import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import About from "./pages/About";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/Sign-in" element={<Signin />} />
      <Route path="/Sign-up" element={<Signup />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}
