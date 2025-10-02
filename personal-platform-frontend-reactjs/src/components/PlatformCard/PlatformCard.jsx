import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ExternalLink, Check, X, Globe, Code, Briefcase, Star, Users, Rocket, Coffee, Zap, Brain, Target, Search } from 'lucide-react';

const PlatformSection = styled(motion.section)`
  margin-bottom: var(--space-16);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid var(--border-color);
  scroll-margin-top: 100px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const SiteLink = styled.a`
  color: var(--heading-color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  transition: color var(--transition-fast);
  position: relative;
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: -0.025em;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width var(--transition-normal);
  }

  &:hover {
    color: var(--primary-color);
    
    &::after {
      width: 100%;
    }

    .platform-icon {
      transform: translateY(-2px);
    }

    .link-icon {
      opacity: 1;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const PlatformIcon = styled.span`
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
`;

const LinkIcon = styled(ExternalLink)`
  opacity: 0.7;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
`;

const Description = styled.p`
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--text-color);
  margin-bottom: var(--space-8);
`;

const ProsCons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin: var(--space-8) 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
`;

const Card = styled(motion.div)`
  background: var(--pros-bg);
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${props => 
      props.variant === 'pros' 
        ? 'var(--success-color)' 
        : props.variant === 'cons'
        ? 'var(--error-color)'
        : 'var(--primary-color)'};
    transition: all var(--transition-normal);
  }

  @media (max-width: 768px) {
    padding: var(--space-6);
  }

  @media (max-width: 480px) {
    padding: var(--space-4);
  }
`;

const CardTitle = styled.h3`
  color: ${props => 
    props.variant === 'pros' 
      ? 'var(--success-color)' 
      : props.variant === 'cons'
      ? 'var(--error-color)'
      : 'var(--primary-color)'};
  margin: var(--space-6) 0 var(--space-4);
  font-weight: 600;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: var(--space-4);
`;

const ListItem = styled.li`
  margin-bottom: var(--space-4);
  position: relative;
  padding-left: 28px;
  display: flex;
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 0;
  top: 3px;
  color: ${props => 
    props.variant === 'pros' 
      ? 'var(--success-color)' 
      : 'var(--error-color)'};
`;

const PlatformCard = ({
  id,
  name,
  url,
  description,
  pros,
  cons,
  costs
}) => {
  const getIcon = (platformId) => {
    switch (platformId) {
      case 'upwork':
        return <Briefcase size={24} />;
      case 'itgalaxy':
        return <Code size={24} />;
      case 'fiverr':
        return <Star size={24} />;
      case 'codeur':
        return <Globe size={24} />;
      case 'comeup':
        return <Rocket size={24} />;
      case 'malt':
        return <Coffee size={24} />;
      case 'hibou':
        return <Brain size={24} />;
      case 'impli':
        return <Zap size={24} />;
      case 'comet':
        return <Target size={24} />;
      case 'simplyhired':
        return <Search size={24} />;
      default:
        return <Globe size={24} />;
    }
  };

  return (
    <PlatformSection
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2>
        <SiteLink href={url} target="_blank" rel="noopener noreferrer">
          <PlatformIcon className="platform-icon">{getIcon(id)}</PlatformIcon>
          <span>{name}</span>
          <LinkIcon size={20} className="link-icon" />
        </SiteLink>
      </h2>
      
      <Description>{description}</Description>
      
      <ProsCons>
        <Card 
          variant="pros"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <CardTitle variant="pros">Avantages</CardTitle>
          <List>
            {pros.map((pro, index) => (
              <ListItem key={index}>
                <IconWrapper variant="pros">
                  <Check size={16} />
                </IconWrapper>
                <span>{pro}</span>
              </ListItem>
            ))}
          </List>
        </Card>
        
        <Card 
          variant="cons"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <CardTitle variant="cons">Inconvénients</CardTitle>
          <List>
            {cons.map((con, index) => (
              <ListItem key={index}>
                <IconWrapper variant="cons">
                  <X size={16} />
                </IconWrapper>
                <span>{con}</span>
              </ListItem>
            ))}
          </List>
        </Card>
      </ProsCons>
      
      {costs && (
        <Card 
          variant="costs"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <CardTitle variant="costs">Coûts</CardTitle>
          <p>{costs}</p>
        </Card>
      )}
    </PlatformSection>
  );
};

export default PlatformCard;