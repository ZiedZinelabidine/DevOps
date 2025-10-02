import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import ModalComponent from "../ModalComponent";
import {
  CardProjectText,
  CardStatusProjectText,
  TitreColum,
} from "./ModalShowContact.style";

const ModalShowContact = (props) => {
  const URL = process.env.REACT_APP_FRONTED_URL;

  const openUrl = () => {
    if (props.type === "CONTACTOR") {
      window.open(
        `${URL}/freelance?token=${props.contact.contacted.display}&type=${props.contact.contacted.type}`,
        "_blank"
      );
    }

    if (props.type === "CONTACTED") {
      window.open(
        `${URL}/freelance?token=${props.contact.contactor.display}&type=${props.contact.contactor.type}`,
        "_blank"
      );
    }

    if (props.type === "RECRUTED") {
      window.open(
        `${URL}/freelance?token=${props.recruitment.recruter.display}&type=${props.recruitment.recruter.type}`,
        "_blank"
      );
    }

    if (props.type === "RECRUTER") {
      window.open(
        `${URL}/freelance?token=${props.recruitment.recruted.display}&type=${props.recruitment.recruted.type}`,
        "_blank"
      );
    }
  };

  const RenderHeader = () => {
    return (
      <>
        {props.type === "CONTACTOR" && (
          <CardStatusProjectText>
            <ImageProfilCard
              type={props.contact.contacted.type.toLowerCase()}
              id={props.contact.contacted.id}
              typeimg={"cercel"}
            />
            <div style={{ paddingLeft: "15px", marginRight: "10px" }}>
              {props.contact.contacted.name ? (props.contact.contacted.name + " "+ props.contact.contacted.first_name ) : (props.contact.contacted.username)}
            </div>
          </CardStatusProjectText>
        )}

        {props.type === "CONTACTED" && (
          <CardStatusProjectText>
            <ImageProfilCard
              type={"recruter"}
              id={props?.contact?.contactor?.id}
              typeimg={"cercel"}
            />
            <div style={{ paddingLeft: "15px", marginRight: "10px" }}>
              {props?.contact?.contactor?.name} {"  "}{" "}
              {props?.contact?.contactor?.first_name}
            </div>
          </CardStatusProjectText>
        )}

        {props.type === "RECRUTED" && (
          <CardStatusProjectText>
            <ImageProfilCard
              type={"recruted"}
              id={props.recruitment.recruted.id}
              typeimg={"cercel"}
            />
            <div style={{ paddingLeft: "15px", marginRight: "10px" }}>
              {props.recruitment.recruter.name} {"  "}{" "}
              {props.recruitment.recruter.first_name}
            </div>
          </CardStatusProjectText>
        )}

        {props.type === "RECRUTER" && (
          <CardStatusProjectText>
            <ImageProfilCard
              type={"recruter"}
              id={props.recruitment.recruter.id}
              typeimg={"cercel"}
            />
            <div style={{ paddingLeft: "15px", marginRight: "10px" }}>
              {props.recruitment.recruted.name} {"  "}{" "}
              {props.recruitment.recruted.first_name}
            </div>
          </CardStatusProjectText>
        )}
      </>
    );
  };

  const RenderBodyModalApply = () => {
    return (
      <>
        {props.type === "CONTACTOR" && (
          <>
            <TitreColum>The Contact Description:</TitreColum>
            <CardProjectText>
              You contacted:{" "}
              <a
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={openUrl}
              >
                {props.contact.contacted.name ? (props.contact.contacted.name + " " + props.contact.contacted.first_name) : (props.contact.contacted.username)}
              </a>
            </CardProjectText>
          </>
        )}

        {props.type === "CONTACTED" && (
          <>
            <TitreColum>The Contact Description:</TitreColum>
            <CardProjectText>
              You have been contacted by:{" "}
              <a
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={openUrl}
              >
                {" "}
                {props?.contact?.contactor?.name} {"  "}{" "}
                {props?.contact?.contactor?.first_name}{" "}
              </a>
            </CardProjectText>
          </>
        )}

        {props.type === "RECRUTER" && (
          <CardProjectText>
            You contacted :{" "}
            <a
              style={{
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={openUrl}
            > 
              {props.recruitment.recruted.name}  {" "}  {props.recruitment.recruted.first_name}
            </a>
          </CardProjectText>
        )}

        {props.type === "RECRUTED" && (
          <CardProjectText>
            You have been contacted by :{" "}
            <a
              style={{
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={openUrl}
            >
              {props.recruitment.recruted.name} {"  "}{" "}
              {props.recruitment.recruted.first_name}{" "}
            </a>
          </CardProjectText>
        )}
      </>
    );
  };

  return (
    <ModalComponent
      show={props.confirmShow}
      closeModal={props.closeModal}
      body={<RenderBodyModalApply />}
      footer={props.footer}
      header={<RenderHeader />}
      bodyPadding={"0px 0px 0px 0px"}
      minWidth={"50%"}
      height={"30vh"}
      footerpaddingbottom={"1px"}
      headerpaddingtop={"0"}
      footerpaddingtop={"0"}
    />
  );
};

export default ModalShowContact;
