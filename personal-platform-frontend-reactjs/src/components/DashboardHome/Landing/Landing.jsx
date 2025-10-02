import { FileEdit, Search, ShoppingBag, CloudLightning, GlobeLock, UserRoundSearch } from 'lucide-react';
import styled from 'styled-components';
import {
  ContainerStyle,
  IconStyle,
  ImageStyle,
  RootStyle,
  StackStyle
} from "./Landing.style";

const gradientIcon = `https://staging.cdn.itgalaxy.io/assets/IconITgalaxy/gradient-glass.webp`;
const image = `https://staging.cdn.itgalaxy.io/assets/IconITgalaxy/portrait-confident-bearded.png`;

function Landing() {
  const isMobile = window.innerWidth <= 768;

  const Section = styled.section`
    max-width: 1200px;
    width: 100%;
    position: relative;
    z-index: 2;
    margin-bottom: 4rem;
    
    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  `;

  const FeatureDescription = styled.h2`
    color:rgb(152, 162, 177);
    line-height: 1.6;
    font-size: 1.125rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `;

  const TextFormulaire = styled.div`
    background: linear-gradient(90deg, #60a5fa, #a855f7, #60a5fa);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  `;

  const ClientJourneySection = styled(Section)`
    border-radius: 2rem;
    padding: 2rem;
    
    @media (max-width: 768px) {
      padding: 1rem;
      border-radius: 1rem;
    }
  `;

  const JourneySteps = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      gap: 1rem;
    }
  `;

  const StepCard = styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    background-color: #111827;
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }
  `;

  const StepIconWrapper = styled.div`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 16px;
    background: linear-gradient(135deg, #60a5fa, #a855f7);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 16px rgba(96, 165, 250, 0.15);
    
    @media (max-width: 768px) {
      width: 48px;
      height: 48px;
      border-radius: 12px;
    }
  `;

  const StepContent = styled.div`
    flex: 1;
    
    @media (max-width: 768px) {
      text-align: center;
    }
  `;

  const StepNumber = styled.span`
    font-size: 0.875rem;
    color: #60a5fa;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    display: block;
    
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  `;

  const StepTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #d1d5db;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  `;

  return (
    <RootStyle>
      <ContainerStyle>
        <StackStyle>
          <ClientJourneySection>
            <JourneySteps>
              <StepCard>
                <StepIconWrapper>
                  <FileEdit size={isMobile ? 24 : 32} color="#ffffff" />
                </StepIconWrapper>
                <StepContent>
                  <StepNumber>Entreprises, Prestataires et Recruteurs</StepNumber>
                  <StepTitle>Mise en relation</StepTitle>
                  <FeatureDescription>
                    Partagez les informations sur votre projet, vos besoins et votre budget avec notre communauté d'indépendants, ou sélectionnez directement un developpeur freelance avec lesquels collaborer ou recruter un freelance au sein de votre équipe.
                  </FeatureDescription>
                </StepContent>
              </StepCard>

              <StepCard>
                <StepIconWrapper>
                  <Search size={isMobile ? 24 : 32} color="#ffffff" />
                </StepIconWrapper>
                <StepContent>
                  <StepNumber>Freelances, Agences</StepNumber>
                  <StepTitle>Décrochez facilement un projet à court terme ou missions freelance informatique gratuitement</StepTitle>
                  <FeatureDescription>
                    Découvrez les projets et les missions freelance informatique partagées par nos clients avec zéro commission.
                  </FeatureDescription>
                </StepContent>
              </StepCard>

              <StepCard>
                <StepIconWrapper>
                  <ShoppingBag size={isMobile ? 24 : 32} color="#ffffff" />
                </StepIconWrapper>
                <StepContent>
                  <StepNumber>Chat, outils de payment et facturation</StepNumber>
                  <StepTitle>Gestion de projet</StepTitle>
                  <FeatureDescription>
                    Des channels de communication et des outils de gestion de projet fluides pour garantir des résultats réussis.
                  </FeatureDescription>
                </StepContent>
              </StepCard>

              <StepCard>
                <StepIconWrapper>
                  <CloudLightning size={isMobile ? 24 : 32} color="#ffffff" />
                </StepIconWrapper>
                <StepContent>
                  <StepNumber>Entreprises, Prestataires</StepNumber>
                  <StepTitle>MarketPlace As Service</StepTitle>
                  <FeatureDescription>
                    Notre plateforme vous offre la possibilité de définir un produit personnalisé tel que des serveurs avec des systèmes d'exploitation spécifiques, des bases de données avec des sauvegardes, des clusters Kubernetes, AWS ECS, etc. Pour commencer, découvrez nos <a href={`${process.env.REACT_APP_FRONTED_URL}/svc/infra-as-service`} style={{ color: '#6366f1', textDecoration: 'underline' }}>Marketplace as Service</a>, décrivez vos besoins, et nous vous proposerons des solutions optimisées et sur mesure en FinOps, sans que vous ayez à intervenir davantage.
                  </FeatureDescription>
                </StepContent>
              </StepCard>

              <StepCard>
                <StepIconWrapper>
                  <UserRoundSearch size={isMobile ? 24 : 32} color="#ffffff" />
                </StepIconWrapper>
                <StepContent>
                  <StepNumber>Recruteurs, Entreprises, Freelances</StepNumber>
                  <StepTitle>Contactors</StepTitle>
                  <FeatureDescription>
                    Le service Contactors vous permet de contacter tous les webmaster freelances de notre communauté et de leur proposer des contrats indépendant sans frais.
                  </FeatureDescription>
                </StepContent>
              </StepCard>
            </JourneySteps>
          </ClientJourneySection>
        </StackStyle>
        <ImageStyle
          src={image}
          isMobile={isMobile}
          alt="Confident individual"
        />
        <IconStyle>
          <img
            src={gradientIcon}
            width={isMobile ? "220" : "439"}
            height={isMobile ? "178" : "356"}
            alt="Gradient decorative element"
          />
        </IconStyle>
      </ContainerStyle>
    </RootStyle>
  );
}

export default Landing;