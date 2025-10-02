import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const getInitialLocale = () => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) return savedLocale;
  
  const browserLocale = navigator.language.split(/[-_]/)[0];
  return browserLocale === 'fr' ? 'fr' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  useEffect(() => {
    localStorage.setItem('locale', currentLocale);
  }, [currentLocale]);

  return (
    <LanguageContext.Provider value={{ currentLocale, setCurrentLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
