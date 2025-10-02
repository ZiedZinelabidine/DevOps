import { Search, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from "react";
import {
  RootStyle,
  SearchIcon,
  SearchInputWrapper,
  StyledInput,
  StyleHeader,
  StyleLabelRadio,
  StyleRadios,
  StyleSpanRadio,
  StyleText,
  Title,
  TypewriterContainer,
  TypewriterText,
  Cursor,
  UserTypeSelector,
  UserTypeButton,
  ThemeSwitcher
} from "./HomeSlider.style";

const HomeSlider = ({ active, setActive }) => {
  const [selectedOption, setSelectedOption] = useState("Freelances");
  const [searchTerm, setSearchTerm] = useState("");
  const [userType, setUserType] = useState("entreprise");
  const [isDark, setIsDark] = useState(true);
  const words = ['Entreprise', 'Recruteur', 'Freelance informatique', 'Agence informatique' , 'Développeur' , 'DevOps' , 'Web Designer' , 'Expert SEO' ];
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(prev =>
          isDeleting
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getPlaceholderText = () => {
    const baseText = {
      Freelances: {
        entreprise: "Cherchez des prestataires Informatique",
        marketplace: "Cherchez dans la marketplace",
        freelance: "Explorez les opportunités de projet",
        agency: "Découvrez des projets pour votre agence"
      },
      Marketplace: {
        entreprise: "Cherchez dans la marketplace",
        recruiter: "Explorez les services de recrutement",
        freelance: "Trouvez des outils et services",
        agency: "Découvrez des solutions B2B"
      }
    };

    return baseText[selectedOption]?.[userType] || "Cherchez...";
  };

  const getText = () => {
    const descriptions = {
      Freelances: {
        entreprise: "Trouvez des prestataires Informatique en les contactant directement ou en partageant votre projet avec notre communauté d'indépendants.",
        marketplace: "Découvrez notre marketplace avec des services prêts à l'emploi, que vous pouvez également personnaliser selon les besoins de votre projet.",
        freelance: "Trouvez des projets qui correspondent à vos compétences et connectez-vous avec des clients potentiels.",
        agency: "Développez votre réseau et trouvez des opportunités de collaboration pour votre agence."
      },
      Marketplace: {
        entreprise: "Découvrez notre marketplace avec des services prêts à l'emploi, que vous pouvez également personnaliser selon les besoins de votre projet.",
        recruiter: "Explorez nos solutions de recrutement et outils RH pour optimiser vos processus.",
        freelance: "Accédez à des outils et services pour développer votre activité freelance.",
        agency: "Trouvez des solutions B2B pour améliorer l'efficacité de votre agence."
      }
    };

    return descriptions[selectedOption]?.[userType] || "Search...";
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      let path;

      switch (userType) {
        case 'entreprise':
          path = '/search/prestataires';
          break;
        case 'marketplace':
          path = '/search/products';
          break;
        default:
          path = '/'; // Default fallback
      }

      window.location.href = `${path}`;
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <RootStyle isDark={isDark}>
      <StyleHeader>
        <Title isDark={isDark}>Plateforme freelance avec marketplace d'outils de développement et infrastructure cloud pour </Title>
        <TypewriterContainer>
          <TypewriterText isDark={isDark}>
            {currentText}
            <Cursor>|</Cursor>
          </TypewriterText>
        </TypewriterContainer> 

        <UserTypeSelector isDark={isDark}>
          <UserTypeButton
            active={userType === "entreprise"}
            onClick={() => setUserType("entreprise")}
            isDark={isDark}
          >
            Prestataires
          </UserTypeButton>
          <UserTypeButton
            active={userType === "marketplace"}
            onClick={() => setUserType("marketplace")}
            isDark={isDark}
          >
            Marketplace
          </UserTypeButton>
        </UserTypeSelector>

        <SearchInputWrapper>
          <SearchIcon isDark={isDark}>
            <Search size={20} />
          </SearchIcon>
          <StyledInput
            type="search"
            placeholder={getPlaceholderText()}
            value={searchTerm}
            onKeyDown={handleEnterKeyPress}
            onChange={handleSearchChange}
            isDark={isDark}
          />
        </SearchInputWrapper>

        <StyleText isDark={isDark}>
          {getText()}
        </StyleText>
      </StyleHeader>
    </RootStyle>
  );
};

export default HomeSlider;