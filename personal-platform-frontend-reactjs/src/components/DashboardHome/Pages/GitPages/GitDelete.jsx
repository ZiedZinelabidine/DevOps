import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GitBranch, GitCommit, GitFork, GitMerge, GitPullRequest, Moon, Sun, Trash2 } from 'lucide-react';
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

function GitDelete() {
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
                <IconWrapper><Trash2 /></IconWrapper>
                Suppression d'une branche dans Git
              </Title>
              <Subtitle>
                Guide complet pour supprimer des branches locales et distantes
              </Subtitle>
            </HeaderContent>
                <ThemeToggle onClick={toggleTheme}>
                          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </ThemeToggle>
          </Header>
          <Content>
            <Intro>
              Après avoir terminé le travail sur une fonctionnalité ou une correction de bug, il est souvent nécessaire de supprimer les branches qui ne sont plus utiles. Ce guide explique comment supprimer des branches locales et distantes dans Git.
            </Intro>
            
            <CommandList>
              <CommandSection 
                icon={<GitBranch />}
                title="1. Supprimer une branche locale"
                description="Si vous avez terminé de travailler sur une branche et que vous souhaitez la supprimer, vous pouvez utiliser la commande suivante :"
                command="git branch -d nom-de-branche"
                example={{
                  title: "Exemple : Supposons que vous souhaitiez supprimer une branche appelée feature-login :",
                  command: "git branch -d feature-login"
                }}
                scenario={{
                  title: "Suppression d'une branche locale",
                  description: "Vous avez terminé de travailler sur une branche feature-login et vous l'avez déjà fusionnée avec la branche principale.",
                  steps: [
                    {
                      description: "Pour supprimer la branche feature-login :",
                      command: "git branch -d feature-login",
                      result: "La branche feature-login sera supprimée, mais seulement si elle a été fusionnée. Sinon, vous recevrez un message d'erreur."
                    }
                  ]
                }}
                danger={{
                  title: "Forcer la suppression d'une branche non fusionnée",
                  text: "Pour forcer la suppression d'une branche non fusionnée (attention, cela supprimera les modifications non sauvegardées) :",
                  command: "git branch -D nom-de-branche",
                  example: "git branch -D feature-login",
                  result: "La branche feature-login sera supprimée, même si elle contient des modifications non fusionnées."
                }}
              />
              
              <CommandSection 
                icon={<GitPullRequest />}
                title="2. Supprimer une branche distante"
                description="Pour supprimer une branche sur le dépôt distant (par exemple, sur GitHub ou GitLab), vous pouvez utiliser la commande suivante :"
                command="git push origin --delete nom-de-branche"
                example={{
                  title: "Exemple : Supposons que vous souhaitez supprimer une branche distante appelée feature-login :",
                  command: "git push origin --delete feature-login"
                }}
                scenario={{
                  title: "Suppression d'une branche distante",
                  description: "Vous avez terminé de travailler sur une fonctionnalité et vous souhaitez supprimer la branche distante correspondante.",
                  steps: [
                    {
                      description: "Pour supprimer la branche distante feature-login :",
                      command: "git push origin --delete feature-login",
                      result: "La branche feature-login sera supprimée du dépôt distant. Assurez-vous que vous avez les droits nécessaires pour effectuer cette opération."
                    }
                  ]
                }}
              />
              
              <SectionContainer>
                <SectionHeader>
                  <SectionIcon>
                    <GitMerge />
                  </SectionIcon>
                  <SectionTitle>3. Exemples illustrés</SectionTitle>
                </SectionHeader>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 1 : Suppression d'une branche locale après fusion</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez développé une fonctionnalité sur la branche feature-profile, et vous l'avez fusionnée dans main. Vous pouvez maintenant la supprimer :
                  </ScenarioDescription>
                  <ScenarioCommand>git checkout main</ScenarioCommand>
                  <ScenarioCommand>git merge feature-profile</ScenarioCommand>
                  <ScenarioCommand>git branch -d feature-profile</ScenarioCommand>
                  <ScenarioResult>La branche feature-profile est supprimée après avoir été correctement fusionnée.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 2 : Suppression d'une branche locale non fusionnée</ScenarioTitle>
                  <ScenarioDescription>
                    Si vous avez une branche feature-backend que vous souhaitez supprimer sans l'avoir fusionnée :
                  </ScenarioDescription>
                  <ScenarioCommand>git branch -D feature-backend</ScenarioCommand>
                  <ScenarioResult>La branche feature-backend est supprimée de force, même si elle n'a pas été fusionnée.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 3 : Suppression d'une branche distante</ScenarioTitle>
                  <ScenarioDescription>
                    Si vous avez déjà terminé le travail sur feature-dashboard et que vous souhaitez la supprimer du dépôt distant :
                  </ScenarioDescription>
                  <ScenarioCommand>git push origin --delete feature-dashboard</ScenarioCommand>
                  <ScenarioResult>La branche feature-dashboard est supprimée du dépôt distant.</ScenarioResult>
                </ScenarioBlock>
              </SectionContainer>
            </CommandList>
            
            <Warning>
              <WarningTitle>Remarques importantes :</WarningTitle>
              <WarningList>
                <WarningListItem>Vérifiez toujours que vous êtes sur une branche différente (par exemple, main) avant de supprimer une branche.</WarningListItem>
                <WarningListItem>L'utilisation de -D pour forcer la suppression peut entraîner la perte de travail non fusionné. Utilisez-le avec prudence.</WarningListItem>
                <WarningListItem>Lorsque vous supprimez une branche distante, assurez-vous que personne d'autre ne travaille dessus, car cela peut affecter d'autres développeurs.</WarningListItem>
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
    <> 
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
    </>

  );
}

export default GitDelete;