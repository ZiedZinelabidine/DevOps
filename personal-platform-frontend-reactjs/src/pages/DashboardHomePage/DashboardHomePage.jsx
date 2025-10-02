import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import DashboardHome from "../../components/DashboardHome/DashboardHome";
import Header from "../../components/Header/Header";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Background = styled.div`
  background: black;
  width: 100%;
  min-height: 130vh;
  @media (max-width: 768px) {
    min-height: 85vh;
     width: 100%;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;


function DashboardHomePage() {
  const [active, setActive] = useState("ENTREPRISES");
  const [isMobile, setIsMobile] = useState(false);

  // Use ResizeObserver instead of window event
  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      debounce((entries) => {
        const width = entries[0]?.contentRect.width;
        setIsMobile(width <= 768);
      }, 250)
    );

    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  // Memoize components to prevent unnecessary re-renders
  const memoizedDashboardHome = useMemo(
    () => <DashboardHome active={active} isMobile={isMobile} />,
    [active, isMobile]
  );

  const memoizedHomeSlider = useMemo(
    () => <HomeSlider active={active} setActive={setActive} />,
    [active]
  );

  return (
    <>
      <Background active={active}>
        <ContentWrapper>
          <Header active={active} />
              {memoizedHomeSlider}
              {memoizedDashboardHome}       
        </ContentWrapper>
      </Background>
    </>
  );
}

// Add display name for better debugging
DashboardHomePage.displayName = "DashboardHomePage";

// Debounce utility function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default DashboardHomePage;