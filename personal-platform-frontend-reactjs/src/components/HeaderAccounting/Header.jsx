import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootRoute } from "../../core/constants/routes.constants";
import useLoggedIn from "../../hooks/useLoggedIn";
import { logout } from "../../redux/features/user";
import LoginAccounting from "../Authentification/modals/loginAccounting";
import RegisterAccounting from "../Authentification/modals/registerAccounting";
import {
  ButtonInscription,
  ButtonLogin,
  Logo,
  RootStyle,
  StackStyle,
} from "./Header.style";
const ItGalaxyLogoWhite = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-LogoWhite.png`;
const ItGalaxyLogo = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-Logo.png}`;
const ItGalaxyMobile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/logoWhite.png}`;

export default function Header({ active }) {
  const isLoggedIn = useLoggedIn();
  const dispatch = useDispatch();
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [searchType, setSearchType] = useState("Training");
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);

  const handleModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };

  const handleModalRegister = () => {
    setOpenModalRegister(!openModalRegister);
  };

  const switchBetweenModals = () => {
    if (openModalLogin) {
      setOpenModalLogin(false);
      setOpenModalRegister(true);
    } else if (openModalRegister) {
      setOpenModalRegister(false);
      setOpenModalLogin(true);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("getstreamtoken");
    localStorage.removeItem("isloggedin");
    localStorage.removeItem("resources");
    navigate(RootRoute, { replace: true });
  };
  const handleHomePageRedirection = () => {
    /*navigate(
      isLoggedIn
        ? storeUser.type === "entreprise"
          ? DashboardCompanyRoutes.chat
          : DashboardFreelancerRoutes.chat
        : RootRoute,
      { replace: true }
    );*/
  };
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change 50 to the scroll position you want
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isMobile = window.innerWidth <= 768;
  return (
    <RootStyle
      isLoggedIn={isLoggedIn}
      active={active}
      scrolling={scrolling}
      isFocused={isFocused}
    >
      {(!isFocused || !isMobile) && (
        <Logo
          src={
            isMobile
              ? ItGalaxyMobile
              : active === "FREELANCERS"
              ? ItGalaxyLogoWhite
              : ItGalaxyLogo
          }
          onClick={handleHomePageRedirection}
          isFocused={isFocused}
          isMobile={isMobile}
        />
      )}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: isFocused && isMobile ? "center" : "flex-end",
          padding: isFocused && isMobile ? "0px 15px 0px 15px" : "0px",
        }}
      >
        <div style={{ display: "flex", gap: "16px" }}>
          {(!isFocused || !isMobile) && (
            <>
              <StackStyle direction={"row"} spacing={2}>
                <ButtonInscription
                  onClick={handleModalRegister}
                  active={active}
                >
                  Sign up
                </ButtonInscription>
                {!isMobile && (
                  <ButtonLogin onClick={handleModalLogin} active={active}>
                    Login
                  </ButtonLogin>
                )}
              </StackStyle>
            </>
          )}
        </div>
      </div>
      <LoginAccounting
        openModalLogin={openModalLogin}
        setOpenModalLogin={setOpenModalLogin}
        handleModalLogin={handleModalLogin}
        switchBetweenModals={switchBetweenModals}
        proxy={"dashboard"}
      />
      <RegisterAccounting
        openModalRegister={openModalRegister}
        setOpenModalRegister={setOpenModalRegister}
        handleModalRegister={handleModalRegister}
        switchBetweenModals={switchBetweenModals}
        proxy={"dashboard"}
      />
    </RootStyle>
  );
}
