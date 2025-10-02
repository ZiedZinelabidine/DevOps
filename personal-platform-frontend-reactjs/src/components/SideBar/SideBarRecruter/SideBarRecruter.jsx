import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import ModalForgotPassword from "components/ModalITgalaxy/ModalForgotPassword/ModalForgotPassword";
import { Blocks, ChevronDown, MessageCircle, Rocket } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  saveBalanceToLocalStorage,
  saveCountOffreToLocalStorage,
} from "../../../core/helpers/storage";
import { useGetRecrutersQuery } from "../../../redux/api/recruter/recruterApi";
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
import { useGetCompanyByPresidentIdAndTypeQuery } from "../../../redux/api/company/companyApi";
const ItGalaxyLogoWhite = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-LogoWhite.png`;

const SidebarRecruters = ({ path, id, onLogout }) => {
  const [dataUser, setDataUser] = useState(null);
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(path);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [statusCompany, setStatusCompany] = useState(false);
  const [showModalResetPassword, setShowModalResetPassword] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown
  const [isHovered, setIsHovered] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  };

  const handleLogout = () => {
    onLogout();
  };

  const { data: user, isLoading, isError } = useGetRecrutersQuery(id, {
    skip: !id, // Skip if the id is not available
  });

  const {
    data: companyData,
    error: companyError,
    isLoading: companyIsLoading,
    refetch: refetchCompany,
  } = useGetCompanyByPresidentIdAndTypeQuery(
    { presidentId: id, type: "RECRUTER" },
    {
      skip: !id, // Skip if either userId or userType is missing
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (user && user.data) {
      setDataUser(user.data);
      saveCountOffreToLocalStorage(user.data.count_shared_offres);
      saveBalanceToLocalStorage(user.data.balance_details);
    }
    if (companyData && companyData?.data) {
      setStatusCompany(companyData?.data[0]?.status);
    }
  }, [user]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener on unmount
    };
  }, []);

  const menuItems = [
    {
      section: "Projects",
      items: [
        {
          icon: <Rocket size={20} />,
          text: "Offres",
          path: "/contracts",
        },
        {
          icon: <Blocks size={20} />,
          text: "Mes Offres",
          path: "/myoffers",
        },
        {
          icon: <MessageCircle size={20} />,
          text: "Messages",
          path: "/DashboardRecruter",
        },
        {
          icon: <Blocks size={20} />,
          text: "ItGalaxy Contactor",
          path: "/itgalaxycontactor",
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
    navigate("/profil"); // Navigate to the profile page
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
          <ImageProfilCard id={id} type={"recruters"} typeimg={"profilSidebar"} />
          <ProfileInfo>
            <AppName>
              {dataUser?.name} {dataUser?.first_name}{" "}
            </AppName>
          </ProfileInfo>
          <ChevronDown
            style={{
              marginLeft: "auto",
              cursor: "pointer",
              width: "35px", // Specify desired width
              height: "35px", // Specify desired height
            }}
          />
        </ProfilContainer>
        {isMenuOpen && (
          <Dropdown ref={dropdownRef}>
            <DropdownItem
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleNavigationProfil}
              style={{
                backgroundColor:
                  selectedMenuItem === "/profil"
                    ? "lightgray"
                    : isHovered
                    ? "#f5f5f5"
                    : "transparent",
                cursor: "pointer",
              }}
            >
              Profile
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigationChangePassword()}>
              Changer mot de passe
            </DropdownItem>
            <DropdownItem onClick={handleLogout}>Déconnexion</DropdownItem>
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

export default SidebarRecruters;