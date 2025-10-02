import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 130px;
  background:rgb(14, 15, 19);
`;

export const DividerStyle = styled.div`
  width: 100%;
  height: 0px;
  border: 2px solid;
  border-image-slice: 1;
`;

export const StackStyle = styled.div`
  background:rgb(14, 15, 19);
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: ${(props) => (props.keepRowOnMobile ? "row" : "column")};
    width: 100% !important;
    gap: ${(props) => props.spacing * 4}px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.spacing * 3}px;
  }
`;

export const TypographyStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #ffffff;
  @media (max-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
  }
  &:hover {
    cursor: pointer;
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
  @media (max-width: 1024px) {
    font-size: 11px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    text-align: center;
  }
`;
