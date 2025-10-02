import MobileDashboard from "components/MobileDashboard/MobileDashboard.jsx";
import { jwtDecode } from "jwt-decode";
import { Suspense, lazy, useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import ChatPreloader from "../../../components/ChatPreloader/ChatPreloader.jsx";
import SideBar from "../../../components/SideBar/sideBar.jsx";
import {
  getAccessToken,
  getIsloggedFromLocalStorage,
} from "../../../core/helpers/storage.js";
import {
  StyledITgalaxyServicesContainer,
  Styleddashboard,
} from "./ChatEntreprise.style.js";

// Lazy load the containers
const ListEntrepriseContainer = lazy(() => import("./ListEntrepriseContainer/ListEntrepriseContainer.jsx"));
const ListServicesContainer = lazy(() => import("./ListServicesContainer/ListServicesContainer.jsx"));

const ChatEntreprise = () => {
  const [theme, setTheme] = useState("dark");
  const [usernameChat, setUsernameChat] = useState("");
  const [idEntreprise, setIdEntreprise] = useState("");
  const [chatId, setChatId] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isMobile = window.innerWidth <= 768;


  useEffect(() => {
    const fetchToken = async () => {
      const token = await getAccessToken();
      const entrepriseToken = token ? jwtDecode(token) : null;
      if (entrepriseToken) {
        const id = entrepriseToken.id.toString();
        const usernamechat = entrepriseToken.usernamechat.toString();
        const Idchat = entrepriseToken.chatid.toString();
        const role = entrepriseToken.role.toString();
        const isLoggedIn = getIsloggedFromLocalStorage();
        setUsernameChat(usernamechat);
        setIdEntreprise(id);
        setChatId(Idchat);
        setIsLoggedIn(isLoggedIn);
        setRole(role);
      }
    };
    fetchToken();
  }, []);

  return (
    <>
      <ChatPreloader />

      {!isMobile ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
            maxHeight: "100vh",
          }}
        >
          <Helmet>
            <title>Chat Entreprise - ITGalaxy</title>
            <meta name="description" content="Discutez avec les profils freelances seclectionnées pour vos projets et gérez vos communications efficacement." />
          </Helmet>

          <SideBar
            isLoggedIn={isLoggedIn}
            path={"/DashboardCompany"}
            role={role}
            id={idEntreprise}
          />
          <StyledITgalaxyServicesContainer theme={theme}>
            <Styleddashboard>
              <Suspense fallback={
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh"
                }}>
                  <h2>Loading chat components...</h2>
                </div>
              }>
                <ListEntrepriseContainer
                  idEntreprise={idEntreprise}
                  usernameChat={usernameChat}
                  chatId={chatId}
                  theme={theme}
                />
                <ListServicesContainer theme={theme} />
              </Suspense>
            </Styleddashboard>
          </StyledITgalaxyServicesContainer>
        </div>
      ) : (
        <MobileDashboard />
      )}
    </>
  );
};

export default ChatEntreprise;