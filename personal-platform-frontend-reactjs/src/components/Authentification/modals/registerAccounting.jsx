import { useState } from "react"; // Import React if not already
import Modal from "react-bootstrap/Modal";
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

import LoginAccounting from "./loginAccounting"; // Assuming Login component is in the same directory
import AccountingForm from "./registerForms/accounting";

const businessIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images-webp/recruiter.webp`;
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const RegisterAccounting = ({
  openModalRegister,
  handleModalRegister,
  openModalLoginDefault = false,
  defaultkey = "accounting",
  back = true,
  proxy = "",
}) => {
  const [key, setKey] = useState(defaultkey);
  const [showModalLogin, setShowModalLogin] = useState(openModalLoginDefault);
  const handleLoginDisplay = () => {
    setShowModalLogin(true);
  };

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      minWidth: "174px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#000",
    }),
  };

  return (
    <>
      {showModalLogin ? (
        <LoginAccounting
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
              {back && (
                <BackButton onClick={handleModalRegister}>
                  <img
                    src={Vector}
                    alt="Back Icon"
                    style={{ width: "0.83vw" }}
                  />
                </BackButton>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "23px",
                }}
              >
                <Title>Create your account</Title>
                <Subtitle>For Accounting.</Subtitle>
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
              <TabWrapper
                eventKey="accounting"
                title={
                  <>
                    <img
                      src={businessIcon}
                      alt="Recruiter Icon"
                      style={{ width: "40px", marginRight: "5px" }}
                    />
                    Accounting
                  </>
                }
              >
                <AccountingForm
                  proxy={proxy}
                  handleModalRegister={handleModalRegister}
                />
              </TabWrapper>
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
                I had already an account
              </div>
            </Footer>
          </StyledModalFooter>
        </StyledModal>
      )}
    </>
  );
};

export default RegisterAccounting;
