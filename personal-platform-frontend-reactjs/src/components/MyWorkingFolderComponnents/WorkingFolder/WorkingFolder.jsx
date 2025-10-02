import ModalValidateFile from "components/ModalITgalaxy/ModalValidateFile/ModalValidateFile";
import ModalValidateFolder from "components/ModalITgalaxy/ModalValidateFolder/ModalValidateFolder";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getURL } from "../../../redux/api/uploads/uploadSlice";
import {
  BackButton,
  CardStatusProjectText,
  FullScreenIcon,
  LinkContainer,
  SearchContainer,
  StatusFolder,
  StyledPortfolioSectionContainer,
  StyledWebViewCard,
  StyleWithIcon,
  TitleFolder,
  TitlePage,
  TitleProfile,
  TitleText,
  ValdiateFileButton,
  ValdiateFolderButton,
  Wrap,
} from "./styled";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

export default function WorkingFolder(props) {
  const [isFullScreen, setIsFullScreen] = useState({
    idCardFront: false,
    idCardBack: false,
    companySiren: false,
    companyLocation: false,
  });


  const [previewCardFront, setPreviewCardFront] = useState(null);
  const [previewCardBack, setPreviewCardBack] = useState(null);
  const [previewCompanySiren, setPreviewCompanySiren] = useState(null);
  const [previewCompanyLocation, setPreviewCompanyLocation] = useState(null);
  const [previewCompanyRib, setPreviewCompanyRib] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading
  const dispatch = useDispatch();



  const getUrlData = async () => {
    setLoading(true); // Set loading state to true
    const folder = props.job.job.type.toLowerCase();

    // Utility function to fetch URL data
    const fetchUrlData = async (location) => {
      try {
        const result = await dispatch(getURL({ location }));
        return result;
      } catch (error) {
        console.error(`Failed to fetch data from ${location}`, error);
        return null;
      }
    };

     
    try {
      const urlIDF = await fetchUrlData(
        `${folder}/${props.job.job.id}/identityFront/`
      );

      const urlIDB = await fetchUrlData(
        `${folder}/${props.job.job.id}/identityBack/`
      );

      const urlCompanyLocation = await fetchUrlData(
        `${folder}/${props.job.job.id}/companyAddress/`
      );

      let urlCompanySiren = null;
      let urlCompanyRib = null;

      if (folder === "company") {
        urlCompanySiren = await fetchUrlData(
          `${folder}/${props.job.job.id}/companyBIN/`
        );
      }

      if (folder === "request_company_creation") {
        urlCompanyRib = await fetchUrlData(
          `${folder}/${props.job.job.id}/companyIBAN/`
        );
      }

      // Handle ID Front
      const idF = urlIDF?.Contents?.[0]?.Key;
      if (idF) {
        setPreviewCardFront(`${process.env.REACT_APP_S3_URL}/${idF}`);
      } else {
        console.error("ID FRONT contents not found");
        setPreviewCardFront(null);
      }

      // Handle ID Back
      const idB = urlIDB?.Contents?.[0]?.Key;

      if (idB) {
        setPreviewCardBack(`${process.env.REACT_APP_S3_URL}/${idB}`);
      } else {
        console.error("ID BACK contents not found");
        setPreviewCardBack(null);
      }

      // Handle Company Location
      const companyLocationPath = urlCompanyLocation?.Contents?.[0]?.Key;
      if (companyLocationPath) {
        setPreviewCompanyLocation(
          `${process.env.REACT_APP_S3_URL}/${companyLocationPath}`
        );
      } else {
        console.error("Company Location contents not found");
        setPreviewCompanyLocation(null);
      }

      // Handle Company Siren
      if (urlCompanySiren) {
        const companySirenPath = urlCompanySiren?.Contents?.[0]?.Key;
        if (companySirenPath) {
          setPreviewCompanySiren(
            `${process.env.REACT_APP_S3_URL}/${companySirenPath}`
          );
        } else {
          console.error("SIREN contents not found");
          setPreviewCompanySiren(null);
        }
      }

      // Handle Company Rib
      if (urlCompanyRib) {
        const companyRibPath = urlCompanyRib?.Contents?.[0]?.Key;
        if (companyRibPath) {
          setPreviewCompanyRib(
            `${process.env.REACT_APP_S3_URL}/${companyRibPath}`
          );
        } else {
          console.error("RIB contents not found");
          setPreviewCompanyRib(null);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUrlData();
  }, []);

  const [validateFolder, setValidateFolder] = useState(false);
  const [validateFile, setValidateFile] = useState(false);
  const [typeFile, setTypeFile] = useState();

  const handleShowValidateFolder = () => {
    setValidateFolder(true);
  };

  const handleCloseValidateFolder = () => {
    setValidateFolder(false);
  };

  const handleShowValidateFile = (typefile) => {
    // Exit full-screen for all cards
    setTypeFile(typefile);
    setIsFullScreen({
      idCardFront: false,
      idCardBack: false,
      companySiren: false,
      companyLocation: false,
      companyRib: false,
    });

    // Exit full-screen mode if currently in it
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error exiting full-screen mode: ${err.message}`);
      });
    }

    // Show the validation modal
    setValidateFile(true);
  };

  const handleCloseValidateFile = () => {
    setValidateFile(false);
  };

  const toggleFullScreen = (card) => {
    const cardElement = document.getElementById(card);
    if (!cardElement) {
      console.error(`Element with ID ${card} not found.`);
      return; // Early exit if element not found
    }

    if (!document.fullscreenElement) {
      cardElement.requestFullscreen().catch((err) => {
        console.error(`Error entering full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Change 'idCardFront', 'idCardBack', etc., to actual initialized IDs.
  const handleToggleFullScreen = (cardType) => {
    toggleFullScreen(cardType);
  };

  return (
    <Wrap>
      <TitlePage>
        <BackButton onClick={props.back}>
          <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
        </BackButton>
        {props.job.accountingFolderType === "REQUEST_COMPANY_CREATION" && (
          <TitleText> Creation Company Folder </TitleText>
        )}

        {props.job.accountingFolderType === "COMPANY" && (
          <TitleText> Company Verification Folder </TitleText>
        )}
      </TitlePage>

      <SearchContainer>
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
              This is the folder Accounting of :{" "}
              {props.job.president.name + " " + props.job.president.first_name}
            </p>
            <StatusFolder>
              <span
                style={{
                  border: "1px solid",
                  // Use a function to determine color...
                  borderColor:
                    props.job.status === "COMPANY_CREATED"
                      ? "green"
                      : props.job.status === "VALIDATED"
                      ? "green"
                      : props.job.status === "IN_PROGRESS"
                      ? "orange"
                      : props.job.status === "ACTION_REQUIRED"
                      ? "orange"
                      : props.job.status === "REFUSED"
                      ? "red"
                      : "black",
                  padding: "5px",
                  borderRadius: "4px",
                  display: "inline-block",
                  // Same function for text color...
                  color:
                    props.job.status === "COMPANY_CREATED"
                      ? "green"
                      : props.job.status === "VALIDATED"
                      ? "green"
                      : props.job.status === "FINISHED"
                      ? "green"
                      : props.job.status === "IN_PROGRESS"
                      ? "orange"
                      : props.job.status === "ACTION_REQUIRED"
                      ? "orange"
                      : props.job.status === "REFUSED"
                      ? "red"
                      : "black",
                }}
              >
                Status: {props.job.status}
              </span>
            </StatusFolder>
          </TitleFolder>

          {/* Job Type Descriptions */}
          {(props.job.accountingFolderType === "COMPANY" ||
            props.job.accountingFolderType === "REQUEST_COMPANY_CREATION") && (
            <CardStatusProjectText>
              <div>1. Check all files provided are valid.</div>
              <div>
                2. Support client if files are not valid via chat and continue
                the validation.
              </div>
              {props.job.accountingFolderType ===
                "REQUEST_COMPANY_CREATION" && (
                <>
                  <div>3. Do the administrative creation of the company.</div>
                  <div>4. Send all the created company files.</div>
                </>
              )}
            </CardStatusProjectText>
          )}
          <StatusFolder>
            <ValdiateFolderButton onClick={handleShowValidateFolder}>
              Add Status for this folder
            </ValdiateFolderButton>
          </StatusFolder>
        </LinkContainer>

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
              <span
                style={{
                  fontWeight: "501",
                  paddingLeft: "20px",
                  // Repeat color function...
                  color:
                    props.job.job.identity_front_status === "VALIDATED"
                      ? "green"
                      : props.job.job.identity_front_status === "VERIFICATION"
                      ? "orange"
                      : props.job.job.identity_front_status === "IN_PROGRESS"
                      ? "orange"
                      : props.job.status === "ACTION_REQUIRED"
                      ? "orange"
                      : props.job.status === "REFUSED"
                      ? "red"
                      : "black",
                }}
              >
                {props.job.job.company_name_status}
              </span>
            </p>
            <br />
            <StatusFolder>
              <ValdiateFolderButton
                onClick={() => handleShowValidateFile("company_name")}
              >
                Add Status Name Company
              </ValdiateFolderButton>
            </StatusFolder>
          </TitleFolder>

          {props.job.accountingFolderType === "COMPANY" && (
            <CardStatusProjectText>
              <div>1. Company name : {props.job.job.company_name}.</div>
              <div>2. Company location : {props.job.job.company_location}.</div>
              <div>3. Type of Company : {props.job.job.type_company}.</div>
              <div>4. Identity number : {props.job.job.identity_number}.</div>
            </CardStatusProjectText>
          )}
          {props.job.accountingFolderType === "REQUEST_COMPANY_CREATION" && (
            <CardStatusProjectText>
              <ol>
                <li>
                  <strong>Company name:</strong> {props.job.job.company_name}
                </li>
                <li>
                  <strong>Company location:</strong>{" "}
                  {props.job.job.company_location}
                </li>
                <li>
                  <strong>Type of Company:</strong> {props.job.job.type_company}
                </li>
                <li>
                  <strong>Identity number:</strong>{" "}
                  {props.job.job.identity_number}
                </li>
                <li>
                  <strong>RIB:</strong> {props.job.job.rib}
                </li>
              </ol>
            </CardStatusProjectText>
          )}
        </LinkContainer>

        <StyledPortfolioSectionContainer>
          <StyledWebViewCard id="idCardFront">
            <StyleWithIcon>
              <TitleProfile>Identity Card Front</TitleProfile>
              <FullScreenIcon
                className={`fas ${
                  isFullScreen.idCardFront ? "fa-compress" : "fa-expand"
                }`}
                onClick={() => {
                  setIsFullScreen((prevState) => ({
                    ...prevState,
                    idCardFront: !prevState.idCardFront,
                  }));
                  toggleFullScreen("idCardFront");
                }}
              />
            </StyleWithIcon>
            <span
              style={{
                paddingTop: "10px",
                fontWeight: "501",
                // Repeat color function...
                color:
                  props.job.job.identity_front_status === "VALIDATED"
                    ? "green"
                    : props.job.job.identity_front_status === "VERIFICATION"
                    ? "orange"
                    : props.job.job.identity_front_status === "IN_PROGRESS"
                    ? "orange"
                    : props.job.status === "ACTION_REQUIRED"
                    ? "orange"
                    : props.job.status === "REFUSED"
                    ? "red"
                    : "black",
              }}
            >
              {props.job.job.identity_front_status}
            </span>
            <br />
            <iframe
              src={previewCardFront} // Set this to the appropriate URL for the document
              width="100%"
              height="100%"
              title="Identity Card Front Preview"
              style={{ border: "none", padding: 0, margin: 0 }}
            />
            <ValdiateFileButton
              onClick={() => handleShowValidateFile("identity_front")}
            >
              Add Status for the file
            </ValdiateFileButton>
          </StyledWebViewCard>

          <StyledWebViewCard id="idCardBack">
            <StyleWithIcon>
              <TitleProfile>Identity Card Back</TitleProfile>
              <FullScreenIcon
                className={`fas ${
                  isFullScreen.idCardBack ? "fa-compress" : "fa-expand"
                }`}
                onClick={() => {
                  setIsFullScreen((prevState) => ({
                    ...prevState,
                    idCardBack: !prevState.idCardBack,
                  }));
                  toggleFullScreen("idCardBack");
                }}
              />
            </StyleWithIcon>
            <span
              style={{
                paddingTop: "10px",
                fontWeight: "501",
                // Repeat color function...
                color:
                  props.job.job.identity_back_status === "VALIDATED"
                    ? "green"
                    : props.job.job.identity_back_status === "VERIFICATION"
                    ? "orange"
                    : props.job.job.identity_back_status === "IN_PROGRESS"
                    ? "orange"
                    : props.job.status === "ACTION_REQUIRED"
                    ? "orange"
                    : props.job.status === "REFUSED"
                    ? "red"
                    : "black",
              }}
            >
              {props.job.job.identity_back_status}
            </span>
            <br />
            <iframe
              src={previewCardBack}
              width="100%"
              height="100%"
              title="Identity Card Back Preview"
              style={{ border: "none", padding: 0, margin: 0 }}
            />
            <ValdiateFileButton
              onClick={() => handleShowValidateFile("identity_back")}
            >
              Validate the file
            </ValdiateFileButton>
          </StyledWebViewCard>
          {props.job.accountingFolderType === "COMPANY" && (
            <StyledWebViewCard id="companySiren">
              <StyleWithIcon>
                <TitleProfile>Company Siren</TitleProfile>
                <FullScreenIcon
                  className={`fas ${
                    isFullScreen.companySiren ? "fa-compress" : "fa-expand"
                  }`}
                  onClick={() => {
                    setIsFullScreen((prevState) => ({
                      ...prevState,
                      companySiren: !prevState.companySiren,
                    }));
                    toggleFullScreen("companySiren");
                  }}
                />
              </StyleWithIcon>
              <span
                style={{
                  paddingTop: "10px",
                  fontWeight: "501",
                  // Repeat color function...
                  color:
                    props.job.job.company_siren_status === "VALIDATED"
                      ? "green"
                      : props.job.job.company_siren_status === "VERIFICATION"
                      ? "orange"
                      : props.job.job.company_siren_status === "IN_PROGRESS"
                      ? "orange"
                      : props.job.job.company_siren_status === "ACTION_REQUIRED"
                      ? "orange"
                      : props.job.job.company_siren_status === "REFUSED"
                      ? "red"
                      : "black",
                }}
              >
                {props.job.job.company_siren_status}
              </span>
              <br />
              <iframe
                src={previewCompanySiren} // Set this to the appropriate URL for the document
                width="100%"
                height="100%"
                title="Company Siren Preview"
              />
              <ValdiateFileButton
                onClick={() => handleShowValidateFile("company_siren")}
              >
                Add Status for the file
              </ValdiateFileButton>
            </StyledWebViewCard>
          )}

          {props.job.accountingFolderType === "REQUEST_COMPANY_CREATION" && (
            <StyledWebViewCard id="companyRib">
              <StyleWithIcon>
                <TitleProfile>Company Rib</TitleProfile>
                <FullScreenIcon
                  className={`fas ${
                    isFullScreen.companySiren ? "fa-compress" : "fa-expand"
                  }`}
                  onClick={() => {
                    setIsFullScreen((prevState) => ({
                      ...prevState,
                      companyRib: !prevState.companyRib,
                    }));
                    toggleFullScreen("companyRib");
                  }}
                />
              </StyleWithIcon>
              <span
                style={{
                  paddingTop: "10px",
                  fontWeight: "501",
                  // Repeat color function...
                  color:
                    props.job.job.rib_status === "VALIDATED"
                      ? "green"
                      : props.job.job.rib_status === "VERIFICATION"
                      ? "orange"
                      : props.job.job.rib_status === "IN_PROGRESS"
                      ? "orange"
                      : props.job.job.rib_status === "ACTION_REQUIRED"
                      ? "orange"
                      : props.job.job.rib_status === "REFUSED"
                      ? "red"
                      : "black",
                }}
              >
                {props.job.job.rib_status}
              </span>
              <br />
              <iframe
                src={previewCompanyRib} // Set this to the appropriate URL for the document
                width="100%"
                height="100%"
                title="Company Siren Preview"
                style={{ border: "none", padding: 0, margin: 0 }}
              />
              <ValdiateFileButton onClick={() => handleShowValidateFile("rib")}>
                Add Status for the file
              </ValdiateFileButton>
            </StyledWebViewCard>
          )}

          <StyledWebViewCard id="companyLocation">
            <StyleWithIcon>
              <TitleProfile>Company Location</TitleProfile>
              <FullScreenIcon
                className={`fas ${
                  isFullScreen.companyLocation ? "fa-compress" : "fa-expand"
                }`}
                onClick={() => {
                  setIsFullScreen((prevState) => ({
                    ...prevState,
                    companyLocation: !prevState.companyLocation,
                  }));
                  toggleFullScreen("companyLocation");
                }}
              />
            </StyleWithIcon>
            <span
              style={{
                paddingTop: "10px",
                fontWeight: "501",
                // Repeat color function...
                color:
                  props.job.job.company_location_status === "VALIDATED"
                    ? "green"
                    : props.job.job.company_location_status === "IN_PROGRESS"
                    ? "orange"
                    : props.job.job.company_location_status === "VERIFICATION"
                    ? "orange"
                    : props.job.job.company_location_status ===
                      "ACTION_REQUIRED"
                    ? "orange"
                    : props.job.job.company_location_status === "REFUSED"
                    ? "red"
                    : "black",
              }}
            >
              {props.job.job.company_location_status}
            </span>
            <br />
            <iframe
              src={previewCompanyLocation} // Set this to the appropriate URL for the document
              width="100%"
              height="100%"
              title="Company Location Preview"
              style={{ border: "none", padding: 0, margin: 0 }}
            />
            <ValdiateFileButton
              onClick={() => handleShowValidateFile("company_location")}
            >
              Add Status for the file
            </ValdiateFileButton>
          </StyledWebViewCard>
        </StyledPortfolioSectionContainer>

        {validateFolder && (
          <ModalValidateFolder
            id={props.job.id}
            job={props.job.job}
            confirmShow={validateFolder}
            closeModal={handleCloseValidateFolder}
            refetch={props.refetch}
          />
        )}

        {validateFile && (
          <ModalValidateFile
            id={props.job.job.id}
            confirmShow={validateFile}
            closeModal={handleCloseValidateFile}
            typeFile={typeFile}
            type={props.job.job.type}
            refetch={props.refetch}
          />
        )}
      </SearchContainer>
    </Wrap>
  );
}
