import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { BackButton } from "components/NewComposeyourTeam/NewComposeyourTeam.style";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useUpdateAccountingMutation } from "../../../../redux/api/accounting/accountingApi";
import {
  InputContainer,
  StayledLabel,
  StyledSubmitEditProfileButton,
} from "../Accounting/styled";
import { formConfig } from "../editProfil.constants";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const EditFormAccountingeProfile = ({
  data,
  editModalOpen,
  onSaveChanges,
  onClose,
}) => {
  const methods = useForm();
  const [updateAccountinge, { isLoading }] = useUpdateAccountingMutation();

  const [country_details, setCountryDetails] = useState();
  const [languages, setLanguages] = useState([]);
  const [charCount, setCharCount] = useState(0);

  const maxChars = 200;

  useEffect(() => {
    if (data) {
      methods.reset({
        name: data.name,
        first_name: data.first_name,
        email: data.email,
        profile_description: data.profile_description,
        website: data.website || "", // Fallback for null
      });
      setCountryDetails(data.country_details);
      setLanguages(data.languages || []);
      setCharCount(data?.profile_description?.length || 0);
    }
  }, [data, methods]);

  const handleCountryDetailsChange = (selectedLocations) => {
    setCountryDetails(selectedLocations.value);
  };

  const handleLanguagesChange = (selectedLanguages) => {
    const valuesArray = selectedLanguages.map((option) => option.value);
    setLanguages((prevLanguages) => [...prevLanguages, ...valuesArray]);
  };

  const onSubmit = async (formData) => {
    const updatedData = {
      ...formData,
      country_details,
      languages,
    };

    try {
      const updatedAccountinge = await updateAccountinge({
        accountingId: data.id,
        accountingData: updatedData,
      }).unwrap();
      onSaveChanges(updatedAccountinge);
      onClose();
    } catch (error) {
      console.error("Failed to update the accounting:", error);
    }
  };

  const handleChangeDesc = (event) => {
    const { value } = event.target;
    setCharCount(value.length);
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
                {["name", "first_name", "email"].map((field) => {
                  const isDisabled =
                    field === "name" ||
                    field === "first_name" ||
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
              </Col>
              <Col md={6}>
                <InputContainer>
                  <StayledLabel>Location</StayledLabel>
                  <GenericInput
                    inputObject={{
                      ...formConfig.country_details,
                      label: "country_details",
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
                      }}
                      onChange={handleLanguagesChange}
                      disabledForm={false}
                    />
                  </Form.Group>
                </InputContainer>

                <InputContainer>
                  <Form.Group controlId="formWebsite">
                    <StayledLabel>WEBSITE OR LINKEDIN</StayledLabel>
                    <Form.Control
                      type="website" // Set the correct input type
                      placeholder="https://yourprofile.com"
                      {...methods.register("website", {
                        validate: {
                          isUrl: (value) => {
                            // Allow empty values
                            if (value === "") return true;
                            return (
                              /(https?:\/\/[^\s]+)/.test(value) ||
                              "Please enter a valid URL"
                            );
                          },
                        },
                      })}
                    />
                    {methods.formState.errors.website && (
                      <span style={{ color: "red" }}>
                        {methods.formState.errors.website.message}
                      </span>
                    )}
                  </Form.Group>
                </InputContainer>
              </Col>
            </Row>

            <InputContainer>
              <Form.Group controlId="formAccountingeDescription">
                <StayledLabel>About Me</StayledLabel>
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

export default EditFormAccountingeProfile;
