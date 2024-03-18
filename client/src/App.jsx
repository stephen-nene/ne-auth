import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from './components/pages/Home'
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Error404 from "./components/Error404";

import { useDispatch, useSelector } from "react-redux";


import "./assets/styles/App.css";

function App() {

  const darkMode = useSelector((state) => state.app.darkMode);
   
  return (
    <div className="">
      <Navbar/>

      <div className={`mt-[60px] ${darkMode?'bg-blue-100':'bg-blue-950'}  h-screen `} >

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login darkMode={darkMode}/>}/>
        <Route path="/register" element={<Signup darkMode={darkMode}/>}/>

        <Route path="/*" element={<Error404 darkMode={darkMode}/>}/>
      </Routes>
      </div>


      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
