import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  background-color: #fff;
`;

const ErrorTitle = styled.h2`
  color: #e53e3e;
  margin-bottom: 12px;
`;

const ErrorMessage = styled.p`
  color: #4a5568;
  margin-bottom: 24px;
  max-width: 500px;
`;

const RetryButton = styled.button`
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 12px;

  &:hover {
    background-color: #2980b9;
  }
`;

const HomeButton = styled(RetryButton)`
  background-color: #718096;

  &:hover {
    background-color: #4a5568;
  }
`;

export const ControllerError = ({
  error,
  onRetry,
  onHome,
  message = "There was an error accessing this page",
}) => {
  const getErrorMessage = () => {
    switch (error?.message) {
      case "UNAUTHORIZED":
        return "You are not authorized to access this page. Please log in.";
      case "FORBIDDEN":
        return "You don't have permission to access this page.";
      case "NETWORK_ERROR":
        return "Unable to connect to the server. Please check your connection.";
      default:
        return message;
    }
  };

  return (
    <ErrorContainer>
      <ErrorTitle>Access Error</ErrorTitle>
      <ErrorMessage>{getErrorMessage()}</ErrorMessage>
      <div>
        <RetryButton onClick={onRetry}>Try Again</RetryButton>
        <HomeButton onClick={onHome}>Go to Home</HomeButton>
      </div>
    </ErrorContainer>
  );
};
