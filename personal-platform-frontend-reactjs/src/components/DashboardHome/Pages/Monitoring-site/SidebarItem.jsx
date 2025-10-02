import React from 'react';
import styled from 'styled-components';

const NavButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  text-align: left;
  transition: all 0.2s;
  background: ${props => (props.isActive ? 'rgba(30, 58, 138, 0.5)' : 'transparent')};
  color: ${props => (props.isActive ? '#60a5fa' : '#d1d5db')};
  border: none;
  border-right: ${props => (props.isActive ? '4px solid #60a5fa' : 'none')};
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.isActive ? 'rgba(30, 58, 138, 0.5)' : 'rgba(31, 41, 55, 0.5)')};
  }
`;

// Define the SidebarItem component
const SidebarItem = ({ icon, title, isActive, onClick }) => (
  <NavButton isActive={isActive} onClick={onClick}>
    {icon}
    <span>{title}</span>
  </NavButton>
);

export default SidebarItem;
