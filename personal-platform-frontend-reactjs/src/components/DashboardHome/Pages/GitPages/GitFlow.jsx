import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GitBranch } from 'lucide-react';
import Offers from '../Offres';
const gitflow = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/gitflow.png`;
const gitflow3 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/gitflow3.png`;


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0a0a0a;
    color: #fafafa;
    line-height: 1.7;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);
`;

const Header = styled.header`
  background: linear-gradient(90deg, #4338ca, #3b82f6);
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    opacity: 0.1;
  }
`;

const HeaderContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  svg {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const MainContent = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const Container = styled.div`
  background: #1a1a1a;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
              0 2px 4px -2px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  border: 1px solid #2a2a2a;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fafafa;
  margin: 2.5rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3b82f6;
  display: inline-block;
`;

const Paragraph = styled.p`
  color: #d1d5db;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  strong {
    color: #fafafa;
    font-weight: 600;
  }
`;

const List = styled.ul`
  margin: 1.5rem 0 2rem;
  padding-left: 1.25rem;
  list-style: none;

  & > li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    
    &::before {
      content: "→";
      color: #3b82f6;
      position: absolute;
      left: -1rem;
      top: 0;
      font-weight: bold;
    }
  }
`;

const ListItem = styled.li`
  color: #d1d5db;
  font-size: 1.05rem;
  line-height: 1.8;

  & > ul {
    margin: 0.75rem 0;
    border-left: 2px solid #2a2a2a;
    padding-left: 1.5rem;
  }

  strong {
    color: #fafafa;
    font-weight: 600;
  }
`;

const CodeBlock = styled.pre`
  background: #0d0d0d;
  border: 1px solid #2a2a2a;
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #4338ca, #3b82f6);
    border-radius: 0.75rem 0.75rem 0 0;
  }
`;

const Code = styled.code`
  font-family: 'JetBrains Mono', monospace;
  color: #e2e8f0;
  font-size: 0.9rem;
  line-height: 1.7;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <HeaderContent>
        <Title>
          <GitBranch size={32} />
          GitFlow Guide
        </Title>
        <Subtitle>
          Guide complet du GitFlow
        </Subtitle>
      </HeaderContent>
    </Header>
  );
};

const GitflowContent = () => {
  return (
    <Container>
      <Paragraph>
        <strong>Gitflow</strong> est une méthode de gestion de branches dans Git, qui fournit un cadre structuré pour le développement de logiciels. 
        Créée par Vincent Driessen, cette approche est particulièrement efficace pour gérer des projets qui nécessitent des versions 
        régulières et une collaboration entre plusieurs développeurs.
      </Paragraph>

      <SectionTitle>Collaboration entre développeurs</SectionTitle>
      <List>
        <ListItem>
          <strong>Push et Pull sur Origin</strong>
          <Paragraph>
            Chaque développeur effectue des opérations push et pull sur le dépôt origin, maintenant ainsi la synchronisation du code entre tous les membres de l'équipe.
          </Paragraph>
        </ListItem>
        <ListItem>
          <strong>Collaboration en sous-équipes</strong>
          <Paragraph>
            Au-delà de la relation centralisée push-pull avec origin, les développeurs peuvent également récupérer des changements directement auprès d'autres équipiers, formant ainsi des sous-équipes de travail.
          </Paragraph>
        </ListItem>
        <ListItem>
          <strong>Développement collaboratif</strong>
          <Paragraph>
            Cette approche est particulièrement utile lorsque deux ou plusieurs développeurs travaillent ensemble sur une fonctionnalité. Elle permet d'éviter de pousser prématurément du travail en cours sur origin, tout en maintenant une collaboration efficace.
          </Paragraph>
        </ListItem>
      </List>

      <SectionTitle>Les branches principales</SectionTitle> <br />
      <img src={gitflow} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />

      <List>
        <ListItem>
          <strong>Main sur origin</strong>
          <Paragraph>
            Cette branche doit rester stable et contient uniquement le code prêt pour être déployé en production.
            Chaque commit sur cette branche représente une nouvelle version en production.
          </Paragraph>
        </ListItem>
        <ListItem>
          <strong>Develop (branche d'intégration)</strong>
          <Paragraph>
            Cette branche reflète les derniers changements de développement livrés pour la prochaine version.
            C'est la branche principale pour l'intégration continue.
          </Paragraph>
        </ListItem>
      </List>

      <SectionTitle>Les branches de support</SectionTitle>
      <Paragraph>
        Ces branches ont une durée de vie limitée et servent des objectifs spécifiques :
      </Paragraph>
      
      <List>
        <ListItem>
          <strong>Branches de fonctionnalités (Feature)</strong>
          <Paragraph>
            Utilisées pour développer de nouvelles fonctionnalités qui seront intégrées dans la prochaine version ou une version future.
            Créées à partir de la branche develop et fusionnées vers develop une fois terminées.
          </Paragraph>
        </ListItem>
        
        <ListItem>
          <strong>Branches de versions (Release)</strong>
          <Paragraph>
            Servent à préparer les nouvelles versions de production. Elles permettent de :
          </Paragraph>
          <List>
            <ListItem>Corriger les anomalies mineures</ListItem>
            <ListItem>Préparer les méta-données pour une version (numéro, date de compilation)</ListItem>
            <ListItem>Finaliser la documentation</ListItem>
          </List>
        </ListItem>

        <ListItem>
          <strong>Branches de correctifs (Hotfix)</strong>
          <Paragraph>
            Utilisées pour corriger rapidement des problèmes critiques en production :
          </Paragraph>
          <List>
            <ListItem>Créées à partir de la branche main</ListItem>
            <ListItem>Doivent être fusionnées à la fois dans main et develop</ListItem>
            <ListItem>Permettent de corriger les bugs urgents sans perturber le flux de développement normal</ListItem>
          </List>
        </ListItem>
      </List>


      <img src={gitflow3} style={{ marginLeft: "30%", width: '55%' , height: '40%' , marginBottom: "1%" }} /> <br />


      <SectionTitle>Flux de travail Gitflow</SectionTitle>
      <Paragraph>
        Voici un exemple de flux de travail basé sur Gitflow :
      </Paragraph>

      <List>
        <ListItem>
          <strong>Créer une branche de fonctionnalité :</strong>
          <CodeBlock>
            <Code>git checkout develop</Code>
            <br />
            <Code>git checkout -b feature/ajouter-authentification</Code>
          </CodeBlock>
          <Paragraph>Vous développez ensuite la nouvelle fonctionnalité.</Paragraph>
        </ListItem>

        <ListItem>
          <strong>Terminer la fonctionnalité et fusionner :</strong>
          <Paragraph>Une fois la fonctionnalité implémentée et testée :</Paragraph>
          <CodeBlock>
            <Code>git checkout develop</Code>
            <br />
            <Code>git merge feature/ajouter-authentification</Code>
            <br />
            <Code>git branch -d feature/ajouter-authentification</Code>
          </CodeBlock>
        </ListItem>

        <ListItem>
          <strong>Préparation d'une nouvelle version :</strong>
          <Paragraph>Lorsqu'il est temps de créer une version, créez une branche de release :</Paragraph>
          <CodeBlock>
            <Code>git checkout develop</Code>
            <br />
            <Code>git checkout -b release/1.0.0</Code>
          </CodeBlock>
          <Paragraph>Vous apportez alors les modifications finales et corrections de bugs.</Paragraph>
        </ListItem>

        <ListItem>
          <strong>Fusionner la branche de release :</strong>
          <Paragraph>Une fois prêt, fusionnez la branche de release dans main et develop :</Paragraph>
          <CodeBlock>
            <Code>git checkout main</Code>
            <br />
            <Code>git merge release/1.0.0</Code>
            <br />
            <Code>git checkout develop</Code>
            <br />
            <Code>git merge release/1.0.0</Code>
          </CodeBlock>
        </ListItem>

        <ListItem>
          <strong>Créer une branche de hotfix :</strong>
          <Paragraph>Si vous devez corriger un bug urgent sur la version en production :</Paragraph>
          <CodeBlock>
            <Code>git checkout main</Code>
            <br />
            <Code>git checkout -b hotfix/correction-bug</Code>
          </CodeBlock>
          <Paragraph>Une fois le correctif appliqué, fusionnez cette branche dans main et develop.</Paragraph>
        </ListItem>
      </List>

      <SectionTitle>Avantages de Gitflow</SectionTitle>
      <List>
        <ListItem>
          <strong>Clarté et Structure :</strong> Les différents types de branches permettent aux équipes de comprendre facilement ce qui se passe dans le projet.
        </ListItem>
        <ListItem>
          <strong>Gestion des versions :</strong> Facilitent la gestion des versions et des mises à jour.
        </ListItem>
        <ListItem>
          <strong>Collaboration :</strong> Permet une meilleure gestion de la collaboration entre développeurs, en permettant à plusieurs équipes de travailler simultanément sur différentes fonctionnalités.
        </ListItem>
      </List>

      <SectionTitle>Conclusion</SectionTitle>
      <Paragraph>
        Gitflow est une méthode de gestion de branches qui améliore l'organisation du développement logiciel. 
        En utilisant des branches pour gérer les fonctionnalités, les versions et les correctifs, les équipes 
        peuvent collaborer de manière efficace tout en maintenant un code source stable.
      </Paragraph>
    </Container>
  );
};

function GitFlow() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <HeaderComponent />
        <MainContent>
          <GitflowContent />
          <Offers />
        </MainContent>
      </AppContainer>
    </>
  );
}

export default GitFlow;