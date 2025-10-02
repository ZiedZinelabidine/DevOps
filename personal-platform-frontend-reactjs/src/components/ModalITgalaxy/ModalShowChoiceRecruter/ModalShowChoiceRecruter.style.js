import { Modal } from "react-bootstrap"; // Ensure react-bootstrap is installed
import styled from "styled-components"; // Import styled-components

export const StyledModalBody = styled(Modal.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff; /* White text for contrast */
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between the option cards */
`;

export const OptionCard = styled.div`
  color: black;
  text-align: center;
  border-radius: 12px;
  font-family: Inter, sans-serif;
  padding: 30px 20px;
  width: 220px; /* Fixed width for cards */
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s, transform 0.2s;

  h3 {
    margin: 0; /* Helps remove extra space */
  }

  &:hover {
    background-color: black; /* Dark red on hover */
    transform: translateY(-5px); /* Strong lift on hover */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7); /* Enhanced shadow */
    color: #ffffff;
  }
`;
