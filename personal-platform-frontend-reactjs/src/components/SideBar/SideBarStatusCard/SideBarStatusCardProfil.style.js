import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #fcfcfc99; /* Light gray background */
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 5px 3px 3px 3px red;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoIcon = styled.span`
  margin-right: 8px;
  font-size: 16px;
  color: ${({ color }) => color}; /* Dynamically set icon color */
`;

export const CardContent = styled.div`
display: flex ;
  font-size: 14px;
  line-height: 1.5;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: red;
  grap: 20px;
  align-items: center;
  text-align: center;

`;

export const Content = styled.div`
  font-weight: bold;
  font-size: 8px;
  color: #00000080;
  align-items: center;
  text-align: center;


`;

export const ExpandIcon = styled.span`
  font-size: 16px;
  cursor: pointer;
`;
