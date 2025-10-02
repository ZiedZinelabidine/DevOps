import React from 'react';
import { ExternalLink, Gift, Server, Code, Database, Users, ShoppingBag } from 'lucide-react';
import styled from 'styled-components';

const offers = [
  {
    title: 'Opportunités Développeurs',
    description: 'Découvrez des opportunités passionnantes pour les développeurs',
    icon: Code,
    links: [
      { name: 'Infogerance serveur', url: 'https://itgalaxy.io/infogerance-serveur' },
      { name: 'Freelance application', url: 'https://itgalaxy.io/freelance-application' },
      { name: 'Freelance Web', url: 'https://itgalaxy.io/freelance-web' },
      { name: 'Freelance IT', url: 'https://itgalaxy.io/freelance-it' },
      { name: 'Freelance dev', url: 'https://itgalaxy.io/freelance-dev' },
      { name: 'Freelance digital marketing', url: 'https://itgalaxy.io/freelance-digital-marketing' },
      { name: 'Freelance informatique', url: 'https://itgalaxy.io/freelance-informatique' },
      { name: 'Freelance developpeur', url: 'https://itgalaxy.io/freelance-developpeur' },
      { name: 'Freelance designer', url: 'https://itgalaxy.io/freelance-designer' },
    ],
    color: '#3B82F6',
  },
  {
    title: 'Développeurs',
    description: 'Rejoignez notre communauté de développeurs',
    icon: Users,
    links: [
      { name: 'Infogérance devop', url: 'https://itgalaxy.io/infogerance-devops' },
      { name: 'Freelance info', url: 'https://itgalaxy.io/freelance-info' },
      { name: 'Freelance informatique', url: 'https://itgalaxy.io/freelance-informatique' },
      { name: 'Freelance SEO', url: 'https://itgalaxy.io/freelance-seo' },
      { name: 'Freelance graphiste', url: 'https://itgalaxy.io/freelance-graphiste' },
      { name: 'Freelance app', url: 'https://itgalaxy.io/freelance-app' },
      { name: 'Freelance wordpress', url: 'https://itgalaxy.io/freelance-wordpress' },
      { name: 'Freelance site', url: 'https://itgalaxy.io/freelance-site' },

    ],
    color: '#F59E0B',
  },

  {
    title: 'App as a Service',
    description: 'Solutions cloud complètes pour vos applications',
    icon: Server,
    links: [
      { name: 'Demandez un devis', url: 'https://itgalaxy.io/svc/app-as-service' },
    ],
    color: '#8B5CF6',
  },
  {
    title: 'Marketplace as a Service',
    description: 'Infrastructure cloud évolutive et sécurisée',
    icon: Database,
    links: [
        { name: 'Demandez un devis', url: 'https://itgalaxy.io/svc/infra-as-service' },
    ],
    color: '#EF4444',
  },
  {
    title: 'Formations Complètes',
    description: 'Accédez à des formations professionnelles de haute qualité',
    icon: Gift,
    links: [
        { name: 'Formation Kubernetes', url: 'https://formations-k8s.itgalaxy.io/introduction-kubernetes/' },
        { name: 'Formation Frontend: svelte , react , angular , lit ...', url: 'https://formations-developpeur-frontend.itgalaxy.io/alpine-vs-aurelia1-comparison/' },
        { name: 'Formation Git', url: 'https://formations-gitlab.itgalaxy.io/les-base-de-git-/' },
        { name: 'Formation Gitlab', url: 'https://formations-gitlab.itgalaxy.io/installation-gitlab' },
        { name: 'Formation AWS Services', url: 'https://formations-aws.itgalaxy.io/introduction-aws-services' },
        { name: 'Formation Terraform', url: 'https://formations-terraform.itgalaxy.io/premier-pas-avec-terraform--terraform-init/' },
    ],
    color: '#10B981',
  },

  {
    title: 'Marketplace',
    description: 'Découvrez notre place de marché de services',
    icon: ShoppingBag,
    links: [
      { name: 'Serveurs Ubuntu', url: 'https://itgalaxy.io/marketplaceubuntu' },
      { name: 'Serveurs Debian', url: 'https://itgalaxy.io/marketplacedebian' },
      { name: 'Serveurs RedHat', url: 'https://itgalaxy.io/marketplaceredhat' },
      { name: 'Base de donnée Postgres', url: 'https://itgalaxy.io/marketplacepostgres' },
      { name: 'Base de donnée Mysql', url: 'https://itgalaxy.io/marketplacemysql' },
      { name: 'Base de donnée MongoDB', url: 'https://itgalaxy.io/marketplacemongodb' }
    ],
    color: '#6366F1',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 50px;
  margin-bottom: 100px;
  margin: 10rem;

`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.textSecondary};
  max-width: 42rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-left: 0.75rem;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
`;

const Offers = () => {
  return (
    <Container>
      <Header>
        <Title>Decouvrez plus d'Offres</Title>
        <Subtitle>
          Découvrez notre gamme complète de services et formations pour accélérer votre carrière
        </Subtitle>
      </Header>

      <Grid>
        {offers.map((offer, index) => {
          const Icon = offer.icon;
          return (
            <Card key={index} color={offer.color}>
              <CardHeader>
                <Icon style={{ color: offer.color }} />
                <CardTitle>{offer.title}</CardTitle>
              </CardHeader>
              
              <CardDescription>{offer.description}</CardDescription>
              
              <LinkContainer>
                {offer.links.map((link, linkIndex) => (
                  <StyledLink
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={offer.color}
                  >
                    <ExternalLink />
                    {link.name}
                  </StyledLink>
                ))}
              </LinkContainer>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Offers;