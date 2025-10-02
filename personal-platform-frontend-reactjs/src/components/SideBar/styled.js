import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SidebarContainer = styled.div`
  background-color: black;
  color: white;
  max-height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 285px;
  padding-top: 20px;
  min-width: 285px;
`;

export const SidebarHeader = styled.div`
  padding: 25px 20px;
  position: relative;
`;

export const ProfilContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
  padding-left: 10px;
  width: 100%;
`;

export const AppName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 20px;
`;

export const UserEmail = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  font-family: "Inter";
  line-height: 20px;
`;

export const MenuItems = styled.nav`
  flex-grow: 1;
  padding-bottom: 50px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MenuIcon = styled.span`
  font-size: 25px;
  min-width: 30px;
`;

export const MenuText = styled.span`
  margin-left: 15px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.8px;
`;

export const MenuCount = styled.span`
  margin-left: auto;
  background-color: ${(props) =>
    props.isExpanded ? "#4169e1" : "rgba(255, 255, 255, 0.2)"};
  border-radius: 50%;
  min-width: 50px;
  min-height: 50px;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const SeparateurMenu = styled.div`
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 5px;
`;

export const BottomMenu = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 5px;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  left: 20px;
  right: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: ${fadeIn} 0.2s ease-out;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 12px;
    height: 12px;
    background: white;
    transform: rotate(45deg);
    border-radius: 2px;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  &:hover {
    background-color: #f8f9fa;
    color: #0066ff;
  }

  &:active {
    background-color: #f0f0f0;
    transform: scale(0.98);
  }

  svg {
    margin-right: 12px;
    width: 18px;
    height: 18px;
    opacity: 0.8;
  }

  &:last-child {
    color: #dc3545;
    
    &:hover {
      background-color: #fff5f5;
      color: #dc3545;
    }
  }
`;