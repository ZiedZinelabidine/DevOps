import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.img`
  height: auto;
  max-width: 75px;
  max-height: 75px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

export const LogoSideBar = styled.img`
  height: auto;
  max-width: 35px;
  max-height: 35px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100px;
`;

export const ButtonInscription = styled.button`
  background: #051b2b;
  border-radius: 100px;
  color: #fff;
  font-size: 16px;
  padding: 8px 16px;
  border-color: #fff0;
  font-weight: bolder;
  min-width: 200px;
  max-width: 300px;
  width: 10vw;
  height: 70px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-right: 1px;
  }
`;

export const ButtonConnexion = styled.button`
  color: #051b2b;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 16px;
  border: none;
  background: #fff0;
  font-weight: bolder;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 12px;
  }
`;

export const NavbarButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const NavbarWrapper = styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
export const NavDropdownWrapper = styled(NavDropdown)`
  border: none;
  border-color: #fff0;
  background-color: #fff0;
  @media (max-width: 991px) {
    & > .dropdown-menu.show {
      border: none;
      border-color: #fff0;
      background-color: #fff0;
    }
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;
`;

export const NavProfilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerWrapper = styled(Container)`
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const ContainerLogo = styled(Navbar.Brand)`
  @media (min-width: 768px) {
    width: 10%;
  }
`;

export const ContainerNavbarCollapse = styled(Navbar.Collapse)`
  @media (min-width: 768px) {
    width: 70%;
  }
`;
export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 130%;
  @media (min-width: 768px) {
  }
`;
export const ContainerNavProfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 10%;
  }
`;

export const ContainerDropdownButton = styled(DropdownButton)`
  & > button {
    background-color: #fff0 !important;
    color: #000 !important;
    border: none !important;
  }
  & > button:hover {
    background-color: #fff0 !important;
    color: #000 !important;
  }
  & > button:active {
    background-color: #fff0 !important;
    color: #000 !important;
  }
  & > .dropdown-menu.show {
    right: 0;
    left: auto;
  }
`;

export const IconNextText = styled.i`
  padding-right: 10px;
`;

export const ContainerNavLink = styled(Nav.Link)`
  text-align: center;
`;
