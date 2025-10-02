import ModalShowMyOffre from "components/ModalITgalaxy/ModalShowMyOffre/ModalShowMyOffre";
import Pagination from "components/Paginations/Pagination";
import { ChevronDown, ExternalLink, Search } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useGetProjectsQuery } from "../../redux/api/projects/projectApi";
import GenericInput from "components/Inputs/GenericInput/GenericInput";
import NewComposeyourTeam from "components/NewComposeyourTeam/NewComposeyourTeam";
import NewShareyourTasks from "components/NewShareyourTasks/NewShareyourTasks";
import { FormProvider, useForm } from "react-hook-form";
import ProposalsDash from "../ProposalsDash/ProposalsDash";
import { formConfig } from "./MyProjects.constants";
import {
  AddNewProjectButtonstyle,
  AllCard,
  ButtonContainer,
  CardContainers,
  CardProjects,
  CardProjectsTitle,
  ContainerWrapper,
  DashProposalDetails,
  DashProposals,
  DatePost,
  Dropdown,
  DropdownItem,
  ListingProjects,
  NotFoundTextStyle,
  ProjectLabelsContainer,
  SearchBar,
  SearchInputContainer,
  StyleAllProjects,
  ViewLabelProjects,
} from "./MyProjects.style";
import ModalShowChoiceCompany from "components/ModalITgalaxy/ModalShowChoiceCompany/ModalShowChoiceCompany";
import NewItGalaxyAService from "@components/NewItGalaxyAService/NewItGalaxyAService";

export default function MyProjects({ decodeToken, id }) {
  const queryParams = new URLSearchParams(window.location.search);
  const formMethods = useForm({});
  const [selectedItem, setSelectedItem] = useState("");
  const [showModalProject, setShowModalProject] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(60000000);
  const [projectsData, setProjectsData] = useState([]);
  const [title, setTitle] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [proposalDash, setProposalDash] = useState(false);
  const composeyourTeam = queryParams.get("composeyourTeam");
  const shareTasks = queryParams.get("shareTasks");
  const itgalaxyaservice = queryParams.get("itgalaxyaservice");
  const [newComposeyourTeam, setNewComposeyourTeam] = useState(composeyourTeam);
  const [newShareTasks, setNewShareTasks] = useState(shareTasks);
  const [newItgalaxyAService, setNewItgalaxyAService] = useState(itgalaxyaservice);
  const [showChoiceCompany, setShowChoiceCompany] = useState(false);
  const dropdownRef = useRef(null);

  

  useEffect(() => {
    if (composeyourTeam === true) {
      setNewComposeyourTeam(true);
    } else if (shareTasks === true) {
      setNewShareTasks(true);
    } else if (itgalaxyaservice === true) setNewItgalaxyAService(true);
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  const handleModalChoiceCompany = () => {
    setShowChoiceCompany(true);
  };

  const closeModalChoiceCompany = () => {
    setShowChoiceCompany(false);
  };

  const handleNewComposeyourteam = () => {
    setNewComposeyourTeam(true);
  };

  const handleNewShareTasks = () => {
    setNewShareTasks(true);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  };

  const params = `?page=${currentPage}&limit=${recordsPerPage}&entrepriseId=${id}${
    title ? `&title=${title}` : ""
  }`;

  // Fetch user projects with the updated filter and title
  const {
    data: projectData,
    isLoading: projectsDataLoading,
    error: projectsDataError,
    refetch,
  } = useGetProjectsQuery(params);

  // Update projectsData when projectData is available
  useEffect(() => {
    if (projectData) {
      setProjectsData(projectData.data);
    }
  }, [projectData]);

  // Automatically fetch on title change or after adding a new project
  useEffect(() => {
    refetch();
  }, [title, currentPage, recordsPerPage]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModalProject(true);
  };

  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      setTitle(e.target.value);
    }
  }, []);

  const handleItemProposalsClick = (item) => {
    setSelectedItem(item);
    setProposalDash(true);
    setShowModalProject(false);
  };

  return (
    <>
      <ContainerWrapper>
        {!proposalDash && !newComposeyourTeam &&  !newItgalaxyAService && !newShareTasks && (
          <ListingProjects>
            <SearchBar>
              <FormProvider {...formMethods}>
                <SearchInputContainer onKeyDown={handleChangeSearch}>
                  <GenericInput
                    inputObject={{
                      ...formConfig.title,
                      label: "title",
                      placeholder: "Search your project",
                    }}
                    disabledForm={false}
                  />
                </SearchInputContainer>
              </FormProvider>
              <AddNewProjectButtonstyle onClick={handleModalChoiceCompany}> Add New Project </AddNewProjectButtonstyle>
              {showChoiceCompany && (
                <ModalShowChoiceCompany
                  show={showChoiceCompany}
                  project={true}
                  onHide={closeModalChoiceCompany}
                />
              )}
            </SearchBar>

            {projectsDataLoading ? (
              <CardContainers>
                <Spinner />
              </CardContainers>
            ) : projectsDataError ? (
              <CardContainers>
                <NotFoundTextStyle>
                  Error loading projects, please try again later!
                </NotFoundTextStyle>
              </CardContainers>
            ) : (
              <>
                <ProjectLabelsContainer>
                  <ViewLabelProjects>Projects</ViewLabelProjects>
                </ProjectLabelsContainer>

                {projectsData.length === 0 ? (
                  <CardContainers>
                    <NotFoundTextStyle>
                      No project was created...
                    </NotFoundTextStyle>
                  </CardContainers>
                ) : (
                  <>
                    <AllCard>
                      {projectsData.map((projectData) => (
                        <CardProjects key={projectData.id} >
                          <StyleAllProjects>
                            <CardProjectsTitle>
                              {projectData.title.length > 30
                                ? `${projectData.title.substring(0, 30)}...`
                                : projectData.title}
                              <ButtonContainer>
                                <DashProposalDetails
                                  onClick={() => handleItemClick(projectData)}
                                >
                                  Project Details
                                </DashProposalDetails>
                                <DashProposals
                                  onClick={() =>
                                    handleItemProposalsClick(projectData)
                                  }
                                >
                                  Dashboard proposals{" "}
                                  <ExternalLink
                                    size={16}
                                    style={{ verticalAlign: "middle" }}
                                  />
                                </DashProposals>
                              </ButtonContainer>
                            </CardProjectsTitle>
                            <DatePost>
                              <span
                                style={{
                                  color:
                                    projectData.status === "ACTIVE"
                                      ? "orange"
                                      : projectData.status === "VALIDATED"
                                      ? "var(--Success-Success200, rgba(21, 176, 151, 1))"
                                      : projectData.status === "FINISHED"
                                      ? "green"
                                      : projectData.status === "INPROGRESS"
                                      ? "green"
                                      : projectData.status === "SUSPEND"
                                      ? "red"
                                      : "orange", // fallback color
                                }}
                              >
                                Status: {projectData.status}
                              </span>
                              <br />
                              Created:{" "}
                              {projectData.createdAt
                                ? new Date(projectData.createdAt).toDateString()
                                : "Date not available"}
                            </DatePost>
                          </StyleAllProjects>
                        </CardProjects>
                      ))}
                    </AllCard>

                    <div className="col-lg-12 col-md-12 col-12 mt-4">
                      {projectData?.pagination?.totalPages > 1 && (
                        <Pagination
                          nPages={projectData.pagination.totalPages}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                        />
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </ListingProjects>
        )}

        {proposalDash && !newComposeyourTeam && !newItgalaxyAService &&  !newShareTasks && (
          <ProposalsDash
            id={selectedItem.id}
            setProposalDash={setProposalDash}
            idEntreprise={id}
            role={"ENTREPRISE"}
          />
        )}

        {!proposalDash && newComposeyourTeam &&  !newItgalaxyAService && !newShareTasks && (
          <NewComposeyourTeam
            id={id}
            setNewComposeyourTeam={setNewComposeyourTeam}
          />
        )}

        {!proposalDash && !newComposeyourTeam && !newItgalaxyAService && newShareTasks && (
          <NewShareyourTasks id={id} setNewShareTasks={setNewShareTasks} />
        )}

      {!proposalDash && !newComposeyourTeam && !newShareTasks && newItgalaxyAService && (
          <NewItGalaxyAService id={id} setNewItgalaxyAService={setNewItgalaxyAService} />
        )}

      </ContainerWrapper>

      {selectedItem && (
        <ModalShowMyOffre
          offre={selectedItem}
          confirmShow={showModalProject}
          refetch={refetch}
          closeModal={setShowModalProject}
        />
      )}
    </>
  );
}
