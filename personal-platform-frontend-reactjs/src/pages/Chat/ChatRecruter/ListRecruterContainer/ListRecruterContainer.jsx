import ChatItGalaxy from "@components/ChatItGalaxy/ChatItGalaxy.jsx";
import ModalDeleteContact from "@components/ModalITgalaxy/ModalDeleteContact/ModalDeleteContact.jsx";
import ModalShowContact from "@components/ModalITgalaxy/ModalShowContact/ModalShowContact.jsx";
import Spinner from "@components/Spinner/Spinner";
import {
  useDeleteContactMutation,
  useDeleteProposalAOMutation,
  useFilterItemsDetailsQuery,
  useGetFilteredChannelsQuery,
  useGetRecruterItemsQuery
} from "@services/api";
import ModalShowChoiceRecruter from "components/ModalITgalaxy/ModalShowChoiceRecruter/ModalShowChoiceRecruter";
import ModalShowProposalAO from "components/ModalITgalaxy/ModalShowProposalAO/ModalShowProposalAO";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AddDashboardDetails } from "../../../../redux/slice/DashboardDetails/DashboardDetailsSlice";
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
} from "./ListRecruterContainer.style";

const ListRecruterContainer = ({ idRecruter, chatId, usernameChat, theme }) => {
  const [jobs, setJobs] = useState([]);
  const [contactors, setContactors] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [recrutments, setRecrutments] = useState([]);
  const [accounting, setAccounting] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Mes offres");
  const [isOpen, setIsOpen] = useState(false);
  const [showChoiceCompany, setShowChoiceCompany] = useState(false);
  const [channelsQuery, setChannelsQuery] = useState({});
  const [channelsList, setChannelsList] = useState([]);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [ids, setIds] = useState({ type: "", projectId: "", proposalId: "" });
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [channelSelected, setChannelSelected] = useState("");
  const [deleteContact] = useDeleteContactMutation();
  const [deleteContrat] = useDeleteProposalAOMutation();
  const dispatch = useDispatch();
  const [type, setType] = useState("RECRUTER");
  const [loading, setLoading] = useState(false);

  const [dashboardDetails, setDashboardDetails] = useState({
    selectedOption: selectedOption,
    channelId: channelSelected,
  });

  useEffect(() => {
    const newDashboardDetails = {
      selectOption: selectedOption,
      channelId: channelSelected,
    };

    setDashboardDetails(newDashboardDetails);
    // Dispatch the new dashboard details
    dispatch(AddDashboardDetails(newDashboardDetails));
  }, [selectedOption, channelSelected, dispatch]);

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
        case "Contactor":
          await deleteContactFunction();
          break;
        case "Contrat":
          await deleteContratFunction();
          break;
      }
    } catch (error) {
      console.error("Failed to delete contact:", error);
      toast.error("Error deleting contact: " + error.message, {
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
    refetch();
    refetchChannel();
    handleCloseShowModal();
  };

  const deleteContratFunction = async () => {
    await deleteContrat(selectedItem.data.id).unwrap(); // Ensure unwrap() is called correctly
    toast.success("Contrat was deleted", {
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

  const closeModalChoiceRecruter = () => {
    setShowChoiceCompany(false);
  };

  const {
    data: fetchedData,
    error: fetchError,
    isLoading,
    refetch,
  } = useGetRecruterItemsQuery(
    {
      filterType: selectedOption.toLowerCase(),
      params: idRecruter,
    },
    {
      skip: !idRecruter,
    }
  );

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
      case "Contrat":
        return `/${ids.proposalId}`;
      case "Contactor":
        return `/${ids.projectId}`;
      case "Product":
        return `/${ids.proposalId}`;
      case "Recruitment":
        return `/${ids.projectId}`;
      case "AccountingJob":
        window.location.href = `/company`;
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
    // Update jobs based on the fetched data, ensuring the correct structure based on the selected option
    if (fetchedData?.data) {
      switch (selectedOption) {
        case "Mes offres":
          setJobs(fetchedData.data);
          setType("RECRUTER");
          break;
        case "Vos propositions":
          setProposals(fetchedData.data);
          setType("RECRUTER");
          break;
        case "Contactors":
          setContactors(fetchedData.data);
          setType("RECRUTER");
          break;
        case "Recruitments":
          setRecrutments(fetchedData.data);
          setType("RECRUTER");
          break;
        case "Accounting":
          setAccounting(fetchedData.data);
          setType("PRESIDENT");
          break;
        default:
          break;
      }
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
      case "Mes offres":
        return {
          positionChannel: "user",
          queryChannel: `?channelprefix=grpContrat${targetId}appeloffreproposal&user=${chatId}`,
        };
      case "Vos propositions":
        return {
          positionChannel: "owner",
          queryChannel: `?channelprefix=grpContrat${targetId}appeloffreproposal&owner=${chatId}`,
        };
      case "Recruitments":
        return {
          positionChannel: "owner",
          queryChannel: `?channelprefix=grpRecruitment${targetId}recruted&owner=${chatId}`,
        };
      case "Contactors":
        return {
          positionChannel: "owner",
          queryChannel: `?channelprefix=grpContactor${targetId}contacted&owner=${chatId}`,
        };
      case "Accounting":
        return {
          positionChannel: "user",
          queryChannel: `?channelprefix=grpAccountingJob${targetId}workingFolder&user=${chatId}`,
        };
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (!title) return ""; // Return an empty string if title is undefined
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  const handleOptionClick = (e) => {
    setSelectedProjectId(null);
    setSelectedOption(Object.keys(e)[0]);
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
                {selectedOption === "Mes offres" && <Badge>{jobs?.length}</Badge>}
                {selectedOption === "Vos propositions" && (
                  <Badge>{proposals?.length}</Badge>
                )}
                {selectedOption === "Contactors" && (
                  <Badge>{contactors?.length}</Badge>
                )}
                {selectedOption === "Recruitments" && (
                  <Badge>{recrutments?.length}</Badge>
                )}
              </div>
              <AddButton onClick={handleModalChoiceCompany} theme={theme}>
               <span>+</span>
              </AddButton>
              {showChoiceCompany && (
                <ModalShowChoiceRecruter
                  show={showChoiceCompany}
                  onHide={closeModalChoiceRecruter}
                />
              )}
              {isOpen && (
                <DropdownMenu>
                  {[
                    { "Mes offres": "Mes offres" },
                    { "Vos propositions": "Vos propositions" },
                    { Contactors: "Contactors" },
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
          <ListWrapper>
            {!Array.isArray(fetchedData?.data) ? (
              <div>No jobs found.</div>
            ) : (
              fetchedData.data.map((project, index) => (
                <>
                  {selectedOption === "Mes offres" &&
                    project.type === "Contrat" && (
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
                          {truncateTitle(project.title, 15)}
                        </ProjectTitle>
                        <ProjectDescription theme={theme}></ProjectDescription>
                        <ProjectDate theme={theme}>{`Created at ${formatDate(
                          project.createdAt
                        )}`}</ProjectDate>
                      </ProjectItem>
                    )}

                  {selectedOption === "Contactors" &&
                    project.type === "CONTACTOR" && (
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
                          <ProjectTitle theme={theme}>
                            {project.contacted.name +
                              "  " +
                              project.contacted.first_name}
                          </ProjectTitle>
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
                    )}

                  {selectedOption === "Recruitments" &&
                    project.type === "RECRUITMENT" && (
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
                          {project.recruted.name +
                            "  " +
                            project.recruted.first_name}
                        </ProjectTitle>
                        <ProjectDescription theme={theme}></ProjectDescription>
                        <ProjectDate theme={theme}>{`Created at ${formatDate(
                          project.createdAt
                        )}`}</ProjectDate>
                      </ProjectItem>
                    )}
                  {(selectedOption === "Accounting" && project?.job) && (
                    (project?.job?.type === "REQUEST_COMPANY_CREATION" || project?.job?.type === "COMPANY") && (
                      <ProjectItem
                        key={index}
                        onClick={() => handleProjectClick(selectedOption, project[0].id)} // Fixed the reference to project.job[0]
                        theme={theme}
                        style={{
                          backgroundColor: selectedProjectId === project[0].id ? "#D8D8D8" : "transparent",
                        }}
                      >
                        <ProjectTitle theme={theme}>
                          {`Company: ${project?.job?.company_name}`}
                        </ProjectTitle>
                        <ProjectDescription theme={theme}></ProjectDescription>
                        <ProjectDate theme={theme}>
                          {`Created at ${formatDate(project?.createdAt)}`}
                        </ProjectDate>
                      </ProjectItem>
                    )
                  )}
                </>
              ))
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
            border: "1px solid black",
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
          {selectedOption === "Mes offres" && (
            <ModalShowProposalAO
              proposal={selectedItem.data}
              type={"RECRUTER"}
              footer={
                <DeleteContact onClick={handleDeleteShowModal}>
                  Delete the propsal
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={handleCloseShowModal}
            />
          )}
          {selectedOption === "Vos propositions" && (
            <ModalShowProposalAO
              proposal={selectedItem.data}
              type={"RECRUTED"}
              footer={
                <DeleteContact onClick={handleDeleteShowModal}>
                  Delete the propsal
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={handleCloseShowModal}
            />
          )}

          {selectedOption === "Contactors" && (
            <ModalShowContact
              contact={selectedItem.data}
              type={"CONTACTOR"}
              footer={
                <DeleteContact onClick={handleDeleteShowModal}>
                  Delete the contact
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={handleCloseShowModal}
            />
          )}

          {selectedOption === "Recruitments" && (
            <ModalShowContact
              recruitment={selectedItem.data}
              type={"RECRUTER"}
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
      )}
    </>
  );
};

export default ListRecruterContainer;
