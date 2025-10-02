import CustomText from "../CustomText/CustomText";
import { RootStyle, StackStyle } from "./Recruitment.style";
import RecruitmentCard from "./RecruitmentCard/RecruitmentCard";

function Recruitment() {
  return (
    <RootStyle spacing={5}>
      <CustomText
        headingText={"Optimize your recruitment"}
        subHeadingText={"Centralize your recruitment"}
        supportingText={`Manage your entire recruitment process in one place`}
      />

      <StackStyle
        style={{ alignItems: "center", justifyContent: "center" }}
        direction={"row"}
        spacing={2}
      >
        <RecruitmentCard message={"Free tools for signing contracts online"} />
        <RecruitmentCard
          message={"Generate your contract with ItGalax AI..."}
        />
        <RecruitmentCard message={"Access to all contacts with ItGalaxy Navigator"} />
      </StackStyle>
    </RootStyle>
  );
}

export default Recruitment;
