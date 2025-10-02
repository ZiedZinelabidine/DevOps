import styled from "styled-components";

export const PayOutButton = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background-color: blue;
  }
`;

export const StyleInput = styled.div`
  display: flex;
  padding-left: 50px;
  padding-top: 30px;
  width: 100%;
`;

export const StyleInputRising = styled.div`
  display: flex;
  padding-left: 50px;
  padding-top: 30px;
  width: 70%;
`;

export const Title = styled.div`
  font-family: Inter, sans-serif;
  font-size: 20px;
  padding-top: 5px;
  color: white;
  font-weight: bold;
  /* Center the text */
  margin: 0 auto; /* Apply auto margins for vertical centering if the container is flex */
  width: 100%; /* Ensure it uses the full width of its parent */
`;

export const TitleRising = styled.div`
  font-family: Inter, sans-serif;
  font-size: 20px;
  padding-top: 5px;
  color: black;
  font-weight: bold;
  /* Center the text */
  margin: 0 auto; /* Apply auto margins for vertical centering if the container is flex */
  width: 100%; /* Ensure it uses the full width of its parent */
  padding-left: 20px;
`;

export const TitleInvalid = styled.div`
  font-family: Inter, sans-serif;
  font-size: 20px;
  padding-top: 5px;
  color: red;
  font-weight: bold;
  padding-right: 20px;

  /* Center the text */
  text-align: center; /* Horizontally center text */
  margin: 0 auto; /* Apply auto margins for vertical centering if the container is flex */
  width: 100%; /* Ensure it uses the full width of its parent */
`;
