import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getURL } from "../../redux/api/uploads/uploadSlice";
import { ImageProfileCardStyle } from "./ImageProfilCard.style";
const photoavatar = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/photoavatar.png`;

const ImageProfilCard = (props) => {
  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = await dispatch(
          getURL({
            location: `${props?.type}/${props?.id}/profil/img-profil/`,
          })
        );
        if (url.Contents && url.Contents.length > 0 && url.Contents[0].Key) {
          setImageUrl(process.env.REACT_APP_URL_BUCKET + url.Contents[0].Key);
        } else {
          setImageUrl(photoavatar);
        }
      } catch (error) {
        console.error("Error fetching image URL:", error);
        setImageUrl(photoavatar);
      }
    };

    fetchImageUrl();
  }, [dispatch, props.id]);

  return (
    <ImageProfileCardStyle
      src={imageUrl}
      alt="imgprofil"
      type={props.type}
      typeimg={props.typeimg}
    />
  );
};

export default ImageProfilCard;
