import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const UserCard = (props) => {
  return (
    <Link
      to={{ pathname: `/users/${props.id}`, userData: props}}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <Card style={{ width: "12rem", cursor: "pointer" }}>
        <Card.Img
          variant="top"
          data-src="holder.js/100px180"
          src={props.image}
        />
        <Card.Body>
          <Card.Title>{props.fullName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.city}, {props.country}
          </Card.Subtitle>
          <Rating rating={props.rating} />
        </Card.Body>
      </Card>
    </Link>
  );
};
export default UserCard;
