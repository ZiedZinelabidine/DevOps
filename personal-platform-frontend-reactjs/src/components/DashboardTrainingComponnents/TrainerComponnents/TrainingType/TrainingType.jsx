import { Button } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  APPLICATION_ITEMS,
  VIDEO_TRAINING_ITEMS,
} from "../../../../core/constants/trainerForm.constants";
import { addTypeTraining } from "../../../../redux/slice/TrainingCreation/trainingCreationSlice";
import GenericInput from "../../../Inputs/GenericInput/GenericInput";
import { formConfig } from "./TrainingType.constants";
import { ContentFormContainer } from "./TrainingType.style";

const TrainingType = ({ trainingType,setTrainingType, onValidate, onCancel, setItems }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();
  const formMethods = useFormContext({
    mode: "onChange",
    shouldFocusError: true,
  });

  const watchProductType = formMethods.getValues("product_type");

  const handleValidateClick = async () => {
    try {
      const isValid = await trigger("product_type");
      if (isValid) {
        onValidate();
      }
    } catch (error) {
      console.error("Error validating training type:", error);
    }
  };

  const handleChange = (value) => {
      setValue("product_type", value, { shouldValidate: true });
      setTrainingType(value);
    if (value === "VIDEOSTRAINING") {
      setItems(VIDEO_TRAINING_ITEMS);
      dispatch(addTypeTraining("VIDEOSTRAINING"));
    } else if (value === "APPLICATION") {
      setItems(APPLICATION_ITEMS);
      dispatch(addTypeTraining("APPLICATION"));
    }
  };

  return (
    <ContentFormContainer>
      <GenericInput
        inputObject={{
          ...formConfig.product_type,
          fieldName: "product_type",
        }}
        label="Select Training Type"
        defaultValue={watchProductType}
        value={watchProductType}
        onChange={handleChange}
        disabledForm={false}
      />

      <div style={{ float: "right", marginTop: "10%" }}>
        <Button
          variant="primary"
          onClick={handleValidateClick}
          disabled={!watchProductType}
        >
          Confirm
        </Button>
      </div>
    </ContentFormContainer>
  );
};

export default TrainingType;
