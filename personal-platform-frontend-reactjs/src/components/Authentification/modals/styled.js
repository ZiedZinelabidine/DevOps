import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";

export const ModalWrapper = styled(Modal)`
  .modal-content {
    background-color: #18294a;
    border-radius: 10px;
    color: white;
    padding: 2rem 2rem 1rem 2rem;
  }
`;

export const ModalBodyWrapper = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tab-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .tab-pane {
      &.active.show {
        display: block;
        width: 100%;
      }

      &:not(.active) {
        display: none;
      }
    }
  }
`;

export const ModalFooterWrapper = styled(Modal.Footer)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 70%;
  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ced4da;
    &:focus {
      outline: none;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .eye-button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const FormGroupRegister = styled.div`
  margin-bottom: 1rem;
  width: 100%;
      color: white;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
  input {
    width: 100%;
    color: white;

    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ced4da;
    &:focus {
      outline: none;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .eye-button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const FormGroupRegisterTwoCol = styled.div`
  margin-bottom: 1rem;
  width: 50%;
  color: white;
  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ced4da;
    &:focus {
      outline: none;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .eye-button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const FormGroupPassword = styled.div`
  margin-bottom: 1rem;
  width: 80%;
  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ced4da;
    &:focus {
      outline: none;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .eye-button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  button {
    margin-left: 0.5rem;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NormalButton = styled.button`
  border: none;
  background: rgba(64, 80, 223, 0.664);
  text-transform: uppercase;
  display: inline-block;
  text-decoration-color: #fff;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  font-size: inherit;
  transition: all 0.3s;
  margin-right: 10px;
`;

export const TabWrapper = styled(Tab)`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabsWrapper = styled(Tabs)`
  flex-direction: row;
  width: 100%;
  font-weight: bold;
  .tab-content {
    width: 100%;
  }
  .nav-item {
    margin: 5px;
  }
  .nav-link {
    color: white;
    border: 1px solid #ddd;
    box-shadow: 0 5px 5px white;
    text-decoration: none;
  }
  .nav-link:hover {
    text-decoration: none;
  }
  .nav-item.show .nav-link,
  .nav-link.active {
    background-color: #6366f1;
    color: white !important;
    border-bottom: 0;
    text-decoration: none;
  }
`;

export const LabelStyle = styled.label`
  @media (max-width: 320px) {
    padding-bottom: 25px;
  }
`;

export const WrapperRowCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const EyeButton = styled.button`
  width: 3%;
  color: white;
`;
export const ModalContainer = styled.div`
  width: 39.09%;
  height: 42.98%;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.span`
  margin: 0;
  font-family: "Inter, sans-serif";
  font-size: 28px;
  font-weight: 700;
  line-height: 33.6px;
  text-align: left;
`;

export const Subtitle = styled.span`
  color: gray;
  margin-top: 5px;
  font-family: "Inter, sans-serif";
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
`;

export const InputContainer = styled.div`
  margin-bottom: 15px;
`;

export const InputContainerForgotPawwsord = styled.div`
  margin-bottom: 50px;
  margin-top: 70px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;
  font-family: "Inter, sans-serif";
  color: white;
`;

export const LabelRemember = styled.label`
  display: block;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;
  font-family: "Inter, sans-serif";
  color: #090a0b;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  color: white;
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-right: 12px;
`;

export const ForgotPassword = styled.button`
  color: #009ff5;
  text-decoration: none;
  font-size: 14px;
  margin-left: auto;
  font-family: "Inter, sans-serif";
  font-weight: 400;
  line-height: 16.8px;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  border-radius: 20px;
  line-height: 16.8px;
  font-weight: 600;
  font-size: 16px;
  font-family: Inter, sans-serif;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 12px;
  letter-spacing: 1px;
`;

export const GitHubButton = styled(LoginButton)`
  background-color: #40474f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GitHubIcon = styled.span`
  margin-right: 10px;
`;

export const TermsText = styled.span`
  font-size: 14px;
  color: #a4adb6;
  margin-bottom: 15px;
  font-weight: 500;
  line-height: 20px;
  font-family: "Roboto";
  padding: 9px 1px 3px 1px;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666;
  margin-top: auto;
`;
export const StyledModalFooter = styled(Modal.Footer)`
  border: none;
  border-top: none !important;
`;

export const StyledModal = styled(Modal)`
  .modal-content {
    width: 90% !important;
    max-width: 650px;
    min-height: 600px;
    margin: auto;
    background-color: black;
    border: 1px solid #203442;
    border-radius: 15px;
    padding: 20px;
    color: white;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #090a0b;
  padding-bottom: 23px;
`;
export const StyledHelp = styled.span`
  color: #a4adb6;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  text-align: center;
`;

export const StyleContentModal = styled.div`
  margin-top: 5%;
`;
