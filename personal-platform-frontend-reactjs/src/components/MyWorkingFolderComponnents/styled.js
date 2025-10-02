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

export const ListingJobs = styled.div`
  background-color: white;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  margin-right: 20px;
  margin-top: 30px;
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
  max-width: 100%; /* Prevents any max width constraints */
  padding-left: 20px;
  padding-right: 20px;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  border-radius: 15px;
  width: 100%;
  height: 50px;
  @media (min-width: 767px) and (max-width: 1023px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const SearchIconInput = styled.i`
  position: absolute;
  right: 20px;
  top: 50%;
  border: none;
  transform: translateY(-50%);
`;

export const SearchFilter = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 18%;
  display: flex;
  height: 41px;
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
  height: 150px;
  width: 330px;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded corners */
  padding: 16px; /* Inner spacing */
  margin: 16px; /* Outer spacing */
  margin-top: 50px;
  transition: transform 0.3s; /* Smooth transition for hover effect */

  align-items: center; /* Center align items */
  margin: 20px; /* Optional: Outer spacing for the container */

  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
    cursor: pointer;
  }
`;

export const CardProjectTitle = styled.div`
  color: black;
  font-family: Inter, sans-serif;
  font-weight: 501;
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

export const AddNewJobButtonstyle = styled.button`
  margin-right: 30px;
  background-color: black;
  height: 39px;
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
