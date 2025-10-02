import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';
import { useSprings, animated } from 'react-spring';

export const theme = {
    light: {
      background: 'linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 50%, #FDF2F8 100%)',
      cardBg: 'rgba(255, 255, 255, 0.7)',
      text: '#1F2937',
      textSecondary: '#6B7280',
      primary: '#9333EA',
      primaryLight: '#F3E8FF',
      border: '#E9D5FF',
      headerBg: 'rgba(255, 255, 255, 0.8)',
      buttonGradient: 'linear-gradient(to right, #9333EA, #DB2777)',
      buttonHoverGradient: 'linear-gradient(to right, #7E22CE, #BE185D)',
      success: '#10B981',
      danger: '#EF4444',
    },
    dark: {
      background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
      cardBg: 'rgba(30, 41, 59, 0.7)',
      text: '#F8FAFC',
      textSecondary: '#94A3B8',
      primary: '#38BDF8',
      primaryLight: 'rgba(56, 189, 248, 0.2)',
      border: '#1E40AF',
      headerBg: 'rgba(15, 23, 42, 0.8)',
      buttonGradient: 'linear-gradient(to right, #38BDF8, #818CF8)',
      buttonHoverGradient: 'linear-gradient(to right, #0EA5E9, #6366F1)',
      success: '#34D399',
      danger: '#F87171',
    },
  };

export  const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].cardBg};
  border-radius: 1.5rem;
  border: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  backdrop-filter: blur(8px);
`;

export const EmptyStateIcon = styled.div`
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  margin-bottom: 1.5rem;
  
  svg {
    width: 64px;
    height: 64px;
    opacity: 0.8;
  }
`;

export const EmptyStateTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].buttonGradient};
  -webkit-background-clip: text;
  color: transparent;
`;

export const EmptyStateText = styled.p`
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const RefreshButtonEmpty = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].buttonGradient};
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].buttonHoverGradient};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    animation: ${props => props.isRefreshing ? rotate : 'none'} 1s linear infinite;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].background};
    color: ${props => props.theme[props.isDark ? 'dark' : 'light'].text};
    transition: background-color 0.3s, color 0.3s;
    overflow-x: hidden;
    overflow-y: hidden;

  }
`;

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].headerBg};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s;
`;

export const HeaderContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  h1 {
    font-size: 1.875rem;
    font-weight: bold;
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].buttonGradient};
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const ThemeToggle = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight};
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary}20;
  }
`;

export const Main = styled.main`
  max-width: 28rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  position: relative;
  height: calc(100vh - 6rem);
`;

export const CardContainer = styled.div`
  position: relative;
  height: 32rem;
  touch-action: none;
`;

export const Card = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].cardBg};
  border-radius: 1.5rem;
  border: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  overflow: hidden;
  touch-action: none;
  cursor: grab;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:active {
    cursor: grab;
  }
`;

export const CardContent = styled.div`
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight};
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ScrollableContent = styled.div`
  height: calc(100% - 2rem);
  overflow-y: none;
  padding-right: 0.5rem;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight}20;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary}40;
    border-radius: 4px;
  }
`;

export const Section = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
`;

export const ActionButtons = styled.div`
  position: fixed;
  left: 50%;
  margin-top: 2%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 20;
`;

export const ActionButton = styled.button`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.variant === 'like' ? props.theme[props.isDark ? 'dark' : 'light'].success : props.theme[props.isDark ? 'dark' : 'light'].danger};
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    
    &::after {
      position: absolute;
      top: -2.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      white-space: nowrap;
    }
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const SkillBadge = styled(Badge)`
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primaryLight}80;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].textSecondary};
  font-size: 0.875rem;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const DetailedDescription = styled.div`
  border-top: 1px solid ${props => props.theme[props.isDark ? 'dark' : 'light'].border};
  max-height: ${props => props.expanded ? '500px' : '100px'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;


export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 1.5%;
  margin-bottom: 2%;
  padding-inline: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  border-radius: 15px;
  flex: 1;
  min-width: 200px;
  height: 37px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const AdvancedSearchButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  height: 50px;
  margin-top: 1%;

  ${props => props.variant === 'primary' && `
    background: #4F46E5;
    color: white;
    border: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #4338CA;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.variant === 'secondary' && `
    background: #111827;
    color: white;
    border: 1px solid #374151;

    &:hover {
      background: #1F2937;
    }
  `}
`;

export const NewJobButtonContainer = styled.button`
  background-color: black;
  height: 50px;
  margin-top: 10px;
  min-width: 160px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    background: green;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

export const SideDescription = styled.div`
  position: fixed;
  top: 50%;
  ${props => props.side}: ${props => props.side === 'left' ? '5%' : '5%'};
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].textSecondary};
  text-align: center;
  
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ArrowIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  opacity: 0.6;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(${props => props.side === 'left' ? '-10px' : '10px'});
    }
  }
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  max-width: 200px;
  line-height: 1.4;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RefreshButton = styled.button`
  position: relative;
  margin-top: 5%;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary};
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    background: ${props => props.theme[props.isDark ? 'dark' : 'light'].primary}CC;

    svg {
      animation: ${rotate} 1s linear infinite;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  &.refreshing svg {
    animation: ${rotate} 1s linear infinite;
  }
`;


export const StarContainer = styled.div`
  display: flex;
`;

export const StyledHorizontalDiv = styled.div`
  display: flex;
  justify-content: space-between; // This spreads the items out
  align-items: center; // Center items vertically
  gap: 15px; // Space between items
  width: 100%; // Ensure it takes the full width of its parent
`;
