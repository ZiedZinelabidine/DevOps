import { useState } from "react";
import Modal from "react-bootstrap/Modal";
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
} from "../../../components/Authentification/modals/styled.js";
import { sendForgotPaswordEmail } from "../../../core/helpers/storage.js";
import { useUserForgotPasswordMutation } from "../../../redux/api/auth/authApi";
import { Spinner } from "react-bootstrap";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const ModalForgotPassword = (propos) => {
  const [email, setEmail] = useState("");
  const [loading , setLoading] = useState(false);
  const [errorMessageForgotPassword, setErrorMessageForgotPassword] =
    useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [getTokenforgotPassword] = useUserForgotPasswordMutation(); // Use the mutation hook

  const sendMailForgotPassword = async () => {
    // Reset previous messages
    setErrorMessageForgotPassword("");
    setSuccessMessage("");

    // Check if the email field is empty
    if (!email) {
      setErrorMessageForgotPassword("Email field cannot be empty.");
      setLoading(false);

      return;
    }

    try {
      setLoading(true);
      // Use the mutation function to send the email
      const response = await getTokenforgotPassword(email);
      // Check if the response status is ok (200)
      if (!response.data || !response.data.resetToken) {
        setErrorMessageForgotPassword("No user with this email found."); // Adjust error message based on status
        setLoading(false);

        return;
      }
      const userData = response.data; // Access the data assuming it's returned correctly
      // Send the reset password email
      await sendForgotPaswordEmail(
        "",
        email,
        userData.type,
        response.data.resetToken
      );
      setLoading(false);

      // Set success message
      setSuccessMessage(
        "A link has been sent to reset your password. Please check your email."
      );
    } catch (error) {
      console.error(
        "Error occurred while sending password reset email:",
        error
      );
      setErrorMessageForgotPassword(
        "An error occurred, please try again later."
      );
    }
  };

  return (
    <StyledModal
      size="lg"
      centered
      show={propos.show}
      onHide={propos.onHide}
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
            <Subtitle>
             Veuillez saisir votre email pour obtenir un lien pour réinitialiser votre mot de passe.
            </Subtitle>
          </div>
        </Header>

        <InputContainerForgotPawwsord>
          <Label>Email</Label>
          <Input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMessageForgotPassword(""); // Clear previous error
              setSuccessMessage(""); // Clear success message on input change
            }}
          />
        </InputContainerForgotPawwsord>

        {errorMessageForgotPassword && (
          <div style={{ color: "red", marginTop: "10px" }}>
            {errorMessageForgotPassword}
          </div>
        )}

        {successMessage && (
          <div style={{ color: "green", marginTop: "10px" }}>
            {successMessage}
          </div>
        )}
        <LoginButton onClick={sendMailForgotPassword}>Valider</LoginButton>
        {loading && (
          <Spinner  style={{marginTop: "10px" , marginLeft: "630px;" }} />         
          )}     
      </Modal.Body>
      <StyledModalFooter></StyledModalFooter>
    </StyledModal>
  );
};

export default ModalForgotPassword;
