import { Container, Row, Col } from "react-bootstrap";
import UserCard from "./UserCard";

const UserCardGrid = (props) => {
  return (
    <Container className="p-4 mt-2" fluid>
      <Row>
        {props.users.map((user) => {
          return (
            <Col
              key={user.id}
              className="d-flex justify-content-center mt-3 mb-3"
            >
              <UserCard
                id={user.id}
                image={user.image}
                fullName={user.fullName}
                city={user.city}
                country={user.country}
                rating={user.rating}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default UserCardGrid;
