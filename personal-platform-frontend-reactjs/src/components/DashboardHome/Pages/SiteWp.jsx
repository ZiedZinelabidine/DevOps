import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import { BookOpenText, Box, Briefcase, ChevronDown, ChevronRight, Clock, Globe, GraduationCap, Layout, Monitor, Settings, Shield, Smartphone, Zap } from 'lucide-react';
import { useState } from "react";
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import securiteWordpress from '../../../assets/wordpress/securite-wordpress.webp';
import seoWordpress from '../../../assets/wordpress/seo-wordpress.webp';
import woocommerceECommerce from '../../../assets/wordpress/woocommerce-e-commerce.webp';
import wordpressPourDebutants from '../../../assets/wordpress/wordpress-pour-debutants.webp';
import FooterHome from '../FooterHome/FooterHome';
import Offers from "./Offres";
import CardsPrestataires from "./CardsPrestataires";
import ItGalaxyAsService from "../ItGalaxyAsService/ItGalaxyAsService";



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f0fdf4;
    color: #166534;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #f0fdf4;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 10%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(21, 128, 61, 0.1) 0%, transparent 50%);
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
  background: linear-gradient(135deg, rgba(240, 253, 244, 0.9) 0%, rgba(187, 247, 208, 0.9) 100%);
`;

const HeroContent = styled.div`
  max-width: 64rem;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;
`;

const WordPressLogo = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  background: #166534;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(34, 197, 94, 0.3);

  svg {
    width: 60px;
    height: 60px;
    color: #fff;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #166534;
  text-shadow: 2px 2px 4px rgba(34, 197, 94, 0.2);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #15803d;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled.button`
  background: #166534;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  
  &:hover {
    background: #15803d;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  background: #fff;

  &:nth-child(even) {
    background: #f0fdf4;
  }
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
  color: #166534;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #22c55e;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #15803d;
  font-size: 1.125rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StepCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
  transition: all 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.2);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
const SeeMoreButton = styled(Button)`
  background: transparent;
  border: 2px solid #15803d;
  color: #15803d;
  
  &:hover {
    background: #f0fdf4;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;


const StepIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  background: #f0fdf4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #166534;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #15803d;
  line-height: 1.6;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const JobCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.2);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 0.5rem;
`;

const JobCompany = styled.p`
  color: #15803d;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #15803d;
  font-size: 0.875rem;
`;

const JobSalary = styled.div`
  background: #f0fdf4;
  color: #166534;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
`;

const JobDescription = styled.p`
  color: #15803d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const JobSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const JobSkill = styled.span`
  background: #f0fdf4;
  color: #15803d;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  border: 1px solid #bbf7d0;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
  transition: all 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.2);
  }
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  background: #f0fdf4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #166534;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #15803d;
  font-size: 0.875rem;
  line-height: 1.6;
`;

const StatisticsSection = styled(Section)`
  background: linear-gradient(135deg, #166534 0%, #15803d 100%);
  color: white;
`;

const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #bbf7d0;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #f0fdf4;
  font-size: 0.875rem;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CourseCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.2);
  }
`;

const CourseImage = styled.div`
  height: 200px;
  background: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CourseContent = styled.div`
  padding: 1.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 0.5rem;
`;

const CourseDescription = styled.p`
  color: #15803d;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #15803d;
  font-size: 0.875rem;
`;

const PricingSection = styled(Section)`
  background: #f0fdf4;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PricingCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
  transition: all 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.2);
  }
`;

const PricingTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 1rem;
`;

const PricingPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #166534;
  margin-bottom: 2rem;
`;

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;

  li {
    margin-bottom: 0.5rem;
    color: #15803d;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const MarketplaceSection = styled(Section)`
  background: #f0fdf4;
`;

const MarketplaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MarketplaceCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
  transition: all 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.2);
  }
`;

const SkillsSection = styled(Section)`
  background: #fff;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillCategory = styled.div`
  background: #f0fdf4;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #15803d;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: "•";
      color: #22c55e;
    }
  }
`;

const FAQSection = styled(Section)`
  background: #fff;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const FAQItem = styled.div`
  background: #f0fdf4;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.2);
  }
`;

const FAQQuestion = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: ${props => props.isOpen ? '1rem' : '0'};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #22c55e;
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled.div`
  color: #15803d;
  font-size: 0.875rem;
  line-height: 1.8;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  padding-left: 0.5rem;
  border-left: 3px solid #22c55e;
  margin-left: 0.5rem;
`;

function SiteWp() {

  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [showMoreJobs, setShowMoreJobs] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handelSearchProjects = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/projects/skill/DEVELOPER_MOBILE`;
  };


  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };


  const steps = [
    {
      icon: <Layout size={32} />,
      title: 'Analyse de vos Besoins',
      description: 'Étude approfondie de votre projet et définition des fonctionnalités nécessaires.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Développement & Design',
      description: 'Création de votre site avec WordPress, intégration de votre charte graphique et contenus.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Mise en Ligne & Formation',
      description: "Déploiement sécurisé, tests complets et formation à l'utilisation de votre site."
    }
  ];
  const jobs = [
    {
        title: 'Développement Site Personnel WordPress Elementor',
        company: 'Client Particulier',
        location: 'Remote - International',
        type: 'Freelance IT',
        salary: '25-45€/h',
        description: 'Création d\'un site personnel avec WordPress et Elementor. Focus sur le design responsive, la personnalisation des templates et l\'optimisation des performances. Idéal pour un développeur créatif avec expérience en personal branding.',
        skills: ['WordPress', 'Elementor', 'Web Design', 'CSS', 'Responsive Design', 'Performance', 'mission freelance wordpress']
    },
    {
        title: 'Site WordPress SEO & Mobile-First',
        company: 'Agence IT',
        location: 'Remote - International',
        type: 'Freelance IT',
        salary: '30-50€/h',
        description: 'Développement d\'un site WordPress SEO-friendly sur un sous-domaine. Accent sur l\'optimisation mobile, design IT moderne et intégration selon wireframes. Expertise technique SEO et performance requise.',
        skills: ['WordPress', 'SEO Technique', 'Mobile-First', 'Performance', 'Gutenberg', 'UX/UI', 'mission freelance developpeur']
    },
    {
        title: 'E-commerce WooCommerce Vélo',
        company: 'Boutique Cyclisme',
        location: 'Remote - France',
        type: 'Freelance IT',
        salary: '35-45€/h',
        description: 'Création d\'une boutique d\'accessoires vélo avec WordPress/WooCommerce/Elementor. Développement de la page d\'accueil et des templates produits personnalisés.',
        skills: ['WooCommerce', 'Elementor', 'E-commerce', 'WordPress', 'Web Design', 'Templates', 'mission freelance it mobile']
    },
    {
        title: 'Personnalisation Boutique WooCommerce',
        company: 'E-commerce',
        location: 'Remote - International',
        type: 'Freelance IT',
        salary: 'Projet 500€',
        description: 'Optimisation et personnalisation d\'une boutique WooCommerce existante. Travail sur environnement de staging avant mise en production. Focus sur l\'amélioration de l\'expérience utilisateur.',
        skills: ['WooCommerce', 'WordPress', 'E-commerce', 'Optimisation', 'UX Design', 'Staging', 'mission freelance developpeur web wordpress']
    },
    {
        title: 'Développeur WordPress Plateforme Directory',
        company: 'Startup Tech',
        location: 'Remote - International',
        type: 'Freelance IT',
        salary: '35-60€/h',
        description: 'Développement d\'une plateforme directory WordPress avec filtres avancés et intégration Google Maps. Utilisation d\'Elementor Pro et CrocoBlock. Possibilité de collaboration long terme.',
        skills: ['WordPress', 'Elementor Pro', 'Google Maps API', 'CrocoBlock', 'Custom Plugins', 'WCAG 2.0', 'mission freelance wordpress']
    },
    {
        title: 'Optimisation Navigation WordPress',
        company: 'PME Digitale',
        location: 'Remote - International',
        type: 'Freelance IT',
        salary: 'Projet 450€',
        description: 'Réorganisation des pages et amélioration de la navigation d\'un site WordPress existant. Focus sur l\'expérience utilisateur et l\'optimisation du menu principal.',
        skills: ['WordPress', 'UX/UI', 'Navigation', 'PHP', 'CSS', 'Web Design', 'récherche mission freelance']
    },
    // Nouveaux emplois
    {
        title: 'Développeur Freelance WordPress E-commerce',
        company: 'Boutique en Ligne',
        location: 'Remote - France',
        type: 'Freelance IT',
        salary: '40-60€/h',
        description: 'Création et personnalisation d\'une boutique en ligne avec WordPress et WooCommerce, incluant les méthodes de paiement sécurisées.',
        skills: ['WordPress', 'WooCommerce', 'Stripe', 'Payment Gateway', 'SEO', 'mission freelance developpeur web']
    },
    {
        title: 'Développeur WordPress pour Site d\'Affaires',
        company: 'Startup Innovative',
        location: 'Remote - International',
        type: 'Freelance IT',
        salary: '35-50€/h',
        description: 'Développement d\'un site WordPress pour une entreprise avec une intégration de CMS pour la gestion des contenus.',
        skills: ['WordPress', 'PHP', 'MySQL', 'Plugins', 'Design Réactif', 'mission freelance paris wordpress']
    },
    {
        title: 'Création de Page de Destination WordPress',
        company: 'AgenTech',
        location: 'Remote - France',
        type: 'Freelance IT',
        salary: '300-400€ par projet',
        description: 'Création d\'une page de destination optimisée pour attirer des utilisateurs à une offre de service.',
        skills: ['WordPress', 'Landing Page', 'SEO', 'Copywriting', 'mission freelance etudiant wordpress']
    },
    {
        title: 'Auditeur WordPress pour Référencement',
        company: 'Digital Marketing',
        location: 'Remote - France',
        type: 'Freelance IT',
        salary: '400-500€/j',
        description: 'Audit et optimisation SEO d\'un site WordPress existant, avec recommandations et mise en œuvre des améliorations.',
        skills: ['SEO', 'WordPress', 'Google Analytics', 'Yoast SEO', 'mission freelance design wordpress']
    },
    {
        title: 'Développeur d\'Application de Réservations WordPress',
        company: 'Startup Réservations',
        location: 'Remote - International',
        type: 'Freelance IT',
        salary: '600-700€/j',
        description: 'Création d\'une application de réservation pour des services via WordPress, intégrant un système de paiement.',
        skills: ['WordPress', 'WooCommerce', 'Booking Calendar', 'API', 'freelance wordpress developpeur']
    }
];

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Sécurité Renforcée',
      description: 'Protection avancée contre les piratages et sauvegardes automatiques quotidiennes'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimisée',
      description: 'Sites rapides avec temps de chargement optimisé et mise en cache avancée'
    },
    {
      icon: <Box size={24} />,
      title: 'Site E-commerce',
      description: 'Solutions WooCommerce complètes pour votre boutique en ligne'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Site Responsive',
      description: 'Design adaptatif optimisé pour mobiles, tablettes et ordinateurs'
    },
    {
      icon: <Monitor size={24} />,
      title: 'Référencement SEO',
      description: 'Optimisation pour Google et visibilité maximale de votre site'
    },
    {
      icon: <Globe size={24} />,
      title: 'Site Multilingue',
      description: 'Solutions multilingues pour toucher une audience internationale'
    }
  ];

  const statistics = [
    { number: '1000+', label: 'Sites Créés' },
    { number: '99.9%', label: 'Satisfaction Client' },
    { number: '24/7', label: 'Support Expert' },
    { number: '500€', label: 'À partir de' }
  ];

  const courses = [
    {
      title: 'WordPress pour Débutants',
      description: 'Apprenez à créer et gérer votre premier site WordPress de A à Z',
      duration: '6 heures',
      level: 'Débutant',
      image: wordpressPourDebutants
    },
    {
      title: 'WooCommerce E-commerce',
      description: 'Créez votre boutique en ligne professionnelle avec WordPress',
      duration: '8 heures',
      level: 'Intermédiaire',
      image: woocommerceECommerce
    },
    {
      title: 'SEO WordPress',
      description: 'Optimisez votre référencement naturel sur WordPress',
      duration: '5 heures',
      level: 'Intermédiaire',
      image: seoWordpress
    },
    {
      title: 'Sécurité WordPress',
      description: 'Protégez votre site WordPress contre les attaques',
      duration: '4 heures',
      level: 'Avancé',
      image: securiteWordpress
    }
  ];

  const marketplaceBenefits = [
    {
      icon: <Shield size={24} />,
      title: 'Freelances Vérifiés',
      description: 'Experts WordPress certifiés avec portfolio et avis vérifiés'
    },
    {
      icon: <Zap size={24} />,
      title: 'Devis Personnalisés',
      description: 'Recevez des propositions adaptées à votre budget et vos besoins'
    },
    {
      icon: <Globe size={24} />,
      title: 'Paiement Sécurisé',
      description: 'Système de paiement sécurisé et garantie satisfaction'
    }
  ];

  const wordpressSkills = [
    {
      category: 'Développement WordPress',
      icon: <Layout size={24} />,
      skills: [
        'Développement de thèmes',
        'Création de plugins',
        'WordPress Multisite',
        'API WordPress',
        'Gutenberg Blocks',
        'PHP WordPress'
      ]
    },
    {
      category: 'E-commerce',
      icon: <Box size={24} />,
      skills: [
        'WooCommerce',
        'Shopify WordPress',
        'Plugins e-commerce',
        'Paiement en ligne',
        'Gestion stocks',
        'Marketplace WordPress'
      ]
    },
    {
      category: 'Performance & SEO',
      icon: <Zap size={24} />,
      skills: [
        'Optimisation WordPress',
        'Cache WordPress',
        'SEO WordPress',
        'Vitesse de chargement',
        'Yoast SEO',
        'Google Analytics'
      ]
    },
    {
      category: 'Sécurité & Maintenance',
      icon: <Shield size={24} />,
      skills: [
        'Sécurité WordPress',
        'Sauvegarde WordPress',
        'Migration WordPress',
        'Mise à jour WordPress',
        'Protection spam',
        'SSL WordPress'
      ]
    }
  ];

  const faqs = [
    {
        question: "Combien coûte un site WordPress ?",
        answer: "Le coût d'un site WordPress varie selon vos besoins. Sur ItGalaxy, vous trouverez des freelances proposant des tarifs adaptés à votre budget : de 500€ pour un site vitrine simple à 2000€+ pour un site e-commerce complexe. Les tarifs incluent généralement le développement, l'intégration du design, et la formation à l'utilisation."
    },
    {
        question: "Comment créer un site WordPress gratuitement ?",
        answer: "Bien que WordPress soit un CMS gratuit, un site professionnel nécessite certains investissements (hébergement, thème, plugins). Nos freelances peuvent vous conseiller sur les meilleures solutions selon votre budget, en optimisant les coûts tout en garantissant la qualité."
    },
    {
        question: "Quelle est la différence entre WordPress.com et WordPress.org ?",
        answer: "WordPress.com est une plateforme hébergée avec des fonctionnalités limitées, tandis que WordPress.org est la version auto-hébergée offrant un contrôle total. Nos experts peuvent vous guider vers la meilleure option selon vos besoins et vous accompagner dans la mise en place."
    },
    {
        question: "Comment sécuriser un site WordPress ?",
        answer: "La sécurité WordPress implique plusieurs aspects : mises à jour régulières, sauvegardes, certificat SSL, plugins de sécurité, et bonnes pratiques. Nos freelances spécialisés en sécurité WordPress peuvent mettre en place une protection complète pour votre site."
    },
    {
        question: "Comment optimiser le référencement d'un site WordPress ?",
        answer: "L'optimisation SEO WordPress comprend l'installation de Yoast SEO, l'optimisation des contenus, la vitesse de chargement, la structure des URLs, et le maillage interne. Nos experts SEO WordPress peuvent améliorer votre visibilité sur Google."
    },
    {
        question: "Quelle est la maintenance nécessaire pour un site WordPress ?",
        answer: "La maintenance WordPress inclut les mises à jour régulières, les sauvegardes, la surveillance de la sécurité, et l'optimisation des performances. Trouvez sur ItGalaxy des experts proposant des services de maintenance adaptés à vos besoins."
    },
    {
        question: "Comment trouver un développeur WordPress freelance IT ?",
        answer: "Vous pouvez rechercher des développeurs sur notre plateforme ItGalaxy en utilisant des filtres par compétence, évaluation et lieu. Lisez les avis pour choisir le freelance IT qui répond à vos besoins."
    },
    {
        question: "Quels plugins essentiels devrais-je installer sur mon site WordPress ?",
        answer: "Les plugins essentiels incluent Yoast SEO pour le référencement, Akismet pour la protection contre le spam, WooCommerce pour le e-commerce, et Wordfence pour la sécurité. Nos freelances peuvent vous aider à les configurer."
    },
    {
        question: "Comment migrer un site vers WordPress ?",
        answer: "La migration vers WordPress peut être réalisée en suivant des étapes claires : sauvegarde de votre site actuel, installation de WordPress, et importation des données via des plugins ou manuellement. Faites appel à nos freelances pour simplifier le processus."
    },
    {
        question: "Comment choisir un thème WordPress adapté ?",
        answer: "Le choix d'un thème dépend de vos objectifs. Un thème responsive et optimisé pour le SEO est recommandé. Évitez les thèmes surchargeant le site. Nos freelances peuvent vous conseiller sur le meilleur choix."
    },
    {
        question: "Comment créer une boutique en ligne sur WordPress ?",
        answer: "Installez le plugin WooCommerce, configurez vos produits, méthodes de paiement, et paramètres d'expédition. Nos experts peuvent vous guider tout au long du processus pour vous assurer que tout est configuré correctement."
    },
    {
        question: "Comment gérer les utilisateurs et les rôles sur WordPress ?",
        answer: "Utilisez la gestion des utilisateurs intégrée pour ajouter, supprimer ou modifier les rôles. Assurez-vous de définir les autorisations appropriées selon le rôle de chaque utilisateur. Nos freelances peuvent également vous aider à mettre en place des rôles personnalisés."
    },
    {
        question: "Quelle est la meilleure façon de sauvegarder un site WordPress ?",
        answer: "Utilisez des plugins comme UpdraftPlus ou BackWPup pour automatiser vos sauvegardes. Gardez une copie de sauvegarde sur le cloud pour plus de sécurité. Vous pouvez également faire appel à nos experts pour des solutions de sauvegarde."
    },
    {
        question: "Comment améliorer la vitesse de chargement de mon site WordPress ?",
        answer: "Optimisez les images, utilisez la mise en cache, et choisissez un hébergeur performant. Des plugins tels que WP Rocket peuvent également vous aider à améliorer les temps de chargement. Nos freelances peuvent vous proposer des stratégies personnalisées."
    },
    {
        question: "Comment gérer le SEO local sur WordPress ?",
        answer: "Pour le SEO local, optimisez vos contenus pour des mots-clés géolocalisés, créez une page Google My Business, et utilisez un plugin SEO pour ajouter des schema markups localisés. Nos experts peuvent vous assister dans cette démarche."
    },
    {
        question: "Comment supprimer une extension WordPress ?",
        answer: "Allez dans votre tableau de bord, cliquez sur 'Extensions', trouvez l'extension à supprimer, cliquez sur 'Désactiver' puis sur 'Supprimer'. Cela peut être fait facilement, et nos freelances peuvent aider si vous avez des difficultés."
    },
    {
        question: "Quel hébergeur choisir pour mon site WordPress ?",
        answer: "Choisissez un hébergeur optimisé pour WordPress comme SiteGround, Bluehost ou WP Engine, offrant des temps de chargement rapides, un bon support, et des options de sécurité. Nos freelances peuvent vous conseiller dans le choix d’un hébergeur adapté."
    },
    {
        question: "Qu'est-ce que la mise en cache et pourquoi est-ce important ?",
        answer: "La mise en cache améliore les temps de chargement de votre site en stockant des versions statiques de vos pages. Cela réduit la charge sur le serveur et offre une meilleure expérience utilisateur. Nos freelances peuvent mettre en place des solutions de mise en cache."
    },
    {
        question: "Comment limiter le spam sur mon site WordPress ?",
        answer: "Installez des plugins comme Akismet, activez la modération des commentaires, et utilisez des captchas sur les formulaires. Nos freelances en sécurité WordPress peuvent également vous aider à mettre en place une protection solide."
    },
    {
        question: "Comment intégrer facilement des médias sociaux sur WordPress ?",
        answer: "Utilisez des plugins pour intégrer les flux de médias sociaux, ajouter des boutons de partage, et affinez vos paramètres pour optimiser l'engagement. Nos freelances peuvent vous conseiller sur les meilleures pratiques."
    },
    {
        question: "Quelles sont les erreurs courantes à éviter sur WordPress ?",
        answer: "Évitez de ne pas faire de sauvegardes régulières, ne pas sécuriser vos identifiants, de négliger la mise à jour des plugins et thèmes, et de choisir un hébergeur de mauvaise qualité. Nos experts peuvent vous aider à éviter ces erreurs."
    },
    {
        question: "Comment puis-je personnaliser le tableau de bord WordPress ?",
        answer: "Utilisez des plugins comme Adminimize pour masquer les éléments inutiles et rendre votre tableau de bord plus accueillant. Vous pouvez également créer des messages de bienvenue pour guider les utilisateurs. Nos freelances peuvent également effectuer des personnalisations avancées."
    },
    {
        question: "Comment gérer les erreurs 404 sur WordPress ?",
        answer: "Utilisez un plugin de redirection pour gérer les erreurs 404 en redirigeant les utilisateurs vers des pages pertinentes. Assurez-vous de vérifier votre site régulièrement pour détecter et corriger les liens brisés."
    },
    {
        question: "Comment utiliser des shortcodes sur WordPress ?",
        answer: "Les shortcodes vous permettent d'ajouter facilement des fonctionnalités et des contenus à vos articles ou pages. Créez vos propres shortcodes si nécessaire, ou utilisez ceux fournis par des plugins. Nos freelances peuvent vous aider à maîtriser les shortcodes."
    }
];


  return (
    <>
      <Header />
      <GlobalStyle />
      <MainContainer>
      <Helmet>
            <title>Trouver Freelance IT expert WordPress</title>
            <meta name="description" content="Découvrez les meilleures Freelance IT expert WordPress, des experts en développement WEB , SEO ainsi que les meilleurs agences web en france." />
            <link rel="canonical" href="https://itgalaxy.io/freelance-it" />
            <meta property="og:title" content="Trouver Freelance IT expert WordPress" />
            <meta property="og:description" content="Découvrez les meilleures Freelance IT expert WordPress, des experts en développement." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://itgalaxy.io/freelance-it" />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-it" />
            <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-it" />
        </Helmet>


        <HeroSection>
          <HeroContent>
            <WordPressLogo>
              <Globe />
            </WordPressLogo>
            <HeroTitle> Trouver Freelance IT expert WordPress </HeroTitle>
            <HeroSubtitle>
            Découvrez les meilleures Freelance IT expert WordPress, des experts en développement.
            </HeroSubtitle>
            <Button onClick={handleModalRegister}>
               Explorer les prestataires
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires skill={'CSS'}/>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Briefcase />
              Projets partagés pour Freelance it WordPress
            </SectionTitle>
            <SectionSubtitle>
              Les meilleures opportunités en remote pour les experts it WordPress
            </SectionSubtitle>
            <JobsGrid>
              {jobs.slice(0, showMoreJobs ? jobs.length : 3).map((job, index) => (
                <JobCard key={index} onClick={handleModalRegister}>
                  <JobHeader>
                    <JobInfo>
                      <JobTitle>{job.title}</JobTitle>
                      <JobCompany>{job.company}</JobCompany>
                      <JobMeta>
                        <span>{job.location}</span>
                        <span>{job.type}</span>
                      </JobMeta>
                    </JobInfo>
                    <JobSalary>{job.salary}</JobSalary>
                  </JobHeader>
                  <JobDescription>{job.description}</JobDescription>
                  <JobSkills>
                    {job.skills.map((skill, skillIndex) => (
                      <JobSkill key={skillIndex}>{skill}</JobSkill>
                    ))}
                  </JobSkills>
                </JobCard>
              ))}
            </JobsGrid>
            <ButtonContainer>
              <SeeMoreButton onClick={() => setShowMoreJobs(!showMoreJobs)}>
                {showMoreJobs ? 'Voir Moins' : 'Voir Plus de Projets'}
                <ChevronDown size={20} />
              </SeeMoreButton>
            </ButtonContainer>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Shield />
              Fonctionnalités Premium
            </SectionTitle>
            <SectionSubtitle>
              Des outils puissants pour votre succès en ligne
            </SectionSubtitle>
            <FeatureGrid>
              {features.map((feature, index) => (
                <FeatureCard key={index}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </SectionContent>
        </Section>

        

        <MarketplaceSection>
          <SectionContent>
            <SectionTitle>
              <Globe />
              Trouvez le Meilleur Expert Freelance it WordPress
            </SectionTitle>
            <SectionSubtitle>
              ItGalaxy connecte votre projet avec les meilleurs freelances et agences WordPress
            </SectionSubtitle>
            <MarketplaceGrid>
              {marketplaceBenefits.map((benefit, index) => (
                <MarketplaceCard key={index}>
                  <FeatureIcon>{benefit.icon}</FeatureIcon>
                  <FeatureTitle>{benefit.title}</FeatureTitle>
                  <FeatureDescription>{benefit.description}</FeatureDescription>
                </MarketplaceCard>
              ))}
            </MarketplaceGrid>
            <ButtonContainer>
              <Button onClick={handleModalRegister}>
                Publier votre Projet WordPress
                <ChevronRight size={20} />
              </Button>
            </ButtonContainer>
          </SectionContent>
        </MarketplaceSection>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Layout />
              Comment Créer votre Site WordPress
            </SectionTitle>
            <SectionSubtitle>
              Un processus simple et guidé pour lancer votre site professionnel
            </SectionSubtitle>
            <StepsGrid>
              {steps.map((step, index) => (
                <StepCard key={index}>
                  <StepIcon>{step.icon}</StepIcon>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepCard>
              ))}
            </StepsGrid>
          </SectionContent>
        </Section>

     
        <SkillsSection>
          <SectionContent>
            <SectionTitle>
              <GraduationCap />
              Compétences WordPress Recherchées
            </SectionTitle>
            <SectionSubtitle>
              Découvrez les expertises WordPress les plus demandées sur notre plateforme
            </SectionSubtitle>
            <SkillsGrid>
              {wordpressSkills.map((category, index) => (
                <SkillCategory key={index}>
                  <CategoryTitle>
                    {category.icon}
                    {category.category}
                  </CategoryTitle>
                  <SkillsList>
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </SkillsList>
                </SkillCategory>
              ))}
            </SkillsGrid>
          </SectionContent>
        </SkillsSection>





        <Section>
          <SectionContent>
            <SectionTitle>
              <BookOpenText />
              Formations WordPress
            </SectionTitle>
            <SectionSubtitle>
              Développez vos compétences avec nos formations expertes
            </SectionSubtitle>
            <CourseGrid>
              {courses.map((course, index) => (
                <CourseCard key={index} onClick={handleModalRegister}>
                  <CourseImage>
                    <img src={course.image} alt={course.title} />
                  </CourseImage>
                  <CourseContent>
                    <CourseTitle>{course.title}</CourseTitle>
                    <CourseDescription>{course.description}</CourseDescription>
                    <CourseMeta>
                      <span>
                        <Clock size={16} style={{ verticalAlign: 'middle' }} /> {course.duration}
                      </span>
                      <span>
                        <GraduationCap size={16} style={{ verticalAlign: 'middle' }} /> {course.level}
                      </span>
                    </CourseMeta>
                  </CourseContent>
                </CourseCard>
              ))}
            </CourseGrid>
          </SectionContent>
        </Section>



        <FAQSection>
          <SectionContent>
            <SectionTitle>
              <BookOpenText />
              Questions Fréquentes sur WordPress
            </SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur la création de sites WordPress avec nos freelances IT experts
            </SectionSubtitle>
            <FAQGrid>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <FAQQuestion isOpen={openFAQ === index}>
                    {faq.question}
                    {openFAQ === index ?
                      <ChevronDown size={20} style={{ transform: 'rotate(180deg)' }} /> :
                      <ChevronDown size={20} />
                    }
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQ === index}>
                    {faq.answer}
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQGrid>
            <ButtonContainer>
              <Button onClick={handleModalRegister}>
                Trouver un Expert WordPress
                <ChevronRight size={20} />
              </Button>
            </ButtonContainer>
          </SectionContent>
        </FAQSection>

      </MainContainer>
      <Offers />
      <FooterHome page={"wordpress"} />

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

export default SiteWp;