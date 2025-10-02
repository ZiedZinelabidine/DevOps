import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import ModalAdvancedSearchCandidates from "components/ModalITgalaxy/ModalAdvancedSearchCandidates/ModalAdvancedSearchCandidates";
import ModalComponent from "components/ModalITgalaxy/ModalComponent";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Pagination from "../../../components/Paginations/Pagination";
import { categoryData } from "../../../data/categoryData";
import { countriesData } from "../../../data/countriesData";
import { languagesData } from "../../../data/languagesData";
import { skillsData } from "../../../data/skillData";
import { useGetCandidatsQuery } from "../../../redux/api/candidat/candidatApi";
import { DeleteProposalToProposalsEntrepriseCreation } from "../../../redux/slice/propsoalEntrepriseCreationSlice/proposalEntrepriseCreationSlice";
import ModalProposalEntreprise from "../../ModalITgalaxy/ModalProposalEntreprise/ModalProposalEntreprise";
import ValidationEntrepriseProposal from "../../ValidationEntrepriseProposal/ValidationEntrepriseProposal";
import ViewCandidatProfil from "../Profils/Candidat/ViewCandidatProfil";
import Card from "./card";
import {
  AddProposalContainer,
  AdvancedSearchButtonContainer,
  AdvancedSearchButtonContainerResetFilter,
  BackButton,
  CardContainers,
  ContainerProfileSelected,
  DeleteProfileSelected,
  ProfilAvatarContainer,
  ProfilContainerButton,
  ProfilContainerContainer,
  ProfilContainerOfContainers,
  ProfilSelectContainer,
  ProfilSelectionnerText,
  SearchBar,
  SearchButtonContainer,
  SearchContainer,
  SearchInput,
  SearchInputContainer,
  SecondContainer,
  StyledButtonProfilContainerButton,
  StyledCandidatesCardsContainer,
  StyledIConRemove,
  SubmitButtonContainer,
  NotFoundTextStyle
} from "./styled";
import Header from "components/Header/Header";
import Register from "components/Authentification/modals/register";
import { Helmet } from "react-helmet";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;
const etoile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Star.png`;
const removeIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/removeRed.png`;

export default function Profilfreelances(props) {
  const { country, job, skill, language, min, max } = useParams();

  const proposalsData = useSelector(
    (state) => state.proposalEntrepriseCreation.proposals
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [proposals, setProposals] = useState(proposalsData);
  const maxProfiles = 5;
  const remainingSlots = maxProfiles - proposals.length;
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalValidation, setShowModalValidation] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterSearch, setFilterSearch] = useState("");
  const [showModalAdvancedSearch, setShowModalAdvancedSearch] = useState(false);
  const [recordsPerPage] = useState(50);
  const [showModalProposal, setShowModalProposal] = useState(false);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const [hour_rate_min, setDailyRateMin] = useState(0);
  const [hour_rate_max, setDailyRateMax] = useState(1000);
  const [showModalRegister, setModalRegister] = useState(false);
  const [hp, setHp] = useState(false);


  const location = useLocation();
  const [formData, setFormData] = useState({
    jobs: [],
    locations: [],
    languages: [],
    skills: [],
    rising_star_global: "",
    hour_rate_max: 10000,
    hour_rate_min: 0,
  });

  useEffect(() => {
    if (location.pathname.startsWith('/search/prestataires')) {
      setHp(true);
    }
  }, []);


  const {
    data: candidatsData,
    error: candidatDataError,
    isLoading: candidatDataLoading,
    refetch,
  } = useGetCandidatsQuery(
    `?page=${currentPage}&limit=${recordsPerPage}&status=ACTIVE${filterSearch}${searchQuery}`
  );

  const handelbacktoProjectList = () => {
    if (location.pathname.startsWith('/search/prestataires')) {

    } else {
      props.setCandidatesProfils(false);
    }
  };

  useEffect(() => {
    setProposals(proposalsData);
  }, [proposalsData]);

  useEffect(() => {
    let newFormData = { ...formData };
    let shouldRedirect = false;
    let queryParams = "";

    if (country) {

      const formattedCountryName = country.replace(/-/g, ' ');

      const validCountry = countriesData.find(
        c => c.title.toLowerCase() === formattedCountryName.toLowerCase()
      );

      if (validCountry) {
        newFormData.locations = [validCountry.title];
        queryParams += `&country_details=${newFormData.locations}`;

        setFilterSearch(queryParams);

      } else {
        shouldRedirect = true;
      }
    }

    if (job) {
      const formattedJob = job.replace(/-/g, ' ');
      const validJob = categoryData.find(
        j => j.value.toLowerCase() === formattedJob.toLowerCase()
      );

      if (validJob) {
        newFormData.jobs = [validJob.value];
        queryParams += `&job=${newFormData.jobs}`;
        setFilterSearch(queryParams);

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
        newFormData.skills = [validSkill.title];
        queryParams += `&skills=${newFormData.skills}`;
        setFilterSearch(queryParams);

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
        newFormData.languages = [validLanguage.title];
        queryParams += `&languages=${newFormData.languages}`;
        setFilterSearch(queryParams);
      } else {
        shouldRedirect = true;
      }
    }

    if (max) {
      const maxRate = parseInt(max);
      if (!isNaN(maxRate) && maxRate <= 1000) {
        newFormData.hour_rate_max = maxRate;
        queryParams += `&hour_rate_max=${newFormData.hour_rate_max}`;
        setFilterSearch(queryParams);
      } else {
        shouldRedirect = true;
      }
    }
    if (shouldRedirect) {
      navigate('/search/prestataires');
    } else {
      setFormData(newFormData);
    }
  }, [country, job, skill, language, min, max, navigate]);

  const deleteItem = (index, proposals) => {
    dispatch(DeleteProposalToProposalsEntrepriseCreation({ index, proposals }));
  };

  const handelChangeSearch = useCallback((e) => {

    if (e.key === "Enter") {
      const queryParams = e.target.value ? `&search=${e.target.value}` : "";
      setSearchQuery(queryParams);
    }
  }, []);

  const validationSelection = async () => {
    setShowModalValidation(true);
  };

  const closeValidationSelection = async () => {
    setShowModalValidation(false);
  };

  const handleConnecter = (item) => {
    if (location.pathname.startsWith('/search/prestataires')) {
      window.location.href = `/freelance?type=recruiter&token=${item.display}`
    } else {
      setSelectedItem(item);
      setShowModal(true);
    }
  };

  const handleModalRegister = () => {
    setModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  };

  const handleShowModalAdvancedSearch = () => {
    setShowModalAdvancedSearch(!showModalAdvancedSearch);
  };

  const handelModalProposal = () => {
    if (location.pathname.startsWith('/search/prestataires')) {
      setShowModal(false);
      handleModalRegister();
    } else {
      setShowModalProposal(true);
      setShowModal(false);
    }
  };

  const closeModalProposal = () => {
    setShowModalProposal(false);
  };

  const handleSearchSubmit = () => {
    let queryParams = "";

    if (formData.jobs.length > 0) {
      queryParams += `&job=${formData.jobs}`;
    }

    if (formData.skills.length > 0) {
      queryParams += `&skills=${formData.skills}`;
    }

    if (formData.locations.length > 0) {

      queryParams += `&country_details=${formData.locations}`;

    }

    if (formData.languages.length > 0) {
      queryParams += `&languages=${formData.languages}`;
    }

    if (formData.hour_rate_max) {
      queryParams += `&hour_rate_max=${formData.hour_rate_max}`;
    }

    if (formData.hour_rate_min) {
      queryParams += `&hour_rate_min=${formData.hour_rate_min}`;
    }

    if (formData.rising_star_global) {
      queryParams += `&rising_star_global=${formData.rising_star_global}`;
    }

    if (formData.keywords) {
      queryParams += `&keywords=${formData.keywords}`;
    }
    setFilterSearch(queryParams);
    setShowModalAdvancedSearch(false);
  };

  const handelResetFilter = () => {
    setFilterSearch("");
    setSearchQuery("");
    refetch();
  };

  const getLabelByValue = (value) => {
    const category = categoryData.find(item => item.value === value);
    return category ? category.title : null; // returns null if value not found
  };

  const Renderfooter = (
    <AddProposalContainer onClick={handelModalProposal}>
      {" "}
      Create a proposal
    </AddProposalContainer>
  );

  return (
    <div style={{ background: '#202124' }}>
      {!location.pathname.startsWith('/search/prestataires') ? (
        <BackButton onClick={handelbacktoProjectList}>  <img src={Vector} style={{ width: "0.83vw" }} alt="vector" /> </BackButton>) : (
        <>
          <Header active={"FREELANCERS"} />

          {job && (
              <Helmet>
                <title> {`Trouvez des ${getLabelByValue(job)} Freelances | ItGalaxy.io `} </title>
                <meta name="description" content={`ItGalaxy regroupe les meilleurs ${job} Freelances `} />
                <meta name="keywords" content="recrutement freelance, recruter un freelance, freelance recrutement, agence informatique, agence de developpement web, agence developpement mobile, agence developpement application, agence developpement applications mobiles, agence developpement web, agence france developpement, agence francaise pour le developpement, agence developpement web paris, freelance web, developpeur freelance, freelance application, webmaster freelance, application freelance, site internet freelance, web designer freelance, recherche freelance, web développeur freelance, freelance agence, freelance mission informatique, dev freelance, contrat de freelance, freelance developpeur, freelance developpeur web, web developpeur freelance, developpeur en freelance, developpeur freelance malt, developpeur junior freelance, prix developpeur freelance, développeur web freelance" />
                <link rel="canonical" href={`https://itgalaxy.io/search/prestataires/job/${job}`} />
                <meta property="og:title" content="Plateforme Freelance Web | Recrutement de Développeurs et Agences" />
                <meta property="og:description" content="Trouvez des freelances qualifiés et des agences pour la création de sites internet et le développement web." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={``} />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:site_name" content="ItGalaxy.io" />
                <link rel="alternate" hreflang="fr" href={`https://itgalaxy.io/search/prestataires/job/${job}`} />
                <link rel="alternate" hreflang="en" href={`https://itgalaxy.io/search/prestataires/job/${job}`} />
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Plateforme Freelance Web",
                    "provider": {
                      "@type": "Organization",
                      "name": "ItGalaxy",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Paris",
                        "addressRegion": "Île-de-France",
                        "addressCountry": "FR"
                      }
                    },
                    "description": "Recrutement de freelances web et d'agences de développement pour des projets de sites internet.",
                    "areaServed": ["France", "Paris", "Lyon", "Marseille"],
                    "serviceType": ["Recrutement Freelance", "Développement Web", "Création de Sites Internet"],
                  })}
                </script>
              </Helmet>

          )}


          {skill && (
              <Helmet>
                  <title> {`Trouvez des Freelances expert en ${skill}  | Freelance | ItGalaxy.io `} </title>
                  <meta name="description" content={`ItGalaxy regroupe les expert en ${skill}  Freelances `} />
                  <meta name="keywords" content="recrutement freelance, recruter un freelance, freelance recrutement, agence informatique, agence de developpement web, agence developpement mobile, agence developpement application, agence developpement applications mobiles, agence developpement web, agence france developpement, agence francaise pour le developpement, agence developpement web paris, freelance web, developpeur freelance, freelance application, webmaster freelance, application freelance, site internet freelance, web designer freelance, recherche freelance, web développeur freelance, freelance agence, freelance mission informatique, dev freelance, contrat de freelance, freelance developpeur, freelance developpeur web, web developpeur freelance, developpeur en freelance, developpeur freelance malt, developpeur junior freelance, prix developpeur freelance, développeur web freelance" />
                  <link rel="canonical" href={`https://itgalaxy.io/search/prestataires/skill/${job}`} />
                  <meta property="og:title" content="Plateforme Freelance Web | Recrutement de Développeurs et Agences" />
                  <meta property="og:description" content="Trouvez des freelances qualifiés et des agences pour la création de sites internet et le développement web." />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" href={`https://itgalaxy.io/search/prestataires/skill/${job}`} />
                  <meta property="og:locale" content="fr_FR" />
                  <meta property="og:site_name" content="ItGalaxy.io" />
                  <link rel="alternate" hreflang="fr" href={`https://itgalaxy.io/search/prestataires/skill/${job}`} />
                  <link rel="alternate" hreflang="en" href={`https://itgalaxy.io/search/prestataires/skill/${job}`} />
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Plateforme Freelance Web",
                      "provider": {
                        "@type": "Organization",
                        "name": "ItGalaxy",
                        "address": {
                          "@type": "PostalAddress",
                          "addressLocality": "Paris",
                          "addressRegion": "Île-de-France",
                          "addressCountry": "FR"
                        }
                      },
                      "description": "Recrutement de freelances web et d'agences de développement pour des projets de sites internet.",
                      "areaServed": ["France", "Paris", "Lyon", "Marseille"],
                      "serviceType": ["Recrutement Freelance", "Développement Web", "Création de Sites Internet"],
                    })}
                  </script>
                </Helmet>
          )}

          {country && (
              <Helmet>
                  <title> {`Trouvez des Freelances en ${country} | ItGalaxy.io `} </title>
                  <meta name="description" content={`ItGalaxy regroupe les freelance à ${country} `} />
                  <meta name="keywords" content="recrutement freelance, recruter un freelance, freelance recrutement, agence informatique, agence de developpement web, agence developpement mobile, agence developpement application, agence developpement applications mobiles, agence developpement web, agence france developpement, agence francaise pour le developpement, agence developpement web paris, freelance web, developpeur freelance, freelance application, webmaster freelance, application freelance, site internet freelance, web designer freelance, recherche freelance, web développeur freelance, freelance agence, freelance mission informatique, dev freelance, contrat de freelance, freelance developpeur, freelance developpeur web, web developpeur freelance, developpeur en freelance, developpeur freelance malt, developpeur junior freelance, prix developpeur freelance, développeur web freelance" />
                  <link rel="canonical" href={`https://itgalaxy.io/search/prestataires/country/${country}`} />
                  <meta property="og:title" content="Plateforme Freelance Web | Recrutement de Développeurs et Agences" />
                  <meta property="og:description" content="Trouvez des freelances qualifiés et des agences pour la création de sites internet et le développement web." />
                  <meta property="og:type" content="website" />
                  <meta property="og:url"href={`https://itgalaxy.io/search/prestataires/country/${country}`} />
                  <meta property="og:locale" content="fr_FR" />
                  <meta property="og:site_name" content="ItGalaxy.io" />
                  <link rel="alternate" hreflang="fr" href={`https://itgalaxy.io/search/prestataires/country/${country}`} />
                  <link rel="alternate" hreflang="en" href={`https://itgalaxy.io/search/prestataires/country/${country}`} />
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Plateforme Freelance Web",
                      "provider": {
                        "@type": "Organization",
                        "name": "ItGalaxy",
                        "address": {
                          "@type": "PostalAddress",
                          "addressLocality": country,
                          "addressRegion": "Île-de-France",
                          "addressCountry": "FR"
                        }
                      },
                      "description": "Recrutement de freelances web et d'agences de développement pour des projets de sites internet.",
                      "areaServed": ["France", "Paris", "Lyon", "Marseille"],
                      "serviceType": ["Recrutement Freelance", "Développement Web", "Création de Sites Internet"],
                    })}
                  </script>
                </Helmet>
          )}

        </>
      )}

      <SecondContainer>
        <SearchContainer>
          <SearchBar>
            <SearchInputContainer onKeyDown={handelChangeSearch}>
              <SearchInput type="search" placeholder="Cherchez des freelances..." />
            </SearchInputContainer>
            <SearchButtonContainer>
              <AdvancedSearchButtonContainer
                onClick={handleShowModalAdvancedSearch}
              >
                Recherche avancée
              </AdvancedSearchButtonContainer>
              <AdvancedSearchButtonContainerResetFilter
                onClick={handelResetFilter}
              >
                Reset Filters
              </AdvancedSearchButtonContainerResetFilter>
            </SearchButtonContainer>
            {showModalAdvancedSearch && (
              <ModalAdvancedSearchCandidates
                confirmShow={showModalAdvancedSearch}
                closeModal={handleShowModalAdvancedSearch}
                setFormData={setFormData}
                hour_rate_max={hour_rate_max}
                hour_rate_min={hour_rate_min}
                setDailyRateMin={setDailyRateMin}
                setDailyRateMax={setDailyRateMax}
                formData={formData}
                handleSearchSubmit={handleSearchSubmit}
                country={country}
                job={job}
                skill={skill}
                language={language}
                rate={min && max ? true : false}
              />
            )}
          </SearchBar>
        </SearchContainer>

        <ProfilSelectContainer>
          <ProfilContainerContainer>
            <ProfilSelectionnerText>
              <p>
                <b> Team Members selected {proposals.length}/5 </b>
              </p>
            </ProfilSelectionnerText>
            <ProfilContainerOfContainers>
              <ProfilAvatarContainer>
                {Array.from({ length: 5 }).map((_, index) => (
                  <ContainerProfileSelected key={index}>
                    {proposals[index] && proposals[index] !== null ? (
                      <>
                        <ImageProfilCard
                          type={"candidats"}
                          id={proposals[index].userId}
                          typeimg={"composeteam"}
                        />
                        <DeleteProfileSelected>
                          <StyledIConRemove
                            src={removeIcon}
                            onClick={() => deleteItem(index)}
                          />
                        </DeleteProfileSelected>
                      </>
                    ) : (
                      <ImageProfilCard
                        type={"candidats"}
                        typeimg={"composeteam"}
                      />
                    )}
                  </ContainerProfileSelected>
                ))}
              </ProfilAvatarContainer>
            </ProfilContainerOfContainers>
          </ProfilContainerContainer>

          <ProfilContainerButton>
            <StyledButtonProfilContainerButton className="btn">
              <SubmitButtonContainer
                className="btn btn-primary"
                onClick={validationSelection}
                disabled={proposals.length === 0}
              >
                Submit your team
              </SubmitButtonContainer>
            </StyledButtonProfilContainerButton>
          </ProfilContainerButton>
        </ProfilSelectContainer>

        {candidatDataLoading ? (
          <CardContainers>
            <Spinner />
          </CardContainers>
        ) : (
          <StyledCandidatesCardsContainer>
            {candidatsData && candidatsData?.data?.length == 0 ? (
              <CardContainers>
                <NotFoundTextStyle>No Freelances found</NotFoundTextStyle>
              </CardContainers>
            ) : (
              <>
                <CardContainers>
                  {candidatsData?.data?.map((item, index) => {
                    return (
                      <Card
                        key={index}
                        item={item}
                        handleConnecter={handleConnecter}
                        etoile={etoile}
                      />
                    );
                  })}
                </CardContainers>
                <div className="col-lg-12 col-md-12 col-12 mt-4">
                  {candidatsData?.pagination?.totalPages > 0 && (
                    <Pagination
                      nPages={candidatsData?.pagination?.totalPages}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                </div>
              </>
            )}
          </StyledCandidatesCardsContainer>
        )}
      </SecondContainer>

      {!showModalProposal && showModal && (
        <ModalComponent
          show={showModal}
          closeModal={setShowModal}
          body={<ViewCandidatProfil data={selectedItem} editProfil={false} />}
          bodyPadding={"0px 0px 0px 0px"}
          minWidth={"77vw"}
          Height={"82vh"}
          footerpaddingtop={"0"}
          footerpaddingbottom={"0"}
          footer={Renderfooter}
        />
      )}

      {proposals.length > 0 && proposals[0] != null && showModalValidation && (
        <ValidationEntrepriseProposal
          showModalValidation={showModalValidation}
          closeValidationSelection={closeValidationSelection}
        />
      )}

      {showModalProposal && !showModal && (
        <ModalProposalEntreprise
          userId={selectedItem.id}
          show={showModalProposal}
          setShowModalProposal={setShowModalProposal}
          setCandidatesProfils={props.setCandidatesProfils}
          closeModal={closeModalProposal}
        />
      )}
      {showModalRegister && (
        <Register
          openModalRegister={showModalRegister}
          setOpenModalRegister={setModalRegister}
          handleModalRegister={handleCloseModalRegister}
          proxy={"dashboard"}
        />)}
    </div>
  );
}
