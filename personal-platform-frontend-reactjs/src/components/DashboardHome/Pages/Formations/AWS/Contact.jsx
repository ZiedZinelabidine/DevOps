import styled from 'styled-components';

// Composants stylisés
const CTASection = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #252f3e, #232f3e);
  opacity: 0.5;
`;

const MeshBackground = styled.div`
  position: absolute;
  inset: 0;
  background: url('/path-to-mesh-pattern.svg'); /* Remplacez par le chemin de votre motif mesh */
  opacity: 0.3;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff9900, white, #ff9900);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background: linear-gradient(to right, #ff9900, #ff5500);
  color: #1a1a1a;
  font-weight: 500;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  box-shadow: 0 4px 6px -1px rgba(255, 153, 0, 0.2), 0 2px 4px -2px rgba(255, 153, 0, 0.2);

  &:hover {
    background: linear-gradient(to right, #ff9900cc, #ff5500cc);
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(255, 153, 0, 0.3), 0 4px 6px -4px rgba(255, 153, 0, 0.3);
  }
`;

// Composant principal
const Contact = () => {
    
    const TEXTS = {
        header: {
            title: "Besoin d'une formation aws plus avancé ?",
            subtitle: "Besoin d'avoir plus de compéténces sur l'utilisation de AWS ECS , AWS EKS ,AWS FinOps , automatisation de déploiement ... ",
            contact: "Contactez-Nous"
        },
      }

  return (
    <CTASection>
      <BackgroundGradient />
      <MeshBackground />
      <Container>
        <Title>{TEXTS.header.title}</Title>
        <Subtitle>{TEXTS.header.subtitle}</Subtitle>
        <CTAButton onClick={() => (window.location.href = '/svc/infra-as-service')}>
        {TEXTS.header.contact}
        </CTAButton>
      </Container>
    </CTASection>
  );
};

export default Contact;