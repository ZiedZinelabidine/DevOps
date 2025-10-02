import React, { useState } from 'react';
import { Server, Code, Database,  Shield, Zap, MinusCircle, PlusCircle,  HelpCircle, Network, GitBranch, Terminal, Lock, Activity, Workflow, Cloud, Settings, Layers, RefreshCw, Boxes, Cpu as CpuIcon, Radio, Webhook, Fingerprint, Key, Gauge, Binary, ChevronDown } from 'lucide-react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import FooterHome from '../FooterHome/FooterHome';
import Offers from './Offres';
import { Helmet } from 'react-helmet';
import CardsPrestataires from './CardsPrestataires';
import ItGalaxyAsService from '../ItGalaxyAsService/ItGalaxyAsService';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0F172A;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const glitch = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(99, 102, 241, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
  }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #0F172A;
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
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.15) 0%, transparent 50%);
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
    background: linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.1));
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
  background: linear-gradient(-45deg, #4F46E5, #6366F1, #4338CA);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${pulse} 2s infinite;

  svg {
    width: 80px;
    height: 80px;
    color: #ffffff;
    animation: ${glitch} 2s infinite;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(-45deg, #4F46E5, #6366F1, #4338CA);
    border-radius: 18px;
    z-index: -1;
    opacity: 0.5;
    filter: blur(8px);
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #6366F1;
    opacity: 0.8;
    animation: ${glitch} 5s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94A3B8;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #4F46E5, #6366F1);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
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
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  position: relative;
  background: #1E293B;

  &:nth-child(odd) {
    background: #0F172A;
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
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #6366F1;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94A3B8;
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
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.2);
    border-color: #6366F1;
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
      rgba(99, 102, 241, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #4F46E5, #6366F1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: inherit;
    border-radius: 14px;
    z-index: -1;
    opacity: 0.4;
    filter: blur(8px);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
    border-color: #6366F1;
  }
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #6366F1;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
`;

const StatLabel = styled.div`
  color: #94A3B8;
  font-size: 1.125rem;
`;

const MissionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const MissionCard = styled.div`
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
    border-color: #6366F1;
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
      rgba(99, 102, 241, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const MissionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MissionIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4F46E5, #6366F1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const MissionDifficulty = styled.span`
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
        return 'rgba(99, 102, 241, 0.2)';
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
        return '#6366F1';
    }
  }};
`;

const MissionTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0.5rem 0;
`;

const MissionDescription = styled.p`
  color: #94A3B8;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const MoreMissionsButton = styled(Button)`
  margin: 3rem auto 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid #6366F1;
  
  &:hover {
    background: linear-gradient(135deg, #4F46E5, #6366F1);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;
const FAQSection = styled(Section)`
  background: #0A1A1F;
`;

const FAQContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    border-color: #06B6D4;
  }
`;

const FAQHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: rgba(6, 182, 212, 0.05);
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: left;
  transition: all 0.3s;

  &:hover {
    background: rgba(6, 182, 212, 0.1);
  }

  svg {
    color: #06B6D4;
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
  color: #94A3B8;
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


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const faqs = [
  {
      question: "Quelle plateforme choisir pour héberger mon site web ?",
      answer: "Le choix de la plateforme dépend de vos besoins. Des services comme Vercel et Netlify sont excellents pour les sites statiques, tandis que AWS et DigitalOcean sont adaptés pour des applications plus complexes nécessitant un hébergement backend."
  },
  {
      question: "Comment garantir la sécurité de mon site web ?",
      answer: "Implémentez SSL pour chiffrer les données en transit, utilisez des pare-feu pour protéger votre serveur, vérifiez régulièrement les mises à jour de système et de dépendances, et utilisez des outils comme OWASP ZAP pour tester la sécurité."
  },
  {
      question: "Quelles sont les meilleures pratiques pour la documentation de mon projet web ?",
      answer: "Utilisez des outils comme Markdown pour écrire une documentation claire, y compris des instructions d'installation, des exemples de configuration et des guides d'utilisation. GitHub Pages peut être une option pour héberger votre documentation."
  },
  {
      question: "Comment gérer les mises à jour et la compatibilité de mon site web ?",
      answer: "Utilisez un gestionnaire de version comme Git pour suivre les modifications. Pour la rétrocompatibilité, évitez de supprimer des fonctionnalités existantes et documentez bien tout changement dans une version spécifique."
  },
  {
      question: "Quelle est votre approche pour le développement mobile responsif ?",
      answer: "Adoptez une approche mobile-first en utilisant des méthodes comme Flexbox et CSS Grid. Testez votre site sur différents appareils et résolutions pour garantir une bonne expérience utilisateur."
  },
  {
      question: "Comment gérer les tests et le déploiement continu de mon site web ?",
      answer: "Mettez en place des tests unitaires avec Jest ou Mocha, des tests d'intégration avec Cypress, et utilisez des outils CI/CD comme GitHub Actions pour automatiser le déploiement vers votre hébergement."
  },
  {
      question: "Comment optimiser la vitesse de chargement de mon site web ?",
      answer: "Utilisez des techniques de mise en cache, compressez les images, minifiez le CSS et JavaScript, et intégrez un CDN pour servir le contenu statique rapidement."
  },
  {
      question: "Quelle place donnez-vous aux tests de sécurité dans le développement web ?",
      answer: "Les tests de sécurité sont essentiels. Intégrez des tests réguliers dans votre flux de travail pour détecter des failles comme les injections XSS, CSRF, et vérifiez les autorisations d'accès."
  },
  {
      question: "Est-ce que le développement mobile nécessite plus de temps que le développement web traditionnel ?",
      answer: "Cela dépend de la complexité de l'application mobile. Souvent, le développement mobile peut nécessiter plus de temps en raison des spécificités liées aux différents systèmes d'exploitation et des tests nécessaires."
  },
  {
      question: "Comment gérer l'authentification sur mon site web ?",
      answer: "Utilisez des solutions d'authentification comme OAuth ou JWT. Implémentez des sessions sécurisées pour vérifier l'identité des utilisateurs lors de leur connexion."
  },
  {
      question: "Quel est l'impact des appels API sur la performance de mon site web ?",
      answer: "Chaque appel API peut créer du retard, surtout s'il y en a plusieurs dans une seule page. Minimisez les appels avec des mises en cache et des lots de données pour réduire ce problème."
  },
  {
      question: "Quelles sont les meilleures pratiques pour le design d'une application web ?",
      answer: "Adoptez des normes de design cohérentes, garantissez que l'application est accessible, et documentez des styles d'interface utilisateur pour faciliter la maintenance."
  },
  {
      question: "Utiliser des WebSockets est-il judicieux pour une application web ?",
      answer: "Les WebSockets sont utiles pour des applications nécessitant des mises à jour en temps réel, comme le chat ou les notifications, tout en utilisant une API REST pour d'autres fonctionnalités."
  },
  {
    question: "Qu'est-ce que le rate limiting et pourquoi est-ce important pour un site web ?",
    answer: "Le rate limiting limite le nombre de requêtes qu'un utilisateur peut faire à votre application dans un certain délai. Cela aide à prévenir les abus, à gérer la charge du serveur et à garantir que les ressources sont disponibles pour tous les utilisateurs."
  },
  {
      question: "Comment assurer la compatibilité entre différentes versions de mon application web ?",
      answer: "Utilisez une stratégie de versioning claire et documentez les changements. Testez également votre application avec les anciennes versions pour garantir la rétrocompatibilité."
  },
  {
    question: "Comment intégrer des API tierces dans mon application ?",
    answer: "Pour intégrer des API tierces, commencez par étudier leur documentation pour comprendre leurs fonctionnalités. Utilisez des bibliothèques comme Axios ou Fetch pour effectuer des requêtes et gérer les réponses, tout en implémentant une gestion des erreurs robuste."
},
{
    question: "Comment suivre les performances de mon site web ?",
    answer: "Utilisez des outils comme Google Analytics pour le suivi du trafic et de l'engagement des utilisateurs. Des outils de performance comme Lighthouse ou GTmetrix peuvent également vous aider à analyser la rapidité et l'efficacité de votre site."
},
{
    question: "Quelle est la méthode pour gérer les données sensibles dans mon application ?",
    answer: "Assurez-vous de chiffrer toutes les données sensibles, tant au repos qu'en transit. Utilisez HTTPS pour le transport des données et stockez les données sensibles, comme les mots de passe, de manière sécurisée avec un algorithme de hachage solide."
},
{
    question: "Quels outils recommandez-vous pour tester une application web ?",
    answer: "Utilisez Postman pour les tests manuels d'API et des frameworks comme Jest ou Cypress pour les tests automatisés, qui vous permettent de garantir que votre application fonctionne comme prévu."
},
{
    question: "Comment prioriser la mise en cache dans une application web ?",
    answer: "Utilisez des en-têtes de cache pour contrôler la durée de vie de vos réponses. Choisissez soigneusement les données à mettre en cache, en privilégiant les informations fréquemment demandées, comme les pages statiques ou les listes."
},
{
    question: "Comment assurer une bonne gestion des ressources de mon application ?",
    answer: "Implémentez un monitoring efficace pour suivre l'utilisation des ressources et utilisez des outils de profiling pour identifier les goulets d'étranglement. Optimisez le code et réduisez le nombre d'appels API pour assurer que chaque action est nécessaire."
},
{
    question: "Quelles technologies modernes sont utilisées dans le développement d'applications web ?",
    answer: "Les technologies populaires incluent Node.js pour le backend, React ou Vue.js pour le frontend, GraphQL pour des requêtes efficaces, et Docker pour la containerisation et le déploiement."
},
{
    question: "Comment traiter les problèmes de latence dans mon application ?",
    answer: "Identifiez les requêtes lentes grâce à des outils de mesure, optimisez vos requêtes HTTP et SQL, et envisagez la mise en cache pour réduire les temps de réponse."
},
{
    question: "Pourquoi est-il important d'établir des contrats d'API pour mon application ?",
    answer: "Les contrats d'API clarifient les attentes autour des paramètres d'entrée, des types de sortie et des erreurs possibles, garantissant que vos intégrations avec d'autres systèmes se déroulent sans heurts."
},
{
    question: "Quelles sont les erreurs courantes à éviter lors du développement d'applications web ?",
    answer: "Les erreurs fréquentes incluent des en-têtes de réponse manquants, des données non validées, l'absence de documentation claire, et le non-respect de la rétrocompatibilité."
},
{
    question: "Que faire en cas de panne de mon application web ?",
    answer: "Mettez en place un système de monitoring pour être alerté rapidement. Analysez les logs pour identifier le problème et élaborez des plans de récupération pour rétablir le service, tout en informant les utilisateurs de l'interruption."
},
{
    question: "Comment gérer les appels API dans une application mobile ?",
    answer: "Utilisez des appels asynchrones pour éviter de bloquer l'interface utilisateur, gérez les caches locaux pour réduire le nombre d'appels et faites attention à gérer les erreurs de manière élégante."
},
{
    question: "Comment suivre les modifications dans mon application web ?",
    answer: "Mettez en place un système de gestion de version pour suivre les modifications, et documentez toutes les mises à jour pour que les développeurs et les utilisateurs soient informés des nouvelles fonctionnalités."
},
{
  question: "Comment aider d'autres développeurs à utiliser les APIs de mon application ?",
  answer: "Proposez des séances de formation, créez une documentation détaillée, et fournissez des environnements de test où ils peuvent expérimenter sans risque. Facilitez également les retours d'expérience et les questions via des forums ou des canaux de communication dédiés."
}
];


function SiteBackend() {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [openFAQs, setOpenFAQs] = useState({});

  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };
  

  const services = [
    {
      icon: <Database size={32} />,
      title: 'Architecture Microservices',
      description: 'Conception et implémentation d\'architectures scalables et résilientes.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Sécurité & Performance',
      description: 'Protection des données et optimisation des performances serveur.'
    },
    {
      icon: <GitBranch size={32} />,
      title: 'API RESTful',
      description: 'Développement d\'APIs modernes avec documentation complète.'
    }
  ];

  const stats = [
    {
      value: '99.9%',
      label: 'Uptime Serveur'
    },
    {
      value: '<100ms',
      label: 'Temps de Réponse'
    },
    {
      value: '10x',
      label: 'Gain de Performance'
    },
    {
      value: '24/7',
      label: 'Monitoring'
    }
  ];

  const missions = [
    {
        icon: <Terminal size={20} />,
        title: "API RESTful Express",
        description: "Créer une API RESTful avec Express.js, en intégrant des méthodes CRUD et une documentation Swagger complète pour faciliter l'utilisation.",
        difficulty: "Facile",
        keywords: ["mission freelance developpeur", "mission freelance informatique"],
        price: "600€"
    },
    {
        icon: <Database size={20} />,
        title: "MongoDB Aggregation",
        description: "Implémenter des pipelines d'agrégation complexes dans MongoDB pour traiter et analyser de grandes quantités de données efficacement.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance informatique", "mission freelance developpeur web"],
        price: "800€"
    },
    {
        icon: <Shield size={20} />,
        title: "Sécurité JWT",
        description: "Mettre en place l'authentification via JWT, incluant la gestion des refresh tokens pour une sécurité renforcée des sessions utilisateur.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance informatique", "freelance mission informatique"],
        price: "750€"
    },
    {
        icon: <Cloud size={20} />,
        title: "Serverless Functions",
        description: "Développer des fonctions serverless avec AWS Lambda, permettant un déploiement flexible et rentable des applications.",
        difficulty: "Avancé",
        keywords: ["mission freelance", "missions freelance informatique"],
        price: "1200€"
    },
    {
        icon: <Settings size={20} />,
        title: "CI/CD Pipeline",
        description: "Configurer un pipeline CI/CD avec GitHub Actions pour automatiser les tests et déploiements, améliorant ainsi l'efficacité du développement.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance en ligne", "trouver missions freelance"],
        price: "700€"
    },
    {
        icon: <Layers size={20} />,
        title: "Microservices",
        description: "Concevoir une architecture microservices avec communication asynchrone, permettant à votre application de mieux évoluer et s’adapter.",
        difficulty: "Avancé",
        keywords: ["trouver mission freelance", "mission freelance dev"],
        price: "1300€"
    },
    {
        icon: <RefreshCw size={20} />,
        title: "Cache Redis",
        description: "Implémenter un système de cache avec Redis pour améliorer la vitesse des requêtes et réduire la charge sur votre base de données.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance informatique", "mission full remote"],
        price: "800€"
    },
    {
        icon: <Boxes size={20} />,
        title: "Docker Compose",
        description: "Conteneuriser votre application en utilisant Docker Compose, facilitant le déploiement et la gestion d'environnements multiples.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance dev", "offre mission freelance"],
        price: "900€"
    },
    {
        icon: <CpuIcon size={20} />,
        title: "Worker Threads",
        description: "Optimiser les performances de votre application en utilisant des Worker Threads pour décharger des calculs intensifs du thread principal.",
        difficulty: "Avancé",
        keywords: ["mission freelance informatique", "mission freelance developers"],
        price: "1300€"
    },
    {
        icon: <Radio size={20} />,
        title: "WebSocket Real-time",
        description: "Développer une fonctionnalité de chat en temps réel avec WebSocket, permettant aux utilisateurs d'interagir instantanément.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance informatique", "missions freelance télétravail"],
        price: "850€"
    },
    {
        icon: <Webhook size={20} />,
        title: "Webhook System",
        description: "Créer un système de webhooks pour recevoir des notifications externes en temps réel, intégrant des services tiers dans votre application.",
        difficulty: "Intermédiaire",
        keywords: ["recherche mission freelance", "mission freelance developpeur"],
        price: "750€"
    },
    {
        icon: <Fingerprint size={20} />,
        title: "OAuth2 Integration",
        description: "Intégrer l'authentification OAuth2 avec plusieurs providers pour offrir une flexibilité à vos utilisateurs dans leur connexion.",
        difficulty: "Avancé",
        keywords: ["mission freelance informatique", "mission developpeur freelance"],
        price: "1200€"
    },
    {
      icon: <Gauge size={20} />,
      title: "Performance Monitoring",
      description: "Configurer le monitoring des performances avec Prometheus et Grafana pour assurer la stabilité et l'efficacité de votre application.",
      difficulty: "Avancé",
      keywords: ["offre mission freelance", "mission freelance informatique"],
      price: "1300€"
  },
  {
      icon: <Binary size={20} />,
      title: "GraphQL API",
      description: "Développer une API GraphQL avec Apollo Server, permettant aux clients de demander uniquement les données dont ils ont besoin.",
      difficulty: "Avancé",
      keywords: ["mission freelance web", "mission freelance dev"],
      price: "1100€"
  },
  {
      icon: <Database size={20} />,
      title: "Database Migration",
      description: "Concevoir et exécuter un système de migration de base de données pour une transition fluide vers une nouvelle infrastructure sans perte de données.",
      difficulty: "Intermédiaire",
      keywords: ["trouver mission freelance", "mission freelance informatique"],
      price: "800€"
  },
  {
      icon: <Shield size={20} />,
      title: "RBAC System",
      description: "Implémenter un système de contrôle d'accès basé sur les rôles (RBAC) pour gérer les permissions des utilisateurs de manière sécurisée.",
      difficulty: "Avancé",
      keywords: ["missions freelance informatique", "freelance mission courte"],
      price: "1200€"
  },
  {
      icon: <Network size={20} />,
      title: "Service Discovery",
      description: "Mettre en œuvre un service discovery avec Consul, facilitant la localisation et la connexion entre microservices.",
      difficulty: "Avancé",
      keywords: ["mission freelance dev", "mission en ligne freelance"],
      price: "1300€"
  },
  {
      icon: <Lock size={20} />,
      title: "Encryption System",
      description: "Créer un système de chiffrement des données sensibles pour assurer la confidentialité et la sécurité des informations utilisateurs.",
      difficulty: "Intermédiaire",
      keywords: ["mission freelance informatique", "mission freelance developer"],
      price: "750€"
  },
  {
    icon: <Zap size={20} />,
    title: "Mise en Place d'un Service Microservice",
    description: "Établissement d'un service microservice pour votre application, garantissant une scalabilité et une flexibilité améliorées.",
    difficulty: "Avancé",
    keywords: ["mission freelance dev", "mission freelance web"],
    price: "1300€"
}
];



  const displayedMissions =  missions ;

  return (
    <>
        <Helmet>
        <title>Trouver un Freelance Developpeur Web  & Agence web </title>
        <meta name="description" content="Découvrez les meilleures freelances  Developpeur Web , freelances backend, des experts en développement Java, PHP et Python, et trouver des missions freelance adaptées à vos besoins." />
        <link rel="canonical" href="https://itgalaxy.io/freelance-developpeur-web" />
        <meta property="og:title" content="Trouver un Freelance Developpeur Web  & Agence web" />
        <meta property="og:description" content="Découvrez les meilleures freelances  Developpeur Web , freelances backend, des experts en développement Java, PHP et Python, et trouver des missions freelance adaptées à vos besoins." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/freelance-developpeur-web" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-developpeur-web" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-developpeur-web" />
    </Helmet>


     <Header />
     <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <Logo>
              <Server />
            </Logo>
            <HeroTitle>Trouver un Freelance Developpeur Web  & Agence web  </HeroTitle>
            <HeroSubtitle>
            Besoin d'un freelance developpeur web  ou une agence de développement web pour divers projets
            </HeroSubtitle>
            <Button onClick={handleModalRegister}>
              Trouvez un Prestataires web
              <Terminal size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires skill={'PHP'}/>
        <ItGalaxyAsService />

        <Section>
          <SectionContent>
            <SectionTitle>
              <Workflow />
              Projets web partagés
            </SectionTitle>
            <SectionSubtitle>
              Relevez des défis techniques pour maîtriser le developpement web
            </SectionSubtitle>
            <MissionsGrid>
              {displayedMissions.map((mission, index) => (
                <MissionCard key={index}>
                  <MissionHeader>
                    <MissionIcon>{mission.icon}</MissionIcon>
                    <MissionDifficulty difficulty={mission.difficulty}>
                      {mission.difficulty}
                    </MissionDifficulty>
                  </MissionHeader>
                  <MissionTitle>{mission.title}</MissionTitle>
                  <MissionDescription>{mission.description}</MissionDescription>
                </MissionCard>
              ))}
            </MissionsGrid>
              <ButtonContainer>
                <MoreMissionsButton onClick={handleModalRegister}>
                  Voir plus de missions
                  <ChevronDown size={20} />
                </MoreMissionsButton>
              </ButtonContainer>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Code />
              Solutions Backend
            </SectionTitle>
            <SectionSubtitle>
              Technologies de pointe pour des applications robustes
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
              <Activity />
              Performances
            </SectionTitle>
            <SectionSubtitle>
              Des résultats mesurables pour votre infrastructure
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


              <FAQSection>
                  <SectionContent>
                    <SectionTitle>
                      <HelpCircle />
                      Questions Fréquemment Posées
                    </SectionTitle>
                    <SectionSubtitle>
                      Tout ce que vous devez savoir sur l'embauche d'experts en développement Web
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
      <FooterHome page={"backend"} />
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

export default SiteBackend;