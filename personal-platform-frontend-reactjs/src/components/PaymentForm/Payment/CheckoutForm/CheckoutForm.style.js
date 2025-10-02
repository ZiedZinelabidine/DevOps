import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding-inline: 20px;
  width: 100%
`;

export const FormStyle = styled.form`
  & .StripeElement {
    width: 100%;
    height: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 2rem; /* Adjusted size to be smaller but still visible */
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
      border: 1px solid #80bdff !important;
    }

    &.StripeElement--focus {
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      outline: none;
    }

    &.StripeElement--invalid {
      border: 1px solid red;
    }

    & input::placeholder {
      color: #ced4da;
    }
  }
`;

// Customize your GridItem here
export const GridItem = styled.div`
  height: 100%; /* Allow item height to adjust automatically based on content */
  flex: 1 1 70%; /* Adjust width (40% for example) to have two items side by side in medium to large screens */
  width: 100%; /* Optional: Set maximum width depending on your layout */
  margin: 1rem; /* Space around the items */
  
  @media (max-width: 768px) {
    flex: 1 1 100%; /* Full width on smaller screens for better usability */
  }
`;

export const SubmitButton = styled.button`
  background-color: #28a745; /* Green button color */
  color: white;
  padding: 12px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
  margin-top: 30px;

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }
`;