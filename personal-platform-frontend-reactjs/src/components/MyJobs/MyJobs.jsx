import ModalShowProposal from "components/ModalITgalaxy/ModalShowProposal/ModalShowProposal";
import Pagination from "components/Paginations/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useGetUserProjectsQuery } from "../../redux/api/candidat/candidatApi";
import GenericInput from "../Inputs/GenericInput/GenericInput";
import { formConfig } from "./MyJobs.constants";

import {
  AllCard,
  CardContainers,
  CardProject,
  CardProjectTitle,
  ContainerWrapper,
  DatePost,
  JobLabelsContainer,
  ListingJobs,
  NotFoundTextStyle,
  SearchBar,
  SearchFilter,
  StyledHr,
  SearchInputContainer,
  StyleAllProjects,
  ViewLabelJobs,
  ViewLabelMyJobs,
  Wrapper,
} from "./styled";

export default function MyJobs({ id, role, setAlljobs }) {
  const formMethods = useForm({});
  const [selectedItem, setSelectedItem] = useState("");
  const [showModalProposal, setShowModalProposal] = useState(false);
  const [filterType, setFilterType] = useState("ACTIVE");
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(60000000000);
  const [proposalsData, setProposalsData] = useState([]);

  // Function to update the filter type
  const handleChangeFilter = (e) => {
    setFilterType(e.target.value);
  };

  // Safely escape HTML to avoid XSS
  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // Function to update the title search field
  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      setTitle(e.target.value);
    }
  }, []);

  // Construct the params string with filterType and title
  const params = `page=${currentPage}&limit=${recordsPerPage}&statusProposals=${filterType}${
    title ? `&title=${title}` : ""
  }`;

  // Fetch user projects with the updated filter and title
  const {
    data: proposalData,
    isLoading: proposalsDataLoading,
    error: proposalsDataError,
  } = useGetUserProjectsQuery({ id, params });

  // Update proposalsData when proposalData is available
  useEffect(() => {
    if (proposalData) {
      setProposalsData(proposalData.data);
    }
  }, [proposalData]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModalProposal(true);
  };

  return (
    <>
      <Wrapper>
        <ContainerWrapper>
          <ListingJobs>
            <SearchBar>
              <FormProvider {...formMethods}>
                <SearchInputContainer onKeyDown={handleChangeSearch}>
                  <GenericInput
                    inputObject={{ ...formConfig.title, label: "title" }}
                    disabledForm={false}
                  />
                </SearchInputContainer>
                <SearchFilter>
                  <GenericInput
                    inputObject={{ ...formConfig.filter, label: "filter" }}
                    value={filterType} // Ensure controlled component
                    onChange={handleChangeFilter}
                    disabledForm={false}
                  />
                </SearchFilter>
              </FormProvider>
            </SearchBar>
             <StyledHr />
            
            {proposalsDataLoading ? (
              <CardContainers>
                <Spinner />
              </CardContainers>
            ) : proposalsDataError ? (
              <CardContainers>
                <NotFoundTextStyle>
                  Error loading projects, please try again later!
                </NotFoundTextStyle>
              </CardContainers>
            ) : (
              <>
                <JobLabelsContainer>
                  <ViewLabelMyJobs onClick={() => setAlljobs(true)}>
                    Tous les projets
                  </ViewLabelMyJobs>
                  <ViewLabelJobs>Mes projets</ViewLabelJobs>
                </JobLabelsContainer>
                {proposalsData.length === 0 ? (
                  <CardContainers>
                    <NotFoundTextStyle>
                      Aucun projet trouvé en cours ...
                    </NotFoundTextStyle>
                  </CardContainers>
                ) : (
                  <>
                    <AllCard>
                      {proposalsData.map((proposaldata) => (
                        <CardProject
                          key={proposaldata.project.id}
                        >
                          <StyleAllProjects>
                            <CardProjectTitle>
                              {proposaldata.project.title}
                            </CardProjectTitle>
                            <DatePost>
                              Project created:{" "}
                              {proposaldata.project.createdAt
                                ? new Date(
                                    proposaldata.project.createdAt
                                  ).toDateString()
                                : "Date not available"}
                            </DatePost>
                          </StyleAllProjects>
                        </CardProject>
                      ))}
                    </AllCard>
                    <div className="col-lg-12 col-md-12 col-12 mt-4">
                      {proposalData?.pagination?.totalPages > 1 && (
                        <Pagination
                          nPages={proposalData.pagination.totalPages}
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
      {selectedItem && (
        <ModalShowProposal
          proposal={selectedItem}
          confirmShow={showModalProposal}
          closeModal={setShowModalProposal}
        />
      )}
    </>
  );
}
