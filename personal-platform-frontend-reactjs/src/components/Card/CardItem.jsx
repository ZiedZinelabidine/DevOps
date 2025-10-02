import { Card } from "react-bootstrap";
import { CartContainer } from "../../pages/HomePage/styledComponant";

const CardItem = (props) => {
  return (
    <CartContainer>
      <Card.Title>
        <h3> {props.title}</h3>
        <hr />
      </Card.Title>
      <Card.Body>{props.children}</Card.Body>
    </CartContainer>
  );
};
export default CardItem;
