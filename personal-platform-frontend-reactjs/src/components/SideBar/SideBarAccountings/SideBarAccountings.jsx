import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import {
  Blocks,
  Building2,
  ChevronDown,
  LayoutDashboard,
  MessageCircle,
  Wallet,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAccountingsQuery } from "../../../redux/api/accounting/accountingApi";
import SideBarStatusCard from "../SideBarStatusCard/SideBarStatusCard";
import {
  AppName,
  BottomMenu,
  Dropdown,
  DropdownItem,
  MenuCount,
  MenuIcon,
  MenuItem,
  MenuItems,
  MenuText,
  ProfilContainer,
  ProfileInfo,
  SeparateurMenu,
  SidebarContainer,
  SidebarHeader,
} from "../styled";

import ModalForgotPassword from "components/ModalITgalaxy/ModalForgotPassword/ModalForgotPassword";
import {
  saveBalanceToLocalStorage,
  saveCounFolderINPROGRESSToLocalStorage,
} from "core/helpers/storage";

const ItGalaxyLogoWhite = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-LogoWhite.png`;

const SidebarAccountings = ({ path, id, onLogout }) => {
  const [dataUser, setDataUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(path);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModalResetPassword, setShowModalResetPassword] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  };

  const handleLogout = () => {
    onLogout();
  };

  // Fetch user data
  const {
    data: user,
    isLoading,
    isError,
  } = useGetAccountingsQuery(id, {
    skip: !id, // Skip if the token is not available
  });

  useEffect(() => {
    if (user && user.data) {
      setDataUser(user.data);
      saveBalanceToLocalStorage(user.data.balance_details);
      saveCounFolderINPROGRESSToLocalStorage(user.data.folder_nbr_inprogress);
    }
  }, [user]);

  const menuItems = [
    {
      section: "Projects",
      items: [
        {
          icon: <Blocks size={20} />,
          text: "Accounting Jobs",
          path: "/projects",
        },
        {
          icon: <MessageCircle size={20} />,
          text: "Messages",
          path: "/DashboardAccounting",
        },
        {
          icon: <LayoutDashboard size={20} />,
          text: "My working Folder",
          path: "/myworkingfolder",
        },
        {
          icon: <Wallet size={20} />,
          text: "Wallet",
          path: "/wallet",
        },
        {
          icon: <Building2 size={20} />,
          text: "Company details",
          path: "/company",
        },
      ],
    },
    {
      section: "bottom",
      items: [
        {
          icon: (
            <img
              src={ItGalaxyLogoWhite}
              width="208"
              height="40"
              style={{ cursor: "pointer", margin: "16px" }}
            />
          ),
          text: "",
        },
      ],
    },
  ];

  const handleNavigationProfil = () => {
    setSelectedMenuItem("/profil"); // Set the selected item
    navigate("/profil");
  };

  const handleNavigationChangePassword = () => {
    setShowModalResetPassword(true);
  };

  const handleCloseChangePassword = () => {
    setShowModalResetPassword(false);
  };

  const handleNavigation = (path) => {
    setSelectedMenuItem(path);
    navigate(path);
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <ProfilContainer onClick={handleMenuToggle}>
          <ImageProfilCard
            id={id}
            type={"accountings"}
            typeimg={"profilSidebar"}
          />
          <ProfileInfo>
            <AppName>
              {dataUser?.name} {dataUser?.first_name}{" "}
            </AppName>
          </ProfileInfo>
          <ChevronDown
            size={16}
            style={{ marginLeft: "auto", cursor: "pointer" }}
          />
        </ProfilContainer>
        {isMenuOpen && (
          <Dropdown>
            <DropdownItem
              onClick={() => handleNavigationProfil()}
              style={{
                backgroundColor:
                  selectedMenuItem === "/profil" ? "lightgray" : "transparent",
              }}
            >
              Profil
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigationChangePassword()}>
              Reset password
            </DropdownItem>
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </Dropdown>
        )}
        {showModalResetPassword && (
          <ModalForgotPassword
            show={true}
            onBack={handleCloseChangePassword}
            onHide={handleCloseChangePassword}
          />
        )}
      </SidebarHeader>
      <hr />

      <MenuItems>
        {menuItems.slice(0, -1).map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {section.items.map((item, itemIndex) => (
              <MenuItem
                key={`${sectionIndex}-${itemIndex}`}
                onClick={() => handleNavigation(item.path)}
                style={{
                  backgroundColor:
                    selectedMenuItem === item.path ? "gray" : "transparent",
                }}
              >
                <MenuIcon>{item.icon}</MenuIcon>
                <MenuText>{item.text}</MenuText>
                {item.count !== undefined && (
                  <MenuCount>{item.count}</MenuCount>
                )}
              </MenuItem>
            ))}
            {sectionIndex < menuItems.length - 2 && <SeparateurMenu />}
          </React.Fragment>
        ))}
      </MenuItems>
      <SideBarStatusCard
        folder_nbr_inprogress={dataUser?.folder_nbr_inprogress}
        status="FOLDER_INPROGRESS"
      />

      <BottomMenu>
        {menuItems[menuItems.length - 1].items.map((item, index) => (
          <MenuItem key={index} onClick={() => handleNavigation(item.path)}>
            <MenuIcon>{item.icon}</MenuIcon>
            <MenuText>{item.text}</MenuText>
          </MenuItem>
        ))}
      </BottomMenu>
    </SidebarContainer>
  );
};

export default SidebarAccountings;
