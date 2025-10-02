import React from 'react';
import { Code2, Brackets, Minus,ChevronLeft, Eye, Plus, ChevronRight, Braces, Code, DollarSign, Clock, ChevronDown, Layout, BookOpenText, Rows as Browser, Palette, Zap, Globe, Monitor, Smartphone, Box } from 'lucide-react';
import styled, { createGlobalStyle } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import { useState } from "react";
import { Helmet } from 'react-helmet';
import ItGalaxyAsService from '../ItGalaxyAsService/ItGalaxyAsService';
import Offers from './Offres';
import CardsPrestataires from './CardsPrestataires';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    color: #f3f4f6;
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const Container = styled.div`
  background: black;
  color: #f3f4f6;
   margin-bottom: 10%;

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardFig = styled.div`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 12rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
  
  ${CardFig}:hover & {
    opacity: 1;
  }
`;

const IconButton = styled.button`
  padding: 0.5rem;
  background: white;
  border: none;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  cursor: pointer;
  
  &:hover {
    background: #f1f5f9;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardFigTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #111827;
`;

const CardDescription = styled.p`
  color: #6b7280;
  margin: 0 0 1rem 0;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceTag = styled.span`
  color: #4f46e5;
  font-size: 0.875rem;
  font-weight: 500;
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    border: 2px solid white;
    margin-right: -0.75rem;
  }
`;


const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #111827, #1e3a8a);
  padding: 0 1rem;
`;

const HeroContent = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #60a5fa, #a855f7, #60a5fa);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #bfdbfe;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #1d4ed8;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const Section = styled.section`
  padding: 5rem 1rem;
  background: ${props => props.dark ? 'black' : '#111827'};
`;

const SectionContent = styled.div`
  max-width: 90rem;
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

  svg {
    width: 2rem;
    height: 2rem;
    color: #60a5fa;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillCard = styled.div`
  background: #1f2937;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #374151;
  transition: border-color 0.3s;

  &:hover {
    border-color: #3b82f6;
    cursor: pointer;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #93c5fd;
`;

const SkillCategory = styled.span`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const ProgressBar = styled.div`
  height: 0.5rem;
  background: #374151;
  border-radius: 9999px;
  overflow: hidden;
  flex-grow: 1;
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



const ProgressFill = styled.div`
  height: 100%;
    background: linear-gradient(90deg, #60a5fa, #a855f7);

  border-radius: 9999px;
  width: ${props =>
    props.level === 'Expert' ? '100%' :
      props.level === 'Avancé' ? '80%' :
        '60%'
  };
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  width: 100%;
  margin-left: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: #1f2937;
  border-radius: 0.75rem;
  overflow: hidden;
  width: 500px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #374151;
  transition: all 0.3s;
  &:hover {
    border-color: #3b82f6;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(17, 24, 39, 0.6), transparent);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #93c5fd;
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
  margin-bottom: 3rem;
  height: 3rem;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 10px;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  background: #1e3a8a;
  color: #bfdbfe;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #60a5fa;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  
  &:hover {
    color: #93c5fd;
  }
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 72rem;
  margin: 10%;
`;

const EducationCard = styled.div`
  background: #1f2937;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #374151;
  cursor: pointer;

    &:hover {
    border: 1px solid #93c5fd;
  }
`;

const EducationHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const EducationTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #93c5fd;
`;

const EducationYear = styled.span`
  color: #60a5fa;
`;

const EducationSchool = styled.p`
  color: #d1d5db;
  margin-bottom: 0.5rem;
`;

const EducationDescription = styled.p`
  color: #9ca3af;
`;

const ContractsSection = styled(Section)`
  background: #111827;
`;

const ContractsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContractCard = styled.div`
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    border-color: #3b82f6;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
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
      rgba(59, 130, 246, 0.1),
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
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
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
        return 'rgba(59, 130, 246, 0.2)';
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
        return '#3b82f6';
    }
  }};
`;

const ContractTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #93c5fd;
  margin: 0.5rem 0;
`;

const ContractDescription = styled.p`
  color: #d1d5db;
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
  border-top: 1px solid #374151;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #60a5fa;
  font-weight: 600;
  font-size: 0.875rem;
  grap: 20px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;
const ProjectPrice = styled.div`
  font-size: 1.2rem; // Set an appropriate font size
  font-weight: bold; // Make the price stand out
  color: #60a5fa; // Change color to suit your design (optional)
  margin-top: 1rem; // Add some space above
`;


const ShowMoreButton = styled(Button)`
  margin: 3rem auto 0;
  background: transparent;
  border: 1px solid #3b82f6;
  
  &:hover {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;


function Frontend() {

  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreContracts, setShowMoreContracts] = useState(false);
  const [openFAQs, setOpenFAQs] = useState({});
  const itemsPerPage = 6; // Change this number based on how many designs you want to show per page
  const [currentPage, setCurrentPage] = useState(0);
  
  const archi = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/app-archi.png`;
  const design1 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design1.png`;
  const design2 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design2.png`;
  const design3 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design3.png`;
  const design4 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design4.png`;
  const design5 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design5.png`;
  const design6 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design6.png`;
  const design7 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design7.png`;
  const design8 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design8.png`;
  const design9 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design9.png`;
  const design10 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design10.png`;
  const design11 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design11.png`;
  const design12 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design12.png`;


  
    const designs = [
      {
        id: 1,
        title: 'Coffee Shop Mobile App Design',
        description: 'Get started with App Design effortlessly using our premade design for Coffee Shop App.',
        image: design1,
        price: 'Free',
        slug: 'https://www.figma.com/community/file/1116708627748807811',
        contributors: [
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
      {
        id: 2,
        title: 'Open Fashion - Free eCommerce UI Kit',
        description: 'Free UI Kit with elegant and modern style will help you to quickly create your own design.',
        image: design2,
        price: 'Free',
        slug: 'https://www.figma.com/community/file/1055151140671808467',
        contributors: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
      {
        id: 3,
        title: 'Food Delivery App',
        description: 'Hello, This is an Online Food Delivery iOS UI Kit with 50+ neatly designed screens and 10 Chef Screens.',
        image: design3,
        price: 'Free',
        slug: 'https://www.figma.com/community/file/1231521889522325040',
        contributors: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      } ,
      {
        id: 4,
        title: 'Shoppe - eCommerce Clothing Fashion Store Multi',
        description: 'Take a look at our ui design exploration about eCommerce Clothing Store.',
        image: design4,
        price: 'Free',
        slug: 'https://www.figma.com/community/file/1321464360558173342',
        contributors: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
      {
        id: 5,
        title: 'Tab Bar & Navigation Bar',
        description: 'Tab Bar & Navigation Bar',
        image: design5,
        price: 'Free',
        slug: 'https://www.figma.com/community/file/1047431977310739837',
        contributors: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
      {
        id: 6,
        title: 'Fitness App UI Kit for Gym Workout App Fitness ',
        description: 'Modern e-commerce platform design system',
        image: design6,
        slug: 'https://www.figma.com/community/file/1356281690251535631',
        price: 'Free',
        contributors: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      } ,
      {
        id: 5,
        title: 'Mobile E-Learning App Design',
        description: 'Get started with App Design effortlessly using our premade design for E-Learning App.',
        image: design7,
        slug: 'https://www.figma.com/community/file/1116625179283253250',
        price: 'Free',
        contributors: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
      {
        id: 3,
        title: 'Aspen Travel App Exploration- Mobile App Design',
        description: 'This is my Exploration for Travel App. How about you ?',
        image: design8,
        price: 'Free',
        slug: 'https://www.figma.com/community/file/1091615514005406765',
        contributors: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
      {
        id: 2,
        title: 'Food POS Dark - Tablet Device',
        description: 'This design about the food POS with the dark mode',
        image: design9,
        slug: 'https://www.figma.com/community/file/944188956363619079',
        price: 'Free',
        contributors: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
      {
        id: 4,
        title: 'Food Delivery App UI with Illustrations',
        description: 'Create your next delivery mobile app with this free kit full of customizable components and styles. What\'s best? It features Blush illustrations from Wavy Buddies by Susana Salas.',
        image: design10,
        price: 'Free',
        slug: 'https://www.figma.com/community/file/989103752998044165',
        contributors: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      } ,
      {
        id: 5,
        title: 'Hoteliq - Booking Hotel App Design',
        description: 'Get started with App Design effortlessly using our premade design for Hotel Booking App',
        image: design11,
        slug: 'https://www.figma.com/community/file/1169928945460966636',
        price: 'Free',
        contributors: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
      {
        id: 5,
        title: 'Ecommerce App',
        description: 'Here\'s a Ecommerce App Design 🤩😍.',
        image: design12,
        price: 'Free',
        slug: 'https://www.figma.com/community/file/1091083465902099133',
        contributors: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        ]
      },
    ];
  

  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handelFig = (url) => {
    window.location.href = `${url}`;
  }


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

  const handelSearchProfils = (skill) => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/prestataires/skill/${skill}`;
  };

  const handelSearchProfilsWeb = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/prestataires/job/DEVELOPER_FRONTEND`;
  };


  const handelFormation = (slug) => {
    window.location.href = `${slug}`;
  };

  const totalPages = Math.ceil(designs.length / itemsPerPage);
  const currentDesigns = designs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };


  const initialProjectCount = 12; // Number of projects to show initially
  const initialContractCount = 12; // Number of contracts to show initially

  const faqs = [
    {
      question: "Qu'est-ce que le recrutement freelance info ?",
      answer: "Le recrutement freelance info désigne le processus par lequel des entreprises embauchent des travailleurs indépendants pour des projets spécifiques, offrant une flexibilité et une expertise spécialisée sans engagement à long terme."
    },
    {
      question: "Comment recruter un freelance info ?",
      answer: "Pour recruter un freelance info, vous pouvez utiliser des plateformes spécialisées telles que ItGalaxy, Upwork ou Freelancer, où vous pouvez publier des projets et évaluer les candidatures de freelances qualifiés selon vos besoins."
    },
    {
      question: "Quels types de projets sont souvent confiés à des freelances info ?",
      answer: "Les freelances sont souvent engagés pour des projets de développement web, de design graphique, de création d'applications, ainsi que pour des missions de rédaction, de marketing digital, et plus encore."
    },
    {
      question: "Quels sont les avantages de travailler avec une agence de développement web ?",
      answer: "Une agence de développement web offre une équipe d'experts, une approche collaborative et l'accès à un ensemble de compétences diversifiées, garantissant la qualité et la cohérence des projets livrés."
    },
    {
      question: "Comment choisir la bonne agence de développement mobile ?",
      answer: "Pour choisir une agence de développement mobile, examinez son portfolio, ses références, ses certifications, ainsi que ses expériences antérieures sur des projets similaires à vos besoins."
    },
    {
      question: "Quels sont les chiffres clés à considérer lors de la recherche d'un freelance info ?",
      answer: "Lors de la recherche d'un freelance info, considérez les tarifs horaires, l'expérience dans le domaine spécifique, les avis des clients précédents et la capacité à respecter les délais."
    },
    {
      question: "Les freelances doivent-ils signer un contrat ?",
      answer: "Oui, il est fortement recommandé de signer un contrat avec un freelance info pour définir les termes du projet, les responsabilités, les délais et les conditions de paiement, assurant ainsi une protection pour les deux parties."
    },
    {
      question: "Quelles compétences rechercher chez un développeur freelance info ?",
      answer: "Recherchez des compétences techniques spécifiques telles que la maîtrise de langages de programmation (comme JavaScript, PHP, etc.), la connaissance des frameworks, des outils de gestion de projet et des compétences en communication."
    },
    {
      question: "Quelles sont les meilleures plateformes pour trouver un freelance info ?",
      answer: "Les meilleures plateformes pour trouver un freelance info incluent ItGalaxy, Upwork, Freelancer, et Codeur, qui offrent divers projets et une large base de freelances qualifiés."
    },
    {
      question: "Comment les agences de développement peuvent-elles aider une startup ?",
      answer: "Les agences de développement peuvent apporter une expertise précieuse dès le début, en aidant à concevoir et à développer des produits de qualité, en assurant des validations de marché et en accélérant le processus de mise sur le marché."
    },
    {
      question: "Est-ce que les freelances peuvent travailler à temps plein pour une entreprise ?",
      answer: "Oui, de nombreux freelances choisissent de travailler à temps plein pour une ou plusieurs entreprises, mais ils conservent la flexibilité de choisir leurs projets et leurs horaires."
    },
    {
      question: "Comment évaluer le tarif d'un freelance info ?",
      answer: "Évaluez le tarif d'un freelance en vous basant sur son expérience, son expertise, le marché actuel, et la complexité du projet. Les tarifs peuvent varier considérablement en fonction de ces facteurs."
    },
    {
      question: "Quel est le rôle d'une agence informatique ?",
      answer: "Une agence informatique conçoit, développe et maintient des solutions technologiques pour ses clients, allant de la création de sites internet à des systèmes plus complexes comme des applications mobiles et des logiciels sur mesure."
    },
    {
      question: "Qu'est-ce qu'une mission freelance info ?",
      answer: "Une mission freelance est un projet temporaire pour lequel un freelance est engagé, généralement avec des objectifs et des échéances définis. Les missions peuvent varier en durée et en complexité."
    },
    {
      question: "Comment négocier avec un freelance pour obtenir un meilleur tarif ?",
      answer: "Pour négocier un meilleur tarif avec un freelance info , soyez transparent sur votre budget, discutez de la portée du projet et explorez des solutions gagnant-gagnant, comme des engagements à long terme ou des projets récurrents."
    },
    {
      question: "Est-ce que le prix d'un développeur freelance info varie selon son expérience ?",
      answer: "Oui, généralement, le prix d'un développeur freelance info augmente avec son expérience et ses compétences. Les développeurs plus expérimentés peuvent demander des tarifs plus élevés en raison de leur expertise et de leur capacité à livrer des résultats de qualité."
    },
    {
      question: "Quelles sont les différences entre un freelance info et une agence de développement ?",
      answer: "Un freelance est un travailleur indépendant qui gère ses propres projets, tandis qu'une agence de développement est une entité composée de plusieurs professionnels qui travaillent ensemble pour offrir une gamme complète de services. Les agences peuvent souvent fournir une expertise plus diversifiée et des ressources supplémentaires."
    },
    {
      question: "Comment établir une relation de travail efficace avec un freelance info ?",
      answer: "Pour établir une relation efficace avec un freelance info , il est essentiel de communiquer clairement vos attentes, de fixer des délais réalistes et de donner un retour régulier sur le travail effectué. La transparence et la confiance sont cruciales pour une collaboration réussie."
    },
    {
      question: "Quels secteurs peuvent bénéficier du recours à des freelances info ?",
      answer: "De nombreux secteurs bénéficient du recours à des freelances info , notamment le développement web, le design graphique, le marketing digital, la rédaction, le conseil en informatique, et bien d'autres domaines nécessitant une expertise spécialisée."
    },
    {
      question: "Un freelance peut-il travailler pour plusieurs clients en même temps ?",
      answer: "Oui, un freelance peut travailler pour plusieurs clients en même temps, tant qu'il peut gérer efficacement les délais et les exigences de chaque projet. Cette flexibilité est l'un des principaux avantages du travail en freelance."
    },
    {
      question: "Quels sont les inconvénients de travailler avec un freelance info ?",
      answer: "Les inconvénients peuvent inclure un manque de disponibilité si le freelance travaille déjà sur d'autres projets, des difficultés dans la communication, ou encore l'absence de garantie quant à la qualité du travail fourni car les freelances n'ont pas toujours des standards de qualité uniformes."
    },
    {
      question: "Comment garantir la qualité du travail d'un freelance info ?",
      answer: "Pour garantir la qualité du travail d'un freelance info , il est recommandé de vérifier ses références et son portfolio, de définir des critères clairs pour le projet, et d'instaurer des phases de révisions et des délais intermédiaires afin d'évaluer le progrès."
    },
    {
      question: "Quels documents sont nécessaires lors de l'embauche d'un freelance info ?",
      answer: "Il est conseillé d'utiliser un contrat de freelance info qui définit la portée du travail, les délais, la rémunération, ainsi que des clauses de confidentialité et de non-concurrence si nécessaire, pour protéger les intérêts des deux parties."
    },
    {
      question: "Les freelances ont-ils droit à des congés payés ?",
      answer: "Non, les freelances info sont des travailleurs indépendants et ne bénéficient pas de congés payés. Ils doivent donc gérer leur emploi du temps de manière à inclure des périodes de repos sans nuire à leur revenu."
    },
    {
      question: "Comment évaluer le succès d'un projet mené par un freelance info ?",
      answer: "Pour évaluer le succès d'un projet mené par un freelance, définissez des indicateurs de performance clairs dès le départ, tels que le respect des délais, la qualité du travail, et la satisfaction du client. Un retour structuré après le projet peut aussi aider à identifier les forces et les points à améliorer."
    },
    {
      question: "Quels sont les tarifs moyens pour un freelance développeur info ?",
      answer: "Les tarifs moyens pour un freelance info développeur peuvent varier considérablement en fonction de l'expérience, des compétences spécifiques et de la complexité du projet. En général, les tarifs horaires peuvent aller de 30€ à 150€ ou plus, selon les spécialisations."
    }
  ];


  const skills = [
    { name: 'React', level: 'Avancé', category: 'Web', freelancers: 1250, avgRate: 85 },
    { name: 'TypeScript', level: 'Avancé', category: 'Web', freelancers: 980, avgRate: 80 },
    { name: 'Next.js', level: 'Avancé', category: 'Web', freelancers: 850, avgRate: 90 },
    { name: 'Tailwind', level: 'Avancé', category: 'Web', freelancers: 720, avgRate: 75 },
    { name: 'JavaScript', level: 'Expert', category: 'Framework', freelancers: 2100, avgRate: 70 },
    { name: 'Vue.js', level: 'Intermédiaire', category: 'Web', freelancers: 680, avgRate: 75 },
    { name: 'Node.js', level: 'Avancé', category: 'Web', freelancers: 950, avgRate: 85 },
    { name: 'Alpine', level: 'Intermédiaire', category: 'Framework', freelancers: 320, avgRate: 65 },
    { name: 'Marko', level: 'Avancé', category: 'Web', freelancers: 180, avgRate: 70 },
    { name: 'Mithril', level: 'Avancé', category: 'Web', freelancers: 150, avgRate: 65 },
    { name: 'Qwik', level: 'Intermédiaire', category: 'Web', freelancers: 280, avgRate: 80 },
    { name: 'Angular', level: 'Intermédiaire', category: 'Web', freelancers: 890, avgRate: 80 },
    { name: 'Solid.js', level: 'Avancé', category: 'Web', freelancers: 420, avgRate: 85 },
    { name: 'Svelte', level: 'Avancé', category: 'Framework', freelancers: 580, avgRate: 80 },
    { name: 'Webpack', level: 'Intermédiaire', category: 'Framework', freelancers: 450, avgRate: 70 },
    { name: 'Lit', level: 'Intermédiaire', category: 'Framework', freelancers: 290, avgRate: 75 }
  ];

  const projects = [
    {
      title: 'Recherche freelance création site e-commerce',
      description: "Bonjour, Je suis à la recherche d'un freelance développeur web spécialisé dans la création de sites e-commerce afin de développer une boutique en ligne. Mon objectif est de créer un site complet, y compris la conception, les aspects visuels (logo, couleurs, police, etc.).",
      tech: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Figma', 'SEO', 'Landing Page'],
      price: 25000 // Example price
    },
    {
      title: 'Créateur de site Web et concepteur graphique WordPress',
      description: 'Vous êtes un développeur freelance expérimenté avec un sens aigu du design ? Si vous aimez combiner compétences techniques et créativité pour créer des sites Web exceptionnels sur WordPress, nous voulons vous entendre !',
      tech: ['Php', 'JavaScript', 'HTML', 'CSS', 'Figma', 'ecommerce', 'SEO'],
      price: 18000 // Example price
    },
    {
      title: 'Optimisation de la vitesse du site Web',
      description: "Notre site web vient d'être déployé mais a besoin d'améliorations. Si vous êtes un expert en optimisation de sites, nous voulons travailler avec un développeur freelance pour réduire notre temps de chargement à 2-3 secondes.",
      tech: ['WordPress', 'Page Speed Optimization', 'JavaScript', 'CSS', 'Image Editing', 'SEO'],
      price: 12000 // Example price
    },
    {
      title: "Concepteur Web freelance pour site de nettoyage de conduits d'air",
      description: "Nous recherchons un freelance pour créer un site Web de nettoyage de conduits d'air. Le design doit être professionnel et axé sur la conversion, similaire à A1 Garage.",
      tech: ['Angular', 'WordPress', 'HTML', 'CSS', 'PHP', 'Web Design'],
      price: 22000 // Example price
    },
    {
      title: 'Développeur Laravel pour améliorer un site Web de livraison de pizza',
      description: "Nous avons besoin d'un développeur freelance pour modifier notre site Web existant de manière à permettre une personnalisation avancée des pizzas.",
      tech: ['Laravel', 'PHP', 'JavaScript', 'Vue.js', 'MongoDB', 'React'],
      price: 32000 // Example price
    },
    {
      title: "Résoudre les problèmes techniques sur le site Web actuel",
      description: "Nous recherchons un expert freelance pour adresser des problèmes techniques sur notre site WordPress, y compris des liens qui ne fonctionnent pas sur mobile.",
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'Troubleshooting'],
      price: 15000 // Example price
    },
    {
      title: "Tâches Wordpress pour l'éditeur de contenu",
      description: "Recherche d'un freelance WordPress pour modifier le pied de page de notre site. Des identifiants d'accès seront fournis.",
      tech: ['WordPress', 'HTML', 'CSS', 'Graphic Design'],
      price: 9000 // Example price
    },
    {
      title: 'Configuration de landing page avec Next.js et Tailwind CSS',
      description: "Un développeur low-code pour mettre en place une landing page simple avec intégration Calendly. Utilisation d'un modèle préexistant avec Next.js.",
      tech: ['Next.js', 'Vercel', 'Calendly', 'Tailwind'],
      price: 15000 // Example price
    },
    {
      title: "Développement de la page d'accueil Bootstrap",
      description: "Nous recherchons un développement front-end qualifié pour créer une page d'accueil visuellement attrayante en utilisant Bootstrap.",
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      price: 13000 // Example price
    },
    {
      title: 'Développeur Web pour conversion de Figma en site Web',
      description: "Nous recherchons un développeur front-end expérimenté pour convertir notre conception Figma en un site Web réactif utilisant HTML et Bootstrap.",
      tech: ['HTML', 'WordPress', 'CSS', 'Web Development'],
      price: 22000 // Example price
    },
    {
      title: 'Html / Css',
      description: "Plusieurs tâches seront proposées, mais pour cette première, j'aimerais faire 3 captures d'écran de mon logiciel.",
      tech: ['HTML', 'CSS', 'HTML5', 'JavaScript', 'Bootstrap'],
      price: 8000 // Example price
    },
    {
      title: 'Javascript chart',
      description: "Je recherche un développeur JavaScript expérimenté pour intégrer un diagramme de Gantt dans mon application Web Next.js.",
      tech: ['Node.js', 'Next.js', 'JavaScript', 'jQuery', 'D3.js', 'Chart.js', 'Data Visualization', 'React'],
      price: 35000 // Example price
    },
    {
      title: 'FIGMA to BOOTSTRAP',
      description: 'Nous avons FIGMA complet, environ 8 pages. Il faut le convertir en bootstrap - besoin dans les 24 heures.',
      tech: ['Website', 'CSS 3', 'Sass', 'JavaScript', '.NET Framework', 'Other', 'Bootstrap', 'CSS', 'Figma', 'HTML5'],
      price: 30000 // Example price
    },
    {
      title: 'Migrer notre entreprise Onepager vers Next.js',
      description: "Nous avons besoin d'un développeur pour migrer notre site vers Next.js avec un contenu fourni à partir de fichiers Markdown.",
      tech: ['React', 'JavaScript', 'Web Development', 'HTML', 'CSS', 'NextJS'],
      price: 27000 // Example price
    },
    {
      title: 'Développeur JavaScript pour configurer une extension Chrome',
      description: "Je souhaite créer une extension Chrome pour gérer des invites de chat pour ChatGPT.",
      tech: ['Google Chrome Extension', 'JavaScript', 'HTML', 'CSS'],
      price: 22000 // Example price
    },
    {
      title: 'Convertir un site WordPress en HTML sans accès',
      description: "Recherche d'un développeur pour aider à convertir un site WordPress existant en HTML statique.",
      tech: ['WordPress', 'PHP', 'HTML', 'Web Development', 'CSS'],
      price: 25000 // Example price
    },
    {
      title: 'Personnaliser la bibliothèque Blockly',
      description: "Nous recherchons un développeur JavaScript pour personnaliser la bibliothèque Blockly pour notre plateforme d'apprentissage.",
      tech: ['CSS', 'TypeScript', 'JavaScript', 'HTML'],
      price: 22000 // Example price
    },
    {
      title: 'Développeur front-end JS',
      description: "Développement de formulaires CRUD pour les détails des utilisateurs et amélioration de l'éditeur de propositions.",
      tech: ['CSS', 'TypeScript', 'JavaScript', 'HTML'],
      price: 16000 // Example price
    },
    {
      title: 'Conception de jeux avec Next.js',
      description: "Recherche d'un développeur front-end pour créer un client de jeu de dés.",
      tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      price: 25000 // Example price
    },
    {
      title: 'Développeur web Angular pour un projet de mise en page dynamique',
      description: "Création de mises en page dynamiques pour des applications Web avec Angular.",
      tech: ['AngularJS', 'CSS', 'JavaScript', 'HTML'],
      price: 27000 // Example price
    },
    {
      title: 'Application dynamique pour la gestion des tâches',
      description: 'Je cherche à créer une application Web avec un back-end avec Node et un front-end avec React.',
      tech: ['Node.js', 'Next.js', 'React', 'TypeScript', 'JavaScript', 'Redux', 'PostgreSQL'],
      price: 40000 // Example price
    },
    {
      title: 'Créer un site Web similaire à photopea.com',
      description: "Besoin d'un site fonctionnant uniquement côté client, similaire à photopea, en JavaScript.",
      tech: ['CSS', 'CSS 3', 'JavaScript', 'HTML', 'HTML5'],
      price: 50000 // Example price
    },
    {
      title: "Créez un site Web réactif avec Hugo",
      description: "Développement d'un site réactif utilisant Hugo et idéalement Tailwind CSS.",
      tech: ['Web Development', 'Hugo', 'Web Design', 'Responsive Design'],
      price: 32000 // Example price
    }
  ];
  

  const education = [
    {
      degree: 'Formation Alpine',
      description: "Cette formation permet aux débutants de se familiariser avec le milieu alpin et d'acquérir les compétences nécessaires pour le développement web.",
      slug: 'https://formations-developpeur-frontend.itgalaxy.io/alpine-vs-aurelia1-comparison',
    },
    {
      degree: 'Formation Aurelia2',
      description: "Formation en développement d'applications web réactives avec Aurelia.",
      slug: 'https://formations-developpeur-frontend.itgalaxy.io/alpine-vs-aurelia2-comparison',
    },
    {
      degree: 'Formation Intensive en React',
      description: "Prépare les participants à devenir des développeurs React compétents.",
      slug: 'https://formations-developpeur-frontend.itgalaxy.io/react-vs-ember-octane-comparison',
    },
    {
      degree: 'Formation Intensive en Qwik',
      description: "Formation complète pour développer des applications web performantes avec Qwik.",
      slug: 'https://formations-developpeur-frontend.itgalaxy.io/vue2-vs-qwik-comparison',
    },
    {
      degree: 'Formation en Solid.js',
      description: "Formation sur les bibliothèques modernes Lit et Solid JS pour le développement d'interfaces utilisateur.",
      slug: 'https://formations-developpeur-frontend.itgalaxy.io/react-vs-solid-comparison',
    },
    {
      degree: 'Formation complète Angular',
      description: "Formation pour développer des applications web avec Angular, adaptée aux débutants.",
      slug: 'https://formations-developpeur-frontend.itgalaxy.io/react-vs-angular-comparison',
    },
    {
      degree: 'Formation complète Marko',
      description: "Formation pour comparer Marko et Lit pour le développement front-end.",
      slug: 'https://formations-developpeur-frontend.itgalaxy.io/solidjs-vs-marko-comparison',
    }
  ];

  const contracts = [
    {
      icon: <Code size={20} />,
      title: "Développeur Web Full Stack",
      description: "Nous recherchons un développeur Full-Stack pour diriger le développement technique de notre plateforme éducative axée sur la crypto et le trading.",
      difficulty: "Avancé",
      skills: ["React Native", "TypeScript", "Redux", "Firebase"],
      rate: "3600€",
      duration: "2 mois"
    },
    {
      icon: <Layout size={20} />,
      title: "Développeur Fullstack pour plateforme de services de bien-être",
      description: "Développeur Fullstack recherché pour finaliser notre plateforme de services de bien-être, facilitant la recherche et la réservation d'expériences de relaxation.",
      difficulty: "Intermédiaire",
      skills: ["React", "Node.js", "MongoDB", "WebSocket", "Jira", "Gitlab"],
      rate: "1550€",
      duration: "1 mois"
    },
    {
      icon: <Browser size={20} />,
      title: "Développeur de site Web",
      description: "Recherche d'un développeur web expérimenté pour créer un site moderne, réactif et convivial.",
      difficulty: "Avancé",
      skills: ["Next.js", "React", "NodeJs", "Git", "Bitbucket", "Stripe", "TailwindCSS", "PostgreSQL"],
      rate: "700€",
      duration: "2 semaines"
    },
    {
      icon: <Palette size={20} />,
      title: "Développeur front-end Next.js pour implémentation de design Figma",
      description: "Besoin d'un expert front-end pour appliquer une conception Figma à une application Next.js existante.",
      difficulty: "Intermédiaire",
      skills: ["React", "Figma", "Styled Components", "MySQL", "Bolt.diy"],
      rate: "3600€",
      duration: "2 mois"
    },
    {
      icon: <Zap size={20} />,
      title: "Développeur Angular pour création d'application Web",
      description: "Recherche d'un développeur Angular pour créer une application Web moderne et réactive avec un tableau de bord dynamique.",
      difficulty: "Avancé",
      skills: ["Angular", "HTML", "CSS", "JavaScript", "PhotoShop", "Figma", "Postman"],
      rate: "5650€",
      duration: "5 mois"
    },
    {
      icon: <Globe size={20} />,
      title: "Développeur Fullstack pour créer une plateforme de collaboration",
      description: "Nous recherchons un développeur pour créer VovantSpace, une plateforme de collaboration en ligne.",
      difficulty: "Avancé",
      skills: ["React.js", "JavaScript (ES6+)", "TailwindCSS", "HTML", "CSS", "Stripe", "PayPal API", "JWT", "MySQL"],
      rate: "1750€",
      duration: "1 mois"
    },
    {
      icon: <Monitor size={20} />,
      title: "Développeur front-end - HTML, CSS, JS",
      description: "Besoin d'un développeur pour convertir des conceptions Figma en pages Web utilisables et réactives.",
      difficulty: "Intermédiaire",
      skills: ["HTML", "CSS", "JS", "Figma"],
      rate: "600€",
      duration: "2 semaines"
    },
    {
      icon: <Smartphone size={20} />,
      title: "Développement d'interface graphique interactive dans une application Flask",
      description: "Recherche d'un développeur front-end pour améliorer l'interface utilisateur de notre application basée sur Flask.",
      difficulty: "Intermédiaire",
      skills: ["JavaScript", "HTML", "CSS"],
      rate: "550€",
      duration: "3 jours"
    },
    {
      icon: <Box size={20} />,
      title: "Implémenter HTML et CSS sur le projet Vue.js",
      description: "Recherche d'un développeur pour ajuster les designs sur un projet Vue.js existant.",
      difficulty: "Avancé",
      skills: ['Template Markup', 'CSS', 'HTML', 'JavaScript', 'Vue.js', 'HTML5'],
      rate: "800€",
      duration: "3 jours"
    },
    {
      icon: <Code size={20} />,
      title: "Développeur front-end Next.js pour design Figma",
      description: "Besoin d'un expert pour appliquer une conception Figma à une application Next.js.",
      difficulty: "Avancé",
      skills: ['Tailwind CSS', 'Next.js', 'React', 'Landing Page'],
      rate: "600€",
      duration: "4 jours"
    },
    {
      icon: <Layout size={20} />,
      title: "Développeur Full Stack à distance",
      description: "Rejoignez notre équipe à distance pour développer un logiciel de qualité professionnelle dans le secteur juridique.",
      difficulty: "Avancé",
      skills: ['JavaScript', 'CSS', 'React', 'Java', 'Web Development', 'API', 'HTML', 'Node.js'],
      rate: "3800€",
      duration: "2 mois"
    },
    {
      icon: <Smartphone size={20} />,
      title: "Développeur avec expérience en programmes de fidélité",
      description: "Recherche d'un développeur ayant de l'expérience dans les systèmes de fidélisation.",
      difficulty: "Intermédiaire",
      skills: ['Web Development', 'iOS', 'Android', 'WordPress', 'loyalty program'],
      rate: "550€",
      duration: "3 jours"
    },
    {
      icon: <Box size={20} />,
      title: "Expert Angular pour portail d'administration",
      description: "Nous recherchons un expert Angular pour créer un portail d'administration pour gérer les utilisateurs et leurs actions.",
      difficulty: "Avancé",
      skills: ['Bootstrap', 'Angular', 'CSS', 'HTML', 'Web Development'],
      rate: "4800€",
      duration: "3 mois"
    }
  ];


  return (
    <>
      <Header />
      <GlobalStyle />
      <Container>
        <HeroSection>
          <HeroContent>
            <Helmet>
              <title>Trouver un freelance info ou une Agence web</title>
              <meta name="description" content="Découvrez les meilleures développeurs freelances info, des développeurs et des agences spécialisées dans la création de sites internet." />
              <meta name="keywords" content="freelance info, freelances info, freelance developpeur web , développeur freelance web ,freelance web developer , freelance dev , recrutement freelance, recruter un freelance, freelance recrutement, agence informatique, agence de developpement web, agence developpement mobile, agence developpement application, agence developpement applications mobiles, agence developpement web, agence france developpement, agence francaise pour le developpement, agence developpement web paris, freelance web, developpeur freelance, freelance application, webmaster freelance, application freelance, site internet freelance, web designer freelance, recherche freelance, web développeur freelance, freelance agence, freelance mission informatique, dev freelance, contrat de freelance, freelance developpeur, freelance developpeur web, web developpeur freelance, developpeur en freelance, developpeur freelance malt, developpeur junior freelance, prix developpeur freelance, développeur web freelance" />
              <link rel="canonical" href="https://itgalaxy.io/freelance-info" />
              <meta property="og:title" content="Trouver un freelance développeur web ou une Agence de Développement web" />
              <meta property="og:description" content="Trouvez des freelances qualifiés et des agences pour la création de sites internet et le développement web." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://itgalaxy.io/freelance-info" />
              <meta property="og:locale" content="fr_FR" />
              <meta property="og:site_name" content="ItGalaxy.io" />
              <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-info" />
              <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-info" />
            </Helmet>

            <HeroTitle>Trouver un freelance info ou une Agence de Développement web</HeroTitle>
            <HeroSubtitle>Création d'expériences web élégantes et responsives</HeroSubtitle>
            <Button  onClick={() => window.location.href = `/search/prestataires` }>
              Explorer les Prestataires Web
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires job={'DEVELOPER_FRONTEND'}/>
           

        <Section>
          <SectionContent>
            <SectionTitle>
              <Code />
              Trouvez des Freelances info ou agence de developpement web avec des Compétences avancé
              <Code2 />
            </SectionTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard key={index} onClick={() => handleModalRegister()}>
                  <SkillTitle>{skill.name}</SkillTitle>
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <ProgressBar>
                        <ProgressFill level={skill.level} />
                      </ProgressBar>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{skill.level}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                        {skill.freelancers} Freelances
                      </div>
                      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#9ca3af', marginLeft: '1rem' }}>
                        Prix Hr: ${skill.avgRate} / hr
                      </div>
                    </div>
                  </div>
                </SkillCard>
              ))}
            </SkillsGrid>
            <ShowMoreButton  onClick={() => window.location.href = `/search/prestataires` } >
              {'Vous étes Freelance info ?'}
            </ShowMoreButton>
          </SectionContent>
        </Section>     

        <ItGalaxyAsService />

        <Section dark>
          <SectionContent>
            <SectionTitle>
              Projets Réalisés
              <Braces />
            </SectionTitle>
            <ProjectsGrid>
              {projects.slice(0, showMoreProjects ? projects.length : initialProjectCount).map((project, index) => (
                <ProjectCard key={index} onClick={() => handleModalRegister()}>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description.length > 200
                        ? `${project.description.slice(0, 200)}...`
                        : project.description}
                    </ProjectDescription>
                    <TechTags>
                      {project.tech.map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                    </TechTags>
                    <ProjectPrice>{`Budget : ${project.price} €`}</ProjectPrice> {/* Display price here */}
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
            <ShowMoreButton onClick={handleShowMoreProjects}>
              {showMoreProjects ? 'Voir moins de missions' : 'Voir plus de missions'}
            </ShowMoreButton>
          </SectionContent>
        </Section>


        <ContractsSection>
          <SectionContent>
            <SectionTitle>
               Découvrez les projets partagées de Freelance Info sur notre plateforme
              <Brackets />
            </SectionTitle>
             <ContractsGrid>
              {contracts.slice(0, showMoreContracts ? contracts.length : initialContractCount).map((contract, index) => (
                <ContractCard key={index} onClick={() => handleModalRegister()} >
                  <ContractHeader>
                    <ContractIcon>{contract.icon}</ContractIcon>
                    <ContractDifficulty difficulty={contract.difficulty}>
                      {contract.difficulty}
                    </ContractDifficulty>
                  </ContractHeader>
                  <ContractTitle>{contract.title}</ContractTitle>
                  <ContractDescription>
                    {contract.description.length > 200
                      ? `${contract.description.slice(0, 200)}...`
                      : contract.description}
                  </ContractDescription>
                  <ContractSkills>
                    {contract.skills.map((skill, skillIndex) => (
                      <TechTag key={skillIndex}>{skill}</TechTag>
                    ))}
                  </ContractSkills>
                  <ContractFooter>
                    <Rate>
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
            <ShowMoreButton onClick={handleShowMoreContracts}>
              {showMoreContracts ? 'Voir moins de contrats' : 'Voir plus de contrats'}
            </ShowMoreButton>
          </SectionContent>
        </ContractsSection>

        <Section>
          <SectionContent>
            <SectionTitle>
              <BookOpenText />
              Développeur web formation
            </SectionTitle>
            <EducationList>
              {education.map((edu, index) => (
                <EducationCard key={index} onClick={() => handelFormation(edu.slug)} >
                  <EducationHeader>
                    <EducationTitle>{edu.degree}</EducationTitle>
                    <EducationYear>{edu.year}</EducationYear>
                  </EducationHeader>
                  <EducationSchool>{edu.school}</EducationSchool>
                  <EducationDescription>{edu.description}</EducationDescription>
                </EducationCard>
              ))}
            </EducationList>
          </SectionContent>
        </Section>

        <FAQSection>
          <SectionContent>
            <SectionTitle>
              <Code2 />
              Freelance info FAQ
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


      </Container>
      <Offers />
      <FooterHome page={"frontend"} />
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

export default Frontend;