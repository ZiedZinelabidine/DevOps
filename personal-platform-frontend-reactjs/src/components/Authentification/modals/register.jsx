import { useState } from "react"; // Import React if not already
import Modal from "react-bootstrap/Modal";
import Login from "./login"; // Assuming Login component is in the same directory
import BusinessForm from "./registerForms/business";
import FreeLanceForm from "./registerForms/freeLance";
import RecruiterForm from "./registerForms/recruiter";
import {
  BackButton,
  Footer,
  Header,
  StyledModal,
  StyledModalFooter,
  Subtitle,
  TabWrapper,
  TabsWrapper,
  Title,
} from "./styled";
import AgenceForm from "./registerForms/agence";

const businessIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/business.webp`;
const individualIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/individual.webp`;
const recruiterIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/recruiter.webp`;

const Register = ({
  openModalRegister,
  handleModalRegister,
  freelance = true,
  recruiter = true,
  agence = true,
  buisness = true,
  openModalLoginDefault = false,
  defaultkey = "freelance",
  proxy = "",
  recruitment_token = "",
}) => {
  const [key, setKey] = useState(defaultkey);
  const [showModalLogin, setShowModalLogin] = useState(openModalLoginDefault);
  const handleLoginDisplay = () => {
    setShowModalLogin(true);
  };


  return (
    <>
      {showModalLogin ? (
        <Login
          proxy={proxy}
          openModalLogin={showModalLogin}
          handleModalLogin={() => setShowModalLogin(false)}
        />
      ) : (
        <StyledModal
          size="lg"
          centered
          show={openModalRegister}
          onHide={handleModalRegister}
          animation={true}
        >
          <Modal.Body>
            <Header>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "23px",
                }}
              >
                <Title>Créez votre compte</Title>
                <Subtitle>Pour Entreprise, Développeurs Freelances , Agences et Recruteurs .</Subtitle>
              </div>
            </Header>

            <TabsWrapper
              id="justify-tab-example"
              className="mb-3"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              justify
              variant="pills"
            >
              {buisness && (
                <TabWrapper
                  eventKey="entreprise"
                  title={
                    <>
                      <img
                        src={businessIcon}
                        alt="Business Icon"
                        style={{ width: "40px", marginRight: "5px" }}
                      />
                      Entreprise
                    </>
                  }
                >
                  <BusinessForm
                    proxy={proxy}
                    handleModalRegister={handleModalRegister}
                  />
                </TabWrapper>
              )}

              {freelance && (
                <TabWrapper
                  eventKey="freelance"
                  title={
                    <>
                      <img
                        src={individualIcon}
                        alt="Individual Icon"
                        style={{ width: "40px", marginRight: "5px" }}
                      />
                      Prestataire
                    </>
                  }
                >
                  <FreeLanceForm
                    recruitment_token={recruitment_token}
                    proxy={proxy}
                    handleModalRegister={handleModalRegister}
                  />
                </TabWrapper>
              )}
              {recruiter && (
                <TabWrapper
                  eventKey="recruiter"
                  title={
                    <>
                      <img
                        src={recruiterIcon}
                        alt="Agence Icon"
                        style={{ width: "40px", marginRight: "5px" }}
                      />
                      Recruteur
                    </>
                  }
                >
                  <RecruiterForm
                    proxy={proxy}
                    handleModalRegister={handleModalRegister}
                  />
                </TabWrapper>
              )}
            </TabsWrapper>
          </Modal.Body>
          <StyledModalFooter>
            <Footer>
              <div
                onClick={handleLoginDisplay}
                style={{
                  color: "#009FF5",
                  fontFamily: "Roboto",
                  cursor: "pointer",
                  fontWeight: "700",
                  textDecoration: "underline",
                  fontSize: "18px",
                  lineHeight: "20px",
                  paddingLeft: "20px",
                }}
              >
                J'ai déjà un compte
              </div>
            </Footer>
          </StyledModalFooter>
        </StyledModal>
      )}
    </>
  );
};

export default Register;
