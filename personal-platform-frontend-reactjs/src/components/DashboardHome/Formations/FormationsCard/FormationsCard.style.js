import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 420px;
  padding: 24px 24px 24px 24px;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  background-color: #111827;
  box-shadow: 0px 4px 6px -2px #10182808;

  &:hover {
   border: 1px solid #6366f1;
  }

`;

export const StyleDescription = styled.div`
font-family: Inter, sans-serif;
font-size: 16px;
font-weight: 700;
color: white;

`;

export const StyledImage = styled.img`
  width: 100px; // Makes the image take full width of the box
  height: 100px; // Makes the image take full height of the box
  object-fit: cover; // Makes sure the image covers the entire box without distortion
  padding: 5px;
  border: 1px solid black;
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
  margin-bottom: 0px;
  weight: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;

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
  font-size: 18px;
  font-weight: 700;
  line-height: 31.47px;
  text-align: right;
  color: #2684ff;
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
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 10%;
  justify-content: flex-end;

`;

export const CompetenceArea = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
