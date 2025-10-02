import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing * 8}px;
  padding-inline: 5%;
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  //overflow: auto;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    align-items: start;
    justify-content: start;
  }
`;

export const BoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 200px;
  gap: 16px;
`;
