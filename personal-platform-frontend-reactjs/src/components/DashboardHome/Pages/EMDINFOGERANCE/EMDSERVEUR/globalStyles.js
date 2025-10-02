import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  /* Custom gradient text */
  .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  /* Animation for the hero section background */
  @keyframes pulse {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
  }

  .animate-pulse {
    animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

export default GlobalStyles;