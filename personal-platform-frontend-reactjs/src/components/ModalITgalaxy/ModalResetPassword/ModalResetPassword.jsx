import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import { useResetPasswordMutation } from "../../../redux/api/auth/authApi";
import Login from "../../Authentification/modals/login.jsx";
import {
  BackButton,
  Header,
  Input,
  InputContainerForgotPawwsord,
  Label,
  LoginButton,
  StyledModal,
  StyledModalFooter,
  Subtitle,
  Title,
} from "../../Authentification/modals/styled.js";

const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const ModalResetPassword = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");
  const type = queryParams.get("type");

  // Regex to validate password
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isMatchValid, setIsMatchValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [resetPassword, { isLoading, isError, error }] =
    useResetPasswordMutation();
  const validatePassword = (value) => {
    setNewPassword(value);
    if (passRegex.test(value)) {
      setIsPasswordValid(true);
      setErrorMessage(""); // Clear error message if valid
    } else {
      setIsPasswordValid(false);
      setErrorMessage(
        "Password must be at least 8 characters long, contain at least one uppercase letter and one special character."
      ); // Set error message if invalid
    }
  };

  const handleResetPassword = async () => {
    if (isPasswordValid && isMatchValid) {
      try {
        const response = await resetPassword({
          filterType: type,
          token,
          params: { newPassword },
        }).unwrap();
        // Success notification
        toast.success(
          "Password successfuly changed , pleaze login with new credentials .",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );

        // If successful, show the login modal
        setShowLoginModal(true);
      } catch (err) {
        console.error("Failed to reset password : ", err);
        // Handle error messages for the user, if any here.
        toast.error("Failed to reset password : Token expired .", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      // Success notification
      toast.error(
        "Password validation failed: ",
        { isPasswordValid, isMatchValid },
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    setIsMatchValid(value === newPassword);
  };

  const handelreturn = () => {
    window.location.href = `/`;
  };

  return !showLoginModal ? (
    <StyledModal
      size="lg"
      centered
      show={true}
      onHide={() => {
        /* Handle modal close here if needed */
      }}
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
            <Title>Mot de passe oublié ?</Title>
            <Subtitle>Veuillez saisir votre email pour obtenir un lien pour réinitialiser votre mot de passe.</Subtitle>
          </div>
        </Header>

        <InputContainerForgotPawwsord>
          <Label>Entrez un nouveau mot de passe</Label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => validatePassword(e.target.value)} // Use the validatePassword function
            className={isPasswordValid ? "" : "is-invalid"}
          />
          {!isPasswordValid && (
            <small className="text-danger">{errorMessage}</small>
          )}{" "}
          {/* Show error message */}
        </InputContainerForgotPawwsord>

        <InputContainerForgotPawwsord>
          <Label>Confirmer le nouveau mot de passe</Label>
          <Input
            type="password"
            value={confirmpassword}
            onChange={(e) => validateConfirmPassword(e.target.value)}
            className={isMatchValid ? "" : "is-invalid"}
          />
          {!isMatchValid && confirmpassword && (
            <small className="text-danger">Passwords do not match!</small>
          )}
        </InputContainerForgotPawwsord>

        <LoginButton onClick={handleResetPassword}>Valider</LoginButton>
      </Modal.Body>
      <StyledModalFooter>
        {/* Add footer content here if needed */}
      </StyledModalFooter>
    </StyledModal>
  ) : (
    <Login
      proxy={"dashboard"}
      openModalLogin={showLoginModal}
      handleModalLogin={() => setShowLoginModal(false)}
    />
  );
};

export default ModalResetPassword;
