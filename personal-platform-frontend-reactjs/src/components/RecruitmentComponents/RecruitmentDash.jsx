import Register from "../Authentification/modals/register";

export default function RecruitmentDash() {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  return (
    <Register
      openModalRegister={true}
      recruitment_token={token}
      freelance={true}
      recruiter={false}
      buisness={false}
    />
  );
}
