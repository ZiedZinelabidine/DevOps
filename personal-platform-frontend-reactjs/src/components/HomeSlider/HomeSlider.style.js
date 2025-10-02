import { Search } from "lucide-react";
import styled, { keyframes } from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 20%,
        rgba(96, 165, 250, 0.1) 0%,
        transparent 25%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(168, 85, 247, 0.1) 0%,
        transparent 25%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(59, 130, 246, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const StyleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const StyleRadios = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const StyleSpanRadio = styled.span`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${(props) =>
    props.selectedOption === props.option ? "#318CE7" : "transparent"};
  margin-right: 0.5rem;
  transition: background-color 0.2s ease;

  @media (max-width: 768px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const StyleLabelRadio = styled.label`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.125rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const StyleText = styled.p`
  color: gray;
  text-align: center;
  font-size: 1.125rem;
  max-width: 800px;
  line-height: 1.6;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1.5rem auto;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background-color: #111827;
  border: 1px solid #6366f1;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.875rem 0.875rem 0.875rem 2.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  background: white;
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientMove} 3s linear infinite;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TypewriterContainer = styled.div`
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    min-height: 2rem;
    margin-bottom: 1rem;
  }
`;

export const TypewriterText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #60a5fa, #a855f7, #60a5fa);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientMove} 3s linear infinite;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Cursor = styled.span`
  animation: ${blink} 1s step-end infinite;
`;

export const UserTypeSelector = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.isDark ? '#1F2937' : '#F3F4F6'};
  padding: 0.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  box-shadow: ${props => props.isDark 
    ? 'inset 0 2px 4px rgba(0, 0, 0, 0.2)' 
    : 'inset 0 2px 4px rgba(0, 0, 0, 0.06)'};
  transition: all 0.3s ease;
`;

export const UserTypeButton = styled.button`
  position: relative;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.active 
    ? props.isDark ? '#818CF8' : '#4F46E5'
    : props.isDark ? '#9CA3AF' : '#6B7280'};
  background: transparent;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  flex: 1;

  &:hover {
    color: ${props => props.isDark ? '#818CF8' : '#4F46E5'};
  }

  ${props => props.active && `
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${props.isDark ? '#111827' : 'white'};
      border-radius: 0.75rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, ${props.isDark ? '0.3' : '0.1'}), 
                 0 2px 4px -1px rgba(0, 0, 0, ${props.isDark ? '0.2' : '0.06'});
      z-index: -1;
      animation: slideIn 0.3s ease;
    }
  `}

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ThemeSwitcher = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${props => props.isDark ? '#1F2937' : '#F3F4F6'};
  border: 1px solid ${props => props.isDark ? '#374151' : '#E5E7EB'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isDark ? '#F3F4F6' : '#4B5563'};

  &:hover {
    background: ${props => props.isDark ? '#374151' : '#E5E7EB'};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;