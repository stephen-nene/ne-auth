import { Navigate, Route } from "react-router-dom";
import Unauthorised from "./Unauthorised";

const ProtectedRoute = ({ element, userData, allowedRoles, fallbackPath }) => {
  const checkRole = (userData, allowedRoles) => {
    return userData && allowedRoles.includes(userData.role);
  };

  return checkRole(userData, allowedRoles) ? (
    <Route element={element} />
  ) : (
    <Route element={<Unauthorised />} />
    // <Navigate to={fallbackPath} replace />
  );
};

export default ProtectedRoute;
