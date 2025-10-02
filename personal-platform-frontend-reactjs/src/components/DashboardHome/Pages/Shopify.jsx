import React from 'react';
import { ShoppingBag, Code, Trello ,Clipboard,  Search ,UserCheck ,FileText,Lock, Feather, Info  , Minus , Plus , Palette, Box,  ChevronRight, Settings, Zap, LineChart, Store, CreditCard, Package, ChevronDown, DollarSign, Clock, Globe, Monitor, FileCode, Database, Shield, Binary } from 'lucide-react';
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
    background: #042f2e;
    color: #f0fdfa;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #042f2e;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 10%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(6, 182, 212, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }
`;
const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
`; 
const FAQItem = styled.div`
  border: 1px solid #042f2e;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background: rgba(8, 51, 68, 0.5);
  border: 1px solid rgba(20, 184, 166, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #14b8a6;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(20, 184, 166, 0.2);
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
      rgba(20, 184, 166, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const FAQSection = styled(Section)`
  background: #042f2e;
`;

const FAQContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
  
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

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      transparent 98%,
      rgba(20, 184, 166, 0.2) 98%,
      rgba(20, 184, 166, 0.2) 100%
    );
    background-size: 30px 30px;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const HeroContent = styled.div`
  max-width: 64rem;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`;


const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 2rem 0;
  background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #99f6e4;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
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
    box-shadow: 0 0 20px rgba(20, 184, 166, 0.4);
  }
`;



const SectionContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #f0fdfa;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #14b8a6;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #99f6e4;
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
  background: rgba(8, 51, 68, 0.5);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(20, 184, 166, 0.2);
  backdrop-filter: blur(10px);
  animation: ${floatAnimation} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    border-color: #14b8a6;
    transform: translateY(-5px);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #14b8a6;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #99f6e4;
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
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: rgba(8, 51, 68, 0.5);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(20, 184, 166, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #14b8a6;
    transform: translateY(-5px);
    pointer: cursor;
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
    background: linear-gradient(to bottom, transparent 0%, rgba(4, 47, 46, 0.8) 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #f0fdfa;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(20, 184, 166, 0.1);
  color: #5eead4;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-size: 0.875rem;
  border: 1px solid rgba(20, 184, 166, 0.2);
`;

const ProjectDescription = styled.p`
  color: #99f6e4;
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
  background: rgba(8, 51, 68, 0.5);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(20, 184, 166, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #14b8a6;
    transform: translateX(5px);
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
  background: rgba(20, 184, 166, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #14b8a6;
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #f0fdfa;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #99f6e4;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  &::before {
    content: '▹';
    color: #14b8a6;
  }
`;
const ContractsSection = styled(Section)`
  background: #042f2e;
`;

const ContractsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContractCard = styled.div`
  background: rgba(8, 51, 68, 0.5);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(20, 184, 166, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #14b8a6;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(20, 184, 166, 0.2);
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
      rgba(20, 184, 166, 0.1),
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
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  border-radius: 12px;
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
        return 'rgba(20, 184, 166, 0.2)';
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
        return '#14b8a6';
    }
  }};
`;

const ContractTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #f0fdfa;
  margin: 0.5rem 0;
`;

const ContractDescription = styled.p`
  color: #99f6e4;
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
  border-top: 1px solid rgba(20, 184, 166, 0.2);
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #14b8a6;
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
  color: #99f6e4;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ShowMoreButton = styled(Button)`
  margin: 3rem auto 0;
  background: transparent;
  border: 1px solid #14b8a6;
  
  &:hover {
    background: linear-gradient(135deg, #14b8a6, #0d9488);
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


function ShopifySite() {
  const stats = [
    { value: '50+', label: 'Boutiques Site Shopify' },
    { value: '1M+', label: 'Ventes Générées' },
    { value: '99%', label: 'Satisfaction Client' },
    { value: '15+', label: 'Apps Personnalisées' }
  ];
  const [openFAQs, setOpenFAQs] = useState({});
  const [openModalRegister, setOpenModalRegister] = useState(false);

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };


  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
        question: "Comment installer Site Shopify sur un hébergement web ?",
        answer: "1. Créez un compte Site Shopify.\n2. Choisissez un plan adapté à vos besoins.\n3. Personnalisez votre boutique avec des thèmes et des applications.\n4. Configurez vos produits et méthodes de paiement.\n5. Lancez votre boutique en ligne."
    },
    {
        question: "Comment optimiser les performances d'une boutique Site Shopify ?",
        answer: "- Utilisez un thème léger et optimisé.\n- Réduisez la taille des images et activez le lazy loading.\n- Minimisez les applications non nécessaires.\n- Activez la compression GZIP.\n- Utilisez un bon hébergeur."
    },
    {
        question: "Comment sécuriser une boutique Site Shopify ?",
        answer: "- Utilisez un mot de passe fort pour votre compte.\n- Activez l'authentification à deux facteurs.\n- Gardez vos applications à jour.\n- Configurez HTTPS pour des connexions sécurisées."
    },
    {
        question: "Comment créer un thème Site Shopify personnalisé ?",
        answer: "1. Créez un compte Site Shopify et accédez à votre boutique.\n2. Allez dans 'Boutique en ligne' puis 'Thèmes'.\n3. Cliquez sur 'Personnaliser' ou utilisez un éditeur de thème.\n4. Adaptez les fichiers Liquid pour vos besoins.\n5. Publiez votre thème."
    },
    {
        question: "Comment optimiser le SEO d'une boutique Site Shopify ?",
        answer: "- Installez des applications SEO comme SEO Manager.\n- Optimisez les titres et méta-descriptions.\n- Créez un contenu de qualité ciblé sur vos produits.\n- Améliorez la vitesse de la boutique et créez une structure d'URL propre."
    },
    {
        question: "Comment ajouter un plugin sur Site Shopify ?",
        answer: "1. Allez dans le Site Shopify App Store.\n2. Recherchez l'application souhaitée.\n3. Cliquez sur 'Ajouter l'application'.\n4. Suivez les instructions pour l'installation.\n5. Configurez l'application selon vos besoins."
    },
    {
        question: "Comment créer une page en utilisant l'éditeur de Site Shopify ?",
        answer: "1. Accédez à votre tableau de bord Site Shopify.\n2. Cliquez sur 'Pages' puis 'Ajouter une page'.\n3. Utilisez l'éditeur pour ajouter du contenu et personnaliser la mise en page.\n4. Enregistrez et publiez la page."
    },
    {
        question: "Comment changer le thème d'une boutique Site Shopify ?",
        answer: "1. Accédez à votre tableau de bord Site Shopify.\n2. Cliquez sur 'Boutique en ligne' puis 'Thèmes'.\n3. Choisissez 'Ajouter un thème' pour en rechercher un nouveau.\n4. Installez le thème désiré.\n5. Publiez le thème une fois installé."
    },
    {
        question: "Comment créer un menu de navigation sur Site Shopify ?",
        answer: "1. Allez dans 'Boutique en ligne' puis 'Navigation'.\n2. Créez un nouveau menu.\n3. Ajoutez des pages, produits ou collections.\n4. Enregistrez le menu et assignez-le à une position."
    },
    {
        question: "Comment optimiser les images sur Site Shopify ?",
        answer: "- Utilisez des applications d'optimisation d'image (comme Crush.pics).\n- Compressez les images avant téléchargement.\n- Utilisez des formats d'image modernes comme WebP."
    },
    {
        question: "Comment ajouter un formulaire de contact sur Site Shopify ?",
        answer: "1. Allez dans 'Pages' et créez une nouvelle page pour votre formulaire.\n2. Ajoutez le code HTML ou utilisez une application.\n3. Publiez la page avec le formulaire de contact."
    },
    {
        question: "Comment planifier des publications sur Site Shopify ?",
        answer: "1. Accédez à l'éditeur de produits ou de pages.\n2. Rédigez votre contenu.\n3. Cliquez sur 'Planifier' et choisissez la date de publication.\n4. Enregistrez les modifications."
    },
    {
        question: "Comment créer des collections sur Site Shopify ?",
        answer: "1. Allez dans 'Produits' puis 'Collections'.\n2. Cliquez sur 'Créer une collection'.\n3. Ajoutez des produits et définissez des règles de collection.\n4. Enregistrez."
    },
    {
        question: "Comment sauvegarder une boutique Site Shopify ?",
        answer: "- Site Shopify crée des sauvegardes automatiques, mais exportez régulièrement vos produits et données.\n- Utilisez des applications de sauvegarde tierces pour une sécurité supplémentaire."
    },
    {
        question: "Comment désinstaller une application sur Site Shopify ?",
        answer: "1. Allez dans 'Applications' dans le tableau de bord.\n2. Trouvez l'application que vous souhaitez supprimer.\n3. Cliquez sur 'Désinstaller' et confirmez la suppression."
    },
    {
        question: "Comment gérer les avis clients sur Site Shopify ?",
        answer: "1. Installez une application de gestion des avis (comme Judge.me).\n2. Configurez l'application pour automatiser les demandes d'avis.\n3. Affichez les avis sur votre boutique en ligne."
    }
];

  const projects = [
    {
      title: 'Boutique Mode Luxe',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      tech: ['Site Shopify Plus', 'Liquid', 'React'],
      description: 'E-commerce haut de gamme avec expérience client personnalisée'
    },
    {
      title: 'Marketplace B2B',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
      tech: ['Site Shopify Markets', 'GraphQL', 'Next.js'],
      description: 'Plateforme B2B multi-vendeurs avec gestion des prix en gros'
    },
    {
      title: 'App de Personnalisation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tech: ['Node.js', 'React', 'Polaris'],
      description: 'Application Site Shopify pour personnalisation de produits'
    },
    {
      title: 'Intégration ERP',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'REST API', 'Webhooks'],
      description: 'Synchronisation automatique avec système ERP existant'
    },
    {
      title: 'Checkout Personnalisé',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
      tech: ['Checkout UI', 'JavaScript', 'Web Components'],
      description: 'Expérience de paiement optimisée et personnalisée'
    },
    {
      title: 'Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['Admin API', 'D3.js', 'GraphQL'],
      description: 'Tableau de bord analytique pour suivi des performances'
    },
    {
      title: 'Boutique Mode Luxe',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      tech: ['Site Shopify Plus', 'Liquid', 'React'],
      description: 'E-commerce haut de gamme avec expérience client personnalisée'
    },
    {
      title: 'Marketplace B2B',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
      tech: ['Site Shopify Markets', 'GraphQL', 'Next.js'],
      description: 'Plateforme B2B multi-vendeurs avec gestion des prix en gros'
    },
    {
      title: 'App de Personnalisation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tech: ['Node.js', 'React', 'Polaris'],
      description: 'Application Site Shopify pour personnalisation de produits'
    },
    {
      title: 'Intégration ERP',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'REST API', 'Webhooks'],
      description: 'Synchronisation automatique avec système ERP existant'
    },
    {
      title: 'Checkout Personnalisé',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
      tech: ['Checkout UI', 'JavaScript', 'Web Components'],
      description: 'Expérience de paiement optimisée et personnalisée'
    },
    {
      title: 'Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['Admin API', 'D3.js', 'GraphQL'],
      description: 'Tableau de bord analytique pour suivi des performances'
    }
  ];

  const contracts = [
    {
        icon: <Store size={20} />,
        title: "Boutique Site Shopify Plus",
        description: "Création d'une boutique haut de gamme avec fonctionnalités avancées.",
        difficulty: "Avancé",
        skills: ["Site Shopify Plus", "Liquid", "JavaScript", "React", "freelance site shopify"],
        rate: "1200€",
        duration: "2 mois"
    },
    {
        icon: <Globe size={20} />,
        title: "Marketplace B2B",
        description: "Développement d'une plateforme B2B multi-vendeurs.",
        difficulty: "Avancé",
        skills: ["Site Shopify Markets", "GraphQL", "Next.js", "B2B", "freelance site shopify developer"],
        rate: "1350€",
        duration: "2 mois"
    },
    {
        icon: <Monitor size={20} />,
        title: "App Site Shopify",
        description: "Développement d'une application Site Shopify personnalisée.",
        difficulty: "Avancé",
        skills: ["Node.js", "React", "Polaris", "GraphQL", "freelance site shopify expert"],
        rate: "1100€",
        duration: "1 mois"
    },
    {
        icon: <FileCode size={20} />,
        title: "Thème sur Mesure",
        description: "Création d'un thème Site Shopify personnalisé.",
        difficulty: "Intermédiaire",
        skills: ["Liquid", "JavaScript", "SCSS", "Webpack", "site shopify freelance"],
        rate: "1000€",
        duration: "1 mois"
    },
    {
        icon: <Database size={20} />,
        title: "Intégration ERP",
        description: "Synchronisation avec système ERP existant.",
        difficulty: "Avancé",
        skills: ["Python", "REST API", "Webhooks", "ERP", "développeur freelance site shopify"],
        rate: "1400€",
        duration: "1 mois"
    },
    {
        icon: <Shield size={20} />,
        title: "Checkout Personnalisé",
        description: "Personnalisation complète du processus de paiement.",
        difficulty: "Avancé",
        skills: ["Checkout UI", "JavaScript", "Web Components", "site shopify expert freelancer"],
        rate: "1300€",
        duration: "1 mois"
    },
    {
        icon: <Box size={20} />,
        title: "Migration de Plateforme",
        description: "Migration depuis une autre plateforme vers Site Shopify.",
        difficulty: "Intermédiaire",
        skills: ["Python", "REST API", "Data Migration", "SEO", "freelance site shopify designer"],
        rate: "1050€",
        duration: "1 mois"
    },
    {
        icon: <Binary size={20} />,
        title: "Automatisation",
        description: "Mise en place de flux de travail automatisés.",
        difficulty: "Intermédiaire",
        skills: ["Site Shopify Flow", "Webhooks", "Node.js", "APIs", "freelance site shopify web designer"],
        rate: "1200€",
        duration: "1 mois"
    },
    {
        icon: <Trello size={20} />,
        title: "Optimisation des Ventes",
        description: "Stratégies pour augmenter les ventes sur Site Shopify.",
        difficulty: "Intermédiaire",
        skills: ["Marketing en ligne", "Analyse de données", "SEO", "freelance", "freelance seo site shopify"],
        rate: "1100€",
        duration: "2 mois"
    },
    {
        icon: <Clipboard size={20} />,
        title: "Développement d'une Application Mobile pour Site Shopify",
        description: "Création d'une application mobile optimisée pour Site Shopify.",
        difficulty: "Avancé",
        skills: ["React Native", "Site Shopify API", "JavaScript", "Node.js"],
        rate: "1500€",
        duration: "2 mois"
    },
    {
        icon: <Shield size={20} />,
        title: "Mise en Place d'Analytics",
        description: "Intégration d'outils d'analyse pour suivre les performances de la boutique.",
        difficulty: "Intermédiaire",
        skills: ["Google Analytics", "Site Shopify", "Data Studio", "freelance", "site shopify freelancers"],
        rate: "1050€",
        duration: "1 mois"
    },
    {
      icon: <Settings size={20} />,
      title: "Intégration de Systèmes de Paiement",
      description: "Implémentation de systèmes de paiement pour faciliter les transactions en ligne.",
      difficulty: "Avancé",
      skills: ["Stripe", "Site Shopify Payments", "PayPal", "Security"],
      rate: "1400€",
      duration: "1 mois"
  },
  {
      icon: <Search size={20} />,
      title: "Optimisation du SEO pour Site Shopify",
      description: "Services d'optimisation SEO pour améliorer la visibilité de la boutique Site Shopify dans les moteurs de recherche.",
      difficulty: "Intermédiaire",
      skills: ["SEO", "Content Strategy", "Keyword Research", "freelancer site shopify"],
      rate: "1100€",
      duration: "2 mois"
  },
  {
      icon: <LineChart size={20} />,
      title: "Création de Rapports de Performance",
      description: "Mise en place de rapports personnalisés pour analyser les performances de la boutique.",
      difficulty: "Intermédiaire",
      skills: ["Data Analysis", "Excel", "Site Shopify API", "freelance site shopify designer"],
      rate: "1000€",
      duration: "1 mois"
  },
  {
      icon: <UserCheck size={20} />,
      title: "Gestion des Ressources Utilisateurs",
      description: "Développement d'un système de gestion des utilisateurs et des rôles sur Site Shopify.",
      difficulty: "Avancé",
      skills: ["Site Shopify API", "Node.js", "JavaScript", "freelance site shopify developer"],
      rate: "1500€",
      duration: "2 mois"
  },
  {
      icon: <FileText size={20} />,
      title: "Création de Contenus pour Site Shopify",
      description: "Services de rédaction de contenus optimisés pour les produits et pages de la boutique.",
      difficulty: "Intermédiaire",
      skills: ["Content Writing", "SEO", "Site Shopify", "freelance seo site shopify"],
      rate: "1050€",
      duration: "1 mois"
  },
  {
      icon: <Lock size={20} />,
      title: "Sécurisation de la Boutique Site Shopify",
      description: "Mise en place de mesures de sécurité pour protéger votre boutique Site Shopify.",
      difficulty: "Avancé",
      skills: ["Web Security", "Site Shopify", "SSL", "freelance site shopify"],
      rate: "1300€",
      duration: "1 mois"
  },
  {
      icon: <Feather size={20} />,
      title: "Création d'une Landing Page pour Site Shopify",
      description: "Développement d'une page d'atterrissage optimisée pour augmenter les conversions.",
      difficulty: "Intermédiaire",
      skills: ["Liquid", "HTML", "CSS", "Site Shopify"],
      rate: "1020€",
      duration: "2 semaines"
  },
  {
      icon: <FileText size={20} />,
      title: "Rédaction de Blogs Site Shopify",
      description: "Création de contenu de blog optimisé pour attirer des clients vers votre boutique.",
      difficulty: "Intermédiaire",
      skills: ["Content Marketing", "SEO", "Site Shopify", "freelance site shopify designer"],
      rate: "1040€",
      duration: "1 mois"
  },
  {
      icon: <Info size={20} />,
      title: "Audit de Boutique Site Shopify",
      description: "Analyse complète de votre boutique Site Shopify et recommandation d'améliorations.",
      difficulty: "Avancé",
      skills: ["Site Shopify Analysis", "SEO", "User Experience", "freelance site shopify expert"],
      rate: "1250€",
      duration: "1 mois"
  }
];


  const skills = [
    {
      title: 'Développement Site Shopify',
      icon: <Store size={24} />,
      items: ['Liquid', 'Thèmes', 'Apps', 'Site Shopify CLI', 'API REST/GraphQL']
    },
    {
      title: 'Front-end',
      icon: <Palette size={24} />,
      items: ['React', 'Next.js', 'Polaris', 'TailwindCSS', 'TypeScript']
    },
    {
      title: 'E-commerce',
      icon: <CreditCard size={24} />,
      items: ['Checkout UI', 'Passerelles de Paiement', 'Site Shopify Plus', 'B2B']
    },
    {
      title: 'Intégrations',
      icon: <Package size={24} />,
      items: ['ERP', 'CRM', 'Marketing Automation', 'Fulfillment', 'PIM']
    }
  ];

  const handelContactsSF = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/contrats/category/EXPERT_SITE SHOPIFY`;
  };


  return (
    <>
      <Helmet>
          <title>Trouver un freelance Site Shopify ou une Agences Site Shopify</title>
          <meta name="description" content="Découvrez les meilleures freelances Site Shopify, des agences spécialisées dans Site Shopify, et des experts en développement pour vos projets." />
          <meta
              name="keywords"
              content="site shopify freelance, freelance site shopify, freelance site shopify developer, site shopify developer freelance, freelance site shopify expert, prix site site shopify freelance, site shopify expert freelancer, site shopify freelance developer, freelance site shopify designer, site shopify freelance web designer, site shopify web designer freelance, site shopify freelancers, développeur freelance site shopify, développeur site shopify freelance, expert site shopify freelance, freelance seo site shopify"
          />
          <link rel="canonical" href="https://itgalaxy.io/freelance-site" />
          <meta property="og:title" content="Plateforme Freelance Site Shopify | Recrutement d'Experts et Agences Site Shopify" />
          <meta property="og:description" content="Trouvez des freelances qualifiés et des agences expertes en Site Shopify pour la création et la gestion de vos solutions e-commerce." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://itgalaxy.io/freelance-site" />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:site_name" content="ItGalaxy.io" />
          <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-site" />
          <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-site" />
          <script type="application/ld+json">
              {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Plateforme Freelance Site Shopify",
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
                  "description": "Recrutement de freelances Site Shopify et d'agences de consulting pour des projets e-commerce.",
                  "areaServed": ["France", "Paris", "Lyon", "Marseille"],
                  "serviceType": ["Recrutement Freelance", "Développement Site Shopify", "Consulting Site Shopify"],
              })}
          </script>
      </Helmet>
      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <HeroTitle>Expert Freelance Site Shopify</HeroTitle>
            <HeroSubtitle>
              Développement de boutiques en ligne & applications personnalisées
            </HeroSubtitle>
            <Button onClick={() => window.location.href = `/search/prestataires`} >
              Découvrir les Freelances Site Shopify
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>


        <CardsPrestataires skill={'JavaScript'}/>
        <ItGalaxyAsService />


        <Section>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Performance E-commerce
            </SectionTitle>
            <SectionSubtitle>
              Résultats concrets pour nos clients
            </SectionSubtitle>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard key={index} $delay={`${index * 0.2}s`}>
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
              <Store />
              Réalisations
            </SectionTitle>
            <SectionSubtitle>
              Solutions e-commerce sur mesure
            </SectionSubtitle>
            <ProjectsGrid>
              {projects.map((project, index) => (
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
                    <ProjectDescription>{project.description}</ProjectDescription>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Code />
              Expertise Technique
            </SectionTitle>
            <SectionSubtitle>
              Maîtrise de l'écosystème Site Shopify
            </SectionSubtitle>
            <SkillsSection>
              {skills.map((skill, index) => (
                <SkillCard key={index}>
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
              <Store />
              Projets Site Shopify
            </SectionTitle>
            <SectionSubtitle>
              Découvrez nos missions Site Shopify et développez des boutiques en ligne performantes
            </SectionSubtitle>
            <ContractsGrid>
              {contracts.map((contract, index) => (
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
            {contracts.length > 6 && (
              <ButtonContainer>
                <ShowMoreButton onClick={() => handleModalRegister()}>
                  Voir plus de missions
                  <ChevronDown size={20} />
                </ShowMoreButton>
              </ButtonContainer>
            )}
          </SectionContent>
        </ContractsSection>

        <FAQSection>
          <SectionContent>
            <SectionTitle>
             Freelance Site Shopify FAQ
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
      <FooterHome />
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

export default ShopifySite;