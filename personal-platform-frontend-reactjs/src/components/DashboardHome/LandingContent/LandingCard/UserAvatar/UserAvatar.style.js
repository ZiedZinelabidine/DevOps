import { Image } from "react-bootstrap";
import styled from "styled-components";

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  align-items: ${(props) => props.alignItems};
`;

export const CustomAvatarStyle = styled(Image)`
  width: 76px;
  height: 76px;
  border-radius: 38px;
  border: 4px solid #ffffff;
`;

export const NameStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  margin-bottom: 0;
  color: #ffffff;
`;
