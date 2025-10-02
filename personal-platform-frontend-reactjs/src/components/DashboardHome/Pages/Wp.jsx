import React from 'react';
import { Code, Graph , Wrench , Palette,Lock, Box, Layers, Code2, Minus, Plus, ChevronRight, Workflow, Settings, Zap, LineChart, ChevronDown, DollarSign, Clock, FileCode, Figma, Globe, Monitor, Smartphone, Layout, Binary, Shield, Database, Server } from 'lucide-react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Header from 'components/Header/Header';
import { Helmet } from 'react-helmet';
import { useState } from "react";
import Register from "components/Authentification/modals/register";
import Offers from './Offres';
import CardsPrestataires from './CardsPrestataires';
import ItGalaxyAsService from '../ItGalaxyAsService/ItGalaxyAsService';

const img1 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes0.jpg`;
const img2 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes-1.png`;
const img3 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes2.webp`;
const img4 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes3.jpg`;
const img5 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes4.jpg`;
const img6 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes5.jpg`;
const img7 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes6.png`;
const img8 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes7.jpg`;
const img9 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes8.jpg`;
const img10 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes9.avif`;
const img11 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes10.avif`;
const img12 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes11.avif`;
const img13 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes12.webp`;
const img14 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes13.avif`;
const img15 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes14.png`;
const img16 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes15.png`;
const img17 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes16.jpg`;
const img18 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes17.jpg`;
const img19 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes18.jpg`;
const img20 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/themes19.jpg`;


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #1a1a2e;
    color: #e2e8f0;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #1a1a2e;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 10%, rgba(146, 51, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
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
      45deg,
      transparent 0%,
      transparent 98%,
      rgba(146, 51, 234, 0.1) 98%,
      rgba(146, 51, 234, 0.1) 100%
    );
    background-size: 20px 20px;
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

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 2rem 0;
  background: linear-gradient(135deg, #9333ea 0%, #6366f1 100%);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(146, 51, 234, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #9333ea 0%, #6366f1 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  margin: 10px;
  
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
    box-shadow: 0 0 20px rgba(146, 51, 234, 0.4);
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94a3b8;
  font-size: 1.125rem;
  margin-bottom: 4rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background: rgba(22, 22, 42, 0.5);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(146, 51, 234, 0.2);
  backdrop-filter: blur(10px);
  animation: ${floatAnimation} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    border-color: #9333ea;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #9333ea;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.h2`
  color: #94a3b8;
  font-size: 1rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: rgba(22, 22, 42, 0.5);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(146, 51, 234, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #9333ea;
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
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(26, 26, 46, 0.8) 100%);
  }
`;


const FAQSection = styled(Section)`
  background: #111827;
`;

const FAQContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid #374151;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background: #1f2937;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3b82f6;
  }
`;

const FAQHeader = styled.h2`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: #93c5fd;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
`;

const FAQContent = styled.div`
  padding: 0 1rem 1rem 1rem;
  color: #d1d5db;
  line-height: 1.6;
`;

const SectionContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #f3f4f6;

  svg {
    width: 2rem;
    height: 2rem;
    color: #60a5fa;
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
  background: rgba(146, 51, 234, 0.1);
  color: #a5b4fc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  border: 1px solid rgba(146, 51, 234, 0.2);
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  background: rgba(22, 22, 42, 0.5);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(146, 51, 234, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #9333ea;
    transform: translateX(5px);
    cursor: pointer;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SkillIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: rgba(146, 51, 234, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9333ea;
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #94a3b8;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  &::before {
    content: '▹';
    color: #9333ea;
  }
`;


const ContractsSection = styled(Section)`
  background: #16162a;
`;

const ContractsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContractCard = styled.div`
  background: rgba(22, 22, 42, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(146, 51, 234, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #9333ea;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(146, 51, 234, 0.2);
  }

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
      rgba(146, 51, 234, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ContractHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ContractIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #9333ea, #6366f1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ContractDifficulty = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    switch (props.difficulty) {
      case 'Facile':
        return 'rgba(34, 197, 94, 0.2)';
      case 'Intermédiaire':
        return 'rgba(234, 179, 8, 0.2)';
      case 'Avancé':
        return 'rgba(239, 68, 68, 0.2)';
      default:
        return 'rgba(146, 51, 234, 0.2)';
    }
  }};
  color: ${props => {
    switch (props.difficulty) {
      case 'Facile':
        return '#22c55e';
      case 'Intermédiaire':
        return '#eab308';
      case 'Avancé':
        return '#ef4444';
      default:
        return '#9333ea';
    }
  }};
`;

const ContractTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0.5rem 0;
`;

const ContractDescription = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ContractSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const ContractFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(146, 51, 234, 0.2);
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9333ea;
  font-weight: 600;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ShowMoreButton = styled(Button)`
  margin: 3rem auto 0;
  background: transparent;
  border: 1px solid #9333ea;
  align-items: center;
  justify-content: space-between;
  margin-left: 45%;

  &:hover {
    background: linear-gradient(135deg, #9333ea, #6366f1);
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
`;



function Wp() {

  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreContracts, setShowMoreContracts] = useState(false);
  const [openFAQs, setOpenFAQs] = useState({});

  const stats = [
    { value: '1000+', label: 'Sites WordPress' },
    { value: '1000 serveurs', label: 'Wordpress hebergement' },
    { value: '50 thémes', label: "Wordpress theme gratuit" },
    { value: '5300+', label: 'Wordpress freelance' }
  ];

  const handleShowMoreProjects = () => {
    setShowMoreProjects(prev => !prev);
  };

  const handleShowMoreContracts = () => {
    setShowMoreContracts(prev => !prev);
  };

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };

  const handleAwsSomeWP = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/awesome-wordpress`;

  };

  const initialProjectCount = 12; // Number of projects to show initially
  const initialContractCount = 12; // Number of contracts to show initially


  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "Comment installer WordPress sur un hébergement web ?",
      answer: "1. Téléchargez WordPress depuis wordpress.org. 2. Uploadez les fichiers sur votre serveur via FTP. 3. Créez une base de données MySQL. 4. Configurez le fichier wp-config.php avec les détails de la base de données. 5. Visitez votre domaine pour finaliser l'installation."
    },
    {
      question: "Comment optimiser les performances d'un site WordPress ?",
      answer: "- Utilisez un thème léger et optimisé pour le SEO.\n- Installez un plugin de cache (comme WP Rocket, W3 Total Cache).\n- Optimisez les images avec un plugin d'optimisation.\n- Limitez le nombre de plugins pour éviter les ralentissements et utilisez un hébergeur performant.\n- Activez la compression GZIP pour réduire le temps de chargement."
    },
    {
      question: "Comment sécuriser un site WordPress ?",
      answer: "- Mettez à jour WordPress, les thèmes et les plugins régulièrement.\n- Utilisez des mots de passe forts.\n- Installez un plugin de sécurité (ex. Wordfence, Sucuri).\n- Limitez les tentatives de connexion avec des plugins de sécurité.\n- Réalisez des sauvegardes fréquentes et utilisez HTTPS pour protéger vos transactions."
    },
    {
      question: "Comment créer un thème WordPress personnalisé ?",
      answer: "1. Créez la structure de base avec index.php, style.css et functions.php. 2. Définissez les données du thème dans style.css. 3. Créez les templates nécessaires. 4. Appliquez la hiérarchie des templates de WordPress. 5. Implémentez les fonctionnalités dans functions.php."
    },
    {
      question: "Comment optimiser le SEO d'un site WordPress ?",
      answer: "- Installez un plugin SEO (comme Yoast SEO ou Rank Math) pour améliorer le référencement.\n- Optimisez les titres, méta-descriptions et URL.\n- Créez un contenu de qualité et régulier.\n- Améliorez la vitesse du site et l'expérience utilisateur.\n- Assurez-vous que les images sont optimisées avec des balises alt."
    },
    {
      question: "Comment ajouter un plugin sur WordPress ?",
      answer: "1. Allez dans le tableau de bord. 2. Cliquez sur 'Extensions' puis 'Ajouter'. 3. Recherchez le plugin désiré. 4. Cliquez sur 'Installer maintenant'. 5. Activez le plugin après son installation."
    },
    {
      question: "Comment créer une page en utilisant Elementor ?",
      answer: "1. Installez et activez Elementor. 2. Allez dans 'Pages' puis 'Ajouter'. 3. Cliquez sur 'Modifier avec Elementor'. 4. Faites glisser et déposez les widgets souhaités. 5. Publiez la page une fois que le design est finalisé."
    },
    {
      question: "Comment changer le thème d'un site WordPress ?",
      answer: "1. Allez dans le tableau de bord WordPress. 2. Cliquez sur 'Apparence' puis 'Thèmes'. 3. Cliquez sur 'Ajouter' pour rechercher de nouveaux thèmes. 4. Installez le thème désiré. 5. Activez le thème une fois installé."
    },
    {
      question: "Comment créer un menu de navigation sur WordPress ?",
      answer: "1. Allez dans 'Apparence' puis 'Menus'. 2. Créez un nouveau menu. 3. Ajoutez des pages, catégories ou liens personnalisés. 4. Assignez le menu à une position. 5. Enregistrez le menu."
    },
    {
      question: "Comment sauvegarder un site WordPress ?",
      answer: "- Utilisez un plugin de sauvegarde (comme UpdraftPlus ou BackupBuddy).\n- Configurez des sauvegardes automatiques hebdomadaires.\n- Téléchargez manuellement les fichiers via FTP et exportez la base de données via phpMyAdmin."
    },
    {
      question: "Qu'est-ce qu'un freelance graphic designer sur WordPress ?",
      answer: "Un freelance graphic designer sur WordPress est un professionnel indépendant qui crée des visuels et organes graphiques pour des sites WordPress, travaillant souvent sur des projets de design personnalisés."
    },
    {
      question: "Comment recruter un freelance web designer pour mon projet ?",
      answer: "Pour recruter un freelance web designer, vous pouvez consulter des plateformes comme ItGalaxy, Upwork ou Freelancer. Vérifiez leurs portfolios et avis pour vous assurer de leur adéquation à vos besoins."
    },
    {
      question: "Quels types de services un développeur freelance WordPress peut-il offrir ?",
      answer: "Un développeur freelance WordPress peut offrir des services de création de sites, de personnalisation de thèmes, de développement de plugins, de référencement SEO, ainsi que de maintenance du site."
    },
    {
      question: "Comment optimiser un site WordPress pour le référencement ?",
      answer: "Pour optimiser votre site WordPress pour le SEO, installez des plugins comme Yoast ou Rank Math, optimisez vos contenus et images, et assurez-vous que votre site est rapide et mobile-friendly."
    },
    {
      question: "Quels sont les avantages d'utiliser des plugins sur WordPress ?",
      answer: "Les plugins ajoutent des fonctionnalités supplémentaires à votre site WordPress, comme des formulaires de contact, des galeries d'images et des outils de référencement, sans nécessiter de compétences en programmation."
    },
    {
      question: "Quel est le rôle d'un freelance webmaster sur un site WordPress ?",
      answer: "Le rôle d'un freelance webmaster inclut la gestion technique du site WordPress, telles que les mises à jour, la sécurité, la configuration des serveurs et la sauvegarde des données."
    },
    {
      question: "Comment savoir si un freelance WordPress est fiable ?",
      answer: "Pour évaluer la fiabilité d'un freelance WordPress, consultez son portfolio, vérifiez les avis de précédents clients, et n'hésitez pas à demander des références ou un entretien préalable."
    },
    {
      question: "Comment sécuriser mon site WordPress contre les attaques ?",
      answer: "Pour sécuriser votre site WordPress, utilisez des mots de passe forts, installez des plugins de sécurité, effectuez des mises à jour régulières, et activez SSL pour le cryptage des données."
    },
    {
      question: "Quelle est la différence entre un thème WordPress premium et gratuit ?",
      answer: "Les thèmes WordPress premium offrent généralement des fonctionnalités avancées, un meilleur support et des mises à jour fréquentes, tandis que les thèmes gratuits peuvent être plus limités en options et en personnalisation."
    },
    {
      question: "Comment gérer les mises à jour sur un site WordPress ?",
      answer: "Pour gérer les mises à jour, accédez à votre tableau de bord WordPress et cliquez sur 'Mises à jour'. Il est important de sauvegarder votre site avant d'effectuer toute mise à jour."
    },
    {
      question: "Comment créer un site de commerce électronique avec WordPress ?",
      answer: "Vous pouvez créer un site de commerce électronique en utilisant WooCommerce, un plugin WordPress. Installez-le, configurez vos produits et options de paiement, et assurez-vous que votre site est optimisé pour les conversions."
    },
    {
      question: "Quels sont les meilleurs thèmes WordPress pour freelances ?",
      answer: "Parmi les meilleurs thèmes WordPress pour freelances, on trouve Astra, OceanWP et Divi, qui offrent une grande flexibilité, des designs personnalisables et une compatibilité avec les constructeurs de pages."
    },
    {
      question: "Comment ajouter un formulaire de contact sur WordPress ?",
      answer: "Pour ajouter un formulaire de contact, installez un plugin comme Contact Form 7, créez votre formulaire et utilisez le shortcode fourni pour l'intégrer sur n'importe quelle page ou article de votre site."
    },
    {
      question: "Est-il possible de migrer un site WordPress vers un nouvel hébergeur ?",
      answer: "Oui, vous pouvez migrer un site WordPress vers un nouvel hébergeur en utilisant des plugins de migration ou manuellement en transférant les fichiers via FTP et en exportant votre base de données."
    },
    {
      question: "Quelles sont les meilleures pratiques pour un bon design d'interface utilisateur sur WordPress ?",
      answer: "Les meilleures pratiques incluent l'utilisation d'un design responsive, une navigation intuitive, l'optimisation de la vitesse de chargement, et l'utilisation de couleurs et typographies harmonieuses."
    },
    {
      question: "Comment trouver un freelance WordPress dans ma région ?",
      answer: "Vous pouvez rechercher des freelances WordPress dans votre région via des plateformes de freelance géolocalisées, des réseaux sociaux professionnels, ou en consultant des forums locaux dédiés au développement web."
    },
    {
      question: "Quel est le coût d'un développeur freelance WordPress ?",
      answer: "Le coût d'un développeur freelance WordPress peut varier entre 30€ et 150€ de l'heure, selon son expérience et la complexité du projet."
    },
    {
      question: "Comment créer un site WordPress multilingue ?",
      answer: "Pour créer un site WordPress multilingue, vous pouvez utiliser des plugins comme WPML ou Polylang, qui permettent de traduire vos pages et articles facilement."
    },
    {
      question: "Quels sont les plugins essentiels pour un site WordPress ?",
      answer: "Les plugins essentiels incluent Yoast SEO pour le référencement, WooCommerce pour le e-commerce, Elementor pour le design, et UpdraftPlus pour la sauvegarde."
    },
    {
      question: "Comment retirer un plugin WordPress ?",
      answer: "Pour retirer un plugin, allez dans le tableau de bord WordPress, cliquez sur 'Extensions', puis trouvez le plugin à désinstaller. Cliquez sur 'Désactiver' puis 'Supprimer'."
    },
    {
      question: "Comment structurer les catégories et les étiquettes dans WordPress ?",
      answer: "Pour structurer les catégories et étiquettes, allez dans 'Articles', puis 'Catégories' ou 'Étiquettes' dans le tableau de bord et créez ensuite votre nouvelle catégorie ou étiquette selon vos besoins de contenu."
    },
    {
      question: "Comment utiliser des thèmes enfants dans WordPress ?",
      answer: "Un thème enfant vous permet de personnaliser votre site WordPress sans altérer le thème parent. Créez un dossier pour le thème enfant, ajoutez un fichier style.css, puis activez-le depuis le tableau de bord."
    },
    {
      question: "Comment intégrer Google Analytics sur un site WordPress ?",
      answer: "Pour intégrer Google Analytics, inscrivez-vous sur Google Analytics, obtenez le code de suivi, et collez-le dans le fichier header.php de votre thème ou utilisez un plugin comme 'Insert Headers and Footers'."
    },
    {
      question: "Comment créer des sauvegardes régulières sur WordPress ?",
      answer: "Utilisez des plugins de sauvegarde comme UpdraftPlus ou BackWPup pour automatiser la sauvegarde de vos fichiers et de votre base de données à intervalles réguliers."
    }
  ];
  
const projects = [
    {
      title: 'Graphiste Freelance WordPress pour Design de Site',
      image: img1,
      tech: ['WordPress', 'Graphic Design', 'ACF'],
      description: "Nous recherchons un graphiste freelance WordPress pour créer un design visuel attrayant pour notre site WordPress. Le candidat idéal doit avoir de l'expérience avec l'optimisation graphique sur la plateforme."
    },
    {
      title: "Web Designer Freelance pour Création de Boutique e-Commerce",
      image: img2,
      tech: ['WooCommerce', 'HTML', 'CSS'],
      description: "Nous cherchons un web designer freelance pour développer une boutique en ligne à l'aide de WooCommerce. Une attention particulière sera portée à l’expérience utilisateur et à l’optimisation des conversions."
    },
    {
      title: 'Développeur Freelance WordPress pour Référencement',
      image: img3,
      tech: ['WooCommerce', 'SEO', 'Google Analytics'],
      description: "Recherche d'un développeur WordPress freelance pour optimiser notre site e-commerce pour le référencement, y compris audits de SEO, optimisation de la vitesse, et meilleures pratiques de contenu."
    },
    {
      title: "Création de Site Web WordPress pour Un Blog Personnel",
      image: img4,
      tech: ['WordPress', 'Graphic Design', 'Content Management'],
      description: "Nous recherchons un freelance pour le design et la mise en place d'un blog personnel sur WordPress incluant un système de gestion de contenu convivial."
    },
    {
      title: 'Graphiste Designer Freelance pour Matériel de Marketing',
      image: img5,
      tech: ['Graphic Design', 'WordPress', 'Print Design'],
      description: 'Nous avons besoin d\'un graphiste freelance pour créer des visuels de marketing et du matériel de nos produits, à intégrer dans notre site WordPress.'
    },
    {
      title: "Freelance Webmaster pour Maintenance et Support",
      image: img6,
      tech: ['WordPress', 'Site Maintenance', 'Troubleshooting'],
      description: "Recherche d'un webmaster freelance pour assurer la maintenance et le support technique de notre site WordPress, y compris la résolution des bugs et des mises à jour régulières."
    },
    {
      title: 'Freelance WordPress pour Optimisation de site',
      image: img7,
      tech: ['WordPress', 'Speed Optimization', 'SEO'],
      description: "Nous cherchons un freelance capable de vérifier et d'optimiser la vitesse de notre site WordPress, tout en s'assurant qu'il respecte les meilleures pratiques pour le référencement."
    },
    {
      title: 'Freelance Web Designer pour Modernisation de site',
      image: img8,
      tech: ['WordPress', 'Web Design', 'UI/UX'],
      description: "Nous sommes à la recherche d'un freelance web designer pour moderniser notre site WordPress existant afin d'améliorer l'esthétique et l'expérience utilisateur."
    },
    {
      title: 'Freelance WordPress pour Création de Thèmes Personnalisés',
      image: img9,
      tech: ['WordPress', 'Theme Development', 'PHP'],
      description: "Nous recherchons un freelance WordPress expérimenté pour créer un thème WordPress personnalisé qui s'aligne avec notre identité de marque."
    },
    {
      title: 'Freelance Référenceur WordPress à Nantes',
      image: img10,
      tech: ['WordPress', 'SEO', 'Content Strategy'],
      description: "Nous sommes à la recherche d'un freelance spécialisé dans le référencement sur WordPress pour optimiser le contenu de notre site et améliorer notre présence en ligne."
    },
    {
      title: 'Freelance WordPress Web Designer à Lille',
      image: img11,
      tech: ['WordPress', 'Web Design', 'E-commerce'],
      description: "Création d'un site e-commerce pour une boutique à Lille. Recherchons un designer freelance avec une solide expérience en WordPress."
    },
    {
      title: 'Développement de Plugins WordPress',
      image: img12,
      tech: ['PHP', 'WordPress', 'Plugin Development'],
      description: "Nous recherchons un(e) developer freelance pour créer un plugin WordPress sur mesure qui répond à des besoins spécifiques de notre site."
    },
    {
      title: 'Référencement WordPress à Poissy',
      image: img13,
      tech: ['WordPress', 'SEO', 'On-page Optimization'],
      description: "Recherche un expert freelance en référencement pour améliorer le classement de notre site WordPress à Poissy."
    },
    {
      title: 'Gestion de site WordPress par un webmaster freelance',
      image: img14,
      tech: ['WordPress', 'Maintenance', 'Support Technique'],
      description: "Nous avons besoin d'un webmaster freelance pour gérer notre site WordPress, y compris les mises à jour régulières et la maintenance technique."
    }
];

const skills = [
    {
      title: 'Développement WordPress',
      icon: <Code size={24} />,
      items: ['PHP', 'WordPress Core', 'REST API', 'WooCommerce', 'Elementor']
    },
    {
      title: 'Design Graphique',
      icon: <Palette size={24} />,
      items: ['Photoshop', 'Illustrator', 'InDesign', 'Figma']
    },
    {
      title: 'SEO',
      icon: <Monitor size={24} />,
      items: ['Google Analytics', 'Yoast SEO', 'SEO On-page', 'Optimisation du contenu']
    },
    {
      title: 'Maintenance WordPress',
      icon: <Wrench size={24} />,
      items: ['Mises à jour', 'Sauvegardes', 'Sécurité', 'Optimisation de la vitesse']
    },
    {
      title: 'Web Design',
      icon: <Smartphone size={24} />,
      items: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    }
];

const contracts = [
  {
    icon: <Layout size={20} />,
    title: "Développeur WordPress pour création de site e-commerce",
    description: "Recherche d'un développeur WordPress freelance pour créer et configurer une boutique en ligne performante.",
    difficulty: "Avancé",
    skills: ["WooCommerce", "PHP", "JavaScript", "HTML", "SEO"],
    rate: "1500€", // Changed to a value between 1000€ and 2000€
    duration: "1 mois" // Changed to a value between 1 semaine and 1 mois
  },
  {
    icon: <Globe size={20} />,
    title: "Web Designer Freelance pour modernisation de site",
    description: "Nous avons besoin d'un web designer freelance pour moderniser notre site web, en rendant le design attractif et responsive.",
    difficulty: "Intermédiaire",
    skills: ["WordPress", "HTML", "CSS", "Graphic Design"],
    rate: "1200€", // Changed to a value between 1000€ and 2000€
    duration: "3 semaines" // Changed to a value between 1 semaine and 1 mois
  },
  {
    icon: <Monitor size={20} />,
    title: "Graphiste Freelance pour création d'identité visuelle",
    description: "Recherche d'un graphiste freelance pour concevoir une identité visuelle complète comprenant logo et charte graphique.",
    difficulty: "Avancé",
    skills: ["Adobe Suite", "Figma", "Branding"],
    rate: "1800€", // Changed to a value between 1000€ and 2000€
    duration: "2 semaines" // Changed to a value between 1 semaine and 1 mois
  },
  {
    icon: <Smartphone size={20} />,
    title: "Développeur Freelance pour application mobile WordPress",
    description: "Nous recherchons un développeur mobile freelance pour créer une application liée à notre site WordPress.",
    difficulty: "Avancé",
    skills: ["React Native", "WordPress API", "JavaScript"],
    rate: "2000€", // Changed to a value between 1000€ and 2000€
    duration: "1 mois" // Changed to a value between 1 semaine and 1 mois
  },
  {
    icon: <Box size={20} />,
    title: "Freelance en Référencement WordPress",
    description: "Recherche d'un expert en référencement freelance pour optimiser notre site WordPress et améliorer notre positionnement sur les moteurs de recherche.",
    difficulty: "Intermédiaire",
    skills: ["SEO", "WordPress", "Google Analytics", "Backlinking"],
    rate: "1100€", // Changed to a value between 1000€ and 2000€
    duration: "2 semaines" // Changed to a value between 1 semaine and 1 mois
  },
  {
    icon: <Lock size={20} />,
    title: "Sécurité de site WordPress par un expert freelance",
    description: "Nous avons besoin d'un expert freelance en sécurité pour auditer et sécuriser notre site WordPress contre les menaces.",
    difficulty: "Avancé",
    skills: ["WordPress", "Firewall", "Malware Removal"],
    rate: "1300€", // Changed to a value between 1000€ and 2000€
    duration: "1 mois" // Changed to a value between 1 semaine and 1 mois
  },
  {
    icon: <Server size={20} />,
    title: "Freelance pour maintenance backend WordPress",
    description: "Recherche de freelance pour assurer la maintenance backend de notre site WordPress, y compris les mises à jour et la résolution de problèmes.",
    difficulty: "Intermédiaire",
    skills: ["PHP", "MySQL", "WordPress"],
    rate: "1400€", // Changed to a value between 1000€ and 2000€
    duration: "1 mois" // Changed to a value between 1 semaine and 1 mois
  },
  {
    icon: <Layout size={20} />,
    title: "Freelance Webmaster pour gestion de site WordPress",
    description: "Nous cherchons un webmaster freelance pour gérer les aspects techniques de notre site WordPress.",
    difficulty: "Intermédiaire",
    skills: ["WordPress", "Content Management", "SEO"],
    rate: "1000€", // Changed to a value between 1000€ and 2000€
    duration: "3 semaines" // Changed
  },
  {
    icon: <Layout size={20} />,
    title: "Freelance Webmaster pour gestion de site WordPress",
    description: "Nous cherchons un webmaster freelance pour gérer les aspects techniques de notre site WordPress.",
    difficulty: "Intermédiaire",
    skills: ["WordPress", "Content Management", "SEO"],
    rate: "1000€", // Changed to a value between 1000€ and 2000€
    duration: "3 semaines" // Changed to a value between 1 semaine and 1 mois
  }
];



  return (
    <>
    <Helmet>
        <title>Trouver un Freelance WordPress && Agence Expert WordPress</title>
        <meta 
            name="description" 
            content="Découvrez les meilleurs freelances WordPress pour la création, le développement et l'optimisation de vos sites web. Recrutez des experts en référencement et en web design." 
        />
        <meta 
            name="keywords" 
            content="Freelance WordPress, wordpress freelancer, freelance wordpress paris, développeur freelance wordpress, freelance wordpress lyon, freelance wordpress webmaster, freelance seo wordpress, webmaster wordpress freelance, développement wordpress freelance, freelance création site wordpress, freelance wordpress expert, freelance site web wordpress, prix site wordpress freelance, webmaster freelance wordpress" 
        />
        <link rel="canonical" href="https://itgalaxy.io/freelance-wordpress" />
        <meta property="og:title" content="Trouver un Freelance WordPress && Agence Expert WordPress" />
        <meta property="og:description" content="Découvrez des freelances qualifiés en WordPress pour la création, le développement et l'optimisation de vos projets web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/freelance-wordpress" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-wordpress" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-wordpress" />
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Freelance WordPress",
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
                "description": "Recrutement de freelances WordPress pour la création, le développement et la maintenance de sites web.",
                "areaServed": ["France", "Nantes", "Lille", "Poissy", "Lyon", "Paris"],
                "serviceType": ["Recrutement Freelance", "Web Design WordPress", "Développement WordPress", "Maintenance WordPress", "SEO WordPress"],
            })}
        </script>
    </Helmet>

      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <CodeBlock>
              <span className="comment">// Expert WordPress</span><br />
              <span className="keyword">function</span>{' '}
              <span className="function">createAmazingSites</span>() &#123;<br />
              &nbsp;&nbsp;<span className="keyword">return</span>{' '}
              <span className="string">'Solutions WordPress sur mesure'</span>;<br />
              &#125;<br />
            </CodeBlock>
            <HeroTitle>Trouvez un Freelance WordPress</HeroTitle>
            <HeroSubtitle>
              Création de sites web personnalisés & développement d'extensions avec nos Prestataires WP
            </HeroSubtitle>
            <Button onClick={() => window.location.href = `/search/prestataires`} >
              {'Trouvez un Prestataire WordPress'}
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires skill={'React'}/>
        <ItGalaxyAsService />


        <Section>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Chiffres Clés
            </SectionTitle>
            <SectionSubtitle>
              Des résultats concrets pour vos projets web
            </SectionSubtitle>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard key={index} $delay={`${index * 0.2}s`} onClick={() => handleAwsSomeWP()} >
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Layers />
              Missions de développement Wordpress
            </SectionTitle>
            <SectionSubtitle>
              Portfolio de projets WordPress
            </SectionSubtitle>
            <ProjectsGrid>

              {projects.slice(0, showMoreProjects ? projects.length : initialProjectCount).map((project, index) => (
                <ProjectCard key={index} onClick={() => handleModalRegister()}>
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
                    <ProjectDescription>{project.description.length > 200
                      ? `${project.description.slice(0, 200)}...`
                      : project.description}</ProjectDescription>
                  </ProjectContent>
                </ProjectCard>
              ))}

            </ProjectsGrid>
          </SectionContent>
          <ShowMoreButton onClick={handleShowMoreProjects}>
            {showMoreProjects ? 'Voir moins de missions' : 'Voir plus de missions'}
          </ShowMoreButton>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Settings />
              Expertise Technique
            </SectionTitle>
            <SectionSubtitle>
              Maîtrise des technologies WordPress
            </SectionSubtitle>
            <SkillsSection>
              {skills.map((skill, index) => (
                <SkillCard key={index} onClick={() => handleAwsSomeWP()}>
                  <SkillHeader>
                    <SkillIcon>
                      {skill.icon}
                    </SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                  </SkillHeader>
                  <SkillList>
                    {skill.items.map((item, itemIndex) => (
                      <SkillItem key={itemIndex}>{item}</SkillItem>
                    ))}
                  </SkillList>
                </SkillCard>
              ))}
            </SkillsSection>
          </SectionContent>
        </Section>

        <ContractsSection>
          <SectionContent>
            <SectionTitle>
              <Workflow />
              Projets pour Freelance WordPress
            </SectionTitle>
            <SectionSubtitle>
              Découvrez nos missions WordPress et développez des sites web professionnels
            </SectionSubtitle>
            <ContractsGrid>
              {contracts.slice(0, showMoreContracts ? contracts.length : initialProjectCount).map((contract, index) => (
                <ContractCard key={index} onClick={() => handleModalRegister()}>
                  <ContractHeader>
                    <ContractIcon>{contract.icon}</ContractIcon>
                    <ContractDifficulty difficulty={contract.difficulty}>
                      {contract.difficulty}
                    </ContractDifficulty>
                  </ContractHeader>
                  <ContractTitle>{contract.title}</ContractTitle>
                  <ContractDescription>{contract.description}</ContractDescription>
                  <ContractSkills>
                    {contract.skills.map((skill, skillIndex) => (
                      <TechTag key={skillIndex}>{skill}</TechTag>
                    ))}
                  </ContractSkills>
                  <ContractFooter>
                    <Rate>
                      <DollarSign />
                      {contract.rate}
                    </Rate>
                    <Duration>
                      <Clock />
                      {contract.duration}
                    </Duration>
                  </ContractFooter>
                </ContractCard>
              ))}
            </ContractsGrid>
          </SectionContent>
         </ContractsSection>
        <FAQSection>
          <SectionContent>
            <SectionTitle>
              WordPress FAQ
              <Code2 />
            </SectionTitle>
            <FAQContainer>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQHeader onClick={() => toggleFAQ(index)}>
                    {faq.question}
                    {openFAQs[index] ? <Minus size={20} /> : <Plus size={20} />}
                  </FAQHeader>
                  {openFAQs[index] && (
                    <FAQContent>
                      {faq.answer.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </FAQContent>
                  )}
                </FAQItem>
              ))}
            </FAQContainer>
          </SectionContent>
        </FAQSection>
      </MainContainer>
      <Offers />
      <FooterHome page={'wordpress'} />
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={handleCloseModalRegister}
          switchBetweenModals={false}
          proxy={"marketplace"}
        />)}
    </>
  );
}

export default Wp;