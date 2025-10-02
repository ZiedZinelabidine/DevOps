import { Image } from "react-bootstrap";
import styled from "styled-components";

export const CustomAvatarStyle = styled(Image)`
  width: ${(props) => props.size ?? "76px"};
  height: ${(props) => props.size ?? "76px"};
  border-radius: 38px;
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: ${(props) => props.width};
  overflow: auto;
`;

export const BoxStyle = styled.div`
  width: ${(props) => props.size ?? "40px"};
  height: ${(props) => props.size ?? "40px"};
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-left: -10px;

  p {
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 14.52px;
    text-align: left;
    background: #606c80;
  }
`;
