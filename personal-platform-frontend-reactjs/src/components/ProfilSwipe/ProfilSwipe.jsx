import React, { useCallback, useEffect, useState } from 'react';
import { useSprings, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import { Heart, X, Sparkles, RefreshCw, SearchX, Code, Briefcase, MapPin, Star, ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'lucide-react';
import { ThemeProvider } from 'styled-components';
import HeaderGen from 'components/Header/Header';
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetCandidatsQuery } from "../../redux/api/candidat/candidatApi";
import GenericInput from "../Inputs/GenericInput/GenericInput";
import { formConfig } from "./ProfilsSwipe.constants";
import Register from "components/Authentification/modals/register";
import { Spinner } from "react-bootstrap";
import { categoryData } from "data/categoryData";
import { countriesData } from "data/countriesData";
import { languagesData } from "data/languagesData";
import { skillsData } from "data/skillData";
import RenderStars from "components/RenderStars/RenderStars";
import ModalAdvancedSearchCandidates from "components/ModalITgalaxy/ModalAdvancedSearchCandidates/ModalAdvancedSearchCandidates";
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
  EmptyStateContainer,
  StarContainer,
  StyledHorizontalDiv
} from "./style";
import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import DisplayRawHtml from '@components/DisplayRawHtml/DisplayRawHtml';
import { Helmet } from 'react-helmet';
const etoile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Star.png`;

export default function ProfilsSwipe() {

  const queryParams = new URLSearchParams(window.location.search);
  const type = queryParams.get("type");
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const { country, job, skill, language, min, max } = useParams();
  const [showModalAdvancedSearch, setShowModalAdvancedSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2000000);
  const [filterType, setFilterType] = useState("Profils");
  const [filterSearch, setFilterSearch] = useState("");
  const [profilesData, setProfilesData] = useState();
  const formMethods = useForm({});
  const location = useLocation();
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [declining, setDeclining] = useState(new Set());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [noProfilesFound, setNoProfilesFound] = useState(false);
  const [hour_rate_min, setDailyRateMin] = useState(0);
  const [hour_rate_max, setDailyRateMax] = useState(1000);
  const [selectedCandidat, setSelectedCandidat] = useState();

  const handleRefresh = () => {
    setIsRefreshing(true);
    setNoProfilesFound(false);
    setSearchQuery("");
    setFilterSearch("");

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

    setTimeout(() => {
      setIsRefreshing(false);
      setNoProfilesFound(Math.random() > 0.7);
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


  const [formData, setFormData] = useState({
    jobs: [],
    locations: [],
    languages: [],
    skills: [],
    rising_star_global: "",
    hour_rate_max: 10000,
    hour_rate_min: 0,
  });

  const [expandedDescriptions, setExpandedDescriptions] = useState(new Set());

  const {
    data: candidatsData,
    error: candidatDataError,
    isLoading: candidatDataLoading,
    refetch,
  } = useGetCandidatsQuery(
    `?page=${currentPage}&limit=${recordsPerPage}&status=ACTIVE${filterSearch}${searchQuery}`
  );

  const [gone] = useState(() => new Set());

  const numberOfSprings = candidatsData?.data?.length || 0; // Default to 0 if length is undefined
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

  const getLabelByValue = (value) => {
    const category = categoryData.find(item => item.value === value);
    return category ? category.title : null; // returns null if value not found
  };


  const handleAction = (index, direction) => {
    if (gone.size > profilesData?.length - 1) {
      handleModalRegister();
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
    const numberOfSprings = candidatsData?.data?.length || 0;
    api.start(i => ({
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
    }));
  }, [candidatsData?.data, api]);


  useEffect(() => {
    if (!candidatDataLoading && candidatsData?.data) {
      if (candidatsData.data.length === 0) {
        setNoProfilesFound(true);
      }
      setProfilesData(candidatsData.data);
    }
  }, [candidatsData, candidatDataLoading, currentPage, searchQuery, filterSearch]);


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
      navigate('/profilsswipe');
    } else {
      setFormData(newFormData);
    }
  }, [country, job, skill, language, min, max, navigate]);


  const handelChangeSearch = useCallback((e) => {
    if (e.key === "Enter") {
      const queryParams = e.target.value ? `&search=${e.target.value}` : "";
      setSearchQuery(queryParams);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Plateforme Freelance Web | Recruter un Développeur Freelance & Agences de Développement</title>
        <meta name="description" content="Découvrez les meilleures plateformes pour recruter des freelances web, des développeurs et des agences spécialisées dans la création de sites internet." />
        <meta name="keywords" content="recrutement freelance, recruter un freelance, freelance recrutement, agence informatique, agence de developpement web, agence developpement mobile, agence developpement application, agence developpement applications mobiles, agence developpement web, agence france developpement, agence francaise pour le developpement, agence developpement web paris, freelance web, developpeur freelance, freelance application, webmaster freelance, application freelance, site internet freelance, web designer freelance, recherche freelance, web développeur freelance, freelance agence, freelance mission informatique, dev freelance, contrat de freelance, freelance developpeur, freelance developpeur web, web developpeur freelance, developpeur en freelance, developpeur freelance malt, developpeur junior freelance, prix developpeur freelance, développeur web freelance" />
        <link rel="canonical" href="https://itgalaxy.io/profilsswipe" />
        <meta property="og:title" content="Plateforme Freelance Web | Recrutement de Développeurs et Agences" />
        <meta property="og:description" content="Trouvez des freelances qualifiés et des agences pour la création de sites internet et le développement web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/profilsswipe" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/profilsswipe" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/profilsswipe" />
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

      <HeaderGen />
      <GlobalStyle isDark={isDark} />
      <Container>
        <SearchBar>
          <FormProvider {...formMethods}>
            <SearchInputContainer onKeyDown={handelChangeSearch}>
              <GenericInput
                inputObject={{ ...formConfig.search, label: "search" }}
                disabledForm={false}
              />
            </SearchInputContainer>
          </FormProvider>
          <AdvancedSearchButtonContainer variant="secondary" onClick={handleShowModalAdvancedSearch}>
            Recherche avancée
          </AdvancedSearchButtonContainer>

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

        <Main>
          <SideDescription side="left" isDark={isDark}>
            <DescriptionText>
              Cliquez sur X pour passer au profil suivant
            </DescriptionText>
          </SideDescription>

          <CardContainer>
          {candidatDataLoading ? (
            <Spinner />
          ) : noProfilesFound ? (
            <EmptyStateContainer isDark={isDark}>
              <EmptyStateIcon isDark={isDark}>
                <SearchX />
              </EmptyStateIcon>
              <EmptyStateTitle isDark={isDark}>
                Aucun profil trouvé
              </EmptyStateTitle>
              <EmptyStateText isDark={isDark}>
                Il n'y a actuellement aucun profil correspondant à vos critères.
                Réessayez plus tard ou modifiez vos filtres de recherche.
              </EmptyStateText>
              <RefreshButtonEmpty
                isDark={isDark}
                onClick={handleRefresh}
                isRefreshing={isRefreshing}
              >
                <RefreshCw size={20} />
                Rafraîchir les profils
              </RefreshButtonEmpty>
            </EmptyStateContainer>
          ) : (
            // Reverse the candidatsData.data array before mapping
            candidatsData?.data
              .slice() // Create a shallow copy to avoid mutating the original array
              .reverse() // Reverse the array to make the first candidate appear last
              .filter((candidat, i) => !gone.has(i)) // Filter out candidates that are "gone"
              .map((candidat, i) => {
                const isExpanded = expandedDescriptions.has(candidat.id);
                const isDeclining = declining.has(i);

                return (
                  <Card
                    key={candidat.id}
                    isDark={isDark}
                    onClick={() => {
                        navigate(`/freelance?type=${type}&token=${candidat.display}`);
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
                        <StyledHorizontalDiv>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ImageProfilCard
                              type={"candidats"}
                              id={candidat.id}
                              typeimg={"composeteam"}
                            />
                            <div style={{ margin: '0.7rem 10% 0.5rem' }}>
                              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                {candidat.name.charAt(0).toUpperCase() + candidat.name.slice(1).toLowerCase()}
                              </h2>
                              <JobMeta isDark={isDark}>
                                <MetaItem>
                                  {getLabelByValue(candidat.job)}
                                </MetaItem>
                              </JobMeta>
                            </div>
                          </div>
                          <StarContainer>
                            <RenderStars stars={candidat.rising_star_global} nbr_comments={candidat.comments.length} />
                          </StarContainer>
                        </StyledHorizontalDiv>

                        {candidat.profile_description && (
                          <DetailedDescription expanded={isExpanded}>
                            <p style={{
                              lineHeight: 1.6,
                              color: theme[isDark ? 'dark' : 'light'].textSecondary,
                              marginTop: '1rem'
                            }}>
                              {candidat.profile_description?.length > 40
                                ? <DisplayRawHtml content={candidat.profile_description.substring(0, 130)} />
                                : <DisplayRawHtml content={candidat.profile_description} />}
                            </p>
                          </DetailedDescription>
                        )}

                        <Section>
                          <SkillsGrid>
                            {candidat.skills.map((skill, index) => (
                              <SkillBadge key={index} isDark={isDark}>
                                <Code className="w-3 h-3" />
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
              Cliquez sur ♥ pour contacter ce profil
            </DescriptionText>
          </SideDescription>

          {!noProfilesFound && (
            <>
              <ActionButtons>
                <ActionButton
                  variant="dislike"
                  isDark={isDark}
                  onClick={() => handleAction(candidatsData?.data?.length - gone.size - 1, -1)}
                >
                  <X className="w-6 h-6" />
                </ActionButton>
                <RefreshButton
                isDark={isDark}
                onClick={handleRefresh}
                className={isRefreshing ? 'refreshing' : ''}
                aria-label="Rafraîchir les profils"
              >
                <RefreshCw size={20} />
              </RefreshButton>
                <ActionButton
                  variant="like"
                  isDark={isDark}
                  onClick={() => {
                    const selectedCandidate = candidatsData?.data[gone.size];
                    if (selectedCandidate) {
                        navigate(`/freelance?type=${type}&token=${selectedCandidate.display}`);
                    } 
                }}
                >
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