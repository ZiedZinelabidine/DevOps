import { getAccessToken } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootStyle } from "./DashboardHome.style";

const BestTools = lazy(() => import("./BestTools/BestTools"));
const Formations = lazy(() => import("./Formations/Formations"));
const Landing = lazy(() => import("./Landing/Landing"));
const LandingContent = lazy(() => import("./LandingContent/LandingContent"));
const Recruitment = lazy(() => import("./recruitment/Recruitment"));
const FooterHome = lazy(() => import("./FooterHome/FooterHome"));

function DashboardHome({ active, isMobile }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Define an async function within useEffect
    const fetchTokenAndNavigate = async () => {
      const token = await getAccessToken();
      if (token) {
        try {
          const decodeToken = jwtDecode(token);
          const typeUser = decodeToken.role;
          navigate(`/dashboardAccounting`, { replace: true });
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      } else {
        console.warn("No valid token found");
      }
    };

    // Call the async function
    fetchTokenAndNavigate();
  }, [navigate]);

  return (
    <RootStyle spacing={12.5}>
 
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <LandingContent />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <FooterHome />
      </Suspense>
    </RootStyle>
  );
}

export default DashboardHome;
