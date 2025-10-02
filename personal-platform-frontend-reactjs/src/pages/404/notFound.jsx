import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import FooterHome from "../../components/DashboardHome/FooterHome/FooterHome";
import Header from "../../components/Header/Header";
import {
  ErrorCode,
  ErrorMessage,
  GoHomeButton,
  NotFoundContainer,
} from "./notFound.style";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Non Trouvée - Erreur 404</title>
        <meta
          name="description"
          content="Désolé, la page que vous recherchez n'existe pas. Cliquez ici pour retourner à la page d'accueil."
        />
      </Helmet>
      <Header />
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Page Non Trouvée</ErrorMessage>
        <GoHomeButton onClick={() => navigate("/")}>Retour à l'accueil</GoHomeButton>
      </NotFoundContainer>
      <FooterHome />
    </>
  );
}