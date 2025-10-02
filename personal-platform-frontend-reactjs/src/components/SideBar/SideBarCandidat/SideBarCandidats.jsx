import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import ModalForgotPassword from "components/ModalITgalaxy/ModalForgotPassword/ModalForgotPassword";
import {
  Building2,
  ChevronDown,
  DatabaseZap,
  Blocks,
  MessageCircle,
  Rocket,
  Wallet,
  FileSliders,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  saveBalanceToLocalStorage,
  saveCountProductToLocalStorage,
} from "../../../core/helpers/storage";
import {
  useGetCandidatsQuery,
  useGetCheckProfilCompletQuery,
} from "../../../redux/api/candidat/candidatApi";
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

const SidebarCandidats = ({ path, id, onLogout }) => {
  const [dataUser, setDataUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [statusCompany, setStatusCompany] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(path);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModalResetPassword, setShowModalResetPassword] = useState(false);
  const [completeProfil, setCompleteProfil] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  };

  const handleLogout = () => {
    onLogout();
  };

  const { data: user, isLoading, isError } = useGetCandidatsQuery(id, {
    skip: !id, // Skip if the id is not available
  });

  const {
    data: companyData,
    error: companyError,
    isLoading: companyIsLoading,
    refetch: refetchCompany,
  } = useGetCompanyByPresidentIdAndTypeQuery(
    { presidentId: id, type: "CANDIDAT" },
    {
      skip: !id, // Skip if either userId or userType is missing
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (user && user.data) {
      setDataUser(user.data);
      saveCountProductToLocalStorage(user.data.count_sharedproduct);
      saveBalanceToLocalStorage(user.data.balance_details);
    }
    if (companyData && companyData?.data) {
      setStatusCompany(companyData?.data[0]?.status);
    }
  }, [user]);

  const { data, errorCheck, isLoadingCheck } = useGetCheckProfilCompletQuery(id);

  useEffect(() => {
    if (!isLoadingCheck && !errorCheck) {
      setCompleteProfil(data?.bol_user_complete);
    }
  }, [id, isLoadingCheck, errorCheck, data]);

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
          icon: <Blocks size={20} />,
          text: "Projets",
          path: "/projects",
        },
        {
          icon: <FileSliders size={20} />,
          text: "Contrats Freelance",
          path: "/contracts",
        },
        {
          icon: <MessageCircle size={20} />,
          text: "Messages",
          path: "/DashboardCandidat",
        },
        {
          icon: <DatabaseZap size={20} />,
          text: "Marketplace",
          path: "/marketplace",
        },
        {
          icon: <Rocket size={20} />,
          text: "Produits achetés",
          path: "/myproducts",
        },
        {
          icon: <Wallet size={20} />,
          text: "Portefeuille",
          path: "/wallet",
        },
        {
          icon: <Building2 size={20} />,
          text: "Détails de votre entreprise",
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
          <ImageProfilCard id={id} type={"candidats"} typeimg={"profilSidebar"} />
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

export default SidebarCandidats;