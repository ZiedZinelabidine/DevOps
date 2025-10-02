import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { s3UrlToFile } from "utils/fileConvertion";
import { getURL } from "../../../../redux/api/uploads/uploadSlice";
import GenericInput from "../../../Inputs/GenericInput/GenericInput";
import { formConfig } from "./AddFolderApplication.constants";
import { ContentFormContainer } from "./AddFolderApplication.style";

export default function AddFolderApplication({
  id,
  index,
  edit,
  type,
  inputObject,
  disabled,
  value,
  onChange,
}) {
  const { watch, setValue, formState, trigger } = useFormContext();
  const dispatch = useDispatch();

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
      let urlSupport;
      let urlSupportPath;
      let parts;

      if (type === "VIDEOSTRAINING") {
        urlSupport = id
          ? await fetchUrlData(
              `products/videos_trainings/${id}/chapters/${index + 1}/support/`
            )
          : null;

        urlSupportPath = urlSupport?.Contents?.[0]?.Key;

        parts = urlSupportPath.split(
          `products/videos_trainings/${id}/chapters/${index + 1}/support/`
        );
      } else {
        urlSupport = id
          ? await fetchUrlData(
              `products/applications/${id}/chapters/${index + 1}/support/`
            )
          : null;

        urlSupportPath = urlSupport?.Contents?.[0]?.Key;

        parts = urlSupportPath.split(
          `products/applications/${id}/chapters/${index + 1}/support/`
        );
      }

      const name = parts.length > 1 ? parts[1] : "";

      if (urlSupportPath) {
        const supportUrltoFile = await s3UrlToFile(
          `${process.env.REACT_APP_S3_URL}/${urlSupportPath}`,
          name
        );
        setValue(inputObject.fieldName, supportUrltoFile.file);
      } else {
        console.error("Support  not found");
      }
    } catch (e) {
      console.error("Image  not found", e);
    }
  };

  useEffect(() => {
    if (edit) {
      getUrlData();
    }
  }, []);

  const currentFile = watch(inputObject.fieldName);

  useEffect(() => {
    if (!currentFile) {
      setValue(inputObject.fieldName, null, { shouldValidate: false });
    }
  }, [watch, setValue, inputObject.fieldName, currentFile]);

  const handleFileChange = (file) => {
    try {
      if (file instanceof File) {
        setValue(inputObject.fieldName, file, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
        onChange(file);
      } else {
        setValue(inputObject.fieldName, null, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
        onChange(null);
      }
      trigger(inputObject.fieldName);
    } catch (error) {
      console.error("Error in handleFileChange:", error);
    }
  };

  return (
    <ContentFormContainer>
      <small
        style={{ color: "#6c757d", marginBottom: "10px", display: "block" }}
      >
        Please ensure that your file is in ZIP or PDF format before uploading.
        Maximum file size: 10MB.
      </small>
      <GenericInput
        name={inputObject.fieldName}
        inputObject={{
          ...formConfig.supportCourses,
          accept: "application/zip,application/pdf",
        }}
        onChange={(file) => {
          handleFileChange(file);
        }}
        disabledForm={disabled}
        value={value}
        error={formState?.errors?.[inputObject.fieldName]?.message}
      />
    </ContentFormContainer>
  );
}
