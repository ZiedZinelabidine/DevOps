import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';
import {
  ChevronDown,
  Box,
  ChevronRight,
  Server,
  Menu,
  Globe,
  X,
  CloudLightning, Users, FileText, ShoppingCart
} from 'lucide-react';
import SidebarItem from '../Monitoring-site/SidebarItem'; // Import the SidebarItem component
import Header from 'components/Header/Header';
import { Helmet } from 'react-helmet';
import Register from "components/Authentification/modals/register";
import MarketplaceComponents from '@components/DashboardItGalaxyMarketplaceComponnent/MarketplaceComponnents';
import { useParams } from 'react-router-dom';
import ItGalaxyAsService from '@components/DashboardHome/ItGalaxyAsService/ItGalaxyAsService';
import MarketPlaceAService from '@components/DashboardHome/MarketPlaceAService/MarketPlaceAService';
import GitFlow from './GitFlow';
import Gitlab from './Gitlab';
import Gitlabcicd from './Gitlabcicd';
import GitLabCICD from './Gitlabcicd';
import Gitlabci from './Gitlabci';
import GitlabRunners from './GitlabRunners';
import GitlabExp from './GitlabExp';
import FooterHome from '@components/DashboardHome/FooterHome/FooterHome';


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
  min-height: 100vh;
  display: flex;
  background-color: #030712;
  margin-bottom: 10%;
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

const GitlabPages = () => {

  const { chapter } = useParams();

  const [activeSection, setActiveSection] = useState(chapter);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showModalRegister, setModalRegister] = useState(false);
  const [titleH1, setTitleH1] = useState('');

  const handelUsersDevops = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/prestataires/job/DEVOPS`;
  };
  const handleModalRegister = () => {
    setModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  };

  useEffect(() => {

    switch (chapter) {
      case 'whatsgitlab': 
          setTitleH1('whats Gitlab');
          break;  

      case 'gitflow':
            setTitleH1('Gitflow');
            break;  
  
      case 'gitlabcicd': 
          setTitleH1('gitlab ci cd');
          break;      
      
      case 'gitlabciyml':
         setTitleH1('.gitlab-ci.yml');
         break;   
      
      case 'gitlabrunners':
          setTitleH1('Gitlab Runner');
          break;     
                    
       case 'gitlabExp':
            setTitleH1('.gitlab-ci.yml exemples pour tout type code');
            break;   

      case 'infraservice':
              setTitleH1('Infra As Service');
              break;               
    
      case 'appaservice':
              setTitleH1('App As Service');
               break;                
              
      case 'profilsdevops':
          setTitleH1('Profils Développeurs Mobile Experts | Experts & Freelances');
          break;
      case 'missionsdevops':
          setTitleH1('Missions Développeurs Mobile | Experts & Freelances');
          break;
      case 'marketplace':
          setTitleH1('Marketplace');
          break;
    }

  }, []);

  const sections = [
    { id: 'whatsgitlab', title: 'Whats gitlab ?', icon: <Box size={20} /> }, 
    { id: 'gitflow', title: 'Gitflow', icon: <Box size={20} /> }, 
    { id: 'gitlabcicd', title: 'gitlab ci cd', icon: <Box size={20} /> },
    { id: 'gitlabciyml', title: '.gitlab-ci.yml', icon: <Box size={20} /> },     
    { id: 'gitlabrunners', title: 'Gitlab Runner', icon: <Box size={20} /> },  
    { id: 'gitlabExp', title: 'Exemples .gitlab-ci.yml', icon: <Box size={20} /> },  
    { id: 'infraservice', title: 'Infra As Service', icon: <CloudLightning size={20} /> },  
    { id: 'appaservice', title: 'App As Service', icon: <Globe size={20} /> },  
    { id: 'profilsdevops', title: 'Profils DevOps Experts', icon: <Users size={20} /> },
    { id: 'missionsdevops', title: 'Missions DevOps', icon: <FileText size={20} /> }, // FileText for missions/projects
    { id: 'marketplace', title: 'Marketplace', icon: <ShoppingCart size={20} /> },
];


const projects = [
  {
    title: 'Mise en place d\'un pipeline CI/CD',
    description: "Concevoir et implémenter un pipeline d'intégration et de déploiement continu (CI/CD) pour les applications construites avec les technologies utilisées dans les projets fournis (par exemple, React, Node.js, Laravel). Assurer des tests automatisés, des processus de construction et des procédures de déploiement en place.",
    tech: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Node.js', 'React']
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Utiliser des outils comme Terraform ou AWS CloudFormation pour créer une infrastructure évolutive et gérable. Automatiser la création de l\'infrastructure pour faciliter la gestion des environnements de développement, de staging et de production.',
    tech: ['Terraform', 'AWS', 'CloudFormation', 'Infrastructure Management']
  },
  {
    title: 'Mise en place de la surveillance et de la journalisation',
    description: "Implémenter des solutions de surveillance utilisant des outils comme Prometheus, Grafana ou la stack ELK (Elasticsearch, Logstash, Kibana) pour visualiser la performance de l'application et les logs. Configurer des alertes pour notifier l'équipe de développement en cas de problèmes critiques.",
    tech: ['Prometheus', 'Grafana', 'ELK Stack', 'Monitoring']
  },
  {
    title: 'Containerisation et orchestration',
    description: "Containeriser les applications à l'aide de Docker pour garantir la cohérence entre les différents environnements de développement et de production. Utiliser Kubernetes pour orchestrer ces conteneurs dans des environnements de production.",
    tech: ['Docker', 'Kubernetes', 'Container Management']
  },
  {
    title: 'Optimisation des performances',
    description: "Effectuer des tests de performance et d'ajustement pour améliorer la rapidité et la réactivité de vos applications web. Mettre en œuvre des stratégies de mise en cache à l'aide d'outils comme Redis ou Varnish pour améliorer les temps de chargement.",
    tech: ['Performance Testing', 'Redis', 'Varnish', 'Web Optimization']
  },
  {
    title: 'Améliorations de la sécurité',
    description: "Mettre en œuvre les meilleures pratiques de sécurité dans le développement et le déploiement d'applications, y compris le renforcement de l'environnement et les évaluations de vulnérabilité. Utiliser des outils pour automatiser les tests de sécurité durant le pipeline CI/CD.",
    tech: ['Security Best Practices', 'Vulnerability Assessment', 'CI/CD Security']
  },
  {
    title: 'Gestion de base de données',
    description: "Mettre en place des sauvegardes automatisées et des plans de reprise après sinistre pour les bases de données utilisées (par exemple, MongoDB, MySQL). Effectuer des ajustements de performance pour les requêtes de bases de données afin d'améliorer les temps de réponse des applications.",
    tech: ['MongoDB', 'MySQL', 'Database Management', 'Performance Tuning']
  },
  {
    title: 'Automatisation des déploiements',
    description: "Développer des scripts d'automatisation pour les processus de déploiement afin de réduire les erreurs humaines et d'accélérer la livraison aux clients. S'assurer que le processus est reproductible et documenté.",
    tech: ['Bash', 'Python', 'Ansible', 'Deployment Automation']
  },
  {
    title: 'Gestion des configurations',
    description: "Mettre en œuvre des outils de gestion des configurations comme Ansible ou Chef pour assurer la cohérence des environnements. Faciliter la gestion des configurations des serveurs et des applications déployées.",
    tech: ['Ansible', 'Chef', 'Configuration Management', 'Automation']
  }
];


  const content = {

    whatsgitlab: {
      title: 'whatsgitlab',
      content: (
        <Gitlab />
      ),
    },
    gitflow: {
      title: 'gitflow',
      content: (
        <GitFlow />
      ),
    },
    gitlabcicd: {
      title: 'gitlabcicd',
      content: (
        <GitLabCICD />
      ),
    },

    gitlabciyml: {
      title: 'gitlabciyml',
      content: (
        <Gitlabci />
      ),
    },

    gitlabrunners: {
      title: 'gitlabciyml',
      content: (
        <GitlabRunners />
      ),
    },
   
    gitlabExp: {
      title: 'gitlabExp',
      content: (
        <GitlabExp />
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



    profilsdevops: {
      title: 'Trouvez un DevOps expert ',
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
                  DevOps
                </TerminalText>
              </TerminalWindow>

              <HeroTitle>Trouvez un DevOps Expert </HeroTitle>
              <HeroSubtitle>
                Git , AWS Services , Gitlab , CI/CD ..
              </HeroSubtitle>
              <Button onClick={handelUsersDevops}>
                Explorer les DevOps
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


    missionsdevops: {
      title: 'Missions DevOps',
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
          {`Formation DevOps | ${titleH1} - ItGalaxy `}
        </title>
        <meta
          name="description"
          content={`Formations Git débutant : ${titleH1} `}
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

export default GitlabPages;