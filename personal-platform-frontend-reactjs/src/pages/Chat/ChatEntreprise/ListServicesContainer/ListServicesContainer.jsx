import { useEffect, useRef, useState } from "react";
import ModalAcceptProposals from "../../../../components/ModalITgalaxy/ModalAcceptProposals/ModalAcceptProposals";
import {
  Arrow,
  Container,
  Item,
  ItemContent,
  ItemContentDash,
  ItemIcon,
  ItemIconDash,
  ItemList,
  ItemProposalDash,
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
    id: 1,
    icon: ServerIcon,
    title: "Server Ubuntu",
    description:
      "Optimize your infrastructures with robust and secure Linux solutions",
    url: `/createProductServer?type=ubuntu`,
  },
  {
    id: 2,
    icon: ServerIcon,
    title: "Server Debian",
    description:
      "Optimize your infrastructures with robust and secure Linux solutions",
    url: `/createProductServer?type=debian`,
  },
  {
    id: 2,
    icon: ServerIcon,
    title: "Server RedHat",
    description:
      "Optimize your infrastructures with robust and secure Linux solutions",
    url: `/createProductServer?type=redhat`,
  },
  {
    id: 4,
    icon: MongoDBIcon,
    title: "Database MongoDB",
    description:
      "Manage your data with maximum flexibility and scalability",
    url: `/createProductDatabase?type=mongodb`,
  },
  {
    id: 5,
    icon: SqlIcon,
    title: "DataBase MySQL",
    description:
      "Manage and optimize your data with powerful and flexible MySQL databases",
    url: `/createProductDatabase?type=mysql`,
  },
  {
    id: 6,
    icon: SqlIcon,
    title: "DataBase PostgreSQL",
    description:
      "Manage and optimize your data with powerful and flexible PostgreSQL databases",
    url: `/createProductDatabase?type=postgres`,
  },
  {
    id: 7,
    icon: SettingsIcon,
    title: "Discover ItGalaxy Tools",
    description: "Boost your workflow with advanced SAAS solutions",
    url: `/marketplace`,
  },
  {
    id: 8,
    icon: ServerIcon,
    title: "Server Ubuntu",
    description:
      "Optimize your infrastructures with robust and secure Linux solutions",
    url: `/createProductServer?type=ubuntu`,
  },
  {
    id: 9,
    icon: ServerIcon,
    title: "Server RedHat",
    description:
      "Optimize your infrastructures with robust and secure Linux solutions",
    url: `/createProductServer?type=redhat`,
  },
  {
    id: 10,
    icon: ServerIcon,
    title: "Server Debian",
    description:
      "Optimize your infrastructures with robust and secure Linux solutions",
    url: `/createProductServer?type=debian`,
  },
  {
    id: 11,
    icon: MongoDBIcon,
    title: "Database MongoDB",
    description:
      "Manage your data with maximum flexibility and scalability",
    url: `/createProductDatabase?type=mongodb`,
  },
  {
    id: 12,
    icon: SqlIcon,
    title: "DataBase MySQL",
    description:
      "Manage and optimize your data with powerful and flexible MySQL databases",
    url: `/createProductDatabase?type=mysql`,
  },
  {
    id: 14,
    icon: SqlIcon,
    title: "DataBase PostgreSQL",
    description:
      "Manage and optimize your data with powerful and flexible PostgreSQL databases",
    url: `/createProductDatabase?type=postgres`,
  },
  {
    id: 15,
    icon: SettingsIcon,
    title: "Discover ItGalaxy MarketPlace",
    description: "Boost your workflow with advanced SAAS solutions",
    url: `/marketplace`,
  },
];

const ItemComponent = ({ theme }) => {
  const listRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showAcceptProposal, setshowAcceptProposal] = useState(false);

  const handelCreateProduct = (url) => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}${url}`;
  };
  
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
            <Item 
            key={item.id}
            theme={theme}
            onClick={() => handelCreateProduct(item.url)}        
            >
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
      {showAcceptProposal && (
        <ModalAcceptProposals
          show={showAcceptProposal}
          closeModal={handelCloseAcceptProposal}
        />
      )}
    </>
  );
};

export default ItemComponent;
