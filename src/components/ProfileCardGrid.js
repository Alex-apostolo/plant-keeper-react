import { Container, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const ProfileCardGrid = (props) => {
  return (
    <Container>
      <Row>
        {props.profiles.map((profile) => {
          return (
            <ProfileCard
              image={profile.image}
              fullName={profile.name}
              city={profile.city}
              country={profile.country}
              rating={profile.rating}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default ProfileCardGrid;