import styled from "styled-components";

export const Container = styled.div`
  height: 93vh;
  overflow: hidden;
  position: relative;
  width: 20%;
  margin: 0px 11px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 85.5vh;
  overflow-y: auto;
  padding: 10px 0;
  margin-top: 44px;
  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    max-height: none;
    width: 50%;
  }
`;

export const Item = styled.div`
  align-items: center;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#202124")};
  border: 1px solid #d0d5dd;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin-right: 10px;
    width: 50%;
  }
      &:hover {
     border: 1px solid #6366f1;
  }
`;

export const ItemProposalDash = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  border: 1px solid #d0d5dd;
  padding-top: 9%;
  padding-left: 5%;
  border: 10px solid #e5e5e5;
  border-radius: 26px;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  border: 1px solid #d0d5dd;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Soft shadow for depth */
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth transition */
  height: 10%;


  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin-right: 10px;
    width: 50%;
  }
  &:hover {
    transform: scale(1.01); /* Slightly enlarge on hover */
    background: green;
  }
`;

export const ItemIconDash = styled.div`
  display: flex;
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

export const ItemContentDash = styled.div`
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => (theme === "light" ? "#666" : "#fff")};
  }
`;

export const ItemIcon = styled.div`
  font-size: 24px;
  margin-right: 15px;
  display: flex;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const ItemContent = styled.div`
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => (theme === "light" ? "#666" : "#fff")};
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#202124")};
  border: 1px solid #696969;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  &.up {
    margin-top: 10px;
  }

  &.down {
    bottom: 0px;
  }

  &:hover {
    background-color: #e5e5e5;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 25px;
    //top: auto;
    //bottom: auto;
    position: unset;

    &.up {
      left: 0;
      top: 0;
      transform: rotate(-90deg);
    }

    &.down {
      right: 0;
      bottom: 0;
      transform: rotate(-90deg);
    }
  }
`;
