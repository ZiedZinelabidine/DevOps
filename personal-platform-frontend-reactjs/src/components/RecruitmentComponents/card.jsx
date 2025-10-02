import RenderStars from "components/RenderStars/RenderStars";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getURL } from "../../redux/api/uploads/uploadSlice";
import {
  ButtonCard,
  CardContainer,
  CompetenceArea,
  CompetenceLabel,
  ContentCard,
  FooterCard,
  ImageProfileCard,
  ProfilButton,
  StarContainer,
  StyledAddresseContainer,
  StyledAddresseName,
  StyledCandidateName,
  StyledHorizontalDiv,
  TitleContent,
  CompetenceLabelLanguages
} from "./styled";
import { MapPin } from 'lucide-react'; // Import the MapPin icon from Lucide
const photoavatar = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/photoavatar.png`;

const Card = ({ item, index, handleConnecter, etoile }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  const URL = process.env.REACT_APP_FRONTED_URL;

  const handelShowRecruter = () => {
    window.open(
      `${URL}/freelance?token=${item.display}&type=${item.type}`,
      "_blank"
    );
  };

  const MAX_LENGTH = 15;

  const truncatedTitle =
    item?.job?.length > MAX_LENGTH
      ? `${item.job.slice(0, MAX_LENGTH)}...`
      : item.job;

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
    <CardContainer>
      <ImageProfileCard src={imageUrl} alt="imgprofil" />
      <StyledCandidateName>{item?.name}</StyledCandidateName>
      <StyledHorizontalDiv>
        <StyledAddresseContainer>
        <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}
          <StyledAddresseName>{item?.country_details}</StyledAddresseName>
        </StyledAddresseContainer>
      </StyledHorizontalDiv>
      <ContentCard>
        <TitleContent>
          <b>{truncatedTitle}</b>
        </TitleContent>
        <CompetenceArea>
          {item?.skills?.length > 0 ? (
            item.skills.map((c, index) => (
              <CompetenceLabel key={index}>{c}</CompetenceLabel>
            ))
          ) : (
            <CompetenceLabel></CompetenceLabel>
          )}
        </CompetenceArea>
        <CompetenceArea>
          {item?.languages?.length > 0 ? (
            item.languages.map((c, index) => (
              <CompetenceLabelLanguages key={index}>{c}</CompetenceLabelLanguages>
            ))
          ) : (
            <CompetenceLabelLanguages></CompetenceLabelLanguages>
          )}
        </CompetenceArea>
      </ContentCard>
      <hr style={{ borderTop: "2px solid", opacity: "1" }} />
      <FooterCard>
        <ButtonCard className="btn">
          <ProfilButton className="btn" onClick={handelShowRecruter}>
            See more
          </ProfilButton>
        </ButtonCard>
      </FooterCard>
    </CardContainer>
  );
};

export default Card;
