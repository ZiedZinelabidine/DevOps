import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getURL } from "../../../../redux/api/uploads/uploadSlice";
import { addDetailsTraining } from "../../../../redux/slice/TrainingCreation/trainingCreationSlice";
import { fileToBase64, s3UrlToFile } from "../../../../utils/fileConvertion";
import GenericInput from "../../../Inputs/GenericInput/GenericInput";
import { StyledLabel } from "../TrainerForm/TraininerForm.style";
import { formConfig } from "./CreateTraining.constants";
import { ContentFormContainer ,DescriptionContentStyle } from "./CreateTraining.style";
import RichTextEditor from "components/RichTextEditor/RichTextEditor";

export default function CreateTraining({ id, onValidate, onCancel, edit }) {
  const {
    watch,
    setValue,
    trigger,
    formState: { errors },
    control,
    getValues,
  } = useFormContext();
  const dispatch = useDispatch();

  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState("");

  const [image, setImage] = useState("");
  

  const handleChangeDes = (value) => {
    setValue(`description`,value) ;
  };

  const handleChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };

  const getUrlData = async () => {

    const fetchUrlData = async (location) => {
      try {
        const result = await dispatch(getURL({ location }));
        return result;
      } catch (error) {
        console.error(`Failed to fetch data from ${location}`, error);
        return null;
      }
    };
    try {
      const urlImage = id
        ? await fetchUrlData(`products/videos_trainings/${id}/image/`)
        : null;
      const urlImagePath = urlImage?.Contents?.[0]?.Key;
      const parts = urlImagePath.split(
        `products/videos_trainings/${id}/image/`
      );
      const name = parts.length > 1 ? parts[1] : "";

      if (urlImagePath) {
        const imageUrltoFile = await s3UrlToFile(
          `${process.env.REACT_APP_S3_URL}/${urlImagePath}`,
          name
        );
        setValue("image", imageUrltoFile.file, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
        setImage(imageUrltoFile.file);
      } else {
        console.error("Image  not found");
      }
    } catch (e) {
      console.error("Image  not found", e);
    }
  };
  const defaultSkillsExternal = getValues(`skills`) || [];
  const defaultSkills = defaultSkillsExternal.map((item, index) => ({
    id: index + 1, // Assign a unique id, starting from 1
    value: item, // The original value
    title: item, // The label as well, set to the same as value
  }));

  useEffect(() => {
    if (edit) {
      getUrlData();
      handleChangeSkills(defaultSkills);
    }
  }, []);

  const handleImageChange = (file) => {
    try {
      if (file instanceof File) {
        setImage(file);
        setValue("image", file, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
        trigger("image");
      } else {
        setImage(null);
        setValue("image", null, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
        trigger("image");
      }
    } catch (error) {
      console.error("Error in handleImageChange:", error);
    }
  };

  const handleChangeSkills = (selectedOptions) => {
    const selectedSkills = Array.isArray(selectedOptions)
      ? selectedOptions
      : [];
    setSkills(selectedSkills);
    setValue("skills", selectedSkills, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleChangeLanguage = (selectedOptions) => {
    setLanguage(selectedOptions.value);
    setValue("language", selectedOptions.value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const validateForm = async () => {
    const currentValues = getValues();

    try {
      if (image instanceof File) {
        setValue("image", image, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
        const imageValid = await trigger("image");
        if (!imageValid) return false;
      } else {
        setValue("image", null, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
        await trigger("image");
        return false;
      }

      const isValid = await trigger(undefined, { shouldFocus: true });

      if (isValid) {
        const formData = {
          title: currentValues.title,
          description: currentValues.description,
          language: currentValues.language,
          skills: currentValues.skills,
          image: image,
        };
        let file = {};
        if (image instanceof File) {
          file.name = image.name;

          formData.image = {
            file: file
          };
        }
        onValidate();
        return true;
      } else {
        const firstErrorField = Object.keys(errors)[0];
        if (firstErrorField) {
          setValue(firstErrorField, getValues(firstErrorField), {
            shouldFocus: true,
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          });
        }
        return false;
      }
    } catch (error) {
      console.error("Validation error:", error);
      return false;
    }
  };

  const getFieldError = (fieldName) => {
    return errors?.[fieldName]?.message || "";
  };

  return (
    <ContentFormContainer>
      <StyledLabel>1. Training title</StyledLabel>
      <GenericInput
        inputObject={formConfig.title}
        onChange={(e) => handleChange("title", e.target.value)}
        disabledForm={false}
        error={getFieldError("title")}
      />

      <StyledLabel>2. Training Description</StyledLabel>
  
       <DescriptionContentStyle> 
          <RichTextEditor
            value={getValues(`description`)}
            onChange={(e) => handleChangeDes(e)}
            height={"400px"}
            width={"100%"}
            marginBottom={"30px"}
            />
        </DescriptionContentStyle>

      <StyledLabel>3. Training Language</StyledLabel>
      <GenericInput
        inputObject={{
          ...formConfig.languages,
          fieldName: "language",
        }}
        onChange={handleChangeLanguage}
        value={getValues(`language`)}
        disabledForm={false}
        error={getFieldError("language")}
      />

      <StyledLabel>4. Training Skills</StyledLabel>
      <GenericInput
        inputObject={formConfig.skills}
        onChange={handleChangeSkills}
        disabledForm={false}
        error={getFieldError("skills")}
        value={watch(`skills`)}
      />
      <div>
        <StyledLabel>5. Training Image</StyledLabel>
        <GenericInput
          inputObject={{
            ...formConfig.image,
            fieldName: "image",
            config: {
              ...formConfig.image.config,
            },
          }}
          onChange={(file) => {
            handleImageChange(file);
          }}
          disabledForm={false}
          value={watch(`image`)}
        />
      </div>

      <div className="d-flex justify-content-end gap-3 mt-4">
        <Button variant="primary" onClick={() => validateForm()}>
          Confirm
        </Button>
      </div>
    </ContentFormContainer>
  );
}
