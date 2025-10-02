/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable default-case */
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../../../core/helpers/storage";
import { useLoginAccountingMutation } from "../../../redux/api/auth/authApi";
import ModalForgotPassword from "../../ModalITgalaxy/ModalForgotPassword/ModalForgotPassword";
import {
  BackButton,
  Checkbox,
  ForgotPassword,
  Header,
  Input,
  InputContainer,
  Label,
  LabelRemember,
  LoginButton,
  RememberMeContainer,
  StyledModal,
  Subtitle,
  Title,
} from "./styled";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const LoginAccounting = ({
  proxy,
  setOpenModalLogin,
  openModalLogin,
  handleModalLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginAccountingMutation();
  const [forgotpwdModal, setForgotpwdModal] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    setForgotpwdModal(true);
  };

  const handleBacktoLogin = () => {
    setForgotpwdModal(false);
  };

  const closeModal = () => {
    setOpenModalLogin(false);
    setForgotpwdModal(false);
  };
  const connect = async () => {
    try {
      await login({
        email: email,
        password: password,
      }).unwrap();

      toast.success("Login success", {
        position: "top-center",
        autoClose: 3000,
      });
      const token = await getAccessToken();
      const decodeToken = token ? jwtDecode(token) : null;

      if (proxy === "dashboard") {
        navigate(`/dashboardAccounting`, { replace: true });
      } else {
        window.location.href = `/${proxy}`;
      }
    } catch (e) {
      toast.error("Incorrect identifier!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return !forgotpwdModal ? (
    <StyledModal
      size="lg"
      centered
      show={openModalLogin}
      onHide={handleModalLogin}
      animation={true}
    >
      <Modal.Body>
        <Header>
          <BackButton onClick={handleModalLogin}>
            <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
          </BackButton>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "23px",
            }}
          >
            <Title>Login with your account</Title>
            <Subtitle>For Accounting.</Subtitle>
          </div>
        </Header>
        <InputContainer>
          <Label>Email</Label>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <RememberMeContainer>
          <Checkbox type="checkbox" id="remember" />
          <LabelRemember htmlFor="remember">Remember me</LabelRemember>
          <ForgotPassword onClick={handleForgotPassword}>
            Forgot password?
          </ForgotPassword>
        </RememberMeContainer>

        <LoginButton onClick={connect} disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </LoginButton>
      </Modal.Body>
    </StyledModal>
  ) : (
    <ModalForgotPassword
      show={forgotpwdModal}
      onBack={handleBacktoLogin}
      onHide={closeModal}
    />
  );
};

export default LoginAccounting;
