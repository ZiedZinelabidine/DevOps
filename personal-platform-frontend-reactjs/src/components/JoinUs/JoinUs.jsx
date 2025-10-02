/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { useIntl } from "react-intl";
import Register from "../Authentification/modals/register";
import { ChooseOptionChat } from "../ChooseOptionChat/ChooseOptionChat";
import { GenericFormChatbot } from "../GenericFormChatbot/GenericFormChatbot";
import Header from "../Header/Header";
import {
  ButtonGroupsContainerHome,
  FlexCenteredContainer,
  FontSize20PxContainer,
  FontSize20PxGrayContainer,
  FontSize25Px495057Color,
  FontSize30PXContainer,
  FontSize40PxContainer,
  InlineBlockContainer,
  InlineBlockW45PContainer,
  InlineFlexContainer,
  MarginBottom20PxContainer,
  Padding10PxContainer,
  ProjectTypeCardsContainer,
  SelectedItemContainer,
  UserTypeCardsContainer,
} from "./JoinUs.style";
const chatBotIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/chatbox.png`;

const UserTypeCards = memo(
  ({
    items,
    selectedItem,
    setSelectedItem,
    setType,
    setSelected,
    isTablet,
    intl,
    setSelectedOption,
  }) => (
    <UserTypeCardsContainer>
      {items?.map((item) => (
        <SelectedItemContainer
          key={item?.id}
          isSelected={selectedItem?.id === item?.id}
          onClick={() => {
            item.label ===
            intl.formatMessage({ id: "join_us.user_types.business.label" })
              ? setType("Business")
              : item.label ===
                intl.formatMessage({
                  id: "join_us.user_types.individual.label",
                })
              ? setType("Individual")
              : setType("Recruiter");
            setSelectedItem(item);
            setSelected(false);
            setSelectedOption("");
          }}
        >
          {typeof item.icon === "string" && item.icon.endsWith(".webp") ? (
            <div>
              <img
                src={item.icon}
                alt={item.label}
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          ) : (
            <div icon={item.icon} iconSize="lg"></div>
          )}
          <FontSize30PXContainer>{item.label}</FontSize30PXContainer>
          {!isTablet && (
            <Padding10PxContainer isSelected={selectedItem?.id === item?.id}>
              {item.description}
            </Padding10PxContainer>
          )}
        </SelectedItemContainer>
      ))}
    </UserTypeCardsContainer>
  )
);

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const TitleAndDescription = memo(({ title, description, shouldShow }) => {
  if (!shouldShow) return null;

  return (
    <>
      <InlineFlexContainer>
        <FontSize40PxContainer>{title}</FontSize40PxContainer>
        <div icon="fa-hands-clapping"></div>
      </InlineFlexContainer>
      <FontSize20PxContainer>{description}</FontSize20PxContainer>
    </>
  );
});

export const JoinUs = (props) => {
  const intl = useIntl();
  const handleModalRegister = useCallback(() => {
    setRedirect({
      proxy: "",
      defaultkey: "",
      openModalRegister: false,
      setOpenModalRegister: false,
      openModalLoginDefault: false,
      handleModalRegister: () => {},
      switchBetweenModals: false,
      freelance: false,
      recruiter: false,
      buisness: false,
    });
    setSelectedOption("");
    setButtonClicked(0);
    setSelected(false);
  }, []);

  const [selected, setSelected] = useState(false);
  const [type, setType] = useState("Business");
  const [selectedOption, setSelectedOption] = useState("Business");
  const [redirect, setRedirect] = useState({
    proxy: "",
    defaultkey: "",
    openModalRegister: false,
    setOpenModalRegister: false,
    openModalLoginDefault: false,
    handleModalRegister: () => {},
    switchBetweenModals: false,
    freelance: false,
    recruiter: false,
    buisness: false,
  });
  const [buttonClicked, setButtonClicked] = useState(0);

  const handleOptionSelect = useCallback((option) => {
    setSelectedOption(option);
    setSelected(true);
    setButtonClicked((prev) => prev + 1);
  }, []);

  const renderContentChat = useCallback(() => {
    switch (selectedOption) {
      case intl.formatMessage({ id: "join_us.options.compose_team" }):
        return (
          <GenericFormChatbot
            setRedirect={setRedirect}
            items={[
              {
                img: chatBotIcon,
                title: intl.formatMessage({ id: "join_us.chatbot.guide" }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.project_title",
                }),
                name: "description",
                placeholder: "",
              },
              {
                img: chatBotIcon,
                title: intl.formatMessage({
                  id: "join_us.chatbot.project_description",
                }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.project_objectives",
                }),
                placeholder: "",
              },
              {
                img: chatBotIcon,
                title: intl.formatMessage({
                  id: "join_us.chatbot.skills_intro",
                }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.skills_recommendation",
                }),
                name: "skills",
              },
            ]}
            selected={selected}
            setSelected={setSelected}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case intl.formatMessage({ id: "join_us.options.share_jobs" }):
        return (
          <GenericFormChatbot
            setRedirect={setRedirect}
            items={[
              {
                img: chatBotIcon,
                title: intl.formatMessage({ id: "join_us.chatbot.guide" }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.project_title",
                }),
                name: "description",
                placeholder: "",
              },
              {
                img: chatBotIcon,
                title: intl.formatMessage({
                  id: "join_us.chatbot.project_description",
                }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.project_objectives",
                }),
                placeholder: "",
              },
              {
                img: chatBotIcon,
                title: intl.formatMessage({
                  id: "join_us.chatbot.skills_intro",
                }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.skills_recommendation",
                }),
                name: "skills",
              },
            ]}
            selected={selected}
            setSelected={setSelected}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case intl.formatMessage({ id: "join_us.options.share_project" }):
        return (
          <GenericFormChatbot
            setRedirect={setRedirect}
            items={[
              {
                img: chatBotIcon,
                title: intl.formatMessage({ id: "join_us.chatbot.guide" }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.project_title",
                }),
                name: "description",
                placeholder: "",
              },
              {
                img: chatBotIcon,
                title: intl.formatMessage({
                  id: "join_us.chatbot.project_description",
                }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.project_objectives",
                }),
                placeholder: "",
              },
              {
                img: chatBotIcon,
                title: intl.formatMessage({
                  id: "join_us.chatbot.skills_intro",
                }),
                question: intl.formatMessage({
                  id: "join_us.chatbot.skills_recommendation",
                }),
                name: "skills",
              },
            ]}
            selected={selected}
            setSelected={setSelected}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
        case intl.formatMessage({ id: "join_us.options.project_estimation" }):
          return (
            <GenericFormChatbot
              setRedirect={setRedirect}
              items={[
                {
                  img: chatBotIcon,
                  title: intl.formatMessage({ id: "join_us.chatbot.guide" }),
                  question: intl.formatMessage({
                    id: "join_us.chatbot.project_title",
                  }),
                  name: "description",
                  placeholder: "",
                },
                {
                  img: chatBotIcon,
                  title: intl.formatMessage({
                    id: "join_us.chatbot.project_description",
                  }),
                  question: intl.formatMessage({
                    id: "join_us.chatbot.project_objectives",
                  }),
                  placeholder: "",
                },
                {
                  img: chatBotIcon,
                  title: intl.formatMessage({
                    id: "join_us.chatbot.skills_intro",
                  }),
                  question: intl.formatMessage({
                    id: "join_us.chatbot.skills_recommendation",
                  }),
                  name: "skills",
                },
              ]}
              selected={selected}
              setSelected={setSelected}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          );
      default:
        return null;
    }
  }, [
    selectedOption,
    buttonClicked,
    intl,
    selected,
    setSelected,
    setSelectedOption,
    setRedirect,
  ]);
  const typeTitle = useCallback(() => {
    // Handle parent type titles first
    const getParentTypeTitle = () => {
      switch (type) {
        case "Business":
          return (
            <Container style={{ marginTop: "30px" }}>
              <FontSize40PxContainer>
                {intl.formatMessage({ id: "join_us.business.title" })}
              </FontSize40PxContainer>
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.business.talent_pool" })}
              </FontSize25Px495057Color>
              <br />
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.business.perfect_fit" })}
              </FontSize25Px495057Color>
              <br />
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.business.workflow" })}
              </FontSize25Px495057Color>
              <br />
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.business.customize" })}
              </FontSize25Px495057Color>
            </Container>
          );
        case "Individual":
          return (
            <Container style={{ marginTop: "30px" }}>
              <FontSize40PxContainer>
                {intl.formatMessage({ id: "join_us.individual.title" })}
              </FontSize40PxContainer>
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.individual.easy_signup" })}
              </FontSize25Px495057Color>
              <br />
              <FontSize25Px495057Color>
                {intl.formatMessage({
                  id: "join_us.individual.build_reputation",
                })}
              </FontSize25Px495057Color>
              <br />
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.individual.flexible_work" })}
              </FontSize25Px495057Color>
              <br />
            </Container>
          );
        case "Recruiter":
          return (
            <Container style={{ marginTop: "30px" }}>
              <FontSize40PxContainer>
                {intl.formatMessage({ id: "join_us.recruiter.title" })}
              </FontSize40PxContainer>
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.recruiter.talent_pool" })}
              </FontSize25Px495057Color>
              <br />
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.recruiter.hiring" })}
              </FontSize25Px495057Color>
              <br />
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.recruiter.guidance" })}
              </FontSize25Px495057Color>
              <br />
            </Container>
          );
        default:
          return null;
      }
    };

    // Get specific option title if it exists
    const getSpecificOptionTitle = () => {
      switch (selectedOption) {
        case intl.formatMessage({ id: "join_us.options.compose_team" }):
          return (
            <>
              <FontSize40PxContainer>
                {intl.formatMessage({ id: "join_us.compose_team.title" })}
              </FontSize40PxContainer>
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.compose_team.description" })}
              </FontSize25Px495057Color>
            </>
          );
        case intl.formatMessage({ id: "join_us.options.share_project" }):
          return (
            <>
              <FontSize40PxContainer>
                {intl.formatMessage({ id: "join_us.on_demand.title" })}
              </FontSize40PxContainer>
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.on_demand.description" })}
              </FontSize25Px495057Color>
            </>
          );
        case intl.formatMessage({ id: "join_us.options.it_marketplace" }):
          return (
            <>
              <FontSize40PxContainer>
                {intl.formatMessage({ id: "join_us.marketplace.title" })}
              </FontSize40PxContainer>
              <FontSize25Px495057Color>
                {intl.formatMessage({ id: "join_us.marketplace.description" })}
              </FontSize25Px495057Color>
            </>
          );
        default:
          return null;
      }
    };

    // Show parent title if:
    // 1. Not selected or signup modal is open
    // 2. Selected but no specific option title exists
    if (!selected || redirect.openModalRegister) {
      return getParentTypeTitle();
    }

    // Try to get specific option title
    const specificTitle = getSpecificOptionTitle();
    return specificTitle || getParentTypeTitle();
  }, [type, selected, selectedOption, intl, redirect.openModalRegister]);
  const contentCards = useMemo(() => {
    switch (type) {
      case "Business":
        return (
          <InlineBlockContainer>
            <ProjectTypeCardsContainer>
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({ id: "join_us.setup_business" })}
                items={[
                  intl.formatMessage({ id: "join_us.options.compose_team" }),
                  intl.formatMessage({ id: "join_us.options.share_project" }),
                  intl.formatMessage({ id: "join_us.options.project_estimation" }),
                ]}
              />
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({
                  id: "join_us.marketplace_services",
                })}
                header2={""}
                items={[
                  intl.formatMessage({ id: "join_us.options.it_marketplace" }),
                ]}
              />
            </ProjectTypeCardsContainer>
            <ProjectTypeCardsContainer>
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({ id: "join_us.cloud_itgalaxy" })}
                header2={""}
                items={[
                  intl.formatMessage({ id: "join_us.options.cloud_marketplace_servers" }),
                  intl.formatMessage({ id: "join_us.options.cloud_marketplace_databases" }),
                ]}
              />
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({ id: "join_us.trainings" })}
                header2={""}
                items={[
                  intl.formatMessage({ id: "join_us.options.videos_training" }),
                ]}
              />
            </ProjectTypeCardsContainer>
          </InlineBlockContainer>
        );
      case "Individual":
        return (
          <InlineBlockContainer>
            <ProjectTypeCardsContainer>
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({
                  id: "join_us.individual.find_jobs",
                })}
                header2={""}
                items={[
                  intl.formatMessage({
                    id: "join_us.individual.create_profile",
                  }),
                  intl.formatMessage({ id: "join_us.individual.apply_jobs" }),
                ]}
              />
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({
                  id: "join_us.individual.create_business",
                })}
                header2={""}
                items={[
                  intl.formatMessage({
                    id: "join_us.individual.share_training",
                  }),
                  intl.formatMessage({
                    id: "join_us.individual.share_services",
                  }),
                ]}
              />
            </ProjectTypeCardsContainer>
            <ProjectTypeCardsContainer>
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({
                  id: "join_us.individual.marketplace_header",
                })}
                header2={""}
                items={[
                  intl.formatMessage({
                    id: "join_us.individual.services_integrate",
                  }),
                  intl.formatMessage({
                    id: "join_us.individual.videos_training",
                  }),
                  intl.formatMessage({
                    id: "join_us.individual.cloud_marketplace",
                  }),
                ]}
              />
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({ id: "join_us.create_company" })}
                header2={""}
                items={[intl.formatMessage({ id: "join_us.create_company" })]}
              />
            </ProjectTypeCardsContainer>
          </InlineBlockContainer>
        );
      case "Recruiter":
        return (
          <InlineBlockContainer>
            <ProjectTypeCardsContainer>
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({ id: "join_us.jobs" })}
                items={[
                  intl.formatMessage({ id: "join_us.options.share_jobs" }),
                  intl.formatMessage({ id: "join_us.options.apply_jobs" }),
                ]}
              />
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({
                  id: "join_us.itgalaxy_contractors",
                })}
                items={[
                  intl.formatMessage({ id: "join_us.options.itgalaxy_nav" }),
                ]}
              />
            </ProjectTypeCardsContainer>
            <ProjectTypeCardsContainer>
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({ id: "join_us.become_recruiter" })}
                items={[
                  intl.formatMessage({
                    id: "join_us.options.get_recruitment_link",
                  }),
                ]}
              />
              <ChooseOptionChat
                selected={selected}
                setSelected={setSelected}
                setSelectedOption={handleOptionSelect}
                header1={intl.formatMessage({ id: "join_us.create_recruiter_company" })}
                header2={""}
                items={[intl.formatMessage({ id: "join_us.create_recruiter_company" })]}
              />
            </ProjectTypeCardsContainer>
          </InlineBlockContainer>
        );
    }
  }, [type, selected, setSelected, handleOptionSelect, intl]);
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    icon: "fa fa-check fa-4x",
    label: intl.formatMessage({ id: "join_us.user_types.business.label" }),
    description: intl.formatMessage({
      id: "join_us.user_types.business.description",
    }),
  });
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsTablet(window.innerWidth <= 1024);
    }, 250);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (selectedOption) {
      switch (selectedOption) {
        case "IT Products":
        case "Reservez des Serveurs":
        case "Reservez des bases de données":
        case "Formations en ligne":
          setRedirect({
            proxy: "products",
            openModalRegister: true,
            setOpenModalRegister: true,
            openModalLoginDefault: false,
            handleModalRegister,
            defaultkey: "entreprise",
            switchBetweenModals: true,
            freelance: false,
            recruiter: false,
            buisness: true,
          });
          break;
        case "Créez un profil et Recevez des propositions des missions freelance": 
        case "Postulez aux missions freelance ou contrats":  
        case "Create your own company":
        case "Partagez vos formations en ligne":  
        case "Partagez vos code utiles prét à etre intégrer":
        case "Formations IT en ligne":
        case "Code prêts à être intégrés":
        case "ItGalaxy Cloud":
        case "Créez votre status Freelance avec nos experts":          
          setRedirect({
            proxy: "shareproduct",
            defaultkey: "freelance",
            openModalRegister: true,
            setOpenModalRegister: true,
            openModalLoginDefault: false,
            handleModalRegister,
            switchBetweenModals: true,
            freelance: true,
            recruiter: false,
            buisness: false,
          });
          break;
        case "Partagez vos profils":
        case "ItGalaxy Navigator":
        case "Obtenez votre propre lien de recrutement": 
        case "Créez votre status Recruteur Freelance avec nos experts":          
             setRedirect({
              proxy: "profilCandidat",
              defaultkey: "recruiter",
              openModalRegister: true,
              setOpenModalRegister: true,
              openModalLoginDefault: false,
              handleModalRegister,
              switchBetweenModals: true,
              freelance: false,
              recruiter: true,
              buisness: false,
            });
            break;
        default:
          break;
      }
    }
  }, [selectedOption, buttonClicked]);

  return (
    <>
      {
        <>
          <Header />
          <FlexCenteredContainer>
            <InlineFlexContainer style={{ marginTop: "5%" }}>
              <InlineBlockW45PContainer>
                <MarginBottom20PxContainer>
                  <FontSize30PXContainer>
                    {intl.formatMessage({ id: "join_us.what_to_do" })}
                  </FontSize30PXContainer>
                  <br />
                  <FontSize20PxGrayContainer>
                    {intl.formatMessage({ id: "join_us.choose_account_type" })}
                  </FontSize20PxGrayContainer>
                </MarginBottom20PxContainer>
                <UserTypeCards
                  items={props.items}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                  setType={setType}
                  setSelected={setSelected}
                  isTablet={isTablet}
                  intl={intl}
                  setSelectedOption={setSelectedOption}
                />
                <hr style={{ borderTop: "2px solid", opacity: "1" }} />
                {!isTablet && typeTitle()}
              </InlineBlockW45PContainer>
              <ButtonGroupsContainerHome>
                <TitleAndDescription
                  title={props.title}
                  description={props.description}
                  shouldShow={
                    selectedOption !==
                      intl.formatMessage({
                        id: "join_us.options.compose_team",
                      }) &&
                    selectedOption !==
                      intl.formatMessage({
                        id: "join_us.options.share_jobs",
                      }) &&
                    selectedOption !==
                      intl.formatMessage({
                        id: "join_us.options.share_project",
                      }) &&  selectedOption !==
                      intl.formatMessage({
                        id: "join_us.options.project_estimation",
                      })
                  }
                />
                {selectedOption ===
                  intl.formatMessage({ id: "join_us.options.compose_team" }) ||
                selectedOption ===
                  intl.formatMessage({ id: "join_us.options.share_jobs" }) ||
                selectedOption ===
                  intl.formatMessage({ id: "join_us.options.share_project" }) ||
                selectedOption ===
                  intl.formatMessage({ id: "join_us.options.project_estimation" })  
                  ? renderContentChat()
                  : contentCards}
              </ButtonGroupsContainerHome>
            </InlineFlexContainer>
          </FlexCenteredContainer>
          {redirect.openModalRegister && (
            <Register
              openModalRegister={redirect.openModalRegister}
              setOpenModalRegister={redirect.setOpenModalRegister}
              openModalLoginDefault={redirect.openModalLoginDefault}
              handleModalRegister={redirect.handleModalRegister}
              switchBetweenModals={redirect.switchBetweenModals}
              proxy={redirect.proxy}
              freelance={redirect.freelance}
              recruiter={redirect.recruiter}
              buisness={redirect.buisness}
              defaultkey={redirect.defaultkey}
            />
          )}
        </>
      }
    </>
  );
};
