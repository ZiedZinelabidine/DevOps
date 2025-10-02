import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
  background: #ffffff;
  border-left: 5px solid ${(props) => props.borderColor || "#cc453c"};
  box-shadow: 0px 2px 8px 0px #136a9b26;
  justify-content: space-between;
`;
