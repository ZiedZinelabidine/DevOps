import ModalComponent from "components/ModalITgalaxy/ModalComponent";
import Pagination from "components/Paginations/Pagination";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useGetRecrutementsQuery } from "../../redux/api/recrutements/recrutementApi";
import EditProfil from "../ComponnentProfilItems/EditProfil";
import Card from "./card";
import {
  AddProposalContainer,
  CardContainers,
  LinkContainer,
  LinkText,
  SearchBar,
  SearchContainer,
  SecondContainer,
  StyledCandidatesCardsContainer,
  NotFoundTextStyle
} from "./styled";

export default function RecruitmentComponents(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recruitments, setRecruitments] = useState({
    data: [],
    pagination: {},
  });
  const [link, setLink] = useState();
  const URL = process.env.REACT_APP_FRONTED_URL;

  useEffect(() => {
    if (props.recrutementToken) {
      setLink(`${URL}/recruitmentDash?token=${props.recrutementToken}`);
    }
  }, [props.recrutementToken]);

  const recordsPerPage = 1000000000;

  const {
    data: recruitmentsData,
    error: recruitmentsDataError,
    isLoading: recruitmentDataLoading,
  } = useGetRecrutementsQuery(
    `?recruterId=${props.id}&page=${currentPage}&limit=${recordsPerPage}`
  );

  useEffect(() => {
    if (recruitmentsData) {
      setRecruitments(recruitmentsData);
    }
  }, [recruitmentsData]);

  const handleConnecter = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModalProposal = () => {
    setShowModal(false);
  };

  const RenderFooter = (
    <AddProposalContainer onClick={closeModalProposal}>
      Close
    </AddProposalContainer>
  );

  return (
    <FormProvider {...useForm()}>
      <SecondContainer>
        <SearchContainer>
          <SearchBar>
            <LinkContainer>
              <p
                style={{
                  fontWeight: "501",
                  color: "black",
                  fontFamily: "Inter",
                  margin: 0,
                  fontSize: "30px"
                }}
              >
                To be a ItGalaxy Recruter and win money with us , share this
                link with IT workers
              </p>
              <br />
              <LinkText href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </LinkText>
            </LinkContainer>
          </SearchBar>
        </SearchContainer>

        {recruitmentDataLoading ? (
          <CardContainers>
            <Spinner />
          </CardContainers>
        ) : recruitmentsDataError ? (
          <CardContainers>
            <div>Error loading recruitments. Please try again.</div>
          </CardContainers>
        ) : (
          <StyledCandidatesCardsContainer>
            {recruitments.data?.length === 0 ? (
              <CardContainers>
                <NotFoundTextStyle>No Recruitment found</NotFoundTextStyle>
              </CardContainers>
            ) : (
              <>
                <CardContainers>
                  {recruitments.data.map((item) => (
                    <Card
                      key={item.recruted.id}
                      item={item.recruted}
                      handleConnecter={handleConnecter}
                    />
                  ))}
                </CardContainers>
                {recruitments.pagination?.totalPages > 1 && (
                  <div className="col-lg-12 col-md-12 col-12 mt-4">
                    <Pagination
                      nPages={recruitments.pagination.totalPages}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                )}
              </>
            )}
          </StyledCandidatesCardsContainer>
        )}
      </SecondContainer>

      {showModal && (
        <ModalComponent
          show={showModal}
          closeModal={setShowModal}
          body={
            <EditProfil
              userData={selectedItem}
              editProfil={false}
              role={selectedItem?.type}
            />
          }
          bodyPadding="0"
          minWidth="80vw"
          height="80vh"
          footer={RenderFooter}
        />
      )}
    </FormProvider>
  );
}
