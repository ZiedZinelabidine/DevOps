import React from 'react';
import { ArrowRight, Database, Server, Shield, Globe, Cpu, Cloud, CreditCard, ShoppingBag, DollarSign, FileText } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
  }
  50% {
    box-shadow: 0 0 25px rgba(99, 102, 241, 0.5);
  }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const MainCard = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #1e293b;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(99, 102, 241, 0.2);
  
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 750px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #1e293b;
  
  @media (min-width: 1024px) {
    padding: 4rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  background-color: #0f172a;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  
  @media (min-width: 1024px) {
    min-height: auto;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 9999px;
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: ${fadeIn} 0.6s ease-out 0.1s both;
  background: linear-gradient(to right, #a5b4fc, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Description = styled.p`
  color: #94a3b8;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 500px;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(90deg, #4f46e5, #3b82f6);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out 0.3s both, ${glow} 3s infinite ease-in-out;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.5);
  }
  
  svg {
    transition: transform 0.3s ease;
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
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(45deg);
    animation: ${gradientMove} 3s infinite;
    background-size: 200% 100%;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  animation: ${fadeIn} 0.6s ease-out 0.4s both;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 12px;
  background-color: rgba(99, 102, 241, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a5b4fc;
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const FeatureText = styled.span`
  font-weight: 500;
  color: #cbd5e1;
`;

const CircleBackground = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(14, 165, 233, 0.2) 70%, transparent 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${pulse} 8s infinite ease-in-out;
  filter: blur(30px);
`;

const ServerGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1px;
  opacity: 0.15;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent);
    animation: ${gradientMove} 15s infinite linear;
    z-index: 2;
  }
`;

const ServerGridCell = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.02);
`;

const FloatingIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const FloatingIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background-color: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(99, 102, 241, 0.3);
  animation: ${fadeIn} 0.6s ease-out, ${pulse} 4s infinite ease-in-out;
  animation-delay: ${props => props.delay || '0s'};
  top: ${props => props.top || '50%'};
  left: ${props => props.left || '50%'};
  transform: translate(-50%, -50%);
  z-index: 15;
  border: 1px solid rgba(99, 102, 241, 0.3);
  
  img {
    width: 32px;
    height: 32px;
  }
  
  svg {
    width: 32px;
    height: 32px;
    color: #21759b;
  }
`;

const CentralIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 24px;
  background-color: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.4);
  z-index: 20;
  border: 1px solid rgba(99, 102, 241, 0.4);
  animation: ${glow} 4s infinite ease-in-out;
  
  img {
    width: 80px;
    height: 80px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 160px;
    height: 160px;
    border: 2px dashed rgba(99, 102, 241, 0.3);
    border-radius: 50%;
    animation: ${spin} 20s linear infinite;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px dashed rgba(99, 102, 241, 0.2);
    border-radius: 50%;
    animation: ${spin} 30s linear infinite reverse;
  }
`;

const StatusBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: #1e293b;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  z-index: 30;
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const StatusIndicator = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #10b981;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background-color: rgba(16, 185, 129, 0.2);
    animation: ${pulse} 2s infinite;
  }
`;

const StatusText = styled.span`
  font-weight: 600;
  font-size: 0.875rem;
  color: #cbd5e1;
`;

function ShareProduct() {
  return (
    <PageContainer>
      <MainCard>
        <LeftSection>
          <Badge>
            <ShoppingBag size={16} />
            <span>Partagez votre SaaS dans notre Marketplace</span>
          </Badge>
          <Title>Partagez votre SaaS dans notre Marketplace</Title>
          
          <Description>
            Si vous disposez déjà de projets IT prêts à être exploités, tels qu'un système de facturation, un service de chat, des thèmes WordPress, un service de paiement ou des plugins Shopify, vous pouvez soumettre une demande pour les intégrer à notre marketplace sans frais. Vous bénéficierez ainsi de notre audience pour les vendre.</Description>   
          <Button onClick={() => window.location.href = `/svc/demand-share-product`}>
            Déployer Maintenant
            <ArrowRight size={18} />
          </Button>
          
          <FeatureGrid>
            <FeatureItem>
              <FeatureIcon>
                <Shield size={20} />
              </FeatureIcon>
              <FeatureText>Paiements Sécurisés</FeatureText>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon>
                <Server size={20} />
              </FeatureIcon>
              <FeatureText>Haute Disponibilité</FeatureText>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon>
                <Globe size={20} />
              </FeatureIcon>
              <FeatureText>Commerce Global</FeatureText>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon>
                <CreditCard size={20} />
              </FeatureIcon>
              <FeatureText>Multi-Paiements</FeatureText>
            </FeatureItem>
          </FeatureGrid>
        </LeftSection>
        
        <RightSection>
          <CircleBackground />
          
          <ServerGrid>
            {[...Array(64)].map((_, i) => (
              <ServerGridCell key={i} />
            ))}
          </ServerGrid>
          
          <FloatingIcons>
            <CentralIcon>
              <img 
                src="https://cdn.worldvectorlogo.com/logos/shopify.svg" 
                alt="Shopify" 
              />
            </CentralIcon>
            
            <FloatingIcon top="25%" left="25%" delay="0.2s">
              <FileText size={32} color="#21759b" />
            </FloatingIcon>
            
            <FloatingIcon top="25%" left="75%" delay="0.4s">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" 
                alt="PayPal" 
              />
            </FloatingIcon>
            
            <FloatingIcon top="75%" left="25%" delay="0.6s">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" 
                alt="Stripe" 
              />
            </FloatingIcon>
            
            <FloatingIcon top="75%" left="75%" delay="0.8s">
              <DollarSign size={32} color="#a5b4fc" />
            </FloatingIcon>
          </FloatingIcons>
        </RightSection>
      </MainCard>
    </PageContainer>
  );
}

export default ShareProduct;