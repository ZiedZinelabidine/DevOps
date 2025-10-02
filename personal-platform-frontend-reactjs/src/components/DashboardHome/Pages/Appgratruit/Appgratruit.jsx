import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';
import {
  ChevronDown,
  Box,
  Boxes,
  ChevronRight,
  Server,
  GitFork,
  Menu,
  Globe,
  X,
  CloudLightning, Monitor, TabletSmartphone, Users, FileText, ShoppingCart
} from 'lucide-react';
import SidebarItem from '../Monitoring-site/SidebarItem'; // Import the SidebarItem component
import Header from 'components/Header/Header';
import { Helmet } from 'react-helmet';
import Register from "components/Authentification/modals/register";
import MarketplaceComponents from '@components/DashboardItGalaxyMarketplaceComponnent/MarketplaceComponnents';
import { useParams } from 'react-router-dom';
import GuideEntrepreneur from './GuideEntrepreneur';
import MarketPlaceAService from '@components/DashboardHome/MarketPlaceAService/MarketPlaceAService';
import ItGalaxyAsService from '@components/DashboardHome/ItGalaxyAsService/ItGalaxyAsService';
import FooterHome from '@components/DashboardHome/FooterHome/FooterHome';
import Offers from '../Offres';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #030712;
    color: #f3f4f6;
  }
`;

const Container = styled.div`
  min-height: 130vh;
  display: flex;
`;

const SidebarToggle = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 50;
  background-color: #1f2937;
  color: #e5e7eb;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Sidebar = styled.div`
  width: 16rem;
  background-color: #111827;
  border-right: 1px solid #1f2937;
  overflow-y: auto;
  padding-top: 30px;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 1024px) {
    position: fixed;
    inset-y: 0;
    left: 0;
    z-index: 40;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  }
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #1f2937;
`;

const SidebarTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #f3f4f6;
  margin: 0;
`;

const SidebarSubtitle = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
`;

const Nav = styled.nav`
  padding: 1rem 0;
`;

const NavButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  text-align: left;
  transition: all 0.2s;
  background: ${props => props.isActive ? 'rgba(30, 58, 138, 0.5)' : 'transparent'};
  color: ${props => props.isActive ? '#60a5fa' : '#d1d5db'};
  border: none;
  border-right: ${props => props.isActive ? '4px solid #60a5fa' : 'none'};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isActive ? 'rgba(30, 58, 138, 0.5)' : 'rgba(31, 41, 55, 0.5)'};
  }

  span {
    font-weight: 500;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const WelcomeCard = styled.div`
  background: linear-gradient(to right, #1e3a8a, #1e40af);
  color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`;


const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
`;

const SectionContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #e2e8f0;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #0ea5e9;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94a3b8;
  font-size: 1.125rem;
  margin-bottom: 4rem;
`;
const ShowMoreButton = styled.button`
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 1.125rem;
  border: 1px solid #0EA5E9;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s;
  
  &:hover {
    background: linear-gradient(135deg, #0EA5E9, #38BDF8);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;


const Card = styled.div`
  background-color: #111827;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #1f2937;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #f3f4f6;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  space-y: 0.75rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d1d5db;
  margin-bottom: 0.75rem;

  svg {
    color: #60a5fa;
  }
`;

const CodeBlock = styled.div`
  background: #16162a;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
  border: 1px solid rgba(146, 51, 234, 0.2);
  box-shadow: 0 0 30px rgba(146, 51, 234, 0.1);
  font-size: 1rem;
  line-height: 1.6;
  color: #a5b4fc;

  .function { color: #c084fc; }
  .string { color: #34d399; }
  .keyword { color: #f472b6; }
  .comment { color: #64748b; }
`;


const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      transparent 0%,
      transparent 50%,
      rgba(14, 165, 233, 0.03) 50%,
      rgba(14, 165, 233, 0.03) 100%
    );
    background-size: 4px 4px;
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 64rem;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const TerminalWindow = styled.div`
  background: #1a1f2e;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: left;
  border: 1px solid rgba(14, 165, 233, 0.2);
  box-shadow: 0 0 30px rgba(14, 165, 233, 0.1);
`;

const TerminalHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TerminalDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$color};
`;

const terminalBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;


const TerminalText = styled.div`
  color: #e2e8f0;
  font-size: 1.125rem;
  line-height: 1.6;

  &::after {
    content: '▋';
    animation: ${terminalBlink} 1s infinite;
    color: #0ea5e9;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 2rem 0;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(14, 165, 233, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  margin: 5px;

  &::before {
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

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
  }
`;


const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


const ProjectCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(14, 165, 233, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #0ea5e9;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(30%) brightness(0.8);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(10, 15, 28, 0.8) 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(14, 165, 233, 0.1);
  color: #38bdf8;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  border: 1px solid rgba(14, 165, 233, 0.2);
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;


const IconCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
`;

const Appgratruit = () => {

  const { chapter } = useParams();

  const [activeSection, setActiveSection] = useState(chapter);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showModalRegister, setModalRegister] = useState(false);
  const [titleH1, setTitleH1] = useState('');

  const handelUsersDevops = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/prestataires/job/DEVELOPER_FRONTEND`;
  };
  const handleModalRegister = () => {
    setModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  };

  useEffect(() => {

    switch (chapter) {
      case 'guideEntrepreneur':
        setTitleH1('Guide Entrepreneur: comment créer application mobile');
        break;
      case 'guideDeveloppeur':
          setTitleH1('Guide Devellopeur: comment créer application mobile pour votre client');
          break;  
      case 'devMobileReactvsFlutter':
        setTitleH1('React Vs Flutter | Experts & Freelances');
        break;
      case 'WordpressToMobile':
        setTitleH1('Créer une application mobile à partir d\'un site wordpress | Experts & Freelances');
        break;
      case 'ShopifyToMobile':
        setTitleH1('Créer une application mobile à partir d\'un site shopify | Experts & Freelances');
        break;
      case 'PriceApplicationMobile':
        setTitleH1('Esitimation de prix d\'une application Mobile | Experts & Freelances');
        break;
      case 'ArchitectureAppMobile':
          setTitleH1('Guide Complet : Architecture d\'une Application Mobile et bonne pratiques');
          break;  

      case 'infraservice':
            setTitleH1('Infra As Service');
            break;               
  
      case 'appaservice':
            setTitleH1('App As Service');
             break;    

      case 'profilsdeveloppeursmobile':
          setTitleH1('Profils Développeurs Mobile Experts | Experts & Freelances');
          break;
      case 'missionsdeveloppeursmobile':
          setTitleH1('Missions Développeurs Mobile | Experts & Freelances');
          break;
      case 'marketplace':
          setTitleH1('Marketplace');
          break;
    }

  }, []);

  const sections = [
    { id: 'guideEntrepreneur', title: 'Guide Entrepreneur: App Mobile', icon: <Box size={20} /> },
    { id: 'infraservice', title: 'Infra As Service', icon: <CloudLightning size={20} /> },  
    { id: 'appaservice', title: 'App As Service', icon: <Globe size={20} /> },  
    { id: 'profilsdeveloppeursmobile', title: 'Profils Développeurs Mobile Experts', icon: <Users size={20} /> },
    { id: 'missionsdeveloppeursmobile', title: 'Missions Développeurs Mobile', icon: <FileText size={20} /> }, // FileText for missions/projects
    { id: 'marketplace', title: 'Marketplace', icon: <ShoppingCart size={20} /> },
];


const projects = [
  {
    title: 'Recherche freelance création site ecommerce',
    description: "Bonjour, Je suis à la recherche d'un developpeur web spécialisé dans la création de sites e-commerce afin de développer une boutique en ligne. Mon objectif est de créer un site complet. Le projet inclut non seulement la conception du site web en lui-même, mais aussi tous les aspects visuels et graphiques (logo, couleurs, police etc..).",
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB' , 'Figma' , 'SEO' , 'LandingPage' , 'Page web']
  },
  {
    title: 'Créateur de site Web et concepteur graphique (designer) WordPress',
    description: 'Vous êtes un expert de sites Web WordPress éxpérimenté avec un sens aigu du design ? Vous aimez combiner compétences techniques et créativité pour créer des sites Web exceptionnels ? Si tel est le cas, nous voulons vous entendre !',
    tech: ['Php' , 'JavaScript' , 'HTML' , 'CSS','Figma', 'Canvas', 'ecommerce' , 'SEO' ]
  },
  {
    title: 'Optimisation de la vitesse du site Web',
    description: "Notre site web vient d'étre deployé en production mais il lui faut plus de 6 à 8 secondes pour se charger via différents sites de test comme PageSpeed. On a besoin que quelqu'un vienne et ramène ce nombre à environ 2 à 3 secondes si possible.",
    tech: ['WordPress', 'Page Speed Optimization', 'JavaScript' , 'CSS' , 'Image Editing' , 'Search Engine Optimization']
  },
  {
    title: "Concepteur Web expérimenté recherché pour un site Web de nettoyage de conduits d'air à fort taux de conversion à l'échelle nationale",
    description: "Site Web de nettoyage de conduits d'air à l'échelle nationale – Concepteur Web expert recherché J'ai besoin d'un concepteur Web expérimenté pour créer un site Web de haute qualité, axé sur la conversion, pour une entreprise nationale de nettoyage de conduits d'air. La conception doit être similaire en termes de style et de structure à celle d'A1 Garage – propre, professionnelle et conçue pour convertir les visiteurs en clients.",
    tech: ['Angular', 'WordPress' , 'HTML' , 'CSS' , 'PHP', 'Web Design' ]
  },
  {
    title: 'Développeur Laravel pour modifier et améliorer notre site Web de livraison de pizza existant.',
    description: "Sur notre page principale « pizza » sur le site Web, lorsque vous cliquez sur une pizza, vous avez la possibilité de choisir moitié-moitié et de la personnaliser.",
    tech: [
      'Laravel',
      'PHP',
      'JavaScript',
      'Vue.js',
      'MongoDB',
      'React',
      'Vuetify',
      'GitLab',
      'Docker',
      'API Development',
      'MySQL',
      'Yii2',
      'Object-Oriented Programming',
      'English'
  ]   
  },
  {
    title: "Résoudre les problèmes techniques avec le site Web actuel",
    description: "1. Le lien hypertexte « Demander un devis » sur la page d'accueil fonctionne sur ordinateur portable mais pas sur mobile. (Voir le fichier joint n° 1) , 2. Les photos de tous les produits de la flotte ne peuvent pas être visualisées lors d'un zoom avant. (Voir les fichiers joints n° 2 et n° 3)",
    tech: [
      'WordPress',
      'Web Development',
      'PHP',
      'JavaScript',
      'HTML',
      'Troubleshooting',
      'CSS',
      'Web Design',
      'Incident Management'
    ]
  }]


  const content = {
    guideEntrepreneur: {
      title: 'guideEntrepreneur',
      content: (
        <GuideEntrepreneur />

      ),
    },
    
    infraservice: {
      title: 'infraservice',
      content: (
        <MarketPlaceAService />
      ),
    },


    appaservice: {
      title: 'appaservice',
      content: (
        <ItGalaxyAsService />
      ),
    },


    profilsdeveloppeursmobile: {
      title: 'Trouvez un Developpeur Mobile expert ',
      content: (
        <>
          <HeroSection>
            <HeroContent>
              <TerminalWindow>
                <TerminalHeader>
                  <TerminalDot $color="#ff5f56" />
                  <TerminalDot $color="#ffbd2e" />
                  <TerminalDot $color="#27c93f" />
                </TerminalHeader>
                <TerminalText>
                  $ whoami<br />
                  Mobile Developer
                </TerminalText>
              </TerminalWindow>

              <HeroTitle>Trouvez un Développeur Mobile Expert </HeroTitle>
              <HeroSubtitle>
                Développement web , mobile , design ..
              </HeroSubtitle>
              <Button onClick={handelUsersDevops}>
                Explorer les Développeurs Mobile
                <ChevronRight size={20} />
              </Button>
              <Button onClick={handleModalRegister}>
                Explorer les Projets
                <ChevronRight size={20} />
              </Button>
            </HeroContent>
          </HeroSection>
        </>
      ),
    },


    missionsdeveloppeursmobile: {
      title: 'Missions Developpeurs Mobile ',
      content: (
        <>
          <Section>
            <SectionContent>
              <SectionTitle>
                <Server />
                Missions & Contracts
              </SectionTitle>
              <SectionSubtitle>
                Découvrez les missions partagés sur notre plateform
              </SectionSubtitle>
              <ProjectsGrid>
                {projects.map((project, index) => (
                  <ProjectCard key={index} onClick={() => handleModalRegister(project.tech[0])}>
                     <ProjectContent>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <TechStack>
                        {project.tech.map((tech, techIndex) => (
                          <TechTag key={techIndex}>{tech}</TechTag>
                        ))}
                      </TechStack>
                      <ProjectDescription>{project.description}</ProjectDescription>
                    </ProjectContent>
                  </ProjectCard>
                ))}

              </ProjectsGrid>
              <ButtonContainer>
                <ShowMoreButton onClick={() => handleModalRegister()}>
                  Voir plus de Missions
                  <ChevronDown size={20} />
                </ShowMoreButton>
              </ButtonContainer>
            </SectionContent>
          </Section>
        </>
      ),
    },
    marketplace: {
      title: 'ItGalaxy Marketplace ',
      content: (
        <>
          <MarketplaceComponents />
        </>
      ),
    },
  };

  return (
    <>
      <Helmet>
        <title>
          {`${titleH1} - ItGalaxy `}
        </title>
        <meta
          name="description"
          content={`${titleH1} - Dev Mobile Freelances & Experts `}
        />
      </Helmet>
      <Header />
      <GlobalStyle />
      <Container>
        <SidebarToggle onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </SidebarToggle>
        <Sidebar isOpen={isSidebarOpen}>
          <Nav>
            {sections.map((section) => (
              <SidebarItem
                key={section.id}
                icon={section.icon}
                title={section.title}
                isActive={activeSection === section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  if (window.innerWidth < 1024) {
                    setIsSidebarOpen(false);
                  }
                }}
              />
            ))}
          </Nav>
        </Sidebar>

        <MainContent>
          <ContentWrapper>
            {content[activeSection]?.content}
          </ContentWrapper>
          <Card> 
          <Offers />
          </Card>

        </MainContent>
        {showModalRegister && (
          <Register
            openModalRegister={showModalRegister}
            setOpenModalRegister={setModalRegister}
            handleModalRegister={handleCloseModalRegister}
            proxy={"dashboard"}
          />)}
      </Container>
      <FooterHome page={"seo"} />
    </>
  );
};

export default Appgratruit;