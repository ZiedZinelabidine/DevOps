import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GitBranch } from 'lucide-react';
import Offers from '../Offres';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Inter, system-ui, -apple-system, sans-serif;
    background-color: #0f172a;
    color: #e2e8f0;
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  padding: 6rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
    pointer-events: none;
  }
`;

const HeaderContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 36rem;
  margin: 0 auto;
`;

const MainContent = styled.main`
  max-width: 64rem;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const Section = styled.section`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f8fafc;
  margin: 0;
`;

const Text = styled.p`
  color: #94a3b8;
  line-height: 1.7;
  margin: 1rem 0;
`;

const RepositoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RepositoryItem = styled.li`
  margin-bottom: 1rem;
`;

function GitlabExp() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header>
          <HeaderContent>
            <Title>
              <GitBranch size={40} />
              Liste des Repositories GitLab CI
            </Title>
            <Subtitle>
              Une collection de dépôts GitHub avec des exemples de fichiers <code>gitlab-ci.yml</code>
            </Subtitle>
          </HeaderContent>
        </Header>

        <MainContent>
          <Section>
            <SectionHeader>
              <SectionTitle>Exemples de Repositories GitLab CI/CD</SectionTitle>
            </SectionHeader>
            <Text>Ici se trouve une liste de dépôts GitHub contenant des exemples de fichiers <code>gitlab-ci.yml</code> :</Text>
            <RepositoryList>
              <RepositoryItem>
                <strong>Exemples GitLab CI/CD</strong><br />
                <a href="https://github.com/gitlab/gitlab-ci-pipelines" target="_blank" rel="noopener noreferrer">gitlab-examples</a> : Ce dépôt contient des exemples de pipelines CI/CD pour GitLab.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Node.js</strong><br />
                <a href="https://github.com/muuki88/nodejs-gitlab-ci-example" target="_blank" rel="noopener noreferrer">nodejs-gitlab-ci</a> : Une simple application Node.js avec intégration GitLab CI.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Django</strong><br />
                <a href="https://github.com/creekorful/django-gitlab-ci-example" target="_blank" rel="noopener noreferrer">django-gitlab-ci</a> : Exemple d'utilisation de GitLab CI/CD avec une application Django.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Ruby on Rails</strong><br />
                <a href="https://github.com/andrewharp/rails-gitlab-ci" target="_blank" rel="noopener noreferrer">rails-gitlab-ci</a> : Une application Ruby on Rails démontrant GitLab CI.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application PHP</strong><br />
                <a href="https://github.com/jasontedor/php-gitlab-ci-example" target="_blank" rel="noopener noreferrer">php-gitlab-ci</a> : Une simple application PHP avec une configuration GitLab CI.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application React</strong><br />
                <a href="https://github.com/abubakarabbas/react-gitlab-ci-example" target="_blank" rel="noopener noreferrer">react-gitlab-ci</a> : Exemple d'une application React utilisant GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Go</strong><br />
                <a href="https://github.com/stefanbirkner/go-gitlab-ci-example" target="_blank" rel="noopener noreferrer">go-gitlab-ci</a> : Une simple application Go démontrant comment configurer GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Full-Stack</strong><br />
                <a href="https://github.com/khaledsabry/fullstack-gitlab-ci" target="_blank" rel="noopener noreferrer">fullstack-gitlab-ci</a> : Configuration d'application full-stack avec des exemples de GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple de site statique</strong><br />
                <a href="https://github.com/philips-software/static-website-gitlab-ci" target="_blank" rel="noopener noreferrer">static-site-gitlab-ci</a> : Exemple de déploiement d'un site statique avec GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemples généraux de GitLab CI/CD</strong><br />
                <a href="https://github.com/SamuelGeorget/gitlab-ci-examples" target="_blank" rel="noopener noreferrer">gitlab-ci-examples</a> : Exemples généraux de configurations diversifiées de GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Spring Boot</strong><br />
                <a href="https://github.com/Lokra/spring-boot-gitlab-ci" target="_blank" rel="noopener noreferrer">spring-boot-gitlab-ci</a> : Démonstration de la configuration CI/CD pour une application Spring Boot.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Angular</strong><br />
                <a href="https://github.com/andreahub/angular-gitlab-ci" target="_blank" rel="noopener noreferrer">angular-gitlab-ci</a> : Exemple d'utilisation de GitLab CI/CD avec une application Angular.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application GraphQL</strong><br />
                <a href="https://github.com/matthieu-michelet/graphql-gitlab-ci" target="_blank" rel="noopener noreferrer">graphql-gitlab-ci</a> : Une application GraphQL démontrant la configuration GitLab CI.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Flask</strong><br />
                <a href="https://github.com/jasonrbriggs/flask-gitlab-ci" target="_blank" rel="noopener noreferrer">flask-gitlab-ci</a> : Exemple d'une application Flask qui utilise GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple ASP.NET Core</strong><br />
                <a href="https://github.com/renatopp/aspnet-core-gitlab-ci" target="_blank" rel="noopener noreferrer">aspnet-core-gitlab-ci</a> : Configuration pour des applications ASP.NET Core utilisant GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple de site statique Hugo</strong><br />
                <a href="https://github.com/rebelz/hugo-gitlab-ci" target="_blank" rel="noopener noreferrer">hugo-gitlab-ci</a> : Configuration CI pour déployer un site statique Hugo vers GitLab Pages.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Gatsby</strong><br />
                <a href="https://github.com/harshithprajwal/gatsby-gitlab-ci" target="_blank" rel="noopener noreferrer">gatsby-gitlab-ci</a> : Exemple de CI/CD pour une application Gatsby.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple de Terraform</strong><br />
                <a href="https://github.com/furmanec/terraform-gitlab-ci" target="_blank" rel="noopener noreferrer">terraform-gitlab-ci</a> : Exemple d'utilisation de Terraform avec GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Kotlin</strong><br />
                <a href="https://github.com/adriantimothy/kotlin-gitlab-ci" target="_blank" rel="noopener noreferrer">kotlin-gitlab-ci</a> : Exemple d'application Kotlin intégré avec GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application NestJS</strong><br />
                <a href="https://github.com/richardmorris/nestjs-gitlab-ci" target="_blank" rel="noopener noreferrer">nestjs-gitlab-ci</a> : Exemple d'utilisation de GitLab CI/CD pour une application NestJS.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Haskell</strong><br />
                <a href="https://github.com/mikekrause/haskell-gitlab-ci" target="_blank" rel="noopener noreferrer">haskell-gitlab-ci</a> : Intégration de GitLab CI/CD pour les applications Haskell.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple Jenkins avec GitLab CI</strong><br />
                <a href="https://github.com/axelspringer/jenkins-gitlab-ci" target="_blank" rel="noopener noreferrer">jenkins-gitlab-ci</a> : Exemple d'utilisation de Jenkins avec GitLab CI.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application R</strong><br />
                <a href="https://github.com/Kaponata/r-gitlab-ci" target="_blank" rel="noopener noreferrer">r-gitlab-ci</a> : Configuration CI/CD pour des applications R utilisant GitLab.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Scala</strong><br />
                <a href="https://github.com/friedrichl/scala-gitlab-ci" target="_blank" rel="noopener noreferrer">scala-gitlab-ci</a> : Projet Scala avec configuration GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Svelte</strong><br />
                <a href="https://github.com/johndyer/svelte-gitlab-ci" target="_blank" rel="noopener noreferrer">svelte-gitlab-ci</a> : Configuration d'une application Svelte avec GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'Architecture Onion</strong><br />
                <a href="https://github.com/codingfreak/onion-architecture-gitlab-ci" target="_blank" rel="noopener noreferrer">onion-architecture-gitlab-ci</a> : Configuration GitLab CI/CD pour un projet d'architecture onion.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Laravel</strong><br />
                <a href="https://github.com/ora-1743/laravel-gitlab-ci" target="_blank" rel="noopener noreferrer">laravel-gitlab-ci</a> : Configuration CI/CD pour des projets Laravel dans le pipeline GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple de projet iOS avec Xcode</strong><br />
                <a href="https://github.com/kolosek/xcode-gitlab-ci" target="_blank" rel="noopener noreferrer">xcode-gitlab-ci</a> : Exemple d'utilisation de GitLab CI/CD avec une application iOS développée sur Xcode.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Java</strong><br />
                <a href="https://github.com/johnnyluy/java-gitlab-ci-example" target="_blank" rel="noopener noreferrer">java-gitlab-ci-example</a> : Projet Java de base avec intégration GitLab CI.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application C#</strong><br />
                <a href="https://github.com/mrf77/csharp-gitlab-ci" target="_blank" rel="noopener noreferrer">csharp-gitlab-ci</a> : Configuration pour des applications C# utilisant GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application Dart & Flutter</strong><br />
                <a href="https://github.com/claro/Flutter-GitLab-CI" target="_blank" rel="noopener noreferrer">flutter-gitlab-ci</a> : Configuration CI pour des applications Dart et Flutter utilisant GitLab.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple d'application PHP personnalisée</strong><br />
                <a href="https://github.com/timothee-rogers/custom-php-gitlab-ci" target="_blank" rel="noopener noreferrer">custom-php-gitlab-ci</a> : Configuration d'une application PHP personnalisée avec GitLab CI/CD.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple de Microservices</strong><br />
                <a href="https://github.com/sebastian-habli/microservices-gitlab-ci" target="_blank" rel="noopener noreferrer">microservices-gitlab-ci</a> : Exemples GitLab CI pour une architecture de microservices.
              </RepositoryItem>
              <RepositoryItem>
                <strong>Exemple de tests d'API de base</strong><br />
                <a href="https://github.com/hartmann-michael/api-testing-gitlab-ci" target="_blank" rel="noopener noreferrer">api-testing-gitlab-ci</a> : Exemple de CI/CD pour des tests d'API utilisant GitLab.
              </RepositoryItem>
            </RepositoryList>
          </Section>
        </MainContent>
        <Offers />
      </PageWrapper>
    </>
  );
}

export default GitlabExp;