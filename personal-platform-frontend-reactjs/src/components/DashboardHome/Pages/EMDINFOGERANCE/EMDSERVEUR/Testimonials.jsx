import React from 'react';
import styled from 'styled-components';

// Constantes pour les textes
const TEXTS = {
  header: {
    title: "Témoignages Clients",
    subtitle: "Découvrez ce que nos clients disent de nos services d'infogérance et d'hébergement."
  },
  testimonials: [
    {
      quote: "Depuis que nous avons confié la gestion de nos serveurs à ServerPro, nous avons constaté une amélioration significative de la performance et de la fiabilité. Leur équipe technique est toujours disponible et réactive.",
      author: "Marie Laurent",
      company: "Directrice IT, TechFusion",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "L'expertise en sécurité de ServerPro nous a permis de renforcer considérablement notre infrastructure face aux cybermenaces. Un partenaire de confiance sur qui nous pouvons compter.",
      author: "Thomas Dubois",
      company: "CTO, SecureData",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "La migration de notre infrastructure vers leurs services d'hébergement s'est déroulée sans accroc. Leur équipe a su répondre à tous nos besoins spécifiques avec professionnalisme.",
      author: "Sophie Moreau",
      company: "Responsable SI, GreenTech",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ],
  company: {
    text: "Rejoignez plus de 500 entreprises qui nous font confiance"
  }
};

// Composants stylisés
const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.cardBg};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text}cc;
  max-width: 48rem;
  margin: 0 auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StarContainer = styled.div`
  margin-bottom: 1.5rem;
  color: #FFC107;
`;

const Quote = styled.p`
  color: ${props => props.theme.colors.text}cc;
  margin-bottom: 2rem;
  flex-grow: 1;
  font-style: italic;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const AuthorImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  object-fit: cover;
  margin-right: 1rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const AuthorRole = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text}cc;
`;

const CompanySection = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const CompanyText = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.text}cc;
  margin-bottom: 1.5rem;
`;

const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  opacity: 0.7;
`;

const LogoPlaceholder = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
`;

const LogoBox = styled.div`
  height: 1.5rem;
  width: 6rem;
  background: ${props => props.theme.colors.border};
  border-radius: 0.25rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

// Composant principal
const Testimonials = () => {
  return (
    <TestimonialsSection id="témoignages">
      <Container>
        <Header>
          <Title>{TEXTS.header.title}</Title>
          <Subtitle>{TEXTS.header.subtitle}</Subtitle>
        </Header>

        <TestimonialsGrid>
          {TEXTS.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <CardContent>
                <StarContainer>
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </StarContainer>
                <Quote>"{testimonial.quote}"</Quote>
                <AuthorContainer>
                  <AuthorImage 
                    src={testimonial.image} 
                    alt={testimonial.author}
                  />
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorRole>{testimonial.company}</AuthorRole>
                  </AuthorInfo>
                </AuthorContainer>
              </CardContent>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        
        <CompanySection>
          <CompanyText>{TEXTS.company.text}</CompanyText>
        </CompanySection>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;