// AuthGuard.js

import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const user = useSelector((state) => state); // Assuming your user state is stored under state.user

  // Get the current location
  let location = useLocation();

  // Check if user is authenticated
  if (!user || !user.isAuthenticated) {
    // If user is not authenticated, redirect to the login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    // If user is authenticated, render the children (protected routes)
    return <Outlet />;
  }
}
