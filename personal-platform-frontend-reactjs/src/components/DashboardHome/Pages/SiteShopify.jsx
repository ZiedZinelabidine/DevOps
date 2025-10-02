import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import { ArrowDown, Banknote, Briefcase, Check, ChevronRight, Code, CreditCard, HelpCircle, LineChart, Palette, Shield, ShoppingBag, Store, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Offers from "./Offres";
import { Helmet } from "react-helmet";
import CardsPrestataires from "./CardsPrestataires";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #13111C;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #13111C;
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
      radial-gradient(circle at 10% 10%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(217, 70, 239, 0.1) 0%, transparent 50%);
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
    background: linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(217, 70, 239, 0.1));
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
  background: linear-gradient(135deg, #9333EA, #D946EF);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3);

  svg {
    width: 80px;
    height: 80px;
    color: #ffffff;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #ffffff;
  background: linear-gradient(to right, #9333EA, #D946EF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #A78BFA;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #9333EA, #D946EF);
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
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(147, 51, 234, 0.4);
  }

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(45deg);
    animation: ${shimmer} 3s ease-in-out infinite;
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  position: relative;
  background: #1A1825;

  &:nth-child(odd) {
    background: #13111C;
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
  background: linear-gradient(to right, #9333EA, #D946EF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #9333EA;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #A78BFA;
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StepCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
    border-color: #9333EA;
  }
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #9333EA, #D946EF);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

const StepDescription = styled.p`
  color: #A78BFA;
  line-height: 1.6;
  text-align: center;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const JobCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
    border-color: #9333EA;
    cursor: pointer;
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const JobCompany = styled.p`
  color: #A78BFA;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #A78BFA;
  font-size: 0.875rem;
`;

const JobSalary = styled.div`
  background: linear-gradient(135deg, #9333EA, #D946EF);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
`;

const JobDescription = styled.p`
  color: #A78BFA;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const JobSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const JobSkill = styled.span`
  background: rgba(147, 51, 234, 0.1);
  color: #A78BFA;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  border: 1px solid rgba(147, 51, 234, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgba(147, 51, 234, 0.2);
    border-color: #9333EA;
    transform: translateY(-2px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const SeeMoreButton = styled(Button)`
  background: transparent;
  border: 2px solid #9333EA;
  color: #A78BFA;
  
  &:hover {
    background: rgba(147, 51, 234, 0.1);
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: translateY(4px);
  }

  &::after {
    display: none;
  }
`;

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(147, 51, 234, 0.05);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(147, 51, 234, 0.1);
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    background: rgba(147, 51, 234, 0.15);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #9333EA, #D946EF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  color: #A78BFA;
  font-size: 1.125rem;
`;

const ShowcaseSection = styled.section`
  padding: 6rem 2rem;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;
`;

const ShowcaseCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
    border-color: #9333EA;
  }
`;

const ShowcaseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ShowcaseDescription = styled.p`
  color: #A78BFA;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #A78BFA;
  margin-bottom: 0.75rem;

  svg {
    color: #9333EA;
  }
`;

const TestimonialSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(147, 51, 234, 0.05);
`;

const TestimonialCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 48rem;
`;

const TestimonialText = styled.p`
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  color: #ffffff;
  font-weight: 600;
`;

const AuthorRole = styled.div`
  color: #A78BFA;
  font-size: 0.875rem;
`;

const MarketplaceFeatureSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(147, 51, 234, 0.05);
`;

const ComparisonTable = styled.div`
  max-width: 72rem;
  margin: 3rem auto;
  background: rgba(147, 51, 234, 0.1);
  border-radius: 20px;
  padding: 2rem;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  color: #ffffff;
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(147, 51, 234, 0.2);
`;

const Td = styled.td`
  color: #A78BFA;
  padding: 1rem;
  border-bottom: 1px solid rgba(147, 51, 234, 0.2);
`;

const SearchBar = styled.div`
  max-width: 48rem;
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(147, 51, 234, 0.2);
  background: rgba(147, 51, 234, 0.1);
  color: #ffffff;
  font-family: 'JetBrains Mono', monospace;

  &:focus {
    outline: none;
    border-color: #9333EA;
  }
`;

const FilterButton = styled(Button)`
  background: transparent;
  border: 1px solid rgba(147, 51, 234, 0.2);
  padding: 1rem 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(147, 51, 234, 0.1);
    transform: translateY(-2px);
    border-color: #9333EA;
  }

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &::after {
    display: none;
  }
`;

const TrendingSkills = styled.div`
  max-width: 72rem;
  margin: 2rem auto;
  text-align: center;
`;

const SkillTag = styled.span`
  display: inline-block;
  background: rgba(147, 51, 234, 0.1);
  color: #A78BFA;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  margin: 0.5rem;
  border: 1px solid rgba(147, 51, 234, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgba(147, 51, 234, 0.2);
    border-color: #9333EA;
    transform: translateY(-2px);
  }
`;

const PricingSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(147, 51, 234, 0.05);
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;
`;

const PricingCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    border-color: #9333EA;
    box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
  }
`;

const PriceRange = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 1rem 0;
  background: linear-gradient(135deg, #9333EA, #D946EF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PriceDescription = styled.div`
  color: #A78BFA;
  margin-bottom: 1.5rem;
`;

const FAQSection = styled.section`
  padding: 6rem 2rem;
`;

const FAQGrid = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #9333EA;
    background: rgba(147, 51, 234, 0.15);
  }
`;

const FAQQuestion = styled.h2`
  color: #ffffff;
  font-size: 1.25rem;
  margin-bottom: ${props => props.isOpen ? '1rem' : '0'};
`;

const FAQAnswer = styled.div`
  color: #A78BFA;
  line-height: 1.6;
  height: ${props => props.isOpen ? 'auto' : '0'};
  overflow: hidden;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s ease-in-out;
`;

const MetricsSection = styled.section`
  padding: 6rem 2rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MetricCard = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
`;

const MetricIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, #9333EA, #D946EF);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ROICalculator = styled.div`
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 3rem;
`;

const CalculatorForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CalculatorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0; // Prevent overflow
`;

const CalculatorLabel = styled.label`
  color: #ffffff;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  min-height: 2.5rem; // Fixed height for labels
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const CalculatorInput = styled.input`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(147, 51, 234, 0.2);
  background: rgba(147, 51, 234, 0.1);
  color: #ffffff;
  font-family: 'JetBrains Mono', monospace;

  &:focus {
    outline: none;
    border-color: #9333EA;
  }

  &::placeholder {
    color: rgba(167, 139, 250, 0.5);
  }
`;

const CalculatorResults = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const ResultCard = styled.div`
  padding: 1.5rem;
  background: rgba(147, 51, 234, 0.2);
  border-radius: 12px;
  text-align: center;
`;

const ResultLabel = styled.div`
  color: #A78BFA;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const ResultValue = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #9333EA, #D946EF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function SiteShopify() {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const showcaseRef = useRef(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const [roiInputs, setRoiInputs] = useState({
    revenue: '',
    orders: '',
    averageOrder: '',
    conversionRate: '',
    trafficMonthly: ''
  });

  const [roiResults, setRoiResults] = useState({
    potentialRevenue: '0',
    revenueIncrease: '0',
    roiPercentage: '0',
    monthsToPositive: '0'
  });

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };


  const stats = [
    { number: "1000+", label: "Freelances Vérifiés" },
    { number: "95%", label: "Taux de Satisfaction" },
    { number: "48h", label: "Délai de Matching" },
    { number: "500+", label: "Projets Réalisés" }
  ];

  const showcaseItems = [
    {
      title: "Experts Thèmes Shopify",
      description: "Trouvez des développeurs spécialisés dans la création et personnalisation de thèmes",
      features: [
        "Développement sur mesure",
        "Migration de thèmes",
        "Optimisation UI/UX",
        "Responsive design"
      ]
    },
    {
      title: "Développeurs d'Apps",
      description: "Connectez-vous avec des experts en développement d'applications E-commerce",
      features: [
        "Apps privées & publiques",
        "Intégrations API",
        "Solutions sur mesure",
        "Support technique"
      ]
    },
    {
      title: "Consultants E-commerce",
      description: "Collaborez avec des consultants expérimentés en stratégie",
      features: [
        "Optimisation CRO",
        "Stratégie marketing",
        "Analytics & KPIs",
        "Scaling business"
      ]
    }
  ];

  const steps = [
    {
      icon: <Store size={32} />,
      title: "Publiez votre projet",
      description: "Décrivez vos besoins et recevez des propositions d'experts web qualifiés."
    },
    {
      icon: <Palette size={32} />,
      title: "Sélectionnez un expert",
      description: "Comparez les profils, portfolios et avis pour choisir le meilleur talent."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Collaborez sereinement",
      description: "Paiement sécurisé et suivi de projet avec notre protection client."
    }
  ];

  const jobs = [
    {
      title: 'Développeur Web Senior',
      company: 'E-commerce Fashion',
      location: 'Remote - International',
      type: 'Freelance',
      salary: '500-600€ /semaine',
      description: 'Développement de thèmes personnalisés et optimisation des conversions pour une marque de luxe.',
      skills: ['JavaScript', 'API Integration', 'UI/UX Design', 'Performance Optimization']
    },
    {
      title: 'Développeur Front-end',
      company: 'Digital Studio',
      location: 'Remote - France',
      type: 'Freelance',
      salary: '400-500€ /semaine',
      description: 'Création d\'interfaces utilisateur innovantes pour des sites web haut de gamme.',
      skills: ['React', 'HTML/CSS', 'SCSS', 'Responsive Design', 'Animation']
    },
    {
      title: 'Architecte Web E-commerce',
      company: 'Luxury Brand',
      location: 'Remote - Europe',
      type: 'Freelance',
      salary: '600-700€ /semaine',
      description: 'Conception et implémentation de solutions e-commerce complexes multi-marchés.',
      skills: ['Architecture Web', 'Multi-site Solutions', 'Performance', 'SEO']
    },
    {
      title: 'Expert en Applications Web',
      company: 'Tech Agency',
      location: 'Remote - International',
      type: 'Freelance',
      salary: '450-550€ /semaine',
      description: 'Développement d\'applications personnalisées dans un écosystème web.',
      skills: ['Node.js', 'React', 'GraphQL', 'CLI Tools', 'API Development']
    },
    {
      title: 'Spécialiste en Conversion Web',
      company: 'Growth Studio',
      location: 'Remote - France',
      type: 'Freelance',
      salary: '400-500€ /semaine',
      description: 'Optimisation des taux de conversion et de l\'expérience utilisateur sur des plateformes e-commerce.',
      skills: ['Web Analytics', 'A/B Testing', 'UX', 'Performance Tuning', 'SEO']
    },
    {
      title: 'Lead Développeur Web',
      company: 'D2C Brand',
      location: 'Remote - Europe',
      type: 'Freelance',
      salary: '550-650€ /semaine',
      description: 'Direction technique de projets web complexes avec une équipe de développement.',
      skills: ['Team Leadership', 'Web Architecture', 'DevOps Practices', 'Scalability']
    }
];


  const trendingSkills = [
    "Shopify Plus",
    "Liquid",
    "React",
    "Node.js",
    "GraphQL",
    "Storefront API",
    "Headless",
    "UI/UX Design",
    "Performance",
    "SEO"
  ];

  const pricingTiers = [
    {
      title: "Développement de Thèmes",
      range: "400-500€/semaine",
      description: "Création et personnalisation de thèmes Shopify"
    },
    {
      title: "Développement d'Apps",
      range: "450-550€/semaine",
      description: "Applications sur mesure et intégrations API"
    },
    {
      title: "Architecture Shopify Plus",
      range: "550-650€/semaine",
      description: "Solutions e-commerce complexes et multi-marchés"
    }
  ];

  const faqs = [
    {
        question: "Comment fonctionne le processus de sélection des freelances ?",
        answer: "Nous vérifions rigoureusement chaque expert : compétences techniques, expérience Shopify, portfolio, et références. Seuls les meilleurs talents sont acceptés sur notre plateforme."
    },
    {
        question: "Quels sont les délais moyens pour trouver un expert ?",
        answer: "Grâce à notre large réseau d'experts vérifiés, nous pouvons vous mettre en relation avec des talents qualifiés en 48h en moyenne."
    },
    {
        question: "Comment sont garantis les paiements ?",
        answer: "Notre système de paiement sécurisé protège à la fois les clients et les freelances. Les fonds sont débloqués uniquement après validation des livrables."
    },
    {
        question: "Peut-on faire un essai avant de s'engager ?",
        answer: "Oui, nous recommandons de commencer par une période d'essai ou un petit projet pour valider l'adéquation avec l'expert."
    },
    {
        question: "Comment puis-je recruter un développeur freelance Shopify ?",
        answer: "Publiez votre projet, parcourez les profils des freelances disponibles et sélectionnez celui qui correspond le mieux à vos besoins."
    },
    {
        question: "Quelles sont les compétences requises pour un freelance Shopify ?",
        answer: "Les compétences incluent la maîtrise de Liquid, JavaScript, ainsi que des connaissances en développement d'applications Shopify et en design web."
    },
    {
        question: "Comment gérer les communications avec un freelance ?",
        answer: "Utilisez notre plateforme pour échanger des messages, partager des fichiers et suivre l'avancement de votre projet en temps réel."
    },
    {
        question: "Comment assurez-vous la qualité des prestations ?",
        answer: "Nous avons un système d'évaluation basé sur les performances et les retours des clients, garantissant que seuls les freelances les mieux notés restent sur notre plateforme."
    },
    {
        question: "Existe-t-il une garantie de satisfaction ?",
        answer: "Oui, si vous n'êtes pas satisfait des livrables, nous travaillerons avec vous pour corriger le problème ou trouver un autre spécialiste."
    },
    {
        question: "Quelles sont les options de financement pour les missions freelances ?",
        answer: "Vous pouvez préfinancer la mission dans un compte sécurisé jusqu'à séparation des livrables. Nous acceptons plusieurs méthodes de paiement."
    },
    {
        question: "Comment évaluer le travail d'un freelance ?",
        answer: "Après chaque projet, vous aurez la possibilité de laisser un retour sur le travail effectué, contribuant ainsi à la réputation du freelance sur la plateforme."
    },
    {
        question: "Puis-je trouver des missions freelance en remote ?",
        answer: "De nombreux freelances proposent des services en remote. Vous pouvez filtrer les résultats pour afficher uniquement les projets à distance."
    },
    {
        question: "Comment discuter des exigences du projet avec le freelance ?",
        answer: "Nous recommandons de faire un briefing détaillé à l'aide de notre système de messagerie pour clarifier toutes les exigences et attentes."
    },
    {
        question: "Quelles sont les meilleures pratiques pour travailler avec un freelance ?",
        answer: "Établissez clairement vos objectifs, maintenez une communication régulière et respectez les délais convenus pour assurer le succès du projet."
    },
    {
        question: "Quelles tâches peuvent être confiées à un freelance Shopify ?",
        answer: "Les tâches peuvent inclure le développement de boutiques, la personnalisation de thèmes, l'optimisation SEO, ou la gestion des campagnes marketing."
    },
    {
        question: "Comment trouver des missions freelance à Paris ?",
        answer: "Utilisez notre plateforme pour filtrer les missions par localisation et parcourez les offres spécifiques à Paris."
    },
    {
        question: "Est-il possible d'embaucher un freelance pour une petite mission ?",
        answer: "Oui, notre plateforme est parfaite pour trouver des petites missions freelance, que ce soit pour un projet court terme ou un ajustement rapide sur un site existant."
    },
    {
        question: "Comment gérer une mission freelance à distance ?",
        answer: "Assurez-vous de communiquer régulièrement, d'utiliser des outils de gestion de projet et de vérifier l'avancement du travail pour garantir la bonne progression du projet."
    },
    {
        question: "En quoi consiste le service d'audit SEO ?",
        answer: "Un audit SEO analyse les performances et la visibilité de votre site, avec des recommandations sur l'optimisation pour attirer un trafic qualifié."
    },
    {
        question: "Comment les freelances gèrent-ils la sécurité des sites WordPress ?",
        answer: "Les freelances appliquent des mesures de sécurité standards, telles que des mises à jour régulières, l'utilisation de certificats SSL, et des plugins de sécurité."
    },
    {
        question: "Puis-je choisir le freelance avec lequel je veux travailler ?",
        answer: "Oui, vous avez la liberté de parcourir les profils des freelances et de choisir celui qui correspond le mieux à vos critères de sélection."
    },
    {
        question: "Quels types de projets sont les mieux payés pour les freelances ?",
        answer: "Les projets plus complexes, comme le développement d'applications personnalisées ou les intégrations API, tendent à offrir de meilleurs tarifs."
    },
    {
        question: "Comment établir un bon contrat avec un freelance ?",
        answer: "Rédigez un contrat clair détaillant les objectifs, les livrables, les délais et les modalités de paiement pour protéger les deux parties."
    },
    {
        question: "Puis-je embaucher plusieurs freelances en même temps ?",
        answer: "Absolument! Si vous avez un projet qui nécessite plusieurs spécialistes, vous pouvez embaucher plusieurs freelances simultanément."
    },
    {
        question: "Quels sont les meilleurs outils pour gérer des projets avec des freelances ?",
        answer: "Utilisez des outils comme Trello, Asana, ou Slack pour faciliter la communication et le suivi des tâches tout au long du projet."
    },
    {
        question: "Comment les freelances fixent-ils leurs tarifs ?",
        answer: "Les tarifs sont généralement basés sur l'expérience, les compétences et la complexité du projet. Chaque freelance définit ses tarifs en fonction de ces critères."
    },
    {
        question: "Quand faut-il effectuer des paiements aux freelances ?",
        answer: "Les paiements peuvent être effectués en amont, à mi-parcours ou à la fin du projet, selon ce qui est convenu dans le contrat."
    },
    {
        question: "Comment aider un freelance à mieux comprendre mes besoins ?",
        answer: "Fournissez un brief détaillé incluant vos objectifs, vos attentes, et des exemples de ce que vous aimez, pour que le freelance puisse aligner ses efforts sur vos besoins."
    },
    {
        question: "Quels sont les critères importants lors du choix d'un freelance ?",
        answer: "Évaluez les compétences, l'expérience, les avis précédents, et le portfolio pour faire un choix éclairé. Cela vous assurera de travailler avec le bon professionnel."
    }
];

  const performanceMetrics = [
    {
      icon: <LineChart size={24} />,
      title: "Core Web Vitals",
      value: "98/100",
      description: "Performance optimale sur mobile et desktop"
    },
    {
      icon: <Users size={24} />,
      title: "Taux de Conversion",
      value: "+3.5%",
      description: "Amélioration moyenne après optimisation"
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Taux d'Abandon",
      value: "-25%",
      description: "Réduction du taux d'abandon panier"
    }
  ];

  const handleRoiInputChange = (e) => {
    const { name, value } = e.target;
    setRoiInputs(prev => ({
      ...prev,
      [name]: value
    }));
    calculateRoi({
      ...roiInputs,
      [name]: value
    });
  };

  const calculateRoi = (inputs) => {
    const current = parseFloat(inputs.revenue) || 0;
    const orders = parseFloat(inputs.orders) || 0;
    const averageOrder = parseFloat(inputs.averageOrder) || 0;
    const conversionRate = parseFloat(inputs.conversionRate) || 0;
    const traffic = parseFloat(inputs.trafficMonthly) || 0;

    if (current && orders && averageOrder && conversionRate && traffic) {
      // Calculate potential revenue with improved conversion rate (2% increase) and average order value (15% increase)
      const potentialRevenue = Math.max(0, (traffic * (conversionRate + 2) / 100 * averageOrder * 1.15).toFixed(0));
      const increase = Math.max(0, (potentialRevenue - current).toFixed(0));
      const roiPercent = Math.max(0, ((increase / current) * 100).toFixed(1));
      // Calculate months to positive ROI based on investment and monthly increase
      const monthsToPositive = Math.max(0, (50000 / Math.max(1, increase)).toFixed(1));

      setRoiResults({
        potentialRevenue: potentialRevenue,
        revenueIncrease: increase,
        roiPercentage: roiPercent,
        monthsToPositive: monthsToPositive
      });
    }
  };

  return (
    <>
    <Helmet>
        <title>Trouvez un Freelance dev && Agences de developpement web </title>
        <meta name="description" content="Découvrez les meilleures Freelances dev && Agences de developpement web ." />
        <link rel="canonical" href="https://itgalaxy.io/freelance-dev" />
        <meta property="og:title" content="Trouvez un Freelance dev && Agences de developpement web" />
        <meta property="og:description" content="Découvrez les meilleures Freelances dev && Agences de developpement web ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/freelance-dev" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-dev" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-dev" />
     </Helmet>
      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <Logo>
              <ShoppingBag />
            </Logo>
            <HeroTitle>Trouver un Freelance dev </HeroTitle>
            <HeroSubtitle>
              Partagez votre projet avec notre communauté des freelances developpeurs web
            </HeroSubtitle>
            <TrendingSkills>
              {trendingSkills.map((skill, index) => (
                <SkillTag key={index} onClick={() => handleModalRegister()}>
                  {skill}
                </SkillTag>
              ))}
            </TrendingSkills>
            <Button onClick={handleModalRegister}>
              Explorez les profils des Freelances dev
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires skill={'Angular'}/>
        

        <Section>
          <SectionContent>
            <SectionTitle>
              <Briefcase />
              Projets Freelances developpeurs web partagés
            </SectionTitle>
            <SectionSubtitle>
              Découvrez les dernières opportunités pour les experts du web
            </SectionSubtitle>
            <JobsGrid>
              {jobs.map((job, index) => (
                <JobCard key={index} onClick={handleModalRegister}  >
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
                      <JobSkill key={skillIndex} onClick={() => handleModalRegister()}>
                        {skill}
                      </JobSkill>
                    ))}
                  </JobSkills>
                </JobCard>
              ))}
            </JobsGrid>
            <ButtonContainer>
              <SeeMoreButton onClick={handleModalRegister}>
                Voir Plus de Projets
                <ArrowDown size={20} />
              </SeeMoreButton>
            </ButtonContainer>
          </SectionContent>
        </Section>

        <StatsSection>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Notre Réseau en Chiffres
            </SectionTitle>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard key={index}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </SectionContent>
        </StatsSection>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Store />
              Comment ça Marche
            </SectionTitle>
            <SectionSubtitle>
              Trouvez et collaborez avec des experts de developpement web en toute simplicité
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

        <ShowcaseSection ref={showcaseRef}>
          <SectionContent>
            <SectionTitle>
              <Code />
              Nos Talents 
            </SectionTitle>
            <SectionSubtitle>
              Des experts vérifiés pour tous vos besoins e-commerce
            </SectionSubtitle>
            <ShowcaseGrid>
              {showcaseItems.map((item, index) => (
                <ShowcaseCard key={index}>
                  <ShowcaseTitle>{item.title}</ShowcaseTitle>
                  <ShowcaseDescription>{item.description}</ShowcaseDescription>
                  <FeatureList>
                    {item.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>
                        <Check size={16} />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </ShowcaseCard>
              ))}
            </ShowcaseGrid>
          </SectionContent>
        </ShowcaseSection>

        <MarketplaceFeatureSection>
          <SectionContent>
            <SectionTitle>
              <Shield />
              Pourquoi Choisir Notre Plateforme
            </SectionTitle>
            <SectionSubtitle>
              Une plateforme sécurisée pour vos projets Shopify
            </SectionSubtitle>
            <ComparisonTable>
              <Table>
                <thead>
                  <tr>
                    <Th>Fonctionnalité</Th>
                    <Th>ItGalaxy</Th>
                    <Th>Autres Plateformes</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>Vérification des talents</Td>
                    <Td>✓ Processus complet</Td>
                    <Td>Basique</Td>
                  </tr>
                  <tr>
                    <Td>Protection des paiements</Td>
                    <Td>✓ Garantie totale</Td>
                    <Td>Variable</Td>
                  </tr>
                  <tr>
                    <Td>Support dédié</Td>
                    <Td>✓ 24/7 en français</Td>
                    <Td>Limité</Td>
                  </tr>
                  <tr>
                    <Td>Matching personnalisé</Td>
                    <Td>✓ Algorithme avancé</Td>
                    <Td>Manuel</Td>
                  </tr>
                </tbody>
              </Table>
            </ComparisonTable>
          </SectionContent>
        </MarketplaceFeatureSection>

        <PricingSection>
          <SectionContent>
            <SectionTitle>
              <Banknote />
              Tarifs Indicatifs
            </SectionTitle>
            <SectionSubtitle>
              Des tarifs transparents adaptés à vos besoins
            </SectionSubtitle>
            <PricingGrid>
              {pricingTiers.map((tier, index) => (
                <PricingCard key={index}>
                  <ShowcaseTitle>{tier.title}</ShowcaseTitle>
                  <PriceRange>{tier.range}</PriceRange>
                  <PriceDescription>{tier.description}</PriceDescription>
                  <Button onClick={handleModalRegister}>
                    Trouver un Expert
                    <ChevronRight size={20} />
                  </Button>
                </PricingCard>
              ))}
            </PricingGrid>
          </SectionContent>
        </PricingSection>

      

        <MetricsSection>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Indicateurs de Performance
            </SectionTitle>
            <SectionSubtitle>
              Des résultats mesurables pour votre boutique en ligne
            </SectionSubtitle>
            <MetricsGrid>
              {performanceMetrics.map((metric, index) => (
                <MetricCard key={index}>
                  <MetricIcon>{metric.icon}</MetricIcon>
                  <ShowcaseTitle>{metric.title}</ShowcaseTitle>
                  <StatNumber>{metric.value}</StatNumber>
                  <StatLabel>{metric.description}</StatLabel>
                </MetricCard>
              ))}
            </MetricsGrid>
            <ROICalculator>
              <ShowcaseTitle>Calculateur de ROI</ShowcaseTitle>
              <ShowcaseDescription>
                Estimez le potentiel de croissance de votre boutique Shopify avec notre calculateur
              </ShowcaseDescription>
              <CalculatorForm>
                <CalculatorGroup>
                  <CalculatorLabel>CA Mensuel (€)</CalculatorLabel>
                  <CalculatorInput
                    type="number"
                    name="revenue"
                    value={roiInputs.revenue}
                    onChange={handleRoiInputChange}
                    placeholder="Ex: 50000"
                    min="0"
                  />
                </CalculatorGroup>
                <CalculatorGroup>
                  <CalculatorLabel>Commandes / Mois</CalculatorLabel>
                  <CalculatorInput
                    type="number"
                    name="orders"
                    value={roiInputs.orders}
                    onChange={handleRoiInputChange}
                    placeholder="Ex: 500"
                    min="0"
                  />
                </CalculatorGroup>
                <CalculatorGroup>
                  <CalculatorLabel>Panier Moyen (€)</CalculatorLabel>
                  <CalculatorInput
                    type="number"
                    name="averageOrder"
                    value={roiInputs.averageOrder}
                    onChange={handleRoiInputChange}
                    placeholder="Ex: 100"
                    min="0"
                  />
                </CalculatorGroup>
                <CalculatorGroup>
                  <CalculatorLabel>Taux de Conversion (%)</CalculatorLabel>
                  <CalculatorInput
                    type="number"
                    name="conversionRate"
                    value={roiInputs.conversionRate}
                    onChange={handleRoiInputChange}
                    placeholder="Ex: 2.5"
                    step="0.1"
                    min="0"
                  />
                </CalculatorGroup>
                <CalculatorGroup>
                  <CalculatorLabel>Visiteurs / Mois</CalculatorLabel>
                  <CalculatorInput
                    type="number"
                    name="trafficMonthly"
                    value={roiInputs.trafficMonthly}
                    onChange={handleRoiInputChange}
                    placeholder="Ex: 20000"
                    min="0"
                  />
                </CalculatorGroup>
              </CalculatorForm>
              <CalculatorResults>
                <ResultCard>
                  <ResultLabel>CA Mensuel Potentiel</ResultLabel>
                  <ResultValue>{roiResults.potentialRevenue}€</ResultValue>
                </ResultCard>
                <ResultCard>
                  <ResultLabel>Augmentation Mensuelle</ResultLabel>
                  <ResultValue>{roiResults.revenueIncrease}€</ResultValue>
                </ResultCard>
                <ResultCard>
                  <ResultLabel>Croissance Potentielle</ResultLabel>
                  <ResultValue>{roiResults.roiPercentage}%</ResultValue>
                </ResultCard>
                <ResultCard>
                  <ResultLabel>Mois avant ROI positif</ResultLabel>
                  <ResultValue>{roiResults.monthsToPositive}</ResultValue>
                </ResultCard>
              </CalculatorResults>
            </ROICalculator>

            <FAQSection>
          <SectionContent>
            <SectionTitle>
              <HelpCircle />
              Questions Fréquentes
            </SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur notre plateforme
            </SectionSubtitle>
            <FAQGrid>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <FAQQuestion isOpen={openFAQ === index}>
                    {faq.question}
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQ === index}>
                    {faq.answer}
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQGrid>
          </SectionContent>
        </FAQSection> 

        </SectionContent>
        </MetricsSection>
      </MainContainer>
      <Offers />
      <FooterHome page={"shopify"} />
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

export default SiteShopify;