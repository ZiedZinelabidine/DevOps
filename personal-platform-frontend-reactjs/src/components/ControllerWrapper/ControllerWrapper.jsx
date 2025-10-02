import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ControllerError } from "../ControllerError/ControllerError";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { RouteLoader } from "../LoadingComponents/RouteLoader";

const ControllerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ControllerWrapper = ({
  controller: Controller,
  children,
  errorMessage,
}) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.location.reload();
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleError = (error) => {
    return (
      <ControllerError
        error={error}
        onRetry={handleRetry}
        onHome={handleHome}
        message={errorMessage}
      />
    );
  };

  return (
    <ErrorBoundary fallback={handleError}>
      <ControllerContainer>
        <Suspense fallback={<RouteLoader />}>
          <Controller>
            <Suspense fallback={<RouteLoader />}>{children}</Suspense>
          </Controller>
        </Suspense>
      </ControllerContainer>
    </ErrorBoundary>
  );
};
