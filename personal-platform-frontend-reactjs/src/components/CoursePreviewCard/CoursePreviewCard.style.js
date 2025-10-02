import styled from "styled-components";

export const CardContainer = styled.div`
  width: 32%;
  height: 310px;
  padding: 15px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 5px black;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const StyledHorizontalLine = styled.hr`
  width: 60%;
  height: 1px;
  border: black 1px solid;
  align-self: center;
  opacity: 1;
  margin: 5px;
`;

export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  margin-bottom: 0px;
`;

export const CardSubtitle = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 0px;
`;

export const CardImage = styled.img`
  width: 50%;
  height: 60%;
  border-radius: 5px;
  margin-bottom: 0px;
  margin-top: 50px;

`;

export const DurationBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
`;

export const PlayButton = styled.div`
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const CourseModulesLink = styled.a`
  color: #009ff5;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 5px;
  font-size: 14px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;
