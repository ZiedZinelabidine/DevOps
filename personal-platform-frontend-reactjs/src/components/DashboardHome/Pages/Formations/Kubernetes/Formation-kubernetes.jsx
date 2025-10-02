import React, { useState } from 'react';
import styled , {createGlobalStyle } from 'styled-components';
import { 
    ArrowRight, 
    CheckCircle, 
    Cloud, 
    GraduationCap, 
    Users,
    Calendar,
    Video,
    MapPin,
    BookOpen,
    Layout,
    Terminal,
    Award,
    ChevronDown,
    ChevronUp,
    Laptop,
    MessagesSquare,
    Code,
    Briefcase,
    Target,
    TrendingUp
  } from 'lucide-react';
import { Helmet } from 'react-helmet';
import FooterHome from '@components/DashboardHome/FooterHome/FooterHome';
import Header from '@components/Header/Header';
import Contact from './Contact';
import Register from "components/Authentification/modals/register";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #FF9900;
    --primary-dark: #FF5500;
    --background: #111827;
    --text: rgba(255, 255, 255, 0.95);
    --text-secondary: rgba(255, 255, 255, 0.7);
    --border: rgba(107, 114, 128, 0.5);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: dark;
    background-color: var(--background);
    color: var(--text);
    min-width: 320px;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }

  .animate-pulse-slow {
    animation: pulse 3s infinite ease-in-out;
  }
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: linear-gradient(to right, var(--primary), var(--primary-dark));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillIcon = styled(IconWrapper)`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1.5rem;
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
`;

const Section = styled.section`
  padding: 6rem 1rem;
  background: rgba(31, 41, 55, 0.5);
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Hero = styled.div`
  text-align: center;
  padding-top: 8rem;
  animation: fadeIn 0.5s ease-out;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, white, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: white;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  text-align: center;
  max-width: 36rem;
  margin: 0 auto 3rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 36rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 4rem;
  grid-template-columns: repeat(1, 1fr);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary);
  }
`;

const SessionCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BenefitCard = styled(Card)`
  text-align: center;
  padding: 2rem 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;



const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-left: 10%;
  
  ${props => props.primary ? `
    background: linear-gradient(to right, var(--primary), var(--primary-dark));
    color: #111827;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 153, 0, 0.2);
    }
  ` : `
    border: 1px solid var(--border);
    color: white;
    
    &:hover {
      border-color: var(--primary);
      background: rgba(255, 153, 0, 0.1);
    }
  `}
`;

const FeatureList = styled.ul`
  margin-bottom: 2rem;
  space-y: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
`;

const FAQContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid var(--border);
  border-radius: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const FAQButton = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const FAQContent = styled.div`
  padding: ${props => props.isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem'};
  color: var(--text-secondary);
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const SkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 2rem;
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 153, 0, 0.1);
  }
`;


export function FormationK8S() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showModalRegister, setModalRegister] = useState(false);

  const features = [
    {
      title: " Formation kubernetes : Mise en place d'un cluster Kubernetes sur AWS et minikube",
      icon: <Cloud size={24} />,
      description: "Démarrez votre parcours cloud avec les bases essentielles d'AWS",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-k8s.itgalaxy.io/mise-en-place-cluster-k8s/index.html"
    },
    {
      title: "Formation kubernetes :  Kubectl config",
      icon: <GraduationCap size={24} />,
      description: "Maîtrisez les services avancés et les meilleures pratiques AWS",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-k8s.itgalaxy.io/kubectl-config/index.html"

    },
    {
      title: "Formation kubernetes: Configurer USER IAM sur Kubernetes AWS (EKS)",
      icon: <Users size={24} />,
      description: "Solutions personnalisées pour votre organisation",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-k8s.itgalaxy.io/configurer-user-iam-et-k8s-sur-aws/index.html"

    },
    {
        title: "Formation kubernetes : Introduction aux objets k8S",
        icon: <Cloud size={24} />,
        description: "Solutions personnalisées pour votre organisation",
        features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-k8s.itgalaxy.io/introduction-aux-objets-kubernetes/index.html"

      },
      {
        title: "Formation kubernetes : Premiers pas sur Kubernetes avec une application NodeJs",
          icon: <GraduationCap size={24} />,
          description: "Solutions personnalisées pour votre organisation",
          features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-k8s.itgalaxy.io/deploiement-app-nodejs/index.html"

        },
        {
            title: "Formation kubernetes : Deploiment de l'application Dockercoins",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-k8s.itgalaxy.io/deploiement-application-dockercoins-/index.html"

        },
        {
            title: "Formation kubernetes: Deploiment de l'application Dockercoins avec k8s",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-k8s.itgalaxy.io/deploiement-application-dockercoins-/deploiment-dockercoins-docker-compose/index.html"

        },
        {
            title: "Formation kubernetes: Wordpress pour la création de vos sites et de vos blog !!",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-k8s.itgalaxy.io/deployer-wordpress-avec-pvpvc/index.html"

        },
        {
            title: "Formation kubernetes : Monotoring avec Prometheus grafana",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
              "Support dédié complet gratuit",
              "Workshops pratiques gratuit"
            ],
            slug: "https://formations-k8s.itgalaxy.io/monotoring-avec-prometheus-grafana/index.html"
        }
  ];


  const faqs = [
    {
      question: "Quels sont les prérequis pour suivre la formation Kubernetes ?",
      answer: "Une connaissance de base en Linux, en lignes de commande et en virtualisation est recommandée. Une expérience en gestion de containers ou Docker est un plus."
    },
    {
      question: "La formation Kubernetes est-elle certifiante ?",
      answer: "Nous proposons une attestation de suivi et d'acquisition des compétences. Pour la certification officielle Kubernetes (CKA ou CKAD), vous devrez passer l'examen séparément."
    },
    {
      question: "Comment se déroulent les sessions à distance ?",
      answer: "Les sessions en ligne sont interactives, avec des outils comme Zoom ou Teams. Vous aurez accès à un environnement Kubernetes pratique pour suivre les exercices en direct."
    },
    {
      question: "Y a-t-il un suivi après la formation Kubernetes ?",
      answer: "Oui, nous proposons un support de 30 jours pour répondre à vos questions et vous accompagner dans la mise en pratique de vos compétences."
    },
    {
      question: "Quelle est la durée de la formation Kubernetes ?",
      answer: "En général, la formation dure entre 2 et 4 jours, selon le programme et le niveau de profondeur."
    },
    {
      question: "Comment m'inscrire à la formation Kubernetes ?",
      answer: "Vous pouvez vous inscrire directement sur notre site web en sélectionnant la date qui vous convient et en remplissant le formulaire dédié."
    },
    {
      question: "Les formations Kubernetes sont-elles disponibles en ligne et en présentiel ?",
      answer: "Oui, nous proposons des sessions à distance et sur site, selon votre préférence ou votre localisation."
    },
    {
      question: "Puis-je organiser une session Kubernetes sur mesure pour mon équipe ?",
      answer: "Absolument, contactez-nous pour une formation adaptée à vos besoins spécifiques et à votre environnement."
    },
    {
      question: "Quel est le nombre de participants par session ?",
      answer: "Nous limitons généralement à 10-15 participants pour garantir un accompagnement personnalisé."
    },
    {
      question: "Quels contenus pratiques sont inclus dans la formation Kubernetes ?",
      answer: "Exercices pratiques sur la gestion de clusters, le déploiement d'applications, la mise en place de services, le scaling et la maintenance."
    },
    {
      question: "Quels outils de collaboration utilisez-vous en formation à distance ?",
      answer: "Zoom pour les visioconférences, et des outils comme Visual Studio Code et kubectl pour manipuler Kubernetes en temps réel."
    },
    {
      question: "Quelles compétences vais-je acquérir à la fin de la formation Kubernetes ?",
      answer: "Maîtrise du déploiement, de l'orchestration, de la gestion de clusters, de la sécurité et de la haute disponibilité avec Kubernetes."
    },
    {
      question: "Quelle est votre politique d'annulation pour la formation Kubernetes ?",
      answer: "Annulation gratuite jusqu’à 7 jours avant la formation. Passé ce délai, la totalité du coût reste due ou un avoir peut être proposé selon la situation."
    },
    {
      question: "Proposez-vous des packages de formation pour entreprises ?",
      answer: "Oui, nous proposons des formations sur mesure pour vos équipes, avec des modules adaptés à votre environnement et vos enjeux."
    },
    {
      question: "Quel support technique est fourni pendant la formation Kubernetes ?",
      answer: "Nos formateurs interviennent en direct pour répondre à vos questions et vous guider dans tous les exercices pratiques."
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Carte de crédit, virement bancaire ou paiement en ligne sécurisé."
    },
    {
      question: "Les formations sont-elles accessibles aux débutants ?",
      answer: "Oui, la formation commence par les fondamentaux, accessible à ceux qui découvrent Kubernetes, tout en proposant des modules avancés."
    },
    {
      question: "Les contenus sont-ils mis à jour régulièrement ?",
      answer: "Oui, nous actualisons fréquemment nos modules pour suivre les nouveautés et bonnes pratiques Kubernetes."
    },
    {
      question: "Que dois-je apporter pour participer à la formation Kubernetes ?",
      answer: "Un ordinateur portable avec connexion Internet, et si possible, une installation locale ou un accès à un environnement Kubernetes en ligne."
    },
    {
      question: "La formation Kubernetes est-elle recommandée pour une reconversion professionnelle ?",
      answer: "Absolument, Kubernetes est une compétence très demandée dans le DevOps et l’administration cloud, idéale pour une reconversion technique."
    },{
      question: "Y a-t-il des évaluations ou tests pendant la formation Kubernetes ?",
      answer: "Oui, des exercices et mises en situation sont proposés pour évaluer votre compréhension avant de passer à la section suivante."
    },
    {
      question: "Proposez-vous un accès à des ressources après la formation Kubernetes ?",
      answer: "Oui, vous aurez accès à des supports, tutoriels, et enregistrements pour continuer à pratiquer après la formation."
    },
    {
      question: "Comment puis-je me préparer efficacement à la formation Kubernetes ?",
      answer: "Il est conseillé d'avoir des notions de base en ligne de commande Linux, Docker, et en gestion de réseaux. Préparez également un compte cloud si une plateforme en ligne est utilisée."
    },
    {
      question: "Comment les participants évaluent-ils la formation Kubernetes ?",
      answer: "Nous recueillons systématiquement des retours via un questionnaire de satisfaction pour améliorer continuellement le contenu et la pédagogie."
    }
    ]

    const skillsSection = {
      title: "Exploitez vos compétences sur ItGalaxy.io",
      subtitle: "Transformez votre expertise Kubernetes en opportunités professionnelles",
      skills: [
        {
          icon: <Code size={24} />,
          title: "Projets en Containerisation",
          description: "Accédez à des projets concrets de déploiement et gestion d’applications containerisées avec Kubernetes."
        },
        {
          icon: <Briefcase size={24} />,
          title: "Opportunités de Carrière",
          description: "Trouvez des postes en développement DevOps, administration cloud et orchestration, orientés Kubernetes."
        },
        {
          icon: <Target size={24} />,
          title: "Mentorat et Community",
          description: "Partagez votre expertise en accompagnant d’autres professionnels ou en participant à des projets open-source Kubernetes."
        }
      ]
    };

  const handleModalRegister = () => {
    setModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  }

  return (
    <>
    <Header /> 
    <GlobalStyle />

    <PageContainer>
    <Helmet>
        <title>Formation Kubernetes - Maîtrisez l'Orchestration de Containers</title>
        <meta
          name="description"
          content="Participez à nos formations Kubernetes gratuites et professionnelles, conçues pour tous les niveaux. Apprenez à déployer, gérer et orchestrer vos applications containerisées et boostez votre carrière dans le cloud et le DevOps."
        />
      </Helmet>

      <main>
        <Section>
          <Container>
          <Hero>
              <Title>Formation Kubernetes Gratuite</Title>
              <Subtitle>
                Formation Kubernetes gratuite et professionnelle pour maîtriser l’orchestration de containers et déployer vos applications à grande échelle.
              </Subtitle>
            </Hero>

            <Grid>
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <IconWrapper>
                      {feature.icon}
                    </IconWrapper>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>


                  <FeatureList>
                    {feature.features.map((item, i) => (
                      <FeatureItem key={i}>
                        <CheckCircle size={20} color="var(--primary)" />
                        {item}
                      </FeatureItem>
                    ))}
                  </FeatureList>

                    <Button primary  onClick={() =>  window.location.href = feature.slug }>
                      Commencer
                      <ArrowRight size={20} />
                    </Button>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        <Contact />

        <Section dark>
          <Container>
            <SectionTitle>{skillsSection.title}</SectionTitle>
            <SectionSubtitle>
              {skillsSection.subtitle}
            </SectionSubtitle>

            <Grid>
              {skillsSection.skills.map((skill, index) => (
                <SkillCard key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <SkillIcon>
                    {skill.icon}
                  </SkillIcon>
                  <CardTitle style={{ marginBottom: '1rem' }}>
                    {skill.title}
                  </CardTitle>
                  <CardDescription style={{ marginBottom: '1.5rem' }}>
                    {skill.description}
                  </CardDescription>
                  <Button primary onClick={() => handleModalRegister()}>
                    En savoir plus
                    <ArrowRight size={20} />
                  </Button>
                </SkillCard>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section>
          <Container>
            <SectionTitle>Questions fréquentes</SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur nos formations
            </SectionSubtitle>

            <FAQContainer>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQButton onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                    {faq.question}
                    {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </FAQButton>
                  <FAQContent isOpen={openFAQ === index}>
                    {faq.answer}
                  </FAQContent>
                </FAQItem>
              ))}
            </FAQContainer>
          </Container>
        </Section>
      </main>
    </PageContainer>
    <FooterHome page={'design'} />
    {showModalRegister && (
        <Register
          openModalRegister={showModalRegister}
          setOpenModalRegister={setModalRegister}
          handleModalRegister={handleCloseModalRegister}
          proxy={"dashboard"}
        />)}
    </>
  );
}