import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import ActivatePaymentModal from "components/ModalITgalaxy/ActivatePaymentModal/ActivatePaymentModal";
import DeclinePaymentModal from "components/ModalITgalaxy/DeclinePaymentModal/DeclinePaymentModal";
import ModalPayment from "components/ModalITgalaxy/ModalPayment/ModalPayment";
import ModalShowProposalEntreprise from "components/ModalITgalaxy/ModalShowProposalEntreprise/ModalShowProposalEntreprise";
import Pagination from "components/Paginations/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useGetProposalsbyProjectIdQuery } from "../../redux/api/projects/projectApi";
import GenericInput from "../Inputs/GenericInput/GenericInput";
import PaymentProcessProposal from "../PaymentForm/PaymentProcessProposal/PaymentProcessProposal";
import { formConfig } from "./ProposalsDash.constants";
import {
  AllCard,
  BackButton,
  CardContainers,
  CardProject,
  CardProposalTitle,
  DatePost,
  DeclineProposalButton,
  ListingJobs,
  NotFoundTextStyle,
  PriceStyle,
  ProjectLabelsContainer,
  SearchBar,
  SearchFilter,
  SearchIconInput,
  SearchInputContainer,
  StyleAllProjects,
  ViewLabelProjects,
  Budgetdesc1
} from "./ProposalsDash.style";

export default function ProposalsDash({
  id,
  setProposalDash,
  idEntreprise,
  role,
}) {
  const formMethods = useForm({});
  const [selectedItem, setSelectedItem] = useState("");
  const [filterType, setFilterType] = useState("ALL");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1000);
  const [nPages, setNPages] = useState(0);
  const [proposals, setProposals] = useState([]);
  const [showModalProposal, setShowModalProposal] = useState(false);
  const [showModalPaymentModal, setShowModalPaymentModal] = useState(false);
  const [showModalDecline, setShowModalDecline] = useState(false);
  const [showModalActiveVersement, setShowModalActiveVersement] =
    useState(false);

  const handleCloseShowModal = () => {
    setShowModalActiveVersement(false);
    setShowModalPaymentModal(false);
    setShowModalDecline(false);
    setShowModalProposal(false);
    setSelectedItem("");
  };

  const handelbacktoProjectList = () => {
    setProposalDash(false);
  };

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
      setSearch(e.target.value);
    }
  }, []);

  const params = `${id}&page=${currentPage}&limit=${recordsPerPage}${
    filterType !== "ALL" ? `&statusProposals=${filterType}` : ""
  }${search ? `&search=${search}` : ""}`;
  const {
    data: proposalsData,
    error: proposalsDataError,
    loading: proposalsDataLoading,
  } = useGetProposalsbyProjectIdQuery(params, {
    skip: !id,
  });

  // Update proposals when data changes
  useEffect(() => {
    if (proposalsData) {
      setProposals(proposalsData.proposals);
      setNPages(proposalsData.totalPages);
    }
    if (proposalsDataError) {
      console.error("Error fetching proposals:", proposalsDataError);
      setProposals([]); // Clear proposals if there's an error
    }
  }, [proposalsData, proposalsDataError]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModalProposal(true);
  };

  return (
    <>
      <ListingJobs>
        <BackButton onClick={handelbacktoProjectList}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>{" "}
        </BackButton>
        <SearchBar>
          <FormProvider {...formMethods}>
            <SearchInputContainer onKeyDown={handleChangeSearch}>
              <GenericInput
                inputObject={{
                  ...formConfig.title,
                  label: "title",
                  placeholder: "Search proposals",
                }}
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
        <ProjectLabelsContainer>
          <ViewLabelProjects>Proposals</ViewLabelProjects>
        </ProjectLabelsContainer>

        {proposalsDataLoading ? (
          <CardContainers>
            <Spinner />
          </CardContainers>
        ) : proposalsDataError ? (
          <CardContainers>
            <NotFoundTextStyle>
              🚀 Error loading proposals, please try again later! 🚀
            </NotFoundTextStyle>
          </CardContainers>
        ) : (
          <>
            {proposals.length === 0 ? (
              <CardContainers>
                <NotFoundTextStyle>
                  No proposals found for this project...
                </NotFoundTextStyle>
              </CardContainers>
            ) : (
              <>
                <AllCard>
                  {proposals.map((proposal) => (
                    <CardProject key={proposal.id}>
                      <StyleAllProjects>
                        <CardProposalTitle
                          onClick={() => handleItemClick(proposal)}
                        >
                          <ImageProfilCard
                            type={"candidats"}
                            id={proposal.user.id}
                            typeimg={"cercel"}
                          />
                           <div
                            style={{
                              color: "white",
                              fontWeight: "701",
                              paddingLeft: "0",

                            }}
                          >
                          {`${proposal.user.name} ${proposal.user.first_name}`}{" "}
                          </div>

                          <div
                            style={{
                              color: "red",
                              fontWeight: "701",
                              paddingLeft: "0",

                            }}
                          >
                            Budget : {`${proposal.price} euro`}{" "}
                          </div>{" "}
                          <DeclineProposalButton>
                            {" "}
                            Details{" "}
                          </DeclineProposalButton>
                        </CardProposalTitle>
                        <DatePost>
                          <PriceStyle>
                            <span
                              style={{
                                fontWeight: "501",
                                color:
                                  proposal.status === "CREATED"
                                    ? "orange"
                                    : proposal.status === "VALIDATED"
                                    ? "var(--Success-Success200, rgba(21, 176, 151, 1))"
                                    : proposal.status === "FINISHED"
                                    ? "green"
                                    : proposal.status === "DECLINED"
                                    ? "red"
                                    : "black", // fallback color
                              }}
                            >
                              Status: {proposal.status}
                            </span>
                          </PriceStyle>
                          <span>
                            Created:{" "}
                            {proposal.createdAt
                              ? new Date(proposal.createdAt).toDateString()
                              : "Date not available"}
                          </span>
                        </DatePost>

                        <PaymentProcessProposal
                          setShowModalPaymentModal={setShowModalPaymentModal}
                          setSelectedItem={setSelectedItem}
                          setShowModalDecline={setShowModalDecline}
                          setShowModalActiveVersement={
                            setShowModalActiveVersement
                          }
                          setShowModalProposal={setShowModalProposal}
                          proposal={proposal}
                        />
                      </StyleAllProjects>
                    </CardProject>
                  ))}
                </AllCard>
                <div className="col-lg-12 col-md-12 col-12 mt-4">
                  {proposals.pagination?.totalPages > 1 && (
                    <Pagination
                      nPages={nPages}
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
      {selectedItem && showModalProposal && (
        <ModalShowProposalEntreprise
          proposal={selectedItem}
          footer={
            <PaymentProcessProposal
              setShowModalPaymentModal={setShowModalPaymentModal}
              setShowModalDecline={setShowModalDecline}
              setShowModalActiveVersement={setShowModalActiveVersement}
              setShowModalProposal={setShowModalProposal}
              proposal={selectedItem}
            />
          }
          confirmShow={showModalProposal}
          closeModal={setShowModalProposal}
          type={"ENTREPRISE"}
        />
      )}

      {selectedItem && showModalPaymentModal && (
        <ModalPayment
          handleCloseShowModal={handleCloseShowModal}
          showModalPayment={showModalPaymentModal}
          price={selectedItem.price}
          paymentProposal={true}
          formMethods={formMethods}
          proposal={selectedItem}
          title={"Accept Proposal"}
          note={"You may choose to dismiss the proposal and receive a refund whenever you wish."}
        />
      )}

      {selectedItem && showModalDecline && (
        <DeclinePaymentModal
          proposal={selectedItem}
          handleShowModal={handleCloseShowModal}
          showModalDecline={showModalDecline}
          setSelectedItem={setSelectedItem}
        />
      )}

      {selectedItem && showModalActiveVersement && (
        <ActivatePaymentModal
          handleShowModal={handleCloseShowModal}
          showModalActiveVersement={showModalActiveVersement}
          setSelectedItem={setSelectedItem}
          proposal={selectedItem}
        />
      )}
    </>
  );
}
