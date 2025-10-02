import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getURL } from "../../../../redux/api/uploads/uploadSlice";
import { StyledLoaderContainer } from "../../styeldComponants";
import EditCVProfileRecruter from "./EditCVProfileRecruter";
import EditImageProfilRecruter from "./EditImageProfileRecruter";
import EditFormRecruterProfil from "./EditProfileRecruter";
import {
  CompetenceAreaSkills,
  CompetenceLabelLanguages,
  FullScreenIcon,
  StyleWithIcon,
  StyledAboutMeCard,
  StyledAboutMeText,
  StyledAvailableText,
  StyledBlackBackground,
  StyledDot,
  StyledEditImageIcon,
  StyledEditProfileButton,
  StyledLeftSideBar,
  StyledLeftSideBarAvailable,
  StyledLeftSideBarContainer,
  StyledLeftSideBarImage,
  StyledLeftSideBarLightParagraph,
  StyledLeftSideBarLocationContainer,
  StyledLeftSideBarName,
  StyledLeftSideBarNameStyle,
  StyledLeftSideBarUSerOtherInfo,
  StyledLink,
  StyledPortfolioSectionContainer,
  StyledReadMoreButton,
  StyledRightSideBarContainer,
  StyledSideBarHeader,
  StyledSidebarContent,
  StyledViewRecruterProfil,
  StyledWebViewCard,
} from "./styled";
import { MapPin , Pencil } from 'lucide-react'; // Import the MapPin icon from Lucide
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;
const etoile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Star.png`;

const ViewRecruterProfil = ({ data, setDataUser, editProfil }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isFullScreenExp, setIsFullScreenExp] = useState(false);
  const [isFullScreenCV, setIsFullScreenCV] = useState(false);
  const [editModalProfileCVOpen, setEditModalProfileCVOpen] = useState(false);
  const [editModalProfilePictureOpen, setEditModalProfilePictureOpen] =
    useState(false);
  const [previewCV, setPreviewCV] = useState();
  const [isExpanded, setIsExpanded] = useState(false);


  if (!data) {
    return (
      <StyledLoaderContainer>
        <Spinner style={{ width: "100px", height: "100px" }} />
      </StyledLoaderContainer>
    );
  }

  const openEditModal = () => setEditModalOpen(true);
  const closeEditModal = () => setEditModalOpen(false);

  const openEditModalImage = () => setEditModalProfilePictureOpen(true);
  const closeEditModalImage = () => setEditModalProfilePictureOpen(false);

  const closeEditModalCV = () => setEditModalProfileCVOpen(false);

  const handleSaveChanges = (updatedData) => {
    const newData = { ...data, ...updatedData };
    setDataUser(newData);
    closeEditModal();
  };

  const handleSaveChangesProfileImage = (updatedData) => {
    const newData = { ...data, ...updatedData };
    setDataUser(newData);
    closeEditModalImage();
  };

  const handleSaveChangesProfileCV = (updatedData) => {
    const newData = { ...data, ...updatedData };
    setDataUser(newData);
    closeEditModalCV();
  };

  const showReadMore = data?.profile_description?.length > 300;

  return (
    <StyledViewRecruterProfil>
      <StyledLeftSideBar
        isFullScreenCV={isFullScreenCV}
        isFullScreenExp={isFullScreenExp}
      >
        <StyledSideBarHeader>
          <StyledBlackBackground />
          <StyledSidebarContent>
            <StyledLeftSideBarImage style={{ position: "absolute" }}>
              <ImageProfilCard
                id={data.id}
                type={"recruters"}
                typeimg={"profil"}
              />
              {editProfil && (
                <StyledEditImageIcon onClick={openEditModalImage}>
                   <Pencil size={16} color="black" />

                </StyledEditImageIcon>
              )}
            </StyledLeftSideBarImage>
          </StyledSidebarContent>
        </StyledSideBarHeader>

        <StyledLeftSideBarName>
          <StyledLeftSideBarNameStyle>{data.name}</StyledLeftSideBarNameStyle>
        </StyledLeftSideBarName>


        <StyledLeftSideBarUSerOtherInfo>
    
        <StyledLeftSideBarLocationContainer>
              <MapPin color={'gray'}  size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}        
  
              <StyledLeftSideBarLightParagraph>
              {data.country_details}
            </StyledLeftSideBarLightParagraph>
          </StyledLeftSideBarLocationContainer>

        </StyledLeftSideBarUSerOtherInfo>

        <StyledLeftSideBarContainer>
        <StyledAboutMeCard> 
            <StyledAboutMeText isExpanded={isExpanded}>
                     {data.profile_description  ? data.profile_description : "No description available."}
            </StyledAboutMeText>

            </StyledAboutMeCard> 
            
          <StyledLink
            href={
              data?.url?.startsWith('http://') || data?.url?.startsWith('https://')
                ? data?.website
                : `https://${data?.url}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="fas fa-globe" style={{ paddingRight: "10px" }}></i>
              {data.url}
            </span>
            <i className="fas fa-external-link-alt"></i>
          </StyledLink>
          <hr style={{ color: 'gray', borderTop: "1px solid", opacity: "1" , width: "100%" }} />
          <CompetenceAreaSkills>
            {data?.languages?.map((c, index) => (
              <CompetenceLabelLanguages key={index}>
                {c}
              </CompetenceLabelLanguages>
            ))}
          </CompetenceAreaSkills>
        

          {editProfil && (
            <StyledEditProfileButton
              onClick={openEditModal}
            >
               Modifier votre profile

            </StyledEditProfileButton>
          )}
        </StyledLeftSideBarContainer>
      </StyledLeftSideBar>

      {editModalOpen && (
        <EditFormRecruterProfil
          data={data}
          editModalOpen={editModalOpen}
          onSaveChanges={handleSaveChanges}
          onClose={closeEditModal}
        />
      )}

      {editModalProfilePictureOpen && (
        <EditImageProfilRecruter
          data={data}
          editModalProfilePictureOpen={editModalProfilePictureOpen}
          onSaveChanges={handleSaveChangesProfileImage}
          onClose={closeEditModalImage}
        />
      )}

      {editModalProfileCVOpen && (
        <EditCVProfileRecruter
          data={data}
          editModalProfileCVOpen={editModalProfileCVOpen}
          onSaveChanges={handleSaveChangesProfileCV}
          onClose={closeEditModalCV}
        />
      )}
    </StyledViewRecruterProfil>
  );
};

export default ViewRecruterProfil;
