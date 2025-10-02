import styled from "styled-components";

export const StyledContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  widht: 50vw;
  margin-top: 10px;
  width: 100%;
  color: white;

`;

export const Section = styled.div`
  margin-bottom: 5px;
`;

export const SectionTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
  text-decoration: underline; /* Underline the section title */
  text-align: left; /* Align text to the left */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  & > div {
    flex: 1;
  }
`;

export const PaymentMethodRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  justify-content: center;
`;

export const WalletDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const WalletBalance = styled.div`
  background: #4caf50; /* Change to a color that represents your brand */
  color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  min-height: 100px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const BalanceTitle = styled.h4`
  margin: 0;
  font-size: 18px;
`;

export const BalanceAmount = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0 0 0;
`;

export const SubmitButton = styled.button`
  background-color: #28a745; /* Green button color */
  color: white;
  padding: 12px 15px;
  margin-left: 4%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 92%;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }
`;

export const CardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 25px; /* Adjust height as needed */
    margin-left: 10px; /* Space between input field and image */
  }
`;

export const PaymentMethodLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 10px; /* Space between radio input and label */
  }
`;

export const InvoiceSection = styled.div`
  margin-top: 8px;
  border: 1px solid #ddd; /* Light border for separation */
  padding: 15px;
  border-radius: 8px; /* Slightly rounded corners */
  background: #f9f9f9; /* Light background */
`;

export const InvoiceTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #333; /* Darker color for better readability */
  text-decoration: underline; /* Underline the section title */
`;
