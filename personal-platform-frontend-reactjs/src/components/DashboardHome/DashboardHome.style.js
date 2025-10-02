import styled from "styled-components";

export const RootStyle = styled.div`
  background: black ;

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing * 8}px;


`;
