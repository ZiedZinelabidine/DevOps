import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, TrendingUp, DollarSign, Target, ArrowUpRight, Filter } from 'lucide-react';

const Container = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
`;

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem;
  background-color: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text.primary};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent.blue};
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.secondary};
  height: 1.25rem;
  width: 1.25rem;
`;

const FilterSelect = styled.select`
  background-color: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text.primary};
  padding: 0.5rem 0.75rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent.blue};
  }
`;

const Table = styled.table`
  width: 100%;
`;

const TableHeader = styled.th`
  padding-bottom: 0.75rem;
  text-align: left;
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.colors.background.tertiary};

  &:not(:first-child) {
    text-align: right;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.background.tertiary};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.background.secondary}80;
  }
`;

const TableCell = styled.td`
  padding: 1rem 0;
  color: ${props => props.theme.colors.text.primary};

  &:not(:first-child) {
    text-align: right;
  }
`;

const StatsGrid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.lg};
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  color: ${props => props.theme.colors.text.secondary};
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;



const AdsConsole = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('impressions');
  const [sortOrder, setSortOrder] = useState('desc');

  const keywordData = [
    {
      keyword: "google ads expert",
      impressions: 12500,
      clicks: 750,
      ctr: 6.0,
      cpc: 2.45,
      cost: 1837.50,
      conversions: 25,
      convRate: 3.33
    },
    {
      keyword: "ppc consultant",
      impressions: 8900,
      clicks: 534,
      ctr: 6.0,
      cpc: 2.15,
      cost: 1148.10,
      conversions: 18,
      convRate: 3.37
    },
    {
      keyword: "google ads management",
      impressions: 15600,
      clicks: 936,
      ctr: 6.0,
      cpc: 2.85,
      cost: 2667.60,
      conversions: 31,
      convRate: 3.31
    },
    {
      keyword: "adwords specialist",
      impressions: 7200,
      clicks: 432,
      ctr: 6.0,
      cpc: 1.95,
      cost: 842.40,
      conversions: 15,
      convRate: 3.47
    },
    {
      keyword: "google ads agency",
      impressions: 18900,
      clicks: 1134,
      ctr: 6.0,
      cpc: 3.25,
      cost: 3685.50,
      conversions: 38,
      convRate: 3.35
    }
  ];

  const filteredData = keywordData
    .filter(item => 
      item.keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      return sortOrder === 'asc' ? 
        (aValue < bValue ? -1 : 1) : 
        (aValue > bValue ? -1 : 1);
    });

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(num);
  };

  const formatPercentage = (num) => {
    return new Intl.NumberFormat('fr-FR', { style: 'percent', minimumFractionDigits: 2 }).format(num / 100);
  };

  return (
    <Container>
      <SearchContainer>
        <SearchWrapper>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Rechercher des mots-clés..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchWrapper>
        <div>
          <Filter />
          <FilterSelect
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="impressions">Impressions</option>
            <option value="clicks">Clics</option>
            <option value="ctr">CTR</option>
            <option value="cpc">CPC</option>
            <option value="conversions">Conversions</option>
          </FilterSelect>
        </div>
      </SearchContainer>

      <div>
        <Table>
          <thead>
            <tr>
              <TableHeader>Mot-clé</TableHeader>
              <TableHeader>Imp.</TableHeader>
              <TableHeader>Clics</TableHeader>
              <TableHeader>CTR</TableHeader>
              <TableHeader>CPC Moy.</TableHeader>
              <TableHeader>Coût</TableHeader>
              <TableHeader>Conv.</TableHeader>
              <TableHeader>Taux Conv.</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.keyword}</TableCell>
                <TableCell>{formatNumber(item.impressions)}</TableCell>
                <TableCell>{formatNumber(item.clicks)}</TableCell>
                <TableCell>{formatPercentage(item.ctr)}</TableCell>
                <TableCell>{formatCurrency(item.cpc)}</TableCell>
                <TableCell>{formatCurrency(item.cost)}</TableCell>
                <TableCell>{formatNumber(item.conversions)}</TableCell>
                <TableCell>{formatPercentage(item.convRate)}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>

      <StatsGrid>
        <StatCard>
          <StatHeader>
            <StatLabel>CTR Moyen</StatLabel>
            <TrendingUp color="green" />
          </StatHeader>
          <StatValue>6.00%</StatValue>
        </StatCard>
        <StatCard>
          <StatHeader>
            <StatLabel>CPC Moyen</StatLabel>
            <DollarSign color="blue" />
          </StatHeader>
          <StatValue>2.53€</StatValue>
        </StatCard>
        <StatCard>
          <StatHeader>
            <StatLabel>Conversions</StatLabel>
            <Target color="purple" />
          </StatHeader>
          <StatValue>127</StatValue>
        </StatCard>
        <StatCard>
          <StatHeader>
            <StatLabel>Taux de Conv.</StatLabel>
            <ArrowUpRight color="green" />
          </StatHeader>
          <StatValue>3.37%</StatValue>
        </StatCard>
      </StatsGrid>
    </Container>
  );
};

export default AdsConsole;