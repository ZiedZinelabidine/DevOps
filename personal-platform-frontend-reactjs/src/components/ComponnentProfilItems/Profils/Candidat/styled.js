import Tab from "react-bootstrap/Tab";
import Select from "react-select";
import styled from "styled-components";

export const StyledSideBarHeader = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledProfilImgCircle = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 149px;
`;

export const StyledProfilImgBack = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export const StyledProfilImgSquare = styled.img`
  width: 100%;
  max-width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 30px;
  position: relative;
`;

export const StyledEditImageIcon = styled.div`
  background-color: #ffffffcc;
  position: absolute; /* For positioning the icon */
  border-radius: 10px;
  margin-top: -18%;
  margin-left: 18%;
  padding: 5px 10px;
  cursor: pointer;
  & .bi-pencil {
    color: #000;
    width: 10px;
    height: 10px !important;
  }
`;

export const TextFooterFirstBlocCard = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 700;
  color: #2684ff;
  font-size: 22px;
  line-height: 21.6px;
  padding-top: 15%;
  display: flex;
  padding-left: 10%;
  
 `;


export const TabWrapper = styled(Tab)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleProfile = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: white;
  width: 80%;
  margin: 0px;
`;

const BaseTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;
  margin: 0;
  background: transparent;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  min-width: 100px;
  max-width: 150px;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const TitleProfileCV = styled(BaseTitle)`
  
  margin-right: 10px;
  &:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }

  ${({ active }) => active && `
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  `}
`;

export const TitleProfileService = styled(BaseTitle)`
  &:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }

  ${({ active }) => active && `
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  `}
`;

export const Buttons = styled.div`
   display: flex;
`;

export const Icons = styled.div`
   display: flex;
`;

export const TabsWrapper = styled.div`
  flex-direction: row;
  width: 100%;
  .tab-content {
    width: 100%;
  }
  li {
    button {
      color: black !important;
      background-color: #fff0 !important;
    }
  }
`;

export const StyledAboutMeCard = styled.div`
  width: 100%;
  display: ${({ isFullScreenExp, isFullScreenCV }) =>
    isFullScreenExp || isFullScreenCV ? "none" : "flex"};
  flex-direction: column;
  padding: 24px;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 5px;
  gap: 6px;
  box-shadow: 5px 5px 0px 0px black;
  background: #111827;
;
  border: 1px solid #6366f1;
  
`;

export const StyledAboutMeText = styled.p`
  font-size: 14px;
  font-weight: 501;
  line-height: 16.8px;
  color: white; /* Example color */
  display: -webkit-box;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "none" : "12")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: ${({ isExpanded }) =>
    isExpanded
      ? "none"
      : "calc(16.8px * 12)"}; /* Adjust line height if necessary */
  margin: 0px;
  transition: max-height 0.3s ease-in-out; /* Add transition for smooth animation */
`;

export const StyledReadMoreButton = styled.button`
  background-color: transparent;
  color: #828f9b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 150px;
  gap: 10px;
`;

export const StyledPortfolioSectionContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  height: 100vh;
  max-height: 100%;
  color: white;
   
`;

export const StyledWebViewCardCV = styled.div`
  width: 60%;
  display: ${({ isFullScreenExp }) =>
    isFullScreenExp  ? "none" : "flex"};
  flex-direction: column;
  padding: 24px;
  border: 1px solid #6366f1;
  border-radius: 10px;
  margin-top: 20px;
  gap: 6px;
  box-shadow: 5px 5px 0px 0px black;
  position: relative; /* For positioning the icon */
  height:'73vh';
  background: #111827;

  &.full-screen {
    min-width: 135%;
    min-height: 100vh;    
  }
`;

export const StyledWebViewCardExp = styled.div`
  width: 40%;
  display: ${({ isFullScreenCV }) =>
    isFullScreenCV ? "none" : "flex"};
  flex-direction: column;
  padding: 24px;
  border: 1px solid #6366f1;
  border-radius: 10px;
  margin-top: 20px;
  gap: 6px;
  box-shadow: 5px 5px 0px 0px black;
  position: relative; /* For positioning the icon */
  height: '73vh' ;
  min-height: 73vh;
  background: #111827;


  &.full-screen {
    min-width: 135%;
    min-height: 100%;
  }
`;

export const StyledWebView = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const StyledSkillsCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 24px;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 20px;
  gap: 6px;
  box-shadow: 5px 5px 0px 0px black;
`;

export const StyledSkillsCardContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StyledSkillsList = styled.div`
  // skills separated by a balck dot
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const StyledSkill = styled.div`
  padding: 5px;
`;

export const StyledlackDotSeparator = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
`;

export const StyledSkillContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledValidateButton = styled.button`
  padding: 4px 12px;
  background-color: #203442;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 15%;
  height: 40px;
  border-radius: 7px;
  text-align: center;
  font-size: 1rem;

  @media (max-width: 1200px) {
    width: 15%;
  }

  @media (max-width: 992px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 40%;
    font-size: 0.9rem;
    padding: 6px 10px;
  }

  @media (max-width: 576px) {
    width: 40%;
    font-size: 0.8rem;
    padding: 8px 8px;
  }
`;

export const StyledSelectContainer = styled.div`
  @media (max-width: 767px) {
    padding-top: 0px;
  }
  @media (max-width: 576px) {
    padding-top: 10px;
  }
`;
export const StyledSelectBudget = styled(Select)`
  .react-select__control {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
  }

  .react-select__menu {
    border-radius: 4px;
  }

  .react-select__option {
    display: flex;
    align-items: center;
  }

  .flag-icon {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .react-select__control {
      font-size: 14px;
      padding: 8px;
    }

    .flag-icon {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 576px) {
    .react-select__control {
      font-size: 12px;
      padding: 6px;
      margin-top: 15px; /* Add margin-top */
    }

    .flag-icon {
      width: 14px;
      height: 14px;
    }
  }
`;

export const StyledViewCandidatProfil = styled.div`
  width:  ${({ editProfil }) =>
    editProfil ? "100%" : "100%"};
  padding-left:  ${({ editProfil }) =>
    editProfil ? "" : "1%"};
  display: flex;
`;

export const StyledLeftSideBar = styled.div`
  width: 40%;
  display: ${({ isFullScreenExp, isFullScreenCV }) =>
    isFullScreenExp || isFullScreenCV ? "none" : "flex"};
  flex-direction: column;
  border: 1px solid #6366f1;
  border-radius: 10px;
  overflow: hidden;
  height: 95vh;
  background: #111827;

`;

export const StyledBlackBackground = styled.div`
  height: 100px; /* Set a fixed height or use max-height */
  width: 100%; /* Ensure it takes full width */
  position: relative; /* For positioning child elements */
  overflow: hidden; /* Prevent the image from overflowing */
  margin-bottom: 10px;
  border: 1px solid #6366f1;
  background-color: black;


`;


export const StyledSidebarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  top: 0;
  left: 0;
`;

export const StyledLeftSideBarImage = styled.div`
  position: absolute; /* For positioning the icon */
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.editProfil ? '27%' : '35%')}; /* Change width based on editProfil prop */
  padding-top: 2%;
`;


export const StyledLeftSideBarName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10%;
`;

export const StyledLeftSideBarAvailable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 15%;
`;

export const StyledLeftSideBarNameStyle = styled.span`
  font-size: 28px;
  font-weight: 600;
  line-height: 33.6px;
  color: white;
`;
export const StyledLeftSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-inline: 25px;
  padding-top: 12%;

`;

export const StyledDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? "green" : "red"}; // Green for active, red for inactive
`;

export const StyledAvailableText = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: white;
  padding-inline: 10px;
`;

export const StyledLeftSideBarUSerOtherInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2%;
  flex-direction: column;
`;

export const StyledLeftSideBarProfileDesc = styled.h4`
  font-size: 19px;
  font-weight: 600;
  line-height: 21.6px;
  color: #828f9b;
  text-transform: capitalize;
`;

export const StyledLeftSideBarLightParagraph = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 16.8px;
  color: #828f9b;
  margin: 0;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const StyledLeftSideBarEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-top: 20px;
`;
export const StyledLeftSideBarTitleStyle = styled.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #7b7a7a;
`;
export const StyledLeftSideBarDataStyle = styled.span`
  color: black;
  font-size: 15px;
  padding-top: 5px;
`;

export const StyledLeftSideBarSkillsContainer = styled.div`
  width: 100px;
  padding-top: 10px;
`;
export const StyledLeftSideBarSkillsDataContainer = styled.span`
  border: 1px solid #9d9d9d;
  border-radius: 20px;
  padding: 5px 10px 5px 10px;
  margin: 5px;
`;
export const StyledLeftSideBarLocationContainer = styled.span`
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
`;

export const StyledLinkButton = styled.button`
  height: 40px;
  padding: 10px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;
`;

export const StyledEditProfileButton = styled.button`
  width: 98%;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #155e75, #6d28d9);
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus {
    outline: none;
 }
    
 &:disabled {
    cursor: not-allowed; // Not-allowed cursor for disabled button
  }
`;


export const StyledVoirWebAgency = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 0.75rem;
  background: black;
  color: white;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus {
    outline: none;
 }
    
 &:disabled {
    cursor: not-allowed; // Not-allowed cursor for disabled button
  }
`;


export const StyledLink = styled.a`
  margin-top: 20px;
  height: 40px;
  padding: 10px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white; /* Bootstrap primary color */
  color: black; /* White text color */
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none; /* Remove underline */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition */

  /* Add hover effect */
  &:hover {
    background-color: #0056b3; /* Darker shade for hover */
    transform: scale(1.02); /* Slight scale effect */
    color: white;
    cursor: pointer;
  }

  /* Add focus effect */
  &:focus {
    outline: none; /* Remove default outline */
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.5); /* Custom focus ring */
    color: black;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    height: 45px; /* Slightly taller on small screens */
  }
`;

export const StyledRightSideBarContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  height: 95vh;
  background: #111827;

`;
export const StayledLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;
export const InputContainer = styled.div`
  /* background-color: pink; */
  margin-bottom: 25px;
`;
export const StyledSubmitEditProfileButton = styled.button`
  padding: 4px 12px;
  margin-top: 5px;

  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 50px;
  border-radius: 7px;
  text-align: center;
  font-size: 1rem;

  &:hover {
    background-color: #6366f1;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 15%;
  }

  @media (max-width: 992px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 40%;
    font-size: 0.9rem;
    padding: 6px 10px;
  }

  @media (max-width: 576px) {
    width: 40%;
    font-size: 0.8rem;
    padding: 8px 8px;
  }
`;

export const StyledLeftSideBarProfileAvgDay = styled.h4`
  font-size: 40px;
  font-weight: 600;
  line-height: 21.6px;
  color: white;
  padding-top: 10%;
  display: flex;
  padding-left: 10%;
  
`;

export const CompetenceArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 5px 0;
  max-height: 93%;
`;

export const CompetenceAreaSkills = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap */
  align-items: flex-start; /* Align items at the start */
  margin-bottom: 1rem; /* Optional: for spacing */
  align-items: center;
  justify-content: center;
`;

export const CompetenceLabel = styled.span`
  padding: 3px;
  background: white;
  color: black;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 501;
  width: auto;
  text-align: center;
  margin: 0 0px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #203442;
  padding-inline: 12px;
`;

export const CompetenceLabelLanguages = styled.span`
  padding: 3px;
  background: black;
  color: white;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 501;
  width: auto;
  text-align: center;
  margin: 0 0px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid gray;
  padding-inline: 12px;
`;


export const FullScreenIcon = styled.i`
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for transform and color */
  margin-left: 30px;
`;

export const StyleWithIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically center them */
  padding-bottom: 4px;
`;

export const StarImg = styled.img`
  width: 16px;
`;

export const StyledReviewNumber = styled.p`
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 18px;
  color: #aab9c5;
  margin: 0;
`;

export const StyledComments = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent; // Since the container has color
  border-bottom: 1px solid #e0e0e0; // Separate comments with a light border
  margin: 5px 0; // Margin between comments

  &:last-child {
    border-bottom: none; // Remove border for the last comment
  }
`;

export const CommentUser = styled.span`
  font-weight: bold;
  color: #333; // Darker color for the username
  margin-left: 10px; // Spacing between image and username
`;

export const TextComment = styled.div`
  font-size: 16px; // Font size adjustment for better readability
  color: black;
  margin: 5px 0; // Add some vertical spacing
`;

export const StyledCommentsContainer = styled.div`
  height: 100%; // Control height of the scrolling area
  overflow-y: auto; // Allow vertical scrolling
  padding: 10px; // Padding for a better look
  border: 1px solid #d1d1d1; // Lighter border
  border-radius: 8px; // Rounded corners
  background-color: gray; // Light background color for contrast
  width: 100%; // Full width of the parent
`;

export const CommentedStyle = styled.div`
  display: flex;
`;

export const StarContainer = styled.div`
  display: flex; // Align stars in a row
  padding-left: 200px;
`;


export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 70rem;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
`;

export const CloseButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5rem;
  width: 100%;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  padding-left: 42%;
  padding-top: 0.75rem ;
  padding-bottom: 0.75rem ;
  background-color: #6366f1;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4f46e5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
