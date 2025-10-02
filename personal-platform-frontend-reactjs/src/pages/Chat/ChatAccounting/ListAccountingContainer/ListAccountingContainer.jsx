import ChatItGalaxy from "@components/ChatItGalaxy/ChatItGalaxy.jsx";
import ModalShowAccounting from "@components/ModalITgalaxy/ModalShowAccounting/ModalShowAccounting.jsx";
import Spinner from "@components/Spinner/Spinner";
import {
  useFilterItemsDetailsQuery,
  useGetAccountingItemsQuery,
  useGetFilteredChannelsQuery
} from "@services/api";
import ModalShowChoiceAccounting from "components/ModalITgalaxy/ModalShowChoiceAccounting/ModalShowChoiceAccounting";
import { useEffect, useState } from "react";
import {
  AddButton,
  Badge,
  DeleteContact,
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
} from "./ListAccountingContainer.style";

const ListAccountingContainer = ({
  idAccounting,
  chatId,
  usernameChat,
  theme,
}) => {
  const [myAccountingRequest, setMyAccountingRequest] = useState([]);
  const [accountingJobs, setAccountingJobs] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedOption, setSelectedOption] = useState("My Folders");
  const [isOpen, setIsOpen] = useState(false);
  const [showChoiceCompany, setShowChoiceCompany] = useState(false);
  const [channelsQuery, setChannelsQuery] = useState({});
  const [channelsList, setChannelsList] = useState([]);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [ids, setIds] = useState({ type: "", projectId: "", proposalId: "" });
  const [selectedItem, setSelectedItem] = useState(null);
  const [channelSelected, setChannelSelected] = useState("");
  const [type, setType] = useState("ACCOUNTING");
  const [loading, setLoading] = useState(false);


  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleModalChoiceCompany = () => {
    setShowChoiceCompany(true);
  };

  const closeModalChoiceAccounting = () => {
    setShowChoiceCompany(false);
  };

  const {
    data: fetchedData,
    error: fetchError,
    isLoading,
    refetch,
  } = useGetAccountingItemsQuery(
    {
      filterType: selectedOption.toLowerCase(),
      params: idAccounting,
    },
    {
      skip: !idAccounting,
    }
  );

  const {
    data: channelList,
    error: errorChannelList,
    isLoading: isLoadingChannelList,
  } = useGetFilteredChannelsQuery(channelsQuery, {
    skip: Object.keys(channelsQuery).length === 0,
  });

  const {
    data: selectedItemData,
    error: fetchErrorSelectedItem,
    isLoading: isLoadingSelectedItem,
  } = useFilterItemsDetailsQuery(
    {
      filterType: ids.type,
      params: `/${ids.projectId}`,
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
    if (!isLoadingChannelList && channelList) {
      if (errorChannelList) {
        console.error("Error fetching channels:", errorChannelList);
      } else {
        setChannelsList(channelList);
      }
    }
  }, [channelsQuery, isLoadingChannelList, errorChannelList, channelList]);

  useEffect(() => {
    if (fetchedData?.data) {
      if (selectedOption === "My Folders") {
        setAccountingJobs(fetchedData.data);
        setType("ACCOUNTING");
      } else if (selectedOption === "My Request") {
        setMyAccountingRequest(fetchedData.data);
        setType("PRESIDENT");
      }
    }
  }, [fetchedData, selectedOption]);

  const handleProjectClick = (filtre, targetId) => {
    if (targetId) {
      setLoading(true);
      setSelectedProjectId(targetId);
      const queryChannel = getChannelQuery(filtre, targetId);
      setChannelsQuery(queryChannel);
    }
  };

  const getChannelQuery = (filtre, targetId) => {
    const baseQuery = `?channelprefix=grpAccountingJob${targetId}workingFolder&${filtre === "My Folders" ? "owner" : "user"
      }=${chatId}`;
    return {
      positionChannel: filtre === "My Folders" ? "owner" : "user",
      queryChannel: baseQuery,
    };
  };

  const truncateTitle = (title, maxLength) => {
    return title && title.length > maxLength
      ? title.slice(0, maxLength) + "..."
      : title || "";
  };

  const handleOptionClick = (e) => {
    setSelectedProjectId(null);
    setSelectedOption(Object.keys(e)[0]);
    toggleDropdown();
  };

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    return `${date.getDate()} ${date.toLocaleString("en-US", {
      month: "long",
    })}`;
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
                {selectedOption === "My Folders" && (
                  <Badge>{accountingJobs?.length}</Badge>
                )}
                {selectedOption === "My Request" && (
                  <Badge>{myAccountingRequest.lenght}</Badge>
                )}
              </div>
              <AddButton onClick={handleModalChoiceCompany} theme={theme}>
                +
              </AddButton>
              {showChoiceCompany && (
                <ModalShowChoiceAccounting
                  show={showChoiceCompany}
                  onHide={closeModalChoiceAccounting}
                />
              )}
              {isOpen && (
                <DropdownMenu>
                  {["My Folders", "My Request"].map((option, index) => (
                    <Option
                      key={index}
                      onClick={() => handleOptionClick({ [option]: option })}
                    >
                      {option}
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
              <div>No folder affected found.</div>
            ) : (
              fetchedData.data.map((project, index) =>
                selectedOption === "My Folders" ? (
                  <ProjectItem
                    key={project.id} // Use project id as the key for better performance
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
                    <ProjectTitle
                      theme={theme}
                    >{`Company ${project.job?.company_name}`}</ProjectTitle>
                    <ProjectDescription theme={theme}></ProjectDescription>
                    <ProjectDate theme={theme}>{`Created at ${formatDate(
                      project.createdAt
                    )}`}</ProjectDate>
                  </ProjectItem>
                ) : (
                  (project?.job[0]?.type === "REQUEST_COMPANY_CREATION" ||
                    project?.job[0]?.type === "COMPANY") && ( // Removed curly braces
                    <ProjectItem
                      key={index}
                      onClick={() =>
                        handleProjectClick(selectedOption, project[0].id)
                      }
                      theme={theme}
                      style={{
                        backgroundColor:
                          selectedProjectId === project[0].id
                            ? "#D8D8D8"
                            : "transparent",
                      }}
                    >
                      <ProjectTitle
                        theme={theme}
                      >{`Company: ${project?.job[0]?.company_name}`}</ProjectTitle>
                      <ProjectDescription theme={theme}></ProjectDescription>
                      <ProjectDate theme={theme}>{`Created at ${formatDate(
                        project.job[0]?.createdAt
                      )}`}</ProjectDate>
                    </ProjectItem>
                  )
                )
              )
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
            minHeight: "100%",
            backgroundColor: "white",
            textAlign: "center",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <div>
            <h2>Aucun projet sélectionné</h2>
            <p>Veuillez sélectionner un projet pour démarrer une discussion.</p>
          </div>
        </div>
      )}
      {showModalDetails && selectedItem && (
        <>
          {selectedOption === "My Folders" && (
            <ModalShowAccounting
              accountingjob={selectedItem.data} // Use optional chaining to avoid errors
              type={"ACCOUNTING"}
              footer={
                <DeleteContact onClick={() => setShowModalDetails(false)}>
                  Close Dashboard
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={() => {
                setShowModalDetails(false);
                setSelectedItem(null);
              }}
            />
          )}

          {selectedOption === "My Request" && (
            <ModalShowAccounting
              accountingjob={selectedItem.data} // Use optional chaining to avoid errors
              type={"REQUEST"}
              footer={
                <DeleteContact onClick={() => setShowModalDetails(false)}>
                  Close Dashboard
                </DeleteContact>
              }
              confirmShow={showModalDetails}
              closeModal={() => {
                setShowModalDetails(false);
                setSelectedItem(null);
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default ListAccountingContainer;
