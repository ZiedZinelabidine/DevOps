import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: 1176px;
  gap: 88px;
  padding: 0px 5% 50px 5%;
  position: relative;
  margin-bottom: 200px;

  @media (max-width: 1200px) {
    height: auto;
    max-height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 964px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: auto;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const GridItem = styled.div`
  width: 385px;
  height: auto;
  padding: 37px 30px 37px 30px;
  border-radius: 16px;
  background: #14171f;
  align-items: center;
  justify-content: center;
`;

export const IconStyle = styled.div`
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 2;
`;
