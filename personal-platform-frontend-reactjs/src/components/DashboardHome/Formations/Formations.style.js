import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing * 5}px;
  width: 100% !important;
  padding-inline: 5%;
  padding-bottom: 2%;


  @media screen and (max-width: 1280px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.spacing * 5}px;
  padding-top: 15px;
  width: 100%;
  align-items: center;
  align-self: center;

  &:not([direction="row"]) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    &:not([direction="row"]) {
      max-width: 800px;
    }
  }

  @media (max-width: 768px) {
    &:not([direction="row"]) {
      max-width: 400px;
      padding-top: 10px;

    }
  }
`;
export const RowStyleFormations = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 25px;
  
  > * {
    flex: 0 0 calc(26% - 10px); /* For 6 items per row, accounting for gap */
  }

  @media (max-width: 1200px) {
    > * {
      flex: 0 0 calc(25% - 25px); /* For 4 items per row */
    }
  }

  @media (max-width: 992px) {
    > * {
      flex: 0 0 calc(33.333% - 25px); /* For 3 items per row */
    }
  }

  @media (max-width: 768px) {
    > * {
      flex: 0 0 calc(50% - 25px); /* For 2 items per row */
    }
  }

  @media (max-width: 576px) {
    > * {
      flex: 0 0 100%; /* For 1 item per row */
    }
  }
`;

export const SeeMoreButton = styled.button`
  background-color: #111827;
  color: white;
  padding: 10px 20px;
  border: none;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: Inter, sans-serif;
  margin-bottom: 130px;
  margin-top: 50px;

  &:hover {
    background-color: #333; // Optional: darker shade on hover
  }
`;


export const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  

  & > * {
    flex: 0 0 auto;
    width: calc(25% - ${(props) => props.spacing * 6}px);
    max-width: 320px;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  &[data-animate="out"] {
    transform: ${(props) =>
      props["data-direction"] === "right"
        ? "translateX(-100%)"
        : "translateX(100%)"};
  }

  &[data-animate="in"] {
    transform: translateX(0);
  }

  &.next-formations {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: ${(props) =>
      props["data-direction"] === "right"
        ? "translateX(100%)"
        : "translateX(-100%)"};
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  &.next-formations[data-animate="in"] {
    transform: translateX(0);
  }

  @media (max-width: 1200px) {
    padding: 20px;
    justify-content: center;
    max-width: 800px;

    & > * {
      width: calc(50% - ${(props) => props.spacing * 4}px);
      max-width: 360px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 2px;
    max-width: 400px;

    & > * {
      width: 100%;
      max-width: 380px;
    }
  }
`;

export const ButtonStyle = styled.button`
  width: 178px;
  height: 40px;
  padding: 10px 16px 10px 16px;
  gap: 8px;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px #1018280d;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #101828;
  align-self: center;
`;

export const BackButton = styled.img`
  cursor: pointer;
  width: 5%; 
  @media (max-width: 1200px) {
    display: none;
  }

`;

