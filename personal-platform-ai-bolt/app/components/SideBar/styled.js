import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: black;
  color: white;
  max-height: 100%; /* Full height of the viewport */
  overflow-y: hidden; /* Prevent scrolling */
  overflow-x: hidden; /* Prevent horizontal overflow */
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 285px;
  padding-top: 20px;
  min-width: 285px;
`;

export const SidebarHeader = styled.div`
  padding: 25px 20px;
`;

export const ProfilContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
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
  top: 100%; /* Aligns directly below the ProfilContainer */
  left: 0;
  color: black;
  background: white;
  border: 1px solid #ddd; /* Lighter border */
  border-radius: 5px;
  margin-top: 15px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Softer shadow for depth */
  z-index: 1; /* Ensures it appears above other elements */
  transition: all 0.3s ease; /* Smooth transition for hover effects */

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
  }
  @media (max-width: 768px) {
    width: 80vw; /* Adjust width on small screens */
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center; // Center vertically within the item
  padding: 10px 15px;
  border: 1px solid #ddd; /* Lighter border */
  cursor: pointer;
  transition: background-color 0.3s ease; // Smooth transition for hover
  &:hover {
    background-color: #f5f5f5; /* Change background on hover */
  }
`;
