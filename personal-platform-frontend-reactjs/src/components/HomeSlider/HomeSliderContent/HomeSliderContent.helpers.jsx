import CustomMultiAvatar from "../CustomAvatar/CustomMultiAvatar";
import ProfileUser from "./FirstSlider/ProfileUser/ProfileUser";
import Project from "./FirstSlider/Project/Project";
import { StackStyle, TitleStyle } from "./HomeSliderContent.style";
import AddAuth from "./SecondSlider/AddAuth/AddAuth";
import Organization from "./SecondSlider/Organization/Organization";
import SecondSlider from "./SecondSlider/SecondSlider";
import SliderCard from "./SliderCard/SliderCard";
import ThirdSlider from "./ThirdSlider/ThirdSlider";

const VideoCourseIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/video-course.svg`;
const TutorsIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/tutors.svg`;
const CalendarIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/calendar.svg`;
const ProgressCircleIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/progress-circle.svg`;

export const getHomeContent = (id, formatMessage) => {
  switch (id) {
    case 1:
      return (
        <StackStyle
          width={"100%"}
          style={{ position: "absolute", top: 10, left: 1 }}
        >
          <StackStyle style={{ padding: "20px", paddingLeft: "135px" }}>
            <SliderCard style={{ alignSelf: "start" }}>
              <Project />
            </SliderCard>
          </StackStyle>

          <SliderCard style={{ alignSelf: "start" }} borderColor={"#FFC800"}>
            <ProfileUser />
          </SliderCard>

          <StackStyle style={{ padding: "20px", paddingLeft: "220px" }}>
            <SliderCard style={{ alignSelf: "start" }} borderColor={"#FF1EAD"}>
              <StackStyle spacing={1}>
                <TitleStyle>
                  {formatMessage("slider.content.top_rated_freelancers")}
                </TitleStyle>
                <CustomMultiAvatar avatarNumber={10} />
              </StackStyle>
            </SliderCard>
          </StackStyle>
        </StackStyle>
      );
    case 2:
      return (
        <StackStyle
          width={"100%"}
          style={{ position: "absolute", top: 10, left: 1 }}
        >
          <StackStyle style={{ padding: "20px", paddingLeft: "65px" }}>
            <SliderCard style={{ alignSelf: "start" }} borderColor={"#FFC800"}>
              <SecondSlider
                title={formatMessage("slider.content.create_calendar")}
              >
                <Organization />
              </SecondSlider>
            </SliderCard>
          </StackStyle>

          <StackStyle style={{ padding: "20px", paddingLeft: "175px" }}>
            <SliderCard style={{ alignSelf: "start" }} borderColor={"#DB2777"}>
              <SecondSlider
                title={formatMessage("slider.content.todo_tasks")}
                isTask
              />
            </SliderCard>
          </StackStyle>

          <StackStyle style={{ padding: "20px", paddingLeft: "50px" }}>
            <SliderCard style={{ alignSelf: "start" }} borderColor={"#16A34A"}>
              <SecondSlider
                title={formatMessage("slider.content.add_authentication")}
              />
              <AddAuth />
            </SliderCard>
          </StackStyle>
        </StackStyle>
      );
    case 3:
      return (
        <StackStyle
          width={"100%"}
          spacing={2}
          top={"-300px"}
          style={{ position: "absolute", top: 45, left: 1 }}
        >
          <ThirdSlider
            style={{ marginLeft: "40px" }}
            title={formatMessage("slider.content.stats.video_courses")}
            text={formatMessage("slider.content.video_courses")}
            icon={VideoCourseIcon}
          />

          <ThirdSlider
            style={{ marginLeft: "60px" }}
            title={formatMessage("slider.content.stats.tutors")}
            text={formatMessage("slider.content.tutors")}
            icon={TutorsIcon}
            isReverse
          />

          <ThirdSlider
            style={{ marginTop: "-100px", marginRight: "45px" }}
            title={formatMessage("slider.content.stats.students")}
            text={formatMessage("slider.content.assisted_student")}
            icon={CalendarIcon}
            alignSelf={"end"}
            isReverse
            isRight
          />

          <ThirdSlider
            style={{ marginTop: "138px", marginRight: "-350px" }}
            title={"5K+"}
            text={formatMessage("slider.content.video_courses")}
            icon={ProgressCircleIcon}
            alignSelf={"center"}
            isColumn
            isIcon
          />
        </StackStyle>
      );
    default:
      return null;
  }
};
