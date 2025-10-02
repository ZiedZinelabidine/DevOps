import { getObjectTags, getURL } from "../redux/api/uploads/uploadSlice";
const getTagsVideo = async (video) => {
  const tags = await getObjectTags(video);
  return tags;
};
export const getUrlData = async (
  trainingTypeProduct,
  setter,
  id,
  type,
  dispatch,
  video
) => {
  let location = "";
  switch (trainingTypeProduct) {
    case "APPLICATIONS":
      location = "applications";
      break;
    case "VIDEOSTRAINING":
      location = "videos_training";
      break;
    case "SESSIONTRAINING":
      location = "session_training";
      break;
  }
  if (id) {
    const url = await dispatch(
      getURL({ location: `${location}/${id}/${type}` })
    );
    if (!video) {
      setter(`${process.env.REACT_APP_S3_URL}/${url?.Contents[0]?.Key}`);
    } else {
      const videosWithTags = await Promise.all(
        url?.Contents?.map(async (urlItem) => {
          const tags = await getTagsVideo(urlItem.Key);
          return {
            videoUrl: `${urlItem.Key}`,
            tags: tags,
          };
        })
      );
      setter(videosWithTags);
    }
  }
};
export const getUrlDataEntreprise = async (
  item,
  setter,
  id,
  type,
  dispatch,
  video
) => {
  let location = "";
  switch (item.type) {
    case "APPLICATIONS":
      location = "applications";
      break;
    case "VIDEOSTRAINING":
      location = "videos_training";
      break;
    case "SESSIONTRAINING":
      location = "session_training";
      break;
  }
  if (id) {
    const url = await dispatch(
      getURL({ location: `${location}/${id}/${type}` })
    );
    if (!video) {
      url && setter(`${process.env.REACT_APP_S3_URL}/${url?.Contents[0]?.Key}`);
    } else {
      const videosWithTags = await Promise.all(
        url?.Contents?.map(async (urlItem) => {
          const tags = await getTagsVideo(urlItem.Key);
          return {
            videoUrl: `${urlItem.Key}`,
            tags: tags,
          };
        })
      );
      setter(videosWithTags);
    }
  }
};
