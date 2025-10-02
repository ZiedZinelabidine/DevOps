import styled from "styled-components";

export const CardStatusProject = styled.div`
  width: 770px;
  font-family: Inter, sans-serif;
  border: 1px solid orange;
  border-radius: 4px;
  padding: 3px 16px 32px 16px;
  margin: 16px;
  margin-top: 10px;
  margin-left: 10px;
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
  color: white;
`;
