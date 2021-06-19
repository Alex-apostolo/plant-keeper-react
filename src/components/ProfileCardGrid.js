import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const ProfileCardGrid = () => {
  const number = 48;
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${number}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setUsers(data.results);
      });
  }, []);

  if (loading || users.length === 0) return <div>Fetching users</div>;

  return (
    <Container className="p-4 mt-2" fluid>
      <Row>
        {users.map((user) => {
          return (
            <Col key={user.login.uuid} className="d-flex justify-content-center mt-3 mb-3">
              <ProfileCard
                image={user.picture.large}
                fullName={user.name.first + " " + user.name.last}
                city={user.location.city}
                country={user.location.countryy}
                rating={5}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProfileCardGrid;
