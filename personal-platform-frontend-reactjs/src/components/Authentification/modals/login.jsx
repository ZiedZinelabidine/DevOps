/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable default-case */
import GoogleAuthLogin from "components/GoogleAuth/Login/GoogleAuthLogin";
import { jwtDecode } from "jwt-decode";
import { Eye, EyeOff } from "lucide-react"; // Import the required icons
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ModalForgotPassword from "../../../components/ModalITgalaxy/ModalForgotPassword/ModalForgotPassword";
import { getAccessToken } from "../../../core/helpers/storage";
import { useLoginMutation } from "../../../redux/api/auth/authApi";
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
  StyleContentModal,
  StyledModal,
  Subtitle,
  Title,
} from "./styled";

const Login = ({
  proxy,
  setOpenModalLogin,
  openModalLogin,
  handleModalLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
    window.history.back();
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
      const typeUser = token ? decodeToken.role : null;

      if (proxy === "dashboard") {
        switch (typeUser) {
          case "CANDIDAT":
            navigate(`/dashboardCandidat`, { replace: true });

            break;
          case "ENTREPRISE":
            navigate(`/dashboardCompany`, { replace: true });
            break;
          case "RECRUTER":
            navigate(`/dashboardRecruter`, { replace: true });

            break;
          case "ACCOUNTING":
            navigate(`/dashboardAccounting`, { replace: true });
            break;
        }
      } else {
        window.location.href = `/${proxy}`;
      }
    } catch (e) {
      const errorMessage =
        e.data?.message || e.message || "An error occurred during login";
      toast.error(`Login Failed: ${errorMessage}`, {
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
           <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "23px",
            }}
          >
            <Title>Connectez-vous avec votre compte</Title>
            <Subtitle>Pour entreprise , Développeur Freelance , Agence or Recruteur.</Subtitle>
          </div>
        </Header>
        <StyleContentModal>
          <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
            <GoogleAuthLogin />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
                width: "100%",
              }}
            >
              <hr
                style={{
                  flex: 1,
                  border: "none",
                  borderTop: "1px solid #ccc",
                  margin: "0 10px",
                }}
              />
              <span
                style={{
                  padding: "0 10px",
                  fontWeight: "bold",
                  color: "#333",
                  whiteSpace: "nowrap",
                }}
              >
                OR
              </span>
              <hr
                style={{
                  flex: 1,
                  border: "none",
                  borderTop: "1px solid #ccc",
                  margin: "0 10px",
                }}
              />
            </div>
            <InputContainer>
              <Label>Email</Label>
              <Input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Mot de passe</Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                }}
              >
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{ width: "100%", paddingRight: "40px" }}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </InputContainer>
            <RememberMeContainer>
              <ForgotPassword onClick={handleForgotPassword}>
              Mot de passe oublié ?
              </ForgotPassword>
            </RememberMeContainer>

            <LoginButton onClick={connect} disabled={isLoading}>
              {isLoading ? "Connextion en cours..." : "Connexion"}
            </LoginButton>
          </div>
        </StyleContentModal>
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

export default Login;
