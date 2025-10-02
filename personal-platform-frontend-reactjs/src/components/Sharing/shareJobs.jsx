import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { ArrowLeft, MapPin, Euro, Briefcase, Clock, Building2, Code, Laptop, Calendar, Users, Globe } from 'lucide-react';
import { useGetSharedAppelOffreQuery } from "../../redux/api/appeloffres/appeloffreApi";
import { useGetSharedProjectQuery } from "../../redux/api/projects/projectApi";
import HeaderGen from 'components/Header/Header';
import Register from "components/Authentification/modals/register";
import { Helmet } from "react-helmet";
import DisplayRawHtml from '@components/DisplayRawHtml/DisplayRawHtml';



const theme = {
  light: {
    background: 'linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 50%, #FDF2F8 100%)',
    cardBg: 'rgba(255, 255, 255, 0.7)',
    text: '#1F2937',
    textSecondary: '#6B7280',
    primary: '#9333EA',
    primaryLight: '#F3E8FF',
    border: '#E9D5FF',
    headerBg: 'rgba(255, 255, 255, 0.8)',
    buttonGradient: 'linear-gradient(to right, #9333EA, #DB2777)',
    buttonHoverGradient: 'linear-gradient(to right, #7E22CE, #BE185D)',
    success: '#10B981',
    danger: '#EF4444',
  },
  dark: {
    background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
    cardBg: 'rgba(15, 23, 42, 0.6)',
    text: '#F8FAFC',
    textSecondary: '#94A3B8',
    primary: '#38BDF8',
    primaryLight: 'rgba(56, 189, 248, 0.1)',
    border: '#1E293B',
    headerBg: 'rgba(15, 23, 42, 0.8)',
    buttonGradient: 'linear-gradient(to right, #38BDF8, #818CF8)',
    buttonHoverGradient: 'linear-gradient(to right, #0EA5E9, #6366F1)',
    success: '#34D399',
    danger: '#F87171',
  },
};

const GlobalStyle = styled.div`
  min-height: 100vh;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].background};
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].text};
  transition: all 0.3s ease;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].cardBg};
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(8px);

  &:hover {
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight};
    transform: translateX(-5px);
  }
`;

const JobHeader = styled.div`
  margin-top: 2rem;
  padding: 2.5rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].cardBg};
  border-radius: 1.5rem;
  border: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
`;


const CompanyLogo = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight};
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 2px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight};
  }
`;

const JobTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].buttonGradient};
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: -0.025em;
  line-height: 1.2;
`;

const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight}20;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].textSecondary};
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].cardBg};
  backdrop-filter: blur(8px);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const ApplyButton = styled.button`
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].buttonGradient};
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 1rem;
  border: none;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].buttonHoverGradient};
    transform: scale(1.02);
    box-shadow: 0 10px 20px -10px ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Section = styled.section`
  margin-top: 2rem;
  padding: 2.5rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].cardBg};
  border-radius: 1.5rem;
  border: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  backdrop-filter: blur(12px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
`;

const Description = styled.div`
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].textSecondary};
  line-height: 1.8;
  font-size: 1.125rem;
  
  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    margin-bottom: 1.5rem;

    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;

      &:before {
        content: '•';
        color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
        position: absolute;
        left: 0;
        font-size: 1.5rem;
        line-height: 1;
      }
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SkillBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight};
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
  border: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].cardBg};
  border-radius: 1rem;
  border: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  backdrop-filter: blur(12px);

  h2 {
    color: ${props => props.theme[props.isDark ? 'dark' : 'light'].danger};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme[props.isDark ? 'dark' : 'light'].textSecondary};
  }
`;



const ProjectTypeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  background: ${props => props.type === 'sharetask' ? '#10B981' : '#6366F1'};
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


function ShareJobs({ isDark = true }) {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");
  const type = queryParams.get("type");
  const agence = queryParams.get("agence");

  const isShareTask = type === "SHARETASK";

  const navigate = useNavigate();
  const [openModalRegister, setOpenModalRegister] = useState(false);

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };


  const {
    data: project,
    isLoading: isLoadingProject,
    isError: isErrorProject,
  } = useGetSharedProjectQuery(token, {
    skip: type === "Contrat",
  });

  const {
    data: contrat,
    isLoading: isLoadingContract,
    isError: isErrorContract,
  } = useGetSharedAppelOffreQuery(token, {
    skip: type === "SHARETASK",
  });


  const job = project || contrat;

  if (isLoadingProject || isLoadingContract) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle isDark={isDark}>
          <Container>
            <ErrorContainer isDark={isDark}>
              <h2>Chargement en cours...</h2>
              <p>Veuillez patienter pendant que nous récupérons les détails de l'offre.</p>
            </ErrorContainer>
          </Container>
        </GlobalStyle>
      </ThemeProvider>
    );
  }

  if (isErrorProject || isErrorContract || !job) {
    return (
      <>
        <HeaderGen active={"FREELANCERS"} />
        <ThemeProvider theme={theme}>
          <GlobalStyle isDark={isDark}>
            <Container>
              <BackButton isDark={isDark} onClick={() => navigate('/')}>
                <ArrowLeft size={20} />
                Retour aux offres
              </BackButton>
              <ErrorContainer isDark={isDark}>
                <h2>Offre non trouvée</h2>
                <p>Désolé, l'offre que vous recherchez n'existe pas ou n'est plus disponible.</p>
              </ErrorContainer>
            </Container>
          </GlobalStyle>
        </ThemeProvider>
      </>
    );
  }

  const handleApply = () => {
    alert('Fonctionnalité de candidature à venir !');
  };

  return (
    <>
       <Helmet>
          <title>{job.title}</title>
          <meta name="description" content={isShareTask ? `${job.project_description}` : `${job.appeloffre_description}`} />
          <meta name="keywords" content="recrutement freelance, recruter un freelance, freelance recrutement, agence informatique, agence de developpement web, agence developpement mobile, agence developpement application, agence developpement applications mobiles, agence developpement web, agence france developpement, agence francaise pour le developpement, agence developpement web paris, freelance web, developpeur freelance, freelance application, webmaster freelance, application freelance, site internet freelance, web designer freelance, recherche freelance, web développeur freelance, freelance agence, freelance mission informatique, dev freelance, contrat de freelance, freelance developpeur, freelance developpeur web, web developpeur freelance, developpeur en freelance, developpeur freelance malt, developpeur junior freelance, prix developpeur freelance, développeur web freelance" />
          <link rel="canonical" href={`https://itgalaxy.io/shareJob?type=${type}&token=${token}`} />
          <meta property="og:title" content="Plateforme Freelance Web | Recrutement de Développeurs et Agences" />
          <meta property="og:description" content="Trouvez des freelances qualifiés et des agences pour la création de sites internet et le développement web." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://itgalaxy.io/shareJob?type=${type}&token=${token}`} />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:site_name" content="ItGalaxy.io" />
          <link rel="alternate" hreflang="fr" href={`https://itgalaxy.io/shareJob?type=${type}&token=${token}`} />
          <link rel="alternate" hreflang="en" href={`https://itgalaxy.io/shareJob?type=${type}&token=${token}`} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Plateforme Freelance Web",
              "provider": {
                "@type": "Organization",
                "name": "ItGalaxy",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Paris",
                  "addressRegion": "Île-de-France",
                  "addressCountry": "FR"
                }
              },
              "description": "Recrutement de freelances web et d'agences de développement pour des projets de sites internet.",
              "areaServed": ["France", "Paris", "Lyon", "Marseille"],
              "serviceType": ["Recrutement Freelance", "Développement Web", "Création de Sites Internet"],
            })}
          </script>
        </Helmet>
      <HeaderGen active={"FREELANCERS"} />
      <ThemeProvider theme={theme}>
        <GlobalStyle isDark={isDark}>
          <Container>
            <BackButton
              isDark={isDark}
              onClick={() => {
                const url = agence === 'true' ? '/freelance-jobs' : '/freelance-jobs';
                navigate(url);
              }}
            >
              <ArrowLeft size={20} />
              Retour aux offres
            </BackButton>

            <JobHeader isDark={isDark}>
              <ProjectTypeBadge type={isShareTask ? 'sharetask' : 'contract'}>
                {isShareTask ? 'Projet à prix fixe' : 'Contrat'}
              </ProjectTypeBadge>

              <JobTitle isDark={isDark}>{job.title}</JobTitle>

              <MetaInfo>
                <MetaItem isDark={isDark}>
                  <MapPin size={20} />
                  <span>{job.location}</span>
                </MetaItem>
                <MetaItem isDark={isDark}>
                  <Euro size={20} />
                  <span>{job.price}</span>
                </MetaItem>
              </MetaInfo>

              <ApplyButton isDark={isDark} onClick={handleModalRegister}>
                Postuler maintenant
              </ApplyButton>
            </JobHeader>

            <Section isDark={isDark}>
              <SectionTitle isDark={isDark}>
                <Code size={28} />
                Description du poste
              </SectionTitle>
              <Description isDark={isDark}>
                {isShareTask ? <DisplayRawHtml content={job.project_description} /> : <DisplayRawHtml content={job.appeloffre_description} /> }
              </Description>
            </Section>

            <Section isDark={isDark}>
              <SectionTitle isDark={isDark}>
                <Laptop size={28} />
                Compétences requises
              </SectionTitle>
              <SkillsGrid>
                {job.skills.map((skill, index) => (
                  <SkillBadge key={index} isDark={isDark}>
                    <Code size={18} />
                    {skill}
                  </SkillBadge>
                ))}
              </SkillsGrid>
            </Section>
          </Container>
        </GlobalStyle>
      </ThemeProvider>
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={handleCloseModalRegister}
          switchBetweenModals={false}
          proxy={"marketplace"}
        />
      )}
    </>
  );
}

export default ShareJobs;