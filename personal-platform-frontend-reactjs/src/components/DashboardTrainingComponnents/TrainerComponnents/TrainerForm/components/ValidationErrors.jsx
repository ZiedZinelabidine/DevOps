import styled from "styled-components";

const ValidationErrors = ({ errors }) => {
  if (Object.keys(errors).length === 0) return null;

  return (
    <StyledErrorContainer>
      {Object.values(errors).map((error, index) => (
        <StyledErrorMessage key={index}>{error.message}</StyledErrorMessage>
      ))}
    </StyledErrorContainer>
  );
};

const StyledErrorContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fff3f3;
  border: 1px solid #ffcdd2;
  border-radius: 4px;
`;

const StyledErrorMessage = styled.p`
  color: #d32f2f;
  margin: 0.25rem 0;
  font-size: 0.875rem;
`;

export default ValidationErrors;
