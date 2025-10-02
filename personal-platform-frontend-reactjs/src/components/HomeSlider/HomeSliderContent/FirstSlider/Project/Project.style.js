import styled from "styled-components";

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction ?? "column"};
  gap: ${(props) => props.spacing * 8}px;
  overflow: auto;
`;

export const TypographyStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  text-align: left;
  color: #14171f;
  margin-bottom: 0px;
`;

export const DateStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  text-align: left;
  color: #2684ff;
`;

export const TextStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: left;
  color: #000000;
`;
