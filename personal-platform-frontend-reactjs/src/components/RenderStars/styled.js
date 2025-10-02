import styled from "styled-components";

// Star Image
export const StarImg = styled.img`
  width: 20px; // Size of the star icon
  height: 20px;
`;

// Styled container for stars
export const StarContainer = styled.div`
  display: flex; // Align stars in a row
`;

// Style for the star icon
export const Star = styled.i`
  font-size: 20px; // Size of the star icon
  margin-right: 5px; // Space between stars

  &.icon-star {
    color: gold; // Gold color for filled stars
  }

  &.icon-star-empty {
    color: #ccc; // Light gray color for empty stars
  }
`;
