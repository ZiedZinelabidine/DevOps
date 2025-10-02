import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import ModalForgotPassword from "components/ModalITgalaxy/ModalForgotPassword/ModalForgotPassword";
import {
  saveCountComposeFreelanceToLocalStorage,
  saveCountShareProjectToLocalStorage,
} from "core/helpers/storage";
import {
  ChevronDown,
  DatabaseZap,
  MessageCircle,
  Rocket,
  Wallet,
  Blocks,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetEntreprisesQuery } from "../../../redux/api/entreprise/entrepriseApi";
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
const ItGalaxyLogoWhite = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-LogoWhite.png`;

const SidebarEntreprises = ({ path, id, onLogout }) => {
  const [dataUser, setDataUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(path);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModalResetPassword, setShowModalResetPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


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
  } = useGetEntreprisesQuery(id, {
    skip: !id, // Skip if the token is not available
  });

  useEffect(() => {
    if (user && user.data) {
      setDataUser(user.data);
      saveCountComposeFreelanceToLocalStorage(
        user.data.count_shared_proposalentreprise
      );
      saveCountShareProjectToLocalStorage(
        user.data.count_shared_projectsharetask
      );
    }
  }, [user]);

  const menuItems = [
    {
      section: "Projects",
      items: [
        {
          icon: <Blocks size={20} />,
          text: "Projects",
          path: "/projects",
        },
        {
          icon: <Rocket size={20} />,
          text: "Purchased Products",
          path: "/myproducts",
        },
        {
          icon: <MessageCircle size={20} />,
          text: "Messages",
          path: "/DashboardCompany",
        },
        {
          icon: <DatabaseZap size={20} />,
          text: "Marketplace",
          path: "/marketplace",
        },
        {
          icon: <Wallet size={20} />,
          text: "Invoicing",
          path: "/wallet",
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
            onClick={() => window.location.reload()}
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
            type={"entreprises"}
            typeimg={"profilSidebar"}
          />
          <ProfileInfo>
            <AppName>{dataUser?.username}</AppName>
          </ProfileInfo>
          <ChevronDown
            style={{
              marginLeft: "auto",
              cursor: "pointer",
              width: '35px', // Specify desired width
              height: '35px', // Specify desired height
          }}
          />
        </ProfilContainer>
        {isMenuOpen && (
        <Dropdown>   
           <DropdownItem
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={handleNavigationProfil}
              style={{
                       backgroundColor:
                         selectedMenuItem === "/profil" ? "lightgray" : (isHovered ? "#f5f5f5" : "transparent"),
                       cursor: 'pointer',
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

export default SidebarEntreprises;
