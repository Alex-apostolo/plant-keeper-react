import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";

const ProfileCard = (props) => {
  let { image, fullName, city, country, rating } = props;
  return (
    <Link
      to={{ pathname: "/profile", customData: props }}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <Card style={{ width: "12rem", cursor: "pointer" }}>
        <Card.Img variant="top" data-src="holder.js/100px180" src={image} />
        <Card.Body>
          <Card.Title>{fullName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {city}, {country}
          </Card.Subtitle>
          <Rating rating={rating} />
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ProfileCard;
