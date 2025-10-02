import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import {
  Background,
  Logo,
  StyleCard,
  StyleCardRed,
  AcceptProposalButton,
  MainContainer,
  ContentCard,
  SpinnerIcon,
  ButtonContent,
  BackgroundPattern,
  BackgroundOverlay,
  Title,
  Description
} from './AfterSignup.style';
import { getTokenFromLocalStorage, sendVerificationEmail } from "core/helpers/storage.js";
import { jwtDecode } from "jwt-decode";
import { useResetVerifyEmailMutation } from "../../redux/api/verifyEmail/verifyEmailApi.js";
import toast from "react-hot-toast";

const ItGalaxyMobile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-LogoWhite.png`;

function AfterSignup() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const token = getTokenFromLocalStorage();
  const [resetVeriftoken] = useResetVerifyEmailMutation();
  
  // Decode the JWT token if it exists
  const decodeToken = token ? jwtDecode(token) : null;
  const courier = decodeToken ? decodeToken.email : null;
  const role = decodeToken ? decodeToken.role : null;
  const username = role === 'ENTREPRISE' 
    ? decodeToken.username 
    : (decodeToken.name + " " + decodeToken.first_name);

  const handleResendEmail = async () => {
    try {
      setIsEmailSent(true);

      // Attempt to reset verification token
      const { data } = await resetVeriftoken({
        filterType: role,
        email: courier
      });

      // Check if new token exists and send verification email
      if (data && data.token) {
        const newToken = jwtDecode(data.token);
        const newVerifToken = newToken.verificationToken;

        await sendVerificationEmail(
          username,
          courier,
          role,
          newVerifToken,
          "dashboard"
        );  
        toast.success("Verification email resent successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      } else {
        alert("Failed to retrieve a new verification token."); // Error handling
      }
    } catch (error) {
      console.error("Error during email verification token reset:", error);
      alert("An error occurred while resending the verification email. Please try again later."); // Error handling
    }
  };


  return (
    <Background>
      <MainContainer>
        <Logo>
          <Mail size={64} />
        </Logo>s

        <ContentCard>
          <StyleCard>
            <Title>Bienvenue à Bord !</Title>
            <Description>
              Merci d'avoir rejoint notre communauté ! Veuillez vérifier votre boîte de réception pour un message de confirmation. 
              Cliquez sur le lien à l'intérieur pour valider votre compte et débloquer toutes les fonctionnalités incroyables que nous proposons.
            </Description>
          </StyleCard>

          <div>
            <StyleCardRed>
              Vous n'avez pas reçu l'e-mail ? Cliquez sur le bouton ci-dessous pour le renvoyer.
            </StyleCardRed>

            <AcceptProposalButton onClick={handleResendEmail} disabled={isEmailSent}>
              {isEmailSent ? (
                <ButtonContent>
                  <SpinnerIcon viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </SpinnerIcon>
                  Envoi en cours...
                </ButtonContent>
              ) : (
                <ButtonContent>
                  <Mail size={20} style={{ marginRight: '8px' }} />
                  Renvoyer l'e-mail de vérification
                </ButtonContent>
              )}
            </AcceptProposalButton>
          </div>
        </ContentCard>
      </MainContainer>

      <BackgroundPattern />
      <BackgroundOverlay />
    </Background>
  );
}

export default AfterSignup;