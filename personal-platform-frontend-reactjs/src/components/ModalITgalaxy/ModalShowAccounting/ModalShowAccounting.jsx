import ModalComponent from "../ModalComponent";
import {
  CardStatusProjectText,
  LinkContainer,
  StatusFolder,
  TitleFolder,
} from "./ModalShowAccounting.style";

const ModalShowAccounting = (props) => {
  const RenderHeader = () => {
    return (
      <>
        <TitleFolder>
          <p
            style={{
              fontWeight: "500",
              fontSize: "20px",
              paddingBottom: "10px",
              color: "black",
              paddingTop: "12px",
              fontFamily: "Inter",
              fontWeight: "501",
              margin: 0,
            }}
          >
            {props.type === "ACCOUNTING" ? (
              <>
                Accounting folder of{" "}
                {props.accountingjob.president.name +
                  " " +
                  props.accountingjob.president.first_name}
              </>
            ) : (
              <>
                Your request affected to{" "}
                {props.accountingjob.accounting.name +
                  " " +
                  props.accountingjob.accounting.first_name}
              </>
            )}{" "}
          </p>
          <StatusFolder style={{ marginLeft: "150px" }}>
            {" "}
            {/* Changes here */}
            <span
              style={{
                border: "1px solid",
                borderColor:
                  props.accountingjob.status === "COMPANY_CREATED"
                    ? "green"
                    : props.accountingjob.status === "VALIDATED"
                    ? "green"
                    : props.accountingjob.status === "IN_PROGRESS"
                    ? "orange"
                    : props.accountingjob.status === "ACTION_REQUIRED"
                    ? "orange"
                    : props.accountingjob.status === "REFUSED"
                    ? "red"
                    : "black",
                padding: "5px",
                borderRadius: "4px",
                display: "inline-block",
                color:
                  props.accountingjob.status === "COMPANY_CREATED"
                    ? "green"
                    : props.accountingjob.status === "VALIDATED"
                    ? "green"
                    : props.accountingjob.status === "FINISHED"
                    ? "green"
                    : props.accountingjob.status === "IN_PROGRESS"
                    ? "orange"
                    : props.accountingjob.status === "ACTION_REQUIRED"
                    ? "orange"
                    : props.accountingjob.status === "REFUSED"
                    ? "red"
                    : "black",
              }}
            >
              {props.accountingjob.status}
            </span>
          </StatusFolder>
        </TitleFolder>
      </>
    );
  };

  const RenderBodyModalApply = () => {
    return (
      <>
        <LinkContainer>
          <TitleFolder>
            <p
              style={{
                fontWeight: "501",
                paddingBottom: "10px",
                color: "red",
                fontFamily: "Inter",
                margin: 0,
              }}
            >
              Information Folder :
            </p>
            <br />
          </TitleFolder>

          {props.accountingjob.accountingFolderType === "COMPANY" && (
            <CardStatusProjectText>
              <div>
                1. Company name : {props.accountingjob.job.company_name}.
              </div>
              <div>
                2. Company location : {props.accountingjob.job.company_location}
                .
              </div>
              <div>
                3. Type of Company : {props.accountingjob.job.type_company}.
              </div>
              <div>
                4. Identity number : {props.accountingjob.job.identity_number}.
              </div>
              <div>5. rib : {props.accountingjob.job.rib}.</div>
            </CardStatusProjectText>
          )}
          {props.accountingjob.accountingFolderType ===
            "REQUEST_COMPANY_CREATION" && (
            <CardStatusProjectText>
              <ol>
                <li>
                  <strong>Company name:</strong>{" "}
                  {props.accountingjob.job.company_name}
                </li>
                <li>
                  <strong>Company location:</strong>{" "}
                  {props.accountingjob.job.company_location}
                </li>
                <li>
                  <strong>Type of Company:</strong>{" "}
                  {props.accountingjob.job.type_company}
                </li>
                <li>
                  <strong>Identity number:</strong>{" "}
                  {props.accountingjob.job.identity_number}
                </li>
                <li>
                  <strong>RIB:</strong> {props.accountingjob.job.rib}
                </li>
              </ol>
            </CardStatusProjectText>
          )}
        </LinkContainer>
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
      minWidth={"70%"}
      height={"30vh"}
      footerpaddingbottom={"1px"}
      headerpaddingtop={"0"}
      footerpaddingtop={"0"}
    />
  );
};

export default ModalShowAccounting;
