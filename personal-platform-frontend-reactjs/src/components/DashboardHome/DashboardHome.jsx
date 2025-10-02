import { getAccessToken } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootStyle } from "./DashboardHome.style";

// Lazy load all components
const Landing = lazy(() => import(/* webpackChunkName: "landing" */ "./Landing/Landing"));
const ProcessExplanation = lazy(() => import(/* webpackChunkName: "footer" */ "./ProcessExplanation/ProcessExplanation"));
const CategoryFreelances = lazy(() => import(/* webpackChunkName: "category-freelances" */ "./CategoryFreelances/CategoryFreelances"));
const CloudServices = lazy(() => import(/* webpackChunkName: "cloud-services" */ "./CloudServices/CloudServices"));
const HowItWorks = lazy(() => import(/* webpackChunkName: "how-it-works" */ "./HowItWorks/HowItWorks"));
const Trendings = lazy(() => import(/* webpackChunkName: "trendings" */ "./Trendings/Trendings"));
const LandingContent = lazy(() => import(/* webpackChunkName: "landing-content" */ "./LandingContent/LandingContent"));
const ContentFooter = lazy(() => import(/* webpackChunkName: "footer" */ "./ContentFooter/ContentFooter"));
const FooterHome = lazy(() => import(/* webpackChunkName: "footer" */ "./FooterHome/FooterHome"));
const FAQ = lazy(() => import(/* webpackChunkName: "footer" */ "./FAQ/FAQ"));
const MarketPlaceAService = lazy(() => import(/* webpackChunkName: "footer" */ "./MarketPlaceAService/MarketPlaceAService"));
const ShareProduct = lazy(() => import(/* webpackChunkName: "footer" */ "./ShareProduct/ShareProduct"));


// Loading component with skeleton
const LoadingFallback = () => (
  <div style={{
    background: '#f0f0f0',
    height: '200px',
    margin: '20px 0',
    animation: 'pulse 1.5s infinite',
    borderRadius: '4px'
  }} />
);

function DashboardHome({ active, isMobile }) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTokenAndNavigate = async () => {
      try {
        const token = await getAccessToken();
        if (token) {
          const decodeToken = jwtDecode(token);
          const typeUser = decodeToken.role;

          const routeMap = {
            CANDIDAT: "/dashboardCandidat",
            ENTREPRISE: "/DashboardCompany",
            RECRUTER: "/dashboardRecruter",
            ACCOUNTING: "/dashboardAccounting",
          };

          const route = routeMap[typeUser];
          if (route) {
            navigate(route, { replace: true });
          }
        }
      } catch (error) {
        console.error("Error during navigation:", error);
      }
    };

    fetchTokenAndNavigate();
  }, [navigate]);

  return (
    <RootStyle spacing={12.5}>
     <Suspense fallback={<LoadingFallback />}>
       <ProcessExplanation />
     </Suspense>
       <Suspense fallback={<LoadingFallback />}>
        <CloudServices />
      </Suspense> 
      <Suspense fallback={<LoadingFallback />}>
        <CategoryFreelances />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
      <MarketPlaceAService />
      </Suspense>  
      <Suspense fallback={<LoadingFallback />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
      <ShareProduct />
      </Suspense>  
      <Suspense fallback={<LoadingFallback />}>
        <Trendings />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContentFooter />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <LandingContent />
      </Suspense>
        <Suspense fallback={<LoadingFallback />}>
        <Landing />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FooterHome />
      </Suspense>
    </RootStyle>
  );
}

export default DashboardHome;
