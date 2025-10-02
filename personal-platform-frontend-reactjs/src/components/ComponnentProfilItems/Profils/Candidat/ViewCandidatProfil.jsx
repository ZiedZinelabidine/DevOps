import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import RenderStars from "components/RenderStars/RenderStars";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { categoryData } from "data/categoryData";
import { agencyData } from "data/agencyData";
import { StyledLoaderContainer } from "../../styeldComponants";
import EditImageProfilCandidat from "./EditImageProfileCandidat";
import EditFormCandidatProfil from "./EditProfileCandidat";
import { getURL } from "../../../../redux/api/uploads/uploadSlice";
import { useDispatch } from "react-redux";
import EditCVProfileCandidat from "./EditCVProfileCandidat";
import {
  CommentUser,
  CommentedStyle,
  CompetenceArea,
  CompetenceAreaSkills,
  CompetenceLabel,
  CompetenceLabelLanguages,
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
  StyledLeftSideBarName,
  StyledLeftSideBarNameStyle,
  StyledLeftSideBarProfileAvgDay,
  StyledLeftSideBarProfileDesc,
  StyledLeftSideBarUSerOtherInfo,
  StyledPortfolioSectionContainer,
  StyledVoirWebAgency,
  StyledRightSideBarContainer,
  StyledViewCandidatProfil,
  StyledWebViewCardCV,
  StyledWebViewCardExp,
  TextComment,
  TitleProfile,
  TitleProfileCV,
  TitleProfileService,
  StyledLeftSideBarLocationContainer,
  TextFooterFirstBlocCard,
  Buttons,
  Icons
} from "./styled";
import { Pencil,MapPin , Globe} from 'lucide-react'; // Import the Pencil icon from Lucide
import DisplayRawHtml from "components/DisplayRawHtml/DisplayRawHtml";
const LinkedInIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/linkedin-icon-black.webp`;

const ViewCandidatProfil = ({ data, setDataUser, editProfil , defaultcv = true}) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isFullScreenExp, setIsFullScreenExp] = useState(false);
  const [editModalProfileCVOpen, setEditModalProfileCVOpen] = useState(false);
  const [cv, setCv] = useState(defaultcv);
  const [services, setServices] = useState(!defaultcv);
  const [isFullScreenCV, setIsFullScreenCV] = useState(false);
  const [previewCV, setPreviewCV] = useState(null);
  const [loading, setLoading] = useState(true);
  const openEditModalCV = () => setEditModalProfileCVOpen(true);
  const closeEditModalCV = () => setEditModalProfileCVOpen(false);
  const dispatch = useDispatch();

  const jobData = [...categoryData, ...agencyData];

  const [editModalProfilePictureOpen, setEditModalProfilePictureOpen] =
    useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getLabelByValue = (value) => {
    const category = jobData.find(item => item.value === value);
    return category ? category.title : null; // returns null if value not found
  };

  const  handelCV = () => { setCv(true) ;  setServices(false)}
  const  handelServices  = () => { setCv(false) ;  setServices(true) }


  const getUrlData = async () => {
    setLoading(true);
    try {
      const url = await dispatch(
        getURL({ location: `candidats/${data.id}/profil/cv` })
      );

      if (url.Contents && url.Contents.length > 0) {
        const cvKey = url.Contents.map((item) => item.Key)[0];
        setPreviewCV(`${process.env.REACT_APP_S3_URL}/${cvKey}`);
      } else {
        console.error("No CV contents found");
        setPreviewCV(null);
      }
    } catch (error) {
      console.error("Error fetching the CV URL:", error);
      setPreviewCV(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUrlData();
  }, [data.id]); // Added dependency to only run when data.id changes



  if (!data) {
    return (
      <StyledLoaderContainer>
        <Spinner style={{ width: "100px", height: "100px" }} />
      </StyledLoaderContainer>
    );
  }


  const toggleFullScreenExp = () => setIsFullScreenExp((prev) => !prev);
  const toggleFullScreenCV = () => setIsFullScreenCV((prev) => !prev);
  const toggleReadMore = () => setIsExpanded((prev) => !prev);
  const openEditModal = () => setEditModalOpen(true);
  const closeEditModal = () => setEditModalOpen(false);
  const openEditModalImage = () => setEditModalProfilePictureOpen(true);
  const closeEditModalImage = () => setEditModalProfilePictureOpen(false);

  const handleSaveChangesProfileCV = (updatedData) => {
    const newData = { ...data, ...updatedData };
    setDataUser(newData);
    closeEditModalCV();
  };


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

  const handelWebAgency  = () => { 

   if ( data?.linkedin?.startsWith('http://') || data?.linkedin?.startsWith('https://') ) {
     window.location.href = data?.linkedin } else {
     window.location.href=  `https://${data?.linkedin}` }
   };

 
  return (
    <StyledViewCandidatProfil editProfil={editProfil}>
      <StyledLeftSideBar isFullScreenCV={isFullScreenCV} isFullScreenExp={isFullScreenExp}>
          <StyledBlackBackground />
            <StyledLeftSideBarImage editProfil={editProfil}>
              <ImageProfilCard
                id={data.id}
                type={"candidats"}
                typeimg={"profil"}
              />
               {editProfil && (
                <StyledEditImageIcon onClick={openEditModalImage}>
                  <Pencil size={16} color="black" />
                </StyledEditImageIcon>
              )}
           
            </StyledLeftSideBarImage>

        <StyledLeftSideBarAvailable>
          <StyledDot isActive={data.status === "ACTIVE"} />
          <StyledAvailableText>
            {data.status === "ACTIVE" ? "AVAILABLE" : "UNAVAILABLE"}
          </StyledAvailableText>
        </StyledLeftSideBarAvailable>

        <StyledLeftSideBarName>
          <StyledLeftSideBarNameStyle>
            {data?.name.charAt(0).toUpperCase() + data?.name.slice(1).toLowerCase()}
          </StyledLeftSideBarNameStyle>
        </StyledLeftSideBarName>

        <StyledLeftSideBarUSerOtherInfo>
          <StyledLeftSideBarProfileDesc>
            {getLabelByValue(data.job)}
          </StyledLeftSideBarProfileDesc>
          <StyledLeftSideBarLocationContainer>
          <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}
            <StyledLeftSideBarLightParagraph>
              {data.country_details}
            </StyledLeftSideBarLightParagraph>
          </StyledLeftSideBarLocationContainer>

          <TextFooterFirstBlocCard>
              À partir de {data.hourly_rate} euro 
            </TextFooterFirstBlocCard>
          </StyledLeftSideBarUSerOtherInfo>

        <StyledLeftSideBarContainer>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}> 
         {(data.linkedin && data.type_candidat !== 'AGENCY') && (
          <a
            href={
              data?.linkedin?.startsWith('http://') || data?.linkedin?.startsWith('https://')
              ? data?.linkedin
              : `https://${data?.linkedin}`
            }              
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'block', width: '40px', height: '40px' }} // Adjust the size here
          >
            <img 
              style={{ height: '100%', width: '100%', background: 'black' , objectFit: 'contain', transition: 'transform 0.3s', borderRadius: '5px' }} 
              src={LinkedInIcon} 
              alt="LinkedIn" 
            />
          </a>)}

          {(data.linkedin && data.type_candidat === 'AGENCY') && (

            <StyledVoirWebAgency onClick={handelWebAgency}>
                <Globe /> Visit Web Site  
             </StyledVoirWebAgency> )}

         </div> 
          <hr style={{ borderTop: "1px solid", opacity: "1", width: "100%" , color: "gray"}} />

          <CompetenceAreaSkills>
            {data?.skills?.map((c, index) => (
              <CompetenceLabel key={index}>{c}</CompetenceLabel>
            ))}
          </CompetenceAreaSkills>
          <hr style={{ borderTop: "1px solid", opacity: "1", width: "100%" , color: "gray"}} />
          <CompetenceAreaSkills>
            {data?.languages?.map((c, index) => (
              <CompetenceLabelLanguages key={index}>
                {c}
              </CompetenceLabelLanguages>
            ))}
          </CompetenceAreaSkills>

          {editProfil && (
            <StyledEditProfileButton onClick={openEditModal}>
              Modifier votre profile
            </StyledEditProfileButton>
          )}
        </StyledLeftSideBarContainer>
      </StyledLeftSideBar>

      <StyledRightSideBarContainer>
        <StyledAboutMeCard
          isFullScreenCV={isFullScreenCV}
          isFullScreenExp={isFullScreenExp}
        >
          <StyledAboutMeText isExpanded={isExpanded}>
            {data.profile_description ? data.profile_description: "No description available."}
          </StyledAboutMeText>

        </StyledAboutMeCard>

        <StyledPortfolioSectionContainer>
          <StyledWebViewCardCV
            isFullScreenExp={isFullScreenExp}
            editProfil={editProfil}
            className={isFullScreenCV ? "full-screen" : ""}
          >
            <StyleWithIcon>
              <Buttons>
              {!agencyData.some(agency => agency.title === getLabelByValue(data.job)) && (
                  <TitleProfileCV active={cv} onClick={handelCV}>CV</TitleProfileCV>
                )}
              <TitleProfileService active={services} onClick={handelServices} >Services</TitleProfileService>
              </Buttons> 

              <Icons> 
            
              <FullScreenIcon
                className={`fas ${isFullScreenCV ? "fa-compress" : "fa-expand"
                  }`}
                onClick={toggleFullScreenCV}
              />
              </Icons>
            </StyleWithIcon>

            <hr />

            {!cv && services &&
            <div style={{'color' : 'white' }}> 
            <DisplayRawHtml content={ data.services} />
            </div>
            }

            {cv && !services &&
            <> 
            <iframe
              src={previewCV} // Fallback in case previewCV is null
              width="100%"
              height="100%" // Adjust height as needed
              title="CV Preview"
              style={{ border: "none", padding: 0, margin: 0 }}
            />
            {editProfil && (
            <StyledEditProfileButton onClick={openEditModalCV}>
              Modifier votre CV
            </StyledEditProfileButton> )}
            </>      
            }      
          </StyledWebViewCardCV>

          <StyledWebViewCardExp
            isFullScreenCV={isFullScreenCV}
            editProfil={editProfil}
            className={isFullScreenExp ? "full-screen" : ""}
          >
            <StyleWithIcon>
              <TitleProfile>Avis</TitleProfile>
              <FullScreenIcon
                className={`fas ${isFullScreenExp ? "fa-compress" : "fa-expand"
                  }`}
                onClick={toggleFullScreenExp}
              />
            </StyleWithIcon>
            <hr />

            <CompetenceArea>
              <StyledCommentsContainer>
                {data?.comments?.map((c) => (
                  <StyledComments key={c.id}>
                    <CommentedStyle>
                      {/* Add profile image for the commented user if needed */}
                      <CommentUser>{c.commentedUserName}</CommentUser>
                    </CommentedStyle>
                    <TextComment>{c.comment_text}</TextComment>
                    <StarContainer>
                      <RenderStars stars={c.stars} nbr_comments={1} />
                    </StarContainer>
                  </StyledComments>
                ))}
              </StyledCommentsContainer>
            </CompetenceArea>
          </StyledWebViewCardExp>
        </StyledPortfolioSectionContainer>
      </StyledRightSideBarContainer>

      {editModalOpen && (
        <EditFormCandidatProfil
          data={data}
          editModalOpen={editModalOpen}
          onSaveChanges={handleSaveChanges}
          onClose={closeEditModal}
        />
      )}

      {editModalProfilePictureOpen && (
        <EditImageProfilCandidat
          data={data}
          editModalProfilePictureOpen={editModalProfilePictureOpen}
          onSaveChanges={handleSaveChangesProfileImage}
          onClose={closeEditModalImage}
        />
      )}
       {editModalProfileCVOpen && (
        <EditCVProfileCandidat
          data={data}
          editModalProfileCVOpen={editModalProfileCVOpen}
          onSaveChanges={handleSaveChangesProfileCV}
          onClose={closeEditModalCV}
        />
      )}

    </StyledViewCandidatProfil>
  );
};

export default ViewCandidatProfil;
