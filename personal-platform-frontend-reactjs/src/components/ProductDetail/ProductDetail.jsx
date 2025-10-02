import CourseIntro from "components/CourseIntro/CourseIntro";
import CourseModules from "components/CourseModules/CourseModules";
import CourseReviews from "components/CourseReviews/CourseReviews";
import {
    BackButton,
    StyledApplicationDetailContainer,
    StyledApplicationDetailContentContainer,
  } from "./style";

const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const handleBackButton = () => {
    window.history.back();
  };

export default function ProductDetail({data}) {

    return (
        <StyledApplicationDetailContainer>
          <StyledApplicationDetailContentContainer>
            <BackButton onClick={handleBackButton}>
                <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
            </BackButton>
            <CourseIntro data={data} />
            <CourseModules data={data} />
            <CourseReviews data={data} />
          </StyledApplicationDetailContentContainer>
        </StyledApplicationDetailContainer>
    )

}





