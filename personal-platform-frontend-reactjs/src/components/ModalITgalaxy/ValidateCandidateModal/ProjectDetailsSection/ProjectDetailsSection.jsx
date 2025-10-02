import {
  StyledHorizontalLine,
  StyledPriceCard,
  StyledPriceText,
  StyledProjectDescriptionContainer,
  StyledProjectDetailsSectionContainer,
  StyledSubTitle,
} from "./ProjectDetailsSection.style";

const ProjectDetailsSection = ({ proposalsEntrepriseData, projectData }) => {
  return (
    <StyledProjectDetailsSectionContainer>
      <StyledProjectDescriptionContainer>
        <h3>{projectData.title ?? "--"}</h3>
        <StyledPriceCard>
          <StyledPriceText>
            {proposalsEntrepriseData.price ?? "--"}{" "}
            {proposalsEntrepriseData.currency ?? "EUR"}
          </StyledPriceText>
        </StyledPriceCard>
      </StyledProjectDescriptionContainer>
      <StyledHorizontalLine />
      <StyledSubTitle>{projectData.project_description ?? "--"}</StyledSubTitle>
    </StyledProjectDetailsSectionContainer>
  );
};

export default ProjectDetailsSection;
