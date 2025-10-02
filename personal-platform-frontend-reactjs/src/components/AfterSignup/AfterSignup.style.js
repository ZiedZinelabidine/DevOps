import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Background = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #000000 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 42rem;
  z-index: 1;
`;

export const Logo = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  color: white;
`;

export const ContentCard = styled.div`
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  line-height: 1.75;
`;

export const StyleCardRed = styled.p`
  font-size: 1.125rem;
  color: #f87171;
  margin-bottom: 1.5rem;
`;

export const AcceptProposalButton = styled.button`
  background: linear-gradient(to right, #10b981, #14b8a6);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  width: auto;
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #059669, #0d9488);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  animation: ${spin} 1s linear infinite;
`;

export const BackgroundPattern = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  filter: brightness(0.3) contrast(1.2);
`;

export const BackgroundOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
`;