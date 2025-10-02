import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GitMerge,Moon, Sun, Terminal, Server, Package, Key } from 'lucide-react';
import Offers from '../Offres';
const gitlabcevsee = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/gitlab-cevsee.png`;
const git2 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/git2.png`;
const git3 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/git3.png`;
const install = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/ins3.png`;
const install2 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/ins2.png`;



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
  max-width: 70%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const Container = styled.div`
  background: #1a1a1a;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
              0 2px 4px -2px rgba(0, 0, 0, 0.2);
  padding: 1rem;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  background: #1a1a1a;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Th = styled.th`
  background: #2a2a2a;
  color: #fafafa;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #3b82f6;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #2a2a2a;
  color: #d1d5db;
`;

const Tr = styled.tr`
  &:hover {
    background: #222222;
  }
`;





const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.codeBackground};
  border: 1px solid ${({ theme }) => theme.codeBorder};
  border-radius: 0.375rem;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
  font-family: monospace;
  color: ${({ theme }) => theme.codeText};
`;

const Code = styled.code`
  font-family: monospace;
`;

const Note = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-left: 4px solid ${({ theme }) => theme.primary};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.375rem;
`;

const Section = styled.section`
  background-color: ${({ theme }) => theme.card};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;



const HeaderComponent = () => {
  return (
    <Header>
      <HeaderContent>
        <Title>
          <GitMerge size={32} />
          Guide GitLab
        </Title>
        <Subtitle>
          Une plateforme DevOps complète pour la gestion de projets
        </Subtitle>
      </HeaderContent>
    </Header>
  );
};


const GitLabContent = () => {
  return (
    <Container>
      <Paragraph>
        <strong>GitLab</strong> est bien plus qu'un simple gestionnaire de référentiels Git ; c'est une plateforme DevOps complète permettant aux équipes de gérer efficacement chaque étape de leurs projets logiciels. Avec une suite d'outils intégrés allant de la planification à la livraison, GitLab facilite la collaboration et l'automatisation à chaque étape du cycle du développement.
      </Paragraph>

      <img src={git2} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />


      <SectionTitle>Principales Fonctionnalités de GitLab</SectionTitle>
      <List>
        <ListItem>
          <strong>Gestion de Projet</strong>
          <List>
            <ListItem>Tableaux Kanban pour visualiser et gérer le flux de travail</ListItem>
            <ListItem>Roadmaps pour la planification des versions futures</ListItem>
          </List>
        </ListItem>

        <ListItem>
          <strong>Intégration et Livraison Continue (CI/CD)</strong>
          <List>
            <ListItem>Pipelines CI/CD via .gitlab-ci.yml</ListItem>
            <ListItem>Déploiements automatisés sur différents environnements</ListItem>
          </List>
        </ListItem>

        <ListItem>
          <strong>Sécurité et Conformité</strong>
          <List>
            <ListItem>Analyse de sécurité du code (SAST, DAST)</ListItem>
            <ListItem>Gestion des dépendances et détection des vulnérabilités</ListItem>
          </List>
        </ListItem>
      </List>
      <img src={git3} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />

      <SectionTitle>Cycle de Vie DevOps avec GitLab</SectionTitle>
      <List>
        <ListItem>
          <strong>Plan</strong>
          <Paragraph>
            Définition des objectifs, création d'issues et élaboration de roadmaps
          </Paragraph>
        </ListItem>
        <ListItem>
          <strong>Create</strong>
          <Paragraph>
            Développement collaboratif avec gestion de versions
          </Paragraph>
        </ListItem>
        <ListItem>
          <strong>Verify</strong>
          <Paragraph>
            Tests automatisés et vérifications de qualité
          </Paragraph>
        </ListItem>
        <ListItem>
          <strong>Package</strong>
          <Paragraph>
            Gestion des artefacts et des conteneurs
          </Paragraph>
        </ListItem>
        <ListItem>
          <strong>Release</strong>
          <Paragraph>
            Automatisation des déploiements
          </Paragraph>
        </ListItem>
      </List>
      <img src={gitlabcevsee} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />

      <SectionTitle>Éditions de GitLab</SectionTitle>
      <Table>
        <thead>
          <Tr>
            <Th>Édition</Th>
            <Th>Description</Th>
            <Th>Utilisateurs Cibles</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>GitLab CE</Td>
            <Td>Version open-source, auto-hébergée, gratuite</Td>
            <Td>Développeurs individuels, PME</Td>
          </Tr>
          <Tr>
            <Td>GitLab EE</Td>
            <Td>Version payante avec fonctionnalités avancées</Td>
            <Td>Grandes entreprises</Td>
          </Tr>
          <Tr>
            <Td>GitLab.com</Td>
            <Td>Service SaaS avec options gratuites et premium</Td>
            <Td>Équipes de toutes tailles</Td>
          </Tr>
        </tbody>
      </Table>

      <SectionTitle>Comparaison : GitLab vs GitHub</SectionTitle>
      <Table>
        <thead>
          <Tr>
            <Th>Critère</Th>
            <Th>GitLab</Th>
            <Th>GitHub</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Modèle</Td>
            <Td>Open Source, auto-hébergement possible</Td>
            <Td>SaaS commercial</Td>
          </Tr>
          <Tr>
            <Td>CI/CD</Td>
            <Td>Intégré nativement</Td>
            <Td>Via GitHub Actions</Td>
          </Tr>
          <Tr>
            <Td>Sécurité</Td>
            <Td>Fonctionnalités intégrées</Td>
            <Td>Options limitées sans outils externes</Td>
          </Tr>
        </tbody>
      </Table>
      <Title>Installation et Configuration de GitLab</Title>
      
      <Section>
        <SectionTitle><Server size={24} /> Types d'Installation</SectionTitle>
        <List>
          <ListItem>
            <strong>GitLab.com (SaaS)</strong>
            <Paragraph>
              Version hébergée par GitLab Inc. Idéale pour les projets de petite et moyenne taille.
              Accès immédiat sans configuration requise.
            </Paragraph>
          </ListItem>
          <ListItem>
            <strong>On-Premise</strong>
            <Paragraph>
              Installation sur vos propres serveurs. Contrôle total sur la sécurité et les données.
              Recommandée pour les entreprises avec des exigences strictes de conformité.
            </Paragraph>
          </ListItem>
          <ListItem>
            <strong>Cloud (AWS, Azure, GCP)</strong>
            <Paragraph>
              Déploiement sur le cloud public. Flexibilité maximale et scalabilité automatique.
            </Paragraph>
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle><Package size={24} /> Prérequis Système</SectionTitle>
        <List>
          <ListItem>CPU : 4 cœurs minimum</ListItem>
          <ListItem>RAM : 4 Go minimum</ListItem>
          <ListItem>Stockage : 50 Go minimum (SSD recommandé)</ListItem>
        </List>
        <Note>
          <strong>Important :</strong> Les GitLab Runners doivent être installés sur des machines distinctes
          du serveur GitLab principal pour des performances optimales.
        </Note>
      </Section>

      <Section>
        <SectionTitle><Terminal size={24} /> Installation sur Ubuntu</SectionTitle>
        <List>
          <ListItem>
            <strong>1. Dépendances</strong>
            <CodeBlock>
              <Code>sudo apt-get update
sudo apt-get install -y curl openssh-server ca-certificates
sudo apt-get install -y postfix</Code>
            </CodeBlock>
          </ListItem>
          <ListItem>
            <strong>2. Installation GitLab</strong>
            <CodeBlock>
              <Code>curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
sudo EXTERNAL_URL="https://gitlab.example.com" apt-get install gitlab-ee</Code>
            </CodeBlock>
          </ListItem>
          <ListItem>
            <strong>3. Configuration</strong>
            <CodeBlock>
              <Code>sudo gitlab-ctl reconfigure</Code>
            </CodeBlock>
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle><Key size={24} /> Configuration SSL</SectionTitle>
        <Paragraph>
          Sécurisez votre instance GitLab avec SSL :
        </Paragraph>
        <CodeBlock>
          <Code>sudo nano /etc/gitlab/gitlab.rb

external_url 'https://gitlab.example.com'
letsencrypt['enable'] = true
letsencrypt['contact_emails'] = ['admin@example.com']

sudo gitlab-ctl reconfigure</Code>
        </CodeBlock>
      </Section>

      <Section>
        <SectionTitle><GitMerge size={24} /> Commandes Essentielles</SectionTitle>
        <CodeBlock>
          <Code># Vérifier le statut de GitLab
sudo gitlab-ctl status

# Redémarrer les services
sudo gitlab-ctl restart

# Voir les logs
sudo gitlab-ctl tail

# Backup
sudo gitlab-backup create</Code>
        </CodeBlock>
        <Note>
          <strong>Conseil :</strong> Configurez des sauvegardes automatiques régulières pour protéger vos données.
        </Note>
      </Section>

      <img src={install} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />


      <Section>
        <SectionTitle><Key size={24} /> Changer le password root Gitlab </SectionTitle>
        <Paragraph>
        Pour changer le password root 2 methodes  :
        </Paragraph>
        <CodeBlock>
          <Code> sudo vi /etc/gitlab/initial_root_password
            sudo gitlab-ctl reconfigure</Code>


        </CodeBlock>
        <CodeBlock>
          <Code> sudo gitlab-rake "gitlab:password:reset[root]"
            sudo gitlab-ctl reconfigure</Code>


        </CodeBlock>

      </Section>

      <Section>
        <SectionTitle><GitMerge size={24} /> Commandes Essentielles</SectionTitle>
        <CodeBlock>
          <Code># Vérifier le statut de GitLab
sudo gitlab-ctl status

# Redémarrer les services
sudo gitlab-ctl restart

# Voir les logs
sudo gitlab-ctl tail

# Backup
sudo gitlab-backup create</Code>
        </CodeBlock>
        <Note>
          <strong>Conseil :</strong> Configurez des sauvegardes automatiques régulières pour protéger vos données.
        </Note>
      </Section>

      <img src={install2} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />

      

    </Container>
  );
};

function Gitlab() {
  return (
    <> 
          <GlobalStyle />
          <AppContainer> 
          <HeaderComponent />

          <GitLabContent />
          <Offers />

          </AppContainer>
          </>
  );
}

export default Gitlab;