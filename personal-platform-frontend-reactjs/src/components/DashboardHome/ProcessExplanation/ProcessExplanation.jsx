import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, GlassEffect, GradientText } from './Style.js';
import Register from "components/Authentification/modals/register";

const ProcessSection = styled.section`
  padding: 4rem 1rem;
  background-color: rgba(17, 24, 39, 0.5);
`;

const ProcessContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const ProcessHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProcessTitle = styled(GradientText)`
  font-size: 2.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProcessDescription = styled.p`
  color: rgb(156, 163, 175);
  max-width: 36rem;
  margin: 0 auto;
`;

const FlowButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const TimelineContainer = styled.div`
  max-width: 64rem;
  margin: 3rem auto;
  position: relative;
  padding: 0 1rem;
`;

const TimelineBranch = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, rgb(59, 130, 246), rgb(168, 85, 247));
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.side === 'left' ? 'flex-end' : 'flex-start'};
  width: 50%;
  margin-left: ${props => props.side === 'right' ? '50%' : '0'};
  padding: ${props => props.side === 'left' ? '0 2rem 0 0' : '0 0 0 2rem'};
  position: relative;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0 0 0 3rem;
    justify-content: flex-start;
  }
`;

const TimelineNode = styled(GlassEffect)`
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 24rem;
  position: relative;
  border: 1px solid rgba(96, 165, 250, 0.2);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(96, 165, 250, 0.5);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.side === 'left' ? 'right: -2.5rem' : 'left: -2.5rem'};
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    left: -1.5rem;
  }
`;

const ExampleBox = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 0.375rem;
  border: 1px dashed rgba(96, 165, 250, 0.3);
`;

const ExampleTitle = styled.div`
  color: rgb(96, 165, 250);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`;

const QualityAssurance = styled(GlassEffect)`
  margin: 4rem auto;
  padding: 2rem;
  border-radius: 0.75rem;
  max-width: 64rem;
  text-align: center;
  border: 1px solid rgba(96, 165, 250, 0.2);
`;

const QualityTitle = styled(GradientText)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const QualityDescription = styled.p`
  color: rgb(156, 163, 175);
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const QualityStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled(GradientText)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: rgb(156, 163, 175);
  font-size: 0.875rem;
`;

const CTACard = styled(GlassEffect)`
  margin-top: 3rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(31, 41, 55, 0.7);
  }
`;

const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CTAText = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const CTATitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: rgb(96, 165, 250);
  margin-bottom: 0.5rem;
`;

const CTADescription = styled.p`
  color: rgb(156, 163, 175);
`;

const ProcessFrame = styled(GlassEffect)`
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.1);
  
  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
`;

const ProcessExplanation = () => {
  const [activeFlow, setActiveFlow] = useState('direct');
  const [openModalRegister, setOpenModalRegister] = useState(false);
  
  const handleModalRegister = () => {
      setOpenModalRegister(true);
    };
  
    const handleCloseModalRegister = () => {
      setOpenModalRegister(false);
    };
  

  const projectSteps = [
    {
      title: "Inscription Entreprise",
      description: "Créez votre compte entreprise",
      example: "✓ Informations entreprise\n✓ Vérification identité\n✓ Validation compte",
      side: 'left'
    },
    {
      title: "Publication du projet",
      description: "Description détaillée du besoin et budget",
      example: "Application mobile de livraison\nBudget: 500-3000€\nDurée: 2 mois",
      side: 'right'
    },
    {
      title: "Propositions",
      description: "Réception des offres des développeurs",
      example: "5 développeurs intéressés\nCompétences: React Native, Node.js\nBudget moyen: 2500€",
      side: 'left'
    },
    {
      title: "Sélection",
      description: "Choix du développeur et discussion",
      example: "Développeur sélectionné: Jean D.\n4 ans d'expérience\nDébut: 15 mars",
      side: 'right'
    },
    {
      title: "Développement",
      description: "Réalisation du projet",
      example: "Sprint 1: Design UI/UX\nSprint 2: Backend API\nSprint 3: Mobile App",
      side: 'left'
    },
    {
      title: "Tests & Validation",
      description: "Phase de tests et validation finale",
      example: "✓ Tests fonctionnels réussis\n✗ Tests de performance échoués\n➜ Remboursement sous 48h\n💡 Protection acheteur garantie",
      side: 'right'
    }
  ];

  const recruitmentSteps = [
    {
      title: "Inscription Recruteur",
      description: "Créez votre compte recruteur",
      example: "✓ Informations société\n✓ Vérification entreprise\n✓ Validation compte RH",
      side: 'left'
    },
    {
      title: "Offre d'emploi",
      description: "Publication du poste et des compétences requises",
      example: "Lead Developer Frontend\nReact, TypeScript, Node.js\n400€/Jour",
      side: 'right'
    },
    {
      title: "Candidatures",
      description: "Réception et analyse des profils",
      example: "12 candidatures reçues\n5 profils retenus\n3 années d'exp. moyenne",
      side: 'left'
    },
    {
      title: "Entretiens",
      description: "Évaluation technique et culturelle",
      example: "Test technique: 2h\nEntretien RH: 1h\nEntretien technique: 1h",
      side: 'right'
    },
    {
      title: "Proposition",
      description: "Négociation et offre d'embauche",
      example: "TJM: 400€\nBonus: 5k€\nDébut: 1er avril",
      side: 'left' 
    }
  ];


  return (
    <ProcessSection>
      <ProcessContainer>
       <ProcessFrame>
        <ProcessHeader>
          <ProcessTitle as="h2">
            Comment ça fonctionne sur ItGalaxy
          </ProcessTitle>
          <ProcessDescription>
            Choisissez le processus qui correspond à vos besoins
          </ProcessDescription>

          <FlowButtons>
            <Button
              variant={activeFlow === 'direct' ? 'primary' : 'glass'}
              onClick={() => setActiveFlow('direct')}
            >
              Projet Ponctuel
            </Button>
            <Button
              variant={activeFlow === 'recruitment' ? 'primary' : 'glass'}
              onClick={() => setActiveFlow('recruitment')}
            >
              Recrutement
            </Button>
          </FlowButtons>
        </ProcessHeader>

        <TimelineContainer>
          <TimelineBranch>
            {(activeFlow === 'direct' ? projectSteps : recruitmentSteps).map((step, index) => (
              <TimelineItem key={index} side={step.side}>
               <TimelineNode style={{ marginBottom: '8px' }}>
                    <div style={{ marginBottom: '8px' }}>
                        <h3 style={{ fontWeight: 'bold', color: '#007BFF' }}>{step.title}</h3>
                    </div>
                    <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>{step.description}</p>
                    <ExampleBox>
                        <ExampleTitle style={{ fontWeight: 'bold' }}>Exemple</ExampleTitle>
                        <div style={{ color: '#D1D5DB', fontSize: '0.75rem', whiteSpace: 'pre-line' }}>
                        {step.example}
                        </div>
                    </ExampleBox>
                    </TimelineNode>
                <StepNumber side={step.side}>
                  {index + 1}
                </StepNumber>
              </TimelineItem>
            ))}
          </TimelineBranch>
        </TimelineContainer>


        <QualityAssurance>
          <QualityTitle>
            Une qualité garantie par notre approche unique
          </QualityTitle>
          <QualityDescription>
            Pour assurer une qualité optimale, chaque développeur ne peut travailler que sur un seul projet à la fois. Cette approche garantit une concentration totale et un engagement maximal pour votre projet.
          </QualityDescription>
          <QualityStats>
            <StatItem>
              <StatValue>100%</StatValue>
              <StatLabel>Focus sur votre projet</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>1</StatValue>
              <StatLabel>Projet par développeur</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>95%</StatValue>
              <StatLabel>Taux de satisfaction client</StatLabel>
            </StatItem>
          </QualityStats>
        </QualityAssurance>

        <CTACard>
          <CTAContent>
            <CTAText>
              <CTATitle>
                Prêt à commencer ?
              </CTATitle>
              <CTADescription>
                {activeFlow === 'direct' 
                  ? "Publiez votre projet et trouvez le développeur idéal"
                  : "Publiez votre offre d'emploi et trouvez les meilleurs talents"}
              </CTADescription>
            </CTAText>
            <Button variant="primary" onClick={handleModalRegister} >
              {activeFlow === 'direct' ? 'Publier un projet' : "Publier une offre d'emploi"}
            </Button>
          </CTAContent>
        </CTACard>
        </ProcessFrame>
      </ProcessContainer>
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={handleCloseModalRegister}
          switchBetweenModals={false}
          proxy={"marketplace"}
        />
      )}
    </ProcessSection>
    
  );
};

export default ProcessExplanation;