import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from './components/pages/Home'
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import "./assets/styles/App.css";

function App() {

  return (
    <div className="">
      <Navbar/>

      <div className="page mt-[60px] bg-blue-200 min-h-screen ">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </div>


      <Footer/>
    </div>
  );
}

export default App;
