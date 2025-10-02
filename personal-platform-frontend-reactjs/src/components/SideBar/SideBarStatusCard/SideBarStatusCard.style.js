import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #fcfcfc99; /* Light gray background */
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  align-self: center;
  margin-bottom: 20px;
  max-width: 900px;
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
  font-size: 14px;
  line-height: 1.5;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: black;
  grap: 20px;
`;

export const Content = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #00000080;
`;

export const ExpandIcon = styled.span`
  font-size: 16px;
  cursor: pointer;
`;
