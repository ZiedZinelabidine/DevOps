import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import SideBar from "../../../components/SideBar/sideBar.jsx";
import {
  getAccessToken,
  getIsloggedFromLocalStorage,
} from "../../../core/helpers/storage.js";
import {
  StyledITgalaxyServicesContainer,
  Styleddashboard,
} from "./ChatAccounting.style.js";
import ListAccountingContainer from "./ListAccountingContainer/ListAccountingContainer.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import MobileDashboard from "components/MobileDashboard/MobileDashboard.jsx";

const ChatAccounting = () => {
  const [theme, setTheme] = useState("dark");
  const [usernameChat, setUsernameChat] = useState("");
  const [idAccounting, setIdAccounting] = useState("");
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
      const accountingToken = token ? jwtDecode(token) : null;
      if (accountingToken) {
        const id = accountingToken.id.toString();
        const usernamechat = accountingToken.usernamechat.toString();
        const Idchat = accountingToken.chatid.toString();
        const role = accountingToken.role.toString();
        const isLoggedIn = getIsloggedFromLocalStorage();
        setUsernameChat(usernamechat);
        setIdAccounting(id);
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
        overflow: "hidden",
        maxHeight: "100vh",
      }}
    >
      <SideBar
        isLoggedIn={isLoggedIn}
        path={"/DashboardAccounting"}
        role={role}
        id={idAccounting}
      />
      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      <StyledITgalaxyServicesContainer theme={theme}>
        <Styleddashboard>
          <ListAccountingContainer
            idAccounting={idAccounting}
            usernameChat={usernameChat}
            chatId={chatId}
            theme={theme}
          />
        </Styleddashboard>
      </StyledITgalaxyServicesContainer>
    </div>) : (
      <MobileDashboard />
    )}
    </>
  );
};

export default ChatAccounting;
