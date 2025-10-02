import { Code } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #0a0a0a;
  color: #ffffff;
  display: flex;
  padding-left: 4%;
  margin-top: 5%;
  padding: 4%;
`;

const Section = styled.section`
  max-width: 1700px;
  width: 100%;
`;

const Header = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(to right, #60a5fa, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
   margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: gray;
  font-size: 19px;
  max-width: 100%;
  lineheight: 1.5;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 0.5rem;
  transition: transform 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(to right, #60a5fa, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  padding: 10px;
`;

const FeatureDescription = styled.p`
  color: #a0aec0;
  line-height: 1.6;
`;

const handelRedirect = (slug) => {
  window.location.href = `${process.env.REACT_APP_FRONTED_URL}/${slug}`;
}

function HowItWorks() {
  return (
    <Container>
      <Section>
        <Header>
          <Title>Découvrir les projets et les missions freelance informatique , partagées notre plateform de prestataires de services informatiques totalement gratuit</Title>
          <Subtitle>
            Rejoignez une communauté d'experts en informatique et accédez gratuitement aux projets partagés par nos clients, sans abonnement nécessaire.
          </Subtitle>
        </Header>

        <FeaturesGrid>

          <FeatureCard onClick={() => handelRedirect('freelance-it')}>
            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle>Projets sur Wordpress</FeatureTitle>
            </div>
          </FeatureCard>

          <FeatureCard onClick={() => handelRedirect('freelance-application')}>
            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle>Projets sur devellopement Mobiles</FeatureTitle>
            </div>
          </FeatureCard>

          <FeatureCard onClick={() => handelRedirect('freelance-developpeur')} >
            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle>Projets sur devellopement des APIs Rest</FeatureTitle>
            </div>
          </FeatureCard>
        </FeaturesGrid>

        <FeaturesGrid>

          <FeatureCard onClick={() => handelRedirect('freelance-dev')} >
            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle>Projets sur des sites Shopify</FeatureTitle>
            </div>
          </FeatureCard>

          <FeatureCard onClick={() => handelRedirect('infogerance-serveur')}>
            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle>Projets sur Cloud AWS services</FeatureTitle>
            </div>
          </FeatureCard>

          <FeatureCard onClick={() => handelRedirect('freelance-designer')}>
            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle>Projets sur des tests automatisés</FeatureTitle>
            </div>
          </FeatureCard>
        </FeaturesGrid>

        <FeaturesGrid>
          <FeatureCard onClick={() => handelRedirect('freelance-web')}>
            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle> Projets sur des sites web </FeatureTitle>
            </div>
          </FeatureCard>

          <FeatureCard onClick={() => handelRedirect('freelance-developpeur-web')}>

            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle> Projets sur devellopement des applications backend </FeatureTitle>
            </div>
          </FeatureCard>

          <FeatureCard onClick={() => handelRedirect('freelance-digital-marketing')}>

            <div style={{ display: 'flex' }}>
              <IconWrapper>
                <Code size={24} color="#0a0a0a" />
              </IconWrapper>
              <FeatureTitle>Projets sur optimisation et amélioration du SEO </FeatureTitle>
            </div>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

    </Container>
  );
}

export default HowItWorks;