import { getTokenFromLocalStorage } from "core/helpers/storage.js";
import { Background, Logo, StyleCard, StyleCardRed, AcceptProposalButton } from "./MobileDashboard.style.js";
import { jwtDecode } from "jwt-decode";

const ItGalaxyMobile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/logo/ItGalaxy-LogoWhite.png`;

function MobileDashboard() {
  const token = getTokenFromLocalStorage();

  // Decode the JWT token if it exists
  const decodeToken = token ? jwtDecode(token) : null;
  const courier = decodeToken ? decodeToken.email : null;
  const role = decodeToken ? decodeToken.role : null;
  const username = role === 'ENTREPRISE' 
    ? decodeToken.username 
    : (decodeToken.name + " " + decodeToken.first_name);

  return (
    <Background>
      <Logo src={ItGalaxyMobile} alt="It Galaxy Logo" />
      <StyleCard>
        Bienvenue {username}! <br />
        Veuillez noter que la plateforme ITGalaxy est actuellement accessible uniquement sur desktop. Assurez-vous de vous connecter depuis un ordinateur portable pour explorer toutes les offres d'emploi Contrats et Freelances, les videos de formations , les services cloud et les fonctionnalités de portefeuille.<br />
        Si vous avez des questions ou avez besoin d'aide, n'hésitez pas à nous contacter !
    </StyleCard>
    </Background>
  );
}

export default MobileDashboard;
