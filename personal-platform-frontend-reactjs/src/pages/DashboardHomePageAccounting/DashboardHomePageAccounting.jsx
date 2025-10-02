import { useState } from "react";
import styled from "styled-components";
import DashboardHome from "../../components/DashboardHomeAccounting/DashboardHome";
import Header from "../../components/HeaderAccounting/Header";
import HomeSlider from "../../components/HomeSliderAccounting/HomeSlider";
const BackgroundHome = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/homeBackground.png`;

const RootStyle = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: contain; /* Ensure the image covers the element */
`;
const Background = styled.div`
  background: ${(props) =>
    props.active === "FREELANCERS"
      ? "linear-gradient(to bottom, black 130vh, white 130vh)"
      : "white"};
  width: 100%;
  min-height: 130vh; /* Ensure it takes at least the height of the viewport */
  @media (max-width: 768px) {
    min-height: 85vh; /* Ensure it takes at least the height of the viewport */
  }
`;

function DashboardHomePageAccounting() {
  const [active, setActive] = useState("FREELANCERS");
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <div>
        <Background active={active}>
          <RootStyle src={BackgroundHome}>
            <Header active={active} />
            <HomeSlider active={active} setActive={setActive} />
          </RootStyle>
        </Background>
      </div>
      {isMobile && <DashboardHome active={active} isMobile={isMobile} />}
    </>
  );
}
export default DashboardHomePageAccounting;
