import styled from "styled-components";

// Styling using styled-components
export const Container = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff; /* Changed to white for contrast */
  height: auto; /* Allows height to expand based on content */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Added shadow for depth */
  margin: 10px; /* More margin around the container for breathing space */
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  font-size: 24px;
  font-family: "Inter", sans-serif; /* Added a fallback sans-serif */
  color: #333; /* Darker color for better contrast */
  font-weight: bold;
  align-items: center;

`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px 0; /* Padding gives more breathing room */
`;

export const Label = styled.span`
  font-weight: bold;
  color: #555; /* Softer gray for labels to differentiate */
`;

export const Value = styled.span`
  color: #333;
  font-size: 16px; /* Slightly larger for clearer visibility */
`;

export const ButtonShowPayment = styled.button`
  background-color: black;
  color: white;
  height: 46px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px; /* Adds rounded corners */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: green; /* Keep hover background color */
    transform: translateY(-2px); /* Subtle lift effect */
  }

  &:active {
    transform: translateY(0); /* Return to original position when pressed */
  }
`;
