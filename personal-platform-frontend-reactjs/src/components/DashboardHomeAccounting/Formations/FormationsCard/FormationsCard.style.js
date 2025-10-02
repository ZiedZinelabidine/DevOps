import styled, { keyframes } from "styled-components";

const moveInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const moveOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 404px;
  height: 553px;
  padding: 24px 24px 24px 24px;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 4px 6px -2px #10182808;
  box-shadow: 0px 12px 16px -4px #10182814;
    0.5s forwards;
`;

export const ImageBoxStyle = styled.div`
  width: 250px;
  height: 250px; // Set a height for consistent layout
  border-radius: 4px;
  overflow: hidden; // Ensures the image does not overflow outside the box
  margin-bottom: 16px; // Spacing below the image box
  display: flex; // Use flexbox for alignment
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  background-color: #f0f0f0; // Optional: Background color for better visibility
  margin-left: 50px;
`;

export const StyledImage = styled.img`
  width: 100%; // Makes the image take full width of the box
  height: 100%; // Makes the image take full height of the box
  object-fit: cover; // Makes sure the image covers the entire box without distortion
`;

export const SubHeadingStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: rgb(38, 114, 255);
  margin-bottom: 0px;
`;

export const SubHeadingTypeStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding-left: 5px;
  text-align: center;
  width: 158px;
  color: white;
  background: black;
  margin-bottom: 0px;
  margin-left: 190px;
`;

export const HeadingStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
  margin-bottom: 0px;
`;

export const SupportingTextStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #667085;
  margin-bottom: 0px;
`;

export const BoxImageTime = styled.div`
  display: flex;
  flex-direction: row;
  width: 126px;
  height: 29px;
  top: 11px;
  left: 203px;
  padding: 6px 10px 6px 10px;
  gap: 6px;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const TypographyTime = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: left;
  color: #667085;
`;

export const PriceStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.47px;
  text-align: right;
  color: #2684ff;
  padding-left: 100px;
  padding-top: 15px;
`;

export const CompetenceLabel = styled.span`
  padding: 3px;
  border-radius: 18px;
  font-size: 13px;
  width: 100px;
  font-weight: 501;
  text-align: center;
  margin: 0 0px;
  margin-right: 0.5rem;
  border: 1px solid #203442;
  padding-inline: 12px;
  background: black;
  color: white;
`;

export const CompetenceLabelLanguages = styled.span`
  padding: 3px;
  border-radius: 18px;
  font-size: 13px;
  width: 100px;
  font-weight: 501;
  text-align: center;
  margin: 0 0px;
  margin-right: 0.5rem;
  border: 1px solid green;
  padding-inline: 12px;
  background: green;
  color: white;
`;

export const StarsLine = styled.div`
  display: flex;
`;
