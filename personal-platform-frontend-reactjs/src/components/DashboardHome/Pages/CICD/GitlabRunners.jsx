import React, { useState } from 'react';
import { Terminal, Server, Pocket as Docker, Settings, Copy, Check, Mountain as Ubuntu, Link as Linux, CloudCog } from 'lucide-react';
import styled, { createGlobalStyle } from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
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

const CodeBlock = styled.div`
  position: relative;
  margin: 1.5rem 0;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: ${props => props.copied ? '#059669' : '#1e293b'};
  border: 1px solid ${props => props.copied ? '#059669' : '#334155'};
  color: ${props => props.copied ? '#fff' : '#94a3b8'};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.copied ? '#059669' : '#334155'};
  }
`;

const SubSection = styled.div`
  margin: 2rem 0;
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  color: #f8fafc;
  margin: 1.5rem 0 1rem;
`;

function GitlabRunners() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard.writeText();
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const installationSteps = {
    debian: `# Installer les dépendances
sudo apt-get update
sudo apt-get install -y curl

# Ajouter la clé GPG de GitLab Runner
curl -L https://packages.gitlab.com/gpg.key | sudo apt-key add -

# Ajouter le dépôt GitLab Runner
echo "deb https://packages.gitlab.com/gitlab/gitlab-runner/ubuntu/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/gitlab-runner.list

# Installer GitLab Runner
sudo apt-get update
sudo apt-get install gitlab-runner

# Démarrer le service GitLab Runner
sudo gitlab-runner start`,

    centos: `# Installer les dépendances
sudo yum install -y curl

# Ajouter le dépôt GitLab Runner
curl -L https://packages.gitlab.com/gpg.key | sudo rpm --import -
echo "[gitlab-runner]
name=gitlab-runner
baseurl=https://packages.gitlab.com/gitlab/gitlab-runner/el/\\$releasever/\\$basearch
enabled=1
gpgcheck=1
gpgkey=https://packages.gitlab.com/gpg.key" | sudo tee /etc/yum.repos.d/gitlab-runner.repo

# Installer GitLab Runner
sudo yum install gitlab-runner

# Démarrer le service GitLab Runner
sudo gitlab-runner start`,

    docker: `# Télécharger l'image GitLab Runner
docker pull gitlab/gitlab-runner:latest

# Exécuter le conteneur GitLab Runner
docker run -d --name gitlab-runner --restart always \\
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \\
  gitlab/gitlab-runner:latest`,

    aws: `# Connectez-vous à votre instance EC2
ssh -i "votre_clé.pem" ec2-user@votre_instance_publice

# Installer les dépendances
sudo yum update -y
sudo yum install -y curl

# Ajouter le dépôt GitLab Runner
curl -L https://packages.gitlab.com/gpg.key | sudo rpm --import -
echo "[gitlab-runner]
name=gitlab-runner
baseurl=https://packages.gitlab.com/gitlab/gitlab-runner/el/\\$releasever/\\$basearch
enabled=1
gpgcheck=1
gpgkey=https://packages.gitlab.com/gpg.key" | sudo tee /etc/yum.repos.d/gitlab-runner.repo

# Installer GitLab Runner
sudo yum install gitlab-runner

# Démarrer le service GitLab Runner
sudo gitlab-runner start`,

    config: `[[runners]]
  name = "Mon Runner Docker"
  url = "https://gitlab.example.com/"
  token = "VOTRE_TOKEN_RUNNER"
  executor = "docker"
  [runners.docker]
    image = "python:3.8"
    privileged = true
  [runners.cache]
    s3 = [VOTRE_CONFIG_S3]`
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header>
          <HeaderContent>
            <Title>
              <CloudCog size={40} />
              Guide d'Installation GitLab Runner
            </Title>
            <Subtitle>
              Guide complet pour l'installation et la configuration de GitLab Runner sur différentes plateformes
            </Subtitle>
          </HeaderContent>
        </Header>

        <MainContent>
          <Section>
            <SectionHeader>
              <Ubuntu size={24} color="#60a5fa" />
              <SectionTitle>Installation sur Debian/Ubuntu</SectionTitle>
            </SectionHeader>
            <Text>
              Suivez ces étapes pour installer GitLab Runner sur un système Debian ou Ubuntu. Cette méthode utilise le dépôt officiel GitLab.
            </Text>
            <CodeBlock>
              <CopyButton
                copied={copiedIndex === 0}
                onClick={() => handleCopy(installationSteps.debian, 0)}
              >
                {copiedIndex === 0 ? <><Check size={14} /> Copié!</> : <><Copy size={14} /> Copier le code</>}
              </CopyButton>
              <SyntaxHighlighter language="bash" style={atomDark}>
                {installationSteps.debian}
              </SyntaxHighlighter>
            </CodeBlock>
          </Section>

          <Section>
            <SectionHeader>
              <Linux size={24} color="#60a5fa" />
              <SectionTitle>Installation sur CentOS/RHEL</SectionTitle>
            </SectionHeader>
            <Text>
              Pour les systèmes CentOS ou RHEL, utilisez ces commandes pour installer GitLab Runner avec le gestionnaire de paquets RPM.
            </Text>
            <CodeBlock>
              <CopyButton
                copied={copiedIndex === 1}
                onClick={() => handleCopy(installationSteps.centos, 1)}
              >
                {copiedIndex === 1 ? <><Check size={14} /> Copié!</> : <><Copy size={14} /> Copier le code</>}
              </CopyButton>
              <SyntaxHighlighter language="bash" style={atomDark}>
                {installationSteps.centos}
              </SyntaxHighlighter>
            </CodeBlock>
          </Section>

          <Section>
            <SectionHeader>
              <Docker size={24} color="#60a5fa" />
              <SectionTitle>Installation avec Docker</SectionTitle>
            </SectionHeader>
            <Text>
              Exécutez GitLab Runner dans un conteneur Docker pour un déploiement facile et isolé. Cette méthode fonctionne sur tout système avec Docker installé.
            </Text>
            <CodeBlock>
              <CopyButton
                copied={copiedIndex === 2}
                onClick={() => handleCopy(installationSteps.docker, 2)}
              >
                {copiedIndex === 2 ? <><Check size={14} /> Copié!</> : <><Copy size={14} /> Copier le code</>}
              </CopyButton>
              <SyntaxHighlighter language="bash" style={atomDark}>
                {installationSteps.docker}
              </SyntaxHighlighter>
            </CodeBlock>
          </Section>

          <Section>
            <SectionHeader>
              <Server size={24} color="#60a5fa" />
              <SectionTitle>Installation sur AWS</SectionTitle>
            </SectionHeader>
            <Text>
              Pour installer GitLab Runner sur une instance EC2 d'AWS, suivez ces étapes :
            </Text>
            <CodeBlock>
              <CopyButton
                copied={copiedIndex === 3}
                onClick={() => handleCopy(installationSteps.aws, 3)}
              >
                {copiedIndex === 3 ? <><Check size={14} /> Copié!</> : <><Copy size={14} /> Copier le code</>}
              </CopyButton>
              <SyntaxHighlighter language="bash" style={atomDark}>
                {installationSteps.aws}
              </SyntaxHighlighter>
            </CodeBlock>
          </Section>

          <Section>
            <SectionHeader>
              <Settings size={24} color="#60a5fa" />
              <SectionTitle>Configuration</SectionTitle>
            </SectionHeader>
            <Text>
              Après l'installation, vous devez enregistrer et configurer votre GitLab Runner. Voici un exemple de fichier de configuration (config.toml) :
            </Text>
            <CodeBlock>
              <CopyButton
                copied={copiedIndex === 4}
                onClick={() => handleCopy(installationSteps.config, 4)}
              >
                {copiedIndex === 4 ? <><Check size={14} /> Copié!</> : <><Copy size={14} /> Copier le code</>}
              </CopyButton>
              <SyntaxHighlighter language="toml" style={atomDark}>
                {installationSteps.config}
              </SyntaxHighlighter>
            </CodeBlock>
            <SubSection>
              <SubTitle>Processus d'Enregistrement</SubTitle>
              <Text>
                Pour enregistrer votre GitLab Runner, exécutez <code>sudo gitlab-runner register</code> et fournissez :
              </Text>
              <ul>
                <li>L'URL de votre instance GitLab</li>
                <li>Le token d'enregistrement (trouvé dans Zone d'Administration GitLab → Runners)</li>
                <li>La description du runner et les tags</li>
                <li>Le type d'exécuteur (shell, docker, etc.)</li>
              </ul>
            </SubSection>
          </Section>

          <Section>
            <SectionHeader>
              <Check size={24} color="#34d399" />
              <SectionTitle>Types de GitLab Runners</SectionTitle>
            </SectionHeader>
            <Text>
              Les GitLab Runners peuvent être configurés pour utiliser différents exécutants (executors), ce qui permet de choisir le meilleur environnement d'exécution pour vos jobs.
            </Text>
            <SubSection>
              <SubTitle>Exécuteurs communs :</SubTitle>
              <ul>
                <li><strong>Shell</strong> : Exécute des commandes directement sur le shell du système hôte.</li>
                <li><strong>Docker</strong> : Exécute des jobs dans des conteneurs Docker, offrant un environnement isolé et reproductible.</li>
                <li><strong>Docker-SSH</strong> : Une combinaison de Docker et SSH pour exécuter des commandes dans des conteneurs.</li>
                <li><strong>Kubernetes</strong> : Permet à GitLab de déployer et d'exécuter des jobs dans un cluster Kubernetes.</li>
              </ul>
            </SubSection>
          </Section>

          <Section>
            <SectionHeader>
              <Terminal size={24} color="#fbbf24" />
              <SectionTitle>Supervision des GitLab Runners</SectionTitle>
            </SectionHeader>
            <Text>
              Assurer la bonne supervision de vos GitLab Runners est crucial pour garantir qu'ils fonctionnent correctement et efficacement. Voici quelques options :
            </Text>
            <SubSection>
              <SubTitle>Outils de Supervision :</SubTitle>
              <ul>
                <li><strong>Prometheus</strong> : Utilisé pour collecter des métriques de performance et surveiller les Runners à l'aide de l'API de GitLab.</li>
                <li><strong>Grafana</strong> : Pour visualiser les métriques collectées par Prometheus et créer des tableaux de bord personnalisés.</li>
                <li><strong>GitLab Monitoring</strong> : GitLab propose des fonctionnalités de supervision intégrées pour les Runners, disponibles dans les paramètres de votre GitLab.</li>
              </ul>
            </SubSection>
            <Text>
              Il est conseillé de surveiller des métriques comme le temps d'exécution des jobs, le taux d'échecs, et l'utilisation des ressources pour optimiser les performances de vos GitLab Runners.
            </Text>
          </Section>

          <Section>
            <SectionHeader>
              <Check size={24} color="#34d399" />
              <SectionTitle>Bonnes Pratiques pour les GitLab Runners</SectionTitle>
            </SectionHeader>
            <Text>
              Pour assurer un fonctionnement optimal de vos runners, voici quelques bonnes pratiques à suivre :
            </Text>
            <ul>
              <li>Utilisez des tags pour organiser vos runners et les rendre spécifiques à certains types de jobs.</li>
              <li>Gardez votre GitLab Runner et ses dépendances à jour pour bénéficier des dernières fonctionnalités et correctifs de sécurité.</li>
              <li>Configurez des quotas de ressources pour éviter que des jobs consomment trop de CPU ou de mémoire.</li>
              <li>Utilisez l'option <code>--readonly</code> avec Docker si votre job n'a pas besoin d'écrire des fichiers.</li>
              <li>Définissez des artefacts pour conserver les résultats des builds et des tests, afin de les utiliser ultérieurement.</li>
            </ul>
          </Section>
        </MainContent>
        <Offers />
      </PageWrapper>
    </>
  );
}

export default GitlabRunners;
