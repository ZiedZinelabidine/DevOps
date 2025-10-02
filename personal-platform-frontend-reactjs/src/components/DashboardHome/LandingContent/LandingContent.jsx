import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";
import LandingCard from "./LandingCard/LandingCard";
import { LANDING } from "./LandingContent.constants";
import {
  ColumnStyle,
  Container,
  GridItem,
  IconStyle,
  RootStyle,
} from "./LandingContent.style";
import styled from "styled-components";

const LandingIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/landingIcon.webp`;

const Header = styled.div`
  align-items: center;
  text-align: center;
  padding-top: 10%;


`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #60a5fa, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
   margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #94A3B8;
  line-height: 1.6;
 align-items: center;
  text-align: center;
`;


function LandingContent() {
  const intl = useIntl();
  
  const splitIntoColumns = (arr, numColumns) => {
    return Array.from({ length: numColumns }, (_, colIndex) =>
      arr.filter((_, i) => i % numColumns === colIndex)
    );
  };

  const [columns, setColumns] = useState(() => splitIntoColumns(LANDING, 3));

  useEffect(() => {
    const updateColumns = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 900) {
        setColumns(splitIntoColumns(LANDING, 1));
      } else if (screenWidth <= 1200) {
        setColumns(splitIntoColumns(LANDING, 2));
      } else {
        setColumns(splitIntoColumns(LANDING, 3));
      }
    };

    window.addEventListener("resize", updateColumns);
    updateColumns();

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <RootStyle>
      <Helmet>
          <title>Trouver un développeur freelance & agence Informatique</title>
          <meta name="description" content="Découvrez les meilleures développeurs freelances et les agences informatiques compétents. Trouvez un développeur freelance idéal pour vos projets." />
          <link rel="canonical" href="https://itgalaxy.io" />
          <meta property="og:title" content="Trouver un développeur freelance & agence Informatique" />
          <meta property="og:description" content="Découvrez les meilleures développeurs freelances et les agences informatiques compétents. Trouvez un développeur freelance idéal pour vos projets." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://itgalaxy.io" />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:site_name" content="ItGalaxy.io" />
          <link rel="alternate" hreflang="fr" href="https://itgalaxy.io" />
          <link rel="alternate" hreflang="en" href="https://itgalaxy.io" />
      </Helmet>


      <Header>
          <Title>Plateforme des développeurs freelances et agences informatiques adoptée par plus de 350 000 utilisateurs </Title>
          <Subtitle>
            Découvrir la methode innovante de la plateforme des développeurs freelances & agences informatiques avec des offres totalement gratuit
          </Subtitle>
        </Header>
        <Container>

        {columns.map((column, columnIndex) => (
          <ColumnStyle key={columnIndex}>
            {column.map((testimonial, index) => (
              <GridItem key={index}>
                <LandingCard
                  content={intl.formatMessage({ id: testimonial.contentId })}
                  user={testimonial.user}
                />
              </GridItem>
            ))}
          </ColumnStyle>
        ))}
      </Container>
      <IconStyle>
        <img src={LandingIcon} alt="Icône de la page d'accueil représentant nos services" />
      </IconStyle>
    </RootStyle>
  );
}

export default LandingContent;
