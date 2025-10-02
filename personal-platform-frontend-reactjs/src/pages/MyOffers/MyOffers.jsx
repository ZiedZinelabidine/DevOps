import AddNewJob from "components/AddNewJob/AddNewJob";
import ModalShowMyOffre from "components/ModalITgalaxy/ModalShowMyOffre/ModalShowMyOffre";
import Pagination from "components/Paginations/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useGetAppelOffresQuery } from "../../redux/api/appeloffres/appeloffreApi";
import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { formConfig } from "./MyOffers.constants";
import { PlusCircle} from 'lucide-react'; // Import the MapPin icon from Lucide
import {
  AddNewJobButtonstyle,
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
  SearchIconInput,
  SearchInputContainer,
  StyleAllProjects,
  ViewLabelJobs,
  StyledHr,
  Wrapper,
} from "./styled";
import {
  getIsloggedFromLocalStorage,
  getTokenFromLocalStorage,
} from "core/helpers/storage";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode if it’s not imported yet
import { Helmet } from "react-helmet";
import SideBar from "components/SideBar/sideBar";

export default function MyOffers() {
  const formMethods = useForm({});
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const id = decodeToken ? decodeToken.id : null;
  const [selectedItem, setSelectedItem] = useState("");
  const [showModalAppeloffre, setShowModalAppeloffre] = useState(false);
  const [filterType, setFilterType] = useState("ACTIVE");
  const [title, setTitle] = useState("");
  const [addNewJob, setAddNewJob] = useState(false); // Fixed naming
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6000000);
  // Initialize appeloffresData as an empty array
  const [appeloffresData, setAppeloffresData] = useState([]);

  const handleChangeFilter = (e) => {
    setFilterType(e.target.value);
  };

  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      setTitle(e.target.value);
    }
  }, []);

  const params = `?page=${currentPage}&limit=${recordsPerPage}&recruterId=${id}${title ? `&title=${title}` : ""
    }`;

  // Fetch user projects with the updated filter and title
  const {
    data: appeloffreData,
    isLoading: appeloffresDataLoading,
    error: appeloffresDataError,
    refetch,
  } = useGetAppelOffresQuery(params);

  // Update appeloffresData when appeloffreData is available
  useEffect(() => {
    if (appeloffreData) {
      setAppeloffresData(appeloffreData.data);
    }
  }, [appeloffreData]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModalAppeloffre(true);
  };

  const handleAddNewJob = () => {
    setAddNewJob(true);
  };


  return (
    <>
      <Helmet>
        <title>Projets - ItGalaxy</title>
        <meta
          name="description"
          content="Découvrez et gérez vos offres d'emploi, projets et candidatures sur ItGalaxy."
        />
      </Helmet>
      <div style={{ display: "flex", overflowY: "hidden", overflowX: "hidden" }}>
        <SideBar
          path={"/myoffers"}
          isLoggedIn={true}
          role={'RECRUTER'}
          id={id}
          style={{ overflowY: "hidden" }}
        />

      {!addNewJob ? (
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
                </FormProvider>
                <AddNewJobButtonstyle variant="primary" onClick={handleAddNewJob}>
                <PlusCircle size={20} style={{ marginRight: '0.5rem' }} />  Partager une offre
                </AddNewJobButtonstyle>
              </SearchBar>
              <StyledHr />
              
              {appeloffresDataLoading ? (
                <CardContainers>
                  <Spinner />
                </CardContainers>
              ) : appeloffresDataError ? (
                <CardContainers>
                  <NotFoundTextStyle>
                    🚀 Error loading projects, please try again later! 🚀
                  </NotFoundTextStyle>
                </CardContainers>
              ) : (
                <>
                   {appeloffresData.length === 0 ? (
                    <CardContainers>
                      <NotFoundTextStyle>
                        No job was created ...
                      </NotFoundTextStyle>
                    </CardContainers>
                  ) : (
                    <>
                      <AllCard>
                        {appeloffresData.map((appeloffredata) => (
                          <CardProject
                            key={appeloffredata.id}
                            onClick={() => handleItemClick(appeloffredata)}
                          >
                            <StyleAllProjects>
                              <CardProjectTitle>
                                {appeloffredata && appeloffredata.title
                                  ? appeloffredata.title.length > 10
                                    ? appeloffredata.title.substring(0, 20) +
                                    "..."
                                    : appeloffredata.title
                                  : "No Title Available"}
                              </CardProjectTitle>
                              <DatePost>
                                <span
                                  style={{
                                    fontWeight: 700,
                                    color:
                                      appeloffredata.status === "CREATED"
                                        ? "orange"
                                        : appeloffredata.status === "VALIDATED"
                                          ? "var(--Success-Success200, rgba(21, 176, 151, 1))"
                                          : appeloffredata.status === "FINISHED"
                                            ? "green"
                                            : appeloffredata.status === "DECLINED"
                                              ? "red"
                                              : appeloffredata.status === "SUSPEND"
                                                ? "red"
                                                : "green", // fallback color
                                  }}
                                >
                                  Status: {appeloffredata.status}
                                </span>
                                <br />
                                <span>
                                  Crée:{" "}
                                  {appeloffredata.createdAt
                                    ? new Date(
                                      appeloffredata.createdAt
                                    ).toDateString()
                                    : "Date not available"}
                                </span>
                              </DatePost>
                            </StyleAllProjects>
                          </CardProject>
                        ))}
                      </AllCard>
                      <div className="col-lg-12 col-md-12 col-12 mt-4">
                        {appeloffreData?.pagination?.totalPages > 1 && (
                          <Pagination
                            nPages={appeloffreData.pagination.totalPages}
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
          setAddNewJob={setAddNewJob} />

      )}
      {selectedItem && (
        <ModalShowMyOffre
          offre={selectedItem}
          confirmShow={showModalAppeloffre}
          closeModal={setShowModalAppeloffre}
          refetch={refetch}
        />
      )}
      </div>
    </>
  );
}
