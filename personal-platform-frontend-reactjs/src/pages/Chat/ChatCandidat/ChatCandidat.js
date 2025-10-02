import MobileDashboard from "components/MobileDashboard/MobileDashboard.jsx";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import SideBar from "../../../components/SideBar/sideBar.jsx";
import {
  getAccessToken,
  getIsloggedFromLocalStorage,
} from "../../../core/helpers/storage.js";
import {
  StyledITgalaxyServicesContainer,
  Styleddashboard,
} from "./ChatCandidat.style.js";
import ListCandidatContainer from "./ListCandidatContainer/ListCandidatContainer.jsx";
import ListServicesContainer from "./ListServicesContainer/ListServicesContainer.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

const ChatCandidat = () => {
  const [theme, setTheme] = useState("dark");
  const [usernameChat, setUsernameChat] = useState("");
  const [idCandidat, setIdCandidat] = useState("");
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
      const candidatToken = token ? jwtDecode(token) : null;
      if (candidatToken) {
        const id = candidatToken.id.toString();
        const usernamechat = candidatToken.usernamechat.toString();
        const Idchat = candidatToken.chatid.toString();
        const role = candidatToken.role.toString();
        const isLoggedIn = getIsloggedFromLocalStorage();
        setUsernameChat(usernamechat);
        setIdCandidat(id);
        setChatId(Idchat);
        setIsLoggedIn(isLoggedIn);
        setRole(role);
      }
    };
    fetchToken();
  }, []);

  return (
    <>
      {!isMobile ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            overflowY: "hidden",
            maxHeight: "100vh",
          }}
        >
          <Helmet>
            <title>Chat Freelancer - ItGalaxy</title>
            <meta name="description" content="Discutez avec les candidats et gérez vos communications efficacement avec les entreprises et les recruteurs." />
          </Helmet>
          
          <SideBar
            isLoggedIn={isLoggedIn}
            path={"/DashboardCandidat"}
            role={role}
            id={idCandidat}
          />
          <StyledITgalaxyServicesContainer theme={theme}>
            <Styleddashboard>
              <ListCandidatContainer
                idCandidat={idCandidat}
                usernameChat={usernameChat}
                chatId={chatId}
                theme={theme}
              />
              <ListServicesContainer theme={theme} />
            </Styleddashboard>
          </StyledITgalaxyServicesContainer>
        </div>
      ) : (
        <MobileDashboard />
      )}
    </>
  );
};

export default ChatCandidat;