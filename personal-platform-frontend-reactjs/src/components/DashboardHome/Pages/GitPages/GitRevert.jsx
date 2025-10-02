import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GitBranch, GitCommit, GitFork, GitMerge, GitPullRequest, Moon, Sun, Trash2, RotateCcw, RefreshCw } from 'lucide-react';
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

function GitRevert() {
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
                <IconWrapper><RefreshCw /></IconWrapper>
                La commande git revert
              </Title>
              <Subtitle>
                Guide complet pour annuler des modifications sans réécrire l'historique
              </Subtitle>
            </HeaderContent>
            <ThemeToggle onClick={toggleTheme}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </ThemeToggle>
          </Header>
          
          <Content>
            <Intro>
              La commande git revert permet de créer un nouveau commit qui annule les modifications d'un commit précédent, ce qui est particulièrement utile lorsque vous avez déjà partagé vos commits avec d'autres contributeurs.
            </Intro>

           
            <CommandList>
              <CommandSection 
                icon={<GitCommit />}
                title="1. Syntaxe de base"
                description="La commande git revert crée un nouveau commit qui annule les modifications d'un commit précédent."
                command="git revert <commit-hash>"
              />
              
              <CommandSection 
                icon={<GitBranch />}
                title="2. Fonctionnement de git revert"
                description="Lorsque vous utilisez git revert, Git crée un nouveau commit qui inverse les changements effectués dans le commit spécifié. Cela implique que le commit original reste présent dans l'historique du projet, ce qui est important pour la traçabilité."
              />
              
              <CommandSection 
                icon={<GitCommit />}
                title="3. Revert d'un commit spécifique"
                description="Supposons que vous ayez une série de commits et que vous ayez besoin d'annuler le commit c2, qui a apporté une modification indésirable."
                command="git revert c2"
                example={{
                  title: "Exemple : Annuler un commit spécifique",
                  command: "git revert c2"
                }}
                scenario={{
                  title: "Revert d'un commit spécifique",
                  description: "Vous avez besoin d'annuler un commit qui a introduit un bug.",
                  steps: [
                    {
                      description: "Vérifiez l'historique pour trouver le hash du commit :",
                      command: "git log",
                      result: "Vous voyez quelque chose comme :\ncommit c3 (HEAD -> main)\ncommit c2\ncommit c1"
                    },
                    {
                      description: "Utilisez git revert pour annuler le commit c2 :",
                      command: "git revert c2",
                      result: "Git crée un nouveau commit qui inverse les changements de c2. Vous devez ensuite fournir un message de commit pour ce nouveau commit (par défaut, Git propose un message)."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitCommit />}
                title="4. Revert avec un message personnalisé"
                description="Si vous voulez fournir un message spécifique pour le revert, vous pouvez utiliser l'option -m."
                command={'git revert <commit-hash> -m "Message personnalisé"'}
                example={{
                  title: "Exemple : Revert avec un message personnalisé",
                  command: 'git revert c2 -m "Annuler les modifications du commit c2"'
                }}
                scenario={{
                  title: "Revert avec un message personnalisé",
                  description: "Vous souhaitez annuler un commit tout en fournissant un message explicatif.",
                  steps: [
                    {
                      description: "Pour annuler le commit c2 avec un message personnalisé :",
                      command: 'git revert c2 -m "Annuler les modifications du commit c2"',
                      result: "Un nouveau commit sera créé, et le message spécifié sera utilisé pour ce commit."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<GitCommit />}
                title="5. Revert de plusieurs commits"
                description="Pour annuler plusieurs commits, vous pouvez utiliser l'option -n ou --no-commit pour préparer plusieurs réversions avant de créer un commit unique."
                command="git revert -n <commit-range>"
                example={{
                  title: "Exemple : Revert de plusieurs commits",
                  command: "git revert -n HEAD~2..HEAD"
                }}
                scenario={{
                  title: "Revert de plusieurs commits",
                  description: "Vous souhaitez annuler les deux derniers commits en une seule opération.",
                  steps: [
                    {
                      description: "Pour annuler les deux derniers commits sans le commit immédiat :",
                      command: "git revert -n HEAD~2..HEAD",
                      result: "Cela préparera les modifications nécessaires pour les deux derniers commits dans l'index, vous permettant de les valider ensemble en une seule fois."
                    },
                    {
                      description: "Ensuite, vous pouvez faire :",
                      command: 'git commit -m "Réversion des deux derniers commits"',
                      result: "Un seul commit est créé qui annule les modifications des deux derniers commits."
                    }
                  ]
                }}
              />
              
              <SectionContainer>
                <SectionHeader>
                  <SectionIcon>
                    <GitMerge />
                  </SectionIcon>
                  <SectionTitle>6. Exemples illustrés</SectionTitle>
                </SectionHeader>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 1 : Annuler un commit qui a introduit un bug</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez déployé une nouvelle fonctionnalité, mais vous découvrez qu'elle contient un bug critique :
                  </ScenarioDescription>
                  <ScenarioCommand>git log --oneline</ScenarioCommand>
                  <ScenarioCommand>git revert 5a78c4e</ScenarioCommand>
                  <ScenarioResult>Un nouveau commit est créé qui annule les modifications du commit 5a78c4e, tout en préservant l'historique.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 2 : Annuler un commit déjà poussé</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez poussé un commit sur le dépôt distant et vous devez l'annuler sans perturber l'historique :
                  </ScenarioDescription>
                  <ScenarioCommand>git revert 7d8f2a1</ScenarioCommand>
                  <ScenarioCommand>git push</ScenarioCommand>
                  <ScenarioResult>Le commit d'annulation est créé localement puis poussé sur le dépôt distant, permettant à tous les collaborateurs de recevoir l'annulation.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 3 : Annuler une fusion (merge commit)</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez fusionné une branche qui introduit des problèmes et vous souhaitez annuler cette fusion :
                  </ScenarioDescription>
                  <ScenarioCommand>git revert -m 1 abcd123</ScenarioCommand>
                  <ScenarioResult>La fusion est annulée. L'option -m 1 indique que vous souhaitez conserver le premier parent (généralement la branche principale) comme ligne principale.</ScenarioResult>
                </ScenarioBlock>
              </SectionContainer>
              
              <SectionContainer>
                <SectionHeader>
                  <SectionIcon>
                    <GitCommit />
                  </SectionIcon>
                  <SectionTitle>7. Quand utiliser git revert</SectionTitle>
                </SectionHeader>
                
                <SectionDescription>
                  La commande git revert est particulièrement utile dans les situations suivantes :
                </SectionDescription>
                
                <ScenarioBlock>
                  <ScenarioTitle>Annuler un commit déjà partagé</ScenarioTitle>
                  <ScenarioDescription>
                    Si d'autres personnes ont basé leur travail sur les commits existants, utiliser git revert permet d'éviter de réécrire l'historique, ce qui pourrait causer des conflits ou des problèmes pour d'autres développeurs.
                  </ScenarioDescription>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Garder l'historique clair</ScenarioTitle>
                  <ScenarioDescription>
                    git revert maintient une trace claire des modifications, ce qui peut être utile pour la documentation et la compréhension du projet.
                  </ScenarioDescription>
                </ScenarioBlock>
              </SectionContainer>
            </CommandList>
            
            <Warning>
              <WarningTitle>Remarques importantes :</WarningTitle>
              <WarningList>
                <WarningListItem>Ne pas utiliser git revert pour des commits non poussés : Si vous n'avez pas encore poussé vos commits au dépôt distant et que vous avez besoin de nettoyer votre historique, envisagez plutôt d'utiliser git reset.</WarningListItem>
                <WarningListItem>Résolution de conflits : Parfois, lorsque vous effectuez un revert, vous pouvez faire face à des conflits si d'autres changements ont été faits dans la même zone de code. Dans ce cas, Git vous demandera de résoudre ces conflits avant de compléter le commit de revert.</WarningListItem>
                <WarningListItem>Lorsque vous ne connaissez pas le hash : Si vous ne connaissez pas le hash exact du commit à annuler, vous pouvez utiliser git log pour le trouver ou utiliser une interface graphique pour Git, qui peut rendre cette tâche plus facile.</WarningListItem>
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
      {command && (
        <CommandBlock>
          {command}
        </CommandBlock>
      )}
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

export default GitRevert;