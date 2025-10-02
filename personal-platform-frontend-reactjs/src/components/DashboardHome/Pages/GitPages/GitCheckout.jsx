import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GitBranch, GitCommit, GitFork, GitMerge, GitPullRequest, Moon, Sun } from 'lucide-react';
import Offers from '../Offres';

// Define theme types
const lightTheme = {
  body: '#f3f4f6',
  card: '#ffffff',
  text: '#1f2937',
  textSecondary: '#4b5563',
  textTertiary: '#6b7280',
  header: '#4f46e5',
  headerText: '#ffffff',
  subtitleText: '#e0e7ff',
  iconColor: '#4f46e5',
  commandBlock: '#f3f4f6',
  commandText: '#1f2937',
  border: '#e5e7eb',
  warning: '#fffbeb',
  warningBorder: '#f59e0b',
  warningText: '#92400e',
  toggleButton: '#4f46e5',
  toggleButtonText: '#ffffff',
  exampleBlock: '#f8fafc',
  exampleBorder: '#e2e8f0',
  scenarioBlock: '#f0f9ff',
  scenarioBorder: '#bae6fd',
  scenarioText: '#0c4a6e'
};

const darkTheme = {
  body: '#111827',
  card: '#1f2937',
  text: '#f9fafb',
  textSecondary: '#e5e7eb',
  textTertiary: '#d1d5db',
  header: '#4338ca',
  headerText: '#ffffff',
  subtitleText: '#c7d2fe',
  iconColor: '#818cf8',
  commandBlock: '#374151',
  commandText: '#e5e7eb',
  border: '#374151',
  warning: '#422006',
  warningBorder: '#d97706',
  warningText: '#fbbf24',
  toggleButton: '#4338ca',
  toggleButtonText: '#ffffff',
  exampleBlock: '#1e293b',
  exampleBorder: '#334155',
  scenarioBlock: '#082f49',
  scenarioBorder: '#0369a1',
  scenarioText: '#bae6fd'
};

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;



const Card = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.card};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Header = styled.div`
  background-color: ${props => props.theme.header};
  padding: 1.5rem;
  color: ${props => props.theme.headerText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${props => props.theme.headerText};
  transition: all 0.3s ease;
  margin-top: 0;
`;

const IconWrapper = styled.span`
  margin-right: 0.75rem;
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
  color: ${props => props.theme.subtitleText};
  transition: all 0.3s ease;
  margin-bottom: 0;
`;

const Content = styled.div`
  padding: 1.5rem;
  transition: all 0.3s ease;
`;

const Intro = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  line-height: 1.6;
`;

const CommandList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 0.3s ease;
`;

const SectionContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.border};
  padding-bottom: 1.5rem;
  transition: all 0.3s ease;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`;

const SectionIcon = styled.span`
  color: ${props => props.theme.iconColor};
  margin-right: 0.5rem;
  transition: all 0.3s ease;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  margin: 0;
`;

const SectionDescription = styled.p`
  color: ${props => props.theme.textTertiary};
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  line-height: 1.5;
`;

const CommandBlock = styled.div`
  background-color: ${props => props.theme.commandBlock};
  padding: 0.75rem;
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.875rem;
  overflow-x: auto;
  color: ${props => props.theme.commandText};
  transition: all 0.3s ease;
`;

const ExampleBlock = styled.div`
  background-color: ${props => props.theme.exampleBlock};
  border: 1px solid ${props => props.theme.exampleBorder};
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

const ExampleTitle = styled.p`
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

const ExampleCommand = styled.div`
  font-family: monospace;
  font-size: 0.875rem;
  color: ${props => props.theme.commandText};
  background-color: ${props => props.theme.commandBlock};
  padding: 0.5rem;
  border-radius: 0.25rem;
  overflow-x: auto;
  transition: all 0.3s ease;
`;

const ScenarioBlock = styled.div`
  background-color: ${props => props.theme.scenarioBlock};
  border: 1px solid ${props => props.theme.scenarioBorder};
  border-radius: 0.25rem;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

const ScenarioTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-top: 0;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
`;

const ScenarioDescription = styled.p`
  color: ${props => props.theme.scenarioText};
  margin-bottom: 0.75rem;
  line-height: 1.5;
  transition: all 0.3s ease;
`;

const ScenarioCommand = styled.div`
  font-family: monospace;
  font-size: 0.875rem;
  color: ${props => props.theme.commandText};
  background-color: ${props => props.theme.commandBlock};
  padding: 0.5rem;
  border-radius: 0.25rem;
  overflow-x: auto;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
`;

const ScenarioResult = styled.p`
  font-style: italic;
  color: ${props => props.theme.textSecondary};
  margin-top: 0.5rem;
  margin-bottom: 0;
  transition: all 0.3s ease;
`;

const Warning = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: ${props => props.theme.warning};
  border-left: 4px solid ${props => props.theme.warningBorder};
  border-radius: 0.25rem;
  transition: all 0.3s ease;
`;

const Important = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: red;
  border-left: 4px solid ;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
`;

const ImportantText = styled.p`
  color: white;
  transition: all 0.3s ease;
  margin: 0;
  line-height: 1.5;
`;


const WarningText = styled.p`
  color: ${props => props.theme.warningText};
  transition: all 0.3s ease;
  margin: 0;
  line-height: 1.5;
`;

const ThemeToggle = styled.button`
  background-color: ${props => props.theme.toggleButton};
  color: ${props => props.theme.toggleButtonText};
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
  }
`;

function GitCheckout() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Card>
          <Header>
            <HeaderContent>
              <Title>
                <IconWrapper><GitBranch /></IconWrapper>
                La Commande Git Checkout
              </Title>
              <Subtitle>
                Guide complet des commandes Git checkout et leurs utilisations
              </Subtitle>
            </HeaderContent>
                <ThemeToggle onClick={toggleTheme}>
                          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </ThemeToggle>
            
          </Header>
          
          <Content>
            <Intro>
              La commande git checkout est utilisée dans Git pour changer de branche ou restaurer des fichiers à un état antérieur. Ce guide présente les différentes utilisations de cette commande essentielle avec des exemples pratiques.
            </Intro>
            
            <CommandList>
              <CommandSection 
                icon={<GitBranch />}
                title="1. Changer de Branche"
                description="Pour passer à une branche existante, utilisez:"
                command="git checkout nom-de-branche"
                example={{
                  title: "Exemple : Si vous voulez passer à la branche develop :",
                  command: "git checkout develop"
                }}
                scenario={{
                  title: "Exemple 1 : Changement de branche",
                  description: "Imaginons que vous travaillez sur un projet et que vous avez deux branches : main (la branche principale) et feature-login (une branche pour ajouter une fonctionnalité de connexion).",
                  steps: [
                    {
                      description: "Vous êtes actuellement sur la branche main et vous souhaitez passer à feature-login :",
                      command: "git checkout feature-login",
                      result: "Vous basculez sur la branche feature-login, où vous pouvez travailler sur la fonctionnalité."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitFork />}
                title="2. Créer et Changer de Branche"
                description="Pour créer une nouvelle branche et y passer en même temps, utilisez:"
                command="git checkout -b nouvelle-branche"
                example={{
                  title: "Exemple : Pour créer et basculer vers une nouvelle branche feature-1 :",
                  command: "git checkout -b feature-1"
                }}
                scenario={{
                  title: "Exemple 2 : Création d'une nouvelle branche",
                  description: "Supposons que vous devez développer une nouvelle fonctionnalité appelée feature-dashboard.",
                  steps: [
                    {
                      description: "Vous voulez créer cette nouvelle branche et y basculer :",
                      command: "git checkout -b feature-dashboard",
                      result: "Une nouvelle branche feature-dashboard est créée et vous êtes maintenant sur cette branche."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitCommit />}
                title="3. Restaurer des Fichiers"
                description="Pour restaurer un fichier spécifique à l'état de votre dernier commit:"
                command="git checkout -- nom-du-fichier"
                example={{
                  title: "Exemple : Si vous souhaitez restaurer document.txt :",
                  command: "git checkout -- document.txt"
                }}
                scenario={{
                  title: "Exemple 3 : Restaurer un fichier",
                  description: "Imaginons que vous ayez modifié un fichier appelé style.css mais que vous souhaitez annuler ces modifications et revenir à la version de votre dernier commit.",
                  steps: [
                    {
                      description: "Pour restaurer style.css :",
                      command: "git checkout -- style.css",
                      result: "Les modifications apportées à style.css sont annulées et le fichier revient à l'état de votre dernier commit."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitCommit />}
                title="4. Checkout d'un Commit Spécifique"
                description="Vous pouvez également faire un checkout d'un commit spécifique en utilisant son hash:"
                command="git checkout hash-du-commit"
                example={{
                  title: "Exemple : Pour passer à un état du projet à un commit avec le hash abc1234 :",
                  command: "git checkout abc1234"
                }}
                scenario={{
                  title: "Exemple 4 : Checkout d'un commit spécifique",
                  description: "Supposons que vous souhaitez vérifier une version précédente de votre projet. Vous avez un commit avec le hash 1a2b3c4.",
                  steps: [
                    {
                      description: "Pour passer à ce commit :",
                      command: "git checkout 1a2b3c4",
                      result: "Vous êtes maintenant dans un état \"detached HEAD\". Vous pouvez visualiser les fichiers tels qu'ils étaient à ce moment-là, mais toute modification que vous faites ne sera pas sur une branche."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitPullRequest />}
                title="5. Checkout d'une Branche Distante"
                description="Pour vérifier une branche qui existe sur un dépôt distant, utilisez:"
                command="git checkout -b nom-de-branche origin/nom-de-branche"
                example={{
                  title: "Exemple : Pour créer une branche locale feature-2 qui suit la branche distante origin/feature-2 :",
                  command: "git checkout -b feature-2 origin/feature-2"
                }}
                scenario={{
                  title: "Exemple 5 : Travailler sur une branche distante",
                  description: "Imaginons que vous souhaitez travailler sur une branche distante appelée feature-profile.",
                  steps: [
                    {
                      description: "Vous allez d'abord récupérer les branches distantes :",
                      command: "git fetch",
                      result: "Les références des branches distantes sont mises à jour."
                    },
                    {
                      description: "Ensuite, vous pouvez créer une nouvelle branche locale qui suit feature-profile :",
                      command: "git checkout -b feature-profile origin/feature-profile",
                      result: "Une nouvelle branche locale feature-profile est créée, synchronisée avec sa version distante. Vous êtes maintenant prêt à travailler sur cette fonctionnalité."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitMerge />}
                title="6. Utilisation de Git Switch"
                description="git switch est une alternative plus récente à git checkout pour changer de branche. Cela rend la commande plus claire:"
                command="git switch nom-de-branche"
                example={{
                  title: "Exemple : Pour passer à la branche main :",
                  command: "git switch main"
                }}
                scenario={{
                  title: "Exemple 6 : Utilisation de git switch",
                  description: "Disons que vous êtes sur la branche feature-dashboard et que vous voulez rapidement revenir à la branche main.",
                  steps: [
                    {
                      description: "Au lieu d'utiliser git checkout, vous pouvez faire :",
                      command: "git switch main",
                      result: "Vous êtes maintenant sur la branche main, ce qui est plus clair et plus intuitif à cet égard."
                    }
                  ]
                }}
              />
            </CommandList>
            <Offers />
          </Content>
        </Card>
        
    </ThemeProvider>
  );
}

function CommandSection({ icon, title, description, command, example, scenario }) {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionIcon>
          {icon}
        </SectionIcon>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeader>
      <SectionDescription>{description}</SectionDescription>
      <CommandBlock>
        {command}
      </CommandBlock>
      {example && (
        <ExampleBlock>
          <ExampleTitle>{example.title}</ExampleTitle>
          <ExampleCommand>
            {example.command}
          </ExampleCommand>
        </ExampleBlock>
      )}
      {scenario && (
        <ScenarioBlock>
          <ScenarioTitle>{scenario.title}</ScenarioTitle>
          <ScenarioDescription>{scenario.description}</ScenarioDescription>
          {scenario.steps.map((step, index) => (
            <div key={index}>
              <ScenarioDescription>{step.description}</ScenarioDescription>
              <ScenarioCommand>{step.command}</ScenarioCommand>
              <ScenarioResult>Résultat : {step.result}</ScenarioResult>
              {index < scenario.steps.length - 1 && <div style={{ margin: '1rem 0' }}></div>}
            </div>
          ))}
        </ScenarioBlock>
      )}
    </SectionContainer>
  );
}

export default GitCheckout;