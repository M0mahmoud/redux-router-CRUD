import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Root() {
  return (
    <Container>
      <Header />
      <Row className="mt-5 p-3">
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Root;
