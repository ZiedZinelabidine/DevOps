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


export function FormationAWS() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showModalRegister, setModalRegister] = useState(false);

  const features = [
    {
      title: "AWS Service : IAM",
      icon: <Cloud size={24} />,
      description: "Démarrez votre parcours cloud avec les bases essentielles d'AWS",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-aws.itgalaxy.io/iam/index.html"
    },
    {
      title: "AWS Service : EC2",
      icon: <GraduationCap size={24} />,
      description: "Maîtrisez les services avancés et les meilleures pratiques AWS",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-aws.itgalaxy.io/ec2/index.html"

    },
    {
      title: "AWS Service : S3",
      icon: <Users size={24} />,
      description: "Solutions personnalisées pour votre organisation",
      features: [
        "Support dédié complet gratuit",
        "Workshops pratiques gratuit"
      ],
      slug: "https://formations-aws.itgalaxy.io/s3/index.html"

    },
    {
        title: "AWS Service : VPC",
        icon: <Cloud size={24} />,
        description: "Solutions personnalisées pour votre organisation",
        features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-aws.itgalaxy.io/vpc/index.html"

      },
      {
        title: "AWS Service : RDS",
          icon: <GraduationCap size={24} />,
          description: "Solutions personnalisées pour votre organisation",
          features: [
            "Support dédié complet gratuit",
            "Workshops pratiques gratuit"
          ],
          slug: "https://formations-aws.itgalaxy.io/rds/index.html"

        },
        {
            title: "AWS Service : LoadBalancer",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-aws.itgalaxy.io/loadbalancer/index.html"

        },
        {
            title: "AWS Service : Lambda",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-aws.itgalaxy.io/lambda/index.html"

        },
        {
            title: "AWS Service : CloudWatch",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
                "Support dédié complet gratuit",
                "Workshops pratiques gratuit"
              ],
              slug: "https://formations-aws.itgalaxy.io/cloudwatch/index.html"

        },
        {
            title: "AWS Service : SQS",
            icon: <Users size={24} />,
            description: "Solutions personnalisées pour votre organisation",
            features: [
              "Support dédié complet gratuit",
              "Workshops pratiques gratuit"
            ],
            slug: "https://formations-aws.itgalaxy.io/sqs/index.html"
        }
  ];


  const faqs = [
    {
        question: "Quels sont les prérequis pour suivre la formation ?",
        answer: "Une connaissance de base en informatique est recommandée. Pour les formations avancées, une expérience avec les concepts cloud est un plus."
    },
    {
        question: "La formation est-elle certifiante ?",
        answer: "Oui, nos formations préparent aux certifications AWS officielles. Le coût de l'examen n'est pas inclus dans le prix de la formation."
    },
    {
        question: "Comment se déroulent les sessions à distance ?",
        answer: "Les sessions à distance sont interactives avec des outils de collaboration en ligne. Vous aurez accès à un environnement AWS personnel."
    },
    {
        question: "Y a-t-il un suivi après la formation ?",
        answer: "Oui, nous proposons un support post-formation de 30 jours incluant des sessions de questions-réponses avec nos formateurs."
    },
    {
        question: "Quelle est la durée de la formation AWS ?",
        answer: "La durée varie selon le programme choisi, généralement entre 2 jours à une semaine pour les formations complètes."
    },
    {
        question: "Comment s'inscrire à la formation ?",
        answer: "Vous pouvez vous inscrire directement sur notre site web en sélectionnant la formation souhaitée et en remplissant le formulaire d'inscription."
    },
    {
        question: "Offrez-vous des formations en ligne et sur site ?",
        answer: "Oui, nous proposons des formations à distance et sur site, en fonction de vos préférences."
    },
    {
        question: "Puis-je demander des dates de formation personnalisées ?",
        answer: "Oui, vous pouvez nous contacter pour organiser des sessions de formation qui correspondent à votre calendrier."
    },
    {
        question: "Combien de participants sont acceptés par session ?",
        answer: "Nous limitons le nombre de participants pour garantir une attention personnalisée, généralement entre 10 et 20 personnes par session."
    },
    {
        question: "Quels types d'activités pratiques sont inclus dans la formation ?",
        answer: "Nos formations incluent des exercices pratiques, des études de cas et des projets à réaliser dans un environnement AWS réel."
    },
    {
        question: "Quels outils de collaboration utilisez-vous pour les sessions à distance ?",
        answer: "Nous utilisons des outils comme Zoom pour les visioconférences et Miro ou Google Docs pour la collaboration interactive."
    },
    {
        question: "Quelles sont les compétences acquises à l'issue de la formation ?",
        answer: "Les participants acquièrent des compétences pratiques en gestion des services AWS, sécurité cloud, déploiement d'applications et optimisation des coûts."
    },
    {
        question: "Quelle est la politique d'annulation de la formation ?",
        answer: "Les annulations sont acceptées jusqu'à 10 jours avant le début de la formation. Passé ce délai, la formation reste due dans son intégralité."
    },
    {
        question: "Proposez-vous des packages de formation pour les entreprises ?",
        answer: "Oui, nous offrons des packages sur mesure pour les entreprises, adaptés aux besoins spécifiques de chaque groupe."
    },
    {
        question: "Quel type de support technique est fourni pendant la formation ?",
        answer: "Nos formateurs sont disponibles pour répondre aux questions en temps réel pendant les sessions et fournir des éclaircissements sur les exercices."
    },
    {
        question: "Quelles méthodes de paiement acceptez-vous ?",
        answer: "Nous acceptons les paiements par carte de crédit, virement bancaire et d'autres moyens de paiement en ligne sécurisés."
    },
    {
        question: "Les formations sont-elles accessibles aux débutants ?",
        answer: "Oui, nos formations sont conçues pour accueillir les débutants tout en offrant des contenus plus avancés pour les utilisateurs expérimentés."
    },
    {
        question: "Est-ce que les formations sont mises à jour ?",
        answer: "Oui, notre contenu de formation est régulièrement mis à jour pour refléter les dernières avancées et meilleures pratiques d'AWS."
    },
    {
        question: "Que dois-je apporter à la formation ?",
        answer: "Pour les sessions en ligne, assurez-vous d'avoir un ordinateur avec une connexion Internet stable et une webcam. Pour les sessions en personne, apportez votre ordinateur portable si possible."
    },
    {
        question: "Les formations conviennent-elles aux professionnels en reconversion ?",
        answer: "Oui, nos formations sont idéales pour les professionnels en reconversion cherchant à se spécialiser dans le cloud computing et les services AWS."
    },    {
        question: "Y a-t-il des évaluations pendant la formation ?",
        answer: "Oui, des évaluations sont proposées à intervalles réguliers pour vérifier la compréhension et les compétences acquises au fil de la formation."
    },
    {
        question: "Proposez-vous un accès à des ressources après la formation ?",
        answer: "Oui, les participants ont accès à des ressources, à la documentation et à des enregistrements des sessions pendant une période déterminée après la formation."
    },
    {
        question: "Comment préparer ma participation à la formation ?",
        answer: "Il est conseillé de revoir les concepts de base en informatique et cloud, et d'installer un compte AWS pour explorer les services en amont de la formation."
    },
    {
        question: "Comment les formations sont-elles évaluées par les participants ?",
        answer: "À la fin de chaque formation, nous demandons aux participants de remplir un questionnaire d'évaluation pour recueillir des retours et améliorer nos offres."
    },
    {
        question: "Quel est le format de la formation (théorique vs pratique) ?",
        answer: "Nos formations sont principalement pratiques, combinant théorie et exercices applicatifs pour une expérience d'apprentissage balance."
    },
    {
        question: "Est-il possible de suivre plusieurs formations à la suite ?",
        answer: "Oui, nos parcours de formation sont conçus pour permettre aux participants de suivre plusieurs formations consécutivement ou dans un ordre qui présente un intérêt."
    }
];

  const skillsSection = {
    title: "Exploitez vos compétences sur ItGalaxy.io",
    subtitle: "Transformez votre expertise AWS en opportunités professionnelles",
    skills: [
      {
        icon: <Code size={24} />,
        title: "Projets Freelance",
        description: "Accédez à des projets cloud passionnants et travaillez avec des entreprises innovantes"
      },
      {
        icon: <Briefcase size={24} />,
        title: "Opportunités de Carrière",
        description: "Trouvez des postes AWS attractifs auprès d'entreprises recherchant des experts cloud"
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
    <title>Formation AWS - Devenez Expert en Cloud Computing</title>
    <meta name="description" content="Participez à nos formations AWS gratuites et professionnelles, conçues pour tous les niveaux. Apprenez à maîtriser les services cloud d'AWS et boostez votre carrière dans le domaine du cloud computing." />
    </Helmet>

      <main>
        <Section>
          <Container>
            <Hero>
              <Title>Formation AWS gratuite </Title>
              <Subtitle>
                Formation AWS gratuite professionnelles pour maîtriser le cloud computing et obtenir vos certifications AWS
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