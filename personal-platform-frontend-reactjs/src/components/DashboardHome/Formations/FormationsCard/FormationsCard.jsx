import RenderStars from "components/RenderStars/RenderStars";
import { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TrainingRoutes } from "../../../../core/constants/routes.constants";
import useLoggedIn from "../../../../hooks/useLoggedIn";
import { getURL } from "../../../../redux/api/uploads/uploadSlice";
import Register from "../../../Authentification/modals/register";
import { StackStyle } from "../Formations.style";
import {
  CompetenceArea,
  CompetenceLabel,
  CompetenceLabelLanguages,
  HeadingStyle,
  PriceStyle,
  RootStyle,
  StarsLine,
  StyledImage,
  StyleDescription
} from "./FormationsCard.style";

const RightUpArrow = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/arrow-up-right.svg`;

function FormationsCard({
  formation,
  animateDirection,
  category,
  onClick,
  useStaticImage = false,
  formationType,
}) {
  const navigate = useNavigate();
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const isLoggedIn = useLoggedIn();

  const intl = useIntl();
  const {
    id,
    type,
    titleId,
    title,
    descriptionId,
    description,
    rising_star_global,
    languages,
    price,
    userId,
    skills,
    image,
    user,
    details,
    comments
  } = formation;

  const formationTitle = formationType === "HOME_PAGE" && titleId
    ? intl.formatMessage({ id: titleId })
    : title || type;

  const dispatch = useDispatch();
  const [fileName, setFileName] = useState(useStaticImage ? image : null);

  useEffect(() => {
    const getUrl = async (path) => {
      try { 
        let url;
          url = await dispatch(
            getURL({
              location: `${path}`,
            })
          );
        if (url.Contents && url.Contents.length > 0 && url.Contents[0].Key) {
          setFileName(process.env.REACT_APP_URL_BUCKET + url.Contents[0].Key);
        }
      } catch (error) {
        console.error("Error in getUrl:", error);
      }
    };

    let path;
    
    if (type === "MARKETPLACE" || type === "MARKETPLACEPRODUCT") {
      if (formationTitle === "Server Ubuntu" || (formationTitle === "SERVER" && details?.OS === "ubuntu")) {
        path = "products/marketplace/server/ubuntu/";
      } else if (formationTitle === "Server Debian" || (formationTitle === "SERVER" && details?.OS === "debian")) {
        path = "products/marketplace/server/debian/";
      } else if (formationTitle === "Server RedHat" || (formationTitle === "SERVER" && details?.OS === "redhat")) {
        path = "products/marketplace/server/redhat/";
      } else if (formationTitle === "Database Mongodb" || (formationTitle === "DATABASE" && details?.TYPE === "mongodb")) {
        path = "products/marketplace/database/mongodb/";
      } else if (formationTitle === "Database Mysql" || (formationTitle === "DATABASE" && details?.TYPE === "mysql")) {
        path = "products/marketplace/database/mysql/";
      } else if (formationTitle === "Database Postgres" || (formationTitle === "DATABASE" && details?.TYPE === "postgres")) {
        path = "products/marketplace/database/postgres/";
      }
    } 
    getUrl(path);
  }, [useStaticImage, dispatch, formation.id, id, formationTitle, type, formationType]);

  // Shorten formationTitle if longer than 20 characters
  const shortenedTitle = formationTitle ;
  

  const handleCardClick = useCallback(() => {
    if (formationType === "HOME_PAGE") {
      if (formationTitle === "Server Ubuntu" || (formationTitle === "SERVER" && details?.OS === "ubuntu")) {
        navigate(`/marketplaceubuntu`);
      } else if (formationTitle === "Server Debian" || (formationTitle === "SERVER" && details?.OS === "debian")) {
        navigate(`/marketplacedebian`);
      } else if (formationTitle === "Server RedHat" || (formationTitle === "SERVER" && details?.OS === "redhat")) {
        navigate(`/marketplaceredhat`);
      } else if (formationTitle === "Database Mongodb" || (formationTitle === "DATABASE" && details?.TYPE === "mongodb")) {
        navigate(`/marketplacemongodb`);
      } else if (formationTitle === "Database Mysql" || (formationTitle === "DATABASE" && details?.TYPE === "mysql")) {
        navigate(`/marketplacemysql`);
      } else if (formationTitle === "Database Postgres" || (formationTitle === "DATABASE" && details?.TYPE === "postgres")) {
        navigate(`/marketplacepostgres`);
      }
    } else {
      onClick();
    }
  }, [formationType, isLoggedIn, navigate, onClick]);

  const handleModalRegister = useCallback(() => {
    setOpenModalRegister(!openModalRegister);
  }, [openModalRegister]);

  return (
    <>
      <RootStyle animateDirection={animateDirection} onClick={handleCardClick}>
        <div style={{ display: 'flex' }}>
          <StyledImage src={fileName} alt={shortenedTitle} />
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px' }}>
            <HeadingStyle>{shortenedTitle}</HeadingStyle>
            <RenderStars stars={rising_star_global} nbr_comments={50} />
          </div>
        </div>
        <hr style={{ flex: 1, border: 'none', borderTop: '1px solid white', margin: '3px' }} />

  
        <StackStyle spacing={2.3}>
          <StyleDescription>{description}</StyleDescription>
          {type === "MARKETPLACE" ? (
            <StarsLine>
              <PriceStyle>À partir de {"1 EURO"}</PriceStyle>
            </StarsLine>
          ) : type === "MARKETPLACEPRODUCT" ? (
            <StarsLine>
              <RenderStars stars={rising_star_global} nbr_comments={0} />
              <PriceStyle>{price} {"EURO"}</PriceStyle>
            </StarsLine>
          ) : (
            <StarsLine>
              <PriceStyle>À partir de {price} {"EURO"}</PriceStyle>
            </StarsLine>
          )}
        </StackStyle>
      </RootStyle>
  
      <Register
        openModalRegister={openModalRegister}
        setOpenModalRegister={setOpenModalRegister}
        handleModalRegister={handleModalRegister}
        switchBetweenModals={false}
        proxy={"dashboard"}
      />
    </>
  );
}

FormationsCard.defaultProps = {
  useStaticImage: false,
  onClick: () => { },
};

export default FormationsCard;
