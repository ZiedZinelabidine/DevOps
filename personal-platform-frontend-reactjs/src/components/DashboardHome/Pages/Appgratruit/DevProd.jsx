import React, { useState } from 'react';
import { BookOpen, Rocket, Moon, Sun } from 'lucide-react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
  background: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)',
  text: '#1f2937',
  cardBg: '#ffffff',
  primary: '#2563eb',
  secondary: '#9333ea',
  accent: '#f3f4f6',
  border: '#e5e7eb'
};

const darkTheme = {
  background: 'linear-gradient(to bottom right, #111827, #1f2937)',
  text: '#f3f4f6',
  cardBg: '#1f2937',
  primary: '#3b82f6',
  secondary: '#a855f7',
  accent: '#374151',
  border: '#374151'
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    margin: 0;
    transition: all 0.3s ease;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
`;

const Content = styled.div`
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
`;

const Section = styled.section`
  background: ${props => props.theme.cardBg};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.text};
    margin: 0;
  }
`;

const Card = styled.div`
  background: ${props => props.theme.accent};
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1.5rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 1.5rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  margin: 0.5rem 0;
  padding: 0;
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.accent};
  }
`;

function DevProd() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Content>
          <Section>
            <SectionHeader>
              <BookOpen size={32} color={theme.primary} />
              <a href="https://itgalaxy.io/svc/app-as-service"> 
              <h2>Phase de développement</h2>
              </a>
            </SectionHeader>
            
            <p>
              Après avoir pris toutes les décisions clés concernant l'architecture, le type de développement 
              et le design de votre application, la prochaine étape cruciale consiste à définir le MVP 
              (Minimum Viable Product), c'est-à-dire le produit minimum viable qui offre la valeur 
              essentielle aux utilisateurs tout en nécessitant un développement minimal.
            </p>
            
            <Card>
              <h3>Points clés :</h3>
              <List>
                <li>Rédaction d'un cahier des charges détaillé</li>
                <li>Spécifications fonctionnelles et techniques</li>
                <li>Critères d'acceptation pour chaque fonctionnalité</li>
                <li>Stratégie de tests robuste</li>
              </List>
            </Card>

            <p>
              Il est essentiel de noter que des problèmes peuvent survenir à chaque phase du projet, 
              qu'il s'agisse de défis techniques, d'un manque de compétences spécifiques dans l'équipe, 
              ou de difficultés liées à certaines fonctionnalités que vous souhaitez intégrer.
            </p>
          </Section>

          <Section>
            <SectionHeader>
              <Rocket size={32} color={theme.secondary} />
              <a href="https://itgalaxy.io/svc/app-as-service"> 
              <h2>Mise en production</h2>
              </a>
            </SectionHeader>
            
            <p>
              La mise en production est la phase finale qui vous permet de lancer officiellement votre projet. 
              Cependant, cela ne signifie pas que vous avez terminé, bien au contraire.
            </p>

            <Grid>
              <Card>
              <a href="https://itgalaxy.io/formations/monitoring-site-web-elk/commentmonitorersiteweb"> 

                <h3>Sécurité</h3>
              </a>  

                <p>
                  Il est impératif de ne pas négliger les aspects de sécurité pour protéger 
                  les données des utilisateurs et la réputation de votre application.
                </p>
              </Card>
              
              <Card>
              <a href="https://itgalaxy.io/infogerance-devops"> 
                <h3>FinOps</h3>
               </a> 
                <p>
                  Intégrer des pratiques de FinOps pour contrôler les coûts d'hébergement 
                  et d'infrastructure.
                </p>
              </Card>
            </Grid>

            <p>
              Une planification adéquate de la capacité est nécessaire pour garantir que votre 
              application puisse supporter efficacement une croissance du nombre d'utilisateurs 
              sans subir de lenteurs ou d'interruptions.
            </p>

            <Card>
              <h3>Recommandations finales :</h3>
              <List>
                <li>Effectuer des tests exhaustifs</li>
                <li>Mettre en place des systèmes de surveillance</li>
                <li>Prévoir la scalabilité</li>
                <li>Maintenir une documentation à jour</li>
              </List>
            </Card>
          </Section>
        </Content>
    </ThemeProvider>
  );
}

export default DevProd;