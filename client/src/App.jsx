import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from './components/pages/Home'
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./components/pages/Shop";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Forgot from "./components/auth/Forgot";
import Reset from "./components/auth/reset";

import Error404 from "./components/Error404";
import Unauthorised from "./components/Unauthorised";
import ProtectedRoute from "./components/ProtectedRoute";

import { useDispatch, useSelector } from "react-redux";


import "./assets/styles/App.css";

function App() {

  const darkMode = useSelector((state) => state.app.darkMode);
  // const userData = useSelector((state) => state.user.userData);
  const userData = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    role: "customer",
  };


  return (
    <div className="">
      <Navbar />

      <div className={`mt-[80px] ${darkMode ? 'bg-blue-600' : 'bg-blue-950'}  min-h-screen `} >

        <Routes>
          <Route path="/" element={<Home darkmode={darkMode} />} />
          <Route path="/profile" element={<Profile darkMode={darkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/register" element={<Signup darkMode={darkMode} />} />
          <Route path="/shop" element={<Shop darkMode={darkMode} />} />
         {/* Protected Route */}
         <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={<Profile darkMode={darkMode} />}
                userData={userData}
                allowedRoles={["employee", "admin"]}
                fallbackPath="/unauthorized"
              />
            }
          />


          <Route path="/forgot" element={<Forgot darkMode={darkMode} />} />
          <Route path="/reset/:secret" element={<Reset darkMode={darkMode} />} />

          <Route path="/*" element={<Error404 darkMode={darkMode} />} />
          <Route path="/unauthorized" element={<Unauthorised />} />

        </Routes>
      </div>


      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
