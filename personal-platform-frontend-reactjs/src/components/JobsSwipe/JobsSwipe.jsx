import { useCallback, useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useSprings, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import { Heart, X, Sparkles, RefreshCw, SearchX, Sun, Code, Laptop, MapPin, Euro, ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'lucide-react';
import HeaderGen from 'components/Header/Header';
import ModalAdvancedSearch from "components/ModalITgalaxy/ModalAdvancedSearch/ModalAdvancedSearch";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { categoryData } from "../../data/categoryData";
import { countriesData } from "../../data/countriesData";
import { languagesData } from "../../data/languagesData";
import { skillsData } from "../../data/skillData";
import { useGetJobsQuery } from "../../redux/api/jobs/JobsApi";
import GenericInput from "../Inputs/GenericInput/GenericInput";
import { formConfig } from "./JobsSwipe.constants";
import Register from "components/Authentification/modals/register";
import {
  DetailedDescription,
  SideDescription,
  DescriptionText,
  ExpandButton,
  MetaItem,
  JobMeta,
  SkillBadge,
  SkillsGrid,
  ActionButton,
  ActionButtons,
  ScrollableContent,
  Badge,
  CardContent,
  Card,
  Main,
  EmptyStateText,
  RefreshButtonEmpty,
  EmptyStateTitle,
  EmptyStateIcon,
  Container,
  GlobalStyle,
  theme,
  CardContainer,
  Section,
  SearchBar,
  SearchInputContainer,
  AdvancedSearchButtonContainer,
  RefreshButton,
  ArrowIcon,
  EmptyStateContainer
} from "./style";
import DisplayRawHtml from "@components/DisplayRawHtml/DisplayRawHtml";
import { Helmet } from "react-helmet";


export default function JobsSwipe() {
  const queryParams = new URLSearchParams(window.location.search);
  const agence = queryParams.get("agence");
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const { category, min, max, skill, language } = useParams();
  const [showModalAdvancedSearch, setShowModalAdvancedSearch] = useState(false);
  const [showModalApply, setShowModalApply] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2000000);
  const [filterType, setFilterType] = useState("All");
  const [jobsData, setJobsData] = useState();
  const [addNewJob, setAddNewJob] = useState(false);
  const formMethods = useForm({});
  const location = useLocation();
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [declining, setDeclining] = useState(new Set());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [noJobsFound, setNoJobsFound] = useState(false);

  const getProjectType = (type) => {
    return type === 'SHARETASK' ? 'Projet à prix fixe' : 'Contrat';
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setNoJobsFound(false);
    setSearchQuery("")

    // Reset all states
    setExpandedDescriptions(new Set());
    setDeclining(new Set());
    gone.clear();

    // Reset all cards to initial position
    api.start(i => ({
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      config: { tension: 500, friction: 30 }
    }));

    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false);
      setNoJobsFound(Math.random() > 0.7);
    }, 1000);
  };

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };

  const handleShowModalAdvancedSearch = () => {
    setShowModalAdvancedSearch(!showModalAdvancedSearch);
  };

  // Validate parameters and set initial form data
  useEffect(() => {
    let shouldRedirect = false;
    let newFormData = { ...formData };
    let queryParams;

    if (category) {
      const formattedCategory = category.replace(/-/g, ' ').toUpperCase();
      const validCategory = categoryData.find(
        c => c.value === formattedCategory
      );

      if (validCategory) {
        newFormData.positions = [{ value: validCategory.value, label: validCategory.label }];
        queryParams += `&category=${category}`;
        setSearchQuery(queryParams);
      } else {
        shouldRedirect = true;
      }
    }

    if (min !== undefined && max !== undefined) {
      const minValue = parseInt(min);
      const maxValue = parseInt(max);

      if (!isNaN(minValue) && !isNaN(maxValue)) {
        const validOptions = [10, 20, 30];
        if (minValue === 0 && validOptions.includes(maxValue)) {
          newFormData.applications = maxValue;
        } else {
          shouldRedirect = true;
        }
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
        newFormData.skills = [{ value: validSkill.title, label: validSkill.title }];
        queryParams += `&skills=${skill}`;
        setSearchQuery(queryParams);
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
        newFormData.languages = [{ value: validLanguage.title, label: validLanguage.title }];
      } else {
        shouldRedirect = true;
      }
    }

    setFormData(newFormData);

  }, [category, min, max, skill, location, language, navigate]);

  const [formData, setFormData] = useState({
    filterType: ['All'],
    positions: [],
    applications: "",
    skills: [],
    location: [],
    languages: [],
    createdAt: "",
    keywords: "",
  });

  const [expandedDescriptions, setExpandedDescriptions] = useState(new Set());

  // Fetch jobs data
  const {
    data: jobData,
    error: jobsDataError,
    isLoading: jobsDataLoading,
    refetch,
  } = useGetJobsQuery({
    filterType: agence === "true" ? "Projects" : "All",
    params: `?page=${currentPage}&limit=${recordsPerPage}${searchQuery}`,
  });


  const toggleDescription = (jobId) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  const [gone] = useState(() => new Set());
  const numberOfSprings = jobsData?.data.length || 0; // Default to 0 if length is undefined
  const [props, api] = useSprings(numberOfSprings, i => ({
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    config: { mass: 1, tension: 500, friction: 30 }
  }));


  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2;
    if (!active && trigger) {
      gone.add(index);
      if (xDir < 0) {
        setDeclining(prev => new Set(prev).add(index));
      }
    }
    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
      const rotation = mx / 100 + (isGone ? xDir * 10 * vx : 0);
      const scale = active ? 1.1 : 1;
      const opacity = isGone ? 0 : 1;

      return {
        x,
        rotation,
        scale,
        opacity,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 }
      };
    });
  });



  const handleAction = (index, direction) => {

    if (gone.size > jobsData?.data.length - 1) {
      handleModalRegister(); // Open the registration modal if no jobs left
    }

    if (direction < 0) {
      setDeclining(prev => new Set(prev).add(index));
    }
    gone.add(index);
    api.start(i => {
      if (index !== i) return;
      const x = (200 + window.innerWidth) * direction;
      return {
        x,
        rotation: direction * 20,
        scale: 0.8,
        opacity: 0,
        config: { duration: 400 }
      };
    });
  };

  useEffect(() => {
    if (!jobsDataLoading && jobData) {
      if (jobData.data.length === 0) {
        setNoJobsFound(true);
      }
      setJobsData(jobData);
    } else {
      setJobsData(
        { data: [] }
      );
    }
  }, [jobData, jobsDataLoading, currentPage, searchQuery]);

  useEffect(() => {
    const numberOfSprings = jobData?.data?.length || 0;
    api.start(i => ({
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
    }));
  }, [jobData?.data, api]);


  useEffect(() => {
    api.start(i => ({
      x: 0,
      rotation: 0,
      scale: 1,
      immediate: false,
    }));
  }, [jobsData, api]);

  const handleChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      const queryParams = e.target.value
        ? `&description=${e.target.value}`
        : "";
      setSearchQuery(queryParams);
    }
  }, []);

  const handleSearchSubmit = (e) => {
    let queryParams = "";

    // Set filter type based on formData
    if (formData.filterType.length === 0 || formData.filterType.length === 2) {
      setFilterType("Contrats");
    } else {
      setFilterType(formData.filterType[0].value);
    }

    // Collect search filters from formData
    const paramsMap = {
      positions: "category",
      skills: "skills",
      location: "location",
      languages: "languages",
    };

    Object.keys(paramsMap).forEach((key) => {
      if (formData[key].length > 0) {
        const arrayValue = formData[key].map((item) => item.value).join(",");
        queryParams += `&${paramsMap[key]}=${arrayValue}`;
      }
    });

    // Add other filters
    if (formData.applications) {
      queryParams += `&applications=${formData.applications}`;
    }

    if (formData.createdAt) {
      queryParams += `&createdAt=${formData.createdAt}`;
    }

    if (formData.keywords) {
      queryParams += `&keywords=${formData.keywords}`;
    }

    setSearchQuery(queryParams);
    setShowModalAdvancedSearch(false);
  };


  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModalApply(true);
  };


  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Plateforme Freelance Web | Recruter un Développeur Freelance & Agences de Développement</title>
        <meta name="description" content="Découvrez les meilleures plateformes pour recruter des freelances web, des développeurs et des agences spécialisées dans la création de sites internet et trouver des missions freelance." />
        <meta
          name="keywords"
          content="mission freelance developpeur web, mission freelance développeur web, trouver mission freelance web, trouver une mission freelance web, mission informatique freelance web, freelance mission informatique, mission en freelance web, missions freelance teletravail web, freelance trouver mission web, recherche mission freelance web, missions freelance informatique web"
        />
        <link rel="canonical" href="https://itgalaxy.io/JobsSwipe" />
        <meta property="og:title" content="Plateforme Freelance Web | Recrutement de Développeurs et Agences" />
        <meta property="og:description" content="Trouvez des freelances qualifiés et des agences pour la création de sites internet et le développement web, ainsi que des missions freelance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/JobsSwipe" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/JobsSwipe" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/JobsSwipe" />
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
            "description": "Recrutement de freelances web et d'agences de développement pour des projets de sites internet et missions freelance.",
            "areaServed": ["France", "Paris", "Lyon", "Marseille"],
            "serviceType": ["Recrutement Freelance", "Développement Web", "Création de Sites Internet"],
          })}
        </script>
      </Helmet>
      <HeaderGen />
      <GlobalStyle isDark={isDark} />
      <Container>
        <SearchBar>
          <FormProvider {...formMethods}>
            <SearchInputContainer onKeyDown={handleChangeSearch}>
              <GenericInput
                inputObject={{ ...formConfig.search, label: "search" }}
                disabledForm={false}
              />
            </SearchInputContainer>
          </FormProvider>
          <AdvancedSearchButtonContainer
            onClick={handleShowModalAdvancedSearch}
          >
            Recherche avancée
          </AdvancedSearchButtonContainer>

          {showModalAdvancedSearch && (
            <ModalAdvancedSearch
              confirmShow={showModalAdvancedSearch}
              closeModal={handleShowModalAdvancedSearch}
              setFormData={setFormData}
              handleSearchSubmit={handleSearchSubmit}
              hideCategory={!!category}
              hideApplications={!!(min && max)}
              hideSkills={!!skill}
              hideLocations={!!location}
              hideLanguages={!!language}
            />
          )}
        </SearchBar>


        <Main>
          <SideDescription side="left" isDark={isDark}>
            <DescriptionText>
              Cliquez sur X pour passer àl'offre suivant
            </DescriptionText>
          </SideDescription>


          <CardContainer>
          {noJobsFound ? (
            <EmptyStateContainer isDark={isDark}>
              <EmptyStateIcon isDark={isDark}>
                <SearchX />
              </EmptyStateIcon>
              <EmptyStateTitle isDark={isDark}>
                Aucune offre trouvée
              </EmptyStateTitle>
              <EmptyStateText isDark={isDark}>
                Il n'y a actuellement aucune offre d'emploi correspondant à vos critères.
                Réessayez plus tard ou modifiez vos filtres de recherche.
              </EmptyStateText>
              <RefreshButtonEmpty
                isDark={isDark}
                onClick={handleRefresh}
                isRefreshing={isRefreshing}
              >
                <RefreshCw size={20} />
                Rafraîchir les offres
              </RefreshButtonEmpty>
            </EmptyStateContainer>
          ) : (
            // Reverse the jobsData.data array before mapping
            jobsData?.data
              .slice() // Create a shallow copy to avoid mutating the original array
              .reverse() // Reverse the array to make the first job appear last
              .filter((job, i) => !gone.has(i)) // Filter out jobs that are "gone"
              .map((job, i) => {
                const isExpanded = expandedDescriptions.has(job.id);
                const isDeclining = declining.has(i);

                return (
                  <Card
                    key={job.id}
                    isDark={isDark}
                    onClick={() => {
                      const currentIndex = jobsData?.data.length - gone.size - 1;
                      const url = `/shareJob?type=${job.type}${agence === 'true' ? '&agence=true' : ''}&token=${job.display}`;
                      window.location.href = url;
                    }}
                    className={isDeclining ? 'declining' : ''}
                    style={{
                      transform: props[i].x.to((x) => `translate3d(${x}px,${props[i].y}px,0) rotate(${props[i].rotation}deg)`),
                      scale: props[i].scale,
                      opacity: props[i].opacity
                    }}
                    {...bind(i)}
                  >
                    <CardContent>
                      <ScrollableContent>
                        <Badge isDark={isDark} style={{
                          backgroundColor: job.type === 'SHARETASK' ? '#10B981' : '#6366F1',
                          color: 'white'
                        }}>
                          {getProjectType(job.type)}
                        </Badge>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '1rem 0 0.5rem' }}>
                          {job.title}
                        </h2>

                        <JobMeta isDark={isDark}>
                          <MetaItem>
                            <MapPin size={14} />
                            {job.location}
                          </MetaItem>
                          <MetaItem>
                            {job.type === 'SHARETASK' ? 'Prix fixe : ' : 'TJM : '}
                            {job.price}
                            <Euro size={14} />
                          </MetaItem>
                        </JobMeta>

                        <DetailedDescription expanded={isExpanded}>
                          <p style={{
                            lineHeight: 1.6,
                            color: theme[isDark ? 'dark' : 'light'].textSecondary,
                            marginTop: '1rem'
                          }}>
                            <DisplayRawHtml content={job.description} />
                          </p>
                        </DetailedDescription>

                        <ExpandButton
                          isDark={isDark}
                          onClick={() => {
                            const currentIndex = jobsData?.data.length - gone.size - 1;
                            const url = `/shareJob?type=${job.type}${agence === 'true' ? '&agence=true' : ''}&token=${job.display}`;
                            window.location.href = url;
                          }}>
                          {isExpanded ? (
                            <>
                              Voir moins
                              <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              Voir plus
                              <ChevronDown size={16} />
                            </>
                          )}
                        </ExpandButton>

                        <Section>
                          <SkillsGrid>
                            {job.skills.map((skill, index) => (
                              <SkillBadge key={index} isDark={isDark}>
                                <Laptop className="w-3 h-3" />
                                {skill}
                              </SkillBadge>
                            ))}
                          </SkillsGrid>
                        </Section>
                      </ScrollableContent>
                    </CardContent>
                  </Card>
                );
              })
          )}
        </CardContainer>
          <SideDescription side="right" isDark={isDark}>
            <DescriptionText>
              Cliquez sur ♥ pour postuler à cette offre
            </DescriptionText>
          </SideDescription>


          {!noJobsFound && (
            <>
              <ActionButtons>
                <ActionButton
                  variant="dislike"
                  isDark={isDark}
                  onClick={() => handleAction(jobsData?.data.length - gone.size - 1)}>

                  <X className="w-6 h-6" />
                </ActionButton>
                <RefreshButton
                    isDark={isDark}
                    onClick={handleRefresh}
                    className={isRefreshing ? 'refreshing' : ''}
                    aria-label="Rafraîchir les offres"
                  >
                    <RefreshCw size={20} />
              </RefreshButton>
                <ActionButton
                  variant="like"
                  isDark={isDark}
                  onClick={() => {
                    const url = `/shareJob?type=${jobsData?.data[gone.size].type}${agence === 'true' ? '&agence=true' : ''}&token=${jobsData?.data[gone.size].display}`;
                    window.location.href = url;
                  }}>
                  <Heart className="w-6 h-6" />
                </ActionButton>
              </ActionButtons>
            </>
          )}
        </Main>
      </Container>

      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={handleCloseModalRegister}
          switchBetweenModals={false}
          proxy={"marketplace"}
        />
      )}

    </ThemeProvider>
  );
}