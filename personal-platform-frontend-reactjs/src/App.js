import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { Router } from "./routes/routes";
import { messages, defaultLocale } from './locales';
import { LanguageProvider, useLanguage } from './core/contexts/LanguageContext';

function AppContent() {
  const { currentLocale } = useLanguage();
  
  // Debug translations
  console.log('Current locale:', currentLocale);
  console.log('Available messages:', messages);
  console.log('Current messages:', messages[currentLocale]);
  
  return (
    <IntlProvider 
      messages={messages['fr']} 
      locale={'fr'} 
      defaultLocale={'fr'}
      onError={(err) => {
        console.error('IntlProvider error:', err);
      }}
    >
      <div className="App content-desk" id="app">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
