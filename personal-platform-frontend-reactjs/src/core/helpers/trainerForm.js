import AddPrice from "components/DashboardTrainingComponnents/TrainerComponnents/AddPrice/AddPrice";
import Content from "components/DashboardTrainingComponnents/TrainerComponnents/Content/Content";
import CreateApplication from "components/DashboardTrainingComponnents/TrainerComponnents/CreateApplication/CreateApplication";
import CreateTraining from "components/DashboardTrainingComponnents/TrainerComponnents/CreateTraining/CreateTraining";
import { InlineBlockContainer } from "components/DashboardTrainingComponnents/TrainerComponnents/TrainerForm/TraininerForm.style";
import TrainerNewPaymentForm from "components/DashboardTrainingComponnents/TrainerComponnents/TrainerNewPaymentForm/TrainerNewPaymentForm";
import TrainingType from "components/DashboardTrainingComponnents/TrainerComponnents/TrainingType/TrainingType";
import { priceShares } from "data/priceShares";
import { FormProvider } from "react-hook-form";

export const renderContentList = ({
  id,
  trainingType,
  setTrainingType,
  selectedElement,
  handleStepValidation,
  handleSubmit,
  setItems,
  formMethods,
  deleteChapter,
  currentChapterIndex,
  handleConfirmChapter,
  navigationHandlers,
  isEdit,
  handleSubmitUpdate,
  loading,
}) => {
  const handleCancel = () => {
    if (selectedElement > 1) handleStepValidation(selectedElement - 1);
  };

  const renderWithFormProvider = (Component) => {
    return <FormProvider {...formMethods}>{Component}</FormProvider>;
  };

  if (trainingType === "VIDEOSTRAINING") {
    switch (selectedElement) {
      case 1:
        return renderWithFormProvider(
          <InlineBlockContainer>
            <CreateTraining
              id={id}
              onValidate={() => handleStepValidation(selectedElement + 1)}
              onCancel={handleCancel}
              edit={isEdit}
            />
          </InlineBlockContainer>
        );
      case 2:
        if (currentChapterIndex === null) return null;
        return renderWithFormProvider(
          <InlineBlockContainer>
            <Content
              id={id}
              onValidate={() => handleStepValidation(selectedElement + 1)}
              onCancel={handleCancel}
              currentChapterIndex={currentChapterIndex}
              onConfirmChapter={handleConfirmChapter}
              onDeleteChapter={deleteChapter}
              edit={isEdit}
            />
          </InlineBlockContainer>
        );

      case 3:
        return renderWithFormProvider(
          <InlineBlockContainer>
            <AddPrice
              id={id}
              edit={isEdit}
              onValidate={() => handleStepValidation(selectedElement + 1)}
              handleSubmitUpdate={handleSubmitUpdate}
              loading={loading}
            />
          </InlineBlockContainer>
        );
      case 4:
        if (isEdit) return null;
        return renderWithFormProvider(
          <TrainerNewPaymentForm
            isEdit={false}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            formMethods={formMethods}
            price={priceShares.product}
            loading={loading}
          />
        );

      default:
        return null;
    }
  } else if (trainingType === "APPLICATION") {
    switch (selectedElement) {
      case 1:
        return renderWithFormProvider(
          <InlineBlockContainer>
            <CreateApplication
              id={id}
              onValidate={() => handleStepValidation(selectedElement + 1)}
              onCancel={handleCancel}
              edit={isEdit}
            />
          </InlineBlockContainer>
        );
      case 2:
        if (currentChapterIndex === null) return null;
        return renderWithFormProvider(
          <InlineBlockContainer>
            <Content
              id={id}
              onValidate={() => handleStepValidation(selectedElement + 1)}
              onCancel={handleCancel}
              currentChapterIndex={currentChapterIndex}
              onConfirmChapter={handleConfirmChapter}
              onDeleteChapter={deleteChapter}
              edit={isEdit}
            />
          </InlineBlockContainer>
        );
      case 3:
        return renderWithFormProvider(
          <InlineBlockContainer>
            <AddPrice
              id={id}
              edit={isEdit}
              onValidate={() => handleStepValidation(selectedElement + 1)}
              handleSubmitUpdate={handleSubmitUpdate}
              loading={loading}
            />
          </InlineBlockContainer>
        );
      case 4:
        if (isEdit) return null;
        return renderWithFormProvider(
          <TrainerNewPaymentForm
            isEdit={false}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            formMethods={formMethods}
            price={priceShares.product}
            loading={loading}
          />
        );
      default:
        return null;
    }
  }

  return null;
};
