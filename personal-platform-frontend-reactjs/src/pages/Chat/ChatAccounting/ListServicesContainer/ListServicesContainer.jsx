import { useEffect, useRef, useState } from "react";

import {
  Arrow,
  Container,
  Item,
  ItemContent,
  ItemIcon,
  ItemList,
} from "./ListServicesContainer.style";
const DeployIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/services/deploy.png`;
const FleshIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/services/flesh.png`;
const FolderIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/services/folder.png`;
const MongoDBIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/services/mongodb.png`;
const OrgIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/services/org.png`;
const ServerIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/services/server.png`;
const SettingsIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/services/settings.png`;
const SqlIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/services/sql.png`;
const items = [
  {
    id: 2,
    icon: ServerIcon,
    title: "Serveurs Linux",
    description:
      "Optimize your infrastructures with robust and secure Linux solutions",
  },
  {
    id: 4,
    icon: FolderIcon,
    title: "Create repos Github pour le projet",
    description: "Simplify Your Project Management with Organized Repositories",
  },
  {
    id: 5,
    icon: MongoDBIcon,
    title: "Database MongoDB",
    description:
      "Manage your data with maximum flexibility and scalability",
  },
  {
    id: 6,
    icon: SqlIcon,
    title: "DataBase SQL",
    description:
      "Manage and optimize your data with powerful and flexible MySQL databases",
  },
  {
    id: 7,
    icon: DeployIcon,
    title: "Déployer et tester votre code en 2mins",
    description: "Simplifiez et accélérez vos processus de développement",
  },
  {
    id: 8,
    icon: SettingsIcon,
    title: "Tools & ItGalaxy Cloud",
    description: "Empower Your Workflow with Advanced Cloud Solutions",
  },
  {
    id: 9,
    icon: ServerIcon,
    title: "Serveurs Linux",
    description:
      "Optimize your infrastructures with robust and secure Linux solutions",
  },
  {
    id: 10,
    icon: OrgIcon,
    title: "Organisation: Board pour votre projet",
    description:
      "Planifiez, suivez et collaborez sur chaque étape de votre projet avec efficacité",
  },
  {
    id: 11,
    icon: FolderIcon,
    title: "Create repos Github pour le projet",
    description: "Simplify Your Project Management with Organized Repositories",
  },
  {
    id: 12,
    icon: MongoDBIcon,
    title: "Database MongoDB",
    description:
      "Manage your data with maximum flexibility and scalability",
  },
  {
    id: 13,
    icon: SqlIcon,
    title: "DataBase SQL",
    description:
      "Manage and optimize your data with powerful and flexible MySQL databases",
  },
  {
    id: 14,
    icon: DeployIcon,
    title: "Déployer et tester votre code en 2mins",
    description: "Simplifiez et accélérez vos processus de développement",
  },
  {
    id: 15,
    icon: SettingsIcon,
    title: "Tools & ItGalaxy Cloud",
    description: "Empower Your Workflow with Advanced Cloud Solutions",
  },
];

const ItemComponent = ({ theme }) => {
  const listRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showAcceptProposal, setshowAcceptProposal] = useState(false);

  const handelShowAcceptProposal = () => {
    setshowAcceptProposal(true);
  };

  const handelCloseAcceptProposal = () => {
    setshowAcceptProposal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollUp = () => {
    listRef.current.scrollBy({ top: -100, behavior: "smooth" });
  };

  const scrollDown = () => {
    listRef.current.scrollBy({ top: 100, behavior: "smooth" });
  };

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };
  return (
    <>
      <Container>
        <Arrow
          className="up"
          onClick={isMobile ? scrollLeft : scrollUp}
          theme={theme}
        >
          <img src={FleshIcon} width={15} height={15} alt="flesh" />
        </Arrow>
        <ItemList ref={listRef}>
          {items.map((item) => (
            <Item key={item.id} theme={theme}>
              <ItemIcon theme={theme}>
                <img
                  style={{
                    margin: "1px 10px 10px 0px",
                    filter: theme === "light" ? "invert(0%)" : "invert(100%)",
                  }}
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                />
                <h6>{item.title}</h6>
              </ItemIcon>
              <ItemContent theme={theme}>
                <p>{item.description}</p>
              </ItemContent>
            </Item>
          ))}
        </ItemList>
        <Arrow
          className="down"
          onClick={isMobile ? scrollRight : scrollDown}
          theme={theme}
        >
          <img
            src={FleshIcon}
            width={15}
            height={15}
            alt="flesh"
            style={{ transform: " rotateX(180deg)" }}
          />
        </Arrow>
      </Container>
    </>
  );
};

export default ItemComponent;
