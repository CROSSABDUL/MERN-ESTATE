import React from "react";
import { BrowserRouter, Link, Outlet } from 'react-router-dom';
import Navbar from "./Components/Navbar";
export default function App() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>
  )
};