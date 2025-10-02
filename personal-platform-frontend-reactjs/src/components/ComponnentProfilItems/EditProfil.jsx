import SideBarStatusCardProfil from "components/SideBar/SideBarStatusCard/SideBarStatusCardProfil";
import ViewAccountingProfil from "./Profils/Accounting/ViewAccountingProfil";
import ViewCandidatProfil from "./Profils/Candidat/ViewCandidatProfil";
import ViewEntrepriseProfil from "./Profils/Entreprise/ViewEntrepriseProfil";
import ViewRecruterProfil from "./Profils/Recruter/ViewRecruterProfil";
import { BlocShowJobRecruter , BlocShowJobCandidat ,BlocShowJobEntreprise } from "components/ModalITgalaxy/ModalApply/ModalApply.style";
import  { useEffect, useState } from "react";
import {
  useGetCheckProfilCompletQuery,
} from "../../redux/api/candidat/candidatApi";

export default function EditProfil(props) {

      const [completeProfil, setCompleteProfil] = useState(true);

      const { data, errorCheck, isLoadingCheck } =
      useGetCheckProfilCompletQuery(
        props.userData.id,
        { skip: props.role !== "CANDIDAT" }
      );

     useEffect(() => {
        if (props.role === "CANDIDAT" && data) {
          setCompleteProfil(data.bol_user_complete);
        }
      }, [props.userData, isLoadingCheck, errorCheck, data]);

  
  return (
    <>
          {props.role === "CANDIDAT" && (
            props.editProfil ? (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              width: "100%", 
              alignItems: 'center',    // Centers items horizontally
              justifyContent: 'center', // Centers items vertically
              minHeight: '100vh',      // Ensures the div takes full height for vertical centering
            }}>
          {!completeProfil && (
              <SideBarStatusCardProfil status="COMPLETE_PROFIL_ACTION_REQUIRED_PROFIL" />)}
              <BlocShowJobCandidat>
                <ViewCandidatProfil
                  data={props.userData}
                  editProfil={props.editProfil}
                  setDataUser={props.setDataUser}
                />
              </BlocShowJobCandidat>
            </div>
            ) : (
              <ViewCandidatProfil
                data={props.userData}
                editProfil={props.editProfil}
                setDataUser={props.setDataUser}
              />
            )
          )}
        {props.role === "ENTREPRISE" && (
          <>
            {props.editProfil ? (
              <BlocShowJobEntreprise>
                <ViewEntrepriseProfil
                  data={props.userData}
                  editProfil={props.editProfil}
                  setDataUser={props.setDataUser}
                />
              </BlocShowJobEntreprise>
            ) : (
              <ViewEntrepriseProfil
                data={props.userData}
                editProfil={props.editProfil}
                setDataUser={props.setDataUser}
              />
            )}
          </>
        )}
      {props.role === "RECRUTER" && (
        <BlocShowJobRecruter>
        <ViewRecruterProfil
          data={props.userData}
          editProfil={props.editProfil}
          setDataUser={props.setDataUser}
        />
        </BlocShowJobRecruter>

      )}
      {props.role === "ACCOUNTING" && (
        <ViewAccountingProfil
          data={props.userData}
          editProfil={props.editProfil}
          setDataUser={props.setDataUser}
        />
      )}
    </>
  );
}
