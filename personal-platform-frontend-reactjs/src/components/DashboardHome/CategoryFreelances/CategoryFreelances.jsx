import {
  Briefcase,
  ChevronRight,
  Code2,
  FileChartLine,
  LineChart,
  Palette,
  ShoppingBasket,
  SquareCode,
  TabletSmartphone,
  Terminal,
  TrendingUp,
  Users
} from 'lucide-react';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #000000;
  max-width: 100%;

`;

const Section = styled.section`
  width: 70%;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  align-items: center;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #60a5fa, #a855f7, #60a5fa);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  transform-style: preserve-3d;


`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #94A3B8;
  line-height: 1.6;
 align-items: center;
  text-align: center;
`;

const CategoryList = styled.div`
  background: #111111;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  &:hover {
    background: #1a1a1a;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(to right, #60a5fa, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 220, 130, 0.15);
`;

const CategoryInfo = styled.div`
  flex: 1;
  margin: 0 1.5rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
    flex-direction: column;
  }
`;

const CategoryDescription = styled.p`
  color: #94A3B8;
  font-size: 0.875rem;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const CategoryStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 2rem;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94A3B8;
  font-size: 0.875rem;

  svg {
    color: #00DC82;
  }
`;

const TrendingTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 220, 130, 0.1);
  border-radius: 12px;
  font-size: 0.75rem;
  color: #00DC82;
  font-weight: 500;
`;

const ChevronIcon = styled(ChevronRight)`
  color: #00DC82;
  opacity: 0.5;
  transition: all 0.2s ease;

  ${CategoryItem}:hover & {
    opacity: 1;
    transform: translateX(4px);
  }
`;

function CategoryFreelances() {

  const categories = [

    {
      icon: <Code2 size={22} />,
      title: "Développement des sites Web",
      freelances: "4,321",
      avgRate: "$65/hr",
      slug: 'freelance-info',
      trending: true
    },
    {
      icon: <TabletSmartphone size={22} />,
      title: "Développement des applications Mobile",
      freelances: "1,765",
      avgRate: "$75/hr",
      slug: 'freelance-app',
      trending: true

    },
    {
      icon: <Terminal size={22} />,
      title: "Développement des APIs RestFull",
      freelances: "1,543",
      avgRate: "$50/hr",
      slug: 'freelance-informatique',
      trending: true

    },
    {
      icon: <SquareCode size={22} />,
      title: "infogérance DevOps",
      freelances: "2,154",
      avgRate: "$45/hr",
      slug: 'infogerance-devops',
      trending: true
    },
    {
      icon: <FileChartLine size={22} />,
      title: "Développement des sites vitrines Wordpress",
      freelances: "3,210",
      slug: 'freelance-wordpress',
      avgRate: "$35/hr"
    },
    {
      icon: <LineChart size={22} />,
      title: "Marketing & SEO",
      freelances: "1,987",
      avgRate: "$40/hr",
      slug: 'freelance-seo',
    },
    {
      icon: <Palette size={22} />,
      title: "Conception et Créativité",
      freelances: "2,845",
      avgRate: "$45/hr",
      slug: 'freelance-graphiste'
    },
    {
      icon: <ShoppingBasket size={22} />,
      title: "Développement des sites e-commerce Shopify",
      freelances: "987",
      slug: 'freelance-site',
      avgRate: "$40/hr"
    },
  ];

  const handelRedirect = (slug) => {

    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/${slug}`;
  }

  return (
    <Container>
      <Section>
        <Header>
          <Title>Explorer les catégories des prestataires de services informatiques </Title>
          <Subtitle>
            Parcourez notre liste sélectionnée de catégories developpeur freelance , agence francaise pour le developpement et trouvez le talent idéal pour votre prochain projet.
          </Subtitle>
        </Header>

        <CategoryList>
          {categories.map((category, index) => (
            <CategoryItem key={index} onClick={() => handelRedirect(category.slug)}>
              <IconWrapper>
                {React.cloneElement(category.icon, { color: "#000000" })}
              </IconWrapper>
              <CategoryInfo >
                <CategoryTitle>
                  {category.title}
                  {category.trending && (
                    <TrendingTag>
                      <TrendingUp size={14} />
                      Trending
                    </TrendingTag>
                  )}
                </CategoryTitle>
                <CategoryDescription>
                  {category.description}
                </CategoryDescription>
              </CategoryInfo>
              <CategoryStats>
                <StatItem>
                  <Users size={16} />
                  {category.freelances} Freelances & Agences
                </StatItem>
                <StatItem>
                  <Briefcase size={16} />
                  Avg. {category.avgRate}
                </StatItem>
              </CategoryStats>
              <ChevronIcon size={20} />
            </CategoryItem>
          ))}
        </CategoryList>
      </Section>
    </Container>
  );
}

export default CategoryFreelances;