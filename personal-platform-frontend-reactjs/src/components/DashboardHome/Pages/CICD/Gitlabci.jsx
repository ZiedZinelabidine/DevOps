import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Gitlab, GitBranch, GitPullRequest, GitCommit, Play, Check, Terminal } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Offers from '../Offres';

const cicdExample = `
stages:
  - build
  - test
  - deploy

variables:
  DATABASE_URL: "postgres://user:password@localhost:5432/mydb"
  NODE_VERSION: "14"

before_script:
  - echo "Setting up the environment"

build_job:
  stage: build
  image: node:\$NODE_VERSION
  script:
    - echo "Building the application..."
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/

test_job:
  stage: test
  image: node:\$NODE_VERSION
  script:
    - echo "Running tests..."
    - npm test
  dependencies:
    - build_job

deploy_job:
  stage: deploy
  image: ruby:2.7
  script:
    - echo "Deploying application..."
    - ./deploy.sh
  only:
    - master
`;

const additionalExamples = `
# Exemple 1 : Pipeline simple
stages:
  - build
  - test
  - deploy

variables:
  NODE_VERSION: "14"
  BUILD_DIR: "dist"

before_script:
  - echo "Setting up environment variables"

build_job:
  stage: build
  image: node:\$NODE_VERSION
  script:
    - echo "Installing dependencies..."
    - npm install
    - echo "Building the application..."
    - npm run build
  artifacts:
    paths:
      - \$BUILD_DIR/
    expire_in: 1 week

test_job:
  stage: test
  image: node:\$NODE_VERSION
  script:
    - echo "Running tests..."
    - npm test
  dependencies:
    - build_job

deploy_job:
  stage: deploy
  image: ruby:2.7
  script:
    - echo "Deploying the application..."
    - ./deploy.sh
  only:
    - master

# Exemple 2 : Exécuter des tests sur différentes versions de Node
stages:
  - test

test_job_node14:
  stage: test
  image: node:14
  script:
    - echo "Testing on Node.js 14..."
    - npm test

test_job_node16:
  stage: test
  image: node:16
  script:
    - echo "Testing on Node.js 16..."
    - npm test

# Exemple 3 : Utiliser des environnements et déploiements conditionnels
stages:
  - build
  - test
  - deploy

variables:
  ENVIRONMENT: "staging"

build_job:
  stage: build
  script:
    - echo "Building the application..."

test_job:
  stage: test
  script:
    - echo "Running tests..."

deploy_to_staging:
  stage: deploy
  script:
    - echo "Deploying to Staging..."
  environment:
    name: staging
    url: https://staging.example.com

deploy_to_production:
  stage: deploy
  script:
    - echo "Deploying to Production..."
  environment:
    name: production
    url: https://www.example.com
  only:
    - master
    - /^tags/
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Inter, system-ui, -apple-system, sans-serif;
    background-color: #111827;
    color: #e5e7eb;
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #111827;
  color: #e5e7eb;
`;

const Header = styled.header`
  background: linear-gradient(to right, #4f46e5, #6366f1);
  padding: 4rem 1rem;
`;

const HeaderContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
`;

const MainContent = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Section = styled.section`
  background: #1f2937;
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #f3f4f6;
`;

const Text = styled.p`
  color: #9ca3af;
  margin-bottom: 1rem;
`;

const CodeWrapper = styled.div`
  margin-top: 2rem;
`;

function Gitlabci() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header>
          <HeaderContent>
            <Title>Guide GitLab CI/CD</Title>
            <Subtitle>Exemples complets du fichier gitlab-ci.yml</Subtitle>
          </HeaderContent>
        </Header>

        <MainContent>
          <Section>
            <SectionHeader>
              <SectionTitle>Exemple de Pipeline CI/CD</SectionTitle>
            </SectionHeader>
            <Text>
              Voici un exemple complet et détaillé de syntaxe pour un fichier <code>gitlab-ci.yml</code>, utilisé par GitLab CI/CD pour définir des pipelines.
            </Text>
            <CodeWrapper>
              <SyntaxHighlighter language="yaml" style={atomDark}>
                {cicdExample}
              </SyntaxHighlighter>
            </CodeWrapper>
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>Détails des sections</SectionTitle>
            </SectionHeader>
            <Text>Voici les détails de chaque section de l'exemple :</Text>
            <ul>
              <li><strong>stages</strong> : Définit l'ordre des étapes dans le pipeline. Dans cet exemple, les étapes sont <code>build</code>, <code>test</code>, et <code>deploy</code>.</li>
              <li><strong>variables</strong> : Contient les variables globales qui peuvent être utilisées dans les jobs. Ici, nous avons <code>DATABASE_URL</code> et <code>NODE_VERSION</code>.</li>
              <li><strong>before_script</strong> : Commandes à exécuter avant le script de chaque job.</li>
              <li><strong>build_job</strong> : Un job qui appartient à l'étape <code>build</code>, utilise une image Docker avec Node.js, et construit l'application.</li>
              <li><strong>test_job</strong> : Un job d'étape <code>test</code> qui exécute les tests.</li>
              <li><strong>deploy_job</strong> : Un job d'étape <code>deploy</code> qui déploie l'application uniquement sur la branche <code>master</code>.</li>
            </ul>
          </Section>

     
          <Section>
            <SectionHeader>
              <SectionTitle>Autres Exemples</SectionTitle>
            </SectionHeader>
            <CodeWrapper>
              <SyntaxHighlighter language="yaml" style={atomDark}>
                {additionalExamples}
              </SyntaxHighlighter>
            </CodeWrapper>
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>Détails supplémentaires</SectionTitle>
            </SectionHeader>
            <Text>Voici quelques sections supplémentaires avec des explications :</Text>
            <ul>
              <li><strong>artifacts</strong> : Cette section permet de conserver certains fichiers après l'exécution d'un job, pour être utilisés dans les jobs suivants (par exemple, les fichiers de build).</li>
              <li><strong>dependencies</strong> : Permet de spécifier que le job dépend d’un ou plusieurs jobs précédents pour récupérer les artefacts générés.</li>
              <li><strong>environment</strong> : Permet de définir des environnements pour le déploiement, comme <code>staging</code> ou <code>production</code>, avec des URL spécifiques.</li>
              <li><strong>cache</strong> : Permet de stocker des fichiers pour accélérer les futures exécutions de pipeline. Par exemple, ici, les modules Node.js ne seront pas retéléchargés à chaque exécution.</li>
              <li><strong>only/except</strong> : Utilisé pour conditionner l'exécution des jobs à des branches spécifiques ou des tags.</li>
            </ul>
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>Conclusion</SectionTitle>
            </SectionHeader>
            <Text>
              Ce fichier <code>gitlab-ci.yml</code> peut être adapté selon les besoins spécifiques de votre projet en ajoutant ou modifiant des jobs, des étapes, des environnements, et des notifications. L’utilisation de cache, d’artifacts, et d’environnements rend vos pipelines plus efficaces et flexibles.
            </Text>
          </Section>
        </MainContent>
        <Offers />
      </PageWrapper>
    </>
  );
}

export default Gitlabci;