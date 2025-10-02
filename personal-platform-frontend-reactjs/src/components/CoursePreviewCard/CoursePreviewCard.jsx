// CoursePreviewCard.jsx
import {
  CardContainer,
  CardImage,
  DurationBadge,
  ImageWrapper,
} from "./CoursePreviewCard.style";
const CoursePreviewCard = ({ imageSrc, duration, onModulesClick }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <CardImage src={imageSrc} alt="Course details" />
      </ImageWrapper>
    </CardContainer>
  );
};

export default CoursePreviewCard;
