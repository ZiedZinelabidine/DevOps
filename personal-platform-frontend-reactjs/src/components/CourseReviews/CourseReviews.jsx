// CourseReviews.jsx
import RenderStars from "components/RenderStars/RenderStars";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  padding: 20px;
`;

const Header = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
`;
const RatingSummary = styled.div`
  width: 35%;
`;

const SummaryTitle = styled.h3`
  font-size: 16px;
  color: #0073e6;
  margin-bottom: 20px;
`;

const AverageRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
`;

const StarIcon = styled.span`
  font-size: 24px;
  color: #f9a825;
  margin-right: 5px;
`;

const RatingCount = styled.span`
  font-size: 14px;
  color: #888;
  margin-left: 10px;
`;

const RatingDistribution = styled.div`
  margin-top: 20px;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

const StarLabel = styled.span`
  width: 50px;
`;

const ProgressBar = styled.div`
  background: #e0e0e0;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  margin-right: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  background: #0073e6;
  height: 100%;
  width: ${(props) => props.percentage || "0%"};
`;

const RatingPercentage = styled.span`
  font-size: 12px;
  color: #666;
`;

const ReviewsContainer = styled.div`
  width: 100%;
`;

const ReviewCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReviewerName = styled.div`
  font-weight: bold;
  color: #222;
`;

const ReviewerRating = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #f9a825;
`;

const ReviewText = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
  line-height: 1.5;
`;

const ReviewDate = styled.div`
  font-size: 12px;
  color: #888;
`;

const ViewMoreButton = styled.button`
  background: transparent;
  color: #0073e6;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const ModulesCard = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 0px 0px black;
  background: white;
`;



const CourseReviews = (props) => {
  return (
    <Container>
     <Header>Customers Reviews </Header>
     <ModulesCard>
      <ReviewsContainer>
        {props?.data?.comments.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewerInfo>
              <ReviewerName>{review.commentedUserName}</ReviewerName>
              <RenderStars stars={review.stars} starsTotal={5} />
            </ReviewerInfo>
            <ReviewText>{review.comment_text}</ReviewText>
            <ReviewDate>Reviewed on {review.createdAt}</ReviewDate>
          </ReviewCard>
        ))}
      </ReviewsContainer>
      </ModulesCard>
    </Container>
  );
};

export default CourseReviews;
