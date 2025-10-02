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


export function FormationGit() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showModalRegister, setModalRegister] = useState(false);

  const features = [
    {
      title: "Git & Gitlab : Les premiers pas avec Git",
      icon: <Cloud size={24} />,
      description: "Démarrez votre parcours cloud avec les bases essentielles d'AWS",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-gitlab.itgalaxy.io/les-premiers-pas-avec-git-/index.html"
    },
    {
      title: "Git & Gitlab : Introduit une ligne de commentaires ",
      icon: <GraduationCap size={24} />,
      description: "Maîtrisez les services avancés et les meilleures pratiques AWS",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-gitlab.itgalaxy.io/git--introduit-une-ligne-de-commentaires-/index.html"

    },
    {
      title: "Git & Gitlab : git checkout",
      icon: <Users size={24} />,
      description: "Solutions personnalisées pour votre organisation",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-gitlab.itgalaxy.io/git-checkout/index.html"

    },
    {
        title: "Git & Gitlab : git revert, git reset ",
        icon: <Cloud size={24} />,
        description: "Solutions personnalisées pour votre organisation",
        features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-gitlab.itgalaxy.io/git-revert-git-reset-/index.html"

      },
      {
        title: "Git & Gitlab : Gestion des branches ",
          icon: <GraduationCap size={24} />,
          description: "Solutions personnalisées pour votre organisation",
          features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-gitlab.itgalaxy.io/gestion-des-branches/index.html"

        },
        {
            title: "Git & Gitlab : Supprimer une branche ",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-gitlab.itgalaxy.io/supprimer-une-branche/index.htmll"

        },
        {
            title: "Git & Gitlab : WorkFlow GitFlow vs Github Flow",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-gitlab.itgalaxy.io/-workflow-gitflow-vs-github-flow/index.html"

        },
        {
            title: "Git & Gitlab : A propos des tags ",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-gitlab.itgalaxy.io/-a-propos-des-tags/index.html"

        },
        {
            title: "Git & Gitlab : Workshop git ",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
              "Support dédié complet gratuit",
              "Workshops pratiques gratuit"
            ],
            slug: "https://formations-gitlab.itgalaxy.io/workshop-git/index.html"
        }
  ];


  const faqs = [
    {
      question: "Quels sont les prérequis pour suivre la formation Git ?",
      answer: "Une connaissance de base en informatique et en ligne de commande est recommandée. Avoir déjà utilisé un éditeur de texte ou une interface CLI peut être un plus."
    },
    {
      question: "La formation Git est-elle certifiante ?",
      answer: "Nous proposons une certification interne validant les compétences acquises en gestion de version avec Git. Cette certification n'est pas officielle mais valorisable sur votre CV."
    },
    {
      question: "Comment se déroulent les sessions en ligne ?",
      answer: "Les sessions en ligne sont interactives, utilisant des outils comme Zoom ou Teams. Vous aurez accès à un environnement Git ou GitHub pour réaliser les exercices en temps réel."
    },
    {
      question: "Y a-t-il un suivi après la formation Git ?",
      answer: "Oui, nous offrons un accompagnement post-formation de 30 jours pour répondre à vos questions et vous aider à appliquer ce que vous avez appris."
    },
    {
      question: "Quelle est la durée de la formation Git ?",
      answer: "En général, la formation dure entre 1 et 3 jours, selon le niveau et la profondeur des modules abordés."
    },
    {
      question: "Comment je m'inscris à la formation Git ?",
      answer: "Vous pouvez vous inscrire directement via notre site web en choisissant le calendrier qui vous convient et en remplissant le formulaire dédié."
    },
    {
      question: "Les formations Git sont-elles disponibles en ligne et en présentiel ?",
      answer: "Oui, nous proposons des formations à distance et en présentiel, selon votre préférence ou votre localisation."
    },
    {
      question: "Puis-je demander des sessions de formation Git sur-mesure ?",
      answer: "Oui, si vous souhaitez organiser une formation adaptée à votre équipe ou à votre projet, contactez-nous pour une session personnalisée."
    },
    {
      question: "Combien de participants par session ?",
      answer: "Nous limitons le groupe à 10-15 personnes pour assurer une interaction efficace et un apprentissage personnalisé."
    },
    {
      question: "Quels sujets pratiques sont abordés dans la formation Git ?",
      answer: "Exercices sur la gestion de branches, la résolution de conflits, le travail collaboratif avec GitHub, et l’intégration continue."
    },
    {
      question: "Quels outils de collaboration utilisez-vous pour la formation ?",
      answer: "Nous utilisons des plateformes comme GitHub, GitLab ou Bitbucket pour les exercices collaboratifs et la gestion des dépôts."
    },
    {
      question: "Quelles compétences vais-je acquérir à la fin de la formation Git ?",
      answer: "Maîtrise des commandes Git, gestion efficace des branches, résolution de conflits, utilisation de workflows collaboratifs et déploiement avec CI/CD."
    },
    {
      question: "Quelle est votre politique d'annulation pour la formation Git ?",
      answer: "Annulation gratuite jusqu’à 7 jours avant le début. Au-delà, des frais d'annulation peuvent s'appliquer ou la formation doit être payée en totalité."
    },
    {
      question: "Proposez-vous des packages de formation pour les entreprises ?",
      answer: "Oui, nous proposons des formations sur-mesure pour les équipes, adaptées à votre organisation et à votre niveau d'expertise."
    },
    {
      question: "Quel support technique est fourni durant la formation ?",
      answer: "Nos formateurs interviennent en direct pour répondre à vos questions et vous guider dans les exercices pratiques."
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Par carte de crédit, virement bancaire ou paiement en ligne sécurisé."
    },
    {
      question: "La formation Git est-elle adaptée aux débutants ?",
      answer: "Oui, elle commence par les bases et convient aux débutants, tout en proposant des modules avancés pour ceux qui souhaitent approfondir."
    },
    {
      question: "Les contenus de formation sont-ils mis à jour régulièrement ?",
      answer: "Oui, nous actualisons nos modules pour couvrir les dernières fonctionnalités de Git et les meilleures pratiques."
    },
    {
      question: "Que dois-je apporter pour la formation Git ?",
      answer: "Un ordinateur avec accès internet, un éditeur de texte ou IDE, et l’envie d’apprendre."
    },
    {
      question: "La formation Git inclut-elle des évaluations ?",
      answer: "Oui, des mini-tests et exercices pratiques sont intégrés pour vérifier votre progression tout au long de la formation."
    },
    {
      question: "Puis-je accéder aux ressources après la formation ?",
      answer: "Oui, vous aurez accès à des supports de cours, ressources, vidéos et exercices pour continuer à pratiquer après la formation."
    },
    {
      question: "Comment puis-je préparer ma participation à la formation Git ?",
      answer: "Il est conseillé d’installer Git et de créer un compte sur GitHub ou GitLab pour pratiquer en amont et être à l’aise dès le début."
    },
    {
      question: "Comment évaluez-vous la qualité de la formation ?",
      answer: "Par des questionnaires de satisfaction, des retours réguliers, et en améliorant continuellement nos modules pour répondre aux attentes des participants."
    },
    {
      question: "Quelles sont les méthodes d’enseignement utilisées ?",
      answer: "Un mélange de présentations, exercices pratiques, études de cas et travaux en petits groupes pour une meilleure assimilation."
    },
    {
      question: "Y a-t-il une assistance après la formation pour la mise en pratique ?",
      answer: "Oui, nous proposons un accompagnement sur 30 jours pour répondre à vos questions et vous aider à implémenter vos projets."
    }
  
];

  const skillsSection = {
    title: "Développez vos compétences en Git avec ItGalaxy.io",
    subtitle: "Transformez votre maîtrise de Git en opportunités professionnelles dans la gestion de code et le DevOps",
    skills: [
      {
        icon: <Code size={24} />,
        title: "Projets Collaboratifs",
        description: "Accédez à des projets open source ou en équipe, en utilisant Git pour un travail collaboratif efficace"
      },
      {
        icon: <Briefcase size={24} />,
        title: "Opportunités de Carrière",
        description: "Trouvez des postes en développement, DevOps et gestion de projet nécessitant une expertise Git avancée"
      },
      {
        icon: <Target size={24} />,
        title: "Mentorat et Pratique",
        description: "Partagez votre savoir-faire en guidant d'autres développeurs dans la maîtrise des workflows Git et l'intégration continue"
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
          <title>Formation Git - Maîtrisez le Contrôle de Version et la Collaboration</title>
          <meta
            name="description"
            content="Participez à nos formations Git gratuites et professionnelles, conçues pour tous les niveaux. Apprenez à gérer efficacement votre code avec Git et boostez votre carrière de développeur ou devops."
          />
        </Helmet>

        <main>
          <Section>
            <Container>
              <Hero>
                <Title>Formation Git Gratuite</Title>
                <Subtitle>
                  Formation Git gratuite et professionnelle pour maîtriser la gestion de code, le travail collaboratif et l’intégration continue.
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