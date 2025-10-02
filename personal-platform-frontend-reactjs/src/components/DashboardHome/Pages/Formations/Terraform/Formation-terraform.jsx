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


export function FormationTerrafom() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showModalRegister, setModalRegister] = useState(false);

  const features = [
    {
      title: "Formation Terraform : Infrastructure-as-Code ",
      icon: <Cloud size={24} />,
      description: "Démarrez votre parcours cloud avec les bases essentielles d'AWS",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-terraform.itgalaxy.io/infrastructure-as-code/index.html"
    },
    {
      title: "Formation Terraform : Architecture Terraform ",
      icon: <GraduationCap size={24} />,
      description: "Maîtrisez les services avancés et les meilleures pratiques AWS",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-terraform.itgalaxy.io/architecture-terraform/index.html"

    },
    {
      title: "Formation Terraform : HelloWorld ",
      icon: <Users size={24} />,
      description: "Solutions personnalisées pour votre organisation",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-terraform.itgalaxy.io/premier-pas-avec-terraform--helloworld/index.html"

    },
    {
        title: "Formation Terraform : Terraform init ",
        icon: <Cloud size={24} />,
        description: "Solutions personnalisées pour votre organisation",
        features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-terraform.itgalaxy.io/premier-pas-avec-terraform--terraform-init/index.html"

      },
      {
        title: " Formation Terraform : terraform.tfstate ",
          icon: <GraduationCap size={24} />,
          description: "Solutions personnalisées pour votre organisation",
          features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-terraform.itgalaxy.io/premier-pas-avec-terraform-terraform-state/index.html"

        },
        {
          title: "Formation Terraform : Notions et définitions",
          icon: <Users size={24} />,
          description: "Solutions personnalisées pour votre organisation",
          features: [
              "Support dédié complet gratuit",
              "Workshops pratiques gratuit"
            ],
            slug: "https://formations-terraform.itgalaxy.io/premier-pas-avec-terraform-notions-et-d%C3%A9finitions/index.html"

      },
        {
            title: "Formation Terraform : Variables et Local-Exec ",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-terraform.itgalaxy.io/premier-pas-avec-terraform-variables-et-local-exec/index.html"

        },
        {
            title: "Formation Terraform : Stockage des variables ",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-terraform.itgalaxy.io/premier-pas-avec-terraform--stockage-des-variables/index.html"

        },
      
        {
            title: "Formation Terraform : 19- Les commandes : Cycle de vie des conteneurs ",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
              "Support dédié complet gratuit",
              "Workshops pratiques gratuit"
            ],
            slug: "https://formations-terraform.itgalaxy.io/les-commandes--cycle-de-vie-des-conteneurs/index.html"
        }
  ];

  const faqs = [
    {
      question: "Quels sont les prérequis pour suivre la formation Terraform ?",
      answer: "Une connaissance de base en administration système, en ligne de commande et en gestion d'infrastructure cloud est recommandée. Avoir déjà utilisé des outils de gestion de configuration est un plus."
    },
    {
      question: "La formation Terraform est-elle certifiante ?",
      answer: "Nous délivrons une attestation de formation validant la maîtrise de Terraform. Pour la certification officielle HashiCorp (Terraform Associate), un examen séparé est nécessaire."
    },
    {
      question: "Comment se déroulent les sessions à distance ?",
      answer: "Les sessions à distance sont interactives, utilisant des outils comme Zoom ou Teams. Vous aurez accès à un environnement pratique Terraform pour réaliser toutes les tâches en direct."
    },
    {
      question: "Y a-t-il un suivi après la formation Terraform ?",
      answer: "Oui, un support est offert pendant 30 jours pour répondre à vos questions et aider à la mise en œuvre dans vos projets."
    },
    {
      question: "Quelle est la durée de la formation Terraform ?",
      answer: "La durée varie entre 2 et 4 jours, selon le niveau avancé et la complexité des modules abordés."
    },
    {
      question: "Comment m'inscrire à la formation Terraform ?",
      answer: "Vous pouvez vous inscrire directement via notre site en choisissant la date qui vous convient et en remplissant le formulaire dédié."
    },
    {
      question: "Les formations Terraform sont-elles en ligne et en présentiel ?",
      answer: "Oui, elles sont proposées en ligne ou en présentiel selon votre préférence et votre localisation."
    },
    {
      question: "Puis-je organiser une session sur-mesure pour mon équipe ?",
      answer: "Absolument, contactez-nous pour une formation adaptée à votre environnement et à vos besoins spécifiques."
    },
    {
      question: "Quel est le nombre de participants par session ?",
      answer: "Nous limitons les groupes à 10-15 personnes pour garantir un accompagnement efficace et personnalisé."
    },
    {
      question: "Quels aspects pratiques sont abordés dans la formation Terraform ?",
      answer: "Déploiement d'infrastructures, gestion des modules, automatisation avec CI/CD, gestion de state, et best practices deployment."
    },
    {
      question: "Quels outils de collaboration utilisez-vous pour les sessions à distance ?",
      answer: "Zoom ou Teams pour la visioconférence, et des environnements cloud partagés pour la pratique en temps réel."
    },
    {
      question: "Quelles compétences vais-je acquérir ?",
      answer: "Maîtrise de l’écriture d’infrastructures en code, gestion du cycle de vie, sécurité, optimisation et pilotage avec Terraform."
    },
    {
      question: "Quelle est votre politique d’annulation ?",
      answer: "Annulation gratuite jusqu’à 7 jours avant la formation. Passé ce délai, la formation reste due ou un avoir peut être proposé."
    },
    {
      question: "Proposez-vous des packages pour les entreprises ?",
      answer: "Oui, nos offres sont modulables selon le nombre de participants et les besoins de votre équipe."
    },
    {
      question: "Quel support est offert durant la formation ?",
      answer: "Nos formateurs accompagnent en direct, répondent aux questions et fournissent des exercices pratiques et supports pédagogiques."
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Carte de crédit, virement bancaire et paiements en ligne sécurisés."
    },
    {
      question: "La formation est-elle adaptée aux débutants ?",
      answer: "Oui, notre formation couvre les bases du provisioning cloud et de Terraform, même pour ceux qui découvrent l’Infrastructure as Code."
    },
    {
      question: "Les contenus sont-ils mis à jour fréquemment ?",
      answer: "Oui, nous actualisons régulièrement le contenu pour refléter la version la plus récente de Terraform et les bonnes pratiques du secteur."
    },
    {
      question: "Que dois-je apporter pour participer ?",
      answer: "Un ordinateur avec accès internet stable, et éventuellement un compte cloud pour pratiquer en ligne."
    },
    {
      question: "La formation Terraform est-elle recommandée pour une reconversion professionnelle ?",
      answer: "Absolument, Terraform est un des outils clés en DevOps et Cloud. Se former à cette technologie ouvre de nombreuses portes dans l’infrastructure moderne."
    },
    {
      question: "Y a-t-il des évaluations ou tests ?",
      answer: "Oui, des exercices pratiques et quiz réguliers permettant d’évaluer votre progression et votre compréhension des concepts abordés."
    },
    {
      question: "Proposez-vous un accès à des ressources après la formation ?",
      answer: "Oui, vous aurez accès à des supports de cours, tutoriels, et enregistrements pour continuer à pratiquer et approfondir vos compétences."
    },
    {
      question: "Comment puis-je me préparer efficacement à la formation Terraform ?",
      answer: "Il est recommandé d’avoir une connaissance de base en Linux, en ligne de commande, et en architecture cloud. Familiarisez-vous avec un fournisseur cloud comme AWS ou Azure si possible."
    },
    {
      question: "Comment les participants évaluent-ils la formation ?",
      answer: "Nous recueillons des retours via des questionnaires à la fin pour améliorer la qualité de nos sessions et mieux répondre aux attentes."
    }
    ]

    const skillsSection = {
      title: "Exploitez vos compétences en Terraform sur ItGalaxy.io",
      subtitle: "Transformez votre expertise en Infrastructure as Code en opportunités professionnelles",
      skills: [
        {
          icon: <Code size={24} />,
          title: "Projets d'Infrastructure",
          description: "Accédez à des projets d'automatisation d'infrastructure, de déploiement cloud et de gestion de ressources à grande échelle."
        },
        {
          icon: <Briefcase size={24} />,
          title: "Opportunités de Carrière",
          description: "Trouvez des postes en DevOps, Cloud Architecture, ou Infrastructure as Code, axés sur Terraform et l'automatisation cloud."
        },
        {
          icon: <Target size={24} />,
          title: "Mentorat & Communauté",
          description: "Partagez votre expertise en accompagnant d'autres professionnels dans leur maîtrise de Terraform et des outils IaC."
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
      <title>Formation Terraform - Devenez Expert en Infrastructure as Code</title>
      <meta
        name="description"
        content="Participez à nos formations Terraform gratuites et professionnelles, conçues pour tous les niveaux. Apprenez à automatiser le déploiement d'infrastructures cloud avec Terraform et propulsez votre carrière DevOps."
      />
    </Helmet>
      <main>
        <Section>
          <Container>
          <Hero>
            <Title>Formation Terraform Gratuite</Title>
            <Subtitle>
              Formation Terraform gratuite et professionnelle pour maîtriser l'Infrastructure as Code et déployer efficacement vos ressources cloud.
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