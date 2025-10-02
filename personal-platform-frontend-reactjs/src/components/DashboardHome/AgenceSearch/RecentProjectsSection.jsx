import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';

const Section = styled.section`
  background: var(--color-background);
  padding: 6rem 1.5rem;
`;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 48rem;
  margin: 0 auto 4rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const Description = styled.p`
  color: var(--color-text-secondary);
  font-size: 1.125rem;
  line-height: 1.75;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: var(--color-surface);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const ProjectDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
`;

const Stat = styled.div`
  flex: 1;
`;

const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
`;

const ViewCaseStudy = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    gap: 0.75rem;
  }
`;


const RecentProjectsSection = ({TEXT}) => {
  return (
    <Section>
      <Container>
        <Header>
          <Title>{TEXT.title}</Title>
          <Description>{TEXT?.description} </Description>
        </Header>

        <Grid>
          {TEXT?.projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <Stats>
                  <Stat>
                    <StatValue>{project.engagement}</StatValue>
                    <StatLabel>Engagement</StatLabel>
                  </Stat>
                  <Stat>
                    <StatValue>{project.reach}</StatValue>
                    <StatLabel>Portée</StatLabel>
                  </Stat>
                  <Stat>
                    <StatValue>{project.roi}</StatValue>
                    <StatLabel>ROI</StatLabel>
                  </Stat>
                </Stats>

                <ViewCaseStudy href="#">
                  Voir l'étude de cas
                  <ExternalLink size={16} />
                </ViewCaseStudy>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default RecentProjectsSection;