import RenderStars from "components/RenderStars/RenderStars";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getURL } from "../../../redux/api/uploads/uploadSlice";
import { categoryData } from "data/categoryData";
import {
  ButtonCard,
  CardContainer,
  CompetenceArea,
  CompetenceLabel,
  CompetenceLabelLanguages,
  ContentCard,
  FooterCard,
  ImageProfileCard,
  ProfilButton,
  SpanJour,
  SpanPrice,
  SpanTax,
  StarContainer,
  StyledAddresseContainer,
  StyledAddresseName,
  StyledCandidateName,
  StyledHorizontalDiv,
  TextFooterCard,
  TextFooterFirstBlocCard,
  TitleContent,
  CompetenceAreaS,
  CompetenceAreaL,
  LabelJob,

} from "./styled";
import { useLocation } from "react-router-dom";
import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";

const photoavatar = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/photoavatar.png`;

const Card = ({ item ,handleConnecter , page}) => {

  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  const location = useLocation();

  const getLabelByValue = (value) => {
    const category = categoryData.find(item => item.value === value);
    return category ? category.title : null; // returns null if value not found
  };


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
    <CardContainer fullWidth={page}  onClick={() => {
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
          <StyledCandidateName>

          {item?.name.charAt(0).toUpperCase() + item?.name.slice(1).toLowerCase()}
          </StyledCandidateName>
          <ProfilButton>
          {getLabelByValue(item.job)}
        </ProfilButton>
        </div>
        </div>
        <StarContainer>
          <RenderStars stars={item?.rising_star_global} nbr_comments={item.comments.length} />
        </StarContainer>
      </StyledHorizontalDiv>
      <ContentCard>
      <LabelJob>
        {item?.profile_description?.length > 40 
          ? `${item?.profile_description.substring(0, 130)}...` 
          : item?.profile_description}
      </LabelJob>


        <CompetenceAreaS>
          {item?.skills?.length > 0 ? (
            item?.skills.slice(0, 5).map((c, index) => (
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
