import styled from "styled-components";

export const ImageProfileCardStyle = styled.img`
  object-fit: cover;
  
  ${({ typeimg }) => {
    if (typeimg === "profil") {
      return `
              width: 130px;
              height: 130px;
              border-radius: 10px;
            `;
    } else if (typeimg === "profilSidebar") {
      return `
                width: 70px;   /* Smaller size */
                height: 70px;  /* Smaller size */
                border-radius: 50%; /* Make it circular */
            `;
    } else if (typeimg === "cercel") {
      return `
                width: 40px;   /* Smaller size */
                height: 40px;  /* Smaller size */
                border-radius: 50%; /* Make it circular */
            `;
    } else if (typeimg === "composeteam") {
      return `
                width: 48px;
                height: 48px;
                object-fit: cover;
                border-radius: 10px;
            `;
    }
  }}
`;
