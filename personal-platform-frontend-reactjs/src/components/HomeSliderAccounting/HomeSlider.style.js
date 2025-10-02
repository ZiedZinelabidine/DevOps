import styled from "styled-components";

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing * 8}px;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 36px;
  height: 100vh;
  min-height: 700px;
  margin-top: 40px;
  transition: max-height 0.3s ease;

  @media (max-width: 1024px) {
    height: 100vh;
  }
`;

export const StackStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  gap: ${(props) => props.spacing * 8}px;
  width: ${(props) => props.width};
  overflow: auto;
`;

export const ContainerStyle = styled.div`
  width: 100%;
  height: 534px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 4%;
`;

export const StyledSwitchButtonContainer = styled.div`
  position: absolute;
  top: 60px;
  z-index: 9;
`;

export const HomePageIconStyle = styled.img`
  position: absolute;
  top: -60px;
  left: -180px;
`;

export const ImageStyle = styled.img`
  width: 534px;
  height: 534px;
  object-fit: cover;
  border-radius: 10px;
  align-self: end;
`;

export const TitleStyle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #14171f;
  margin: 0px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: 16px;
  margin: 0 10px;

  color: ${(props) =>
    props.focus && props.active === "FREELANCERS"
      ? "rgba(255, 255, 255, 1)"
      : props.focus && props.active !== "FREELANCERS"
      ? "rgba(0, 0, 0, 1)"
      : props.active === "FREELANCERS"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.3)"};
`;

export const Toggle = styled.div`
  width: 47px;
  height: 25px;
  background-color: #e0e0e0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  position: relative;
  border: 0.5px solid #ffffff66;
  background: rgb(176, 181, 198);
  background: linear-gradient(
    160deg,
    rgba(176, 181, 198, 1) 0%,
    rgba(209, 222, 238, 1) 70%
  );
`;

export const ToggleButton = styled.div`
  width: 21px;
  height: 16px;
  /* background-color: #3f51b5; Change to blue */
  border-radius: 4px;
  border: 0.5px solid;
  background: rgb(228, 232, 237);
  background: linear-gradient(
    160deg,
    rgba(228, 232, 237, 1) 0%,
    rgba(227, 232, 238, 1) 100%
  );

  border-image-source: linear-gradient(
    120.48deg,
    rgba(255, 255, 255, 0.4) 2.6%,
    rgba(255, 255, 255, 0) 78.47%
  );
  transition: all 0.3s ease;
  position: absolute;
  box-shadow: 2.5px 2.5px 10px 0px #a6abbd;
  box-shadow: -2.5px -2.5px 10px 0px #fafbff66;
  left: ${(props) =>
    props.active ? "5px" : "calc(100% - 20px - 5px)"}; /* Move left or right */

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledLine = styled.div`
  width: 3px;
  height: 80%;
  background-color: #586577;
  border-radius: 2px;
`;
