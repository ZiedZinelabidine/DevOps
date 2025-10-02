import styled from "styled-components";

export const Background = styled.div`
  background: black;
  background-image: url(/static/media/homeBackground.3901b58aa5016f29c2f2.png);
  height: 100vh;
  width: 100%;
  color: white;
  background-size: cover; /* Ensures the background covers the entire area */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centers content vertically */
`;

export const Logo = styled.img`
  width: 80%; /* Responsive width */
  max-width: 408px; /* Maintains maximum size */
  padding-top: 20px; /* Adjusted for mobile */
  height: auto; /* Maintain aspect ratio */
  cursor: pointer;
`;

export const StyleCard = styled.p`
  font-size: 18px; /* Adjusted for better readability on mobile */
  font-family: 'Arial', sans-serif; /* Change this to a more beautiful font if desired */
  margin: 20px; /* Responsive spacing */
  padding: 20px; /* Spacing inside the element */
  text-align: center; /* Center text */
`;

export const StyleCardRed = styled.p`
  font-size: 18px; /* Adjusted for better readability */
  font-family: 'Arial', sans-serif; 
  padding: 20px; /* Spacing inside the element */
  text-align: center; /* Center text */
  color: red;
`;

export const AcceptProposalButton = styled.button`
  background: rgba(21, 176, 151, 1);
  color: black;
  margin: 20px; /* Responsive margin */
  height: 50px; /* Adjusted height for mobile */
  width: 80%; /* Full width button for better usability */
  max-width: 300px; /* Maintain max width */
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px; /* Font size for readability */
  justify-content: center;
  align-items: center;

  &:hover {
    background: green; /* Change background color on hover */
    cursor: pointer; /* Change cursor to pointer */
    color: white; /* Change text color on hover */
  }
`;