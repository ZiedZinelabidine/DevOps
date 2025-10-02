import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootRoute } from "../../core/constants/routes.constants";
import { useLanguage } from "../../core/contexts/LanguageContext";
import useLoggedIn from "../../hooks/useLoggedIn";
import { logout } from "../../redux/features/user";
import Login from "../Authentification/modals/login";
import Register from "../Authentification/modals/register";
import {
  ButtonInscription,
  ButtonLogin,
  Logo,
  RootStyle,
  StackStyle
} from "./Header.style";
const ItGalaxyLogoWhite = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-LogoWhite.png`;
const ItGalaxyMobile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/icon-mobile.png`;
const ItGalaxyLogo = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-Logo.png`;

export default function Header({ active }) {
  const isLoggedIn = useLoggedIn();
  const dispatch = useDispatch();
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const { currentLocale, setCurrentLocale } = useLanguage();
  const intl = useIntl();

  const handleModalAboutUs = () => {
    window.location.href = `/about-us`;
  };

  const handleModalLogin = () => {
    setOpenModalLogin(true);
  };

  const handleModalCloseLogin = () => {
    setOpenModalLogin(false);
  };
  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleModalCloseRegister = () => {
    setOpenModalRegister(false);
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
    navigate(RootRoute, { replace: true });
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
      active={"FREELANCERS"}
      scrolling={scrolling}
      isFocused={isFocused}
    >
      {(!isFocused || !isMobile) && (
        <>
          <Logo
            alt="logo-itgalaxy"
            src={
              isMobile
                ? ItGalaxyMobile
                : active === "FREELANCERS"
                  ? ItGalaxyLogoWhite
                  : ItGalaxyLogoWhite
            }
            onClick={handleHomePageRedirection}
            isFocused={isFocused}
            isMobile={isMobile}
          />
        </>
      )}

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <StackStyle direction={"row"} spacing={2}>
                {(!isLoggedIn) && (
                  <>
                    <ButtonInscription
                      onClick={handleModalRegister}
                      active={"FREELANCERS"}
                    >
                      {intl.formatMessage({ id: "sign_up" })}
                    </ButtonInscription>
                      <ButtonLogin onClick={handleModalLogin} active={"FREELANCERS"}>
                        {intl.formatMessage({ id: "login" })}
                      </ButtonLogin>
                  </>
                )}
              </StackStyle>
      </div>
      <Login
        openModalLogin={openModalLogin}
        setOpenModalLogin={setOpenModalLogin}
        handleModalLogin={handleModalCloseLogin}
        switchBetweenModals={switchBetweenModals}
        proxy={"dashboard"}
      />
      <Register
        openModalRegister={openModalRegister}
        setOpenModalRegister={setOpenModalRegister}
        handleModalRegister={handleModalCloseRegister}
        switchBetweenModals={switchBetweenModals}
        proxy={"dashboard"}
      />
    </RootStyle>
  );

}
