import DisplayRawHtml from "components/DisplayRawHtml/DisplayRawHtml";
import ModalAdvancedSearch from "components/ModalITgalaxy/ModalAdvancedSearch/ModalAdvancedSearch";
import ModalApply from "components/ModalITgalaxy/ModalApply/ModalApply";
import Pagination from "components/Paginations/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap"; // Add Alert for error notifications
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { categoryData } from "../../data/categoryData";
import { countriesData } from "../../data/countriesData";
import { languagesData } from "../../data/languagesData";
import { skillsData } from "../../data/skillData";
import { useGetJobsQuery } from "../../redux/api/jobs/JobsApi";
import GenericInput from "../Inputs/GenericInput/GenericInput";
import { formConfig } from "./AllContracts.constants";
import { useGetAppelOffresbyuseridQuery } from "../../redux/api/appeloffres/appeloffreApi";
import { useGetUserAllTasksProjectsQuery } from "../../redux/api/candidat/candidatApi";
import AddNewJob from "../AddNewJob/AddNewJob";
import { PlusCircle, MapPin } from 'lucide-react';
import {
  AdvancedSearchButtonContainer,
  AllTags,
  BackButton,
  Bloc,
  Bloc2,
  BlocTitle,
  Budget,
  BudgetWrapper,
  CardContainers,
  CardJob,
  CardJobs,
  ContainerWrapper,
  DatePost,
  DescriptionJob,
  ListingJobs,
  NewJobButtonContainer,
  NotFoundTextStyle,
  SearchBar,
  SearchInputContainer,
  StyleI,
  Tag,
  TitleJob,
  ViewLabelJobs,
  StyledHr,
  Wrapper
} from "./styled";
import Header from "components/Header/Header";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

export default function AllContracts({ id, role, setAlljobs }) {
  const navigate = useNavigate();
  const { category, min, max, skill, language } = useParams();
  const [showModalAdvancedSearch, setShowModalAdvancedSearch] = useState(false);
  const [showModalApply, setShowModalApply] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2000000);
  const [filterType, setFilterType] = useState("Contrats");
  const [jobsData, setJobsData] = useState();
  const [addNewJob, setAddNewJob] = useState(false);
  const formMethods = useForm({});
  const location = useLocation();


  // Validate parameters and set initial form data
  useEffect(() => {
    let shouldRedirect = false;
    let newFormData = { ...formData };
    let queryParams;

    if (category) {
      const formattedCategory = category.replace(/-/g, ' ').toUpperCase();
      const validCategory = categoryData.find(
        c => c.value === formattedCategory
      );

      if (validCategory) {
        newFormData.positions = [{ value: validCategory.value, label: validCategory.label }];
        queryParams += `&category=${category}`;
        setSearchQuery(queryParams);
      } else {
        shouldRedirect = true;
      }
    }

    if (min !== undefined && max !== undefined) {
      const minValue = parseInt(min);
      const maxValue = parseInt(max);

      if (!isNaN(minValue) && !isNaN(maxValue)) {
        const validOptions = [10, 20, 30];
        if (minValue === 0 && validOptions.includes(maxValue)) {
          newFormData.applications = maxValue;
        } else {
          shouldRedirect = true;
        }
      } else {
        shouldRedirect = true;
      }
    }

    if (skill) {
      const formattedSkill = skill.replace(/-/g, ' ');
      const validSkill = skillsData.find(
        s => s.title.toLowerCase() === formattedSkill.toLowerCase()
      );

      if (validSkill) {
        newFormData.skills = [{ value: validSkill.title, label: validSkill.title }];
        queryParams += `&skills=${skill}`;
        setSearchQuery(queryParams);
      } else {
        shouldRedirect = true;
      }
    }

     if (language) {
      const formattedLanguage = language.replace(/-/g, ' ');
      const validLanguage = languagesData.find(
        l => l.title.toLowerCase() === formattedLanguage.toLowerCase()
      );

      if (validLanguage) {
        newFormData.languages = [{ value: validLanguage.title, label: validLanguage.title }];
      } else {
        shouldRedirect = true;
      }
    }

    if (shouldRedirect) {
      navigate('/search/contrats');
    } else {
      setFormData(newFormData);
    }
  }, [category, min, max, skill, location, language, navigate]);

  const [formData, setFormData] = useState({
    filterType: ['Contrats'],
    positions: [],
    applications: "",
    skills: [],
    location: [],
    languages: [],
    createdAt: "",
    keywords: "",
  });

  // Fetch jobs data
  const {
    data: jobData,
    error: jobsDataError,
    isLoading: jobsDataLoading,
    refetch,
  } = useGetJobsQuery({
    filterType: "Contrats",
    params: `?page=${currentPage}&limit=${recordsPerPage}${searchQuery}`,
  });

  // Fetch proposal data
  const { data: proposalAOData = {} } = useGetAppelOffresbyuseridQuery({
    filterType: role,
    params: `&proposalAppelOffreApplierId=${id}`,
  }, {
    skip: !id,
  });

  const proposalAOArray = [];

  const { data: proposalArray = [] } = useGetUserAllTasksProjectsQuery({
    id: id,
    params: `&userType=CANDIDAT`
  },{
    skip: !id,
  });

  const closeAddNewJob = () => {
    setAddNewJob(false);
  };

  const handleChangeFilter = (e) => {
    setFilterType(e?.target?.value);
  };

  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionLimit = 80;

  const handelMyJobs = () => {
    setAlljobs(false);
  };

  const handleShowModalAdvancedSearch = () => {
    setShowModalAdvancedSearch(!showModalAdvancedSearch);
  };

  const handleAddNewJob = () => {
    setAddNewJob(true);
  };

  const handleShowModalApply = () => {
    setShowModalApply(!showModalApply);
    setSelectedItem(null); // Reset selected item when closing modal
  };

  useEffect(() => {
    if (!jobsDataLoading && jobData) {
      setJobsData(jobData);
    }
  }, [jobData, jobsDataLoading, currentPage, searchQuery]);

  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      const queryParams = e.target.value
        ? `&description=${e.target.value}`
        : "";
      setSearchQuery(queryParams);
    }
  }, []);

  const handleSearchSubmit = (e) => {
    let queryParams = "";

    // Set filter type based on formData
    if (formData.filterType.length === 0 || formData.filterType.length === 2) {
      setFilterType("Contrats");
    } else {
      setFilterType(formData.filterType[0].value);
    }

    // Collect search filters from formData
    const paramsMap = {
      positions: "category",
      skills: "skills",
      location: "location",
      languages: "languages",
    };

    Object.keys(paramsMap).forEach((key) => {
      if (formData[key].length > 0) {
        const arrayValue = formData[key].map((item) => item.value).join(",");
        queryParams += `&${paramsMap[key]}=${arrayValue}`;
      }
    });

    // Add other filters
    if (formData.applications) {
      queryParams += `&applications=${formData.applications}`;
    }

    if (formData.createdAt) {
      queryParams += `&createdAt=${formData.createdAt}`;
    }

    if (formData.keywords) {
      queryParams += `&keywords=${formData.keywords}`;
    }

    setSearchQuery(queryParams);
    setShowModalAdvancedSearch(false);
  };


  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModalApply(true);
  };

  return (
    <>
      {location.pathname.startsWith('/search/contrats') && ( <Header active={"FREELANCERS"} /> )}
      {!addNewJob ? (
        <Wrapper>
          <ContainerWrapper>
            <ListingJobs>
              <SearchBar>
                <FormProvider {...formMethods}>
                  <SearchInputContainer onKeyDown={handleChangeSearch}>
                    <GenericInput
                      inputObject={{ ...formConfig.search, label: "search" }}
                      disabledForm={false}
                    />
                  </SearchInputContainer>
                </FormProvider>
                <AdvancedSearchButtonContainer
                  onClick={handleShowModalAdvancedSearch}
                  variant="secondary"
                >
                  Recherche avancée
                </AdvancedSearchButtonContainer>
                {(role === 'ENTREPRISE' || role === 'RECRUTER') && (
                  <AdvancedSearchButtonContainer variant="primary" onClick={handleAddNewJob}>
                    <PlusCircle size={20} style={{ marginRight: '0.5rem' }} /> Partager une offre
                  </AdvancedSearchButtonContainer>)}

                {showModalAdvancedSearch && (
                  <ModalAdvancedSearch
                    confirmShow={showModalAdvancedSearch}
                    closeModal={handleShowModalAdvancedSearch}
                    setFormData={setFormData}
                    handleSearchSubmit={handleSearchSubmit}
                    hideCategory={!!category}
                    hideApplications={!!(min && max)}
                    hideSkills={!!skill}
                    hideLocations={!!location}
                    hideLanguages={!!language}
                  />
                )}
              </SearchBar>
               <StyledHr />
             
              {jobsDataLoading ? (
                <CardContainers>
                  <Spinner animation="border" />
                </CardContainers>
              ) : jobsDataError ? (
                // Handling error display
                <CardContainers>
                  <Alert variant="danger">
                    There was an error fetching jobs. Please try again later.
                  </Alert>
                </CardContainers>
              ) : (
                <>
                 {jobsData && jobsData.data.length === 0 ? (
                    <CardContainers>
                      <NotFoundTextStyle>
                        Please change the criteria to find more Jobs ...
                      </NotFoundTextStyle>
                    </CardContainers>
                  ) : (
                    <>
                      <CardJobs>
                        {jobsData?.data.map((item) => (
                          <CardJob
                            key={item.id + item.type}
                            onClick={() => handleItemClick(item)}
                            canApply={
                              (item.type === "Contrat" &&
                                proposalAOArray.includes(item.id)) ||
                              (item.type === "SHARETASK" &&
                                proposalArray.includes(item.id)) ||
                              (item.type === "Contrat" &&
                                id === item?.recruter?.publierid)
                            }
                          >
                            <BlocTitle>
                              <TitleJob>{item.title}</TitleJob>
                              </BlocTitle>

                            <DescriptionJob>
                              <DisplayRawHtml
                                content={
                                  showFullDescription
                                    ? item?.description
                                    : item?.description?.substring(
                                      0,
                                      descriptionLimit
                                    ) + "..."
                                }
                              />
                            </DescriptionJob>

                            <AllTags>
                              {item.skills.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                              ))}
                            </AllTags>

                            <Bloc>
                              <Bloc2>
                                <DatePost>
                                Propositions:{" "}
                                  {item.proposal_count ||
                                    (item.appeloffreProposals &&
                                      item.appeloffreProposals.length) ||
                                    (item.proposals && item.proposals.length) ||
                                    0}
                                </DatePost>
                                <DatePost>
                                  Publié:{" "}
                                  {item.createdAt
                                    ? new Date(item.createdAt).toDateString()
                                    : new Date(item.createdat).toDateString()}
                                </DatePost>
                                <StyleI>
                                  <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}                                  {item.location}
                                </StyleI>
                              </Bloc2>
                            </Bloc>
                          </CardJob>
                        ))}
                      </CardJobs>
                      <div className="col-lg-12 col-md-12 col-12 mt-4">
                        {jobsData?.pagination?.totalPages > 1 && (
                          <Pagination
                            nPages={jobsData.pagination.totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                          />
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </ListingJobs>
          </ContainerWrapper>
        </Wrapper>
      ) : (
        <AddNewJob
                id={id}
                refetch={refetch}
                setAddNewJob={setAddNewJob}
              />
      )}
      {selectedItem && (
        <ModalApply
          job={selectedItem}
          methods={formMethods}
          confirmShow={showModalApply}
          closeModal={handleShowModalApply}
          canApply={
            (selectedItem.type === "Contrat" &&
              proposalAOArray.includes(selectedItem.id)) ||
            (selectedItem.type === "SHARETASK" &&
              proposalArray.includes(selectedItem.id))
          }
          myOffer={
            selectedItem.type === "Contrat" &&
            id === selectedItem?.recruter?.publierid
          }
        />
      )}
    </>
  );
}
