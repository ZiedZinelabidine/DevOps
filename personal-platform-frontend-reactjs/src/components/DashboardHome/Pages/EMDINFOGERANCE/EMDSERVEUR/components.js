import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text}cc;
  text-align: center;
  max-width: 68rem;
  margin: 0 auto 4rem;
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.cardBgHover};
    transform: translateY(-4px);
  }
`;

export const Button = styled.button`
  background: ${props => props.theme.colors.secondary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const GradientBackground = styled.div`
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.gradientFrom},
    ${props => props.theme.colors.gradientTo}
  );
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: ${props => props.theme.colors.secondary}20;
  color: ${props => props.theme.colors.secondary};
`;