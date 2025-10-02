import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { createGlobalStyle } from 'styled-components';

const Theme = 'dark';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.4s ease;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --space-16: 64px;
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
  }

  [data-theme='light'] {
    --bg-color: #f8fafc;
    --text-color: #1e293b;
    --card-bg: #ffffff;
    --border-color: #e2e8f0;
    --hover-color: #3b82f6;
    --pros-bg: #f8fafc;
    --cons-bg: #f8fafc;
    --muted-text: #64748b;
    --heading-color: #0f172a;
    --shadow-color: rgba(0, 0, 0, 0.08);
    --link-color: #3b82f6;
    --primary-color: #3b82f6;
    --secondary-color: #64748b;
    --accent-color: #4f46e5;
    --success-color: #22c55e;
    --warning-color: #f59e0b;
    --error-color: #ef4444;
  }

  [data-theme='dark'] {
    --bg-color: #0f172a;
    --text-color: #e2e8f0;
    --card-bg: #1e293b;
    --border-color: #334155;
    --hover-color: #60a5fa;
    --pros-bg: #1e293b;
    --cons-bg: #1e293b;
    --muted-text: #94a3b8;
    --heading-color: #f1f5f9;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --link-color: #60a5fa;
    --primary-color: #60a5fa;
    --secondary-color: #94a3b8;
    --accent-color: #818cf8;
    --success-color: #34d399;
    --warning-color: #fbbf24;
    --error-color: #f87171;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
`;

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


export const ThemeProvider= ({ children }) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage<Theme>('theme', defaultDark ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle />
      {children}
    </ThemeContext.Provider>
  );
};