import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing * 8}px;
  width: 100%;
  padding-inline: 5%;

  @media screen and (max-width: 1280px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  padding-top: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

export const BoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 200px;
  gap: 16px;
`;
