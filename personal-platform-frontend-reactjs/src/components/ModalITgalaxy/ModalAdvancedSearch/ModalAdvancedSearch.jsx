import {
  AdvancedSearchButtonModalContainer,
  SearchBar,
  SearchInputModalContainer,
} from "components/Jobs/styled";
import { FormProvider, useForm } from "react-hook-form";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./AdvancedSearch.constants";
import {
  SearchBarModalStyle,
  SearchColumnstyle,
  SearchTitleStyle,
  customStyles,
  customStylesSearchModal,
} from "./ModalAdvancedSearch.style";

const ModalAdvancedSearch = (props) => {
  const formMethods = useForm({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeFilterType = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      filterType: selectedOptions || [
        { value: "Contrats", label: "Contrats" },
        { value: "Projects", label: "Projects" },
      ],
    }));
  };

  const handleChangePostion = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      positions: selectedOptions || [],
    }));
  };

  const handleChangeSkills = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      skills: selectedOptions || [],
    }));
  };

  const handleChangeApplications = (e) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      applications: e.value,
    }));
  };

  const handleChangeLocations = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      location: selectedOptions || [],
    }));
  };

  const handleChangeLanguages = (selectedOptions) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      languages: selectedOptions || [],
    }));
  };

  const handleChangeCreatedat = (e) => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      createdat: e.value,
    }));
  };

  const RenderBodyModalAdvancedSearch = (
    <FormProvider {...formMethods}>
      <SearchBarModalStyle>
        {!props.hideCategory && (
          <SearchColumnstyle>
            <SearchTitleStyle>Projets Category</SearchTitleStyle>
            <SearchInputModalContainer>
              <GenericInput
                inputObject={{
                  ...formConfig.position,
                  label: "position",
                }}
                styles={customStylesSearchModal}
                onChange={(e) => handleChangePostion(e)}
                disabledForm={false}
              />
            </SearchInputModalContainer>
          </SearchColumnstyle>
        )}
        {!props.hideApplications && (
          <SearchColumnstyle>
            <SearchTitleStyle>Nombre de demandes</SearchTitleStyle>
            <SearchInputModalContainer>
              <GenericInput
                inputObject={{
                  ...formConfig.nbr_applications,
                  label: "nbr_applications",
                }}
                styles={customStylesSearchModal}
                onChange={(e) => handleChangeApplications(e)}
                disabledForm={false}
              />
            </SearchInputModalContainer>
          </SearchColumnstyle>
        )}
      </SearchBarModalStyle>
      <SearchBarModalStyle>
        <SearchColumnstyle>
          {!props.hideSkills && (
            <>
              <SearchTitleStyle>Skills</SearchTitleStyle>
              <SearchInputModalContainer>
                <GenericInput
                  inputObject={{
                    ...formConfig.skills,
                    label: "skills",
                  }}
                  styles={customStylesSearchModal}
                  onChange={(e) => handleChangeSkills(e)}
                  disabledForm={false}
                />
              </SearchInputModalContainer>
            </>
          )}
        </SearchColumnstyle>
        <SearchColumnstyle>
            <>
              <SearchTitleStyle>Localisations</SearchTitleStyle>
              <SearchInputModalContainer>
                <GenericInput
                  inputObject={{
                    ...formConfig.locations,
                    label: "locations",
                  }}
                  styles={customStylesSearchModal}
                  onChange={(e) => handleChangeLocations(e)}
                  disabledForm={false}
                />
              </SearchInputModalContainer>
            </>
        </SearchColumnstyle>
      </SearchBarModalStyle>
      <SearchBarModalStyle>
        <SearchColumnstyle>
          {!props.hideLanguages && (
            <>
              <SearchTitleStyle>Languages</SearchTitleStyle>
              <SearchInputModalContainer>
                <GenericInput
                  inputObject={{
                    ...formConfig.languages,
                    label: "languages",
                  }}
                  styles={customStylesSearchModal}
                  onChange={(e) => handleChangeLanguages(e)}
                  disabledForm={false}
                />
              </SearchInputModalContainer>
            </>
          )}
        </SearchColumnstyle>
        <SearchColumnstyle>
          <SearchTitleStyle>Crée</SearchTitleStyle>
          <SearchInputModalContainer>
            <GenericInput
              inputObject={{
                ...formConfig.CreatedAt,
                label: "CreatedAt",
              }}
              styles={customStylesSearchModal}
              onChange={(e) => handleChangeCreatedat(e)}
              disabledForm={false}
            />
          </SearchInputModalContainer>
        </SearchColumnstyle>
      </SearchBarModalStyle>
      <SearchColumnstyle>
        <SearchTitleStyle>
        Tapper quelques mots clés qui décrivent votre recherche (utilisez « ; » pour séparer plusieurs mots clés) :
        </SearchTitleStyle>
        <div style={{ paddingTop : '10px'}}>
        <GenericInput
          inputObject={{
            ...formConfig.keywords,
            label: "keywords",
          }}
          onChange={(e) => handleChange(e)}
          disabledForm={false}
        />
        </div>
      </SearchColumnstyle>
    </FormProvider>
  );

  const RenderFooter = (
    <>
      <AdvancedSearchButtonModalContainer onClick={props.handleSearchSubmit}>
        Confirmé{" "}
      </AdvancedSearchButtonModalContainer>
    </>
  );


  return (
    <ModalComponent
      show={props.confirmShow}
      closeModal={props.closeModal}
      body={RenderBodyModalAdvancedSearch}
      footer={RenderFooter}
      bodyPadding={"15px 10px 0px 10px"}
      minWidth={"52vw"}
      Height={"70vh"}
    />
  );
};

export default ModalAdvancedSearch;
