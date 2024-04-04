import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from './components/pages/Home'
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./components/pages/Shop";
import Dashboard from "./components/pages/Dashboard";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Forgot from "./components/auth/Forgot";
import Reset from "./components/auth/reset";

import Error404 from "./components/utils/Error404";
import Unauthorised from "./components/utils/Unauthorised";
import NotLoggedIn from "./components/utils/NotLoggedIn";
import ProtectedRoute from "./components/ProtectedRoute";

import { useDispatch, useSelector } from "react-redux";


import "./assets/styles/App.css";

function App() {

  const darkMode = useSelector((state) => state.app.darkMode);
  const userData = useSelector((state) => state.user.userData);


  return (
    <div className="">
      <Navbar />

      <div className={`m mt-[60px] ${darkMode ? 'bg-blue-50' : 'bg-black'}  min-h-screen `} >

        <Routes>
          <Route path="/" element={<Home darkmode={darkMode} />} />
          {/* <Route path="/profile" element={<Profile darkMode={darkMode} />} /> */}
          <Route path="/login" element={<Login darkMode={darkMode} userData={userData}/>} />
          <Route path="/register" element={<Signup darkMode={darkMode} />} />
          <Route path="/shop" element={<Shop darkMode={darkMode} />} />
          {/* <Route path="/dash" element={<Dashboard darkMode={darkMode} />} /> */}
          <Route
            path="/dash"
            element={
              <ProtectedRoute
                element={<Dashboard darkMode={darkMode} />}
                allowedRoles={["admin"]} />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={<Profile darkMode={darkMode} />}
                allowedRoles={["admin", "customer", "employee"]}
              />}
          />


          <Route path="/forgot" element={<Forgot darkMode={darkMode} />} />
          <Route path="/reset/:token" element={<Reset darkMode={darkMode} />} />

          <Route path="/unauthorized" element={<Unauthorised />} />
          <Route path="/not-logged-in" element={<NotLoggedIn />} />

          <Route path="/*" element={<Error404 darkMode={darkMode} />} />
        </Routes>
      </div>


      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
