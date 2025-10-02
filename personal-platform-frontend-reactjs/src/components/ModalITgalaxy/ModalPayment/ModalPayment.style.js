import styled from "styled-components";

export const StyledContainer = styled.div`
  background: #fff;
  padding: 20px;
  max-width: 900px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const PaymentButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  padding-top: 15px;
  font-size: 20px;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;

  & > div {
    flex: 1;
  }
`;

export const PaymentMethodRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const WalletDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const WalletBalance = styled.div`
  background: black;
  color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
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
  margin: 5px 0 0 0;
`;

export const SubmitButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
