import { Route, Navigate, Routes } from "react-router-dom";
import Unauthorised from "./utils/Unauthorised";
import NotLoggedIn from "./utils/NotLoggedIn";
import { useSelector } from "react-redux";

const ProtectedRoute = ({  element, allowedRoles,darkMode }) => {
  const userData = useSelector((state) => state.user.userData);
  // const userData = {
  //   id: 1,
  //   username: "john_doe",
  //   email: "john@example.com",
  //   role: "admin",
  // };

  if (!userData) {
    // return <Navigate to="/not-logged-in" />;
    return <NotLoggedIn darkMode={darkMode}/>;
  }

  if (!allowedRoles.includes(userData.role)) {
    // User does not have permission to access this route, show the Unauthorised page
    return <Unauthorised darkMode={darkMode}/>;
  }
  // User is authenticated and has the correct role, render the component

  return element;
};

export default ProtectedRoute;
