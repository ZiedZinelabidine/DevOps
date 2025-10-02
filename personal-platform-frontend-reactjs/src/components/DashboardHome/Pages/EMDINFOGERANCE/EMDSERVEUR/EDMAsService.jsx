import React from 'react';
import { ArrowRight, Database, Server, Shield, Globe, Cpu, Cloud } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet';

// Animations
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 25%),
      radial-gradient(circle at 80% 70%, rgba(56, 189, 248, 0.15) 0%, transparent 25%);
    pointer-events: none;
  }
`;

const Card = styled.div`
  max-width: 72rem;
  width: 100%;
  background-color: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(99, 102, 241, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
  }
`;

const Grid = styled.div`
  display: grid;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentSection = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  
  @media (min-width: 768px) {
    padding: 3.5rem;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(56, 189, 248, 0.2));
  color: #a5b4fc;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  width: fit-content;
  border: 1px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
`;

const PulsingIcon = styled(Database)`
  animation: ${pulse} 2s infinite;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, white, #FF9900, white);
  color: transparent;
  letter-spacing: -0.025em;
  line-height: 1.2;
`;

const Description = styled.p`
  color: #94a3b8;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  font-size: 1.125rem;
`;

const Button = styled.button`
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(56, 189, 248, 0.2));
  color: white;
  font-weight: 600;
  padding: 0.875rem 2.5rem;
  border-radius: 9999px;
  transition: all 0.3s;
  width: fit-content;
  border: none;
  box-shadow: 
    0 10px 15px -3px rgba(79, 70, 229, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 15px 20px -3px rgba(79, 70, 229, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.2);
  }
  
  span.content {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  span.bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #4338ca, #0ea5e9);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover span.bg {
    opacity: 1;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
  
  svg {
    transition: transform 0.3s;
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
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(45deg);
    animation: ${shimmer} 3s infinite;
    background-size: 200% 100%;
  }
`;

const ImageSection = styled.div`
  background: linear-gradient(135deg, rgba(30, 27, 75, 0.7), rgba(15, 23, 42, 0.7));
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 70% 60%, rgba(56, 189, 248, 0.1) 0%, transparent 30%);
    pointer-events: none;
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #a5b4fc;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
  z-index: 20;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent 70%);
  pointer-events: none;
  z-index: 10;
`;

const StatusIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 20;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const StatusDot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: #10b981;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.7);
  animation: ${pulse} 2s infinite;
`;

const StatusText = styled.span`
  font-size: 0.875rem;
  color: #6ee7b7;
  font-weight: 500;
`;

// Hexagon Grid
const HexGrid = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  z-index: 5;
`;

const HexContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  
  &:nth-child(3n+1) {
    transform: translateY(1.5rem);
  }
  
  &:nth-child(3n+3) {
    transform: translateY(-1.5rem);
  }
`;

const Hexagon = styled.div`
  position: relative;
  width: 5.5rem;
  height: 6.5rem;
  background: rgba(15, 23, 42, 0.7);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.3s;
  border: 1px solid rgba(99, 102, 241, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(56, 189, 248, 0.2));
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    img, svg {
      transform: scale(1.1);
    }
  }
  
  img, svg {
    transition: transform 0.3s;
    z-index: 2;
  }
`;

const HexLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #a5b4fc;
  z-index: 2;
`;

// Orbiting elements
const OrbitContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.size || '80%'};
  height: ${props => props.size || '80%'};
  border: 1px dashed rgba(99, 102, 241, 0.2);
  border-radius: 50%;
  animation: ${rotate} ${props => props.duration || '30s'} linear infinite;
  animation-direction: ${props => props.direction || 'normal'};
`;

const OrbitingObject = styled.div`
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  width: 1.5rem;
  height: 1.5rem;
  background: rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
`;

// Central element
const CentralElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(15, 23, 42, 0.7) 70%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
  z-index: 15;
  
  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 50%;
    animation: ${pulse} 3s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -20px;
    border: 1px dashed rgba(99, 102, 241, 0.1);
    border-radius: 50%;
    animation: ${rotate} 30s linear infinite;
  }
  
  img {
    width: 5rem;
    height: 5rem;
    filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.5));
  }
`;

// Particles
const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => props.size || '2px'};
  height: ${props => props.size || '2px'};
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  animation: ${float} ${props => props.duration || '3s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

function EDMAsService() {

  const TEXTS = {
    badge: {
      icon: <Database size={16} />,
      label: "Solution Entreprise"
    },
    title: "ItGalaxy As Service",
    description: `Nous gérons l'intégralité du déploiement et de la maintenance de vos sites et applications sur les different cloud AWS, Azure ou Google Cloud, avec une supervision complète des bases de données. Décrivez vos besoins, et bénéficiez de solutions FinOps optimisées et personnalisées, sans effort supplémentaire de votre part.`,
    button: {
      label: "Créer votre demande",
      icon: <ArrowRight size={18} />
    },
    statusBadge: {
      icon: <Server size={14} />,
      label: "Qualité Entreprise"
    },
    statusIndicator: {
      dot: <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#10b981', boxShadow: '0 0 10px rgba(16, 185, 129, 0.7)' }} />,
      text: "Systèmes opérationnels"
    },
    hexGrid: [
      {
        label: "MySQL",
        icon: null
      },
      {
        label: "PostgreSQL",
        icon: <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL" width="32" height="32" />
      },
      {
        label: "Ubuntu",
        icon: <img src="https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg" alt="Ubuntu" width="32" height="32" />
      },
      {
        label: "Sécurité",
        icon: <Shield size={32} color="#a5b4fc" />
      },
      {
        label: "Serveur",
        icon: <Cpu size={32} color="#a5b4fc" />
      },
      {
        label: "Cloud",
        icon: <Cloud size={32} color="#a5b4fc" />
      },
      {
        label: "Global",
        icon: <Globe size={32} color="#a5b4fc" />
      }
    ]
  };
  
  
  return (
    <PageContainer>
    <Card>
      <Grid>
        <ContentSection>
          <Badge>
            <PulsingIcon size={16} />
            <span>{TEXTS.badge.label}</span>
          </Badge>
  
          <Title>{TEXTS.title}</Title>
  
          <Description>
            {TEXTS.description}
          </Description>
  
          <Button onClick={() => window.location.href = `/svc/infra-as-service`}>
            <span className="content">
              {TEXTS.button.label}
              {TEXTS.button.icon}
            </span>
            <span className="bg"></span>
          </Button>
        </ContentSection>
  
        <ImageSection>
          <StatusBadge>
            {TEXTS.statusBadge.icon}
            <span>{TEXTS.statusBadge.label}</span>
          </StatusBadge>
  
          <Particles>
            {[...Array(15)].map((_, i) => (
              <Particle 
                key={i}
                size={`${Math.random() * 3 + 1}px`}
                top={`${Math.random() * 100}%`}
                left={`${Math.random() * 100}%`}
                duration={`${Math.random() * 5 + 3}s`}
                delay={`${Math.random() * 5}s`}
              />
            ))}
          </Particles>
  
          <CentralElement />
  
          <OrbitContainer>
            <Orbit size="60%" duration="20s">
              <OrbitingObject top="0%" left="50%" />
            </Orbit>
            <Orbit size="80%" duration="30s" direction="reverse">
              <OrbitingObject top="50%" left="0%" />
              <OrbitingObject top="50%" left="100%" />
            </Orbit>
            <Orbit size="100%" duration="40s">
              <OrbitingObject top="0%" left="50%" />
              <OrbitingObject top="100%" left="50%" />
              <OrbitingObject top="50%" left="0%" />
            </Orbit>
          </OrbitContainer>
  
          <HexGrid>
            {TEXTS.hexGrid.map((item, index) => (
              <HexContainer key={item.label} delay={`${index * 0.5}s`}>
                <Hexagon>
                  {item.icon}
                  <HexLabel>{item.label}</HexLabel>
                </Hexagon>
              </HexContainer>
            ))}
          </HexGrid>
  
          <Overlay />
          <StatusIndicator>
            {TEXTS.statusIndicator.dot}
            <StatusText>{TEXTS.statusIndicator.text}</StatusText>
          </StatusIndicator>
        </ImageSection>
      </Grid>
    </Card>
  </PageContainer>
  );
}

export default EDMAsService;