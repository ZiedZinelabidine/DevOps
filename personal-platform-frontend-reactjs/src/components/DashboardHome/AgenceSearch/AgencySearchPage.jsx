import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search, ArrowRight, Building2 } from 'lucide-react';
import { agencies } from '../../../data/agencies';
import AgencyCard from './AgencyCard';
import RegionFilter from './RegionFilter';
import SpecialtyFilter from './SpecialityFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import { Helmet } from 'react-helmet';
import { Mail } from 'lucide-react';
import BenefitsSection from './BenefitsSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import Register from "components/Authentification/modals/register";
import Offers from '../Pages/Offres';
import InfluenceMarketingSection from './InfluenceMarketingSection';
import RecentProjectsSection from './RecentProjectsSection';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--color-background);
  transition: background-color 0.3s ease;
`;

const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  @media (min-width: 640px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 42rem;
  margin: 0 auto 3rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0 1.25rem 0 3rem;
  border-radius: 9999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
  pointer-events: none;
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 18rem 1fr;
  }
`;

const Sidebar = styled.aside`
  @media (min-width: 1024px) {
    position: sticky;
    top: 1rem;
    height: calc(100vh - 2rem);
    overflow-y: auto;
  }
`;

const FiltersContainer = styled.div`
  background: var(--color-surface);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const ResultsContainer = styled.div``;

const ResultsHeader = styled.div`
  background: var(--color-surface);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid var(--color-border);
`;

const ResultsGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NoResults = styled.div`
  background: var(--color-surface);
  border-radius: 1rem;
  padding: 3rem 1.5rem;
  text-align: center;
  border: 1px solid var(--color-border);
`;

const NoResultsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const NoResultsText = styled.p`
  color: var(--color-text-secondary);
`;

const Footer = styled.footer`
  background: var(--color-surface);
  color: var(--color-text);
  padding: 3rem 1.5rem;
  margin-top: 6rem;
  border-top: 1px solid var(--color-border);
`;

const FooterContent = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  text-align: center;
`;

const FooterTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const FooterText = styled.p`
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
`;

const ContactsButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #1d4ed8;
  color: white;
  border-radius: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const AgencySearchPage = ({ id, region, city, skill, price, TEXT }) => {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const type = "entreprise";

  const [filters, setFilters] = useState({
    region: region || 'all',
    city: city || 'all',
    specialties: skill ? [skill] : [],
    minRating: 0,
    maxPrice: price ? parseFloat(price) : null,
    id: id || ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filteredAgencies, setFilteredAgencies] = useState([]);

  useEffect(() => {
    setFilters(prevFilters => ({
      ...prevFilters,
      region: region || 'all',
      city: city || 'all',
      specialties: skill ? [skill] : [],
      maxPrice: price ? parseFloat(price) : null,
      id: id || ''
    }));
  }, [id, region, city, skill, price]);

  useEffect(() => {
    let result = agencies.filter(agency => {
      // Filtre par région (si spécifié dans l'URL)
      if (region && agency.region !== region) {
        return false;
      }
      // Filtre par ville (si spécifié dans l'URL)
      if (city && agency.city !== city) {
        return false;
      }
      // Filtre par spécialité (si spécifié dans l'URL ou manuellement)
      if (filters.specialties.length > 0 &&
        !filters.specialties.every(specialty => agency.specialties.includes(specialty))) {
        return false;
      }
      // Filtre par note minimale
      if (agency.rating < filters.minRating) {
        return false;
      }
      // Filtre par prix maximal
      if (filters.maxPrice !== null && agency.minPrice > filters.maxPrice) {
        return false;
      }
      // Filtre par ID (si spécifié dans l'URL)
      if (id && agency.id !== id) {
        return false;
      }
      // Filtre par terme de recherche
      if (searchTerm.trim() !== '' &&
        !agency.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !agency.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    });

    // Tri des résultats
    result = [...result].sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'price-asc') {
        return a.minPrice - b.minPrice;
      } else {
        return b.minPrice - a.minPrice;
      }
    });

    setFilteredAgencies(result);
  }, [filters, searchTerm, sortBy, region, city, id]);


  return (
    <PageContainer>
      <MainContent>

        {TEXT.AgencySearchPage.HelmetTitle && (
          <>
            <Helmet>
              <title>{TEXT.AgencySearchPage.HelmetTitle} </title>
              <meta name="description" content={TEXT.AgencySearchPage.HelmetDescription} />
              <link rel="canonical" href={TEXT.AgencySearchPage.HelmetURL} />
              <meta property="og:title" content={TEXT.AgencySearchPage.HelmetTitle} />
              <meta property="og:description" content={TEXT.AgencySearchPage.HelmetDescription} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={TEXT.AgencySearchPage.HelmetURL} />
              <meta property="og:locale" content="fr_FR" />
              <meta property="og:site_name" content="ItGalaxy.io" />
              <link rel="alternate" hreflang="fr" href={TEXT.AgencySearchPage.HelmetURL} />
              <link rel="alternate" hreflang="en" href={TEXT.AgencySearchPage.HelmetURL} />
            </Helmet>
            <Header>
              <Title>
                {TEXT.AgencySearchPage.title}
              </Title>
              <Subtitle>
                {TEXT.AgencySearchPage.subtitle}
              </Subtitle>
            </Header>
          </>
        )}

        {region && !TEXT.AgencySearchPage.HelmetTitle && (
          <Helmet>
            <title>{`Agence web à ${region} | ItGalaxy.io`}</title>
            <meta
              name="description"
              content={`Trouvez les meilleures agence web à ${region} pour votre projet digital. Comparez les spécialités, budgets et avis.`}
            />
            <meta
              name="keywords"
              content={`agence web ${region}, agence digitale ${region}, développement web ${region}, création site internet ${region}, agence web France, freelance ${region}`}
            />
            <link
              rel="canonical"
              href={`https://itgalaxy.io/search/agences/region/${region}`}
            />
            <meta property="og:title" content={`Agence web à ${region} | ItGalaxy.io`} />
            <meta
              property="og:description"
              content={`Trouvez les meilleures Agence web à ${region} pour votre projet digital.`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://itgalaxy.io/search/agences/region/${region}`}
            />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link
              rel="alternate"
              hreflang="fr"
              href={`https://itgalaxy.io/search/agences/region/${region}`}
            />
            <link
              rel="alternate"
              hreflang="en"
              href={`https://itgalaxy.io/search/agences/region/${region}`}
            />
          </Helmet>
        )}

        {/* SEO pour la ville */}
        {city && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <Helmet>
            <title>{`Agence web à ${city} | ItGalaxy.io`}</title>
            <meta
              name="description"
              content={`Trouvez les meilleures Agence web à ${city} pour votre projet digital. Comparez les spécialités, budgets et avis.`}
            />
            <meta
              name="keywords"
              content={`agence web ${city}, agence digitale ${city}, développement web ${city}, création site internet ${city}, agence web France, freelance ${city}`}
            />
            <link
              rel="canonical"
              href={`https://itGalaxy.io/search/agences/ville/${city}`}
            />
            <meta property="og:title" content={`Agences web à ${city} | ItGalaxy.io`} />
            <meta
              property="og:description"
              content={`Trouvez les meilleures agences web à ${city} pour votre projet digital.`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://itGalaxy.io/search/agences/ville/${city}`}
            />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link
              rel="alternate"
              hreflang="fr"
              href={`https://itGalaxy.io/search/agences/ville/${city}`}
            />
            <link
              rel="alternate"
              hreflang="en"
              href={`https://itGalaxy.io/search/agences/ville/${city}`}
            />
          </Helmet>
        )}

        {/* SEO pour la spécialité */}
        {skill && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <Helmet>
            <title>{`Agence ${skill} | ItGalaxy.io`}</title>
            <meta
              name="description"
              content={`Trouvez les meilleures Agence ${skill} pour votre projet digital. Comparez les régions, budgets et avis.`}
            />
            <meta
              name="keywords"
              content={`agence web ${skill}, agence digitale ${skill}, développement web ${skill}, création site internet ${skill}, agence web France, freelance ${skill}`}
            />
            <link
              rel="canonical"
              href={`https://itGalaxy.io/search/agences/skill/${skill}`}
            />
            <meta property="og:title" content={`Agences web spécialisées en ${skill} | ItGalaxy.io`} />
            <meta
              property="og:description"
              content={`Trouvez les meilleures agences web spécialisées en ${skill} pour votre projet digital.`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              href={`https://itGalaxy.io/search/agences/skill/${skill}`}
            />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link
              rel="alternate"
              hreflang="fr"
              href={`https://itGalaxy.io/search/agences/skill/${skill}`}
            />
            <link
              rel="alternate"
              hreflang="en"
              href={`https://itGalaxy.io/search/agences/skill/${skill}`}
            />
          </Helmet>
        )}

        {/* SEO pour le prix */}
        {price && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <Helmet>
            <title>{`Agence web à partir de ${price}€ | ItGalaxy.io`}</title>
            <meta
              name="description"
              content={`Trouvez les meilleures agences web à partir de ${price}€ pour votre projet digital. Comparez les régions, spécialités et avis.`}
            />
            <meta
              name="keywords"
              content={`agence web ${price}€, agence digitale ${price}€, développement web ${price}€, création site internet ${price}€, agence web France, freelance ${price}€`}
            />
            <link
              rel="canonical"
              href={`https://itGalaxy.io/search/agences/price/${price}`}
            />
            <meta property="og:title" content={`Agence web à partir de ${price}€ | ItGalaxy.io`} />
            <meta
              property="og:description"
              content={`Trouvez les meilleures agences web à partir de ${price}€ pour votre projet digital.`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              href={`https://itGalaxy.io/search/agences/price/${price}`}
            />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link
              rel="alternate"
              hreflang="fr"
              href={`https://itGalaxy.io/search/agences/price/${price}`}
            />
            <link
              rel="alternate"
              hreflang="en"
              href={`https://itGalaxy.io/search/agences/price/${price}`}
            />
          </Helmet>
        )}

        {!skill && !region && !city && !price && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <Helmet>
            <title>{`Trouver les meilleures agences web en France | ItGalaxy.io`}</title>
            <meta
              name="description"
              content={`Découvrez les agences web les plus performantes en France par région, spécialité et budget pour votre projet digital.`}
            />
            <meta
              name="keywords"
              content="agence web France, agence digitale France, développement web France, création site internet France, freelance France, recrutement freelance"
            />
            <link
              rel="canonical"
              href={`https://itGalaxy.io/search/agences`}
            />
            <meta property="og:title" content="Trouver les meilleures agences web en France | ItGalaxy.io" />
            <meta
              property="og:description"
              content="Découvrez les agences web les plus performantes en France par région, spécialité et budget pour votre projet digital."
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              href={`https://itGalaxy.io/search/agences`}
            />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link
              rel="alternate"
              hreflang="fr"
              href={`https://itGalaxy.io/search/agences`}
            />
            <link
              rel="alternate"
              hreflang="en"
              href={`https://itGalaxy.io/search/agences`}
            />
          </Helmet>
        )}


        {region && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <>
            <Title>
              Trouver les meilleures agences web en {region}
            </Title>
            <Subtitle>
              Découvrez les agences web les plus performantes en {region} pour votre projet digital.
            </Subtitle>
          </>
        )}

        {city && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <>
            <Title>
              Trouver les meilleures agences web à {city}
            </Title>
            <Subtitle>
              Découvrez les agences web les plus performantes à {city} pour votre projet digital.
            </Subtitle>
          </>
        )}

        {skill && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <>
            <Title>
              Trouver les meilleures agences {skill}
            </Title>
            <Subtitle>
              Découvrez les agences {skill} les plus performantes pour votre projet digital.
            </Subtitle>
          </>
        )}

        {price && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <>
            <Title>
              Trouver les meilleures agences web à partir de {price}€
            </Title>
            <Subtitle>
              Découvrez les agences web les plus performantes pour un budget de {price}€.
            </Subtitle>
          </>
        )}

        {!skill && !region && !city && !price && !TEXT.AgencySearchPage.HelmetTitle &&  (
          <>
            <Title>
              Trouver les meilleures agences web en France
            </Title>
            <Subtitle>
              Découvrez les agences web les plus performantes par région, spécialité et budget pour votre projet digital.
            </Subtitle>
          </>
        )}


        <SearchContainer>
          <SearchIcon size={20} />
          <SearchInput
            type="text"
            placeholder="Rechercher une agence par nom ou description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        <ContentGrid>
          <Sidebar>
            <FiltersContainer>
              <RegionFilter
                selectedRegion={filters.region}
                selectedCity={filters.city}
                onSelectRegion={(region) => setFilters(prev => ({ ...prev, region }))}
                onSelectCity={(city) => setFilters(prev => ({ ...prev, city }))}
              />

              <SpecialtyFilter
                selectedSpecialties={filters.specialties}
                onToggleSpecialty={(specialty) => {
                  setFilters(prev => {
                    const specialties = prev.specialties.includes(specialty)
                      ? prev.specialties.filter(s => s !== specialty)
                      : [...prev.specialties, specialty];
                    return { ...prev, specialties };
                  });
                }}
              />

              <PriceFilter
                maxPrice={filters.maxPrice}
                onChange={(maxPrice) => setFilters(prev => ({ ...prev, maxPrice }))}
              />

              <RatingFilter
                minRating={filters.minRating}
                onChange={(minRating) => setFilters(prev => ({ ...prev, minRating }))}
              />
              <ResetButton
                onClick={() => setFilters({
                  region: region || 'all',
                  city: city || 'all',
                  specialties: skill ? [skill] : [],
                  minRating: 0,
                  maxPrice: price ? parseFloat(price) : null,
                  id: id || ''
                })}
              >
                Réinitialiser tous les filtres
              </ResetButton>
            </FiltersContainer>
          </Sidebar>

          <ResultsContainer>
            <ResultsHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div style={{ paddingLeft: '30px' }}>
                  <h2 className="text-xl font-bold text-gray-900">
                    {filteredAgencies.length} Agence{filteredAgencies.length !== 1 ? 's' : ''} trouvée{filteredAgencies.length !== 1 ? 's' : ''}
                  </h2>
                </div>
              </div>
            </ResultsHeader>

            {filteredAgencies.length === 0 ? (
              <NoResults>
                <NoResultsTitle>
                  Aucune agence ne correspond à vos critères
                </NoResultsTitle>
                <NoResultsText>
                  Essayez d'ajuster vos filtres pour voir plus de résultats.
                </NoResultsText>
              </NoResults>
            ) : (
              <ResultsGrid>
                {filteredAgencies.map((agency, index) => (
                  <AgencyCard
                    key={`${agency.name}-${index}-${agency.region}`}
                    agency={agency}
                  />
                ))}
              </ResultsGrid>
            )}
          </ResultsContainer>
        </ContentGrid>
      </MainContent>

      {TEXT?.AgencySearchPage?.footer && (
        <>
          <Footer>
            <FooterContent>
              <FooterTitle>
                {TEXT.AgencySearchPage.footer.title}
              </FooterTitle>
              <FooterText>
                {TEXT.AgencySearchPage.footer.text}
              </FooterText>
              <ContactsButton>
                Contactez-nous
                <ArrowRight size={20} />
              </ContactsButton>
            </FooterContent>
          </Footer>

          <RecentProjectsSection TEXT={TEXT.RecentProjectsSection} />
          <TestimonialsSection TEXT={TEXT.TestimonialsSection} />
          <InfluenceMarketingSection TEXT={TEXT.InfluenceMarketingSection} />
          <ContactSection TEXT={TEXT.ContactSection} />
          <FAQSection TEXT={TEXT.FAQSection} />
        </>
      )}
      <Offers />
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={() => setOpenModalRegister(false)}
          switchBetweenModals={false}
          defaultkey={type}
        />
      )}
    </PageContainer>

  );
};

export default AgencySearchPage;
