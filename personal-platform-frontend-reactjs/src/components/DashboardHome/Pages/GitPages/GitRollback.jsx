import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GitBranch, GitCommit, GitFork, GitMerge, GitPullRequest, Moon, Sun, Trash2, RotateCcw, RefreshCw, ArrowLeft } from 'lucide-react';
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
  dangerText: '#b91c1c',
  comparisonHeader: '#f9fafb',
  comparisonBorder: '#e5e7eb',
  comparisonAlt: '#f3f4f6'
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
  dangerText: '#f87171',
  comparisonHeader: '#1f2937',
  comparisonBorder: '#374151',
  comparisonAlt: '#111827'
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

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  border-radius: 0.25rem;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const TableHeader = styled.thead`
  background-color: ${props => props.theme.comparisonHeader};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

const TableHeaderCell = styled.th`
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid ${props => props.theme.comparisonBorder};
  font-weight: 600;
  transition: all 0.3s ease;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${props => props.theme.comparisonAlt};
  }
  transition: all 0.3s ease;
`;

const TableCell = styled.td`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.comparisonBorder};
  transition: all 0.3s ease;
`;

function GitRollback() {
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
                Le rollback dans Git
              </Title>
              <Subtitle>
                Comparaison entre git reset et git revert pour revenir à un état précédent
              </Subtitle>
            </HeaderContent>
            <ThemeToggle onClick={toggleTheme}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </ThemeToggle>
          </Header>
          
          <Content>
            <Intro>
              Le rollback dans Git fait généralement référence à l'opération de revenir à un état précédent du projet, mais cela peut être accompli de différentes manières selon vos besoins. Les deux commandes souvent utilisées pour effectuer cette opération sont git reset et git revert. Bien qu'elles aient des objectifs similaires de retour en arrière dans l'historique, elles fonctionnent de manières très différentes.
            </Intro>
            

            <CommandList>
              <CommandSection 
                icon={<GitCommit />}
                title="1. Comprendre le rollback dans Git"
                description="Le rollback est le processus qui consiste à revenir à un état antérieur de votre projet. Git offre plusieurs façons de le faire, chacune avec ses propres avantages et cas d'utilisation."
              />
              
              <CommandSection 
                icon={<ArrowLeft />}
                title="2. git reset : Modifier l'historique"
                description="La commande git reset déplace le pointeur HEAD vers un commit antérieur, modifiant ainsi l'historique des commits."
                command="git reset [--soft | --mixed | --hard] <commit>"
                example={{
                  title: "Exemple : Revenir au commit précédent",
                  command: "git reset --hard HEAD~1"
                }}
                scenario={{
                  title: "Types de réinitialisation",
                  description: "Git reset propose trois modes principaux :",
                  steps: [
                    {
                      description: "1. --soft : Réinitialise le HEAD, mais conserve les modifications dans la staging area.",
                      command: "git reset --soft HEAD~1",
                      result: "Le dernier commit est annulé, mais toutes les modifications sont conservées dans la staging area, prêtes à être commitées à nouveau."
                    },
                    {
                      description: "2. --mixed (défaut) : Réinitialise le HEAD et l'index, mais garde les modifications dans le répertoire de travail.",
                      command: "git reset HEAD~1",
                      result: "Le dernier commit est annulé, les modifications sont conservées dans le répertoire de travail mais pas dans la staging area."
                    },
                    {
                      description: "3. --hard : Réinitialise le HEAD, l'index et le répertoire de travail, supprimant toutes les modifications non enregistrées.",
                      command: "git reset --hard HEAD~1",
                      result: "Le dernier commit est complètement supprimé, ainsi que toutes les modifications associées. Attention : cette opération est irréversible."
                    }
                  ]
                }}
              />
              
              <CommandSection 
                icon={<RefreshCw />}
                title="3. git revert : Préserver l'historique"
                description="La commande git revert crée un nouveau commit qui annule les changements d'un commit existant, sans supprimer le commit d'origine."
                command="git revert <commit-hash>"
                example={{
                  title: "Exemple : Annuler un commit spécifique",
                  command: "git revert c2"
                }}
                scenario={{
                  title: "Fonctionnement de git revert",
                  description: "Contrairement à git reset, git revert préserve l'historique en créant un nouveau commit :",
                  steps: [
                    {
                      description: "1. Identifier le commit à annuler :",
                      command: "git log --oneline",
                      result: "Affiche l'historique des commits pour identifier celui que vous souhaitez annuler."
                    },
                    {
                      description: "2. Annuler le commit avec revert :",
                      command: "git revert abc123",
                      result: "Un nouveau commit est créé qui annule les modifications du commit spécifié, tout en préservant l'historique complet."
                    },
                    {
                      description: "3. Personnaliser le message du commit d'annulation :",
                      command: 'git revert abc123 -m "Annulation du commit qui a introduit le bug X"',
                      result: "Le commit d'annulation est créé avec un message personnalisé expliquant la raison de l'annulation."
                    }
                  ]
                }}
              />
              
              <SectionContainer>
                <SectionHeader>
                  <SectionIcon>
                    <GitMerge />
                  </SectionIcon>
                  <SectionTitle>4. Comparaison directe</SectionTitle>
                </SectionHeader>
                
                <SectionDescription>
                  Voici une comparaison détaillée entre git reset et git revert pour vous aider à choisir la méthode la plus appropriée selon votre situation :
                </SectionDescription>
                
                <ComparisonTable>
                  <TableHeader>
                    <tr>
                      <TableHeaderCell>Caractéristique</TableHeaderCell>
                      <TableHeaderCell>git reset</TableHeaderCell>
                      <TableHeaderCell>git revert</TableHeaderCell>
                    </tr>
                  </TableHeader>
                  <tbody>
                    <TableRow>
                      <TableCell>Historique</TableCell>
                      <TableCell>Modifie l'historique</TableCell>
                      <TableCell>Préserve l'historique</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Types de rollback</TableCell>
                      <TableCell>Supprime des commits</TableCell>
                      <TableCell>Crée un commit qui annule un commit existant</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Utilisation typique</TableCell>
                      <TableCell>Nettoyer l'historique</TableCell>
                      <TableCell>Correction d'erreurs après partage</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Impact sur d'autres développeurs</TableCell>
                      <TableCell>Peut causer des conflits</TableCell>
                      <TableCell>Aucun impact, assure la clarté</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Options</TableCell>
                      <TableCell>--soft, --mixed, --hard</TableCell>
                      <TableCell>Principalement sans option, mais peut utiliser -n pour tester</TableCell>
                    </TableRow>
                  </tbody>
                </ComparisonTable>
              </SectionContainer>
              <img src={revert} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />

              <SectionContainer>
                <SectionHeader>
                  <SectionIcon>
                    <GitCommit />
                  </SectionIcon>
                  <SectionTitle>5. Exemples concrets</SectionTitle>
                </SectionHeader>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 1 : Utilisation de git reset --soft</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez fait un commit avec des erreurs et vous souhaitez le corriger sans perdre les modifications :
                  </ScenarioDescription>
                  <ScenarioCommand>git commit -m "Correction du bug"</ScenarioCommand>
                  <ScenarioDescription>
                    Vous réalisez ensuite que le dernier commit doit être renommé ou modifié. Vous pouvez revenir en arrière :
                  </ScenarioDescription>
                  <ScenarioCommand>git reset --soft HEAD~1</ScenarioCommand>
                  <ScenarioResult>Cela vous permet de modifier et de faire un nouveau commit.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 2 : Utilisation de git reset --mixed</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez des modifications dans la staging area que vous souhaitez retirer, mais que vous ne voulez pas perdre :
                  </ScenarioDescription>
                  <ScenarioCommand>git reset HEAD~1</ScenarioCommand>
                  <ScenarioResult>Cela annule le dernier commit et garde vos fichiers modifiés dans votre répertoire de travail.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 3 : Utilisation de git reset --hard</ScenarioTitle>
                  <ScenarioDescription>
                    Après avoir fait quelques modifications dont vous n'avez pas besoin, vous décidez de revenir en arrière et de réinitialiser complètement :
                  </ScenarioDescription>
                  <ScenarioCommand>git reset --hard HEAD~1</ScenarioCommand>
                  <ScenarioResult>Cela supprime toutes les modifications apportées dans le dernier commit et réinitialise votre répertoire à l'état du commit précédent.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 4 : Utilisation de git revert pour annuler un commit</ScenarioTitle>
                  <ScenarioDescription>
                    Vous avez poussé un commit qui introduit un bug et vous devez l'annuler sans perturber l'historique :
                  </ScenarioDescription>
                  <ScenarioCommand>git log --oneline</ScenarioCommand>
                  <ScenarioCommand>git revert 5a78c4e</ScenarioCommand>
                  <ScenarioResult>Un nouveau commit est créé qui annule les modifications du commit 5a78c4e, tout en préservant l'historique.</ScenarioResult>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Exemple 5 : Annuler plusieurs commits avec git revert</ScenarioTitle>
                  <ScenarioDescription>
                    Pour annuler plusieurs commits en une seule opération :
                  </ScenarioDescription>
                  <ScenarioCommand>git revert -n HEAD~3..HEAD</ScenarioCommand>
                  <ScenarioCommand>git commit -m "Annulation des trois derniers commits"</ScenarioCommand>
                  <ScenarioResult>Cela annule les trois derniers commits en créant un seul nouveau commit d'annulation.</ScenarioResult>
                </ScenarioBlock>
              </SectionContainer>
              
              <SectionContainer>
                <SectionHeader>
                  <SectionIcon>
                    <GitBranch />
                  </SectionIcon>
                  <SectionTitle>6. Quand utiliser chaque commande</SectionTitle>
                </SectionHeader>
                
                <SectionDescription>
                  Voici des recommandations pour choisir entre git reset et git revert selon votre situation :
                </SectionDescription>
                
                <ScenarioBlock>
                  <ScenarioTitle>Utiliser git reset lorsque :</ScenarioTitle>
                  <ScenarioDescription>
                    <ul>
                      <li>Vous souhaitez annuler des commits et réécrire l'historique</li>
                      <li>Les commits n'ont pas encore été poussés ou partagés avec d'autres</li>
                      <li>Vous travaillez sur une branche locale et personnelle</li>
                      <li>Vous avez besoin de nettoyer votre historique avant de le partager</li>
                    </ul>
                  </ScenarioDescription>
                </ScenarioBlock>
                
                <ScenarioBlock>
                  <ScenarioTitle>Utiliser git revert lorsque :</ScenarioTitle>
                  <ScenarioDescription>
                    <ul>
                      <li>Vous devez annuler des modifications tout en préservant l'historique</li>
                      <li>Les commits ont déjà été partagés avec d'autres développeurs</li>
                      <li>Vous travaillez sur une branche partagée (comme main ou develop)</li>
                      <li>Vous souhaitez maintenir une trace claire des corrections apportées</li>
                    </ul>
                  </ScenarioDescription>
                </ScenarioBlock>
              </SectionContainer>
            </CommandList>
            
            <Warning>
              <WarningTitle>Remarques importantes :</WarningTitle>
              <WarningList>
                <WarningListItem>Utilisez git reset --hard avec prudence : Cette commande peut entraîner la perte de données. Assurez-vous d'avoir sauvegardé vos changements importants ailleurs.</WarningListItem>
                <WarningListItem>Évitez de réinitialiser des branches partagées : Si vous avez déjà poussé vos commits, préférez git revert pour éviter de perturber le travail des autres développeurs.</WarningListItem>
                <WarningListItem>Résolution de conflits : Parfois, lorsque vous effectuez un revert, vous pouvez faire face à des conflits si d'autres changements ont été faits dans la même zone de code. Dans ce cas, Git vous demandera de résoudre ces conflits avant de compléter le commit de revert.</WarningListItem>
                <WarningListItem>Sauvegardez avant les opérations importantes : Avant d'effectuer des opérations qui modifient l'historique, envisagez de créer une branche de sauvegarde pour pouvoir récupérer votre travail si nécessaire.</WarningListItem>
              </WarningList>
            </Warning>
            
            <DangerBlock>
              <DangerTitle>
                <DangerIcon><Trash2 size={18} /></DangerIcon>
                Attention aux opérations destructives
              </DangerTitle>
              <DangerText>
                Les commandes comme git reset --hard sont destructives et peuvent entraîner une perte permanente de données. Utilisez-les uniquement lorsque vous êtes certain de vouloir supprimer définitivement des modifications.
              </DangerText>
              <DangerText>
                Si vous n'êtes pas sûr, préférez toujours git revert ou git reset --soft qui sont des opérations plus sûres.
              </DangerText>
            </DangerBlock>
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

export default GitRollback;