import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';
import {
  CloudLightning,
  AlertTriangle,
  ChevronDown,
  Box,
  ChevronRight,
  Server,
  Gauge,
  GitFork,
  Info,
  LayoutDashboard,
  Menu,
  MonitorCheck,
  ScrollText,
  ShoppingCart,
  UsersRound,
  X,
  Globe
} from 'lucide-react';
import SidebarItem from './SidebarItem'; // Import the SidebarItem component
import Header from 'components/Header/Header';
import { Helmet } from 'react-helmet';
import Register from "components/Authentification/modals/register";
import MarketplaceComponents from '@components/DashboardItGalaxyMarketplaceComponnent/MarketplaceComponnents';
import { useParams } from 'react-router-dom';
import MarketPlaceAService from '@components/DashboardHome/MarketPlaceAService/MarketPlaceAService';
import ItGalaxyAsService from '@components/DashboardHome/ItGalaxyAsService/ItGalaxyAsService';
import FooterHome from '@components/DashboardHome/FooterHome/FooterHome';
import Offers from '../Offres';

const http = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/http.png`;
const ELK = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/ELK.png`;
const ELK_0 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/traitement-data.png`;
const K_0 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/kibana1.png`;
const A_0 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/Alert1.png`;
const S_HTTP = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/status_http.png`;




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

const MonitoringSite = () => {

  const { chapter } = useParams();


  const [activeSection, setActiveSection] = useState(chapter);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showModalRegister, setModalRegister] = useState(false);
  const [titleH1, setTitleH1] = useState('');

  const handelUsersDevops = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/prestataires/job/devops`;
  };
  const handleModalRegister = () => {
    setModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  };

  useEffect(() => {

    switch (chapter) {
      case 'analyseetidentification':
        setTitleH1(' : Comment monitorer un site web');
        break;

      case 'infraservice':
          setTitleH1('Infra As Service');
          break;               

      case 'appaservice':
          setTitleH1('App As Service');
           break;               
               
      case 'profilsdevops':
        setTitleH1(' : Profils DevOps Experts Monitoring');
        break;
      case 'missionsdevops':
        setTitleH1(' : Missions DevOps Monitoring');
        break;
      case 'marketplacemonitoring':
        setTitleH1(' : Marketplace Monitoring');
        break;
    }

  }, []);



  const sections = [
    { id: 'commentmonitorersiteweb', title: 'Comment monitorer un site web', icon: <Info size={20} /> },
    { id: 'infraservice', title: 'Infra As Service', icon: <CloudLightning size={20} /> },  
    { id: 'appaservice', title: 'App As Service', icon: <Globe size={20} /> },  
    { id: 'profilsdevops', title: 'Profils DevOps Experts Monitoring', icon: <UsersRound size={20} /> },
    { id: 'missionsdevops', title: 'Missions DevOps Monitoring', icon: <ScrollText size={20} /> },
    { id: 'marketplacemonitoring', title: 'Marketplace Monitoring', icon: <ShoppingCart size={20} /> },
  ];

  const projects = [
    {
      title: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      tech: ['Terraform', 'AWS', 'Ansible', 'Docker', 'Kubernetes', 'DevOps', 'CI/CD', 'Deployment Automation'],
      description: 'Nous recherchons un ingénieur DevOps hautement motivé pour rejoindre notre équipe d\'ingénierie logicielle. Dans ce rôle, vous serez responsable de la conception, de la mise en œuvre et de la maintenance des pipelines CI/CD, et de la garantie de la fiabilité et de l\'évolutivité de nos processus de livraison de logiciels. Vous collaborerez étroitement avec les développeurs de logiciels, les ingénieurs de validation de logiciels et les administrateurs système pour améliorer nos flux de travail de développement et améliorer les performances globales du système.'
    },



    {
      title: 'DevOps Engineer (Part-Time) – Docker, Kubernetes, Terraform & GitOps',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'Cloud Computing', 'Terraform', 'Amazon Web Services', 'CI/CD', 'Docker'],
      description: 'Nous recherchons un ingénieur DevOps pour rejoindre notre équipe à temps partiel, selon les besoins. Si vous avez de l\'expérience avec Docker, Kubernetes, Helm Charts, Terraform et GitOps, et que vous êtes impatient de travailler sur des tâches DevOps de pointe, ce poste est fait pour vous !'
    },
    {
      title: 'Devops avec expérience dans les applications Web Azure, les itinéraires et la configuration des serveurs.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['DevOps Engineering', 'DevOps', 'Microsoft', 'Azure', 'Docker', 'Grafana', 'ELK'],
      description: 'Nous recherchons un développeur pour coacher notre équipe de développement back-end afin de corriger les itinéraires dans le déploiement de notre application Web dans Azure. Cela devrait être fait en aidant l\'équipe de développement via un appel vidéo.'
    },
    {
      title: 'AWS Expert - EC2 instance',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      tech: ['Vault', 'SonarQube', 'OWASP', 'Web Service', 'Amazon EC2', 'AWS Application'],
      description: 'Nous constatons un ralentissement sur nos sites Web hébergés sur l\'instance bleue dans la capture d\'écran ci-jointe. Nous avons comparé nos deux instances les plus utilisées et avons remarqué un pic d\'utilisation du processeur sur l\'instance bleue par rapport à l\'instance orange. Pouvez-vous nous aider à déterminer la cause de cet écart ? Merci.'
    },
    {
      title: 'Ingénieur DevOps pour la mise en œuvre d\'Azure CI/CD',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      tech: ['Kubernetes', 'CI/CD', 'DevOps', 'CI/CD', 'Platform Docker', 'Deployment Automation'],
      description: 'Nous recherchons un ingénieur DevOps qualifié pour améliorer nos pipelines CI/CD à l\'aide d\'Azure DevOps. Le candidat idéal aura de l\'expérience dans la mise en place de processus de déploiement automatisés, la gestion de l\'infrastructure en tant que code et la garantie d\'une intégration transparente entre le développement et les opérations. Votre expertise nous aidera à rationaliser notre flux de travail, à améliorer la fréquence de déploiement et à maintenir une qualité logicielle élevée. Si vous êtes passionné par les technologies cloud et l\'automatisation, nous voulons vous entendre !'
    },
    {
      title: 'Expert Azure Kubernetes Service (AKS) pour la configuration et la gestion de l\'infrastructure cloud',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      tech: ['AWS CDK', 'CloudFormation', 'Python', 'Kubernetes', 'Microsoft Azure', 'DevOps', 'Docker'],
      description: 'Nous recherchons un spécialiste Azure Kubernetes Service (AKS) expérimenté pour nous aider à gérer, optimiser et faire évoluer notre infrastructure cloud. Le candidat idéal doit avoir une connaissance approfondie d\'AKS, de l\'orchestration de conteneurs et des technologies cloud natives. Vous serez responsable de la mise en place, de la configuration et de la maintenance des clusters AKS pour prendre en charge nos applications évolutives.'
    }
  ];


  const content = {
    commentmonitorersiteweb: {
      title: 'Monitoring d’un site web',
      content: (
        <>
          <WelcomeCard>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Comment surveiller votre site web  ?
            </h2>
          </WelcomeCard>

          <Card>
            <CardTitle><strong>Analyse et Identification</strong></CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} />
                <span>Pour <strong>  surveiller notre site web </strong>, il est essentiel d'identifier le trafic en analysant les requêtes HTTP entrantes et leurs réponses, afin de déceler tout problème potentiel.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>La communication sur notre site s'effectue par le biais de requêtes HTTP provenant des navigateurs vers notre serveur web, d'où l'importance d'assurer une analyse approfondie.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Ces requêtes sont suivies et analysées pour identifier les tendances de trafic et <strong> déceler les problèmes potentiels sur notre site web </strong>.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Lorsque tout fonctionne correctement, les réponses des requêtes sont généralement des codes [200, 201, 2XX, 301, 3XX]. En revanche, des codes tels que [401, 403, 404, 502, 503] indiquent des anomalies.</span>
              </ListItem>
            </List>
          </Card>

          <img src={http} style={{ marginLeft: "30%", marginBottom: "1%" }} />

          <Card>
            <CardTitle>Compréhension et Analyse des Erreurs HTTP</CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} />
                <span>En présence de réponses 200, 201, 204, 301 ou 302, cela indique que tout va bien sur notre site.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Une erreur 401 peut suggérer un problème d'accès, tel qu'un mot de passe invalide. Il est alors crucial d'examiner les logs de notre serveur pour une analyse approfondie.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Des erreurs 503 ou 502 pourraient impliquer des problèmes avec le serveur (indiquant qu'il est hors service) ou des soucis de réseau. Il est nécessaire d'explorer les logs pour identifier la cause et résoudre le problème rapidement, afin de minimiser toute interruption de service.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Pour garantir une détection rapide des problèmes, il est indispensable d'avoir un système de monitoring web robuste, comme Kibana associé à Elasticsearch comme base de données.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Il serait également judicieux de mettre en place un système d'alerte pour être immédiatement informé en cas de problème. Par exemple, surveiller les requêtes 502, 503, 404 et 403 : si leur fréquence augmente de manière significative, il est crucial d'agir rapidement et d'examiner les logs de notre site web.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Aussi, l'outil d'affichage des logs doit permettre des recherches avancées pour faciliter l'identification des problèmes et leur résolution rapide.</span>
              </ListItem>
            </List>
          </Card>

          <Card>
            <img src={S_HTTP} style={{ marginLeft: "30%", marginBottom: "1%" }} />

          </Card>
          <Card>
            <CardTitle><strong> Note: On vous propose un service complet sur la mise en place de la partie supervision de votre site web ou application :  <a href="https://itgalaxy.io/svc/infra-as-service" target="_blank" rel="noopener noreferrer">Formulaire </a> </strong></CardTitle>
          </Card>
          <WelcomeCard>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Comment vraiment monitorer un site web ?
            </h2>
          </WelcomeCard>
          <Card>
            <img src={ELK_0} style={{ width: "70%", marginLeft: "15%" }} />
          </Card>
          <Card>
            <CardTitle><strong>Mise en place des logs côté serveur</strong></CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} />
                <span>Pour <strong>monitorer un site web</strong>, il est essentiel de commencer par mettre en place des logs d'erreur, d'information, et d'avertissement côté serveur afin d'identifier clairement les requêtes et les actions effectuées dans le backend.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Un bon monitoring nécessite que les réponses HTTP générées par le serveur soient précises, permettant ainsi une identification aisée des erreurs, ainsi qu'une gestion adéquate des différents cas à l'aide de codes de statut appropriés.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Il est également crucial de stocker ces logs précieux dans une base de données ou de les envoyer en sortie standard (stdout) pour qu'ils puissent être récupérés et analysés ultérieurement.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Enfin, il est important de visualiser ces données à l'aide d'outils avancés pour faciliter l'analyse et mettre en place un système d'alerte efficace.</span>
              </ListItem>
            </List>
          </Card>
          <Card>
            <CardTitle><strong>Exemples mise en place de logs coté Serveurs</strong></CardTitle>
            <List>
              <ListItem>
                <CodeBlock>
                  <span className="comment">//Exemple Add status(code_http) </span><br />
                  <span className="function">{"return res.status(401).json({ error: checkjwt not ok  });"} </span> <br />
                  <span className="string">{"return res.status(401).json({ error:  not ok  });"} </span> <br />
                  <span className="comment">{"return res.status(503).json({ error:  not ok  });"} </span> <br />
                  <span className="keyword">{"return res.status(501).json({ error:  not ok  });"} </span> <br />

                  &nbsp;&nbsp;<span className="keyword"></span>
                  <br />
                </CodeBlock>
                <CodeBlock>
                  <span className="comment">//Exemple Add Server Log</span><br />
                  <span className="keyword">{"console.error(Failed to update recruter:, error);"} </span> <br />
                  <span className="keyword">{"console.warn(Failed to update recruter:, error);"} </span> <br />
                  <span className="string">{"console.info(update recruter);"} </span> <br />

                  &nbsp;&nbsp;<span className="keyword"></span>
                  <br />
                </CodeBlock>
              </ListItem>
            </List>
          </Card>
          <Card>
            <CardTitle><strong> On propose un service complet sur la mise en place de la partie supervision de votre site web ou application :  <a href="https://itgalaxy.io/svc/infra-as-service" target="_blank" rel="noopener noreferrer">Formulaire </a> </strong></CardTitle>
          </Card>
          <WelcomeCard>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Quels outils utiliser pour une stack de monitoring efficace ?
            </h2>
          </WelcomeCard>

          <Card>
            <CardTitle><strong>Differents outils de monitoring</strong></CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://www.elastic.co/logstash" target="_blank" rel="noopener noreferrer">Logstash</a></strong> : Outil puissant pour la collecte, l’analyse et l’organisation des logs. Logstash permet d’ingérer des données de multiples sources, de les transformer en temps réel et de les envoyer vers Elasticsearch pour une indexation et une recherche ultérieure, facilitant ainsi la gestion des données volumineuses.
                </span>
              </ListItem> <br />
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://www.fluentd.org" target="_blank" rel="noopener noreferrer">Fluentd</a></strong> : Solution robuste pour le traitement des logs en temps réel, Fluentd facilite la collecte et la distribution des logs dans divers formats. Sa capacité à unifier les données permet de simplifier l’intégration avec d’autres outils d’analyse, garantissant ainsi une vision unifiée des performances applicatives.
                </span>
              </ListItem>  <br />
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://www.elastic.co/elasticsearch" target="_blank" rel="noopener noreferrer">Elasticsearch</a></strong> : Moteur de recherche et d'analyse hautement performant, Elasticsearch est conçu pour indexer, rechercher et analyser une grande variété de données en temps réel. Il offre des fonctionnalités avancées telles que les recherches plein texte, les analyses agrégées et la scalabilité horizontale, ce qui en fait un choix idéal pour les applications nécessitant des résultats rapides et pertinents.
                </span>
              </ListItem>  <br />
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://www.elastic.co/kibana" target="_blank" rel="noopener noreferrer">Kibana</a></strong> : Outil de visualisation et de création de tableaux de bord, Kibana permet d’explorer et de représenter visuellement les données stockées dans Elasticsearch. Son interface intuitive permet aux utilisateurs de créer facilement des graphiques, des tables et des cartes, facilitant la prise de décisions basée sur des données concrètes et des tendances analytiques.
                </span>
              </ListItem>  <br />
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://newrelic.com" target="_blank" rel="noopener noreferrer">New Relic</a></strong> : Plateforme de monitoring des performances des applications web, New Relic fournit des outils d'analyse approfondie pour suivre le comportement des applications en temps réel. Il aide les développeurs à identifier les problèmes de performance, à optimiser l'expérience utilisateur et à prendre des décisions éclairées grâce à des rapports et des alertes détaillés.
                </span>
              </ListItem>  <br />
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://sentry.io" target="_blank" rel="noopener noreferrer">Sentry</a></strong> : Outil de suivi des erreurs et des performances, Sentry permet aux développeurs de détecter, de diagnostiquer et de résoudre les problèmes dans les applications web. Avec des intégrations pour plusieurs frameworks, il fournit des rapports en temps réel et des alertes, aidant les équipes à maintenir la qualité du code tout en améliorant la satisfaction des utilisateurs.
                </span>
              </ListItem>  <br />
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://grafana.com/oss/loki/" target="_blank" rel="noopener noreferrer">Loki</a></strong> : Outil de visualisation et d'indexation des logs, conçu pour être utilisé avec Grafana. Loki permet de collecter, stocker et interroger des logs, en les associant facilement aux métriques afin d’offrir une vue d’ensemble de la performance des systèmes.
                </span>
              </ListItem>  <br />
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://grafana.com" target="_blank" rel="noopener noreferrer">Grafana</a></strong> : Puissante plateforme de visualisation de données, Grafana permet de créer des tableaux de bord dynamiques pour la surveillance des performances des applications et des infrastructures. Il supporte de multiples sources de données, y compris Elasticsearch, Prometheus, et bien d'autres, facilitant l'analyse en temps réel.
                </span>
              </ListItem>  <br />
              <ListItem>
                <ChevronRight size={16} />
                <span>
                  <strong><a href="https://www.splunk.com" target="_blank" rel="noopener noreferrer">Splunk</a></strong> : Outil d'analyse et de monitoring des données machine, Splunk offre des capacités avancées de recherche, d’analyse et de visualisation. Il permet aux utilisateurs d'explorer les logs en profondeur, d'obtenir des alertes en temps réel et de générer des rapports détaillés pour améliorer la sécurité et la performance des applications.
                </span>
              </ListItem>
            </List>

          </Card>

          <Card>
            <CardTitle><strong>Comment choisir un outil de monitoring pour sites</strong></CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} />
                <span>Définir vos besoins spécifiques pour le monitoring : quel type d’application devez-vous surveiller et quelles métriques sont importantes ?</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Évaluer la scalabilité de l'outil pour s'assurer qu'il peut gérer une augmentation future des données ou des utilisateurs.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Vérifier les types de données que vous souhaitez surveiller, telles que les logs, les performances des applications, et l'utilisation des ressources.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Assurer une facilité d'intégration avec vos systèmes existants, langages de programmation et services cloud.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Considérer les capacités de visualisation de données de l'outil pour analyser rapidement les performances.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Vérifier les options d'alertes et notifications en cas de problèmes critiques.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Analyser le coût de l'outil et évaluer le retour sur investissement en termes de productivité.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Rechercher la taille de la communauté et la disponibilité du support pour l'outil.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Profiter des essais gratuits ou des démonstrations pour tester la compatibilité de l'outil avec vos systèmes.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span>Consulter les avis et études de cas d'autres utilisateurs pour guider votre choix.</span>
              </ListItem>
            </List>
          </Card>

          <Card>
            <CardTitle><strong> On propose un service complet sur la mise en place de la partie supervision de votre site web ou application :  <a href="https://itgalaxy.io/svc/infra-as-service" target="_blank" rel="noopener noreferrer">Formulaire </a> </strong></CardTitle>
          </Card>
          <WelcomeCard>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              C'est quoi la stack ELK : Elasticsearch Logstash Kibana ?
            </h2>
          </WelcomeCard>

          <Card>
            <img src={ELK} style={{ marginLeft: "30%", marginBottom: "1%" }} />
          </Card>
          <Card>
            <CardTitle><strong>Stack ELK : Elasticsearch, Logstash, Kibana et Fluentd</strong></CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Elasticsearch</strong> : Moteur de recherche et d'analyse de données basé sur Lucene. Il permet de stocker, rechercher et analyser de grandes quantités de données rapidement. Elasticsearch est distribué, ce qui le rend scalable et performant pour le traitement de données en temps réel.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Logstash</strong> : Outil de collecte et de traitement des logs. Il prend en charge l'ingestion de données depuis diverses sources, les transforme et les envoie à des destinations comme Elasticsearch. Logstash utilise une architecture de pipeline qui permet de filtrer et enrichir les données avant leur stockage.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Kibana</strong> : Outil de visualisation de données pour Elasticsearch. Il offre des capacités de création de tableaux de bord, de graphiques et de visualisations interactives pour analyser les données stockées dans Elasticsearch. Kibana simplifie la navigation dans les données et permet de comprendre les informations en un coup d'œil.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Fluentd</strong> : Outil de collecte de données open-source qui peut être utilisé comme alternative à Logstash. Fluentd permet de rassembler des données provenant de sources variées, de les transformer et de les acheminer vers diverses destinations, notamment Elasticsearch. Sa flexibilité et sa capacité à gérer un large éventail de formats de données en font une excellente option.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Cas d'utilisation de la stack ELK :</strong> Idéale pour le monitoring des performances des applications, la gestion des logs, l'analyse de données et la recherche textuelle. Elle est largement utilisée dans des secteurs tels que le développement web, la cybersécurité et l'analyse de données.</span>
              </ListItem>
            </List>
          </Card>

          <WelcomeCard>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              C'est quoi la stack ELK : Elasticsearch Logstash Kibana ?
            </h2>
          </WelcomeCard>
          <Card>
            <CardTitle><strong>Déploiement de la Stack ELK : Elasticsearch, Logstash, Kibana et Fluentd</strong></CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Installation :</strong> Commencez par installer les composants de la stack ELK. Elasticsearch nécessitera sa propre instance pour bien sécuriser la base de donnée, tandis que Logstash et Kibana seront installés sur des serveurs généralement séparés ou sur le même serveur, selon votre architecture .</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong> Hebergement de la stack :</strong> On peut utiliser un orchestrateur comme docker swarm pour la stack pour éviter les problémes de l'intéruption , je vous ai mis les commands pour l'installation en détails .</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong> Configuration d'Elasticsearch :</strong> Configurez Elasticsearch en ajustant les paramètres selon vos besoins, tels que l'utilisation de la mémoire , par contre Elasticsearch est vraiment puissant , de préference le serveur a minimun 2CPU 4GB , toute la configuration d'Elastic se fait via un fichier <strong>elasticsearch.yml</strong> de préférence d'utiliser les volumes pour avoir toujours la main sur se fichier super important.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Configuration de Logstash :</strong> Comme vous ai indiqué avant , logstash est un outils de reconstruction des logs sur un format bien précis , donc il va récuperer les logs et les mettre sur un format bien précis : Créez des fichiers de configuration pour Logstash afin de définir les entrées de données, les filtres de transformation et les sorties vers Elasticsearch , tous se passe aussi dans le fichier logstash.yml , vous n'inquiété pas toute est bien documenté.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Utilisation de Fluentd :</strong> Si vous optez pour Fluentd au lieu de Logstash, configurez-le de la même manière pour l'ingestion et le traitement des logs avant de les envoyer à Elasticsearch.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Configuration de Kibana :</strong> Connectez Kibana à votre instance Elasticsearch et configurez des tableaux de bord pour visualiser les données. Assurez-vous que la sécurité est en place pour protéger l'accès à vos données car si vous étes en production ces données contiennent tous les logs de votre site web donc faut vraiment etre vigilant dessus.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Monitorer et ajuster :</strong> Après le déploiement, surveillez les performances de la stack. Apportez des ajustements aux configurations selon la charge de travail et le volume de données.</span>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} />
                <span><strong>Maintenance :</strong> Effectuez régulièrement des mises à jour et des sauvegardes. Analysez les index et purgez les anciennes données pour optimiser les performances.</span>
              </ListItem>
            </List>
          </Card>

          <Card>
            <CardTitle><strong> Pour des applications avec une architecture plus complexe , je vous ai préparé un  <a href="https://formations-k8s.itgalaxy.io/deployer-la-stack-elk--elasticseach-logstash--kibana/" target="_blank" rel="noopener noreferrer">Tutoriel </a>  complet sur la mise en place de la supervision avec Elasticsearch Kibana sur Kubernetes et AWS services.</strong></CardTitle>
          </Card>

          <Card>
            <CardTitle><strong>Mise en place de la stack ELK avec Docker en détails</strong></CardTitle>

            <List>
              <CodeBlock>
                <span className="comment">// Exemple de deploy la stack ELK (Elasticsearch, Logstash, Kibana) with docker</span><br />
                <span className="function">{` # docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300  -e "discovery.type=single-node"   -e "http.host=0.0.0.0"  -e "transport.host=0.0.0.0"  -e "xpack.security.enabled=false"  elasticsearch:7.9.1 `} </span> <br />
                <span className="function">{` # docker run -d --name kibana -p 5601:5601  --link elasticsearch:elasticsearch  kibana:7.9.1 `} </span> <br />
                <span className="function">{` # docker run -d --name logstash -p 5044:5044 -p 9600:9600  --link elasticsearch:elasticsearch  -v /path/to/logstash.conf:/usr/share/logstash/pipeline/logstash.conf logstash:7.9.1`}
                </span>
              </CodeBlock>
            </List>

            <CardTitle><strong>Exemple de la configuration de elastic via elasticsearch.yml </strong></CardTitle>
            <List>
              <CodeBlock>
                <span className="comment">// Exemple elasticsearch.yml</span><br />
                <span className="function">{`cluster.name: my-cluster`} </span> <br />
                <span className="function">{`node.name: node-1`} </span> <br />
                <span className="function">{`network.host: localhost`} </span> <br />
                <span className="function">{` http.port: 9200`} </span> <br />
                <span className="function">{` path.logs: /var/log/elasticsearch`} </span> <br />
                <span className="function">{`index.number_of_replicas: 1`} </span> <br />
              </CodeBlock>
            </List>

            <CardTitle><strong>Exemple de la configuration de kibana via kibana.yml</strong></CardTitle>
            <List>
              <CodeBlock>
                <span className="comment">// Exemple kibana.yml</span><br />
                <span className="function">{`server.host: "localhost"`} </span> <br />
                <span className="function">{`server.port: 5601`} </span> <br />
                <span className="function">{`elasticsearch.hosts: ["http://localhost:9200"]`} </span> <br />
              </CodeBlock>
            </List>
            <CardTitle><strong>Exemple de la configuration de logstash via logstash.yml</strong></CardTitle>
            <List>
              <CodeBlock>
                <span className="comment">// Exemple logstash.yml</span><br />
                <span className="function">{`path.logs: /var/log/logstash`} </span> <br />
                <span className="function">{`path.data: /var/lib/logstash`} </span> <br />
                <span className="function">{`log.level: info`} </span> <br />
              </CodeBlock>
            </List>
          </Card>
          <WelcomeCard>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Comment créer votre premier Dashboard Kibana ?
            </h2>
          </WelcomeCard>

          <Card>
            <img src={K_0} style={{ marginLeft: "30%", marginBottom: "1%" }} />

          </Card>

          <Card>
            <CardTitle><strong>Étapes pour créer votre premier Dashboard Kibana</strong></CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} /> <strong>Accédez à l'interface Kibana :</strong> Ouvrez votre navigateur et entrez l'URL de votre instance Kibana. Assurez-vous que votre ELK Stack est en cours d'exécution.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Cliquez sur "Dashboard" :</strong> Dans le menu principal, sélectionnez l'option "Dashboard" pour accéder à la section de création et de gestion des dashboards.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Cliquez sur "Create new dashboard" :</strong> Utilisez le bouton "Create new dashboard" pour commencer avec un tableau de bord vierge.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Ajoutez des visualisations :</strong> Cliquez sur "Add" pour choisir parmi les visualisations existantes ou créez de nouvelles visualisations en utilisant des données indexées dans Elasticsearch.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Organisez vos visualisations :</strong> Faites glisser et déposez vos visualisations dans l'ordre souhaité. Vous pouvez également redimensionner chaque élément pour une meilleure disposition.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Cliquez sur "Save" :</strong> Une fois que vous êtes satisfait de l'apparence et de la disposition de votre tableau de bord, n'oubliez pas de cliquer sur "Save" pour enregistrer vos modifications. Pensez aussi à donner un nom significatif à votre tableau de bord.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Partagez votre dashboard :</strong> Une fois sauvé, vous pouvez partager le tableau de bord avec d'autres utilisateurs en fournissant l'URL ou en utilisant les options d'exportation.
              </ListItem>
            </List>
          </Card>
          <WelcomeCard>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Mise en place de l'alerting
            </h2>
          </WelcomeCard>


          <Card>
            <CardTitle><strong>Mise en place de l'alerting</strong></CardTitle>
            <List>
              <ListItem>
                <ChevronRight size={16} /> <strong>Accédez à la page d'alerting :</strong> Dans l'interface Kibana, naviguez vers "Management" puis "Alerts and rules".
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Créer une nouvelle alerte :</strong> Cliquez sur "Create alert" pour commencer à configurer une nouvelle alerte selon vos objectifs de surveillance.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong style={{ color: 'red' }}>  Sélectionnez la bonne metrique à surveiller , généralement on surveille le nombre des code reponses HTTP [503 , 401 , 404] si ça augmente de maniére anormale sur une période de temps ça veut dire qu'il y a un probléme dans le systéme. </strong>
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Configurer les conditions de l'alerte :</strong> Définissez les conditions spécifiques qui déclencheront l'alerte, telles que les métriques ou les événements à surveiller.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Notifications :</strong> Configurez les notifications pour recevoir des alertes par e-mail, par webhook ou via d'autres canaux lorsque les conditions de l'alerte sont remplies.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} /> <strong>Enregistrer et tester :</strong> Enregistrez votre alerte et effectuez un test pour vous assurer qu'elle fonctionne correctement. Ajustez les paramètres si nécessaire.
              </ListItem>
            </List>
          </Card>
          <Card>
            <img src={A_0} style={{ marginLeft: "30%", marginBottom: "1%" }} />
          </Card>

        </>
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
      title: 'Trouvez un expert DevOps ',
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
                  DevOps Engineer
                </TerminalText>
              </TerminalWindow>

              <HeroTitle>Trouvez un expert DevOps </HeroTitle>
              <HeroSubtitle>
                Automatisation, Infrastructure Cloud & Déploiement Continu
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
                Missions DevOps
              </SectionTitle>
              <SectionSubtitle>
                Solutions DevOps pour applications modernes
              </SectionSubtitle>
              <ProjectsGrid>
                {projects.map((project, index) => (
                  <ProjectCard key={index} onClick={() => handleModalRegister(project.tech[0])}>
                    <ProjectImage>
                      <img src={project.image} alt={project.title} />
                    </ProjectImage>
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
    marketplacemonitoring: {
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
          {`Formation DevOps | Monitoring Site Web ${titleH1}`}
        </title>
        <meta
          name="description"
          content={`Supervisez votre Site Web ${titleH1} `}
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
      <Offers />
      <FooterHome page={"seo"} />
    </>
  );
};

export default MonitoringSite;