import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const SidebarNav = styled(motion.nav)`
  position: sticky;
  top: 80px;
  height: calc(100vh - 80px);
  overflow-y: auto;

  @media (max-width: 768px) {
    position: static;
    height: auto;
  }
`;

const SidebarContent = styled.div`
  background: var(--card-bg);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 1px solid var(--border-color);
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: var(--space-6);
  color: var(--heading-color);
  font-weight: 600;
  position: relative;
  padding-bottom: var(--space-3);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--primary-color);
    border-radius: 3px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const ListItem = styled(motion.li)`
  margin-bottom: 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  color: var(--text-color);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: left;
  font-size: 0.9375rem;
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--pros-bg);
    color: var(--primary-color);

    .sidebar-number {
      background-color: var(--primary-color);
      color: white;
    }

    .sidebar-icon {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Number = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: var(--pros-bg);
  border-radius: 50%;
  margin-right: var(--space-3);
  font-size: 0.8125rem;
  font-weight: 600;
  flex-shrink: 0;
  transition: all var(--transition-fast);
`;

const Text = styled.span`
  flex: 1;
`;

const Icon = styled(ChevronRight)`
  opacity: 0;
  transform: translateX(-8px);
  transition: all var(--transition-fast);
`;

const platformList = [
  { id: 'upwork', name: 'Upwork' },
  { id: 'itgalaxy', name: 'ItGalaxy.io' },
  { id: 'fiverr', name: 'Fiverr' },
  { id: 'codeur', name: 'Codeur' },
  { id: 'comeup', name: 'ComeUp' },
  { id: 'malt', name: 'Malt' },
  { id: 'hibou', name: 'Hibou' },
  { id: 'impli', name: 'Impli' },
  { id: 'comet', name: 'Comet' },
  { id: 'simplyhired', name: 'SimplyHired' }
];

const Sidebar = ({ scrollToSection }) => {
  return (
    <SidebarNav 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SidebarContent>
        <Title>Table des matières</Title>
        <List>
          {platformList.map((platform, index) => (
            <ListItem 
              key={platform.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Button onClick={() => scrollToSection(platform.id)}>
                <Number className="sidebar-number">{index + 1}</Number>
                <Text>{platform.name}</Text>
                <Icon size={16} className="sidebar-icon" />
              </Button>
            </ListItem>
          ))}
        </List>
      </SidebarContent>
    </SidebarNav>
  );
};

export default Sidebar;