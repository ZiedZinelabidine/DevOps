import ChatItGalaxy from "@components/ChatItGalaxy/ChatItGalaxy.jsx";
import Spinner from "@components/Spinner/Spinner";
import {
  useDeleteContactMutation,
  useFilterItemsDetailsQuery,
  useFilterItemsQuery,
  useGetFilteredChannelsQuery
} from "@services/api";
import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  AcceptProposalButton,
  AddButton,
  Badge,
  ButtonContainerDelete,
  DeleteContact,
  DeleteProposalButton,
  DropdownButton,
  DropdownMenu,
  Header,
  ListWrapper,
  MainContent,
  Option,
  ProjectContainer,
  ProjectDate,
  ProjectDescription,
  ProjectItem,
  ProjectListContainer,
  ProjectTitle,
} from "./ListEntrepriseContainer.style.js";

// Lazy load modal components
const ActivatePaymentModal = lazy(() => import("@components/ModalITgalaxy/ActivatePaymentModal/ActivatePaymentModal"));
const ModalDeclinePayment = lazy(() => import("@components/ModalITgalaxy/DeclinePaymentModal/DeclinePaymentModal"));
const ModalPayment = lazy(() => import("@components/ModalITgalaxy/ModalPayment/ModalPayment"));
const ModalShowChoiceCompany = lazy(() => import("@components/ModalITgalaxy/ModalShowChoiceCompany/ModalShowChoiceCompany"));
const ModalShowProposalEntreprise = lazy(() => import("@components/ModalITgalaxy/ModalShowProposalEntreprise/ModalShowProposalEntreprise"));
const PaymentProcessProposal = lazy(() => import("@components/PaymentForm/PaymentProcessProposal/PaymentProcessProposal"));
const ModalDeleteContact = lazy(() => import("@components/ModalITgalaxy/ModalDeleteContact/ModalDeleteContact.jsx"));
const ModalShowContact = lazy(() => import("@components/ModalITgalaxy/ModalShowContact/ModalShowContact.jsx"));

const ListEntrepriseContainer = ({
  idEntreprise,
  chatId,
  usernameChat,
  theme,
}) => {
  const [projects, setProjects] = useState([]);
  const [products, setProducts] = useState([]);
  const [contactors, setContactors] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Projects");
  const [selectedTargetId, setSelectedTargetId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [showChoiceCompany, setShowChoiceCompany] = useState(false);
  const [channelsQuery, setChannelsQuery] = useState({});
  const [channelsList, setChannelsList] = useState([]);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [ids, setIds] = useState({ type: "", projectId: "", proposalId: "" });
  const [showModalPaymentModal, setShowModalPaymentModal] = useState(false);
  const [showModalDecline, setShowModalDecline] = useState(false);
  const [showModalActiveVersement, setShowModalActiveVersement] =
    useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [channelSelected, setChannelSelected] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [deleteContact] = useDeleteContactMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const listRef = useRef(null);
  const formMethods = useForm({});

  const handleCloseShowModal = () => {
    setShowModalActiveVersement(false);
    setShowModalPaymentModal(false);
    setShowModalDecline(false);
    setShowModalDetails(false);
    setShowModalDelete(false);
    setSelectedItem(null);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleModalChoiceCompany = () => {
    setShowChoiceCompany(true);
  };

  const closeModalChoiceCompany = () => {
    setShowChoiceCompany(false);
  };
  const deleteFunct = async () => {
    if (!selectedItem || !selectedItem.data.id) {
      toast.error("Invalid contact selected for deletion.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    try {
      await deleteContact(selectedItem.data.id).unwrap(); // Ensure unwrap() is called correctly
      toast.success("Contact was deleted", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      refetch();
      refetchChannel();
      handleCloseShowModal();
    } catch (error) {
      console.error("Failed to delete contact:", error);
      toast.error("Error deleting contact: " + error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleDeleteShowModal = () => {
    setShowModalDetails(false);
    setShowModalDelete(true);
  };

  const {
    data: fetchedData,
    error: fetchError,
    isLoading,
    refetch,
    refetch: refetchChannel,
  } = useFilterItemsQuery({
    filterType: selectedOption.toLowerCase(),
    params: (() => {
      switch (selectedOption.toLowerCase()) {
        case "itgalaxy contactor":
          return `?contactedId=${idEntreprise}&page=${page}&limit=200`;
        case "product":
          return `?buyerId=${idEntreprise}&page=${page}&limit=200`;
        default:
          return `?entrepriseId=${idEntreprise}&page=${page}&limit=200`;
      }
    })(),
  });

  useEffect(() => {
    const currentRef = listRef.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasMore]); // Re-run effect if hasMore changes


  const {
    data: channelList,
    error: errorChannelList,
    isLoading: isLoadingChannelList,
  } = useGetFilteredChannelsQuery(channelsQuery, {
    skip: Object.keys(channelsQuery).length === 0, // Skip if channelsQuery is undefined or empty
  });

  const params = () => {
    switch (ids.type) {
      case "COMPOSED_FREELANCE":
        return `/${ids.proposalId}`;
      case "SHARETASK":
        return `/${ids.proposalId}`;
      case "Product":
        window.location.href = `/videosTrainings`;
      case "ItGalaxy Contactor":
        return `/${ids.projectId}`;
      default:
        return ""; // or handle a case for an unknown type
    }
  };

  const {
    data: selectedItemData,
    error: fetchErrorSelectedItem,
    isLoading: isLoadingSelectedItem,
  } = useFilterItemsDetailsQuery(
    {
      filterType: ids.type,
      params: params(),
    },
    {
      skip: !ids.type,
    }
  );

  useEffect(() => {
    if (!isLoadingSelectedItem) {
      if (fetchErrorSelectedItem) {
        console.error("Error fetching Proposal:", fetchErrorSelectedItem);
      } else if (selectedItemData) {
        setSelectedItem(selectedItemData);
      }
    }
  }, [ids, isLoadingSelectedItem, fetchErrorSelectedItem, selectedItemData]);

  useEffect(() => {
    if (!isLoadingChannelList) {
      if (errorChannelList) {
        console.error("Error fetching channels:", errorChannelList);
      } else if (channelList) {
        setChannelsList(channelList);
      }
    }
  }, [channelsQuery, isLoadingChannelList, errorChannelList, channelList]);

  useEffect(() => {
    if (fetchedData?.data) {
      switch (selectedOption) {
        case "Projects":
          setProjects(fetchedData.data);
          break;
        case "Products":
          setProducts(fetchedData.data);
          break;
        case "ItGalaxy Contactor":
          setContactors(fetchedData.data);
          break;
        default:
          break;
      }
      setHasMore(fetchedData.data.length > 0);
    }
  }, [fetchedData, selectedOption]);

  const handleProjectClick = (filtre, targetId) => {
    if (targetId) {
      setLoading(true);
      setSelectedProjectId(targetId);
      setSelectedTargetId(targetId);

      switch (filtre) {
        case "COMPOSED_FREELANCE":
          setChannelsQuery({
            positionChannel: "owner",
            queryChannel: `?channelprefix=grp${filtre}${targetId}proposalentreprise&owner=${chatId}`,
          });
          break;
        case "SHARETASK":
          setChannelsQuery({
            positionChannel: "user",
            queryChannel: `?channelprefix=grp${filtre}${targetId}proposal&user=${chatId}`,
          });
          break;
        case "Products":
          setChannelsQuery({
            positionChannel: "owner",
            queryChannel: `?channelprefix=grpProduct${targetId}soldedproduct&owner=${chatId}`,
          });
          break;
        case "ItGalaxy Contactor":
          setChannelsQuery({
            positionChannel: "user",
            queryChannel: `?channelprefix=grpContactor${targetId}&user=${chatId}`,
          });
          break;

        default:
          setChannelsQuery({
            positionChannel: "owner",
            queryChannel: `?grpcomposeyouteam${targetId}proposalentreprise&owner=${chatId}`,
          });
      }
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (!title) return ""; // Return an empty string if title is undefined
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  const handleScroll = (e) => {
    const target = e.target;
  };

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate(); // Get day of the month
    const month = date.toLocaleString("en-US", { month: "long" }); // Get full month name
    return `${day} ${month}`;
  }

  const handleOptionClick = (e) => {
    setSelectedProjectId(null);
    setSelectedOption(Object.keys(e)[0]);
    toggleDropdown();
  };

  return (
    <>
      <MainContent>
        <ProjectListContainer theme={theme}>
          <Header>
            <ProjectContainer>
              <div style={{ display: "flex" }}>
                <DropdownButton
                  isOpen={isOpen}
                  onClick={toggleDropdown}
                  theme={theme}
                >
                  {selectedOption}
                </DropdownButton>
                {selectedOption === "Projects" && (
                  <Badge>{projects?.length}</Badge>
                )}
                {selectedOption === "Products" && (
                  <Badge>{products?.length}</Badge>
                )}
                {selectedOption === "ItGalaxy Contactor" && (
                  <Badge>{contactors?.length}</Badge>
                )}
              </div>
              <AddButton onClick={handleModalChoiceCompany} theme={theme}>
                <span>+</span>
              </AddButton>
              {showChoiceCompany && (
                <Suspense fallback={<Spinner />}>
                  <ModalShowChoiceCompany
                    show={showChoiceCompany}
                    onHide={closeModalChoiceCompany}
                  />
                </Suspense>
              )}
              {isOpen && (
                <DropdownMenu>
                  {[
                    { Projects: "projects" },
                    { Products: "products" },
                  ].map((option, index) => (
                    <Option
                      key={index}
                      value={Object.values(option)[0]}
                      onClick={() => handleOptionClick(option)}
                    >
                      {Object.keys(option)[0]}
                    </Option>
                  ))}
                </DropdownMenu>
              )}
            </ProjectContainer>
            <hr
              style={{
                color: "#D0D5DD99",
                border: "1px solid #D0D5DD99;",
                opacity: "1",
              }}
            />
          </Header>
          <ListWrapper ref={listRef} style={{ overflowY: "auto", maxHeight: "79vh" }}>
            {!Array.isArray(fetchedData?.data) ? (
              <div>No projects found.</div>
            ) : (
              fetchedData.data.map((project, index) => {
                if (selectedOption === "Projects") {
                  if (
                    project.type === "SHARETASK" ||
                    project.type === "COMPOSED_FREELANCE"
                  ) {
                    return (
                      <ProjectItem
                        key={index}
                        onClick={() =>
                          handleProjectClick(project.type, project.id)
                        }
                        theme={theme}
                        style={{
                          backgroundColor:
                            selectedProjectId === project.id
                              ? "#6366f1"
                              : "transparent",
                        }}
                      >
                        <ProjectTitle theme={theme}>
                          {truncateTitle(project.title, 15)}
                        </ProjectTitle>
                        <ProjectDescription theme={theme}></ProjectDescription>
                        <ProjectDate theme={theme}>{`Created at ${formatDate(
                          project.createdAt
                        )}`}</ProjectDate>
                      </ProjectItem>
                    );
                  }
                }
                if (selectedOption === "Products") {
                  if (project.type === "SOLDEDPRODUCT") {
                    return (
                      <ProjectItem
                        key={index}
                        onClick={() =>
                          handleProjectClick(selectedOption, project.product.id)
                        }
                        theme={theme}
                        style={{
                          backgroundColor:
                            selectedProjectId === project.product.id
                              ? "#6366f1"
                              : "transparent",
                        }}
                      >
                        <ProjectTitle theme={theme}>
                          {" "}
                          {`${project.product.title}`}
                        </ProjectTitle>
                        <ProjectDescription theme={theme}></ProjectDescription>
                        <ProjectDate theme={theme}>{`Created at ${formatDate(
                          project.createdAt
                        )}`}</ProjectDate>
                      </ProjectItem>
                    );
                  }
                }
                if (selectedOption === "ItGalaxy Contactor") {
                  if (project.type === "CONTACTOR") {
                    return (
                      <ProjectItem
                        key={index}
                        onClick={() =>
                          handleProjectClick(selectedOption, project.id)
                        }
                        theme={theme}
                        style={{
                          backgroundColor:
                            selectedProjectId === project.id
                              ? "#D8D8D8"
                              : "transparent",
                        }}
                      >
                        {project?.contactor?.name ? (
                          <ProjectTitle
                            theme={theme}
                          >{`${project?.contactor?.name} ${project?.contactor?.first_name}`}</ProjectTitle>
                        ) : (
                          <ProjectTitle theme={theme}>
                            {project?.contacted?.username}
                          </ProjectTitle>
                        )}
                        <ProjectDescription theme={theme}></ProjectDescription>
                        <ProjectDate theme={theme}>{`Created at ${formatDate(
                          project?.createdAt
                        )}`}</ProjectDate>
                      </ProjectItem>
                    );
                  }
                }
                return null; // Ensure there is a return statement for any project that does not match the above conditions
              })
            )}
          </ListWrapper>
        </ProjectListContainer>
      </MainContent>
      {loading && channelsList.length > 0 && <Spinner />}

      {usernameChat && channelsList.length > 0 && selectedProjectId ? (
        <ChatItGalaxy
          username={usernameChat}
          channelsList={channelsList}
          setShowModalDetails={setShowModalDetails}
          setIds={setIds}
          projectId={selectedProjectId}
          projectType={selectedOption}
          type={"ENTREPRISE"}
          setChannelSelected={setChannelSelected}
          setLoading={setLoading}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            maxHeight: "97%", // Full viewport height
            backgroundColor: "#202124", // White background
            textAlign: "center",
            padding: "20px",
            border: "1px solid #696969",
            borderRadius: "8px",
            color: "white"
          }}
        >
          <div>
            <h2>Aucun projet sélectionné</h2>
            <p>Veuillez sélectionner un projet pour démarrer une discussion.</p>
          </div>
        </div>
      )}

      {/* Modal for showing proposal details */}
      {showModalDetails && selectedItem && (
        <>
          {selectedOption === "Projects" && (
            <Suspense fallback={<Spinner />}>
              <ModalShowProposalEntreprise
                type={"ENTREPRISE"}
                proposal={selectedItem.data}
                footer={
                  <PaymentProcessProposal
                    setShowModalPaymentModal={setShowModalPaymentModal}
                    setShowModalDecline={setShowModalDecline}
                    setShowModalActiveVersement={setShowModalActiveVersement}
                    setShowModalProposal={setShowModalDetails}
                    proposal={selectedItem.data}
                  />
                }
                confirmShow={showModalDetails}
                closeModal={handleCloseShowModal}
              />
            </Suspense>
          )}
          {selectedOption === "ItGalaxy Contactor" && (
            <Suspense fallback={<Spinner />}>
              <ModalShowContact
                contact={selectedItem.data}
                type={"CONTACTED"}
                footer={
                  <DeleteContact onClick={handleDeleteShowModal}>
                    Delete the contact
                  </DeleteContact>
                }
                confirmShow={showModalDetails}
                closeModal={handleCloseShowModal}
              />
            </Suspense>
          )}
        </>
      )}
      {/* Modal for payment */}
      {selectedItem && showModalPaymentModal && (
        <Suspense fallback={<Spinner />}>
          <ModalPayment
            handleCloseShowModal={handleCloseShowModal}
            showModalPayment={showModalPaymentModal}
            price={selectedItem.data.price}
            paymentProposal={true}
            formMethods={formMethods}
            proposal={selectedItem.data}
            title={"Accept Proposal"}
            note={"You may choose to dismiss the proposal and receive a refund whenever you wish."}
          />
        </Suspense>
      )}

      {/* Modal for decline payment */}
      {selectedItem && showModalDecline && (
        <Suspense fallback={<Spinner />}>
          <ModalDeclinePayment
            proposal={selectedItem.data}
            handleShowModal={handleCloseShowModal}
            showModalDecline={showModalDecline}
            setSelectedItem={setSelectedItem}
          />
        </Suspense>
      )}

      {/* Modal for activating payment */}
      {selectedItem && showModalActiveVersement && (
        <Suspense fallback={<Spinner />}>
          <ActivatePaymentModal
            handleShowModal={handleCloseShowModal}
            showModalActiveVersement={showModalActiveVersement}
            setSelectedItem={setSelectedItem}
            proposal={selectedItem}
          />
        </Suspense>
      )}
      {/* Modal for decline payment */}
      {showModalDelete && (
        <Suspense fallback={<Spinner />}>
          <ModalDeleteContact
            deleteFunct={deleteFunct}
            handleShowModal={handleCloseShowModal}
            showModalDelete={showModalDelete}
            footer={
              <>
                <ButtonContainerDelete>
                  <DeleteProposalButton onClick={handleCloseShowModal}>
                    Cancel{" "}
                  </DeleteProposalButton>
                  <AcceptProposalButton onClick={deleteFunct}>
                    Yes, i am sure
                  </AcceptProposalButton>
                </ButtonContainerDelete>
              </>
            }
          />
        </Suspense>
      )}
    </>
  );
};

export default ListEntrepriseContainer;
