import styled from "styled-components";
import {
  StyledCircle,
  StyledStep,
  StyledStepTitle,
  StyledStepperCard,
  StyledTitleAndSubtitleContainer,
} from "../TraininerForm.style";

export const StepperNavigation = ({
  items,
  isEdit,
  selectedElement,
  currentSubModule,
  subModules,
  onStepClick,
  onAddChapter,
}) => {
  return (
    <StyledStepperCard>
      {items.map((item) => (
        <div key={item.id}>
          <StyledStep
            active={selectedElement === item.id && !currentSubModule}
            checked={
              selectedElement > item.id ||
              (selectedElement === item.id && currentSubModule)
            }
            isEdit={isEdit}
            style={{ cursor: "not-allowed" }}
          >
            <StyledCircle>{item.id}</StyledCircle>
            <StyledTitleAndSubtitleContainer>
              <StyledStepTitle>{item.title}</StyledStepTitle>
            </StyledTitleAndSubtitleContainer>
          </StyledStep>

          {item.id === 2 && (
            <SubModuleContainer>
              {subModules.map((subModule) => (
                <StyledStep
                  key={subModule.id}
                  style={{
                    marginLeft: "20px",
                    cursor: "not-allowed",
                  }}
                  isEdit={isEdit}
                  isSubModule={true}
                >
                  <StyledCircle isSubModule>{subModule.index + 1}</StyledCircle>
                  <StyledTitleAndSubtitleContainer>
                    <StyledStepTitle>{subModule.title}</StyledStepTitle>
                  </StyledTitleAndSubtitleContainer>
                </StyledStep>
              ))}
            </SubModuleContainer>
          )}
        </div>
      ))}
    </StyledStepperCard>
  );
};

const SubModuleContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
