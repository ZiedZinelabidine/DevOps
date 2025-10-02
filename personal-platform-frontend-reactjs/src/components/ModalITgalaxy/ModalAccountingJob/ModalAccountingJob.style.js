import styled from "styled-components";

export const CardStatusProject = styled.div`
  width: 97%;
  font-family: Inter, sans-serif;
  border: 1px solid orange;
  border-radius: 4px;
  padding: 3px 16px 32px 16px;
  margin: 16px;
  margin-top: 10px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* Set background color based on props */
  color: ${({ status }) => {
    if (status === "CREATED") return "orange";
    if (status === "VALIDATED") return "green";
    if (status === "FINISHED") return "green";
    if (status === "REFUSED") return "red";
  }};
`;

export const CardStatusProjectText = styled.div`
  color: rgb(105, 105, 105);
  font-family: Inter, sans-serif;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const TitreColum = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 700;
  padding-left: 12px;
  padding-bottom: 10px;
`;
export const ApplyButton = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background-color: green;
  }
`;

export const TitleJobType = styled.p`
  font-family: Inter, sans-serif;
  font-size: 24px;
  color: #14171f;
  text-decoration: underline;
  font-weight: 600;
  line-height: 30.86px;
  padding-right: 100px;
  margin: 0 10px; /* Add horizontal margin */
  padding-left: 30px;

  /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides overflow */
  white-space: nowrap; /* Prevent text from wrapping */
  text-overflow: ellipsis; /* Allows truncated text with "..." */
`;

export const TitleJob = styled.p`
  font-family: Inter, sans-serif;
  font-size: 24px;
  color: #14171f;
  font-weight: 600;
  line-height: 30.86px;
  padding-right: 100px;
  margin: 0 10px; /* Add horizontal margin */

  /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides overflow */
  white-space: nowrap; /* Prevent text from wrapping */
  text-overflow: ellipsis; /* Allows truncated text with "..." */
`;

export const TitleJobConfirmation = styled.p`
  font-family: Inter, sans-serif;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 20px;
  color: #14171f;
  font-weight: 600;
  line-height: 30.86px;
  padding-right: 100px;
  margin: 0 10px; /* Add horizontal margin */

  /* Prevents text from wrapping to the next line */
  overflow: hidden; /* Hides overflow */
  white-space: nowrap; /* Prevent text from wrapping */
  text-overflow: ellipsis; /* Allows truncated text with "..." */
`;

export const BlocTitle = styled.div`
  display: flex;
  align-items: center; /* Center align vertically */
  width: 100%; /* Ensure it uses the full width of its container */
  padding: 10px; /* Add padding around the BlocTitle */
  justify-content: space-between; /* Use space-between to push elements apart */
  gap: 10px; /* Space between child elements */
`;

export const CardJob = styled.div`
  box-shadow: 10px 10px 0px 0px #3f464f;
  height: 229px;
  width: 97%;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded corners */
  padding: 16px; /* Inner spacing */
  margin: 16px; /* Outer spacing */
  margin-top: 50px;
  transition: transform 0.3s; /* Smooth transition for hover effect */

  align-items: center; /* Center align items */
  margin: 20px; /* Optional: Outer spacing for the container */
`;

export const CardJobTitle = styled.div`
  color: black;
  font-family: Inter, sans-serif;
  font-weight: 501;
  display: flex;
`;

export const DatePost = styled.div`
  color: #c8c8c8;
  font-family: Inter, sans-serif;
  gap: 10px; /* Space between each child element */
  font-weight: 501;
  padding-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; /* Stack children vertically */
`;

export const StyleName = styled.div`
  padding-left: 40px;
`;

export const ButtonBlocConfirmation = styled.div`
  display: flex;
  justify-content: space-around; /* Center buttons with space between */
  margin: 20px 0; /* Add some margin for spacing */
`;

export const ApplyButtonConfirmation = styled.button`
  /* Changed to button for proper semantics */
  background: var(--Success-Success200, rgba(21, 176, 151, 1));
  color: white;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px; /* Margin to create space between buttons */
  border: none; /* Remove default button border */
  cursor: pointer; /* Pointer cursor for button */

  &:hover {
    background: green; /* Change background color on hover */
  }

  &:focus {
    outline: none; /* Remove outline for focused button */
    box-shadow: 0 0 5px rgba(21, 176, 151, 0.5); /* Optional: Add shadow on focus */
  }
`;

export const ApplyButtonDecline = styled(ApplyButtonConfirmation)`
  background: var(--Error-Error100, rgba(228, 98, 111, 1));

  &:hover {
    background: red; /* Change background color on hover */
  }
`;
