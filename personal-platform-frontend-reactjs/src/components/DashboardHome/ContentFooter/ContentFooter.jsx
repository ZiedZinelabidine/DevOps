import React from 'react';
import styled from 'styled-components';
import { Code, Rocket, Target, Users } from 'lucide-react';
import Register from "components/Authentification/modals/register";
import {useState } from "react";

const Container = styled.div`
  min-height: 100vh;
  color: #f8fafc;
  font-family: 'Inter', sans-serif;
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80') center/cover;
    opacity: 0.1;
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: #94a3b8;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding: 2rem;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(45deg, #60a5fa, #a78bfa);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #94a3b8;
  font-size: 1rem;
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #60a5fa, #a78bfa);
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

function ContentFooter() {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };



  return (
    <Container>
      <Hero>
        <Content>
          <Title>Transformer vos Idées en Réalité avec nos Experts Freelances & Agences informatique </Title>
          <Subtitle>
           Bienvenue sur votre plateforme de choix pour des services de développement freelance de haute qualité. Grâce à notre passion pour l'innovation et notre dévouement pour l'excellence, nous concrétisons vos visions numériques en utilisant des technologies de pointe et des solutions créatives.
          </Subtitle>
          <CTAButton onClick={handleModalRegister}>Démarrer votre Projet</CTAButton>

          <StatsContainer>
            <StatCard>
              <IconWrapper>
                <Code size={24} color="white" />
              </IconWrapper>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Projets Réalisés</StatLabel>
            </StatCard>

            <StatCard>
              <IconWrapper>
                <Users size={24} color="white" />
              </IconWrapper>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Clients Satisfaits</StatLabel>
            </StatCard>

            <StatCard>
              <IconWrapper>
                <Target size={24} color="white" />
              </IconWrapper>
              <StatNumber>3+</StatNumber>
              <StatLabel>Années d'Expérience</StatLabel>
            </StatCard>

            <StatCard>
              <IconWrapper>
                <Rocket size={24} color="white" />
              </IconWrapper>
              <StatNumber>98%</StatNumber>
              <StatLabel>Satisfaction Client</StatLabel>
            </StatCard>
          </StatsContainer>
        </Content>
      </Hero>
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={handleCloseModalRegister}
          switchBetweenModals={false}
          proxy={"marketplace"}
        />
      )}

    </Container>
  );
}

export default ContentFooter;