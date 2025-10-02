import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styled from 'styled-components';
import { useGetCandidatsQuery } from '../../../redux/api/candidat/candidatApi';
import Card from '@components/ComponnentProfilItems/profilfreelances/card';

const etoile = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Star.png`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const IconButton = styled.button`
  padding: 0.5rem;
  background: white;
  border: none;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #f1f5f9;
  }
`;

const Section = styled.section`
  padding: 5rem 1rem;
  background: #020617;
  border: white 1px;
`;

const SectionContent = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`;

const SeeMoreButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #1d4ed8;
    transform: scale(1.05);
  }
`;

function CardsPrestataires({job , skill}) {
  const itemsPerPage = 9; // Number of designs to show per page
  const [currentPage, setCurrentPage] = useState(0);
  const [profils, setProfils] = useState();

  let queryParam = '';

    // Determine which query parameter to use
    if (job) {
        queryParam = `?job=${job}`;
    } else if (skill) {
        queryParam = `?skills=${skill}`;
    }

  const {
    data: candidatsData,
    isLoading: condidatDataLoading,
  } = useGetCandidatsQuery(queryParam);
  
  const totalPages = Math.ceil(candidatsData?.data?.length / itemsPerPage);
  const currentDesigns = candidatsData?.data?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);


  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (candidatsData) {
      setProfils(candidatsData.data);
    }
  }, [condidatDataLoading, candidatsData]);

  return (
    <Section>
      <SectionContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <IconButton onClick={handlePrevPage} disabled={currentPage === 0}>
            <ChevronLeft size={20} color={currentPage === 0 ? '#a1a1aa' : '#374151'} />
          </IconButton>
          <div style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
            Page {currentPage + 1} of {totalPages}
          </div>
          <IconButton onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
            <ChevronRight size={20} color={currentPage >= totalPages - 1 ? '#a1a1aa' : '#374151'} />
          </IconButton>
        </div>

        <Grid>
          {currentDesigns?.map((item, index) => (
            <Card
              key={index}
              item={item}
              handleConnecter={() => window.location.href = `/freelance/${item.display}`}
              etoile={etoile}
              page={true}
            />
          ))}
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <SeeMoreButton onClick={() => window.location.href = `/search/prestataires` }>Voir plus de prestataires</SeeMoreButton>
        </div> 
      </SectionContent>
    </Section>
  );
}

export default CardsPrestataires;
