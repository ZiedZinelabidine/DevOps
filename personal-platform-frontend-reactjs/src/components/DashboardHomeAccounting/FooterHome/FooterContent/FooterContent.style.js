import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 130px;
`;

export const DividerStyle = styled.div`
  width: 100%;
  height: 0px;
  border: 2px solid;
  border-image-source: linear-gradient(
    90deg,
    rgba(20, 23, 31, 0.4) 0%,
    rgba(255, 255, 255, 0.4) 52%,
    rgba(20, 23, 31, 0.4) 100%
  );
  border-image-slice: 1;
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: ${(props) => props.width};
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const TypographyStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #ffffff;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TextStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.2000000476837158px;
  text-align: left;
  color: #ffffff;
  text-transform: uppercase;
`;
