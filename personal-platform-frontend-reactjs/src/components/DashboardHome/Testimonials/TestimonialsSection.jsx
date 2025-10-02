import { Users } from 'lucide-react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(to right, #10B981, #34D399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #10B981;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94A3B8;
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
    border-color: #10B981;
  }
`;

const TestimonialContent = styled.div`
  color: #94A3B8;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    color: #10B981;
    position: absolute;
    top: -1rem;
    left: -1rem;
    opacity: 0.2;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10B981, #34D399);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

const AuthorInfo = styled.div`
  .name {
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  .role {
    color: #94A3B8;
    font-size: 0.875rem;
  }
`;

const testimonials = [
    {
        content: "L'équipe SEO d'ItGalaxy a transformé notre présence en ligne. Notre trafic organique a augmenté de 300% en 6 mois !",
        author: "Sophie Martin",
        role: "Directrice Marketing, E-commerce Mode",
        initials: "SM"
    },
    {
        content: "Excellent accompagnement et résultats au-delà de nos attentes. Notre ROI a été multiplié par 4 depuis que nous travaillons avec eux.",
        author: "Thomas Dubois",
        role: "CEO, SaaS B2B",
        initials: "TD"
    },
    {
        content: "Une expertise technique impressionnante et une vraie compréhension de nos enjeux business. Je recommande vivement !",
        author: "Marie Lambert",
        role: "Responsable Digital, Retail",
        initials: "ML"
    }
];

const TestimonialsSection = () => {
    return (
        <section>
            <SectionTitle>
                <Users />
                Témoignages Clients
            </SectionTitle>
            <SectionSubtitle>
                Découvrez ce que nos clients disent de nos services SEO
            </SectionSubtitle>
            <TestimonialsGrid>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index}>
                        <TestimonialContent>
                            {testimonial.content}
                        </TestimonialContent>
                        <TestimonialAuthor>
                            <AuthorAvatar>{testimonial.initials}</AuthorAvatar>
                            <AuthorInfo>
                                <div className="name">{testimonial.author}</div>
                                <div className="role">{testimonial.role}</div>
                            </AuthorInfo>
                        </TestimonialAuthor>
                    </TestimonialCard>
                ))}
            </TestimonialsGrid>
        </section>
    );
};

export default TestimonialsSection; 