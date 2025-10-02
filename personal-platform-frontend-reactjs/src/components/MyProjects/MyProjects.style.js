import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background: #f1f1fd;
  @media (min-width: 767px) {
    justify-content: space-evenly;
  }
  width: 100%;
  max-width: 100%; /* Prevents any max width constraints */
  padding-left: 20px;
  padding-right: 20px;
`;

export const ListingProjects = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-right: 10px;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5%;
  margin-left: 2%;
  margin-bottom: 1%;
`;
export const ButtonContainer = styled.div`
  display: flex; // Use flex to align buttons horizontally
  gap: 15px; // Adjust gap between buttons as needed
`;

export const ContainerWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 4%;
  padding-right: 4%;
  overflow-y: scroll;
  scrollbar-width: none;
  min-height: 100vh;
  width: 100%;
  background: #202124;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  border-radius: 15px;
  width: 70%;
  height: 50px;
  @media (min-width: 767px) and (max-width: 1023px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export const SearchIconInput = styled.i`
  position: absolute;
  left: 10px;
  top: 50%;
  border: none;
  transform: translateY(-50%);
`;

export const SearchFilter = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 18%;
  display: flex;
`;

export const CardContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  min-height: 707px;

  @media (min-width: 767px) {
    justify-content: flex-start;
  }
`;

export const NotFoundTextStyle = styled.div`
  font-size: 40px;
  font-weight: 501; /* Change if you want to set to normal or bold */
  font-family: serif;
  color: white;
  /* Center text */
  text-align: center;
  margin: 0; /* Reset margins */
  padding: 20px 0; /* Vertical padding to give some space above and below */

  /* Optional styles for full-width centering */
  width: 100%; /* Ensure it takes the full width of the container */
  display: flex; /* Use flexbox for better centering */
  justify-content: center; /* Horizontally center */
`;

export const StyleLineCount = styled.div`
  display: flex;
`;

export const ProjectLabelsContainer = styled.div`
  display: flex;
  gap: 10px; // Space between buttons, adjust as needed
`;

export const ViewLabelProjects = styled.div`
  color: white;
  margin-top: 40px;
  font-family: Inter, sans-serif;
  margin-left: 3%;
  font-size: 30px;
  border-bottom: 1px solid var(--Base-Base-Black, rgba(32, 33, 36, 1));
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const ViewLabelMyProjects = styled.div`
  color: black;
  padding: 24px;
  font-family: Inter, sans-serif;
  height: 70px;
  border-bottom: 3px solid black;
  width: 170px;
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const CardProjects = styled.div`
  box-shadow: 10px 10px 0px 0px #3f464f;
  height: 150px;
  width: 100%;
  border: 1px solid #6366f1;
  border-radius: 4px; /* Rounded corners */
  padding: 16px; /* Inner spacing */
  margin: 16px; /* Outer spacing */
  margin-top: 50px;
  transition: transform 0.3s; /* Smooth transition for hover effect */

  align-items: center; /* Center align items */
  margin: 20px; /* Optional: Outer spacing for the container */

   &:hover {
   cursor: pointer;
  }
   
`;

export const CardProjectsTitle = styled.div`
  color: white;
  font-family: Inter, sans-serif;
  font-weight: 501;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DatePost = styled.div`
  color: #c8c8c8;
  font-family: Inter, sans-serif;
  font-weight: 501;
  padding-top: 30px;
  margin-bottom: 20px;
`;

export const StyleAllProjects = styled.div``;

export const AllCard = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;

 
`;

export const AddNewProjectButtonstyle = styled.button`
  margin-right: 30px;
  background-color: green;
  border: green;
  height: 44px;
  margin-left: 10px;
  margin-top: 2px;
  width: 250px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;
`;

export const DashProposals = styled.button`
  background-color: black;
  height: 40px;
  margin-top: 2px;
  width: 250px;
  border-radius: 10px;
  border: 1px solid black;
  color: white;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background-color: green;
  }
`;

export const DashProposalDetails = styled.button`
  background-color: black;
  height: 40px;
  margin-top: 2px;
  border: 1px solid black;
  width: 250px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background-color: green;
  }
`;

export const Dropdown = styled.div`
  top: 100%; /* Aligns directly below the ProfilContainer */
  color: black;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 15px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1; /* Ensures it appears above other elements */
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center; // Center vertically within the item
  padding: 15px 15px;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease; // Smooth transition for hover
  &:hover {
    background-color: #f5f5f5; /* Change background on hover */
  }
`;
