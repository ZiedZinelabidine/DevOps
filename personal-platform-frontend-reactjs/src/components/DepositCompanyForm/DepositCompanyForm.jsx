import { COMPANY_NEW_ITEMS } from "core/constants/depositCompanyForm.constants";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  COMPANY_EXIST,
  COMPANY_EXIST_ITEMS,
  COMPANY_NEW,
} from "../../core/constants/depositCompanyForm.constants";
import { renderDepositCompanyContentList } from "../../core/helpers/depositCompanyForm";
import { getAccessToken } from "../../core/helpers/storage";
import useHandleSubmitCompany from "../../hooks/useHandleSubmitCompany";
import { useGetCompanyByPresidentIdAndTypeQuery } from "../../redux/api/company/companyApi";
import { useGetRequestCompanyCreationByPresidentIdAndTypeQuery } from "../../redux/api/requestCompanyCreation/requestCompanyCreationApi";
import {
  addCompanyLocationStatus,
  addCompanyNameStatus,
  addCompanySirenStatus,
  addIdentityBackStatus,
  addIdentityFrontStatus,
  addPaymentIntentId,
  addRibStatus,
  addStatus,
  addTypeCompany,
} from "../../redux/slice/CompanyCreation/companyCreationSlice";
import Spinner from "../Spinner/Spinner"; // Import your Spinner component
import {
  BigContainer,
  StyledBoldSubtitle,
  StyledBreadcrumb,
  StyledCircle,
  StyledContainer,
  StyledDepositCompanyHeader,
  StyledFormContainer,
  StyledGoBackContainer,
  StyledGoNextContainer,
  StyledLineOne,
  StyledNextLineOne,
  StyledStatusCard,
  StyledStep,
  StyledStepContentCard,
  StyledStepContentColumn,
  StyledStepSubtitle,
  StyledStepTitle,
  StyledStepTitleCard,
  StyledStepperCard,
  StyledStepsFormContainer,
  StyledSubtitle,
  StyledTitle,
  StyledTitleAndSubtitleContainer,
} from "./DepositCompanyForm.style";
import { ArrowRight } from 'lucide-react';
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;
const Next = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/next.png`;

const DepositCompanyForm = ({ type }) => {
  const [isEdit, setIsEdit] = useState(true);
  const [confirmShow, setConfirmShow] = useState(false);
  const companyType = useSelector((state) => state.companyCreation.type);
  const [dataAccounting, setDataAccounting] = useState(null);
  const [items, setItems] = useState(COMPANY_EXIST_ITEMS);
  const [userId, setUserId] = useState(null);
  const [userType, setUserType] = useState(null);
  const [selectedElement, setSelectedElement] = useState(1);
  const [openModalRegister, setOpenModalRegister] = useState();
  const [token, setToken] = useState(null);
  const [disableStepCompanyName, setDisableStepCompanyName] = useState(false);
  const [disableStepLocation, setDisableStepLocation] = useState(false);
  const [disableStepIBAN, setDisableStepIBAN] = useState(false);
  const [disableStepBIN, setDisableStepBIN] = useState(false);
  const [disableStepIdentity, setDisableStepIdentity] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getAccessToken();
      setToken(accessToken);
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
      setUserType(decodedToken.role);
    }
  }, [token]);

  const handleModalRegister = () => {
    setOpenModalRegister(!openModalRegister);
  };

  // useGetCompanyByPresidentIdAndTypeQuery
  const {
    data: companyData,
    error: companyError,
    isLoading: companyIsLoading,
    refetch: refetchCompany,
  } = useGetCompanyByPresidentIdAndTypeQuery(
    { presidentId: userId, type: userType },
    {
      skip: !userId || !userType, // Skip if either userId or userType is missing
      refetchOnMountOrArgChange: true,
    }
  );

  const {
    data: requestCompanyData,
    error: requestCompanyError,
    isLoading: requestCompanyIsLoading,
    refetch: refetchCompanyRequestCreation,
  } = useGetRequestCompanyCreationByPresidentIdAndTypeQuery(
    { presidentId: userId, type: userType },
    {
      skip: !userId || !userType, // Skip if either userId or userType is missing
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (companyData?.data[0] && companyData.data.length > 0) {
      setIsEdit(true);
      setDataAccounting(companyData.data);
      dispatch(addTypeCompany(COMPANY_EXIST));
      setItems(COMPANY_EXIST_ITEMS);
      dispatch(addStatus(companyData?.data[0]?.status));
      dispatch(
        addCompanyLocationStatus(companyData?.data[0]?.company_location_status)
      );
      dispatch(
        addIdentityFrontStatus(companyData?.data[0]?.identity_front_status)
      );
      dispatch(
        addIdentityBackStatus(companyData?.data[0]?.identity_back_status)
      );
      dispatch(
        addCompanySirenStatus(companyData?.data[0]?.company_siren_status)
      );
      dispatch(addCompanyNameStatus(companyData?.data[0]?.company_name_status));
      if (companyData?.data[0]?.company_siren) setSelectedElement(1);
      formMethods.setValue("companyExist", 1);
      formMethods.setValue(
        "companyName",
        companyData?.data[0]?.company_name || ""
      );
      formMethods.setValue(
        "identityType",
        companyData.data[0].identity_type || ""
      );
      formMethods.setValue(
        "identityNumber",
        companyData.data[0].identity_number || ""
      );
      formMethods.setValue(
        "companyCountry",
        companyData?.data[0]?.company_country || ""
      );
      formMethods.setValue(
        "companyAddress",
        companyData?.data[0]?.company_location || ""
      );
      formMethods.setValue(
        "companyBIN",
        companyData?.data[0]?.company_siren || ""
      );
      formMethods.setValue(
        "identityCompanyType",
        companyData?.data[0]?.identity_company_type || ""
      );
      setDisableStepCompanyName(
        companyData?.data[0]?.company_name_status === "VERIFICATION" ||
          companyData?.data[0]?.company_name_status === "VALIDATED"
      );
      setDisableStepLocation(
        companyData?.data[0]?.company_location_status === "VERIFICATION" ||
          companyData?.data[0]?.company_location_status === "VALIDATED"
      );
      setDisableStepBIN(
        companyData?.data[0]?.company_siren_status === "VERIFICATION" ||
          companyData?.data[0]?.company_siren_status === "VALIDATED"
      );
      setDisableStepIdentity(
        ( companyData?.data[0]?.identity_front_status === "VERIFICATION" ||
          companyData?.data[0]?.identity_front_status === "VALIDATED" ) && (
          companyData?.data[0]?.identity_back_status === "VERIFICATION" ||
          companyData?.data[0]?.identity_back_status === "VALIDATED")
      );
    } else if (
      requestCompanyData?.data[0] &&
      requestCompanyData.data.length > 0
    ) {
      setIsEdit(false);
      setDataAccounting(requestCompanyData.data);
      dispatch(addTypeCompany(COMPANY_NEW));
      setItems(COMPANY_NEW_ITEMS);
      dispatch(addStatus(requestCompanyData?.data[0]?.status || 0));
      dispatch(addRibStatus(requestCompanyData?.data[0]?.rib_status));
      dispatch(
        addIdentityFrontStatus(
          requestCompanyData?.data[0]?.identity_front_status
        )
      );
      dispatch(
        addIdentityBackStatus(requestCompanyData?.data[0]?.identity_back_status)
      );
      dispatch(
        addCompanyLocationStatus(
          requestCompanyData?.data[0]?.company_location_status
        )
      );
      dispatch(
        addCompanyNameStatus(requestCompanyData?.data[0]?.company_name_status)
      );
      dispatch(
        addPaymentIntentId(requestCompanyData?.data[0]?.paymentIntentId)
      );

      if (requestCompanyData?.data[0]?.identity_number) setSelectedElement(3);

      formMethods.setValue("companyExist", 2);
      formMethods.setValue("createNewCompany", 1);
      formMethods.setValue(
        "companyName",
        requestCompanyData?.data[0]?.company_name || ""
      );
      formMethods.setValue(
        "companyAddress",
        requestCompanyData?.data[0]?.company_location || ""
      );
      formMethods.setValue(
        "companyIBAN",
        requestCompanyData?.data[0]?.rib || ""
      );
      formMethods.setValue(
        "identityType",
        requestCompanyData?.data[0]?.identity_type || ""
      );
      formMethods.setValue(
        "identityNumber",
        requestCompanyData?.data[0]?.identity_number || ""
      );
      formMethods.setValue(
        "companyCountry",
        requestCompanyData?.data[0]?.company_country || ""
      );
      setDisableStepLocation(
        requestCompanyData?.data[0]?.company_location_status ===
          "VERIFICATION" ||
          requestCompanyData?.data[0]?.company_name_status === "VALIDATED"
      );
      setDisableStepCompanyName(
        requestCompanyData?.data[0]?.company_name_status === "VERIFICATION" ||
          requestCompanyData?.data[0]?.company_name_status === "VALIDATED"
      );
      setDisableStepIBAN(
        requestCompanyData?.data[0]?.rib_status === "VERIFICATION" ||
          requestCompanyData?.data[0]?.rib_status === "VALIDATED"
      );
      setDisableStepBIN(
        requestCompanyData?.data[0]?.company_siren_status === "VERIFICATION" ||
          requestCompanyData?.data[0]?.company_siren_status === "VALIDATED"
      );
      setDisableStepIdentity(
        requestCompanyData?.data[0]?.identity_front_status === "VERIFICATION" ||
          requestCompanyData?.data[0]?.identity_front_status === "VALIDATED" ||
          requestCompanyData?.data[0]?.identity_back_status ===
            "VERIFICATION" ||
          requestCompanyData?.data[0]?.identity_back_status === "VALIDATED"
      );
    }
  }, [companyData, requestCompanyData, formMethods, dispatch]);

  let { handleSubmit, loading } = useHandleSubmitCompany(
    selectedElement,
    setSelectedElement,
    setConfirmShow,
    openModalRegister,
    setOpenModalRegister,
    userId ? true : false,
    formMethods,
    companyType,
    companyData?.data,
    requestCompanyData?.data,
    refetchCompany,
    refetchCompanyRequestCreation
  );

  const status = useSelector((state) => state.companyCreation.status);
  const company_location_status = useSelector(
    (state) => state.companyCreation.company_location_status
  );
  const company_siren_status = useSelector(
    (state) => state.companyCreation.company_siren_status
  );
  const identity_front_status = useSelector(
    (state) => state.companyCreation.identity_front_status
  );
  const identity_back_status = useSelector(
    (state) => state.companyCreation.identity_back_status
  );
  const rib_status = useSelector((state) => state.companyCreation.rib_status);
  const company_name_status = useSelector(
    (state) => state.companyCreation.company_name_status
  );
  const paymentIntentId = useSelector(
    (state) => state.companyCreation.paymentIntentId
  );

  const statusColor = (title) => {
    
    if (
      (company_location_status === "ACTION_REQUIRED" &&
        title === "Company Address") ||
      (rib_status === "ACTION_REQUIRED" &&
        title === "International Bank Account Number") ||
      (identity_front_status === "ACTION_REQUIRED" && title === "Identity") ||
      (identity_back_status === "ACTION_REQUIRED" && title === "Identity") ||
      (company_name_status === "ACTION_REQUIRED" && title === "Company Name") ||
      (company_siren_status === "ACTION_REQUIRED" &&
        title === "Company Identity")
    ) {
      return "red";
    } else if (
      ((company_location_status === "VERIFICATION" || company_location_status === "IN_PROGRESS") &&
        title === "Company Address") ||
      ((rib_status === "VERIFICATION" || rib_status === "IN_PROGRESS")  &&
        title === "International Bank Account Number") ||
      (status != "VALIDATED" &&
        (identity_front_status === "VERIFICATION" || identity_front_status === "IN_PROGRESS")  &&
        title === "Identity") ||
      (status != "VALIDATED" &&
        (identity_back_status === "VERIFICATION" || identity_back_status === "IN_PROGRESS")  &&
        title === "Identity") ||
      ((company_name_status === "VERIFICATION"  || company_name_status === "IN_PROGRESS") && title === "Company Name") ||
      ((company_siren_status === "VERIFICATION"  || company_siren_status === "IN_PROGRESS") && title === "Company Identity")
    ) {
      return "#ffcc00";
    } else if (
      (paymentIntentId && title === "Payment") ||
      status === "VALIDATED"
    ) {
      return "#008000";
    } else if (status === "VALIDATED" || company_name_status === "VALIDATED" || (identity_front_status=== "VALIDATED" && identity_back_status === "VALIDATED" ) || company_siren_status ==="VALIDATED"  ) {

      return "#008000";

    } else {
      return "white";

    }

  };

  const statusSubtitle = (title) => {
    if (
      (company_location_status === "ACTION_REQUIRED" &&
        title === "Company Address") ||
      (rib_status === "ACTION_REQUIRED" &&
        title === "International Bank Account Number") ||
      (identity_front_status === "ACTION_REQUIRED" && title === "Identity") ||
      (identity_back_status === "ACTION_REQUIRED" && title === "Identity") ||
      (company_name_status === "ACTION_REQUIRED" && title === "Company Name") ||
      (company_siren_status === "ACTION_REQUIRED" &&
        title === "Company Identity")
    ) {
      return "Action Required";
    } else if (
      ((company_location_status === "VERIFICATION" || company_location_status === "IN_PROGRESS")  &&
        title === "Company Address") ||
      ((rib_status === "VERIFICATION" || rib_status === "IN_PROGRESS") &&
        title === "International Bank Account Number") ||
      (status != "VALIDATED" &&
        (identity_front_status === "VERIFICATION" || identity_front_status === "IN_PROGRESS") &&
        title === "Identity") ||
      (status != "VALIDATED" &&
        (identity_back_status === "VERIFICATION" || identity_back_status === "IN_PROGRESS") &&
        title === "Identity") ||
      ((company_name_status === "VERIFICATION"  || company_name_status === "IN_PROGRESS") && title === "Company Name") ||
      ((company_siren_status === "VERIFICATION"  || company_siren_status === "IN_PROGRESS") && title === "Company Identity")
    ) {
      return "Verification";
    } else if (status === "VALIDATED" || company_name_status === "VALIDATED" || (identity_front_status=== "VALIDATED" && identity_back_status === "VALIDATED" ) || company_siren_status ==="VALIDATED"  ) {
      return "Validated";
    } else if (paymentIntentId && title === "Payment") {
      return "Payment done";
    }
  };

  const depositCompanyFormStatus = () => {
    if (status === "VALIDATED" ) {
      return { text: "VALIDATED", color: "#447e32" };
    } else if (status === "VERIFICATION") {
      return { text: "Verification", color: "#ffcc00" };
    } else if (status === "ACTION_REQUIRED") {
      return { text: "Action Required", color: "#ffa500" };
    }
    // Consider adding a default case
    return { text: "In Progress", color: "white" };
  };

  return (
    <StyledContainer>
      <BigContainer>
        {companyIsLoading ||
          requestCompanyIsLoading ||
          (loading && <Spinner />)}
        <StyledDepositCompanyHeader>
          <StyledBreadcrumb>
            <StyledTitle>Votre entreprise details</StyledTitle>
            <StyledSubtitle> Rejoignez une communauté des prestataires informatique</StyledSubtitle>
          </StyledBreadcrumb>
          <StyledStatusCard>
            {(() => {
              const statusInfo = depositCompanyFormStatus();
              return (
                <StyledTitle color={statusInfo.color}>
                  {statusInfo.text}
                </StyledTitle>
              );
            })()}
          </StyledStatusCard>
        </StyledDepositCompanyHeader>
        <StyledFormContainer>
          <StyledLineOne>
            {selectedElement > 1 && (
              <StyledGoBackContainer
                onClick={() => setSelectedElement(selectedElement - 1)}
              >
                 <img src={Vector} style={{ width: "0.50vw" }} alt="vector" />
                <StyledBoldSubtitle> Back </StyledBoldSubtitle>
              </StyledGoBackContainer>
            )}

            {dataAccounting && selectedElement >= 1 && selectedElement < 4 && (
                <StyledNextLineOne>
                  <StyledGoNextContainer
                    onClick={() => setSelectedElement(selectedElement + 1)}
                  >
                    <StyledBoldSubtitle> Next </StyledBoldSubtitle>
                    <img src={Next} style={{ width: "0.83vw" }} alt="vector" />                   
                  </StyledGoNextContainer>
                </StyledNextLineOne>
              )}
          </StyledLineOne>

          <StyledStepsFormContainer>
            <StyledStepContentColumn>
              <StyledStepTitleCard>
                <StyledBoldSubtitle style={{ color: "#A4ADB6" }}>
                  Step {selectedElement}:{" "}
                </StyledBoldSubtitle>
                <StyledBoldSubtitle>
                  {selectedElement && items[selectedElement - 1]?.title}
                </StyledBoldSubtitle>
              </StyledStepTitleCard>
              <StyledStepContentCard>
                {renderDepositCompanyContentList(
                  type,
                  companyType,
                  selectedElement,
                  setItems,
                  setSelectedElement,
                  setConfirmShow,
                  formMethods,
                  handleSubmit,
                  companyData?.data,
                  isEdit,
                  requestCompanyData?.data,
                  disableStepLocation,
                  disableStepIBAN,
                  disableStepBIN,
                  disableStepIdentity,
                  disableStepCompanyName,
                  refetchCompany,
                  refetchCompanyRequestCreation
                )}
              </StyledStepContentCard>
            </StyledStepContentColumn>
            <StyledStepperCard>
              {items.map((item) => (
                <StyledStep
                  key={item.id}
                  color={statusColor(item.title)}
                  active={selectedElement === item.id}
                  checked={selectedElement > item.id}
                  onClick={() => setSelectedElement(item.id)}
                  isEdit={isEdit}
                >
                  <StyledCircle color={statusColor(item.title)}>
                    {" "}
                    {item.id}
                  </StyledCircle>
                  <StyledTitleAndSubtitleContainer>
                    <StyledStepTitle> {item.title}</StyledStepTitle>
                    <StyledStepSubtitle color={statusColor(item.title)}>
                      {" "}
                      {statusSubtitle(item.title)}
                    </StyledStepSubtitle>
                  </StyledTitleAndSubtitleContainer>
                </StyledStep>
              ))}
            </StyledStepperCard>
          </StyledStepsFormContainer>
        </StyledFormContainer>
      </BigContainer>
    </StyledContainer>
  );
};
export default DepositCompanyForm;
