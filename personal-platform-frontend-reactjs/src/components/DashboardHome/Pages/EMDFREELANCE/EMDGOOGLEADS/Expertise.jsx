import React from 'react';
import styled from 'styled-components';
import { Award, Users, Target, Briefcase, BadgeCheck, TrendingUp } from 'lucide-react';

const ExpertiseSection = styled.section`
  padding: 4rem 1rem;
  background: ${props => props.theme.colors.background.primary};
  
  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent.blue};
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  max-width: 42rem;
  margin: 0 auto;
`;

const ExpertsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ExpertCard = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const ExpertHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ExpertInfo = styled.div``;

const ExpertName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent.blue};
  margin-bottom: 0.25rem;
`;

const ExpertTitle = styled.p`
  color: ${props => props.theme.colors.text.secondary};
`;

const IconWrapper = styled.div`
  background: ${props => props.theme.colors.background.tertiary};
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpecialtiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  space-y: 0.5rem;
`;

const SpecialtyItem = styled.li`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
  
  &::before {
    content: '';
    display: block;
    width: 0.375rem;
    height: 0.375rem;
    background: ${props => props.theme.colors.accent.blue};
    border-radius: 50%;
    margin-right: 0.75rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const StatBox = styled.div`
  text-align: center;
  padding: 0.75rem;
  background: ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.md};
`;

const StatLabel = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`;

const StatValue = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.accent.green};
`;

const CertificationTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const CertificationTag = styled.span`
  padding: 0.375rem 0.75rem;
  background: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.accent.blue};
  font-size: 0.875rem;
  border-radius: 9999px;
`;

const Expertise  = () => {
  const experts = [
    {
      name: "Thomas Martin",
      title: "Expert Search Ads",
      specialties: [
        "Campagnes Search",
        "Optimisation CPA",
        "Stratégie de mots-clés",
        "Scripts d'automatisation"
      ],
      experience: "8 ans",
      clients: "45+",
      achievements: {
        roi: "+205%",
        cpa: "-42%",
        conversions: "+156%"
      },
      certifications: [
        "Google Ads Search",
        "Google Analytics",
        "Google Tag Manager"
      ]
    },
    {
      name: "Julie Dubois",
      title: "Experte Shopping & E-commerce",
      specialties: [
        "Google Shopping",
        "Feed Management",
        "Smart Shopping",
        "Performance Max"
      ],
      experience: "6 ans",
      clients: "35+",
      achievements: {
        roi: "+178%",
        cpa: "-38%",
        conversions: "+145%"
      },
      certifications: [
        "Google Ads Shopping",
        "Google Merchant Center",
        "Google Analytics"
      ]
    },
    {
      name: "Alexandre Bernard",
      title: "Expert Display & YouTube",
      specialties: [
        "Campagnes Display",
        "YouTube Ads",
        "Remarketing",
        "Audiences similaires"
      ],
      experience: "7 ans",
      clients: "50+",
      achievements: {
        roi: "+165%",
        cpa: "-35%",
        conversions: "+132%"
      },
      certifications: [
        "Google Ads Display",
        "Google Ads Video",
        "Google Analytics"
      ]
    }
  ];

  return (
    <ExpertiseSection id="expertise">
      <Container>
        <Header>
          <Title>Nos Experts Google Ads</Title>
          <Description>
            Une équipe de freelances certifiés Google Ads, spécialisés dans différents aspects de la publicité digitale.
          </Description>
        </Header>

        <ExpertsGrid>
          {experts.map((expert, index) => (
            <ExpertCard key={index}>
              <CardContent>
                <ExpertHeader>
                  <ExpertInfo>
                    <ExpertName>{expert.name}</ExpertName>
                    <ExpertTitle>{expert.title}</ExpertTitle>
                  </ExpertInfo>
                  <IconWrapper>
                    <Award size={24} color={props => props.theme.colors.accent.blue} />
                  </IconWrapper>
                </ExpertHeader>

                <SpecialtiesList>
                  {expert.specialties.map((specialty, idx) => (
                    <SpecialtyItem key={idx}>{specialty}</SpecialtyItem>
                  ))}
                </SpecialtiesList>

                <StatsGrid>
                  <StatBox>
                    <StatLabel>Expérience</StatLabel>
                    <StatValue>{expert.experience}</StatValue>
                  </StatBox>
                  <StatBox>
                    <StatLabel>Clients</StatLabel>
                    <StatValue>{expert.clients}</StatValue>
                  </StatBox>
                  <StatBox>
                    <StatLabel>ROI moyen</StatLabel>
                    <StatValue>{expert.achievements.roi}</StatValue>
                  </StatBox>
                </StatsGrid>

                <CertificationTags>
                  {expert.certifications.map((cert, idx) => (
                    <CertificationTag key={idx}>{cert}</CertificationTag>
                  ))}
                </CertificationTags>
              </CardContent>
            </ExpertCard>
          ))}
        </ExpertsGrid>
      </Container>
    </ExpertiseSection>
  );
};

export default Expertise;