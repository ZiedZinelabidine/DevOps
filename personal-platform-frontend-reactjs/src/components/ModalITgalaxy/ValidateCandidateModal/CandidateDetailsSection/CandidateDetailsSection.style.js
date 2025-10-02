import styled from "styled-components";

export const StyledCandidateDetailsContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;
export const StyledSubTitle = styled.p`
  font-size: 12px;
  line-height: 16px;
  width: auto;
`;

export const StyledBoldSubTitle = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  width: auto;
`;

export const StyledHorizontalLine = styled.hr`
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #00bad6, #366db0);
  border: none;
  opacity: 1;
`;

export const StyledCandidateImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  padding: 2px; /* Adjust padding for border width */
  background: linear-gradient(to right, #00bad6, #366db0) padding-box,
    transparent border-box;
  box-shadow: 0px 4px 15px -8px rgba(0, 0, 0, 1);
`;
