import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Gitlab as GitlabLogo , GitBranch} from 'lucide-react';
import Offers from '../Offres';
const gitcicd1 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/gitlab3.png`;
const gitlabcicd2 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/gitlabcicd2.png`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif;
    background-color: #111827;
    color: #e5e7eb;
    line-height: 1.7;
  }
`;

const Header1 = styled.header`
  background: #1f2937;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Container = styled.div`
  background: #1a1a1a;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
              0 2px 4px -2px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  border: 1px solid #2a2a2a;
`;

const Main = styled.main`
  min-height: 100vh;
`;

const Content = styled.section`
  background: #1f2937;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
  }
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

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #e5e7eb;
  margin: 1.5rem 0 1rem;
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  color: #d1d5db;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #9ca3af;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const Strong = styled.strong`
  color: #e5e7eb;
  font-weight: 600;
`;

const StyledGitlabLogo = styled(GitlabLogo)`
  color: #fc6d26;
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




function GitLabCICD() {
  return (
    <>
      <GlobalStyle />
      <Header>
      <HeaderContent>
        <Title>
        <StyledGitlabLogo size={32} />

          GitLab CI/CD Guide
        </Title>
        <Subtitle>
          Guide complet du GitLab CI/CD
        </Subtitle>
      </HeaderContent>
    </Header>
      <Container>
    <Main>
        <Section>
          <img src={gitcicd1} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />
            <SectionTitle>Introduction</SectionTitle>
            <Paragraph>
                L'intégration continue est un ensemble de pratiques visant à améliorer la qualité du code des applications. Ce concept implique plusieurs étapes clés qui permettent d'évaluer la qualité du code produit, d'automatiser la construction de l'application à partir de son code source, d'exécuter des tests unitaires pour prévenir toute forme de régression, et de réaliser des tests d'intégration.
            </Paragraph>
            <Paragraph>
                Il s'agit notamment au cours de différentes étapes d'évaluer de la qualité du code produit, d'inclure et d'automatiser 
                la construction de l'application à partir de son code source, d'exécuter les tests unitaires pour éviter toute forme 
                de régression et d'effectuer des tests d'intégration.
            </Paragraph>
            <Paragraph>
                La phase de déploiement continue permet, à l'issue de la phase d'intégration, d'automatiser la mise en production 
                de l'application, afin de réduire au maximum les délais entre la production de code, et sa mise à disposition des 
                utilisateurs ou des testeurs.
            </Paragraph>
            <Paragraph>
                L'intégration continue, ou IC, permet d'intégrer le code de votre équipe dans un référentiel partagé. Les développeurs 
                partagent leur nouveau code dans une demande de fusion (extraction), ce qui déclenche la création, le test et la 
                validation par un pipeline, avant la fusion des modifications dans votre référentiel.
            </Paragraph>
            <Paragraph>
                GitLab CI/CD va vous permettre d'automatiser les builds, les tests, les déploiements, etc. de vos applications. 
                L'ensemble de vos tâches peut être divisé en étapes et l'ensemble de vos tâches et étapes constituent un pipeline.
            </Paragraph>
            <Paragraph>
                Les outils d'intégration continue - CI, et de déploiement continu - CD, permettent d'automatiser beaucoup de 
                processus qui prennent du temps, et sont sujets à erreur humaine.
            </Paragraph>
            <Paragraph>
                La CI permet une intégration de code plus rapide et moins déstabilisante, puisque le code est intégré au fur et 
                à mesure, à un rythme plus soutenu qu'avec d'autres approches de développement.
            </Paragraph>
        </Section>


        <img src={gitlabcicd2} style={{ marginLeft: "30%", width: '45%' , height: '40%' , marginBottom: "1%" }} /> <br />

        <Section>
            <SectionTitle>Étape 1 : Planifiez votre développement</SectionTitle>
            <Paragraph>
                Afin de savoir quoi développer, il est nécessaire d'avoir à disposition un outil permettant la collaboration entre 
                les développeurs. Cet outil permettra notamment de gérer les différentes releases et toutes les fonctionnalités, 
                de garantir la priorité du backlog, etc.
            </Paragraph>
            <Paragraph>
                Intervenant tout au long du projet, la collaboration de toute l'équipe est nécessaire pour assurer la planification 
                du projet. Cette planification est étroitement liée à la méthodologie Scrum. Elle a pour but de découper le projet 
                en petites tâches à réaliser par toute l'équipe.
            </Paragraph>
            <Paragraph>
                Sur notre chaîne d'assemblage, la planification représente la répartition des tâches de chaque collaborateur, ou 
                encore le brief du matin destiné à définir les tâches à faire durant la journée.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>Étape 2 : Compilez et intégrez votre code</SectionTitle>
            <SubTitle>Le contrôle de code source</SubTitle>
            <Paragraph>
                Le code source se doit d'être disponible à chaque instant sur un dépôt central. Chaque développement doit faire 
                l'objet d'un suivi de révision.
            </Paragraph>
            <Paragraph>
                Le code doit être compilable à partir d'une récupération fraîche, et ne faire l'objet d'aucune dépendance externe.
            </Paragraph>

            <SubTitle>L'orchestrateur</SubTitle>
            <Paragraph>
                Ensuite, toutes les étapes doivent être automatisées par un orchestrateur, qui saura reproduire ces étapes et 
                gérer les dépendances entre elles.
            </Paragraph>
            <Paragraph>
                De plus, l'utilisation d'un orchestrateur permet de donner accès à tous, et à tout moment, à un tableau de bord 
                qui donnera l'état de santé des étapes d'intégration continue.
            </Paragraph>
            <Paragraph>
                Ainsi, les développeurs ont au plus tôt la boucle de feedback nécessaire, afin de garantir que l'application soit 
                prête à tout moment. De plus, l'orchestrateur permettra d'aller plus loin dans la livraison continue, comme on le 
                verra dans la suite.
            </Paragraph>

            <SubTitle>Compiler le code</SubTitle>
            <Paragraph>
                La première étape, et celle qui paraît la plus évidente, est de compiler le code de manière continue. En effet, 
                sans cette étape, le code est compilé manuellement sur le poste du développeur, afin que ce dernier s'assure que 
                son code compile.
            </Paragraph>
            <Paragraph>
                La mise en place d'une première étape de compilation dans un processus d'intégration continue permet justement de 
                ne plus se soucier si des modifications de code cassent la compilation. Le développeur doit alors s'assurer de bien 
                envoyer son code source sur le dépôt central. En faisant cela, il déclenche une première étape de compilation, avec 
                toutes les modifications des autres développeurs. Si la compilation ne se fait pas, le code est alors rejeté, et le 
                développeur doit corriger ses erreurs.
            </Paragraph>
            <Paragraph>
                Vous pourrez compiler votre code avec Maven, Ant, Gradle, MSBuild, NAnt, Gulp ou encore Grunt.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>Les tests unitaires</SectionTitle>
            <Paragraph>
                Dans cette étape, l'orchestrateur se charge de lancer les tests unitaires à la suite de la compilation. Ces tests 
                unitaires, généralement avec un framework associé, garantissent que le code respecte un certain niveau de qualité.
            </Paragraph>
            <Paragraph>
                Les tests unitaires permettent de vérifier le bon fonctionnement d'une partie précise d'un logiciel ou d'une 
                portion d'un programme.
            </Paragraph>
            <Paragraph>Les tests unitaires apportent 3 atouts à la production :</Paragraph>
            <List>
                <ListItem>
                    <Strong>Trouver les erreurs plus facilement</Strong> : Les tests sont exécutés durant tout le développement, 
                    permettant de visualiser si le code fraîchement écrit correspond au besoin.
                </ListItem>
                <ListItem>
                    <Strong>Sécuriser la maintenance</Strong> : Lors d'une modification d'un programme, les tests unitaires signalent 
                    les éventuelles régressions. En effet, certains tests peuvent échouer à la suite d'une modification, il faut donc 
                    soit réécrire le test pour le faire correspondre aux nouvelles attentes, soit corriger l'erreur se situant dans le code.
                </ListItem>
                <ListItem>
                    <Strong>Documenter le code</Strong> : Les tests unitaires peuvent servir de complément à la documentation ; il est 
                    très utile de lire les tests pour comprendre comment s'utilise une méthode.
                </ListItem>
            </List>
        </Section>

        <Section>
            <SectionTitle>Mesurez la qualité de votre code</SectionTitle>
            <Paragraph>
                Lors de l'étape de qualité de code, nous cherchons à assurer la plus petite dette technique possible de notre 
                application. La dette technique est le temps nécessaire à la correction de bugs ou à l'ajout de nouvelles 
                fonctionnalités, lorsque nous ne respectons pas les règles de coding. La dette est exprimée en heures de correction. 
                Plus cette dette est élevée, plus le code sera difficile à maintenir et à faire évoluer.
            </Paragraph>
            <Paragraph>
                L'étape de qualité de code mesure aussi d'autres métriques, comme :
            </Paragraph>
            <List>
                <ListItem>Le nombre de vulnérabilités au sein du code</ListItem>
                <ListItem>La couverture de test</ListItem>
                <ListItem>Les code smells (qui sont des mauvaises pratiques à ne pas implémenter)</ListItem>
                <ListItem>La complexité cyclomatique (complexité du code applicatif)</ListItem>
                <ListItem>La duplication de code</ListItem>
            </List>
            <Paragraph>
                C'est le rôle du développeur de respecter les normes définies et de corriger au fur et à mesure son code.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>Gérez les livrables de votre application</SectionTitle>
            <Paragraph>
                Le code, une fois compilé, doit être déployé dans un dépôt de livrables, et versionné. Les binaires produits sont 
                appelés artefacts. Ces artefacts doivent être accessibles à toutes les parties prenantes de l'application, afin de 
                pouvoir les déployer et lancer les tests autres qu'unitaires (test de performance, test de bout en bout, etc.).
            </Paragraph>
            <Paragraph>
                Ces artefacts sont disponibles dans un stockage, centralisé et organisé, de données. Ce peut être une ou plusieurs 
                bases de données où les artefacts sont localisés en vue de leur distribution sur le réseau, ou bien un endroit 
                directement accessible aux utilisateurs.
            </Paragraph>
        </Section>
    </Main>
    <Offers />
</Container>

    </>
  );
}

export default GitLabCICD;