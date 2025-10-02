import styled from "styled-components";

export const StyledITgalaxyServicesContainer = styled.div`
  display: flex;
  padding-top: 50px;
  padding-left: 40px;
  width: 100%;
  height: 100hv;
  align-items: flex-start;
  background-color: ${({ theme }) => (theme === "light" ? "#F3F3F3" : "#202124")};
`;

export const Styleddashboard = styled.div`
  display: flex;
  margin-top: 0%;
  width: 100%;
  height: 100%;
  // make it vertical in mobile screen
  @media (max-width: 768px) {
    flex-direction: column;
    & > :nth-child(1) {
      order: 2;
    }
    & > :nth-child(2) {
      order: 1;
    }
  }
`;
