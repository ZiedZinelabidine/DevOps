import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.text.primary};

  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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
  color: ${props => props.theme.colors.text.primary};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  max-width: 42rem;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  max-width: 48rem;
  margin: 0 auto;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Quote = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.75;
`;

const Author = styled.div`
  margin-top: 1.5rem;
`;

const AuthorName = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
`;

const AuthorTitle = styled.p`
  color: ${props => props.theme.colors.text.secondary};
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Dot = styled.span`
  width: ${props => props.active ? '1.5rem' : '0.5rem'};
  height: 0.5rem;
  border-radius: 9999px;
  background-color: ${props => props.active ? props.theme.colors.text.primary : props.theme.colors.text.secondary};
  transition: all 0.3s ease;
`;


const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie Durand",
      position: "Directrice Marketing",
      company: "Mode Élégance",
      text: "Notre ROI a augmenté de 230% en seulement 3 mois grâce à une refonte complète de nos campagnes Google Ads. Une expertise exceptionnelle et un suivi personnalisé qui a transformé notre stratégie digitale.",
      rating: 5
    },
    {
      name: "Thomas Lefebvre",
      position: "Fondateur",
      company: "EcoSolutions",
      text: "Après plusieurs tentatives infructueuses avec d'autres agences, nous avons enfin trouvé un expert qui comprend réellement notre secteur. Le CPA a diminué de 40% tout en augmentant nos conversions.",
      rating: 5
    },
    {
      name: "Marie Bertrand",
      position: "Responsable E-commerce",
      company: "MaisonDeco",
      text: "La mise en place de campagnes Google Shopping optimisées a considérablement augmenté notre visibilité et nos ventes en ligne. Un accompagnement professionnel avec des rapports clairs et des résultats tangibles.",
      rating: 4
    },
    {
      name: "Alexandre Moreau",
      position: "Directeur Général",
      company: "TechInnovate",
      text: "Un partenariat qui dure depuis plus de 2 ans maintenant. La réactivité, la transparence et surtout les résultats sont au rendez-vous mois après mois. Un investissement qui rapporte bien plus qu'il ne coûte.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <Header>
          <Title>Ce que disent mes clients</Title>
          <Subtitle>
            La satisfaction de mes clients est ma priorité. Découvrez leurs expériences et résultats.
          </Subtitle>
        </Header>

        <TestimonialCard>
          <Rating>
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5" fill="currentColor" color="currentColor" />
            ))}
          </Rating>

          <Quote>"{testimonials[currentIndex].text}"</Quote>

          <Author>
            <AuthorName>{testimonials[currentIndex].name}</AuthorName>
            <AuthorTitle>
              {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
            </AuthorTitle>
          </Author>
        </TestimonialCard>

        <Navigation>
          <NavButton onClick={goToPrevious} aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </NavButton>

          <Dots>
            {testimonials.map((_, index) => (
              <Dot key={index} active={index === currentIndex} />
            ))}
          </Dots>

          <NavButton onClick={goToNext} aria-label="Next testimonial">
            <ChevronRight size={24} />
          </NavButton>
        </Navigation>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;