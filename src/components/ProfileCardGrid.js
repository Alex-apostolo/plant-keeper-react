import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const ProfileCardGrid = (props) => {
  return (
    <Container className="p-4 mt-2" fluid>
      <Row>
        {props.profiles.map((profile) => {
          return (
            <Col key={profile.id} className="d-flex justify-content-center mt-3 mb-3">
              <ProfileCard
                image={profile.image}
                fullName={profile.fullName}
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
