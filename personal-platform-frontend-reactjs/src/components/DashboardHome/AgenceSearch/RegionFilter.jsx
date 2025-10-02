import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { MapPin, Search } from 'lucide-react';
import { regions, cities, getCitiesByRegion } from '../../../data/agencies';

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--color-primary);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.75rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 0.875rem;
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
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
  width: 1rem;
  height: 1rem;
`;

const ButtonsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const RegionButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;
  transition: all 0.2s;
  border: 1px solid var(--color-border);
  width: 100%;
  
  ${({ isSelected }) => isSelected ? `
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
    box-shadow: 0 2px 4px rgba(37, 99, 235, 0.1);
    
    &:hover {
      background: #1d4ed8;
    }
  ` : `
    background: var(--color-surface);
    color: var(--color-text);
    
    &:hover {
      background: var(--color-background);
      border-color: var(--color-primary);
    }
  `}
`;

const CitiesContainer = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CityButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  text-align: left;
  transition: all 0.2s;
  border: 1px solid var(--color-border);
  width: 100%;
  
  ${({ isSelected }) => isSelected ? `
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
    
    &:hover {
      background: #1d4ed8;
    }
  ` : `
    background: var(--color-surface);
    color: var(--color-text);
    
    &:hover {
      background: var(--color-background);
      border-color: var(--color-primary);
    }
  `}
`;

const NoResults = styled.div`
  padding: 1rem;
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;



const RegionFilter = ({ 
  selectedRegion, 
  selectedCity,
  onSelectRegion,
  onSelectCity
}) => {
  const [citySearch, setCitySearch] = useState('');

  const filteredCities = useMemo(() => {
    if (!citySearch.trim()) {
      return selectedRegion !== 'all' ? getCitiesByRegion(selectedRegion) : [];
    }

    const searchTerm = citySearch.toLowerCase();
    if (selectedRegion === 'all') {
      return Object.values(cities)
        .flat()
        .filter(city => city.toLowerCase().includes(searchTerm));
    }

    return getCitiesByRegion(selectedRegion)
      .filter(city => city.toLowerCase().includes(searchTerm));
  }, [selectedRegion, citySearch]);

  return (
    <FilterContainer>
      <Title>
        <MapPin size={18} />
        Localisation
      </Title>

      <SearchContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Rechercher une ville..."
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
      </SearchContainer>
      
      <ButtonsGrid>
        <RegionButton
          isSelected={selectedRegion === 'all' && !selectedCity}
          onClick={() => {
            onSelectRegion('all');
            onSelectCity('');
            setCitySearch('');
          }}
        >
          Toutes les régions
        </RegionButton>
        
        {!citySearch && regions.map((region) => (
          <div key={region}>
            <RegionButton
              isSelected={selectedRegion === region && !selectedCity}
              onClick={() => {
                onSelectRegion(region);
                onSelectCity('');
                setCitySearch('');
              }}
            >
              {region}
            </RegionButton>
            
            {selectedRegion === region && (
              <CitiesContainer>
                {getCitiesByRegion(region).map((city) => (
                  <CityButton
                    key={city}
                    isSelected={selectedCity === city}
                    onClick={() => onSelectCity(city)}
                  >
                    {city}
                  </CityButton>
                ))}
              </CitiesContainer>
            )}
          </div>
        ))}

        {citySearch && (
          <CitiesContainer>
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <CityButton
                  key={city}
                  isSelected={selectedCity === city}
                  onClick={() => onSelectCity(city)}
                >
                  {city}
                </CityButton>
              ))
            ) : (
              <NoResults>Aucune ville trouvée</NoResults>
            )}
          </CitiesContainer>
        )}
      </ButtonsGrid>
    </FilterContainer>
  );
};

export default RegionFilter;