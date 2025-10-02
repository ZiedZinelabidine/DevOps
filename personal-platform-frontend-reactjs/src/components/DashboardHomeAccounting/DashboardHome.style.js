import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing * 8}px;
`;
