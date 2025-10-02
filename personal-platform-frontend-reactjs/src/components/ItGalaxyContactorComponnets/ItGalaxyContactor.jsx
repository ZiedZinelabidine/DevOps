import { useGetItGalaxyContactsQuery } from "@services/api";
import ModalComponent from "components/ModalITgalaxy/ModalComponent";
import Pagination from "components/Paginations/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { countriesData } from "../../data/countriesData";
import EditProfil from "../ComponnentProfilItems/EditProfil";
import ModalContactor from "../ModalITgalaxy/ModalContactor/ModalContactor";
import Card from "./card";
import {
  AddProposalContainer,
  CardContainers,
  NotFoundTextStyle,
  SearchBar,
  SearchContainer,
  SearchInput,
  SearchInputContainer,
  SecondContainer,
  StyledCandidatesCardsContainer,
} from "./styled";

export default function ItGalaxyContactorComponents(props) {
  const { country } = useParams();
  const navigate = useNavigate();
  const formMethods = useForm({});

  // States
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalProposal, setShowModalProposal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterSearch, setFilterSearch] = useState("");
  const [contacts, setContacts] = useState({ data: [], pagination: {} });
  const [countryDetails, setCountryDetails] = useState([]);
  const [formData, setFormData] = useState({
    filterType: ["CANDIDATS"],
    locations: [],
  });

  // API Query
  const {
    data: contactsData,
    error: contactsDataError,
    isLoading: contactDataLoading
  } = useGetItGalaxyContactsQuery(
    `?page=${currentPage}&limit=100000000${filterSearch}${searchQuery}`
  );

  // Effects
  useEffect(() => {
    if (country) {
      const formattedCountryName = country.replace(/-/g, ' ');
      const validCountry = countriesData.find(
        c => c.title.toLowerCase() === formattedCountryName.toLowerCase()
      );

      if (validCountry) {
        setFormData(prev => ({
          ...prev,
          locations: [validCountry.title]
        }));
      } else {
        navigate('/search/itgalaxycontactor');
      }
    }
  }, [country, navigate]);

  useEffect(() => {
    if (!contactDataLoading) {
      setContacts(contactsData);
    }
  }, [contactsData, filterSearch, searchQuery, contactDataLoading]);

  useEffect(() => {
    const paramsMap = {
      locations: "country_details",
      filterType: "type",
    };

    const queryParams = Object.keys(paramsMap).reduce((acc, key) => {
      if (formData[key].length > 0) {
        return acc + `&${paramsMap[key]}=${formData[key].join(",")}`;
      }
      return acc;
    }, "");

    setFilterSearch(queryParams);
  }, [formData.filterType, formData.locations]);


  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      const newSearchTerm = e.target.value ? `&search=${e.target.value}` : "";
      setSearchQuery(newSearchTerm);
    }
  }, []);

  const handleConnecter = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleShowModalApply = () => {
    setShowModalProposal(true);
    setShowModal(false);
  };

  const closeModalProposal = () => {
    setShowModalProposal(false);
    setShowModal(false);
  };

  // Render helpers
  const renderSearchBar = () => (
    <SearchBar>
      <SearchInputContainer onKeyDown={handleChangeSearch}>
        <SearchInput type="search" placeholder="Cherchez..." />
      </SearchInputContainer>
    </SearchBar>
  );

  const renderContacts = () => {
    if (contactDataLoading) {
      return (
        <CardContainers>
          <Spinner />
        </CardContainers>
      );
    }

    if (contactsDataError) {
      return (
        <CardContainers>
          <div>Error loading contacts. Please try again.</div>
        </CardContainers>
      );
    }

    if (contacts.data?.length === 0) {
      return (
        <CardContainers>
          <NotFoundTextStyle>No Contacts found</NotFoundTextStyle>
        </CardContainers>
      );
    }

    return (
      <>
        <CardContainers>
          {contacts.data.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleConnecter={handleConnecter}
            />
          ))}
        </CardContainers>
        {contacts.pagination?.totalPages > 1 && (
          <div className="col-lg-12 col-md-12 col-12 mt-4">
            <Pagination
              nPages={contacts.pagination.totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <FormProvider {...formMethods}>
      <SecondContainer>
        <SearchContainer>
          {renderSearchBar()}
        </SearchContainer>

        <StyledCandidatesCardsContainer>
          {renderContacts()}
        </StyledCandidatesCardsContainer>
      </SecondContainer>

      {showModal && (
        <ModalComponent
          show={showModal}
          closeModal={setShowModal}
          body={
            <EditProfil
              userData={selectedItem}
              editProfil={false}
              role={selectedItem?.type}
            />
          }
          bodyPadding="0"
          minWidth="80vw"
          footerpaddingtop={"0"}
          footerpaddingbottom={"0"}
          footer={
            <AddProposalContainer onClick={handleShowModalApply}>
              Créer une proposition
            </AddProposalContainer>
          }
        />
      )}

      {showModalProposal && (
        <ModalContactor
          id={props.id}
          role={props.role}
          userdata={selectedItem}
          show={showModalProposal}
          setCandidatesProfils={props.setCandidatesProfils}
          closeModal={closeModalProposal}
        />
      )}
    </FormProvider>
  );
}
