import styled from "styled-components";

export const RootStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.15) 0%, transparent 30%),
      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 30%);
    pointer-events: none;
  }
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  align-items: center;
  padding: 3% 5%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  gap: 2rem;
  z-index: 11;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0;
  }
`;

export const TitleStyle = styled.h1`
  font-family: Inter, system-ui, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #f1f5f9;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const TypographyStyle = styled.p`
  font-family: Inter, system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  color: #94a3b8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const ButtonStyle = styled.button`
  height: 48px;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  color: #f1f5f9;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 135px;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
    font-size: 0.875rem;
  }
`;

export const ImageStyle = styled.img`
  max-width: ${props => props.isMobile ? '300px' : '500px'};
  height: auto;
  position: absolute;
  right: ${props => props.isMobile ? '50%' : '2%'};
  transform: ${props => props.isMobile ? 'translateX(50%)' : 'none'};
  bottom: ${props => props.isMobile ? '-20%' : '10%'};
  z-index: 10;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  filter: brightness(0.9) contrast(1.1);

  @media (max-width: 1200px) {
    position: relative;
    right: auto;
    bottom: auto;
    margin: 2rem auto;
    max-width: 80%;
    display: none;

  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem auto;
  }
`;

export const IconStyle = styled.div`
  position: absolute;
  right: 0;
  top: 10%;
  z-index: 2;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  img {
    max-width: 100%;
    height: auto;
    filter: brightness(0.9);
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;