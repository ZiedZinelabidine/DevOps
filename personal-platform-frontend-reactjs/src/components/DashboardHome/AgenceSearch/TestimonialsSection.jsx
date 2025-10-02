import React from 'react';
import styled from 'styled-components';
import { Quote } from 'lucide-react';
import StarRating from './StarRating';

const Section = styled.section`
  background: var(--color-surface);
  padding: 6rem 1.5rem;
  border-top: 1px solid var(--color-border);
`;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const Subtitle = styled.p`
  text-align: center;
  color: var(--color-text-secondary);
  max-width: 36rem;
  margin: 0 auto 4rem;
  font-size: 1.125rem;
  line-height: 1.75;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: var(--color-background);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const QuoteIcon = styled(Quote)`
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const TestimonialText = styled.p`
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  flex-grow: 1;
`;

const AuthorName = styled.h4`
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const testimonials = [
  {
    text: "Grâce à cette plateforme, nous avons trouvé l'agence parfaite pour notre projet e-commerce. Le processus était simple et efficace.",
    author: "Sophie Martin",
    title: "CEO, Fashion Store",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    text: "Un excellent outil pour comparer les agences web. Les filtres sont pertinents et nous ont permis de faire le bon choix rapidement.",
    author: "Thomas Dubois",
    title: "Directeur Marketing, Tech Solutions",
    rating: 4.5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    text: "La qualité des agences référencées est impressionnante. Notre site web a été livré dans les temps et correspond parfaitement à nos attentes.",
    author: "Marie Lambert",
    title: "Fondatrice, Green Garden",
    rating: 5,
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  }
];

const TestimonialsSection = ({TEXT}) => {
  return (
    <Section id="testimonials">
      <Container>
        <Title>{TEXT.title}</Title>
        <Subtitle>
        {TEXT.description}
        </Subtitle>
        
        <Grid>
          {TEXT.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <QuoteIcon size={32} />
              <TestimonialText>{testimonial.text}</TestimonialText>
              <Author>
                <Avatar src={testimonial.avatar} alt={testimonial.author} />
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorInfo>
                <StarRating rating={testimonial.rating} size={14} />
              </Author>
            </TestimonialCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;