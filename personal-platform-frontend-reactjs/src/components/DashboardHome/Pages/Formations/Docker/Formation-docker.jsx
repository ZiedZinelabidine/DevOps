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


export function FormationDocker() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showModalRegister, setModalRegister] = useState(false);

  const features = [
    {
      title: "Docker: Les conteneurs kezako",
      icon: <Cloud size={24} />,
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-docker.itgalaxy.io/les-conteneur-kezako-/index.html"
    },
    {
      title: "Docker : Le principe de la containerisation ",
      icon: <GraduationCap size={24} />,
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-docker.itgalaxy.io/principe-de-la-containerisation/index.html"

    },
    {
      title: "Docker : Les commandes de base de docker",
      icon: <Users size={24} />,
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-docker.itgalaxy.io/les-commandes-de-base-de-docker/index.html"

    },
    {
        title: "Docker : Déployer une application Python",
        icon: <Cloud size={24} />,
        features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-docker.itgalaxy.io/tp6-pratiquer-du-dockerfile-avec-une-application-en-python/index.html"

      },
      {
        title: "Docker : Déployer Wordpress avec Docker",
          icon: <GraduationCap size={24} />,
          features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-docker.itgalaxy.io/tp10-application-php-with-database-mysql/index.html"

        },
        {
            title: "Docker : Sécurité ",
            icon: <Users size={24} />,
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-docker.itgalaxy.io/docker--s%C3%A9curit%C3%A9/index.html"

        },
        {
          title: "Docker : docker-compose ",
          icon: <Users size={24} />,
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-docker.itgalaxy.io/docker-compose/index.html"

        },
        {
            title: "Docker : Docker swarm vs Kubernetes",
            icon: <Users size={24} />,
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-docker.itgalaxy.io/docker-swarm-vs-kubernetes/index.html"

        },
        {
            title: "Docker : Quelques snippets utiles",
            icon: <Users size={24} />,
            features: [
              "Support dédié complet gratuit",
              "Workshops pratiques gratuit"
            ],
            slug: "https://formations-docker.itgalaxy.io/quelques-snippets-utiles/index.html"
        }
  ];


  const faqs = [
    {
        question: "Quels sont les prérequis pour suivre la formation Docker ?",
        answer: "Une compréhension de base des systèmes d'exploitation et des concepts de virtualisation est recommandée. Connaître les lignes de commande peut être utile."
    },
    {
        question: "La formation Docker est-elle certifiante ?",
        answer: "Oui, nos formations préparent aux certifications Docker officielles. Notez que le coût de l'examen n'est pas inclus dans le prix de la formation."
    },
    {
        question: "Comment se déroulent les sessions de formation Docker à distance ?",
        answer: "Les sessions à distance sont interactives et utilisent des outils de collaboration en ligne. Vous aurez accès à un environnement Docker dédié pour la pratique."
    },
    {
        question: "Y a-t-il un suivi après la formation Docker ?",
        answer: "Oui, nous offrons un support post-formation de 30 jours incluant des sessions de questions-réponses avec nos formateurs."
    },
    {
        question: "Quelle est la durée de la formation Docker ?",
        answer: "La durée dépend du niveau de la formation choisie, allant de 2 jours à une semaine pour les formations intensives."
    },
    {
        question: "Comment s'inscrire à la formation Docker ?",
        answer: "L'inscription peut être effectuée directement sur notre site web en choisissant la formation Docker souhaitée et en remplissant le formulaire d'inscription."
    },
    {
        question: "Offrez-vous des cours Docker en ligne et sur site ?",
        answer: "Oui, nous proposons des formations Docker à distance et sur site, selon vos préférences et vos besoins."
    },
    {
        question: "Puis-je demander des dates de formation Docker personnalisées ?",
        answer: "Oui, nous pouvons organiser des sessions personnalisées alignées avec votre disponibilité, sur demande."
    },
    {
        question: "Quelle est la taille des classes de formation Docker ?",
        answer: "Nous gardons des groupes restreints, généralement entre 10 et 20 participants, pour garantir une attention personnalisée."
    },
    {
        question: "Quels types d'activités pratiques sont incluses dans la formation Docker ?",
        answer: "Nos formations incluent des exercices pratiques sur des applications conteneurisées, l'orchestration des conteneurs, et des projets réels avec Docker."
    },
    {
        question: "Quels outils de collaboration utilisez-vous pour les cours Docker à distance ?",
        answer: "Nous utilisons Zoom pour les sessions en direct et Miro pour la collaboration interactive."
    },
    {
        question: "Quelles compétences vais-je acquérir à l'issue de la formation Docker ?",
        answer: "Les participants apprendront à construire, déployer et gérer des applications conteneurisées à l'aide de Docker, Docker Compose, et d'autres outils associés."
    },
    {
        question: "Quelle est votre politique d'annulation pour la formation Docker ?",
        answer: "Les annulations sont possibles jusqu'à 10 jours avant le début de la formation. Passé ce délai, le coût est entièrement dû."
    },
    {
        question: "Proposez-vous des packages de formation Docker pour les entreprises ?",
        answer: "Oui, nous créons des solutions sur mesure pour les entreprises, adaptées à leurs besoins en matière de conteneurisation."
    },
    {
        question: "Quel support technique est fourni pendant la formation Docker ?",
        answer: "Nos instructeurs sont disponibles pour répondre aux questions en temps réel et fournir des clarifications pendant les exercices pratiques."
    },
    {
        question: "Quelles méthodes de paiement acceptez-vous pour la formation Docker ?",
        answer: "Nous acceptons les paiements par carte de crédit, virement bancaire, et d'autres méthodes de paiement sécurisées."
    },
    {
        question: "La formation Docker est-elle adaptée aux débutants ?",
        answer: "Oui, elle convient aux débutants, tout en incluant des sections avancées pour ceux qui peinent à maîtriser Docker et les microservices."
    },
    {
        question: "Le contenu de la formation Docker est-il mis à jour régulièrement ?",
        answer: "Oui, nous mettons à jour régulièrement le contenu pour suivre les dernières tendances et mises à jour de Docker."
    },
    {
        question: "Que dois-je apporter pour participer à la formation Docker ?",
        answer: "Vous aurez besoin d'un ordinateur avec accès Internet et, pour les formations en personne, votre propre ordinateur portable est recommandé."
    },    {
      question: "Les cours Docker sont-ils adaptés pour une reconversion professionnelle ?",
      answer: "Oui, nos formations sont conçues pour aider les professionnels en reconversion à acquérir des compétences en conteneurisation avec Docker, un domaine en forte demande."
  },
  {
      question: "Y a-t-il des évaluations pendant la formation Docker ?",
      answer: "Oui, des évaluations régulières sont organisées pour s'assurer que les participants comprennent les concepts et maîtrisent les compétences enseignées."
  },
  {
      question: "Proposez-vous un accès à des ressources après la formation Docker ?",
      answer: "Oui, les participants ont accès à une documentation riche, à des tutoriels vidéo, et aux enregistrements des sessions pendant une période déterminée après la formation."
  },
  {
      question: "Comment préparer ma participation à la formation Docker ?",
      answer: "Il est conseillé de se familiariser avec les concepts de base de Docker et de créer un compte Docker Hub pour explorer les images Docker disponibles."
  },
  {
      question: "Comment les formations Docker sont-elles évaluées par les participants ?",
      answer: "Nous sollicitons des retours via des questionnaires d'évaluation à la fin de chaque formation pour améliorer continuellement nos services."
  },
  {
      question: "Quel est le format de la formation Docker (théorique vs pratique) ?",
      answer: "La formation est principalement pratique, avec un équilibre entre théorie et exercices pratiques pour une compréhension approfondie."
  },
  {
      question: "Est-il possible de suivre plusieurs formations Docker à la suite ?",
      answer: "Oui, notre programme est conçu pour que les participants puissent suivre plusieurs formations afin de devenir des experts complets en Docker et conteneurisation."
  }
];

  const skillsSection = {
    title: "Exploitez vos compétences sur ItGalaxy.io",
    subtitle: "Transformez votre expertise Docker en opportunités professionnelles",
    skills: [
      {
        icon: <Code size={24} />,
        title: "Projets Freelance",
        description: "Accédez à des projets cloud passionnants et travaillez avec des entreprises innovantes"
      },
      {
        icon: <Briefcase size={24} />,
        title: "Opportunités de Carrière",
        description: "Trouvez des postes Docker attractifs auprès d'entreprises recherchant des experts cloud"
      },
      {
        icon: <Target size={24} />,
        title: "Mentorat",
        description: "Partagez votre expertise en accompagnant d'autres professionnels dans leur parcours cloud"
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
      <title> Docker Formation - Maîtrisez le Cloud Computing</title>
      <meta name="description" content="Rejoignez nos formations professionnelles sur Docker, adaptées à tous les niveaux. Développez vos compétences en conteneurisation et propulsez votre carrière dans le secteur du cloud." />
    </Helmet>

      <main>
        <Section>
          <Container>
          <Hero>
          <Title>Docker Formation Gratuite</Title>
          <Subtitle>
              Rejoignez notre formation Docker gratuite pour maîtriser le cloud computing et préparer vos certifications AWS.
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