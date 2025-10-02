import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AgencySearchPage from './AgencySearchPage';
import Header from 'components/Header/Header';
import FooterHome from '../FooterHome/FooterHome';
import { useParams, useLocation } from "react-router-dom";
import agenceSeoText from './TEXT/agence-seo.json';
import agencedecommunicationniceTEXT from './TEXT/agence-de-communication-nice.json';
import agenceMarketingText from './TEXT/agence-marketing.json';
import agenceSeoAngersText from './TEXT/agence-seo-angers.json';
import agenceSeoCaenText from './TEXT/agence-seo-caen.json';
import agenceSeoMarseilleText from './TEXT/agence-seo-marseille.json';
import agenceSeoMonpellierText from './TEXT/agence-seo-montpellier.json';
import agenceSeoNiceText from './TEXT/agence-seo-nice.json';
import agenceSeoStEtienneText from './TEXT/agence-seo-saint-etienne.json';
import agenceSeoStrasbourgText from './TEXT/agence-seo-strasbourg.json';


const GlobalStyle = createGlobalStyle`
  :root {
      --color-background: #111827;
      --color-surface: #1f2937;
      --color-text: #f3f4f6;
      --color-text-secondary: #d1d5db;
      --color-border: #374151;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-background: #111827;
      --color-surface: #1f2937;
      --color-text: #f3f4f6;
      --color-text-secondary: #d1d5db;
      --color-border: #374151;
    }
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    transition: all 0.2s;
  }
`;

function AgenceSearch() {

  // Initialisation
  let TEXT = {};

  let { region, ville, skill, price, id } = useParams();

  const location = useLocation();
    
      // Utilisez pathname pour faire la correspondance
      switch (location.pathname) {
        case '/agence-seo':
          skill = 'SEO';
          TEXT = agenceSeoText;            
         break;
    
        case '/agence-de-communication-nice':
          skill = 'SEO';
          ville = 'Nice';
          TEXT = agencedecommunicationniceTEXT;
          break;
    
        case '/agence-marketing':
          skill = 'SEO';
          ville = 'Paris';
          TEXT = agenceMarketingText;
          break;
    
        case '/agence-seo-caen':
          skill = 'SEO';
          ville = 'Caen';
          TEXT = agenceSeoCaenText;

          break;
    
        case '/agence-seo-marseille':
          skill = 'SEO';
          ville = 'Marseille';
          TEXT = agenceSeoMarseilleText;
          break;
    
        case '/agence-seo-montpellier':
          skill = 'SEO';
          ville = 'Montpellier';
          TEXT = agenceSeoMonpellierText;
          break;
    
        case '/agence-seo-nice':
          skill = 'SEO';
          region = 'Provence-Alpes-Côte d\'Azur';
          TEXT = agenceSeoNiceText;
          break;
    
        case '/agence-seo-angers':
          skill = 'SEO';
          ville = 'Angers';
          TEXT = agenceSeoAngersText;
          break;
    
        case '/agence-seo-saint-etienne':
          skill = 'SEO';
          ville = 'Saint-Étienne';
          TEXT = agenceSeoStEtienneText;
          break;

          // le dernier
        case '/agence-seo-strasbourg':
            skill = 'SEO';
            ville = 'Strasbourg';
            TEXT = agenceSeoStrasbourgText;
            break;  
    
        case '/agence-seo-shopify':
          skill = 'Shopify';
          break;
    
        case '/agence-seo-grenoble':
          skill = 'SEO';
          ville = 'Grenoble';
          break;
    
        case '/agence-seo-annecy':
          skill = 'SEO';
          ville = 'Annecy';
          break;
    
        case '/agence-seo-tours':
          skill = 'SEO';
          ville = 'Tours';
          break;
    
        case '/agence-seo-toulon':
          skill = 'SEO';
          ville = 'Toulon';
          break;
    
        case '/agence-seo-reims':
          skill = 'SEO';
          ville = 'Reims';
          break;
    
        case '/agence-seo-orleans':
          skill = 'SEO';
          ville = 'Orléans';
          break;
    
        case '/agence-seo-la-roche-sur-yon':
          skill = 'SEO';
          ville = 'La Rochelle-sur-Yon';
          break;
    
        case '/agence-seo-mulhouse':
          skill = 'SEO';
          ville = 'Mulhouse';
          break;
    
        case '/agence-graphisme':
          skill = 'Design';
          ville = 'Mulhouse';
          break;
    
        case '/agence-ux-ui':
          skill = 'Design UX/UI';
          break;
    
        case '/agence-de-design':
        case '/agency-design':
        case '/agence-web-design':
          skill = 'Design'

          case '/agence-web-design-lyon':
            skill = 'Design';
            ville = 'Lyon';
            break;
      
          case '/agence-web-design-nantes':
            skill = 'Design';
            ville = 'Nantes';
            break;
      
          case '/agence-web-design-bordeaux':
            skill = 'Design';
            ville = 'Bordeaux';
            break;
      
          case '/agence-design-web':
            skill = 'Design';
            ville = 'Lyon';
            break;
      
          case '/agence-web':
          case '/agence-de-web':
            skill = 'Web';
            if (!ville) ville = 'Lyon'; // valeur par défaut si ville non définie
            break;
      
          case '/agence-web-paris':
            skill = 'Web';
            region = 'Île-de-France';
            break;
      
          case '/agence-web-a-paris':
            skill = 'Web';
            region = 'Île-de-France';
            ville = 'Paris';
            break;
      
          case '/agence-webflow':
            skill = 'Webflow';
            break;
      
          case '/agence-web-wordpress-paris':
            skill = 'WordPress';
            ville = 'Paris';
            break;
      
          case '/agence-web-normandie':
            skill = 'Web';
            ville = 'Normandie';
            break;
      
          case '/agence-web-annecy':
            skill = 'Web';
            ville = 'Annecy';
            break;
      
          case '/agence-web-angers':
            skill = 'Web';
            ville = 'Angers';
            break;
      
          default:
            // aucune correspondance, laisser les variables vides ou faire une logique par défaut.
            break;
        }
      
  return (
    <>
      <Header />
      <GlobalStyle />
      <AgencySearchPage id={id} region={region} city={ville} skill={skill} price={price} TEXT={TEXT}/>
      <FooterHome />
      
    </>
  );
}

export default AgenceSearch;