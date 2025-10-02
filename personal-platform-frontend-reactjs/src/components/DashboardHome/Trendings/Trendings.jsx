import React, { useEffect, useRef } from 'react';
import { Database, Server, Cloud, Globe, Lock, Zap, TrendingUp, Code, Package, Users } from 'lucide-react';
import styled, { keyframes, css } from 'styled-components';

const categories = [
  {
    icon: Database,
    title: 'Databases',
    description: 'High-performance database solutions for all your data needs',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)',
  },
  {
    icon: Server,
    title: 'Servers',
    description: 'Reliable and scalable server infrastructure',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
  },
  {
    icon: Cloud,
    title: 'Serverless',
    description: 'Modern serverless computing platforms',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
  },
  {
    icon: Globe,
    title: 'CDN',
    description: 'Global content delivery network',
    gradient: 'linear-gradient(135deg, #f97316 0%, #facc15 100%)',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade security solutions',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #fb7185 100%)',
  },
  {
    icon: Zap,
    title: 'Edge Computing',
    description: 'Lightning-fast edge computing services',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  },
];

const trendingData = {
  skills: [
    { name: 'React', growth: '+85%', color: '#3b82f6' },
    { name: 'Nodejs', growth: '+65%', color: '#8b5cf6' },
    { name: 'AWS Services', growth: '+55%', color: '#ec4899' },
    { name: 'Wordpress', growth: '+45%', color: '#10b981' },
  ],
  projects: [
    { name: 'Refonte site vitrine avec Wordpress', stars: '12.5k', color: '#f97316' },
    { name: 'Mise en place une application mobile', stars: '8.2k', color: '#6366f1' },
    { name: 'Migration Cloud ', stars: '7.8k', color: '#14b8a6' },
    { name: 'Site Shopify', stars: '6.9k', color: '#f43f5e' },
  ],
  products: [
    { name: 'Serveurs Ubuntu', users: '50k+', color: '#8b5cf6' },
    { name: 'Database Postgres', users: '35k+', color: '#ef4444' },
    { name: 'IA Bolt DIY', users: '28k+', color: '#22c55e' },
    { name: 'Jenkins', users: '25k+', color: '#f59e0b' },
  ],
  contracts: [
    { name: 'AI Engineers', rate: '$150/hr', color: '#3b82f6' },
    { name: 'Cloud Architects', rate: '$140/hr', color: '#10b981' },
    { name: 'DevOps Engineers', rate: '$130/hr', color: '#f97316' },
    { name: 'Developpeur Backend', rate: '$125/hr', color: '#8b5cf6' },
  ],
};

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(96, 165, 250, 0.3); }
  50% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.6); }
  100% { box-shadow: 0 0 5px rgba(96, 165, 250, 0.3); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const shine = keyframes`
  from {
    background-position: 200% center;
  }
  to {
    background-position: -200% center;
  }
`;

const Container = styled.div`
  background-color: black;
  color: white;
  position: relative;
  overflow: hidden;
  perspective: 1000px;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.1) 0%, transparent 25%),
      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 25%),
      radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 1rem;
  position: relative;
  z-index: 1;
`;



const TrendingSection = styled.div`
  margin-top: 10rem;
  position: relative;
  perspective: 1000px;
  
  &::before {
    content: '';
    position: absolute;
    top: -200px;
    left: -50%;
    right: -50%;
    height: 400px;
    background: radial-gradient(
      ellipse at center,
      rgba(59, 130, 246, 0.15) 0%,
      transparent 70%
    );
    transform: rotate(-5deg);
    pointer-events: none;
  }
`;

const TrendingGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 4rem;
  transform-style: preserve-3d;
`;

const TrendingCard = styled.div`
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 1.5s; }
  &:nth-child(3) { animation-delay: 3s; }
  &:nth-child(4) { animation-delay: 4.5s; }
`;

const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  transform-style: preserve-3d;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.25rem;
    left: 0;
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, #60a5fa, transparent);
    transition: width 0.3s ease;
  }

  ${TrendingCard}:hover &::after {
    width: 100%;
  }
`;

const TrendingIcon = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  ${TrendingCard}:hover & {
    transform: translateZ(20px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: -5px;
    background: currentColor;
    opacity: 0.3;
    filter: blur(5px);
    border-radius: 50%;
  }
`;

const TrendingTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: white;
  background-clip: text;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  ${TrendingCard}:hover & {
    transform: translateZ(15px);
  }
`;

const TrendingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transform-style: preserve-3d;
`;

const TrendingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: ${props => `linear-gradient(120deg, ${props.color}10, ${props.color}05)`};
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;

  &:hover {
    transform: translateX(10px) translateZ(10px);
    background: ${props => `linear-gradient(120deg, ${props.color}20, ${props.color}10)`};
    box-shadow: 0 5px 20px ${props => `${props.color}20`};
    cursor: pointer;
  }
`;

const ItemName = styled.span`
  color: #e5e7eb;
  font-weight: 500;
  font-size: 1.15rem;
  transition: color 0.3s ease;

  ${TrendingItem}:hover & {
    color: #fff;
  }
`;

const ItemMetric = styled.span`
  color: ${props => props.color};
  font-weight: 600;
  background: ${props => `linear-gradient(120deg, ${props.color}20, ${props.color}10)`};
  padding: 0.75rem 1.5rem;
  border-radius: 15px;
  font-size: 1rem;
  box-shadow: 0 2px 10px ${props => `${props.color}20`};
  transition: all 0.3s ease;

  ${TrendingItem}:hover & {
    transform: translateZ(5px);
    box-shadow: 0 4px 20px ${props => `${props.color}30`};
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #60a5fa, #a855f7, #60a5fa);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shine} 5s linear infinite;
  position: relative;
  transform-style: preserve-3d;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #60a5fa, transparent);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 300px;
  }
`;

function Trendings() {
  return (
    <Container>
      <Content>
       <TrendingSection>
          <SectionTitle>Trending</SectionTitle>
          <TrendingGrid>
            <TrendingCard>
              <TrendingHeader>
                <TrendingIcon>
                  <TrendingUp size={28} color="#3b82f6" />
                </TrendingIcon>
                <TrendingTitle>Freelances Skills</TrendingTitle>
              </TrendingHeader>
              <TrendingList>
                {trendingData.skills.map((item) => (
                  <TrendingItem key={item.name} color={item.color}>
                    <ItemName>{item.name}</ItemName>
                    <ItemMetric color={item.color}>{item.growth}</ItemMetric>
                  </TrendingItem>
                ))}
              </TrendingList>
            </TrendingCard>

            <TrendingCard>
              <TrendingHeader>
                <TrendingIcon>
                  <Code size={28} color="#f97316" />
                </TrendingIcon>
                <TrendingTitle>Trending Projects</TrendingTitle>
              </TrendingHeader>
              <TrendingList>
                {trendingData.projects.map((item) => (
                  <TrendingItem key={item.name} color={item.color}>
                    <ItemName>{item.name}</ItemName>
                    <ItemMetric color={item.color}>{item.stars} stars</ItemMetric>
                  </TrendingItem>
                ))}
              </TrendingList>
            </TrendingCard>

            <TrendingCard>
              <TrendingHeader>
                <TrendingIcon>
                  <Package size={28} color="#8b5cf6" />
                </TrendingIcon>
                <TrendingTitle>Trending Products</TrendingTitle>
              </TrendingHeader>
              <TrendingList>
                {trendingData.products.map((item) => (
                  <TrendingItem key={item.name} color={item.color}>
                    <ItemName>{item.name}</ItemName>
                    <ItemMetric color={item.color}>{item.users} users</ItemMetric>
                  </TrendingItem>
                ))}
              </TrendingList>
            </TrendingCard>

            <TrendingCard>
              <TrendingHeader>
                <TrendingIcon>
                  <Users size={28} color="#10b981" />
                </TrendingIcon>
                <TrendingTitle>Trending Category</TrendingTitle>
              </TrendingHeader>
              <TrendingList>
                {trendingData.contracts.map((item) => (
                  <TrendingItem key={item.name} color={item.color}>
                    <ItemName>{item.name}</ItemName>
                    <ItemMetric color={item.color}>{item.rate}</ItemMetric>
                  </TrendingItem>
                ))}
              </TrendingList>
            </TrendingCard>
          </TrendingGrid>
        </TrendingSection>
      </Content>
    </Container>
  );
}

export default Trendings;