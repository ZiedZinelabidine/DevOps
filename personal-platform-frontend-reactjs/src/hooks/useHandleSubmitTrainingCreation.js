import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../core/helpers/storage";
import {
  useAddTrainingMutation,
  useUpdateTrainingMutation,
} from "../redux/api/training/trainingApi";
import { s3Upload } from "../redux/api/uploads/uploadSlice";
import { base64ToFile } from "utils/fileConvertion";

const useHandleSubmitTrainingCreation = (
  selectedElement,
  setSelectedElement,
  setConfirmShow,
  openModalRegister,
  setOpenModalRegister,
  isEdit,
  formMethods
) => {

  const [saveTraining] = useAddTrainingMutation();
  const [updateTraining] = useUpdateTrainingMutation();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const token = getAccessToken();
  const decodeToken = token ? jwtDecode(token) : null;
  const navigate = useNavigate();

  const validateTrainingData = (data) => {
    const errors = [];
    if (!data.title?.trim()) errors.push("Title is required");
    if (!data.type?.trim()) errors.push("Type is required");
    if (!data.description?.trim()) errors.push("Description is required");
    if (!data.languages?.trim()) errors.push("Language is required");

    if (
      typeof data.price !== "number" ||
      isNaN(data.price) ||
      data.price <= 0
    ) {
      errors.push("Price must be a positive number");
    }

    if (!Array.isArray(data.category)) errors.push("Category must be an array");
    if (!Array.isArray(data.skills)) errors.push("Skills must be an array");

    if (typeof data.chapters !== "object" || data.chapters === null) {
      errors.push("Chapters must be an object");
    }

    return errors;
  };

  const handleFileUpload = async (formData, trainingId) => {

    try {
      let basePath;

      if (formData.type === "VIDEOSTRAINING") {
        basePath = `products/videos_trainings/${trainingId}/`;
      } else {
        basePath = `products/applications/${trainingId}/`;
      }
      await dispatch(
        s3Upload({
          file: formData.image,
          type: `image/`,
          location: basePath,
        })
      );

      // Upload chapter files
      if (formData.chapters && Array.isArray(formData.chapters)) {
        for (let i = 0; i < formData.chapters.length; i++) {
          const chapter = formData.chapters[i];
          const chapterNumber = i + 1;

          // Handle single support file
          if (chapter?.supportFile) {
            await dispatch(
              s3Upload({
                file: chapter.supportFile,
                type: `chapters/${chapterNumber}/support/`,
                location: basePath
              })
            );
          }

          // Handle multiple videos per chapter
          if (chapter?.videos && Array.isArray(chapter.videos)) {
            for (let vIndex = 0; vIndex < chapter.videos.length; vIndex++) {
              const video = chapter.videos[vIndex];

              if (video?.videoFile || video?.file) {
                const vFile = video.videoFile || video.file;

                await dispatch(
                  s3Upload({
                    file: await base64ToFile(video.base64URL, vFile.name),
                    type: `chapters/${chapterNumber}/videos/${vIndex + 1}/`,
                    location: basePath,
                    metadata: {
                      title: video.titleVideo || `Video ${vIndex + 1}`,
                    },
                  })
                );
              }
            }
          }
        }
      }

      return formData;
    } catch (error) {
      console.error("Error uploading files:", error);
      throw error;
    }
  };

  const handleSubmit = async (orderID, sharesTotalPrice) => {
    setLoading(true);
    let response;
    let data = formMethods.getValues();

          // Record the start time for the upload
          const startTime = new Date();

    try {
      const formData = {
        userId: decodeToken?.id,
        title: data.title || "",
        type: String(data.product_type),
        description: data.description,
        languages: data.language || "English",
        category: Array.isArray(data.category) ? data.category : [],
        skills: Array.isArray(data.skills)
          ? data.skills.map((skill) => skill.title)
          : [],
        price: data.price ? Number(data.price) : 0,
        repo: data.repo || "",
        chapters: Array.isArray(data.chapters)
          ? data.chapters.reduce((obj, chapter, index) => {
              if (chapter && chapter.chapterTitle) {
                obj[`${index + 1}`] = {
                  title: chapter.chapterTitle,
                  description: chapter.chapterDescription || "",
                };
              }
              return obj;
            }, {})
          : {},
        orderID: orderID,
        sharesTotalPrice: sharesTotalPrice,
      };

      // First create the training to get its ID
      const trainingResponse = await saveTraining(formData).unwrap();

      // Then upload files to S3 using the training ID
      if (trainingResponse?.id) {
        const uploadedFormData = await handleFileUpload(
          {
            type: formData.type,
            image: data.image,
            chapters: data.chapters, // Original chapter files (with videos as array and a single supportFile)
          },
          trainingResponse.id
        );

        // Update formData with new URLs
        formData.type = formData.type;
        formData.image = uploadedFormData.image;
        formData.chapters = uploadedFormData.chapters;
      }

      // Validate the training data after upload
      const validationErrors = validateTrainingData(formData);
      if (validationErrors.length > 0) {
        console.error("Validation errors:", validationErrors);
        return { success: false, error: validationErrors.join(", ") };
      }

      try {
        response = trainingResponse;
        return {
          success: true,
          targetProductType: "TRAINING",
          targetProductId: response.id,
          invoicingDescription: formData.title || "Training Product",
          amount: formData.price,
          paymentRequired: true,
          url: "/producer",
          type: "TRAINING",
        };
      } catch (error) {
        console.error("API Error:", error);
        return {
          success: false,
          targetProductType: "TRAINING",
          targetProductId: 0,
          invoicingDescription: "REFUND : error create training",
          type: "TRAINING",
        };
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      return {
        success: false,
        targetProductType: "TRAINING",
        targetProductId: 0,
        invoicingDescription: "REFUND : error create training",
        type: "TRAINING",
      };
    } finally {
              // Final elapsed time calculation
              const endTime = new Date();
              const totalTime = Math.round((endTime - startTime) / 1000); // Total time in seconds
              console.log(`Total 22 Upload Time: ${totalTime} seconds`);
    }
  };

  const handleSubmitUpdate = async (id) => {
    setLoading(true);
    let response;
    let data = formMethods.getValues();

    const trainingData = {
      userId: decodeToken?.id,
      title: data.title ,
      description: data.description,
      languages: data.language,
      category: Array.isArray(data.category),
      skills: Array.isArray(data.skills)
        ? data.skills.map((skill) => skill.title)
        : [],
      price: data.price,
      repo: data.repo,
      chapters: Array.isArray(data.chapters)
        ? data.chapters.reduce((obj, chapter, index) => {
            if (chapter && chapter.chapterTitle) {
              obj[`${index + 1}`] = {
                title: chapter.chapterTitle,
                description: chapter.chapterDescription
              };
            }
            return obj;
          }, {})
        : {},
    };

    const trainingUpdatedResponse = await updateTraining({
      id,
      trainingData,
    }).unwrap();
    // Then upload files to S3 using the training ID
    if (id) {
      await handleFileUpload(
        {
          type: trainingUpdatedResponse.type,
          image: data.image,
          chapters: data.chapters, // Original chapter files (with videos as array and a single supportFile)
        },
        id
      );

      setLoading(false);
    }
    return {
      success: true,
      display: trainingUpdatedResponse.display,
    };
  };

  return {
    handleSubmit,
    handleSubmitUpdate,
    loading,
  };
};

export default useHandleSubmitTrainingCreation;
