import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import { ArrowDown,ArrowRight, Award, BarChart3, Palette, CheckCircle2, ChevronRight, Clock, Layout, FileCheck, GitBranch, HelpCircle, LineChart, MinusCircle, PlusCircle, Settings, Shield, TestTube2, Timer, UserCheck, Users, Workflow,Slack } from 'lucide-react';
import { useState } from "react";
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Offers from "./Offres";
import { Helmet } from "react-helmet";
import CardsPrestataires from "./CardsPrestataires";
import ItGalaxyAsService from "../ItGalaxyAsService/ItGalaxyAsService";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0F0F1A;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(139, 92, 246, 0); }
  100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #0F0F1A;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 10% 10%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(79, 70, 229, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroSection = styled.section`
  min-height: 67vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(79, 70, 229, 0.1));
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  max-width: 64rem;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Logo = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #8B5CF6, #4F46E5);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);

  svg {
    width: 80px;
    height: 80px;
    color: #ffffff;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #ffffff;
  background: linear-gradient(to right, #8B5CF6, #4F46E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #A5B4FC;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #8B5CF6, #4F46E5);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
    animation: ${pulse} 2s infinite;
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  position: relative;
  background: #1A1A2E;

  &:nth-child(odd) {
    background: #0F0F1A;
  }
`;

const SectionContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(to right, #8B5CF6, #4F46E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #8B5CF6;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #A5B4FC;
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
    border-color: #8B5CF6;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #8B5CF6, #4F46E5);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #A5B4FC;
  line-height: 1.6;
  text-align: center;
`;

const ServiceStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 12px;
`;

const StatItem = styled.div`
  text-align: center;
  
  .value {
    color: #8B5CF6;
    font-weight: 600;
    font-size: 1.125rem;
  }
  
  .label {
    color: #A5B4FC;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
    border-color: #8B5CF6;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ProjectCompany = styled.p`
  color: #A5B4FC;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #A5B4FC;
  font-size: 0.875rem;
`;

const ProjectMetrics = styled.div`
  background: linear-gradient(135deg, #8B5CF6, #4F46E5);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #A5B4FC;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechTag = styled.span`
  background: rgba(139, 92, 246, 0.1);
  color: #A5B4FC;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: 0.3s;

  &:hover {
    background: rgba(139, 92, 246, 0.2);
    border-color: #8B5CF6;
  }
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const MetricCard = styled.div`
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #8B5CF6;
  }
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #8B5CF6, #4F46E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  color: #A5B4FC;
  font-size: 1rem;
`;

const ClientLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 4rem 0;
  flex-wrap: wrap;
`;

const ClientLogo = styled.div`
  opacity: 0.6;
  transition: opacity 0.3s;
  filter: grayscale(100%);
  
  &:hover {
    opacity: 1;
    filter: none;
  }
`;

const MethodologySection = styled(Section)`
  background: #0F0F1A;
`;

const MethodologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const MethodologyCard = styled(ServiceCard)`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MethodologyIcon = styled(ServiceIcon)`
  margin: 0;
  width: 60px;
  height: 60px;
`;

const MethodologyTitle = styled(ServiceTitle)`
  text-align: left;
  margin: 0;
`;

const MethodologyDescription = styled(ServiceDescription)`
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const SeeMoreButton = styled(Button)`
  background: transparent;
  border: 2px solid #8B5CF6;
  color: #A5B4FC;
  
  &:hover {
    background: rgba(139, 92, 246, 0.1);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;

const TrustBadge = styled.div`
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #A5B4FC;
  
  svg {
    color: #8B5CF6;
  }
`;

const TrustBadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const SearchBar = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 600px;
  
  input {
    background: transparent;
    border: none;
    color: white;
    flex: 1;
    font-family: 'JetBrains Mono', monospace;
    
    &::placeholder {
      color: #A5B4FC;
    }
    
    &:focus {
      outline: none;
    }
  }
`;

const SkillBadge = styled.span`
  background: ${props => props.featured ? 'linear-gradient(135deg, #8B5CF6, #4F46E5)' : 'rgba(139, 92, 246, 0.1)'};
  color: ${props => props.featured ? 'white' : '#A5B4FC'};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const VerificationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #10B981;
  font-size: 0.875rem;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const FAQSection = styled(Section)`
  background: #0F0F1A;
`;

const FAQContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    border-color: #8B5CF6;
  }
`;

const FAQHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: rgba(139, 92, 246, 0.05);
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: left;
  transition: all 0.3s;

  &:hover {
    background: rgba(139, 92, 246, 0.1);
  }

  svg {
    color: #8B5CF6;
    transition: transform 0.3s;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

const FAQContent = styled.div`
  padding: ${props => props.isOpen ? '1.5rem' : '0 1.5rem'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s;
  color: #A5B4FC;
  line-height: 1.6;

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

function SiteTest() {

  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQs, setOpenFAQs] = useState({});

  const metrics = [
    { value: '5000+', label: 'Clients Vérifiés', icon: <Users size={24} /> },
    { value: '10k+', label: 'Projets Réalisés', icon: <CheckCircle2 size={24} /> },
    { value: '95%', label: 'Taux de Réussite', icon: <Award size={24} /> },
    { value: '24/7', label: 'Support Disponible', icon: <Timer size={24} /> }
  ];

  const trustIndicators = [
    { icon: <Shield size={20} />, text: 'Paiements Sécurisés' },
    { icon: <UserCheck size={20} />, text: 'Experts Vérifiés' },
    { icon: <Clock size={20} />, text: 'Garantie Satisfait ou Remboursé' }
  ];

  const methodology = [
    {
      icon: <FileCheck size={32} />,
      title: 'Publiez Votre Projet',
      description: 'Décrivez vos besoins en design et trouvez des experts qualifiés.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Examinez les Profils',
      description: 'Parcourez les profils des designers vérifiés et sélectionnez le meilleur candidat.'
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Collaborez en Toute Sécurité',
      description: 'Travaillez avec votre designer via notre plateforme sécurisée avec paiements garantis.'
    },
    {
      icon: <LineChart size={32} />,
      title: 'Suivez les Progrès',
      description: 'Surveillez les étapes et les livrables via notre tableau de bord intuitif.'
    }
];

  const faqs = [
    {
        question: "Comment embaucher un freelance designer sur votre plateforme ?",
        answer: "L'embauche est simple : 1) Publiez vos exigences de projet, 2) Examinez les propositions de designers qualifiés, 3) Interviewez vos meilleurs choix, 4) Sélectionnez et embauchez votre designer préféré. Notre plateforme gère les paiements et la gestion de projet en toute sécurité."
    },
    {
        question: "Quels types de services de design sont disponibles ?",
        answer: "Notre plateforme propose des experts en : Design graphique, Design UI/UX, Design de marque, Design d'interface utilisateur, Design d'expérience utilisateur, Design de produits, et Design de packaging."
    },
    {
        question: "Combien coûte l'embauche d'un freelance designer ?",
        answer: "Les tarifs varient selon l'expertise et la complexité du projet : Designers juniors (30-50€/h), Experts de niveau intermédiaire (50-80€/h), Spécialistes seniors (80-150€/h). Vous pouvez définir votre budget et recevoir des propositions dans votre fourchette."
    },
    {
        question: "Qu'est-ce qui rend vos freelance designers fiables ?",
        answer: "Nous assurons la qualité grâce à : Des profils professionnels vérifiés, Des portfolios détaillés, Des avis et notes clients, Une vérification de l'historique de travail, Une protection des paiements sécurisée, et Une garantie satisfait ou remboursé."
    },
    {
        question: "Puis-je embaucher des freelance designers pour des projets à long terme ?",
        answer: "Oui ! De nombreux clients embauchent nos designers pour des projets à long terme. Vous pouvez choisir entre : Projets à prix fixe, Contrats à taux horaire, Arrangements à temps partiel ou temps plein, Options d'augmentation d'équipe."
    },
    {
        question: "Que comprennent les services de design ?",
        answer: "Les services comprennent généralement : Recherche et analyse, Conception de wireframes et prototypes, Design visuel, Tests utilisateurs, Itérations et améliorations, et Livraison des fichiers finaux."
    },
    {
        question: "Comment évaluer un freelance designer ?",
        answer: "Vérifiez son portfolio, demandez des exemples de projets antérieurs, et consultez les avis des clients. Un entretien peut également vous aider à comprendre sa vision et son approche du design."
    },
    {
        question: "Quelles sont les compétences requises pour un freelance designer ?",
        answer: "Un designer doit être à l'aise avec des outils comme Adobe Creative Suite, Figma, Sketch, et maîtriser les principes de design UI/UX, de typographie, et de théorie des couleurs."
    },
    {
        question: "Quels outils recommandez-vous pour le design ?",
        answer: "Des outils comme Figma, Adobe XD, Sketch, Illustrator, et Photoshop sont fortement recommandés pour leurs fonctionnalités robustes et leur adaptabilité à différents types de projets."
    },
    {
        question: "Comment intégrer le design dans un processus de développement ?",
        answer: "Le design peut être intégré en collaborant étroitement avec les développeurs dès le début du projet, en utilisant des outils de prototypage et en maintenant une communication continue pour s'assurer que le design est bien implémenté."
    },
    {
        question: "Quelle est la durée d'un projet de design ?",
        answer: "La durée dépend de la taille du projet. Un projet de design pour une application simple peut prendre quelques semaines, tandis qu'un projet plus complexe peut nécessiter plusieurs mois de collaboration."
    },
    {
        question: "Comment assurer la cohérence du design dans un projet ?",
        answer: "Nous suivons des guides de style, en établissant des normes pour les couleurs, les typographies, et les composants UI. Nos experts veillent à ce que le design reste cohérent tout au long du projet."
    },
    {
        question: "Comment gérer les retours clients sur un projet de design ?",
        answer: "Il est important d'analyser les retours clients, de comprendre leurs besoins, et d'ajuster le design selon les commentaires. La communication avec le client est cruciale pour s'assurer que le design répond à leurs attentes."
    },
    {
        question: "Comment les prototypes aident-ils dans le processus de design ?",
        answer: "Les prototypes permettent de visualiser et de tester les concepts de design avant la phase de développement, facilitant les retours et les ajustements. Des outils comme Figma et Adobe XD permettent de créer des prototypes interactifs."
    },
    {
        question: "Quel type de design est le plus important ?",
        answer: "Chaque type de design a son importance. Cependant, le design UI/UX est fondamental pour garantir une expérience utilisateur fluide et intuitive, tandis que le design graphique est essentiel pour la communication visuelle."
    },
    {
        question: "Comment s'assurer que le design couvre toutes les fonctionnalités critiques ?",
        answer: "En impliquant les parties prenantes lors de la définition des exigences et en réalisant des revues régulières de vos maquettes et prototypes pour s’assurer que toutes les fonctionnalités critiques sont bien représentées."
    },
    {
        question: "Quelle est la différence entre le design UI et le design UX ?",
        answer: "Le design UI se concentre sur l'apparence et la disposition des éléments de l'interface, tandis que le design UX se concentre sur l'expérience globale de l'utilisateur et la facilité d'utilisation."
    },
    {
        question: "Comment puis-je améliorer l'efficacité de mon processus de design ?",
        answer: "Optimisez votre processus en utilisant des outils de collaboration, en établissant des délais clairs, et en implémentant des retours réguliers. Une révision de la structure de travail peut également contribuer."
    },
    {
        question: "Quelles sont les erreurs courantes à éviter lors du design ?",
        answer: "Les erreurs courantes incluent un manque de recherche utilisateur, des designs non cohérents, et un manque de collaboration avec l'équipe de développement. Assurez-vous que le design est régulièrement mis à jour et testé."
    },
    {
        question: "Comment évaluer un système de design ?",
        answer: "Évaluez son efficacité en mesurant la satisfaction des utilisateurs, la cohérence visuelle, et le retour d’expérience des utilisateurs résultant du design. Des KPI peuvent aider à suivre ces métriques."
    },
    {
        question: "Quelles technologies modernes sont essentielles pour le design ?",
        answer: "Des technologies comme Figma, Adobe XD, Sketch, et des solutions de prototypage interactif sont essentielles pour créer des designs modernes et efficaces."
    },
    {
        question: "Comment recueillir des retours d'expérience des utilisateurs sur le design ?",
        answer: "Utilisez des enquêtes, des tests utilisateurs, et des groupes de discussion pour recueillir les retours des utilisateurs. Cela peut également être renforcé par des analyses de données d’utilisation post-lancement."
    },
    {
        question: "Comment intégrer les feedbacks utilisateurs dans le processus de design ?",
        answer: "Analysez les retours utilisateurs, priorisez les retours critiques, et intégrez-les dans le développement de vos nouveaux designs ou ajustez vos designs existants en fonction des retours." 
    }
];

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };

  const handelSearchProjects = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/projects/category/SYSTEM_TESTER`;
  };

  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Freelances en Design Graphique',
      description: 'Trouvez des freelances qualifiés spécialisés dans le design graphique avec Adobe Illustrator, Photoshop et InDesign.',
      avgRate: '40-70€/h',
      topSkills: ['Illustrator', 'Photoshop', 'InDesign'],
      activeFreelancers: 150
    },
    {
      icon: <Layout size={32} />,
      title: 'Experts en Design UI/UX',
      description: 'Connectez-vous avec des freelances et des agences expérimentés en design UI/UX utilisant Figma, Sketch et Adobe XD.',
      avgRate: '50-90€/h',
      topSkills: ['Figma', 'Sketch', 'Adobe XD'],
      activeFreelancers: 200
    },
    {
      icon: <Slack size={32} />,
      title: 'Spécialistes en Branding',
      description: 'Embauchez des professionnels qui excellent dans la création d\'identités visuelles et de stratégies de marque.',
      avgRate: '60-100€/h',
      topSkills: ['Logo Design', 'Brand Guidelines', 'Typography'],
      activeFreelancers: 120
    }
];


  
const projects = [
  {
    title: 'Redesign de Site E-commerce',
    company: 'Freelance Designer',
    location: 'À distance',
    type: 'Design UI/UX',
    metrics: 'Amélioration de 30% de l\'UX',
    description: "Un freelance a redessiné l'interface utilisateur d'une plateforme e-commerce, améliorant l'expérience utilisateur et les conversions.",
    tech: ['Figma', 'Adobe XD', 'User Testing', 'mission freelance web design']
  },
  {
    title: 'Création d\'Identité Visuelle',
    company: 'Agence de Design',
    location: 'Europe',
    type: 'Branding',
    metrics: 'Nouvelle Marque Lancée',
    description: "Une équipe d'agence a développé une identité visuelle complète pour une startup technologique.",
    tech: ['Illustrator', 'Photoshop', 'Brand Guidelines', 'mission freelance branding']
  },
  {
    title: "Design d'Application Mobile",
    company: 'Équipe Freelance',
    location: 'International',
    type: 'Design Mobile',
    metrics: '95% Satisfaction Utilisateur',
    description: "Une équipe de freelances a conçu une application mobile intuitive et esthétique pour une entreprise de santé.",
    tech: ['Sketch', 'InVision', 'Prototyping', 'mission freelance mobile design']
  },
  {
    title: 'Design de Packaging',
    company: 'Freelance Senior',
    location: 'Europe',
    type: 'Packaging',
    metrics: 'Augmentation des Ventes de 20%',
    description: "Un expert freelance a redessiné le packaging d'une gamme de produits, augmentant leur attractivité en rayon.",
    tech: ['Illustrator', 'Photoshop', '3D Rendering', 'mission freelance packaging']
  },
  {
    title: 'Design de Site Web Corporatif',
    company: 'Consultant en Design',
    location: 'France',
    type: 'Web Design',
    metrics: '100% Conformité aux Normes',
    description: "Un consultant expérimenté a conçu un site web corporatif moderne et responsive pour une entreprise de services.",
    tech: ['Figma', 'WordPress', 'SEO', 'mission freelance web development']
  },
  {
    title: 'Design de Campagne Publicitaire',
    company: 'Expert en Marketing',
    location: 'Remote',
    type: 'Publicité',
    metrics: 'Doublement du ROI',
    description: "Design de campagnes publicitaires print et digital pour une marque de luxe, avec des visuels percutants.",
    tech: ['Photoshop', 'Illustrator', 'Marketing Digital', 'mission freelance marketing']
  },
  {
    title: 'Design de Newsletter',
    company: 'Agence de Communication',
    location: 'Europe',
    type: 'Email Design',
    metrics: 'Taux d\'Ouverture de 25%',
    description: "Création de newsletters personnalisées et responsive pour une entreprise de e-learning.",
    tech: ['HTML/CSS', 'Illustrator', 'Email Marketing', 'mission freelance communication']
  },
  {
    title: 'Design de Présentation',
    company: 'Tech Solutions',
    location: 'À distance',
    type: 'Présentation',
    metrics: '100% Satisfaction Client',
    description: "Création de présentations professionnelles et visuellement attractives pour des pitchs d'entreprise.",
    tech: ['PowerPoint', 'Keynote', 'Graphic Design', 'mission freelance consulting']
  },
  {
    title: 'Design de Logo',
    company: 'Branding Agency',
    location: 'Remote',
    type: 'Logo Design',
    metrics: 'Marque Reconnaissable',
    description: "Conception d'un logo emblématique pour une entreprise de mode, renforçant son identité visuelle.",
    tech: ['Illustrator', 'Branding', 'Typography', 'mission freelance branding']
  },
  {
    title: 'Design de Bannières Web',
    company: 'Web Ventures',
    location: 'International',
    type: 'Banner Design',
    metrics: 'Augmentation du CTR de 15%',
    description: "Création de bannières web attractives pour une campagne de publicité en ligne.",
    tech: ['Photoshop', 'Illustrator', 'Web Design', 'mission freelance digital marketing']
  },
  {
    title: 'Design de Support Print',
    company: 'Print Innovators',
    location: 'Remote - Européen',
    type: 'Print Design',
    metrics: '100% Prêt pour Impression',
    description: "Conception de supports print (flyers, affiches) pour un événement culturel.",
    tech: ['InDesign', 'Illustrator', 'Print Design', 'mission freelance print']
  },
  {
    title: 'Design de Maquette 3D',
    company: '3D Solutions',
    location: 'À distance',
    type: '3D Design',
    metrics: 'Rendu Réaliste',
    description: "Création de maquettes 3D pour un projet immobilier, permettant une visualisation précise.",
    tech: ['Blender', '3D Rendering', 'Architecture', 'mission freelance 3d design']
  },
  {
    title: 'Design de Site Web E-commerce',
    company: 'E-commerce Solutions',
    location: 'Remote',
    type: 'E-commerce Design',
    metrics: 'Conversion Augmentée de 40%',
    description: "Design d'un site web e-commerce optimisé pour l'expérience utilisateur et les ventes.",
    tech: ['Shopify', 'Figma', 'UX/UI', 'mission freelance e-commerce']
  },
  {
    title: 'Design de Rapport Annuel',
    company: 'Corporate Design',
    location: 'France',
    type: 'Corporate Design',
    metrics: '100% Livré à Temps',
    description: "Conception d'un rapport annuel visuellement impactant pour une entreprise cotée en bourse.",
    tech: ['InDesign', 'Illustrator', 'Corporate Branding', 'mission freelance corporate']
  },
  {
    title: 'Design de Catalogue Produit',
    company: 'Product Design Co.',
    location: 'Remote - International',
    type: 'Catalogue Design',
    metrics: '100% Prêt pour Impression',
    description: "Conception d'un catalogue produit moderne et attractif pour une marque de vente au détail.",
    tech: ['InDesign', 'Illustrator', 'Print Design', 'mission freelance print']
  },
  {
    title: 'Design de Site Web Éducatif',
    company: 'E-learning Solutions',
    location: 'Remote - France',
    type: 'Web Design',
    metrics: '95% Satisfaction Utilisateur',
    description: "Design d'un site web éducatif interactif et facile à naviguer pour une plateforme de e-learning.",
    tech: ['Figma', 'WordPress', 'UX/UI', 'mission freelance web development']
  },
  {
    title: 'Design de Campagne de Lancement',
    company: 'Launch Agency',
    location: 'Remote - Européen',
    type: 'Campaign Design',
    metrics: 'Lancement Réussi',
    description: "Création d'une campagne visuelle pour le lancement d'un nouveau produit, incluant des supports print et digital.",
    tech: ['Photoshop', 'Illustrator', 'Marketing Digital', 'mission freelance marketing']
  },
  {
    title: 'Design de Campagne Social Media',
    company: 'Social Media Agency',
    location: 'Remote',
    type: 'Social Media',
    metrics: 'Engagement Augmenté de 50%',
    description: "Création de visuels et de campagnes pour les réseaux sociaux, boostant l'engagement et la portée.",
    tech: ['Photoshop', 'Illustrator', 'Social Media Marketing', 'mission freelance social media']
  },
  {
    title: 'Design de Support Événementiel',
    company: 'Event Designers',
    location: 'Remote',
    type: 'Event Design',
    metrics: '100% Prêt pour Événement',
    description: "Conception de supports visuels pour un événement (bannières, badges, affiches).",
    tech: ['Illustrator', 'InDesign', 'Event Branding', 'mission freelance event design']
  },
  {
    title: 'Design de Présentation Interactive',
    company: 'Interactive Solutions',
    location: 'Remote - France',
    type: 'Interactive Design',
    metrics: 'Engagement Augmenté de 60%',
    description: "Création d'une présentation interactive pour un client, intégrant des animations et des transitions fluides.",
    tech: ['PowerPoint', 'Keynote', 'Motion Design', 'mission freelance consulting']
  },
  {
    title: 'Design de Site Web Portefeuille',
    company: 'Portfolio Designers',
    location: 'Remote - International',
    type: 'Portfolio Design',
    metrics: 'Visibilité Augmentée',
    description: "Design d'un site web portfolio personnalisé pour un artiste, mettant en valeur ses œuvres de manière élégante.",
    tech: ['Figma', 'Webflow', 'UX/UI', 'mission freelance web design']
  },
  {
    title: 'Design de Campagne Écologique',
    company: 'Eco Design Agency',
    location: 'Remote',
    type: 'Eco Design',
    metrics: 'Impact Positif',
    description: "Création d'une campagne visuelle pour une marque éco-responsable, mettant en avant son engagement environnemental.",
    tech: ['Illustrator', 'Photoshop', 'Sustainable Design', 'mission freelance branding']
  },
  {
    title: 'Design de Support de Formation',
    company: 'Training Solutions',
    location: 'Remote - France',
    type: 'Training Design',
    metrics: '100% Clarté et Engagement',
    description: "Conception de supports de formation visuels et interactifs pour une entreprise de consulting.",
    tech: ['PowerPoint', 'InDesign', 'Instructional Design', 'mission freelance consulting']
  }
];

  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  return (
    <>
    <Helmet>
        <title>Trouvez Freelance designer ou une agence de graphisme </title>
        <meta name="description" content="Découvrez les meilleures Freelance designer , et des agences de graphisme spécialisées dans la création de sites internet." />
         <link rel="canonical" href="https://itgalaxy.io/freelance-designer" />
        <meta property="og:title" content="Trouvez Freelance designer" />
        <meta property="og:description" content="Découvrez les meilleures Freelance designe, et des agences spécialisées dans la création de sites internet." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/freelance-designer" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-designer" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-designer" />
    </Helmet>
      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <Logo>
              <TestTube2 />
            </Logo>
            <HeroTitle>Notre Mission de vous connecter avec les meilleurs Freelance designer</HeroTitle>
            <HeroSubtitle>
              Notre plateforme vous connecte avec des clients vérifiés du monde entier.
            </HeroSubtitle>
            <TrustBadgesContainer>
              {trustIndicators.map((indicator, index) => (
                <TrustBadge key={index}>
                  {indicator.icon}
                  {indicator.text}
                </TrustBadge>
              ))}
            </TrustBadgesContainer>
            <Button onClick={() => window.location.href = `/search/prestataires`} >
                          Nos Freelances Designer
             <ArrowRight className="w-5 h-5" />
             </Button>
          </HeroContent>
        </HeroSection>

         <CardsPrestataires skill={'HTML'}/>
         <ItGalaxyAsService />
         
        
        <Section>
          <SectionContent>
            <SectionTitle>
              <BarChart3 />
              Projets en Vedette
            </SectionTitle>
            <SectionSubtitle>
              Découvrez les projets réussis réalisés par nos freelances designer et agences de graphisme
            </SectionSubtitle>
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard key={index}>
                  <ProjectHeader>
                    <ProjectInfo>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectCompany>
                        {project.company}
                        <VerificationBadge>
                          <CheckCircle2 size={16} />
                          Vérifié
                        </VerificationBadge>
                      </ProjectCompany>
                      <ProjectMeta>
                        <span>{project.location}</span>
                        <span>{project.type}</span>
                      </ProjectMeta>
                    </ProjectInfo>
                    <ProjectMetrics>{project.metrics}</ProjectMetrics>
                  </ProjectHeader>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.tech.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <Button onClick={handleModalRegister} style={{ marginTop: '1.5rem', width: '100%' }}>
                    Créer votre projet
                    <ChevronRight size={20} />
                  </Button>
                </ProjectCard>
              ))}
            </ProjectsGrid>
            <ButtonContainer>
              <SeeMoreButton onClick={() => handleModalRegister()}>
                Explorer Plus de Projets
                <ArrowDown size={20} />
              </SeeMoreButton>
            </ButtonContainer>
          </SectionContent>
        </Section>

        <MethodologySection>
          <SectionContent>
            <SectionTitle>
              <Workflow />
              Comment ça Marche
            </SectionTitle>
            <SectionSubtitle>
              Un processus simple pour trouver et collaborer avec des experts en tests
            </SectionSubtitle>
            <MethodologyGrid>
              {methodology.map((item, index) => (
                <MethodologyCard key={index}>
                  <MethodologyIcon>{item.icon}</MethodologyIcon>
                  <MethodologyTitle>{item.title}</MethodologyTitle>
                  <MethodologyDescription>{item.description}</MethodologyDescription>
                </MethodologyCard>
              ))}
            </MethodologyGrid>
          </SectionContent>
        </MethodologySection>

        <Section>
          <SectionContent>
            <SectionTitle>
              <CheckCircle2 />
              Services Disponibles
            </SectionTitle>
            <SectionSubtitle>
              Parcourez notre place de marché de professionnels proposant divers services d'automatisation
            </SectionSubtitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceStats>
                    <StatItem>
                      <div className="value">{service.avgRate}</div>
                      <div className="label">Taux Moyen</div>
                    </StatItem>
                    <StatItem>
                      <div className="value">{service.activeFreelancers}</div>
                      <div className="label">Experts Actifs</div>
                    </StatItem>
                  </ServiceStats>
                  <SkillsContainer>
                    {service.topSkills.map((skill, idx) => (
                      <SkillBadge key={idx} featured={idx === 0}>{skill}</SkillBadge>
                    ))}
                  </SkillsContainer>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </SectionContent>
        </Section>

         <FAQSection>
          <SectionContent>
            <SectionTitle>
              <HelpCircle />
              Questions Fréquentes
            </SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur l'embauche d'experts en automatisation de tests
            </SectionSubtitle>
            <FAQContainer>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQHeader
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFAQs[index]}
                    aria-controls={`faq-content-${index}`}
                  >
                    {faq.question}
                    {openFAQs[index] ? <MinusCircle size={20} /> : <PlusCircle size={20} />}
                  </FAQHeader>
                  <FAQContent
                    id={`faq-content-${index}`}
                    isOpen={openFAQs[index]}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                  >
                    {faq.answer}
                  </FAQContent>
                </FAQItem>
              ))}
            </FAQContainer>
          </SectionContent>
        </FAQSection>
      </MainContainer>
      <Offers />
      <FooterHome page={"design"} />
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

export default SiteTest;