import ChatItGalaxy from "@components/ChatItGalaxy/ChatItGalaxy.jsx";
import ModalDeleteContact from "@components/ModalITgalaxy/ModalDeleteContact/ModalDeleteContact.jsx";
import ModalShowAccounting from "@components/ModalITgalaxy/ModalShowAccounting/ModalShowAccounting.jsx";
import ModalShowContact from "@components/ModalITgalaxy/ModalShowContact/ModalShowContact.jsx";
import ModalShowProposalEntreprise from "@components/ModalITgalaxy/ModalShowProposalEntreprise/ModalShowProposalEntreprise";
import Spinner from "@components/Spinner/Spinner";
import {
  useDeleteContactMutation,
  useDeleteProposalEntrepriseMutation,
  useDeleteProposalMutation,
  useFilterItemsDetailsQuery,
  useGetCandidatItemsQuery,
  useGetFilteredChannelsQuery
} from "@services/api";
import ModalShowChoiceCandidat from "components/ModalITgalaxy/ModalShowChoiceCandidat/ModalShowChoiceCandidat";
import ModalShowProposalAO from "components/ModalITgalaxy/ModalShowProposalAO/ModalShowProposalAO";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
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
} from "./ListCandidatContainer.style";

const ListCandidatContainer = ({ idCandidat, chatId, usernameChat, theme }) => {
  const [projects, setProjects] = useState([]);
  const [myproducts, setMyProducts] = useState([]);
  const [soldedproducts, setSoldedProducts] = useState([]);
  const [contrats, setContrats] = useState([]);
  const [contactors, setContactors] = useState([]);
  const [recrutments, setRecrutments] = useState([]);
  const [accounting, setAccounting] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Projects");
  const [isOpen, setIsOpen] = useState(false);
  const [showChoiceCompany, setShowChoiceCompany] = useState(false);
  const [channelsQuery, setChannelsQuery] = useState({});
  const [channelsList, setChannelsList] = useState([]);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [ids, setIds] = useState({ type: "", projectId: "", proposalId: "" });
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [channelSelected, setChannelSelected] = useState("");
  const [type, setType] = useState("CANDIDAT");
  const [loading, setLoading] = useState(false);
  const [deleteContact] = useDeleteContactMutation();
  const [deleteProposalEntreprise] = useDeleteProposalEntrepriseMutation();
  const [deleteProposal] = useDeleteProposalMutation();
  const listRef = useRef(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = React.useState(1);


  const handleDeleteShowModal = () => {
    setShowModalDetails(false);
    setShowModalDelete(true);
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
      switch (ids.type) {
        case "ItGalaxy Contactor":
          await deleteContactFunction();
          break;

        case "COMPOSED_FREELANCE":
          await deleteProposalEntrepriseFunction();
          break;

        case "SHARETASK":
          await deleteProposalFunction();
          break;
      }
    } catch (error) {
      console.error("Failed to delete :", error);
      toast.error("Error deleting : " + error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const deleteContactFunction = async () => {
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
    // Optionally, remove the deleted contact from the local state here.
    setContactors((prev) =>
      prev.filter((contact) => contact.id !== selectedItem.id)
    );
    refetch();
    refetchChannel();
    handleCloseShowModal();
  };

  const deleteProposalEntrepriseFunction = async () => {
    await deleteProposalEntreprise(selectedItem.data.id).unwrap(); // Ensure unwrap() is called correctly
    toast.success("Proposal was deleted", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Optionally, remove the deleted contact from the local state here.
    refetch();
    refetchChannel();
    handleCloseShowModal();
  };
  const deleteProposalFunction = async () => {
    await deleteProposal(selectedItem.data.id).unwrap(); // Ensure unwrap() is called correctly
    toast.success("Proposal was deleted", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Optionally, remove the deleted contact from the local state here.
    refetch();
    refetchChannel();
    handleCloseShowModal();
  };

  const handleCloseShowModal = () => {
    setShowModalDetails(false);
    setShowModalDelete(false);
    setSelectedItem(null);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleModalChoiceCompany = () => {
    setShowChoiceCompany(true);
  };

  const closeModalChoiceCandidat = () => {
    setShowChoiceCompany(false);
  };

  const {
    data: fetchedData,
    error: fetchError,
    isLoading,
    refetch,
  } = useGetCandidatItemsQuery(
    {
      filterType: selectedOption.toLowerCase(),
      params: idCandidat,
    },
    {
      skip: !idCandidat,
    }
  );

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
    refetch: refetchChannel,
  } = useGetFilteredChannelsQuery(channelsQuery, {
    skip: Object.keys(channelsQuery).length === 0, // Skip if channelsQuery is undefined or empty
  });



  const params = () => {
    switch (ids.type) {
      case "COMPOSED_FREELANCE":
      case "SHARETASK":
      case "Contrats":
        return `/${ids.proposalId}`;
      case "AccountingJob":
        return window.location.href = `/company`;
      case "Product":
        if (selectedOption === "My Products") {
          return window.location.href = `/producer`;
        }
      default:
        return ""; // Handle an unknown type
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
          setType("CANDIDAT");
          break;
        case "Contrats":
          setContrats(fetchedData.data);
          setType("CANDIDAT");
          break;
        case "My Products":
          setMyProducts(fetchedData.data);
          setType("PRODUCER");
          break;
        case "Purchased Products":
          setSoldedProducts(fetchedData.data);
          setType("CANDIDAT");
          break;
        case "ItGalaxy Contactor":
          setContactors(fetchedData.data);
          setType("CANDIDAT");
          break;
        case "Recruitment":
          setRecrutments(fetchedData.data);
          setType("CANDIDAT");
          break;
        case "Accounting":
          setAccounting(fetchedData.data);
          setType("PRESIDENT");
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
      setSelectedProjectId(targetId); // Set the selected project ID
      const queryChannel = getChannelQuery(filtre, targetId);
      setChannelsQuery(queryChannel); // Update channels query
    }
  };

  const getChannelQuery = (filtre, targetId) => {
    switch (filtre) {
      case "COMPOSED_FREELANCE":
        return {
          positionChannel: "user",
          queryChannel: `?channelprefix=grp${filtre}${targetId}proposalentreprise&user=${chatId}`,
        };
      case "SHARETASK":
        return {
          positionChannel: "owner",
          queryChannel: `?channelprefix=grp${filtre}${targetId}proposal&owner=${chatId}`,
        };
      case "Contrats":
        return {
          positionChannel: "owner",
          queryChannel: `?channelprefix=grpContrat${targetId}appeloffreproposal&owner=${chatId}`,
        };
      case "My Products":
        return {
          positionChannel: "user",
          queryChannel: `?channelprefix=grpProduct${targetId}soldedproduct&user=${chatId}`,
        };
      case "Purchased Products":
        return {
          positionChannel: "owner",
          queryChannel: `?channelprefix=grpProduct${targetId}soldedproduct&owner=${chatId}`,
        };
      case "ItGalaxy Contactor":
        return {
          positionChannel: "user",
          queryChannel: `?channelprefix=grpContactor${targetId}&user=${chatId}`,
        };
      case "Recruitment":
        return {
          positionChannel: "user",
          queryChannel: `?channelprefix=grpRecruitment${targetId}&user=${chatId}`,
        };
      case "Accounting":
        return {
          positionChannel: "user",
          queryChannel: `?channelprefix=grpAccountingJob${targetId}workingFolder&user=${chatId}`,
        };
      default:
        return {
          positionChannel: "owner",
          queryChannel: `?grpcomposeyouteam${targetId}proposalcandidat&owner=${chatId}`,
        };
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (!title) return ""; // Return an empty string if title is undefined
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  const handleScroll = (e) => {
    const target = e.target;
  };


  const handleOptionClick = (e) => {
    setSelectedProjectId(null);
    const key = Object.keys(e)[0]; 
    setSelectedOption(e[key]); 
    toggleDropdown();
  };

  // Format date utility function
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    return `${day} ${month}`;
  }

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
                {selectedOption === "Contrats" && (
                  <Badge>{contrats?.length}</Badge>
                )}
                {selectedOption === "My Products" && (
                  <Badge>{myproducts?.length}</Badge>
                )}
                {selectedOption === "Purchased Products" && (
                  <Badge>{soldedproducts?.length}</Badge>
                )}
                {selectedOption === "ItGalaxy Contactor" && (
                  <Badge>{contactors?.length}</Badge>
                )}
                {selectedOption === "Recruitment" && (
                  <Badge>{recrutments?.length}</Badge>
                )}
              </div>
              <AddButton onClick={handleModalChoiceCompany} theme={theme}>
              <span>+</span>
              </AddButton>
              {showChoiceCompany && (
                <ModalShowChoiceCandidat
                  show={showChoiceCompany}
                  onHide={closeModalChoiceCandidat}
                />
              )}
              {isOpen && (
                <DropdownMenu>
                  {[
                    { Projects: "Projects" },
                    { Contrats: "Contrats" },
                    { "Produits achetés": "Purchased Products" },
                    { "ItGalaxy Contactor": "ItGalaxy Contactor" },
                    { Accounting: "Accounting" },
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
          <ListWrapper ref={listRef} style={{ overflowY: "auto", maxHeight: "90vh" }}>
            {!Array.isArray(fetchedData?.data) ? (
              <div>No projects found.</div>
            ) : (
              fetchedData.data.map((project, index) => {
                if (selectedOption === "Projects" || selectedOption === "Contrats") {
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
                if (
                  selectedOption === "My Products" ||
                  selectedOption === "Purchased Products"
                ) {
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
                  } else {
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
                              ? "#6366f1"
                              : "transparent",
                        }}
                      >
                        <ProjectTitle theme={theme}>
                          {" "}
                          {`${project.title}`}
                        </ProjectTitle>

                        <ProjectDescription theme={theme}></ProjectDescription>
                        <ProjectDate theme={theme}>{`Created at ${formatDate(
                          project.createdAt
                        )}`}</ProjectDate>
                      </ProjectItem>
                    );
                  }
                }
                if (
                  selectedOption === "ItGalaxy Contactor" &&
                  project.type === "CONTACTOR"
                ) {
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
                            ? "#6366f1"
                            : "transparent",
                      }}
                    >
                      {project.contacted.name ? (
                        <ProjectTitle
                          theme={theme}
                        >{`${project.contacted.name} ${project.contacted.first_name}`}</ProjectTitle>
                      ) : (
                        <ProjectTitle theme={theme}>
                          {project.contacted.username}
                        </ProjectTitle>
                      )}
                      <ProjectDescription theme={theme}></ProjectDescription>
                      <ProjectDate theme={theme}>{`Created at ${formatDate(
                        project.createdAt
                      )}`}</ProjectDate>
                    </ProjectItem>
                  );
                }

                if (
                  selectedOption === "Recruitment" &&
                  project.type === "RECRUITMENT"
                ) {
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
                            ? "#6366f1"
                            : "transparent",
                      }}
                    >
                      <ProjectTitle
                        theme={theme}
                      >{`${project.recruter.name}  ${project.recruter.first_name}`}</ProjectTitle>
                      <ProjectDescription theme={theme}></ProjectDescription>
                      <ProjectDate theme={theme}>{`Created at ${formatDate(
                        project.createdAt
                      )}`}</ProjectDate>
                    </ProjectItem>
                  );
                }
                if (selectedOption === "Accounting") {
                  const job = (project && project?.job) ? project?.job : null; // Safely access the 'job' array

                  if (job && (job?.type === "REQUEST_COMPANY_CREATION" || job?.type === "COMPANY")) {
                    if (project && project[0]) { // Check if project exists
                      return (
                        <ProjectItem
                          key={index}
                          onClick={() => handleProjectClick(selectedOption, project[0]?.id)}
                          theme={theme}
                          style={{
                            backgroundColor: selectedProjectId === project[0]?.id ? "#D8D8D8" : "transparent",
                          }}
                        >
                          <ProjectTitle theme={theme}>
                            {`Company: ${job?.company_name}`}
                          </ProjectTitle>
                          <ProjectDescription theme={theme}></ProjectDescription>
                          <ProjectDate theme={theme}>
                            {`Created at ${formatDate(job?.createdAt)}`}
                          </ProjectDate>
                        </ProjectItem>
                      );
                    } else {
                      // Handle the case when project does not exist
                      return <div style={{ color: 'white' }}>No project available</div>;
                    }
                  }
                }
                return null; // Ensure there is a return statement for any project that does not match the above conditions
              })
            )}
          </ListWrapper>
        </ProjectListContainer>
      </MainContent>
      {loading && channelsList.length > 0 && <Spinner />}

      {/* Chat Component */}
      {usernameChat && channelsList.length > 0 && selectedProjectId ? (
        <ChatItGalaxy
          username={usernameChat}
          channelsList={channelsList}
          setShowModalDetails={setShowModalDetails}
          setIds={setIds}
          projectId={selectedProjectId}
          type={type}
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
            <ModalShowProposalEntreprise
              proposal={selectedItem.data}
              type={"CANDIDAT"}
              footer={
                <DeleteContact onClick={handleDeleteShowModal}>
                  Delete the proposal
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={handleCloseShowModal}
            />
          )}
          {selectedOption === "Contrats" && (
            <ModalShowProposalAO
              proposal={selectedItem.data}
              type={"APPLIER"}
              footer={
                <DeleteContact onClick={handleDeleteShowModal}>
                  Delete the proposal
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={handleCloseShowModal}
            />
          )}

          {selectedOption === "ItGalaxy Contactor" && (
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
          )}
          {selectedOption === "Accounting" && (
            <ModalShowAccounting
              accountingjob={selectedItem.data}
              type={"REQUEST"}
              footer={
                <DeleteContact onClick={handleCloseShowModal}>
                  Close Dashboard
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={handleCloseShowModal}
            />
          )}

          {selectedOption === "Recruitment" && (
            <ModalShowContact
              recruitment={selectedItem.data}
              type={"RECRUTED"}
              footer={
                <DeleteContact onClick={handleDeleteShowModal}>
                  Close Dashboard
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={handleCloseShowModal}
            />
          )}
        </>
      )}
      {/* Modal for decline payment */}
      {showModalDelete && (
        <ModalDeleteContact
          deleteFunct={deleteFunct}
          handleShowModal={handleCloseShowModal}
          showModalDelete={showModalDelete}
          footer={
            <ButtonContainerDelete>
              <DeleteProposalButton onClick={handleCloseShowModal}>
                Cancel{" "}
              </DeleteProposalButton>
              <AcceptProposalButton onClick={deleteFunct}>
                Yes, i am sure
              </AcceptProposalButton>
            </ButtonContainerDelete>
          }
        />
      )}
    </>
  );
};

export default ListCandidatContainer;
