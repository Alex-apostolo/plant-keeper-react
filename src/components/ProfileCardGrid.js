import { Container, Row, Col, Card } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const ProfileCardGrid = (props) => {
  return (
    <Container className="mt-5">
      <Row>
        {props.profiles.map((profile) => {
          return (
            <Col className="d-flex justify-content-center mt-3 mb-3">
              <ProfileCard
                image={profile.image}
                fullName={profile.name}
                city={profile.city}
                country={profile.country}
                rating={profile.rating}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProfileCardGrid;
