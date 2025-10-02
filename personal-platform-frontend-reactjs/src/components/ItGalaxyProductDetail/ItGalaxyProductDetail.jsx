import SideBar from "components/SideBar/sideBar";
import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";
import CourseIntro from "../CourseIntro/CourseIntro";
import CourseModules from "../CourseModules/CourseModules";
import CourseReviews from "../CourseReviews/CourseReviews";
import { useGetTrainingByTokenQuery } from "../../redux/api/training/trainingApi";
import {
  BackButton,
  MessageContainer,
  Spinner,
  StyledApplicationDetailContainer,
  StyledApplicationDetailContentContainer,
} from "./ItGalaxyProductDetail.style";
import ProductDetail from "components/ProductDetail/ProductDetail";

const ItGalaxyProductDetail = () => {
  const { token } = useParams();
  const tokenUser = getTokenFromLocalStorage();
  const decodedToken = tokenUser ? jwtDecode(tokenUser) : null;

  const {
    data: application,
    error,
    isLoading,
  } = useGetTrainingByTokenQuery({ token });


  return (
    <div
      style={{
        display: "flex",
        overflowY: "hidden",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <SideBar
        path={``}
        isLoggedIn={true}
        role={decodedToken?.role}
        id={decodedToken?.id}
      />

      {isLoading && (
        <MessageContainer>
          <Spinner
            animation="border"
            role="status"
            style={{ marginBottom: "10px" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <span>Loading...</span>
        </MessageContainer>
      )}

      {/* Error State */}
      {error && (
        <MessageContainer>
          <span>Error loading product data. Please try again later.</span>
        </MessageContainer>
      )}

      {!isLoading && !error && (!application || !application.data) && (
        <MessageContainer>
          <span>No product data available.</span>
        </MessageContainer>
      )}
      {!isLoading && application && application.data && (
        <ProductDetail data={application.data} />
      )}
    </div>
  );
};

export default ItGalaxyProductDetail;
