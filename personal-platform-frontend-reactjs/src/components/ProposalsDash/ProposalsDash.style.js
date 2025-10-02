import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  background: #f1f1fd;
  @media (min-width: 767px) {
    justify-content: space-evenly;
  }
`;

export const ListingJobs = styled.div`
  background-color: #202124;
  width: 100%;
  height: 100vh;
  padding-left: 10px;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5%;
  margin-left: 2%;
  margin-bottom: 1%;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 130px;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  border-radius: 15px;
  width: 100%;
  @media (min-width: 767px) and (max-width: 1023px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const SearchIconInput = styled.i`
  position: absolute;
  right: 10px;
  top: 50%;
  border: none;
  transform: translateY(-50%);
`;

export const SearchFilter = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 18%;
  height: 55px;
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
  font-weight: 601;
  font-family: serif;
  padding-left: 30%;
  color: white;
`;
export const StyleLineCount = styled.div`
  display: flex;
`;

export const JobLabelsContainer = styled.div`
  display: flex;
  gap: 10px; // Space between buttons, adjust as needed
`;

export const ViewLabelJobs = styled.div`
  color: rgba(38, 132, 255, 1);
  padding: 24px;
  font-family: Inter, sans-serif;
  height: 70px;
  border-bottom: 3px solid rgba(38, 132, 255, 1);
  width: 170px;
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const ViewLabelMyJobs = styled.div`
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

export const CardProject = styled.div`
  box-shadow: 10px 10px 0px 0px #3f464f;
  height: 220px;
  width: 46%;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded corners */
  padding: 16px; /* Inner spacing */
  margin: 16px; /* Outer spacing */
  margin-top: 50px;
  transition: transform 0.3s; /* Smooth transition for hover effect */
  align-items: center; /* Center align items */
  margin: 20px; /* Optional: Outer spacing for the container */
`;

export const ProjectLabelsContainer = styled.div`
  display: flex;
  gap: 10px; // Space between buttons, adjust as needed
`;

export const ViewLabelProjects = styled.div`
  color: var(--Base-Base-Black, rgba(32, 33, 36, 1));
  margin-top: 10px;
  margin-left: 3%;
  font-size: 30px;
  font-family: Inter, sans-serif;
  margin-left: 18px;
  border-bottom: 1px solid var(--Base-Base-Black, rgba(32, 33, 36, 1));
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.8; // Optional hover effect
  }
`;

export const CardProposalTitle = styled.div`
  color: black;
  font-family: Inter, sans-serif;
  font-weight: 501;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CardProjectTitle = styled.div`
  color: black;
  font-family: Inter, sans-serif;
  font-weight: 501;
`;

export const PriceStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DatePost = styled.div`
  color: #c8c8c8;
  font-family: Inter, sans-serif;
  padding-top: 20px;
  margin-bottom: 30px;
`;

export const StyleAllProjects = styled.div``;

export const AllCard = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AcceptProposalButton = styled.button`
  background: var(--Success-Success200, rgba(21, 176, 151, 1));
  color: white;
  margin-left: auto;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background: green; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const DeclineProposalButton = styled.button`
  background: black;
  color: white;

  height: 30px;
  width: 100px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const ButtonContainerDecline = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  color: gray;
  padding-top: 10px;
`;

export const BackTextStyle = styled.div`
  font-size: 18px;
  color: black;
  padding-left: 10px;
`;

export const Budgetdesc1 = styled.p`
  font-family: Inter, sans-serif;
  border: 1px solid #ccc; // Lighter border for subtle contrast
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Soft shadow for depth
  right: 0;
  font-size: 24px;
  color: red;
  font-weight: 600;
   padding: 20px;

`;
