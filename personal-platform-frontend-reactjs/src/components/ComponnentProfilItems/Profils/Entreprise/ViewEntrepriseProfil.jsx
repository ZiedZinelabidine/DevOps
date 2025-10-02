import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import RenderStars from "components/RenderStars/RenderStars";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useGetCommentsQuery } from "../../../../redux/api/comments/commentsApi";
import { StyledLoaderContainer } from "../../styeldComponants";
import EditFormEntrepriseProfil from "./EditFormEntrepriseProfil";
import EditImageProfilEntreprise from "./EditImageProfilEntreprise";
import {
  CommentUser,
  CommentedStyle,
  CompetenceArea,
  FullScreenIcon,
  StarContainer,
  StyleWithIcon,
  StyledAboutMeCard,
  StyledAboutMeText,
  StyledAvailableText,
  StyledBlackBackground,
  StyledComments,
  StyledCommentsContainer,
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
  StyledViewEntrepriseProfil,
  StyledWebViewCard,
  TextComment,
  CompetenceLabelLanguages,
  CompetenceAreaSkills,

} from "./styled";
import { MapPin, Pencil } from 'lucide-react'; // Import the MapPin icon from Lucide

const ViewEntrepriseProfil = ({ data, setDataUser, editProfil }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isFullScreenExp, setIsFullScreenExp] = useState(false);
  const [editModalProfilePictureOpen, setEditModalProfilePictureOpen] =
    useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const params = "?CommentedType=ENTREPRISE&commentedId=" + data.id;
  const { data: comments, error, isLoading } = useGetCommentsQuery(params);

  if (!data) {
    return (
      <StyledLoaderContainer>
        <Spinner style={{ width: "100px", height: "100px" }} />
      </StyledLoaderContainer>
    );
  }

  const handleModalOpen = (setOpenFunc) => () => setOpenFunc(true);
  const handleModalClose = (setOpenFunc) => () => setOpenFunc(false);
  const handleSaveChanges = (updatedData) => {
    setDataUser((prevData) => ({ ...prevData, ...updatedData }));
    handleModalClose(setEditModalOpen)();
  };

  const handleSaveChangesProfileImage = (updatedData) => {
    setDataUser((prevData) => ({ ...prevData, ...updatedData }));
    handleModalClose(setEditModalProfilePictureOpen)();
  };

  const showReadMore = data?.entreprise_description?.length > 300;
  return (
    <StyledViewEntrepriseProfil >
      <StyledLeftSideBar isFullScreenExp={isFullScreenExp}>
        <StyledSideBarHeader>
          <StyledBlackBackground />
          <StyledSidebarContent>
            <StyledLeftSideBarImage style={{ position: "absolute" }}>
              <ImageProfilCard
                id={data.id}
                type={"entreprises"}
                typeimg={"profil"}
              />
              {editProfil && (
                <StyledEditImageIcon
                  onClick={handleModalOpen(setEditModalProfilePictureOpen)}
                >
                  <Pencil size={16} color="black" />
                </StyledEditImageIcon>
              )}
            </StyledLeftSideBarImage>
          </StyledSidebarContent>
        </StyledSideBarHeader>

        <StyledLeftSideBarName>
          <StyledLeftSideBarNameStyle>
            {data.username}{" "}
          </StyledLeftSideBarNameStyle>
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
              {data.entreprise_description ? data.entreprise_description : "No description available."}
            </StyledAboutMeText>

          </StyledAboutMeCard>

          <StyledLink
            href={
              data?.website?.startsWith('http://') || data?.website?.startsWith('https://')
                ? data?.website
                : `https://${data?.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="fas fa-globe" style={{ paddingRight: "10px" }}></i>
              {data.website}
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
              onClick={handleModalOpen(setEditModalOpen)}
            >
              Modifier votre profile

            </StyledEditProfileButton>
          )}
        </StyledLeftSideBarContainer>
      </StyledLeftSideBar>


      {editModalOpen && (
        <EditFormEntrepriseProfil
          data={data}
          editModalOpen={editModalOpen}
          onSaveChanges={handleSaveChanges}
          onClose={handleModalClose(setEditModalOpen)}
        />
      )}

      {editModalProfilePictureOpen && (
        <EditImageProfilEntreprise
          data={data}
          editModalProfilePictureOpen={editModalProfilePictureOpen}
          onSaveChanges={handleSaveChangesProfileImage}
          onClose={handleModalClose(setEditModalProfilePictureOpen)}
        />
      )}
    </StyledViewEntrepriseProfil>
  );
};
export default ViewEntrepriseProfil;
