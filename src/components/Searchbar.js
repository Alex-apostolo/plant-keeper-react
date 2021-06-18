import { Form, Container, Button, Row, Col } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <Container>
      <Row className="mt-5 no-gutters justify-content-center">
        <Col xs={8}>
          <Form.Control
            type="search"
            placeholder="Search keepers by location"
          />
        </Col>
        <Col xs={1}>
          <Button variant="primary" type="submit">
            <BiSearch />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
