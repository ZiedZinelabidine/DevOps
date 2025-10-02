import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { BackButton } from "components/NewComposeyourTeam/NewComposeyourTeam.style";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useUpdateEntrepriseMutation } from "../../../../redux/api/entreprise/entrepriseApi";
import { useUpdateNameMutation } from "../../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import { formConfig } from "../editProfil.constants";
import {
  InputContainer,
  StayledLabel,
  StyledSubmitEditProfileButton,
} from "../Entreprise/styled";
import PhoneInput from "components/PhoneInput/PhoneInput";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const EditFormEntrepriseProfile = ({
  data,
  editModalOpen,
  onSaveChanges,
  onClose,
}) => {
  const methods = useForm();
  const [updateEntreprise, { isLoading }] = useUpdateEntrepriseMutation();
  const [updateName] = useUpdateNameMutation();
  const [languages, setLanguages] = useState([]);
  const [country_details, setCountryDetails] = useState();
  const [charCount, setCharCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [countryCode, setCountryCode] = useState("+33"); // default country code
  const [phoneNumber, setPhoneNumber] = useState("");

  const maxChars = 200;

  useEffect(() => {
    if (data) {
      methods.reset({
        username: data.username,
        email: data.email,
        entreprise_description: data.entreprise_description,
        website: data.website || "", // Fallback for null
        languages: data.languages || "",
        telephone: data.telephone || "",   
      });
      setCountryDetails(data.country_details);
      setCharCount(data?.entreprise_description?.length || 0);
      const phoneParts = data.telephone ? data.telephone.split(" ") : ["", ""];
      setCountryCode(phoneParts[0]); // Assuming country code is stored in the format "+X"
      setPhoneNumber(phoneParts[1] || ""); // The actual number
    }
  }, [data, methods]);

  const handleCountryDetailsChange = (selectedLocations) => {
    setCountryDetails(selectedLocations.value);
  };


  const getdefaultLocation = (location) => {
    const locationArray = [{
        title: location ,
        value: location ,
        label: location 
      }];
      return locationArray
  };

  const getdefaultSkills = (skills) => {
    const skillArray = skills.map((index) => ({
        title: index ,
        value: index ,
        label: index 
      }));
      return skillArray
  };
 
  const handleLanguagesChange = (selectedLanguages) => {
    const valuesArray = selectedLanguages.map((option) => option.value);
    setLanguages(valuesArray);
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
      const updatedEntreprise = await updateEntreprise({
        entrepriseId: data.id,
        entrepriseData: updatedData,
      }).unwrap();
      onSaveChanges(updatedEntreprise);

      if(updatedEntreprise.username ) {
        const chatname = updatedEntreprise.username ;
        await updateName({_id: data.chatid , name : chatname});
      }
      window.location.href = `/profil`;
      onClose();
    } catch (error) {
      console.error("Failed to update the entreprise:", error);
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
          <span style={{ marginLeft: "20px" }}>Edit Profile</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                {["username", "email"].map((field) => {
                  const isDisabled = field === "email";
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
                          disabled={isDisabled}
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
                  <StayledLabel>Location</StayledLabel>
                  <GenericInput
                    inputObject={{
                      ...formConfig.country_details,
                      label: "country_details",
                      defaultValue: getdefaultLocation(data.country_details)
                    }}
                    onChange={handleCountryDetailsChange}
                    disabledForm={false}
                  />
                </InputContainer>

                <InputContainer>
                  <Form.Group controlId="formWebsite">
                    <StayledLabel>WEBSITE OR LINKEDIN</StayledLabel>
                    <Form.Control
                      type="website" // Set the correct input type
                      placeholder="https://yourprofile.com"
                      {...methods.register("website")}
                    />
                    {methods.formState.errors.website && (
                      <span style={{ color: "red" }}>
                        {methods.formState.errors.website.message}
                      </span>
                    )}
                  </Form.Group>
                </InputContainer>
                <InputContainer>
                  <Form.Group controlId="formLanguages">
                    <StayledLabel>Languages</StayledLabel>
                    <GenericInput
                      inputObject={{
                        ...formConfig.languages,
                        label: "Languages",
                        defaultValue: getdefaultSkills(data.languages)

                      }}
                      onChange={handleLanguagesChange}
                      disabledForm={false}
                    />
                  </Form.Group>
                </InputContainer>
              </Col>
            </Row>

            <InputContainer>
              <Form.Group controlId="formEntrepriseDescription">
                <StayledLabel>About Me</StayledLabel>
                <Form.Control
                  as="textarea"
                  rows={9}
                  {...methods.register("entreprise_description", {
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
              {isLoading ? "Saving..." : "Save Changes"}
            </StyledSubmitEditProfileButton>
          </Form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
};

export default EditFormEntrepriseProfile;
