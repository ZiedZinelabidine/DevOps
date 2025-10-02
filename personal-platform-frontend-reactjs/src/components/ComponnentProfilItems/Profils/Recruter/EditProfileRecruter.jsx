import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { BackButton } from "components/NewComposeyourTeam/NewComposeyourTeam.style";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useUpdateRecruterMutation } from "../../../../redux/api/recruter/recruterApi";
import { formConfig } from "../editProfil.constants";
import { useUpdateNameMutation } from "../../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";

import {
  InputContainer,
  StayledLabel,
  StyledSubmitEditProfileButton,
} from "../Recruter/styled";
import PhoneInput from "components/PhoneInput/PhoneInput";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const EditFormRecruterProfile = ({
  data,
  editModalOpen,
  onSaveChanges,
  onClose,
}) => {
  const methods = useForm();
  const [updateRecruter, { isLoading }] = useUpdateRecruterMutation();

  const [country_details, setCountryDetails] = useState();
  const [languages, setLanguages] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [updateName] = useUpdateNameMutation();
  const [countryCode, setCountryCode] = useState("+33"); // default country code
  const [phoneNumber, setPhoneNumber] = useState("");

  const [defaultLanguages, setDefaultLanguages] = useState(data.languages);

  const maxChars = 200;

  useEffect(() => {
    if (data) {
      methods.reset({
        name: data.name,
        first_name: data.first_name,
        email: data.email,
        profile_description: data.profile_description,
        url: data.url || "", // Fallback for null
        telephone: data.telephone || "",
      });
      setCountryDetails(data.country_details);
      setLanguages(data.languages || []);
      setCharCount(data?.profile_description?.length || 0);
      const phoneParts = data.telephone ? data.telephone.split(" ") : ["", ""];
      setCountryCode(phoneParts[0]); // Assuming country code is stored in the format "+X"
      setPhoneNumber(phoneParts[1] || ""); // The actual number
    }
  }, [data, methods]);

  const handleCountryDetailsChange = (selectedLocations) => {
    setCountryDetails(selectedLocations.value);
  };

  const handleLanguagesChange = (selectedLanguages) => {
    const valuesArray = selectedLanguages.map((option) => option.value);
    setLanguages(valuesArray);
  };


  const getdefaultLanguages = (languages) => {

      const languageArray = languages.map((index) => ({
          title: index ,
          value: index ,
          label: index 
        }));
        return languageArray
   };


   const getdefaultLocation = (location) => {

    const locationArray = [{
        title: location ,
        value: location ,
        label: location 
      }];
      return locationArray
 };



  const onSubmit = async (formData) => {
    if (charCount > maxChars) {
      setErrorMessage(`Description cannot exceed ${maxChars} characters.`);
      return; // Prevent submission
    }

    const updatedData = {
      ...formData,
      country_details,
      languages,
      telephone: `${countryCode} ${phoneNumber}`,
    };

    try {
      const updatedRecruter = await updateRecruter({
        recruterId: data.id,
        recruterData: updatedData,
      }).unwrap();
      onSaveChanges(updatedRecruter);

      if(updatedRecruter.name || updatedRecruter.first_name ) {
        const chatname = updatedRecruter.name  + " " + updatedRecruter.first_name ;
        await updateName({_id: data.chatid , name : chatname});
      }
      window.location.href = `/profil`;
      onClose();
    } catch (error) {
      console.error("Failed to update the recruter:", error);
    }
  };

  const handleChangeDesc = (event) => {
    const { value } = event.target;
    setCharCount(value.length);
    if (value.length <= maxChars) {
      setErrorMessage(""); // Clear error message if within limits
    }
  };

  return (
    <Modal show={editModalOpen} onHide={onClose} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <BackButton onClick={onClose}>
            <img src={Vector} style={{ width: "0.50vw" }} alt="vector" />
          </BackButton>
          <span style={{ marginLeft: "20px" }}>Modifier votre profil</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                {["name", "first_name", "email"].map((field) => {
                  const isDisabled =
                    field === "email";
                  return (
                    <InputContainer key={field}>
                      <Form.Group
                        controlId={`form${
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }`}
                      >
                        <StayledLabel>
                          {field
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </StayledLabel>
                        <Form.Control
                          type={field === "email" ? "email" : "text"}
                          {...methods.register(field)}
                          disabled={isDisabled} // Disable certain inputs
                        />
                      </Form.Group>
                    </InputContainer>
                  );
                })}
                 <InputContainer>
                  <PhoneInput
                    countryCode={countryCode}
                    phoneNumber={phoneNumber}
                    onCountryCodeChange={(e) => setCountryCode(e.target.value)}
                    onPhoneNumberChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </InputContainer>
              </Col>
              <Col md={6}>
                <InputContainer>
                  <StayledLabel>Pays</StayledLabel>
                  <GenericInput
                    inputObject={{
                      ...formConfig.country_details,
                      label: "country_details",
                      defaultValue : getdefaultLocation(data.country_details)
                    }}
                    onChange={handleCountryDetailsChange}
                    disabledForm={false}
                  />
                </InputContainer>

                <InputContainer>
                  <Form.Group controlId="formLanguages">
                    <StayledLabel>Languages</StayledLabel>
                    <GenericInput
                      inputObject={{
                        ...formConfig.languages,
                        label: "Languages",
                        defaultValue : getdefaultLanguages(data.languages)
                      }}
                      onChange={handleLanguagesChange}
                      disabledForm={false}
                      />
                  </Form.Group>
                </InputContainer>

                <InputContainer>
                  <Form.Group controlId="formUrl">
                    <StayledLabel>WEBSITE OR LINKEDIN</StayledLabel>
                    <Form.Control
                      type="url" // Set the correct input type
                      placeholder="https://yourprofile.com"
                      {...methods.register("url")}
                    />
                    {methods.formState.errors.url && (
                      <span style={{ color: "red" }}>
                        {methods.formState.errors.url.message}
                      </span>
                    )}
                  </Form.Group>
                </InputContainer>
              </Col>
            </Row>

            <InputContainer>
              <Form.Group controlId="formRecruterDescription">
                <StayledLabel>Description</StayledLabel>
                <Form.Control
                  as="textarea"
                  rows={9}
                  {...methods.register("profile_description", {
                    onChange: handleChangeDesc,
                  })}
                />
                <div
                  style={{
                    marginTop: "5px",
                    fontSize: "12px",
                    color: charCount >= maxChars ? "red" : "black",
                  }}
                >
                  {charCount}/{maxChars} characters
                </div>
                {errorMessage && (
                  <div style={{ color: "red", marginTop: "5px" }}>
                    {errorMessage}
                  </div>
                )}
              </Form.Group>
            </InputContainer>

            <StyledSubmitEditProfileButton
              variant="primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Enregistrement en cours..." : "Enregistrer"}
            </StyledSubmitEditProfileButton>
          </Form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
};

export default EditFormRecruterProfile;
