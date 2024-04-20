import React from "react";
import { BrowserRouter, Link, Outlet } from 'react-router-dom';
import Header from "./Components/Header";
export default function App() {
  return (
    <div>
    <Header/>      
    <Outlet/>
    </div>
    



  )
};