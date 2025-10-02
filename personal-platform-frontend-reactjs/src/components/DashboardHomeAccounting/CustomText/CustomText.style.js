import styled from "styled-components";

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
`;

export const SubHeadingStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  margin-bottom: 0px;
  color: #2684ff;
`;

export const HeadingStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 0px;
`;

export const SupportingTextStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  margin-bottom: 0px;
  color: #667085;
`;
