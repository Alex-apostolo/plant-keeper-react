import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import alex from "../assets/alex.jpg";

const ProfileCard = (props) => {
  return (
    <Card style={{ width: "12rem"}}>
      <Card.Img variant="top" data-src="holder.js/100px180" src={alex} />
      <Card.Body>
        <Card.Title>{props.fullName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.city}, {props.country}
        </Card.Subtitle>
        <Rating rating={props.rating}/>
      </Card.Body>
    </Card>
  );
};
export default ProfileCard;
