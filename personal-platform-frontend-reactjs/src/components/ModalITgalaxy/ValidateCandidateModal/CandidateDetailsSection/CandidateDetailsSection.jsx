import { Col, Row, Spinner } from "react-bootstrap";
import StarRating from "../../../StarRatingComonant";
import {
  StyledBoldSubTitle,
  StyledCandidateDetailsContainer,
  StyledCandidateImage,
  StyledHorizontalLine,
  StyledSubTitle,
} from "./CandidateDetailsSection.style";

const CandidateDetailsSection = ({ candidateData, loading, error }) => {
  const user = candidateData?.data;
  if (loading) return <Spinner>Loading...</Spinner>;

  if (error)
    return (
      <StyledCandidateDetailsContainer>
        <div className="d-flex justify-content-center">
          <p className="text-center mt-4 mb-4">Une erreur est survenue</p>
        </div>
      </StyledCandidateDetailsContainer>
    );

  if (user)
    return (
      <StyledCandidateDetailsContainer>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <StyledCandidateImage
            src={user.avatar}
            alt={user.name}
            width={100}
            height={100}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "black", textAlign: "center" }}>{user.name}</h3>
          <p
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              color: "#a0a0a0",
              textAlign: "center",
            }}
          >
            {user.skills.join(" / ")}
          </p>
          <StarRating
            count={5}
            size={15}
            value={3}
            activeColor={"yellow"}
            inactiveColor={"#a0a0a0"}
          />
        </div>
        <StyledHorizontalLine />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Col style={{ width: "100%" }}>
            <Row>
              <StyledBoldSubTitle>Adresse:</StyledBoldSubTitle>
              <StyledSubTitle>
                {user.adresse}, {user.country_details}
              </StyledSubTitle>
            </Row>
            <Row>
              <StyledBoldSubTitle>Email: </StyledBoldSubTitle>
              <StyledSubTitle>{user.email}</StyledSubTitle>
            </Row>
            <Row>
              <StyledBoldSubTitle>Langues:</StyledBoldSubTitle>
              <StyledSubTitle> {user.languages.join(" / ")}</StyledSubTitle>
            </Row>

            <Row>
              <StyledBoldSubTitle>Expérience: </StyledBoldSubTitle>
              <StyledSubTitle>2-4 ans</StyledSubTitle>
            </Row>
            <Row>
              <StyledBoldSubTitle>Heures travaillées:</StyledBoldSubTitle>
              <StyledSubTitle> 155 heures</StyledSubTitle>
            </Row>
          </Col>
        </div>
      </StyledCandidateDetailsContainer>
    );
};

export default CandidateDetailsSection;
