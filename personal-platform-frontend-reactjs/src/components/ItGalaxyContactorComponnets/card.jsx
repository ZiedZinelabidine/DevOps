import RenderStars from "components/RenderStars/RenderStars";
import { useEffect, useState } from "react";
import { categoryData } from "data/categoryData";
import { useDispatch } from "react-redux";
import { getURL } from "../../redux/api/uploads/uploadSlice";
import {
  CardContainer,
  CompetenceLabel,
  CompetenceLabelLanguages,
  ContentCard,
  ProfilButton,
  StarContainer,
  StyledCandidateName,
  StyledHorizontalDiv,
  TextFooterFirstBlocCard,
} from "../ComponnentProfilItems/profilfreelances/styled";
import { MapPin } from 'lucide-react'; // Import the MapPin icon from Lucide
import { CompetenceAreaL, CompetenceAreaS, LabelJob } from "components/ComponnentProfilItems/profilfreelances/styled";
import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
const photoavatar = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/photoavatar.png`;

const Card = ({ item, index, handleConnecter, etoile }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);

    const getLabelByValue = (value) => {
      const category = categoryData.find(item => item.value === value);
      return category ? category.title : null; // returns null if value not found
    };
  
  

  const handleConnecterWithImage = () => {
    handleConnecter({ ...item, imgprofil: imageUrl });
  };

  const MAX_LENGTH = 15;
  const DESCRIPTION_MAX_LENGTH = 50; // Set max length for description

  const truncatedTitle =
    item?.job?.length > MAX_LENGTH
      ? `${item.job.slice(0, MAX_LENGTH)}...`
      : item.job;

  const truncatedDescription =
    item?.description?.length > DESCRIPTION_MAX_LENGTH
      ? `${item.description.slice(0, DESCRIPTION_MAX_LENGTH)}...`
      : item.description; // Truncate description if longer than max length

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = await dispatch(
          getURL({
            location: `candidats/${item?.id}/profil/img-profil/`,
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
  }, [item, dispatch]);

  return (
    <CardContainer   onClick={() => {
      handleConnecter(item);
    }}>
      <StyledHorizontalDiv>
        <div style={{ display: 'flex', alignItems: 'center' }}> {/* Grouping for right-side items */}
          <ImageProfilCard
            type={"candidats"}
            id={item.id}
            typeimg={"composeteam"}
          />
          <div>
          <StyledCandidateName>{item?.name}</StyledCandidateName>
          <ProfilButton>
          {getLabelByValue(item.job)}
        </ProfilButton>
        </div>
        </div>
        <StarContainer>
          <RenderStars stars={item?.rising_star_global} nbr_comments={0} />
        </StarContainer>
      </StyledHorizontalDiv>
      <ContentCard>
        <LabelJob>
          {item.profile_description}
        </LabelJob>

        <CompetenceAreaS>
          {item?.skills?.length > 0 ? (
            item.skills.slice(0, 5).map((c, index) => (
              <CompetenceLabel key={index}>{c}</CompetenceLabel>
            ))
          ) : (
            <CompetenceLabel></CompetenceLabel>
          )}
        </CompetenceAreaS>

        <CompetenceAreaL>
          {item?.languages?.map((c, index) => (
            <CompetenceLabelLanguages key={index}>
              {c}
            </CompetenceLabelLanguages>
          ))}
        </CompetenceAreaL>

      </ContentCard>
      <hr />
        <TextFooterFirstBlocCard>
            À partir de {item?.hourly_rate} euro 
        </TextFooterFirstBlocCard>
    </CardContainer>
  );
};

export default Card;
