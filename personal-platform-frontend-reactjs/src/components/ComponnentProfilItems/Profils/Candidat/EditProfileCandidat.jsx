import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useUpdateCandidatMutation } from "../../../../redux/api/candidat/candidatApi";
import {
  InputContainer,
  StayledLabel,
  ButtonContainer,
  SubmitButton,
  CloseButton,
  HeaderTitle,
  ModalHeader,
  ModalContainer,
  ModalOverlay
} from "../Candidat/styled";
import { formConfig } from "../editProfil.constants";
import { useUpdateNameMutation } from "../../../../redux/api/api-chat-mongodb/api-chat-mongodbAPI";
import RichTextEditor from "components/RichTextEditor/RichTextEditor";
import PhoneInput from "components/PhoneInput/PhoneInput";
import { X, Save, MapPin, Briefcase, Phone, Globe, Code, Languages } from 'lucide-react';

const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const EditFormCandidateProfile = ({
  data,
  editModalOpen,
  onSaveChanges,
  onClose,
}) => {
  const methods = useForm();
  const [updateCandidate, { isLoading }] = useUpdateCandidatMutation();
  const [updateName] = useUpdateNameMutation();

  const [country_details, setCountryDetails] = useState("");
  const [job, setJob] = useState("");
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [charServiceCount, setCharServiceCount] = useState(0);
  const [services, setServices] = useState(data.services);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [countryCode, setCountryCode] = useState("+33"); // default country code
  const [phoneNumber, setPhoneNumber] = useState("");

  const maxChars = 200;

  useEffect(() => {
    if (data) {
      methods.reset({
        name: data.name,
        first_name: data.first_name,
        email: data.email,
        github: data.github || "",
        linkedin: data.linkedin || "",
        job: data.job,
        hourly_rate: data.hourly_rate,
        profile_description: data.profile_description || "",
        services: data.services ,
        telephone: data.telephone || "",
      });
      setLanguages(data.languages || []);
      setSkills(data.skills || []);
      setCountryDetails(data.country_details);
      setJob(data.job || "");
      setCharCount(data?.profile_description?.length || 0);
      setCharServiceCount(data?.services?.length || 0);
      const phoneParts = data.telephone ? data.telephone.split(" ") : ["", ""];
      setCountryCode(phoneParts[0]); // Assuming country code is stored in the format "+X"
      setPhoneNumber(phoneParts[1] || ""); // The actual number
    }
  }, [data, methods]);


  const getdefaultJob = (location) => {

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
 
  const getdefaultLocation = (location) => {

    const locationArray = [{
        title: location ,
        value: location ,
        label: location 
      }];
      return locationArray
  };

  const handleCountryDetailsChange = (selectedLocations) => {
    setCountryDetails(selectedLocations.value);
  };

  const handleServicesChange = (selectedLocations) => {
    setCharServiceCount(selectedLocations?.length);
    setServices(selectedLocations);
  };

  const handleJobChange = (selectedLocations) => {
    setJob(selectedLocations.value);
  };


  const handleSkillsChange = (selectedSkills) => {
    const valuesArray = selectedSkills.map((option) => option.value);
    setSkills(valuesArray);
  };
  

  const handleLanguagesChange = (selectedLanguages) => {
    const valuesArray = selectedLanguages.map((option) => option.value);
    setLanguages(valuesArray);
  };

  const onSubmit = async (formData) => {
  
    const updatedData = {
      ...formData,
      country_details,
      skills,
      languages,
      job,
      services,
      telephone: `${countryCode} ${phoneNumber}`,
    };

    try {
      const updatedCandidate = await updateCandidate({
        userId: data.id,
        candidatData: updatedData,
      }).unwrap();


      onSaveChanges(updatedCandidate);

      if(updatedData.name || updatedData.first_name ) {
        const chatname = updatedData.name  + " " + updatedData.first_name ;
        await updateName({_id: data.chatid , name : chatname});
      }

      window.location.reload();
      onClose();
    } catch (error) {
      console.error("Failed to update the candidate:", error);
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
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <HeaderTitle>Edit Profile</HeaderTitle>
          <CloseButton onClick={onClose}>
            <X className="h-5 w-5 text-gray-500" />
          </CloseButton>
        </ModalHeader>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                 <InputContainer>
                      <Form.Group
                        controlId={`formName`}
                      >
                        <StayledLabel>
                        <div style={{display: 'flex'}}> Votre Nom <div style={{ padding:'3px 5px' ,  fontSize: '10px' , color: 'gray'}}>  ou de votre agence </div></div>
                        </StayledLabel>
                        <Form.Control
                          type={"text"}
                          {...methods.register("name")}
                        />
                      </Form.Group>
                    </InputContainer>
                    <InputContainer>
                      <Form.Group
                        controlId={`formFirst_name`}
                      >
                        <StayledLabel>
                        <div style={{display: 'flex'}}>  First name <div style={{ padding:'3px 5px' , fontSize: '10px' , color: 'gray'}}> (laissez vide si vous êtes une agence) </div></div>
                        </StayledLabel>
                        <Form.Control
                          type={"text"}
                          {...methods.register("first_name")}
                        />
                      </Form.Group>
                    </InputContainer>

                    <InputContainer>
                      <Form.Group
                        controlId={`formEmail`}
                      >
                        <StayledLabel>
                          Email 
                        </StayledLabel>
                        <Form.Control
                          type={"email"}
                          {...methods.register("email")}
                          disabled={true} // Disable certain inputs
                        />
                      </Form.Group>
                    </InputContainer>


                 <InputContainer>
                  <Form.Group controlId="formJob">
                    <StayledLabel>Job</StayledLabel>
                    <GenericInput
                    inputObject={{
                      ... (data.type_candidat === 'AGENCY' ? formConfig.agence : formConfig.job),
                      label: "job",
                      defaultValue: getdefaultJob(data.job)
                    }}
                    onChange={handleJobChange}
                    disabledForm={false}
                  />
                  </Form.Group>
                </InputContainer>
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
              <InputContainer key={'hourly_rate'}>
                  <Form.Group
                    controlId={`formHourly_rate`}
                  >
                    <StayledLabel>
                    {data.type_candidat === 'AGENCY' ? "Standard Price Service" : "Hourly rate"}
                    </StayledLabel>

                    <Form.Control
                      type="number"
                      {...methods.register('hourly_rate', {
                        validate: {
                          isNumber: (value) => {
                              return (
                                (!isNaN(value) && Number(value) >= 0) ||
                                "Hourly rate must be a positive number"
                              );
                            return true;
                          },
                        },
                      })}
                    />
                    {methods.formState.errors['hourly_rate'] && (
                      <span style={{ color: "red" }}>
                        {methods.formState.errors['hourly_rate'].message}
                      </span>
                    )}
                  </Form.Group>
                </InputContainer>
                <InputContainer key={'linkedin'}>
                  <Form.Group
                    controlId={`formLinkedin`}
                  >
                    <StayledLabel>
                      {data.type_candidat === 'AGENCY' ? "Agency website" : "Linkedin"}
                    </StayledLabel>

                    <Form.Control
                      type="text"
                      {...methods.register('linkedin', {})}
                      placeholder={data.type_candidat === 'AGENCY' ? "Agency website" : "www.linkedin.com/in/yourprofile"}

                    />
                 </Form.Group>
                </InputContainer>
                
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
                  <Form.Group controlId="formSkills">
                    <StayledLabel>Skills</StayledLabel>
                    <GenericInput
                      inputObject={{
                        ...formConfig.skills,
                        label: "skills",
                        defaultValue: getdefaultSkills(data.skills)

                      }}
                      onChange={handleSkillsChange}
                      disabledForm={false}
                    />
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
              <Form.Group controlId="formCandidateDescription">
                <StayledLabel>About Me</StayledLabel>
                <Form.Control
                  rows={9}
                  {...methods.register("profile_description", {
                    onChange: handleChangeDesc, // Track character count
                  })}
                />
                <div
                  style={{
                    marginTop: "5px",
                    fontSize: "12px",
                    color: charCount >= maxChars ? "red" : "black",
                    textAlign: "right", // Align text to the right
                    width: "100%", // Ensure the div takes full width
                  }}
                >
                  {charCount}/{maxChars} characters
                </div>
               </Form.Group>
            </InputContainer>

          <InputContainer>
          <StayledLabel>Services offered</StayledLabel>
              <RichTextEditor
                height={"300px"}
                value={services}
                onChange={handleServicesChange} // Pass the validation and setter
              />
              <p
                style={{
                  color: charServiceCount > 600 ? "red" : "black",
                  fontSize: "small",
                  textAlign: "right",
                  marginTop: "50px",
                }}
              >
              Services description must be less than 600 characters. {charServiceCount}/600
              </p>
              </InputContainer>


            <ButtonContainer>
              <SubmitButton type="submit" disabled={isLoading || charServiceCount > 600 || charCount > 200 } >
                <Save className="h-4 w-4" />
                {isLoading ? "Saving..." : "Save Changes"}
              </SubmitButton>
            </ButtonContainer>

          </Form>
        </FormProvider>
        </ModalContainer>
    </ModalOverlay>
  );
};

export default EditFormCandidateProfile;
