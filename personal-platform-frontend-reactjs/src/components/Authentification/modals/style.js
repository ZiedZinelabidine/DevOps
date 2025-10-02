import styled from "styled-components";

const ModalContainer = styled.div`
  width: 39.09%;
  height: 42.98%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-left: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ForgotPassword = styled.a`
  color: #0077b5;
  text-decoration: none;
  font-size: 14px;
  margin-left: auto;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0077b5;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const GitHubButton = styled(LoginButton)`
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GitHubIcon = styled.span`
  margin-right: 10px;
`;

const TermsText = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 15px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-top: auto;
`;

