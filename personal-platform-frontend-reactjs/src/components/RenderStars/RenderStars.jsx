import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStar = styled.i`
  color: gold; // Color for filled stars
  margin-right: 8px; // Space between the star and the text
`;
const StyledNumber = styled.div`
  font-Weight: 700;
  padding-right: 5px;
  color: white;
`;
const StyledGlobal = styled.div`
  
   color: gray ;

`;

const RenderStars = ({ stars , nbr_comments }) => {

    return (
      <StarContainer>
        {nbr_comments !== 0 && (
          <> 
        <StyledStar className="fas fa-star" /> {/* Use FontAwesome star icon */}
        <StyledNumber>{stars}</StyledNumber>
        <StyledGlobal>
             {`(${nbr_comments})`}
        </StyledGlobal> 
        </>)}
        </StarContainer>
    );
};

export default RenderStars;