import {
  BarChart2,
  ChevronDown,
  ChevronRight,
  Clock,
  DollarSign,
  FileSearch,
  FileText,
  Globe,
  LineChart,
  Maximize2,
  Rocket,
  Search,
  Share2,
  Target,
  TrendingUp,
  Users,
  UserCheck,
  Eye,
  Wifi,
  UserPlus,
  Cast,
  PenTool,
  Folder,
  Lock,
  PhoneCall,
  CloudUpload,
  Image,
  Award,
  Share,
  Calendar
} from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { keyframes } from 'styled-components';
import Register from '../../../components/Authentification/modals/register';
import Header from '../../../components/Header/Header';
import FooterHome from '../FooterHome/FooterHome';
import Offers from './Offres';
import CardsPrestataires from './CardsPrestataires';

// Animations
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

// Main container
const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #0A0F1C;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Custom styled button
const StyledButton = styled.button`
  background: linear-gradient(135deg, #10B981, #34D399);
  border: none;
  padding: 1rem 2rem;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #34D399, #10B981);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// Global styles
const GlobalStyle = styled.div`
  body {
    margin: 0;
    padding: 0;
    background: #0A0F1C;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
`;

// Styled Components
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 4rem;
  color: #10B981;
  margin-bottom: 2rem;
  animation: ${float} 3s ease-in-out infinite;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #10B981, #34D399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 3s ease infinite;
  background-size: 200% 200%;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94A3B8;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: 8rem 2rem;
  position: relative;
  background: #111827;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:nth-child(odd) {
    background: #0A0F1C;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(to right, #10B981, #34D399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94A3B8;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: center;
`;

const ServiceCard = styled.div`
  background: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #10B981;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #94A3B8;
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: center;
`;

const StatCard = styled.div`
  background: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #10B981;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.25rem;
  color: #94A3B8;
`;

const ContractsSection = styled(Section)`
  background: #111827;
`;

const ContractsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: center;
`;

const ContractCard = styled.div`
  background: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`;

const ContractHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ContractIcon = styled.div`
  font-size: 2rem;
  color: #10B981;
`;

const ContractDifficulty = styled.div`
  background: ${props => props.difficulty === 'Débutant' ? '#10B981' : props.difficulty === 'Intermédiaire' ? '#F59E0B' : '#EF4444'};
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

const ContractTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const ContractDescription = styled.p`
  font-size: 1rem;
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ContractSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SkillTag = styled.span`
  background: #1F2937;
  color: #94A3B8;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
`;

const ContractFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #10B981;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #F59E0B;
`;

const ShowMoreButton = styled(StyledButton)`
  margin-top: 2rem;
`;

const WhyChooseUsSection = styled(Section)`
  background: #111827;
`;

const WhyChooseUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: center;
`;

const WhyChooseUsCard = styled.div`
  background: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`;

const WhyChooseUsIcon = styled.div`
  font-size: 2.5rem;
  color: #10B981;
  margin-bottom: 1rem;
`;

const WhyChooseUsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const WhyChooseUsDescription = styled.p`
  font-size: 1rem;
  color: #94A3B8;
  line-height: 1.6;
`;

const ProcessSection = styled(Section)`
  background: #111827;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: center;
`;

const ProcessStep = styled.div`
  background: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`;

const ProcessStepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #10B981;
  margin-bottom: 0.5rem;
`;

const ProcessStepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const ProcessStepDescription = styled.p`
  font-size: 1rem;
  color: #94A3B8;
  line-height: 1.6;
`;

const BeforeAfterSection = styled(Section)`
  background: #111827;
`;

const BeforeAfterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const BeforeAfterCard = styled.div`
  background: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.isAfter ? '#10B981' : '#EF4444'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.isAfter ? '#10B981' : '#EF4444'};
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px ${props => props.isAfter ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
  }
`;

const BeforeAfterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const BeforeAfterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.isAfter ? '#10B981' : '#EF4444'};
  margin: 0;
`;

const BeforeAfterIcon = styled.div`
  color: ${props => props.isAfter ? '#10B981' : '#EF4444'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BeforeAfterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #94A3B8;
`;

const BeforeAfterItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "${props => props.isAfter ? '✓' : '✕'}";
    color: ${props => props.isAfter ? '#10B981' : '#EF4444'};
    font-weight: bold;
  }
`;

const CaseStudiesSection = styled(Section)`
  background: #111827;
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: center;
`;

const CaseStudyCard = styled.div`
  background: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`;

const CaseStudyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const CaseStudyDescription = styled.p`
  font-size: 1rem;
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CaseStudyResults = styled.div`
  font-size: 1rem;
  color: #94A3B8;
  line-height: 1.6;
  margin-top: auto;

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;

const FAQSection = styled(Section)`
  background: #111827;
`;

const FAQGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`;

const FAQQuestion = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const FAQAnswer = styled.div`
  font-size: 1rem;
  color: #94A3B8;
  line-height: 1.6;
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

function Seo() {
  const [openModalRegister, setOpenModalRegister] = useState(false);

  const [faqItems, setFaqItems] = useState([
      { question: "Qu'est-ce que le SEO ?", 
        answer: "Le SEO (Search Engine Optimization) est l'ensemble des techniques visant à améliorer la visibilité d'un site web dans les résultats des moteurs de recherche.", 
        isOpen: false 
      },
      { question: "Combien de temps faut-il pour voir des résultats SEO ?", 
        answer: "Les résultats SEO peuvent varier en fonction de nombreux facteurs, mais généralement, il faut compter entre 3 et 6 mois pour observer des améliorations significatives.", 
        isOpen: false 
      },
      { question: "Proposez-vous des audits SEO gratuits ?", 
        answer: "Oui, nous proposons un audit SEO initial gratuit pour évaluer les besoins de votre site web.", 
        isOpen: false 
      },
      { question: "Quels sont vos tarifs pour les services SEO ?", 
        answer: "Nos tarifs dépendent de la complexité du projet et des services requis. Contactez-nous pour obtenir un devis personnalisé.", 
        isOpen: false 
      },
      { question: "Quelle est la différence entre SEO et SEM ?", 
        answer: "Le SEO concerne l'optimisation organique des moteurs de recherche, tandis que le SEM (Search Engine Marketing) inclut la publicité payante comme Google Ads.", 
        isOpen: false 
      },
      { question: "Comment fonctionne l'algorithme de Google ?", 
        answer: "Google utilise des algorithmes complexes qui prennent en compte des centaines de facteurs pour classer les pages web. Ces facteurs incluent la pertinence, l'autorité, et l'expérience utilisateur.", 
        isOpen: false 
      },
      { question: "Qu'est-ce que le keyword research ?", 
        answer: "Le keyword research consiste à identifier les mots-clés que les utilisateurs saisissent dans les moteurs de recherche afin de les cibler dans votre contenu.", 
        isOpen: false 
      },
      { question: "Comment optimiser un site web pour le SEO ?", 
        answer: "L'optimisation SEO implique plusieurs étapes, y compris l'optimisation on-page (comme les balises titres, les méta-descriptions et le contenu) et l'optimisation off-page (comme la construction de backlinks).", 
        isOpen: false 
      },
      { question: "Qu'est-ce que le backlinking ?", 
        answer: "Le backlinking est le processus par lequel d'autres sites renvoient vers le vôtre. Cela peut améliorer l'autorité et le classement de votre site.", 
        isOpen: false 
      },
      { question: "Quelle est l'importance du contenu de qualité ?", 
        answer: "Un contenu de qualité est essentiel pour le SEO car il attire et retient les visiteurs, augmente le temps passé sur le site, et encourage le partage sur les réseaux sociaux.", 
        isOpen: false 
      },
      { question: "Comment les médias sociaux affectent-ils le SEO ?", 
        answer: "Bien que les signaux sociaux ne soient pas un facteur de classement direct, une forte présence sur les médias sociaux peut générer plus de trafic vers votre site et augmenter votre visibilité.", 
        isOpen: false 
      },
      { question: "Qu'est-ce que le SEO local ?", 
        answer: "Le SEO local est l'optimisation de votre site web pour attirer des clients locaux en ligne, souvent en utilisant des mots-clés spécifiques à une région.", 
        isOpen: false 
      },
      { question: "Comment mesurer l'efficacité de ma stratégie SEO ?", 
        answer: "Utilisez des outils d'analyse comme Google Analytics pour suivre le trafic, les conversions, et le comportement des utilisateurs sur votre site.", 
        isOpen: false 
      },
      { question: "Qu'est-ce qu'une balise titre ?", 
        answer: "La balise titre est un élément HTML qui spécifie le titre d'une page web, apparaissant dans les résultats des moteurs de recherche et dans l'onglet du navigateur.", 
        isOpen: false 
      },
      { question: "Qu'est-ce qu'une méta-description ?", 
        answer: "La méta-description est un résumé court du contenu d'une page qui apparaît dans les résultats des moteurs de recherche sous le titre.", 
        isOpen: false 
      },
      { question: "Que sont les balises H1, H2, H3, etc. ?", 
        answer: "Ces balises HTML sont utilisées pour structurer le contenu d'une page. H1 est généralement utilisé pour le titre principal, tandis que H2 et H3 sont utilisés pour les sous-titres.", 
        isOpen: false 
      },
      { question: "Comment fonctionne le SEO mobile ?", 
        answer: "Le SEO mobile implique l'optimisation de votre site pour une meilleure expérience utilisateur sur les appareils mobiles, ce qui est essentiel car Google privilégie les sites responsives.", 
        isOpen: false 
      },
      { question: "Qu'est-ce qu'un sitemap ?", 
        answer: "Un sitemap est un fichier qui liste toutes les pages d'un site web, facilitant le travail des moteurs de recherche pour explorer votre site.", 
        isOpen: false 
      },
      { question: "Quelle est l'importance de la vitesse du site ?", 
        answer: "La vitesse de chargement des pages est un facteur de classement dans le SEO. Un site lent peut entraîner un taux de rebond élevé et affecter l'expérience utilisateur.", 
        isOpen: false 
      },
      { question: "Que sont les rich snippets ?", 
        answer: "Les rich snippets sont des résultats de recherche améliorés qui affichent des informations supplémentaires (comme des avis) et peuvent améliorer le CTR (taux de clics).", 
        isOpen: false 
      },
      { question: "Comment fonctionne l'analyse des concurrents en SEO ?", 
        answer: "L'analyse des concurrents implique d'examiner les stratégies SEO de vos concurrents pour identifier des opportunités d'amélioration pour votre propre site.", 
        isOpen: false 
      },
      { question: "Qu'est-ce que le contenu dupliqué ?", 
        answer: "Le contenu dupliqué est un contenu identique ou très similaire à celui d'une autre page, ce qui peut nuire à votre classement SEO.", 
        isOpen: false 
      },
      { question: "Qu'est-ce qu'un outil de suivi de positionnement ?", 
        answer: "Un outil de suivi de positionnement vous permet de surveiller le classement de votre site pour des mots-clés spécifiques dans les moteurs de recherche.", 
        isOpen: false 
      },
      { question: "Comment le HTTPS affecte-t-il le SEO ?", 
        answer: "Le HTTPS est un facteur de classement important. Les sites sécurisés peuvent bénéficier d'un meilleur classement dans les résultats de recherche.", 
        isOpen: false 
      },
      { question: "Qu'est-ce que le content marketing ?", 
        answer: "Le content marketing est une stratégie qui consiste à créer et distribuer du contenu pertinent pour attirer et engager un public spécifique, souvent liée au SEO.", 
        isOpen: false 
      },
      { question: "Comment puis-je obtenir des backlinks ?", 
        answer: "Vous pouvez obtenir des backlinks en créant du contenu de qualité, en collaborant avec d'autres sites, et en soumettant votre site à des annuaires pertinents.", 
        isOpen: false 
      },
      { question: "Quels outils de SEO recommandez-vous ?", 
        answer: "Des outils comme Google Analytics, Ahrefs, SEMrush, et Moz sont très recommandés pour l'analyse et l'optimisation SEO.", 
        isOpen: false 
      },
      { question: "Comment le SEO change-t-il au fil du temps ?", 
        answer: "Le SEO évolue constamment en raison des mises à jour des algorithmes des moteurs de recherche et des changements dans le comportement des utilisateurs.", 
        isOpen: false 
      },
    ]);

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };

  const services = [
    {
      icon: <Target size={32} />,
      title: 'Optimisation On-Page',
      description: 'Optimisation technique complète de votre site pour les moteurs de recherche.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Stratégie de Contenu',
      description: 'Création de contenu optimisé et stratégie de mots-clés ciblée.'
    },
    {
      icon: <Share2 size={32} />,
      title: 'Backlinks & Autorité',
      description: 'Développement de votre autorité en ligne et acquisition de backlinks qualitatifs.'
    }
  ];

  const stats = [
    {
      value: '250%',
      label: 'Augmentation du Trafic Organique'
    },
    {
      value: 'Top 3',
      label: 'Positions Google'
    },
    {
      value: '85%',
      label: 'Taux de Conversion'
    },
    {
      value: '24/7',
      label: 'Suivi en Temps Réel'
    }
  ];

  const contracts = [
    {
      icon: <FileSearch size={20} />,
      title: "Audit SEO Technique",
      description: "Analyse complète et optimisation technique du site",
      difficulty: "Intermédiaire",
      skills: ["Lighthouse", "Core Web Vitals", "Schema.org", "GTmetrix"],
      rate: "350€",
      duration: "2-3 semaines"
    },
    {
      icon: <Globe size={20} />,
      title: "Optimisation On-Page",
      description: "Optimisation du contenu et de la structure du site",
      difficulty: "Débutant",
      skills: ["Content SEO", "Meta Tags", "Internal Linking", "Keywords"],
      rate: "250€",
      duration: "1-2 semaines"
    },
    {
      icon: <LineChart size={20} />,
      title: "Stratégie de Mots-clés",
      description: "Recherche et analyse des mots-clés pertinents",
      difficulty: "Débutant",
      skills: ["Keyword Research", "Google Trends", "SEMrush", "Ahrefs"],
      rate: "200€",
      duration: "1 semaine"
    },
    {
      icon: <Share2 size={20} />,
      title: "Link Building",
      description: "Acquisition de backlinks de qualité",
      difficulty: "Intermédiaire",
      skills: ["Outreach", "Guest Posting", "Broken Link Building", "PR"],
      rate: "300€",
      duration: "2-4 semaines"
    },
    {
      icon: <TrendingUp size={20} />,
      title: "SEO Local",
      description: "Optimisation pour la visibilité locale",
      difficulty: "Débutant",
      skills: ["Google My Business", "Local Citations", "Local Keywords"],
      rate: "225€",
      duration: "1-2 semaines"
    },
    {
      icon: <BarChart2 size={20} />,
      title: "Suivi et Reporting SEO",
      description: "Analyse des performances et rapports détaillés",
      difficulty: "Intermédiaire",
      skills: ["Google Analytics", "Search Console", "Data Studio"],
      rate: "275€",
      duration: "Mensuel"
    },
    {
      icon: <UserCheck size={20} />,
      title: "Optimisation UX",
      description: "Amélioration de l'expérience utilisateur sur le site",
      difficulty: "Intermédiaire",
      skills: ["User Testing", "A/B Testing", "Heatmaps"],
      rate: "300€",
      duration: "2-3 semaines"
    },
    {
      icon: <Share2 size={20} />,
      title: "SEO pour E-commerce",
      description: "Optimisation SEO spécifique pour les sites de vente en ligne",
      difficulty: "Avancé",
      skills: ["Product SEO", "Category Optimization", "Schema Markup"],
      rate: "400€",
      duration: "3-4 semaines"
    },
    {
      icon: <FileText size={20} />,
      title: "Rédaction de Contenu SEO",
      description: "Création de contenu optimisé pour le SEO",
      difficulty: "Débutant",
      skills: ["Content Writing", "SEO Best Practices", "Audience Analysis"],
      rate: "150€",
      duration: "1-2 semaines"
    },
    {
      icon: <Eye size={20} />,
      title: "Analyse de la Concurrence",
      description: "Étude des stratégies SEO des concurrents",
      difficulty: "Intermédiaire",
      skills: ["Competitor Analysis", "Market Research", "SWOT Analysis"],
      rate: "250€",
      duration: "2 semaines"
    },
    {
      icon: <Wifi size={20} />,
      title: "Optimisation Mobile",
      description: "Amélioration de l'expérience mobile et du chargement",
      difficulty: "Intermédiaire",
      skills: ["Mobile SEO", "Responsive Design", "Page Speed"],
      rate: "275€",
      duration: "2-3 semaines"
    },
    {
      icon: <UserPlus size={20} />,
      title: "Stratégie de Contenu",
      description: "Planification et développement d'une stratégie de contenu",
      difficulty: "Avancé",
      skills: ["Content Strategy", "Editorial Calendar", "SEO Goals"],
      rate: "350€",
      duration: "3-4 semaines"
    },
    {
      icon: <Cast size={20} />,
      title: "SEO Vidéo",
      description: "Optimisation de contenu vidéo pour les moteurs de recherche",
      difficulty: "Intermédiaire",
      skills: ["Video SEO", "YouTube Optimization", "Thumbnails"],
      rate: "200€",
      duration: "2-3 semaines"
    },
    {
      icon: <PenTool size={20} />,
      title: "Community Management",
      description: "Gestion des réseaux sociaux pour améliorer le SEO",
      difficulty: "Débutant",
      skills: ["Social Media", "Engagement Strategies", "Content Sharing"],
      rate: "180€",
      duration: "Mensuel"
    },
    {
      icon: <Folder size={20} />,
      title: "Gestion de Réputation",
      description: "Stratégies pour gérer la réputation en ligne",
      difficulty: "Avancé",
      skills: ["Brand Monitoring", "Crisis Management", "Online Reviews"],
      rate: "300€",
      duration: "Mensuel"
    },
    {
      icon: <Users size={20} />,
      title: "Collaborations et Partenariats",
      description: "Stratégies de partenariat pour le SEO",
      difficulty: "Avancé",
      skills: ["Networking", "Influencer Collaborations", "Joint Ventures"],
      rate: "350€",
      duration: "3-4 semaines"
    },
    {
      icon: <Lock size={20} />,
      title: "SEO Sécurisé (HTTPS)",
      description: "Optimisation de la sécurité de votre site pour le SEO",
      difficulty: "Intermédiaire",
      skills: ["SSL", "Website Security", "Trust Signals"],
      rate: "200€",
      duration: "1 semaine"
    },
    {
      icon: <Target size={20} />,
      title: "Stratégie de Trafic Payant",
      description: "Gestion de campagnes PPC complémentaires au SEO",
      difficulty: "Avancé",
      skills: ["PPC", "Google Ads", "Social Media Ads"],
      rate: "400€",
      duration: "Mensuel"
    },
    {
      icon: <FileText size={20} />,
      title: "Optimisation de Landing Pages",
      description: "Optimisation des pages d'atterrissage pour le SEO",
      difficulty: "Intermédiaire",
      skills: ["Conversion Rate Optimization", "A/B testing", "Call to Action"],
      rate: "250€",
      duration: "1-2 semaines"
    },
    {
      icon: <PhoneCall size={20} />,
      title: "SEO pour Applications Mobiles",
      description: "Optimisation SEO spécifique pour les applications mobiles",
      difficulty: "Avancé",
      skills: ["App Store Optimization", "Keyword Targeting", "User Engagement"],
      rate: "300€",
      duration: "3-4 semaines"
    },
    {
      icon: <CloudUpload size={20} />,
      title: "Migration SEO",
      description: "Gestion SEO lors de la migration d'un site",
      difficulty: "Avancé",
      skills: ["URL Redirection", "Content Migration", "SEO Preservation"],
      rate: "500€",
      duration: "3-4 semaines"
    },
    {
      icon: <Image size={20} />,
      title: "Optimisation des Images",
      description: "Optimisation des images pour le SEO",
      difficulty: "Débutant",
      skills: ["Image Compression", "Alt Text", "Responsive Images"],
      rate: "150€",
      duration: "1 semaine"
    },
    {
      icon: <Award size={20} />,
      title: "Formation SEO",
      description: "Sessions de formation sur les principes du SEO",
      difficulty: "Débutant",
      skills: ["SEO Basics", "Keyword Strategy", "Tools Overview"],
      rate: "300€",
      duration: "2 jours"
    },
    {
      icon: <Share size={20} />,
      title: "Publicité Native",
      description: "Intégration de contenu SEO dans des publicités natives",
      difficulty: "Intermédiaire",
      skills: ["Native Ads", "Content Marketing", "SEO Integration"],
      rate: "400€",
      duration: "3-4 semaines"
    },
    {
      icon: <Globe size={20} />,
      title: "SEO Multilingue",
      description: "Optimisation SEO pour les sites multilingues",
      difficulty: "Avancé",
      skills: ["hreflang Tags", "Localization", "Cultural Relevance"],
      rate: "500€",
      duration: "3-4 semaines"
    },
    {
      icon: <Calendar size={20} />,
      title: "Planification SEO",
      description: "Établissement d'un calendrier SEO pour le contenu",
      difficulty: "Intermédiaire",
      skills: ["Editorial Calendar", "Content Management", "SEO Goals"],
      rate: "200€",
      duration: "2 semaines"
    },
    {
      icon: <FileText size={20} />,
      title: "Création de Blog",
      description: "Mise en place et optimisation d'un blog pour le SEO",
      difficulty: "Intermédiaire",
      skills: ["Blog Setup", "Content Strategy", "SEO Practices"],
      rate: "250€",
      duration: "2-3 semaines"
    }
  ];

  const handelSearchContratsBySkill = (skill) => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/contrats/skill/${skill}`;
  };

  const handelContactsSEO = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/contrats/category/SEO`;
  };

  const toggleFAQ = (index) => {
    setFaqItems(
      faqItems.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false
      }))
    );
  };

  return (
    <>
     <Helmet>
        <title>Trouvez votre Expert freelance SEO</title>
        <meta
            name="description"
            content="Découvrez nos consultants freelance SEO  pour améliorer votre visibilité en ligne. Services d'audit SEO, stratégie de contenu, netlinking et optimisation. Contactez le meilleur freelance SEO qui correspond à vos besoins !"
        />
        <meta
            name="keywords"
            content="freelance SEO, consultant seo freelance, freelance seo consultant, consultant freelance seo, freelance seo, freelance seo expert, seo freelance, tarif seo freelance, expert seo freelance, rédacteur seo freelance, best seo freelancer, consultante seo freelance, freelance en seo, seo freelancer, consultante freelance seo"
        />
          <link rel="canonical" href="https://itgalaxy.io/freelance-seo" />
          <meta property="og:title" content="Trouvez votre Expert Freelance SEO" />
          <meta property="og:description" content="Trouvez des freelances seo qualifiés et des agences expertes en SEO pour la création et la gestion de vos solutions e-commerce." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://itgalaxy.io/freelance-seo" />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:site_name" content="ItGalaxy.io" />
          <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-seo" />
          <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-seo" />
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Consultant SEO",
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
                    "name": "Services SEO",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Optimisation On-Page",
                                "description": "Optimisation technique complète de votre site pour les moteurs de recherche."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Stratégie de Contenu",
                                "description": "Création de contenu optimisé et stratégie de mots-clés ciblée."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Backlinks & Autorité",
                                "description": "Développement de votre autorité en ligne et acquisition de backlinks qualitatifs."
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
            <Logo>
              <Search />
            </Logo>
            <HeroTitle>Trouvez votre Expert freelance SEO pour Booster Votre Visibilité en Ligne</HeroTitle>
            <HeroSubtitle>
              Trouvez les meilleurs consultants SEO freelance pour améliorer votre référencement naturel et atteindre vos objectifs de croissance.
            </HeroSubtitle>
            <StyledButton  onClick={() => window.location.href = `${process.env.REACT_APP_FRONTED_URL}/svc/app-as-service`} >
              Audit SEO Gratuit
              <ChevronRight size={20} />
            </StyledButton>
          </HeroContent>
        </HeroSection>
        <Section>
          <SectionContent>
            <SectionTitle>
              <BarChart2 />
              Nos Services d'Optimisation SEO
            </SectionTitle>
            <SectionSubtitle>
              Solutions complètes pour améliorer votre positionnement sur Google et autres moteurs de recherche.
            </SectionSubtitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Résultats SEO Mesurables
            </SectionTitle>
            <SectionSubtitle>
              Suivez l'impact de nos stratégies SEO sur votre trafic, votre positionnement et votre retour sur investissement.
            </SectionSubtitle>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard key={index}>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </SectionContent>
        </Section>

        <ContractsSection>
          <SectionContent>
            <SectionTitle>
              <Search />
              Projets partagés pour Freelance SEO
            </SectionTitle>
            <SectionSubtitle>
              Découvrez nos missions SEO et boostez la visibilité de vos clients
            </SectionSubtitle>
            <ContractsGrid>
              {contracts.map((contract, index) => (
                <ContractCard key={index} onClick={handleModalRegister}>
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
                      <SkillTag key={skillIndex}>{skill}</SkillTag>
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

        <WhyChooseUsSection>
          <SectionContent>
            <SectionTitle>
              <Rocket />
              Pourquoi Choisir ItGalaxy pour Votre SEO ?
            </SectionTitle>
            <SectionSubtitle>
              Des experts SEO freelance, des résultats concrets, une approche personnalisée.
            </SectionSubtitle>
            <WhyChooseUsGrid>
              <WhyChooseUsCard>
                <WhyChooseUsIcon><Target /></WhyChooseUsIcon >
                <WhyChooseUsTitle>Stratégies Sur Mesure</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Nous adaptons nos stratégies SEO à vos besoins spécifiques et à votre secteur d'activité.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
              <WhyChooseUsCard>
                <WhyChooseUsIcon><TrendingUp /></WhyChooseUsIcon >
                <WhyChooseUsTitle>Résultats Prouvés</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Nos études de cas démontrent notre capacité à générer du trafic qualifié et à améliorer le positionnement.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
              <WhyChooseUsCard>
                <WhyChooseUsIcon><Users /></WhyChooseUsIcon >
                <WhyChooseUsTitle>Experts Qualifiés</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Nous sélectionnons rigoureusement les meilleurs consultants SEO freelance.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
              <WhyChooseUsCard>
                <WhyChooseUsIcon><Clock /></WhyChooseUsIcon >
                <WhyChooseUsTitle>Suivi Transparent</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Nous vous fournissons des rapports réguliers et détaillés sur les performances de votre SEO.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
            </WhyChooseUsGrid>
          </SectionContent>
        </WhyChooseUsSection>

        <ProcessSection>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Notre Processus SEO
            </SectionTitle>
            <SectionSubtitle>
              Une approche méthodique pour des résultats durables.
            </SectionSubtitle>
            <ProcessSteps>
              <ProcessStep>
                <ProcessStepNumber>1</ProcessStepNumber>
                <ProcessStepTitle>Audit SEO Initial</ProcessStepTitle>
                <ProcessStepDescription>
                  Analyse complète de votre site web, de vos concurrents et de votre marché.
                </ProcessStepDescription>
              </ProcessStep>
              <ProcessStep>
                <ProcessStepNumber>2</ProcessStepNumber>
                <ProcessStepTitle>Définition de la Stratégie</ProcessStepTitle>
                <ProcessStepDescription>
                  Élaboration d'une stratégie SEO personnalisée en fonction de vos objectifs.
                </ProcessStepDescription>
              </ProcessStep>
              <ProcessStep>
                <ProcessStepNumber>3</ProcessStepNumber>
                <ProcessStepTitle>Mise en Œuvre</ProcessStepTitle>
                <ProcessStepDescription>
                  Optimisation technique, création de contenu, netlinking, et autres actions SEO.
                </ProcessStepDescription>
              </ProcessStep>
              <ProcessStep>
                <ProcessStepNumber>4</ProcessStepNumber>
                <ProcessStepTitle>Suivi et Reporting</ProcessStepTitle>
                <ProcessStepDescription>
                  Suivi régulier des performances et ajustements de la stratégie si nécessaire.
                </ProcessStepDescription>
              </ProcessStep>
            </ProcessSteps>
          </SectionContent>
        </ProcessSection>

        <BeforeAfterSection>
          <SectionContent>
            <SectionTitle>
              <Maximize2 />
              Avant & Après Optimisation SEO
            </SectionTitle>
            <SectionSubtitle>
              Découvrez la transformation de votre présence en ligne grâce à notre expertise SEO
            </SectionSubtitle>
            <BeforeAfterContainer>
              <BeforeAfterCard>
                <BeforeAfterHeader>
                  <BeforeAfterIcon>
                    <ChevronDown size={24} />
                  </BeforeAfterIcon>
                  <BeforeAfterTitle>Avant Optimisation</BeforeAfterTitle>
                </BeforeAfterHeader>
                <BeforeAfterList>
                  <BeforeAfterItem>Positionnement bas dans les résultats de recherche (page 3+)</BeforeAfterItem>
                  <BeforeAfterItem>Trafic organique limité (moins de 1000 visites/mois)</BeforeAfterItem>
                  <BeforeAfterItem>Structure du site non optimisée pour le SEO</BeforeAfterItem>
                  <BeforeAfterItem>Contenu non optimisé pour les mots-clés</BeforeAfterItem>
                  <BeforeAfterItem>Temps de chargement lent (5+ secondes)</BeforeAfterItem>
                  <BeforeAfterItem>Pas de stratégie de backlinks</BeforeAfterItem>
                  <BeforeAfterItem>Taux de rebond élevé (80%+)</BeforeAfterItem>
                  <BeforeAfterItem>Faible taux de conversion (moins de 1%)</BeforeAfterItem>
                </BeforeAfterList>
              </BeforeAfterCard>
              <BeforeAfterCard isAfter>
                <BeforeAfterHeader>
                  <BeforeAfterIcon isAfter>
                    <TrendingUp size={24} />
                  </BeforeAfterIcon>
                  <BeforeAfterTitle isAfter>Après Optimisation</BeforeAfterTitle>
                </BeforeAfterHeader>
                <BeforeAfterList>
                  <BeforeAfterItem isAfter>Top 3 des résultats de recherche</BeforeAfterItem>
                  <BeforeAfterItem isAfter>Trafic organique multiplié par 5</BeforeAfterItem>
                  <BeforeAfterItem isAfter>Architecture optimisée avec silos thématiques</BeforeAfterItem>
                  <BeforeAfterItem isAfter>Contenu enrichi et optimisé pour les intentions de recherche</BeforeAfterItem>
                  <BeforeAfterItem isAfter>Temps de chargement optimisé (moins de 2 secondes)</BeforeAfterItem>
                  <BeforeAfterItem isAfter>Backlinks de qualité provenant de sites d'autorité</BeforeAfterItem>
                  <BeforeAfterItem isAfter>Taux de rebond réduit à 30%</BeforeAfterItem>
                  <BeforeAfterItem isAfter>Taux de conversion amélioré (5%+)</BeforeAfterItem>
                </BeforeAfterList>
              </BeforeAfterCard>
            </BeforeAfterContainer>
          </SectionContent>
        </BeforeAfterSection>

        <CaseStudiesSection>
          <SectionContent>
            <SectionTitle>
              <TrendingUp />
              Études de Cas
            </SectionTitle>
            <SectionSubtitle>
              Exemples concrets de nos succès en optimisation SEO
            </SectionSubtitle>
            <CaseStudiesGrid>
              <CaseStudyCard>
                <CaseStudyTitle>E-commerce de Mode "StyleAvenue"</CaseStudyTitle>
                <CaseStudyDescription>
                  StyleAvenue, un e-commerçant de mode en pleine croissance, peinait à se positionner sur des mots-clés concurrentiels.  Nous avons mis en place une stratégie de contenu axée sur les tendances de la mode, optimisé les fiches produits avec des descriptions riches en mots-clés, et lancé une campagne de netlinking ciblant des blogs de mode influents.
                </CaseStudyDescription>
                <CaseStudyResults>
                  <ul>
                    <li>+250% de trafic organique en 4 mois</li>
                    <li>Top 3 pour "robe d'été", "chaussures tendance"</li>
                    <li>+40% de taux de conversion</li>
                  </ul>
                </CaseStudyResults>
              </CaseStudyCard>
              <CaseStudyCard>
                <CaseStudyTitle>Cabinet d'Avocats "LexJuris"</CaseStudyTitle>
                <CaseStudyDescription>
                  LexJuris, un cabinet d'avocats spécialisé en droit des affaires, souhaitait améliorer sa visibilité locale. Nous avons optimisé leur fiche Google My Business, créé du contenu optimisé pour des requêtes locales ("avocat droit des affaires Paris"), et mis en place une stratégie de citations locales.
                </CaseStudyDescription>
                <CaseStudyResults>
                  <ul>
                    <li>+180% de demandes de renseignements via Google Maps</li>
                    <li>Apparition dans le "Local Pack" pour les requêtes pertinentes</li>
                    <li>+30% d'appels téléphoniques</li>
                  </ul>
                </CaseStudyResults>
              </CaseStudyCard>
              <CaseStudyCard>
                <CaseStudyTitle>Blog de Voyage "VoyagesInfinis"</CaseStudyTitle>
                <CaseStudyDescription>
                  VoyagesInfinis avait un contenu de qualité mais manquait de visibilité. Nous avons effectué un audit technique complet, corrigé les erreurs d'indexation, optimisé la structure du site, et mis en place une stratégie de link building basée sur des partenariats avec d'autres blogs de voyage.
                </CaseStudyDescription>
                <CaseStudyResults>
                  <ul>
                    <li>+400% de trafic organique en 6 mois</li>
                    <li>Réduction du taux de rebond de 20%</li>
                    <li>+50% de temps passé sur le site</li>
                  </ul>
                </CaseStudyResults>
              </CaseStudyCard>
            </CaseStudiesGrid>
          </SectionContent>
        </CaseStudiesSection>

        <FAQSection>
          <SectionContent>
            <SectionTitle>
              <FileText />
              Foire Aux Questions (FAQ)
            </SectionTitle>
            <SectionSubtitle>
              Réponses aux questions fréquentes sur nos services SEO
            </SectionSubtitle>
            <FAQGrid>
              {faqItems.map((faq, index) => (
                <FAQItem key={index} onClick={() => toggleFAQ(index)}>
                  <FAQQuestion>
                    {faq.question}
                    <ChevronDown size={20} style={{ transform: faq.isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                  </FAQQuestion>
                  <FAQAnswer isOpen={faq.isOpen}>{faq.answer}</FAQAnswer>
                </FAQItem>
              ))}
            </FAQGrid>
          </SectionContent>
        </FAQSection>
        <Offers />
      </MainContainer>
      <FooterHome page={'seo'} />
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

export default Seo;