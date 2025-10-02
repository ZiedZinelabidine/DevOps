import { FormProvider, useForm } from "react-hook-form";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import StyledRangeSlider from "../../Inputs/RangeSlider/RangeSlider";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalAdvancedSearchCandidates.constants";
import {
  AdvancedSearchButtonModalContainer,
  SearchContainer,
  SearchItem,
  SearchItemDailyRate,
  SearchTitleStyle,
  StayledLabel,
} from "./ModalAdvancedSearchCandidates.style";

const ModalAdvancedSearchCandidates = (props) => {
  const formMethods = useForm({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeDailyRate = (e, type) => {
    const value = Number(e.target.value);

    if (type === "min") {
      // Ensure the new minimum does not exceed the current maximum
      if (value < props.hour_rate_max) {
        props.setDailyRateMin(value);
        props.setFormData((prev) => ({ ...prev, hour_rate_min: value }));
      }
    } else if (type === "max") {
      // Ensure the new maximum does not fall below the current minimum
      if (value > props.hour_rate_min) {
        props.setDailyRateMax(value);
        props.setFormData((prev) => ({ ...prev, hour_rate_max: value }));
      }
    }
  };

  const handleChangeRisingStars = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      rising_star_global: selectedOptions.value || [],
    }));
  };

  const handleChangeSkills = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      skills: selectedOptions.map((option) => option.value) || [],
    }));
  };

  const handleChangeLocations = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      locations: selectedOptions.map((option) => option.value) || [],
    }));
  };

  const handleChangeLanguages = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      languages: selectedOptions.map((option) => option.value) || [],
    }));
  };

  const handleChangeJob = (e) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      jobs: e.map((option) => option.value),
    }));
  };

  return (
    <ModalComponent
      show={props.confirmShow}
      closeModal={props.closeModal}
      body={
        <FormProvider {...formMethods}>
          <SearchContainer>
            {!props.rate && (
              <SearchItemDailyRate>
                <StayledLabel>Hourly rate (EURO)</StayledLabel>
                <StyledRangeSlider
                  min={0}
                  max={1000}
                  hour_rate_min={props.hour_rate_min}
                  setDailyRateMax={props.setDailyRateMax}
                  hour_rate_max={props.hour_rate_max}
                  setDailyRateMin={props.setDailyRateMin}
                  handleChange={handleChangeDailyRate}
                  defaultValue={[props.minValue, props.maxValue]}
                />
              </SearchItemDailyRate>
            )}

            {!props.job && (
              <SearchItem>
                <SearchTitleStyle>Job</SearchTitleStyle>
                <div style={{ color: 'black'}}> 
                <GenericInput
                  inputObject={{
                    ...formConfig.jobs,
                    label: "jobs",
                  }}
                  onChange={(e) => handleChangeJob(e)}
                  disabledForm={false}
                />
                </div>
              </SearchItem>
            )}

            {!props.skill && (
              <SearchItem>
                <SearchTitleStyle>Skills</SearchTitleStyle>
                <div style={{ color: 'black'}}> 
                <GenericInput
                  inputObject={{
                    ...formConfig.skills,
                    label: "skills",
                  }}
                  onChange={(e) => handleChangeSkills(e)}
                  disabledForm={false}
                />
                </div>
              </SearchItem>
            )}

            <SearchItemDailyRate>
              <SearchTitleStyle>Rising stars global</SearchTitleStyle>
              <div style={{ color: 'black'}}> 
              <GenericInput
                inputObject={{
                  ...formConfig.rising_star_global,
                  label: "rising_star_global",
                }}
                onChange={(e) => handleChangeRisingStars(e)}
                disabledForm={false}
              />
             </div>
            </SearchItemDailyRate>

            {!props.country && (
              <SearchItem>
                <SearchTitleStyle>Locations</SearchTitleStyle>
                <div style={{ color: 'black'}}> 
                <GenericInput
                  inputObject={{
                    ...formConfig.locations,
                    label: "locations",
                  }}
                  onChange={(e) => handleChangeLocations(e)}
                  disabledForm={false}
                />
               </div>
              </SearchItem>
            )}

            {!props.language && (
              <SearchItem>
                <SearchTitleStyle>Languages</SearchTitleStyle>
                <div style={{ color: 'black'}}> 
                <GenericInput
                  inputObject={{
                    ...formConfig.languages,
                    label: "languages",
                  }}
                  onChange={(e) => handleChangeLanguages(e)}
                  disabledForm={false}
                />
                </div>
              </SearchItem>
            )}

            <SearchItem>
              <SearchTitleStyle>
                Tap some keywords that describe your search (use ';' to separate
                many keywords):
              </SearchTitleStyle>
              <div style={{ color: 'black'}}> 
              <GenericInput
                inputObject={{
                  ...formConfig.keywords,
                  label: "keywords",
                }}
                onChange={(e) => handleChange(e)}
                disabledForm={false}
              />
             </div>
            </SearchItem>
          </SearchContainer>
        </FormProvider>
      }
      footer={
        <AdvancedSearchButtonModalContainer onClick={props.handleSearchSubmit}>
          Submit
        </AdvancedSearchButtonModalContainer>
      }
      bodyPadding={"15px 10px 0px 10px"}
      minWidth={"56vw"}
      Height={"80vh"}
    />
  );
};

export default ModalAdvancedSearchCandidates;
