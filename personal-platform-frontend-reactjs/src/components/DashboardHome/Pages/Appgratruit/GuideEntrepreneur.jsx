

import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';
import {
  Download,
  Share2,
  ChevronRight,
  Eye,
  ChevronLeft
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import FooterHome from '@components/DashboardHome/FooterHome/FooterHome';
import DevProd from './DevProd';
import Prix from './Prix';
import Etapes from './Etapes';
import Archi from './Archi';
import Graphic from './Graphic';
import Backend from './Backend';
import TypeDev from './TypeDev';
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





const GuideEntrepreneur = () => {

  const itemsPerPage = 6; // Change this number based on how many designs you want to show per page
  const [currentPage, setCurrentPage] = useState(0);


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


  const totalPages = Math.ceil(designs.length / itemsPerPage);
  const currentDesigns = designs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

    
 const WelcomeCard = styled.div`
    background: linear-gradient(to right, #1e3a8a, #1e40af);
    color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
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


const Section = styled.section`
  padding: 5rem 0;
`;

const SectionContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
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


const PaginationButton = styled.button`
  background: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999px;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #4338ca;
    transform: scale(1.05);
  }

  &:disabled {
    background: #a1a1aa;
    cursor: not-allowed;
  }
`;

const SeeMoreButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #1d4ed8;
    transform: scale(1.05);
  }
`;

  const handelFig = (url) => {
    window.location.href = `${url}`;
  }

    
    return (<>
          <WelcomeCard>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Guide Entrepreneurial pour la Création d'Applications Mobiles 
            </h2>
          </WelcomeCard>
          <Card>
          <Etapes />
        </Card>


          <Card>

          <Archi />


          </Card>
          <Card>
          <img src={archi} style={{ marginLeft: "30%", width: '50%' , height: '40%' , marginBottom: "1%" }} /> <br />
          <span style={{ marginLeft: "45%" }}> <strong> Architecture Application Mobile</strong> </span>
          </Card>



              <Card>
             <Graphic />
              </Card>
          <Card>
          <CardTitle>Design complet des applications mobile sur Figma gratuite </CardTitle>
          <Section gray>
            <SectionContent>
              {/* Pagination Left Chevorn */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <IconButton onClick={handlePrevPage} disabled={currentPage === 0}>
                  <ChevronLeft size={20} color={currentPage === 0 ? '#a1a1aa' : '#374151'} />
                </IconButton>

                {/* Optional: Add some space for aesthetic reasons */}
                <div style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
                  Page {currentPage + 1} of {totalPages}
                </div>

                <IconButton onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
                  <ChevronRight size={20} color={currentPage >= totalPages - 1 ? '#a1a1aa' : '#374151'} />
                </IconButton>
              </div>

              <Grid>
                {currentDesigns.map((design) => (
                  <CardFig key={design.id} onClick={() => handelFig(design.slug)} >
                    <ImageContainer>
                      <img src={design.image} alt={design.title} />
                      <Overlay>
                        <IconButton>
                          <Eye size={20} color="#374151" />
                        </IconButton>
                      </Overlay>
                    </ImageContainer>
                    <CardContent>
                      <CardFigTitle>{design.title}</CardFigTitle>
                      <CardDescription>{design.description}</CardDescription>
                      <CardFooter>
                        <PriceTag>{design.price}</PriceTag>
                        <AvatarGroup>
                          {design.contributors.map((avatar, index) => (
                            <img key={index} src={avatar} alt="Contributor" />
                          ))}
                        </AvatarGroup>
                      </CardFooter>
                    </CardContent>
                  </CardFig>
                ))}
              </Grid>

              {/* Optional: Move See More button to a new line 
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <SeeMoreButton onClick={() => setCurrentPage(0)}>See More</SeeMoreButton>
              </div> */}
            </SectionContent>
          </Section>
        </Card>


          <Card>
          <Backend />
          </Card>
          <Card>
            <TypeDev />
          </Card>
          <Card>
            <Prix />
           </Card>

      <Card>
           <DevProd />
      </Card>

      
    </>);



}
export default GuideEntrepreneur;