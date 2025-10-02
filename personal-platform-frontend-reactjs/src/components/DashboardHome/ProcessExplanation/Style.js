import styled from 'styled-components';

export const GlassEffect = styled.div`
  background-color: rgba(31, 41, 55, 0.5);
  backdrop-filter: blur(16px);
`;

export const GradientBorder = styled(GlassEffect)`
  border: 1px solid transparent;
  background-image: linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2));
`;

export const GradientText = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, rgb(96, 165, 250), rgb(192, 132, 252));
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.3s;

  ${props => props.variant === 'primary' && `
    background-image: linear-gradient(to right, rgb(59, 130, 246), rgb(168, 85, 247));
    color: white;
    &:hover {
      background-image: linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234));
      transform: scale(1.05);
    }
  `}

  ${props => props.variant === 'glass' && `
    background-color: rgba(31, 41, 55, 0.5);
    backdrop-filter: blur(16px);
    color: rgb(156, 163, 175);
    &:hover {
      color: rgb(96, 165, 250);
    }
  `}
`;

export const NavLink = styled.a`
  color: rgb(209, 213, 219);
  transition: color 0.3s;

  &:hover {
    color: rgb(96, 165, 250);
  }
`;

export const ProcessStepNumber = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, rgb(59, 130, 246), rgb(168, 85, 247));
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    background-image: linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234));
  }
`;

export const ProcessStepConnector = styled.div`
  height: 100%;
  width: 0.125rem;
  margin-top: 0.5rem;
  background-image: linear-gradient(to bottom, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5));
`;

export const ProcessStepIcon = styled.div`
  color: rgb(96, 165, 250);
  margin-right: 0.5rem;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.1);
    color: rgb(192, 132, 252);
  }
`;