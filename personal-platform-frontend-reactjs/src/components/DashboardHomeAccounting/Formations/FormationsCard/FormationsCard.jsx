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
import { minutesToHours } from "./FormationCard.helpers";
import {
  HeadingStyle,
  ImageBoxStyle,
  RootStyle,
  StyledImage,
  PriceStyle,
  StarsLine,
  CompetenceLabelLanguages,
  CompetenceLabel
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
  } = formation;
  const formationTitle = formationType === "HOME_PAGE" && titleId
    ? intl.formatMessage({ id: titleId })
    : title || type;

  const formationDescription = formationType === "HOME_PAGE" && descriptionId
    ? intl.formatMessage({ id: descriptionId })
    : description || '';

  const dispatch = useDispatch();
  const [fileName, setFileName] = useState(useStaticImage ? image : null);

  useEffect(() => {
    const getUrl = async (path) => {
      try {
        if (formationType === "HOME_PAGE") {
          const imageUrl = `${process.env.REACT_APP_URL_BUCKET}assets/formations/image_formation_${formation.id}.webp`;
          setFileName(imageUrl);
          return;
        }

        let url;
        if (formationTitle === "DATABASE" || formationTitle === "SERVER") {
          url = await dispatch(
            getURL({
              location: `${path}`,
            })
          );
        } else {
          url = await dispatch(
            getURL({
              location: `${path}/${id}/image`,
            })
          );
        }

        if (url.Contents && url.Contents.length > 0 && url.Contents[0].Key) {
          setFileName(process.env.REACT_APP_URL_BUCKET + url.Contents[0].Key);
        }
      } catch (error) {
        console.error("Error in getUrl:", error);
        setFileName("/images/formations/default.png");
      }
    };

    let path;
    if (type === "MARKETPLACE") {
      path = "products/marketplace";
    } else if (type === "APPLICATION") {
      path = "products/applications";
    } else if (formationType === "HOME_PAGE") {
      path = "assets/formations";
    } else if (type === "MARKETPLACEPRODUCT") {
      if (formationTitle === "SERVER" && details.OS === "ubuntu") {
        path = "products/marketplace/server/ubuntu/";
      } else if (formationTitle === "SERVER" && details.OS === "debian") {
        path = "products/marketplace/server/debian/";
      } else if (formationTitle === "SERVER" && details.OS === "redhat") {
        path = "products/marketplace/server/redhat/";
      } else if (formationTitle === "DATABASE" && details.TYPE === "mongodb") {
        path = "products/marketplace/database/mongodb/";
      } else if (formationTitle === "DATABASE" && details.TYPE === "mysql") {
        path = "products/marketplace/database/mysql/";
      } else if (formationTitle === "DATABASE" && details.TYPE === "postgres") {
        path = "products/marketplace/database/postgres/";
      }
    } else if (type === "VIDEOSTRAINING") {
      path = "products/videos_trainings";
    }

    getUrl(path);
  }, [useStaticImage, dispatch, formation.id, id, formationTitle, type, formationType]);
  // Shorten description if longer than 20 characters
  const shortenedDescription = formationDescription
    ? formationDescription.length > 20
      ? `${formationDescription.substring(0, 20)}...`
      : formationDescription
    : '';

  // Shorten formationTitle if longer than 20 characters
  const shortenedTitle = formationTitle
    ? formationTitle.length > 20
      ? `${formationTitle.substring(0, 20)}...`
      : formationTitle
    : '';

  const handleCardClick = useCallback(() => {
    if (formationType === "HOME_PAGE") {
      if (isLoggedIn) {
        navigate(`/${TrainingRoutes.videosTrainings}`);
      } else {
        setOpenModalRegister(true);
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
        <ImageBoxStyle>
          <StyledImage
            src={fileName || "/default.png"}
            alt={shortenedTitle}
            onError={(e) => {
              e.target.src = "/default.png";
            }}
          />
        </ImageBoxStyle>
        <StackStyle spacing={2.3}>
          <StackStyle spacing={1.5}>
            <StackStyle direction={"row"} style={{ justifyContent: "space-between" }}>
              <HeadingStyle>{shortenedTitle}</HeadingStyle>
              <img src={RightUpArrow} alt="right-up-arrow" />
            </StackStyle>
          </StackStyle>
          {type === "MARKETPLACE" ? (
            <>
              <RenderStars stars={5} />
              <PriceStyle>{"As you use"}</PriceStyle>
            </>
          ) : type === "MARKETPLACEPRODUCT" ? (
            <>
              <RenderStars stars={5} />
              <PriceStyle>
                {price} {"EURO"}
              </PriceStyle>
            </>
          ) : (
            <StarsLine>
              <RenderStars stars={rising_star_global} />
              <PriceStyle>
                {price} {"EURO"}
              </PriceStyle>
            </StarsLine>
          )}
          <CompetenceLabel>
            {category?.title
              ? category.title
              : typeof category === 'string'
              ? category
              : Array.isArray(skills) && skills.length > 0
              ? formationType === "HOME_PAGE"
                ? skills[0]
                : (() => {
                    try {
                      const parsedSkill = JSON.parse(skills[0]);
                      return parsedSkill.title;
                    } catch {
                      return skills[0];
                    }
                  })()
              : ''}
          </CompetenceLabel>
          {languages && (
          <CompetenceLabelLanguages>{languages}</CompetenceLabelLanguages>)}
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
