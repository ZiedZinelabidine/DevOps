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
} from "./ChatRecruter.style.js";

// Lazy load the container
const ListRecruterContainer = lazy(() =>
  import("./ListRecruterContainer/ListRecruterContainer.jsx")
);

const ChatRecruter = () => {
  const [theme, setTheme] = useState("dark");
  const [usernameChat, setUsernameChat] = useState("");
  const [idRecruter, setIdRecruter] = useState("");
  const [chatId, setChatId] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [name, setName] = useState("");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getAccessToken();
      const recruterToken = token ? jwtDecode(token) : null;
      if (recruterToken) {
        const id = recruterToken.id.toString();
        const usernamechat = recruterToken.usernamechat.toString();
        const Idchat = recruterToken.chatid.toString();
        const role = recruterToken.role.toString();
        const isLoggedIn = getIsloggedFromLocalStorage();
        setUsernameChat(usernamechat);
        setIdRecruter(id);
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
            overflow: "hidden",
            maxHeight: "100vh",
          }}
        >
          <Helmet>
            <title>Chat Recruteur - ItGalaxy</title>
            <meta
              name="description"
              content="Discutez avec les profils postulées à vos offres de jobs en france et gérez vos communications efficacement."
            />
          </Helmet>

          <SideBar
            isLoggedIn={isLoggedIn}
            path={"/DashboardRecruter"}
            role={role}
            id={idRecruter}
          />
          <StyledITgalaxyServicesContainer theme={theme}>
            <Styleddashboard>
              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100vh",
                    }}
                  >
                    <h2>Loading chat components...</h2>
                  </div>
                }
              >
                <ListRecruterContainer
                  idRecruter={idRecruter}
                  usernameChat={usernameChat}
                  chatId={chatId}
                  theme={theme}
                />
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

export default ChatRecruter;
