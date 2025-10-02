import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GitBranch, GitCommit, GitFork, GitMerge, GitPullRequest, Moon, Sun, Trash2, RotateCcw } from 'lucide-react';
import Offers from '../Offres';
const revert = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/revert1.png`;

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
  scenarioText: '#0c4a6e',
  dangerBlock: '#fee2e2',
  dangerBorder: '#ef4444',
  dangerText: '#b91c1c'
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
  scenarioText: '#bae6fd',
  dangerBlock: '#450a0a',
  dangerBorder: '#dc2626',
  dangerText: '#f87171'
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

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.body};
  padding: 1.5rem;
  transition: all 0.3s ease;
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

const WarningTitle = styled.div`
  font-weight: bold;
  color: ${props => props.theme.warningText};
  margin-bottom: 0.5rem;
`;

const WarningList = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  color: ${props => props.theme.warningText};
`;

const WarningListItem = styled.li`
  margin-bottom: 0.25rem;
  line-height: 1.5;
`;

const DangerBlock = styled.div`
  background-color: ${props => props.theme.dangerBlock};
  border: 1px solid ${props => props.theme.dangerBorder};
  border-radius: 0.25rem;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

const DangerTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.dangerText};
  margin-top: 0;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
`;

const DangerIcon = styled.span`
  margin-right: 0.5rem;
  color: ${props => props.theme.dangerText};
`;

const DangerText = styled.p`
  color: ${props => props.theme.dangerText};
  margin-bottom: 0.5rem;
  line-height: 1.5;
  transition: all 0.3s ease;
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

function GitReset() {
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
                <IconWrapper><RotateCcw /></IconWrapper>
                La commande git reset
              </Title>
              <Subtitle>
                Guide complet pour réinitialiser et modifier l'historique Git
              </Subtitle>
            </HeaderContent>
                <ThemeToggle onClick={toggleTheme}>
                          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </ThemeToggle>
          </Header>
          
          <Content>
            <Intro>
              La commande git reset est utilisée pour modifier l'état de votre référentiel et peut changer l'index (la zone de staging) et la branche actuelle. Ce guide explique les différents modes de git reset et comment les utiliser efficacement.
            </Intro>

            <img src={revert} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />

            
            <CommandList>
              <CommandSection 
                icon={<GitCommit />}
                title="1. Types de git reset"
                description="Il existe principalement trois modes de git reset : soft, mixed et hard."
                command="git reset [--soft | --mixed | --hard] <commit>"
              />
              
              <CommandSection 
                icon={<GitBranch />}
                title="2. git reset --soft"
                description="Cette option déplace le pointeur HEAD vers le commit souhaité, mais laisse votre index et votre répertoire de travail inchangés. Cela signifie que tous les changements après le commit que vous réinitialisez seront disponibles dans l'index (staging area), prêts à être commités à nouveau."
                command="git reset --soft <commit>"
                example={{
                  title: "Exemple : Supposons que vous ayez trois commits et que vous souhaitiez revenir au premier commit.",
                  command: "git reset --soft c1"
                }}
                scenario={{
                  title: "Utilisation de git reset --soft",
                  description: "Vous avez fait un commit avec des erreurs et vous souhaitez le corriger sans perdre les modifications.",
                  steps: [
                    {
                      description: "Vous avez fait un commit :",
                      command: "git commit -m \"Correction du bug\"",
                      result: "Le commit est créé."
                    },
                    {
                      description: "Vous réalisez ensuite que le dernier commit doit être renommé ou modifié. Vous pouvez revenir en arrière :",
                      command: "git reset --soft HEAD~1",
                      result: "Cela vous permet de modifier et de faire un nouveau commit. Les modifications sont conservées dans la zone de staging."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitBranch />}
                title="3. git reset --mixed (Valeur par défaut)"
                description="Cette option réinitialise l'index (zone de staging) mais conserve votre répertoire de travail inchangé. Cela signifie que les changements seront annulés dans la zone de staging, mais resteront dans votre répertoire de travail."
                command="git reset --mixed <commit>"
                example={{
                  title: "Exemple : Pour revenir au commit c1 et enlever les modifications de c2 et c3 de la staging area :",
                  command: "git reset --mixed c1"
                }}
                scenario={{
                  title: "Utilisation de git reset --mixed",
                  description: "Vous avez des modifications dans la staging area que vous souhaitez retirer, mais que vous ne voulez pas perdre.",
                  steps: [
                    {
                      description: "Pour annuler le dernier commit et garder vos fichiers modifiés dans votre répertoire de travail :",
                      command: "git reset HEAD~1",
                      result: "Cela annule le dernier commit et garde vos fichiers modifiés dans votre répertoire de travail, mais pas dans la zone de staging."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitBranch />}
                title="4. git reset --hard"
                description="Cette option réinitialise l'index et le répertoire de travail. Toutes les modifications non commités seront perdues. Utilisez cette commande avec précaution, car elle supprime définitivement les modifications."
                command="git reset --hard <commit>"
                example={{
                  title: "Exemple : Pour revenir au commit c1 et supprimer toutes les modifications de c2 et c3 :",
                  command: "git reset --hard c1"
                }}
                scenario={{
                  title: "Utilisation de git reset --hard",
                  description: "Après avoir fait quelques modifications dont vous n'avez pas besoin, vous décidez de revenir en arrière et de réinitialiser complètement.",
                  steps: [
                    {
                      description: "Pour supprimer toutes les modifications apportées dans le dernier commit :",
                      command: "git reset --hard HEAD~1",
                      result: "Cela supprime toutes les modifications apportées dans le dernier commit et réinitialise votre répertoire à l'état du commit précédent."
                    }
                  ]
                }}
                danger={{
                  title: "Attention aux pertes de données",
                  text: "L'utilisation de git reset --hard supprime définitivement les modifications non sauvegardées :",
                  command: "git reset --hard <commit>",
                  example: "git reset --hard HEAD~2",
                  result: "Toutes les modifications des deux derniers commits seront perdues définitivement."
                }}
              />
              
              <SectionContainer>
                <SectionHeader>
                  <SectionIcon>
                    <GitMerge />
                  </SectionIcon>
                  <SectionTitle>5. Exemples illustrés</SectionTitle>
                </SectionHeader>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 1 : Annuler le dernier commit tout en conservant les modifications</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez fait un commit mais vous réalisez que vous avez oublié d'inclure un fichier important :
                  </ScenarioDescription>
                  <ScenarioCommand>git commit -m "Ajouter la fonctionnalité de connexion"</ScenarioCommand>
                  <ScenarioCommand>git reset --soft HEAD~1</ScenarioCommand>
                  <ScenarioCommand>git add fichier_oublie.js</ScenarioCommand>
                  <ScenarioCommand>git commit -m "Ajouter la fonctionnalité de connexion complète"</ScenarioCommand>
                  <ScenarioResult>Le commit est annulé, les modifications sont conservées dans la zone de staging, vous ajoutez le fichier manquant, puis vous refaites un commit complet.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 2 : Annuler des modifications dans la zone de staging</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez ajouté des fichiers à la zone de staging mais vous souhaitez les retirer sans perdre vos modifications :
                  </ScenarioDescription>
                  <ScenarioCommand>git add .</ScenarioCommand>
                  <ScenarioCommand>git reset</ScenarioCommand>
                  <ScenarioResult>Les fichiers sont retirés de la zone de staging mais restent modifiés dans votre répertoire de travail.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 3 : Réinitialiser complètement à un commit spécifique</ScenarioTitle>
                  <ScenarioDescription>
                    Vous souhaitez abandonner toutes les modifications et revenir à l'état d'un commit spécifique :
                  </ScenarioDescription>
                  <ScenarioCommand>git log --oneline</ScenarioCommand>
                  <ScenarioCommand>git reset --hard a1b2c3d</ScenarioCommand>
                  <ScenarioResult>Votre répertoire est complètement réinitialisé à l'état du commit a1b2c3d, toutes les modifications ultérieures sont perdues.</ScenarioResult>
                </ScenarioBlock>
              </SectionContainer>
            </CommandList>
            
            <Warning>
              <WarningTitle>Remarques importantes :</WarningTitle>
              <WarningList>
                <WarningListItem>Utilisez avec prudence : git reset --hard peut entraîner la perte de données. Assurez-vous d'avoir sauvegardé vos changements importants ailleurs.</WarningListItem>
                <WarningListItem>Annuler un commit : Si vous souhaitez annuler un commit après l'avoir poussé, envisagez d'autres options comme git revert, qui créera un nouveau commit inversant les changements au lieu de réécrire l'historique.</WarningListItem>
                <WarningListItem>Préférences de réinitialisation : Choisissez le type de réinitialisation en fonction de votre objectif, que ce soit de conserver des changements, de les réappliquer ou de les supprimer définitivement.</WarningListItem>
              </WarningList>
            </Warning>
          </Content>
        </Card>
        <Card>
        <Offers />
        </Card>

    </ThemeProvider>
  );
}

function CommandSection({ icon, title, description, command, example, scenario, danger }) {
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
      {danger && (
        <DangerBlock>
          <DangerTitle>
            <DangerIcon><Trash2 size={18} /></DangerIcon>
            {danger.title}
          </DangerTitle>
          <DangerText>{danger.text}</DangerText>
          <CommandBlock>{danger.command}</CommandBlock>
          <ExampleBlock>
            <ExampleTitle>Exemple :</ExampleTitle>
            <ExampleCommand>{danger.example}</ExampleCommand>
          </ExampleBlock>
          <ScenarioResult>Résultat : {danger.result}</ScenarioResult>
        </DangerBlock>
      )}
    </SectionContainer>
  );
}

export default GitReset;