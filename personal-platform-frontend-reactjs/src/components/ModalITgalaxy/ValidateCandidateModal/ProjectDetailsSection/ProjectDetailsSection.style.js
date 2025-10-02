import styled from "styled-components";

export const StyledProjectDetailsSectionContainer = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px;
`;

export const StyledProjectDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const StyledHorizontalLine = styled.hr`
  width: 60%;
  height: 2px;
  background: linear-gradient(to right, #00bad6, #366db0);
  border: none;
  align-self: center;
  opacity: 1;
`;

export const StyledSubTitle = styled.p`
  font-size: 12px;
  line-height: 16px;
  width: auto;
  color: black;
`;

export const StyledPriceCard = styled.div`
  width: auto;
  height: auto;
  min-width: 90px;
  background: white;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 4px 15px -8px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
`;

export const StyledPriceText = styled.h5`
  color: black;
  text-align: center;
  margin: 0;
`;
