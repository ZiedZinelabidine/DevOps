import Header from 'components/Header/Header';
import { Clipboard, Lock,  Box, Lightbulb, Gamepad, Tablet,Headphones,UserCheck, ClipboardCheck,  ChartLine, ChevronDown, ChevronRight, Clock, Cloud, Code, Database, DollarSign, FileCode, GitBranch, Globe, HelpCircle, LineChart, Minus, Monitor, Network, Plus, Server, Smartphone } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Offers from './Offres';
import CardsPrestataires from './CardsPrestataires';
import ItGalaxyAsService from '../ItGalaxyAsService/ItGalaxyAsService';
import Register from "components/Authentification/modals/register";
import { useState } from "react";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #1e1b4b;
    color: #e0e7ff;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(129, 140, 248, 0.3); }
  50% { box-shadow: 0 0 40px rgba(129, 140, 248, 0.6); }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #1e1b4b;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 10%, rgba(129, 140, 248, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(99, 102, 241, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }
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
      90deg,
      transparent 0%,
      rgba(129, 140, 248, 0.05) 25%,
      rgba(129, 140, 248, 0.05) 75%,
      transparent 100%
    );
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

const PhoneContainer = styled.div`
  width: 120px;
  height: 240px;
  margin: 0 auto 2rem;
  background: rgba(129, 140, 248, 0.1);
  border-radius: 30px;
  position: relative;
  border: 2px solid rgba(129, 140, 248, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${glowAnimation} 3s infinite;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 60px;
    height: 15px;
    background: rgba(129, 140, 248, 0.3);
    border-radius: 10px;
  }

  svg {
    width: 48px;
    height: 48px;
    color: #818cf8;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 2rem 0;
  background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(129, 140, 248, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #a5b4fc;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
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
    box-shadow: 0 0 20px rgba(129, 140, 248, 0.4);
  }
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
  color: #e0e7ff;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #818cf8;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #a5b4fc;
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
  background: rgba(30, 27, 75, 0.5);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(129, 140, 248, 0.2);
  backdrop-filter: blur(10px);
  animation: ${floatAnimation} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    border-color: #818cf8;
    transform: translateY(-5px);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #818cf8;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #a5b4fc;
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
  background: rgba(30, 27, 75, 0.5);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(129, 140, 248, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #818cf8;
    transform: translateY(-5px);
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
    background: linear-gradient(to bottom, transparent 0%, rgba(30, 27, 75, 0.8) 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e0e7ff;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(129, 140, 248, 0.1);
  color: #a5b4fc;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-size: 0.875rem;
  border: 1px solid rgba(129, 140, 248, 0.2);
`;

const ProjectDescription = styled.p`
  color: #a5b4fc;
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
  background: rgba(30, 27, 75, 0.5);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(129, 140, 248, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #818cf8;
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
  background: rgba(129, 140, 248, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #818cf8;
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e0e7ff;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #a5b4fc;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  &::before {
    content: '▹';
    color: #818cf8;
  }
`;

const ContractsSection = styled(Section)`
  background: #1e1b4b;
`;

const ContractsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContractCard = styled.div`
  background: rgba(30, 27, 75, 0.5);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(129, 140, 248, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #818cf8;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(129, 140, 248, 0.2);
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
      rgba(129, 140, 248, 0.1),
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
  background: linear-gradient(135deg, #818cf8, #6366f1);
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
        return 'rgba(129, 140, 248, 0.2)';
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
        return '#818cf8';
    }
  }};
`;

const ContractTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #e0e7ff;
  margin: 0.5rem 0;
`;

const ContractDescription = styled.p`
  color: #a5b4fc;
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
  border-top: 1px solid rgba(129, 140, 248, 0.2);
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #818cf8;
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
  color: #a5b4fc;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ShowMoreButton = styled(Button)`
  margin: 3rem auto 0;
  background: transparent;
  border: 1px solid #818cf8;
  
  &:hover {
    background: linear-gradient(135deg, #818cf8, #6366f1);
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

// FAQ Styled Components
const FAQSection = styled(Section)`
  background: #1e1b4b;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid rgba(129, 140, 248, 0.2);
  border-radius: 12px;
  overflow: hidden;
  background: rgba(30, 27, 75, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: rgba(129, 140, 248, 0.4);
  }
`;

const FAQHeader = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const FAQTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #e0e7ff;
  margin: 0;
`;

const FAQIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #818cf8;
`;

const FAQContent = styled.div`
  padding: ${props => (props.$isOpen ? '0 1.25rem 1.25rem' : '0 1.25rem')};
  max-height: ${props => (props.$isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const FAQText = styled.p`
  color: #a5b4fc;
  line-height: 1.6;
  margin: 0;
`;

function Mobile() {
    const [openModalRegister, setOpenModalRegister] = useState(false);
    const [openFAQs, setOpenFAQs] = React.useState([]);

  const toggleFAQ = (index) => {
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter(item => item !== index));
    } else {
      setOpenFAQs([...openFAQs, index]);
    }
  };
  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };


  const faqs = [
    {
        question: "Quelle est la différence entre le développement natif et cross-platform?",
        answer: "Le développement natif utilise les langages et outils spécifiques à chaque plateforme (Swift/Objective-C pour iOS, Kotlin/Java pour Android), offrant des performances optimales et un accès complet aux fonctionnalités du système. Le développement cross-platform utilise des frameworks comme React Native ou Flutter pour créer une seule base de code qui fonctionne sur plusieurs plateformes, réduisant le temps de développement mais parfois avec quelques compromis en termes de performances ou d'accès aux fonctionnalités natives."
    },
    {
        question: "Combien de temps faut-il pour développer une application mobile?",
        answer: "Le temps de développement varie considérablement selon la complexité du projet. Une application simple peut prendre 2-3 mois, une application de complexité moyenne 3-6 mois, et une application complexe avec des fonctionnalités avancées peut prendre 6-12 mois. Ces délais incluent la conception, le développement, les tests et le déploiement."
    },
    {
        question: "Quel est le coût moyen de développement d'une application mobile?",
        answer: "Le coût dépend de nombreux facteurs comme la complexité, les plateformes ciblées et les fonctionnalités. Une application simple peut coûter entre 15 000€ et 30 000€, une application moyenne entre 30 000€ et 80 000€, et une application complexe peut dépasser les 100 000€. Ces estimations incluent la conception, le développement, les tests et le déploiement initial."
    },
    {
        question: "Comment choisir entre iOS et Android pour mon application?",
        answer: "Le choix dépend de votre public cible. iOS domine généralement en Amérique du Nord et en Europe occidentale, avec des utilisateurs à plus fort pouvoir d'achat. Android a une part de marché mondiale plus importante, particulièrement dans les marchés émergents. Idéalement, visez les deux plateformes, mais si vous devez choisir, analysez où se trouve votre public cible et commencez par cette plateforme."
    },
    {
        question: "Quelles sont les étapes du processus de développement d'une application mobile?",
        answer: "Le processus comprend généralement: 1) Analyse des besoins et stratégie, 2) Wireframing et conception UX/UI, 3) Développement frontend et backend, 4) Assurance qualité et tests, 5) Déploiement sur les stores, 6) Maintenance et mises à jour post-lancement. Chaque étape est cruciale pour créer une application réussie et performante."
    },
    {
        question: "Comment monétiser mon application mobile?",
        answer: "Il existe plusieurs modèles de monétisation: achat unique (payant à l'installation), freemium (fonctionnalités de base gratuites, premium payantes), abonnement (paiement récurrent), publicité in-app, achats in-app (produits virtuels ou fonctionnalités), ou modèle marketplace (commission sur les transactions). Le choix dépend de votre type d'application et de votre public cible."
    },
    {
        question: "Qu'est-ce que le développement responsive pour les applications mobiles?",
        answer: "Le développement responsive garantit que votre application mobile fonctionne correctement sur une variété d'appareils, qu'il s'agisse de smartphones ou de tablettes. Cela implique l'utilisation de mises en page flexibles, d'images adaptées et de media queries pour offrir une expérience utilisateur optimale sur différentes tailles d'écran."
    },
    {
        question: "Quels sont les langages de programmation les plus populaires pour le développement mobile?",
        answer: "Les langages de programmation les plus courants incluent Swift pour iOS, Kotlin pour Android, Java pour les applications Android classiques, et JavaScript pour les applications multiplateformes utilisant React Native ou Cordova."
    },
    {
        question: "Comment intégration des fonctionnalités de localisation dans une application mobile?",
        answer: "Vous pouvez intégrer des fonctionnalités de localisation en utilisant les API de géolocalisation de votre plateforme (comme Core Location pour iOS et Fused Location API pour Android). Assurez-vous de demander l'autorisation de l'utilisateur avant d'accéder à ses données de localisation."
    },
    {
        question: "Quelles bases de données sont utilisées dans le développement mobile?",
        answer: "Les bases de données les plus couramment utilisées pour les applications mobiles incluent SQLite pour le stockage local, Firebase Firestore pour les applications en temps réel, et Realm pour la gestion des données sur les appareils mobiles."
    },
    {
        question: "Comment tester une application mobile?",
        answer: "Les tests peuvent être effectués à l'aide de tests unitaires, de tests d'intégration, de tests fonctionnels et de tests d'interface utilisateur. Des frameworks comme Appium ou Espresso peuvent être utilisés pour automatiser les tests sur des appareils physiques ou des émulateurs."
    },
    {
        question: "Quels critères déterminer la qualité d'une application mobile?",
        answer: "La qualité d'une application mobile est déterminée par sa performance, son interface utilisateur, sa sécurité, sa fiabilité, et son expérience utilisateur. Les évaluations de la boutique d'applications et les retours des utilisateurs sont également des indicateurs clés."
    },
    {
        question: "Comment assurer la sécurité d'une application mobile?",
        answer: "Vous devez implémenter le cryptage des données, des connexions sécurisées via HTTPS, des vérifications d'authentification robustes et des contrôles d'accès. Utilisez également des bibliothèques sécurisées et maintenez vos dépendances à jour."
    },
    {
        question: "Comment gérer les mises à jour d'une application mobile?",
        answer: "Les mises à jour peuvent être gérées via les magasins d'applications. Assurez-vous de tester chaque nouvelle version de l'application avant de la déployer, et informez les utilisateurs des nouvelles fonctionnalités ou améliorations."
    },
    {
        question: "Quelles sont les différences entre le développement d'applications iOS et Android?",
        answer: "Les principales différences résident dans les langages de programmation utilisés (Swift/Objective-C pour iOS et Kotlin/Java pour Android), les interfaces utilisateur, et les méthodes de publication sur les magasins d'applications, ainsi que les directives de conception et de sécurité."
    },
    {
        question: "Comment intégrer des paiements en ligne dans une application mobile?",
        answer: "L'intégration de paiements peut être effectuée en utilisant des services de paiement comme Stripe, PayPal ou Square, qui proposent des SDK et des API pour faciliter le traitement des transactions en toute sécurité."
    },
    {
        question: "Qu'est-ce que la méthode Agile et comment s'applique-t-elle au développement mobile?",
        answer: "La méthode Agile est un cadre de développement qui permet des itérations rapides, la flexibilité des changements et une collaboration constante avec les clients. Elle est appliquée au développement mobile pour s'assurer que les modifications sont effectuées rapidement et que le produit final répond aux besoins des utilisateurs."
    },
    {
        question: "Comment ajouter des notifications push à mon application mobile?",
        answer: "Vous pouvez utiliser des services comme Firebase Cloud Messaging (FCM) pour Android et l'APNS pour iOS afin d'implémenter des notifications push. Assurez-vous de demander la permission à l'utilisateur de recevoir des notifications avant de les activer."
    },
    {
        question: "Quels outils de marketing mobile sont disponibles pour promouvoir une application?",
        answer: "Les outils de marketing mobile incluent les médias sociaux, le marketing d'influence, le référencement appliqué aux applications (ASO), les publicités in-app, et les campagnes d'email marketing ciblées."
    },
    {
        question: "Comment créer des expériences utilisateur engageantes sur mobile?",
        answer: "Pour engager les utilisateurs, vous devez concevoir des interfaces simples, utiliser des animations fluides, fournir un contenu pertinent et personnalisé, et faciliter un accès rapide aux fonctionnalités clés."
    },
    {
        question: "Comment gérer les problèmes de compatibilité entre différents appareils?",
        answer: "Testez votre application sur différents appareils et tailles d'écran pour garantir la compatibilité. Utilisez des outils d'émulation pour simuler différents environnements et résolutions d'écran."
    },
    {
        question: "Comment recueillir des retours des utilisateurs sur votre application mobile?",
        answer: "Vous pouvez ajouter une fonctionnalité pour permettre aux utilisateurs de soumettre des commentaires directement dans l'application ou utiliser des outils d'analyse pour suivre les comportements et les interactions des utilisateurs."
    },
    {
        question: "Quelles sont les tendances modernes en développement d'applications mobiles?",
        answer: "Les tendances incluent l'intégration de l'intelligence artificielle, la réalité augmentée/virtuelle, l'automatisation, et l'utilisation croissante des solutions serverless et des architectures microservices."
    },
    {
        question: "Comment améliorer l'expérience de onboarding pour les nouvelles applications?",
        answer: "Créez des tutoriels interactifs, guidez les utilisateurs à travers les fonctionnalités clés, et permettez-leur d'explorer à leur rythme. Un bon onboarding peut retenir les utilisateurs et réduire le taux de désinstallation."
    }
];

  const handelContactsMobile = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/contrats/category/EXPERT_SHOPIFY`;
  };

  const handelSearchContratsBySkill = (skill) => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/contrats/skill/${skill}`;
  };

  const stats = [
    { value: '50+', label: 'Applications Mobiles' },
    { value: '1M+', label: 'Téléchargements' },
    { value: '4.8', label: 'Note Moyenne' },
    { value: '20+', label: 'Pays Couverts' }
  ];

  const projects = [
    {
      title: 'App Fitness & Santé',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React', 'Firebase', 'HealthKit'],
      description: 'Application de suivi fitness avec intégration HealthKit et Google Fit'
  },
  {
      title: 'Marketplace Mobile',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['Flutter', 'GraphQL', 'Stripe'],
      description: 'Place de marché avec paiements intégrés et chat en temps réel'
  },
  {
      title: 'App IoT Smart Home',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['Swift', 'Kotlin', 'MQTT'],
      description: 'Contrôle domotique avec support multi-protocoles'
  },
  {
      title: 'Réseau Social Local',
      image: 'https://images.pexels.com/photos/267447/pexels-photo-267447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Réseau social géolocalisé pour événements locaux'
  },
  {
      title: 'App de Livraison',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['Flutter', 'Firebase', 'Maps SDK'],
      description: 'Système de livraison avec suivi en temps réel'
  },
  {
      title: 'Wallet Crypto',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React', 'Web3.js', 'Biometrics'],
      description: 'Portefeuille crypto sécurisé multi-devises'
  },
  {
      title: 'Application de Suivi de Projets',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React', 'Redux', 'Firebase'],
      description: 'Application de gestion et de suivi des projets avec notifications'
  },
  {
      title: 'Plateforme de Réservation de Voyage',
      image: 'https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['Angular', 'Firebase', 'API Google Maps'],
      description: 'Application de réservation de voyage avec itinéraires personnalisés'
  },
  {
      title: 'Gestion de Stock en Temps Réel',
      image: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['Flutter', 'Node.js', 'MongoDB'],
      description: 'Application pour la gestion de stock avec rapports en temps réel'
  },
  {
      title: 'Application de Recettes',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React Native', 'Firebase', 'API Recipe'],
      description: 'Application pour explorer et partager des recettes de cuisine'
  },
  {
      title: 'Notifications Push pour Applications Mobiles',
      image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['Node.js', 'Firebase', 'Web Push'],
      description: 'Mise en place d\'un système de notifications push pour les utilisateurs'
  },
  {
      title: 'Application de Suivi des Dépenses',
      image: 'https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Application pour suivre les dépenses et gérer les budgets personnels'
  }
];
const contracts = [
  {
      icon: <Smartphone size={20} />,
      title: "App iOS Native",
      description: "Développement d'une application iOS native avec SwiftUI",
      difficulty: "Avancé",
      skills: ["Swift", "SwiftUI", "Core Data", "CloudKit", "developpeur application mobile freelance"],
      rate: "2750€",
      duration: "2-3 mois"
  },
  {
      icon: <Monitor size={20} />,
      title: "App Android Native",
      description: "Création d'une application Android avec Jetpack Compose",
      difficulty: "Avancé",
      skills: ["Kotlin", "Jetpack Compose", "Room", "Firebase", "freelance developpeur mobile"],
      rate: "3700€",
      duration: "2 mois"
  },
  {
      icon: <Globe size={20} />,
      title: "App Cross-Platform",
      description: "Application mobile multi-plateforme avec React Native",
      difficulty: "Intermédiaire",
      skills: ["React Native", "TypeScript", "Redux", "Firebase", "freelance mobile app"],
      rate: "4650€",
      duration: "3 mois"
  },
  {
      icon: <FileCode size={20} />,
      title: "App Flutter",
      description: "Développement d'une application avec Flutter",
      difficulty: "Intermédiaire",
      skills: ["Flutter", "Dart", "Bloc", "Firebase", "freelance app"],
      rate: "1600€",
      duration: "1 mois"
  },
  {
      icon: <Box size={20} />,
      title: "PWA Mobile",
      description: "Application web progressive pour mobile",
      difficulty: "Intermédiaire",
      skills: ["PWA", "Service Workers", "IndexedDB", "Push API", "freelance application mobile"],
      rate: "550€",
      duration: "2 semaines"
  },
  {
      icon: <Server size={20} />,
      title: "Backend Mobile",
      description: "Infrastructure backend pour applications mobiles",
      difficulty: "Avancé",
      skills: ["Node.js", "MongoDB", "WebSocket", "Push Notifications", "freelance mobile app developer"],
      rate: "2700€",
      duration: "1 mois"
  },
  {
      icon: <Cloud size={20} />,
      title: "Serverless Mobile",
      description: "Architecture serverless pour apps mobiles",
      difficulty: "Avancé",
      skills: ["AWS Lambda", "DynamoDB", "API Gateway", "Cognito", "freelance mobile app development"],
      rate: "800€",
      duration: "1 semaines"
  },
  {
      icon: <Network size={20} />,
      title: "Sync Offline",
      description: "Système de synchronisation hors ligne",
      difficulty: "Avancé",
      skills: ["SQLite", "Core Data", "Realm", "Sync Logic", "freelance mobile app"],
      rate: "750€",
      duration: "1 semaines"
  },
  // Nouveaux contrats
  {
      icon: <Clipboard size={20} />,
      title: "Gestion de la Vie Privée des Utilisateurs",
      description: "Mise en place de caractéristiques de confidentialité pour une application mobile.",
      difficulty: "Intermédiaire",
      skills: ["Privacy Policies", "GDPR", "React Native", "freelance mobile"],
      rate: "800€",
      duration: "2 semaines"
  },
  {
      icon: <Lock size={20} />,
      title: "Sécurisation des Données Mobiles",
      description: "Protection des données utilisateurs pour les applications mobiles.",
      difficulty: "Avancé",
      skills: ["Data Encryption", "Secure Sockets", "API Security", "freelance mobile developer"],
      rate: "750€",
      duration: "1 semaines"
  },
  {
      icon: <Box size={20} />,
      title: "Personnalisation de l'Interface Utilisateur",
      description: "Création d'interfaces utilisateur personnalisées pour améliorer l'expérience utilisateur.",
      difficulty: "Intermédiaire",
      skills: ["UI Design", "React Native", "User Testing", "freelance mobile app"],
      rate: "1650€",
      duration: "3 semaines"
  },
  {
      icon: <Lightbulb size={20} />,
      title: "Application d'Apprentissage Automatique",
      description: "Intégration de l'apprentissage automatique dans l'application mobile.",
      difficulty: "Avancé",
      skills: ["Python", "Machine Learning", "TensorFlow", "freelance developpeur mobile"],
      rate: "800€",
      duration: "2-3 mois"
  },
  {
      icon: <ChartLine size={20} />,
      title: "Analyse des Données Utilisateur",
      description: "Implémentation d'outils d’analyse pour examiner le comportement des utilisateurs dans les applications.",
      difficulty: "Intermédiaire",
      skills: ["Google Analytics", "Firebase", "Data Analysis", "freelancer mobile app"],
      rate: "500€",
      duration: "3 jours"
  },
  {
      icon: <Database size={20} />,
      title: "Intégration d'API Externes",
      description: "Connexion de l'application mobile à des API externes pour enrichir les fonctionnalités.",
      difficulty: "Avancé",
      skills: ["REST API", "GraphQL", "Node.js", "freelance mobile developer"],
      rate: "700€",
      duration: "1-2 mois"
  },
  {
      icon: <Gamepad size={20} />,
      title: "Développement d'Applications Ludiques",
      description: "Création d'une application mobile centrée sur le jeu.",
      difficulty: "Avancé",
      skills: ["Unity", "C#", "Mobile Games", "freelance mobile"],
      rate: "4850€",
      duration: "3 mois"
  },
  {
      icon: <ClipboardCheck size={20} />,
      title: "Application de Bien-Être Mental",
      description: "Développement d'une application dédiée à la santé mentale et au bien-être.",
      difficulty: "Avancé",
      skills: ["React Native", "Firebase", "Mental Health", "freelancer mobile app"],
      rate: "1800€",
      duration: "2 mois"
  },
  {
      icon: <Tablet size={20} />,
      title: "Application d'E-Learning",
      description: "Création d'une plateforme mobile pour l'éducation en ligne.",
      difficulty: "Intermédiaire",
      skills: ["React Native", "Laravel", "MySQL", "freelance mobile app development"],
      rate: "5700€",
      duration: "5 mois"
  },
  {
      icon: <Headphones size={20} />,
      title: "Application de Streaming Audio",
      description: "Développement d'une application mobile de streaming audio avec playlists.",
      difficulty: "Avancé",
      skills: ["Flutter", "WebSockets", "Node.js", "freelance mobile"],
      rate: "3900€",
      duration: "3 mois"
  },
  {
      icon: <UserCheck size={20} />,
      title: "Application de Suivi de Santé",
      description: "Développement d'une application mobile pour le suivi de la condition physique et des activités de santé.",
      difficulty: "Avancé",
      skills: ["React Native", "HealthKit", "Google Fit", "freelance mobile"],
      rate: "3750€",
      duration: "3 mois"
  },
  {
      icon: <ClipboardCheck size={20} />,
      title: "Système de Planification",
      description: "Création d'une application de planification et de gestion de temps.",
      difficulty: "Intermédiaire",
      skills: ["Python", "Django", "JavaScript", "freelance mobile"],
      rate: "600€",
      duration: "2 jours"
  }
];

  const skills = [
    {
      title: 'Développement Natif',
      icon: <Smartphone size={24} />,
      items: ['Swift/SwiftUI', 'Kotlin', 'Java Android', 'Objective-C']
    },
    {
      title: 'Cross-Platform',
      icon: <Globe size={24} />,
      items: ['React Native', 'Flutter', 'Ionic', 'Capacitor']
    },
    {
      title: 'Backend & API',
      icon: <Database size={24} />,
      items: ['Node.js', 'Firebase', 'GraphQL', 'REST']
    },
    {
      title: 'DevOps Mobile',
      icon: <GitBranch size={24} />,
      items: ['CI/CD', 'TestFlight', 'Play Console', 'Fastlane']
    }
  ];

  const handelUsersBack = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/prestataires/job/DEVELOPER_MOBILE`;
  };

  const handelProjectsBack = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/projects/category/DEVELOPER_MOBILE`;
  };

  return (
    <>
    <Helmet>
        <title>Trouver un Freelance app & Agences de Développement Application</title>
        <meta
            name="description"
            content="Découvrez nos développeurs freelance app spécialisés dans les applications mobiles pour créer des solutions innovantes. Services de développement, optimisation, et stratégie. Contactez le meilleur freelance mobile qui correspond à vos besoins !"
        />
        <meta
            name="keywords"
            content="freelance app, freelance application, developpeur freelance application mobile, developpeur mobile freelance, développeur application mobile freelance, freelance application mobile, freelance developpeur mobile, freelance app, freelance marketing mobile, mobile app developer freelance, mobile app freelance, developpeur freelance mobile, mobile app development freelance, prix application mobile freelance, dev mobile freelance, freelance mobile"
        />
        <link rel="canonical" href="https://itgalaxy.io/freelance-app" />
        <meta property="og:title" content="Trouver un Freelance app & Agences de Développement Application" />
        <meta property="og:description" content="Trouvez des freelances qualifiés et des agences expertes en développement mobile pour créer et gérer vos applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/freelance-app" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-app" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-app" />
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Développeur d'Application Mobile",
                "provider": {
                    "@type": "Organization",
                    "name": "ItGalaxy",
                    "url": "https://www.itgalaxy.io"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "France"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services de Développement Mobile",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Développement d'Applications Mobiles",
                                "description": "Création d'applications mobiles adaptées aux besoins de votre entreprise."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Optimisation de Performance",
                                "description": "Audit et amélioration des performances de vos applications mobiles."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Stratégie Mobile",
                                "description": "Développement de stratégies marketing personnalisées pour vos applications mobiles."
                            }
                        }
                    ]
                }
            })}
        </script>
    </Helmet>

      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <PhoneContainer>
              <Smartphone />
            </PhoneContainer>
            <HeroTitle>Freelance app</HeroTitle>
            <HeroSubtitle>
              Mette en place des applications Mobiles Android et IOS performantes .
            </HeroSubtitle>
             <Button  onClick={() => window.location.href = `/search/prestataires` }>
              Trouver les développeurs Mobile
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires job={'DEVELOPER_MOBILE'} />
        <ItGalaxyAsService />



        <Section>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Impact & Résultats
            </SectionTitle>
            <SectionSubtitle>
              Des applications qui transforment les idées en succès
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
              <Smartphone />
              Portfolio Mobile
            </SectionTitle>
            <SectionSubtitle>
              Applications innovantes et performantes
            </SectionSubtitle>
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard key={index}>
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
              Maîtrise des technologies mobiles modernes
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
              <Smartphone />
              Exemples des projets Mobile partagés
            </SectionTitle>
            <SectionSubtitle>
              Découvrez nos missions de développement mobile et créez des applications innovantes
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
                <ShowMoreButton  onClick={() => handleModalRegister()}>
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
              <HelpCircle />
              Questions Fréquentes
            </SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur le développement mobile
            </SectionSubtitle>
            <FAQContainer>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQHeader onClick={() => toggleFAQ(index)}>
                    <FAQTitle>{faq.question}</FAQTitle>
                    <FAQIconContainer>
                      {openFAQs.includes(index) ? <Minus size={18} /> : <Plus size={18} />}
                    </FAQIconContainer>
                  </FAQHeader>
                  <FAQContent $isOpen={openFAQs.includes(index)}>
                    <FAQText>{faq.answer}</FAQText>
                  </FAQContent>
                </FAQItem>
              ))}
            </FAQContainer>
          </SectionContent>
        </FAQSection>
      </MainContainer>
      <Offers />
      <FooterHome page={"mobile"} />
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

export default Mobile;