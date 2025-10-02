import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
  padding-inline: 2.5%;
  // if the screen is between 768px and 1024px add padding top 190px
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 190px;
  }
`;

export const CustomTypography = styled.p`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 19px;
  color: ${(props) => (props.active === "ENTREPRISES" ? "#050505" : "#FFFFFF")};
`;

export const RowStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  max-width: 100%;
  gap: 14px;
  @media (max-width: 768px) {
    display: ${(props) => (props.isMobile ? "grid" : "flex")};
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding-inline: 2px;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const CustomBox = styled.div`
  width: 210px;
  height: 150.16px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #e8e8e8;
  background: #ffffff;
  @media (max-width: 768px) {
    width: auto;
    padding: 8px;
  }
  cursor: pointer;
`;

export const TitleStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.2px;
  text-align: left;
  margin-bottom: 0;
`;

export const SubTitleStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
  color: #353a38;
  margin-bottom: 0;
`;
