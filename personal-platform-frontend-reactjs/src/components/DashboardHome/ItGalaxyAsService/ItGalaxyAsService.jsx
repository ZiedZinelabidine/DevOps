import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle, DollarSign, Globe, Server, Shield, Cpu, Cloud, ArrowLeft } from 'lucide-react';

// Définition du thème sombre uniquement
const darkTheme = {
  primary: '#22d3ee', // cyan-400
  primaryDark: '#06b6d4', // cyan-500
  primaryLight: '#67e8f9', // cyan-300
  secondary: '#a78bfa', // violet-400
  secondaryLight: '#c4b5fd', // violet-300
  background: '#020617', // slate-950
  backgroundAlt: '#0f172a', // slate-900
  backgroundGradient: 'linear-gradient(135deg, #155e75, #6d28d9)', // cyan-800 to violet-700
  text: '#f8fafc', // slate-50
  textLight: '#e2e8f0', // slate-200
  textLighter: '#94a3b8', // slate-400
  border: '#1e293b', // slate-800
  borderDark: '#334155', // slate-700
  shadow: 'rgba(0, 0, 0, 0.5)',
  success: '#10b981', // emerald-500
  card: '#0f172a', // slate-900
  cardHover: '#1e293b', // slate-800
};

// Styles globaux
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    line-height: 1.6;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

// Composants stylisés
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.text};
  padding: 1.25rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 6px -1px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${({ theme }) => theme.backgroundGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSection = styled.section`
  background: ${({ theme }) => theme.backgroundGradient};
  color: white;
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const HeroTextContent = styled.div`
  text-align: center;
  width: 100%;
  
  @media (min-width: 1024px) {
    width: 50%;
    text-align: left;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HighlightText = styled.span`
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0.125rem;
    left: 0;
    width: 100%;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.secondaryLight}40;
    z-index: -1;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const HeroButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);

  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.3);
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const HeroImage = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 15s linear infinite;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function ItGalaxyAsService() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle theme={darkTheme} />
      <AppContainer>
        <HeroSection>
          <Container>
            <HeroContent>
              <HeroFlex>
                <HeroTextContent>
                  <HeroTitle>
                    <HighlightText>ItGalaxy</HighlightText> as a Service
                  </HeroTitle>
                  <HeroDescription> Le service <strong> App as a Service</strong> vous permet de vous concentrer sur votre activité, tandis que notre équipe se charge de votre projet web ou mobile, de son développement à sa production, en passant par les tests et la maintenance avec la partie hébergement et SEO. Il vous suffit de définir vos besoins via notre formulaire, et nous prenons en charge l'ensemble de vos exigences à un coût minimal, quel que soit le niveau de développement, d'hébergement ou de maintenance requis.                  </HeroDescription>
                  <HeroButton onClick={() => window.location.href = `${process.env.REACT_APP_FRONTED_URL}/svc/app-as-service`}>
                    Demander un devis
                  </HeroButton>
                </HeroTextContent>
                <HeroImageContainer>
                  <HeroImage>
                    <Globe size={120} color="white" />
                  </HeroImage>
                </HeroImageContainer>
              </HeroFlex>
            </HeroContent>
          </Container>
        </HeroSection>

      </AppContainer>
    </ThemeProvider>
  );
}

export default ItGalaxyAsService;