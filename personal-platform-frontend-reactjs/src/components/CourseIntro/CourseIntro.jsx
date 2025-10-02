import ModalPayment from "components/ModalITgalaxy/ModalPayment/ModalPayment";
import { getTokenFromLocalStorage } from "core/helpers/storage";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useHandleSubmitSoldedProductCreation from "../../hooks/useHandleSubmitSoldedProductCreation";
import { getURL } from "../../redux/api/uploads/uploadSlice";
import CoursePreviewCard from "../CoursePreviewCard/CoursePreviewCard";
import RenderStars from "components/RenderStars/RenderStars";
import CustomStars from "components/DashboardHome/Formations/FormationsCard/CustomStars/CustomStars";
const ArrowUpRight = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/akar-icons-arrow-up-right.svg`;

const Container = styled.div`
  /* max-width: 800px; */
  margin-top: 50px;
`;

const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;

const CourseInfo = styled.div`
  width: 100%;
`;

const CourseTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #222;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const EnrollButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 501;
  cursor: pointer;

  &:hover {
    background: green; // Optional hover effect
  }
`;

const Price = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #009ff5;
  border-radius: 5px;
  margin: 0;
`;

const EnrollContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  width: 67%;
  height: 320px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  box-shadow: 0px 0px 0px 2px black;
  padding: 10px; /* Padding for spacing */
  background: white; /* Background color */
  display: flex;
  flex-direction: column; /* Corrected: Use flex-direction instead of direction */
  justify-content: center; /* Center the content vertically */
  align-items: center; /* Center the content horizontally */
`;

const StarsStyle = styled.div`
    margin-left : 49%;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const StyleMessage = styled.div`
    padding-top: 20px;
    text-align: center;
    color: gray;
    font-size: 18px;
    font-weight: 701;
`;


const CourseIntro = (props) => {
  const [imageUrl, setImageUrl] = useState();
  const dispatch = useDispatch();
  const [showModalPayment, setShowModalPayment] = useState(false);
  const token = getTokenFromLocalStorage();
  const decodeToken = token ? jwtDecode(token) : null;
  const buyerId = decodeToken ? decodeToken.id : null;
  const buyerType = decodeToken ? decodeToken.role : null;

  const [formData, setFormData] = useState({
    productId: props.data.id,
    buyerId: buyerId,
    buyerType: buyerType,
    email: props.data?.user?.email
  });

  let { handleSubmit, loading } =
    useHandleSubmitSoldedProductCreation(formData);

  const handleClose = () => {
    setShowModalPayment(false);
  };

  // Handling form submission
  const handelShowModalPayment = () => {
    setShowModalPayment(true); // Show confirmation modal
  };

  useEffect(() => {
    let path;
    const fetchImageUrl = async () => {
      try {
        if (props?.data?.type === "APPLICATION") {
          path = `products/applications/${props?.data?.id}/image/`;
        } else {
          path = `products/videos_trainings/${props?.data?.id}/image/`;
        }
        const url = await dispatch(
          getURL({
            location: `${path}`,
          })
        );
        if (url.Contents && url.Contents.length > 0 && url.Contents[0].Key) {
          setImageUrl(process.env.REACT_APP_URL_BUCKET + url.Contents[0].Key);
        }
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageUrl();
  }, [dispatch]);

  return (
    <Container>
      <CourseHeader>
        <TitleContainer>
          <CourseInfo>
            <CourseTitle>{props?.data?.title}</CourseTitle>
            <StarsStyle> 
            <RenderStars stars={props?.data?.rising_star_global} nbr_comments={props?.data?.comments?.length} />
            </StarsStyle>
            <Price> Price : {props?.data?.price} euro</Price>{" "} <br/>

            <EnrollContainer>
              <EnrollButton onClick={handelShowModalPayment}>
                Purchased the course <img src={ArrowUpRight} />
              </EnrollButton>
            </EnrollContainer>
            <StyleMessage> 🌟 A chat will be automatically created with your trainer, where you can ask any questions at any time.</StyleMessage>
          </CourseInfo>
        </TitleContainer>
        <CoursePreviewCard
          imageSrc={imageUrl}
        />
      </CourseHeader>

      {showModalPayment && (
        <ModalPayment
          handleCloseShowModal={handleClose}
          showModalPayment={handelShowModalPayment}
          paymentProposal={false}
          price={props.data.price}
          title={"PAYMENT PRODUCT"}
          note={"Note that if problem with the product you can demand a refund"}
          onSubmit={handleSubmit}
        />
      )}
    </Container>
  );
};

export default CourseIntro;
