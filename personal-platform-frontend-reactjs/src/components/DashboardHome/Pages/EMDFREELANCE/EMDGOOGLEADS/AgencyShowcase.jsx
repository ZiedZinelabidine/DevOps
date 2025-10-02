import React from 'react';
import styled from 'styled-components';
import { Star, Award, TrendingUp, Users, Globe, CheckCircle } from 'lucide-react';

const ShowcaseSection = styled.section`
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
  line-height: 1.6;
`;

const AgenciesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AgencyCard = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const AgencyImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const AgencyBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.theme.colors.accent.blue};
  color: ${props => props.theme.colors.text.primary};
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AgencyContent = styled.div`
  padding: 1.5rem;
`;

const AgencyName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const AgencyLocation = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AgencyStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent.blue};
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const SpecialtiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const SpecialtyItem = styled.li`
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactButton = styled.a`
  display: block;
  text-align: center;
  background: ${props => props.theme.colors.accent.blue};
  color: ${props => props.theme.colors.text.primary};
  padding: 0.75rem;
  border-radius: ${props => props.theme.borderRadius.md};
  text-decoration: none;
  font-weight: 500;
  margin-top: 1.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const AgencyShowcase = () => {
  const agencies = [
    {
      name: "DigitalBoost Paris",
      location: "Paris",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      badge: "Premier Partner",
      rating: 4.9,
      clients: 150,
      experience: 8,
      specialties: [
        "Search Ads",
        "Shopping Ads",
        "Display Network",
        "Performance Max"
      ]
    },
    {
      name: "WebPerform Lyon",
      location: "Lyon",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      badge: "Partner",
      rating: 4.8,
      clients: 120,
      experience: 6,
      specialties: [
        "Local Campaigns",
        "E-commerce",
        "Lead Generation",
        "Video Ads"
      ]
    },
    {
      name: "AdsMasters Bordeaux",
      location: "Bordeaux",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
      badge: "Premier Partner",
      rating: 4.7,
      clients: 90,
      experience: 5,
      specialties: [
        "B2B Marketing",
        "App Campaigns",
        "Remarketing",
        "Analytics"
      ]
    }
  ];

  return (
    <ShowcaseSection id="agencies">
      <Container>
        <Header>
          <Title>Meilleures Agences Google Ads</Title>
          <Description>
            Découvrez notre sélection d'agences Google Ads certifiées en France. 
            Des experts reconnus pour leur excellence dans la gestion de campagnes 
            publicitaires et l'optimisation des performances.
          </Description>
        </Header>

        <AgenciesGrid>
          {agencies.map((agency, index) => (
            <AgencyCard key={index}>
              <AgencyImage style={{ backgroundImage: `url(${agency.image})` }}>
                <AgencyBadge>
                  <Award size={16} />
                  {agency.badge}
                </AgencyBadge>
              </AgencyImage>
              
              <AgencyContent>
                <AgencyName>{agency.name}</AgencyName>
                <AgencyLocation>
                  <Globe size={16} />
                  {agency.location}
                </AgencyLocation>

                <AgencyStats>
                  <StatItem>
                    <StatValue>{agency.rating}</StatValue>
                    <StatLabel>
                      <Star size={14} className="inline" /> Note
                    </StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>{agency.clients}+</StatValue>
                    <StatLabel>
                      <Users size={14} className="inline" /> Clients
                    </StatLabel>
                  </StatItem>
                </AgencyStats>

                <SpecialtiesList>
                  {agency.specialties.map((specialty, idx) => (
                    <SpecialtyItem key={idx}>
                      <CheckCircle size={16} />
                      {specialty}
                    </SpecialtyItem>
                  ))}
                </SpecialtiesList>

                <ContactButton href="#contact">
                  Contacter l'agence
                </ContactButton>
              </AgencyContent>
            </AgencyCard>
          ))}
        </AgenciesGrid>
      </Container>
    </ShowcaseSection>
  );
};

export default AgencyShowcase;