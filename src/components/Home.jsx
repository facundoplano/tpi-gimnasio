import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5 text-center">
      <h1 className="mb-4">🏋️‍♀️ Bienvenido al Gimnasio FitZone</h1>
      <Row className="justify-content-center">
        <Col md={3}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Mi Perfil</Card.Title>
              <Button variant="primary" onClick={() => navigate("/profile")}>
                Ver perfil
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Clases</Card.Title>
              <Button variant="success" onClick={() => navigate("/clases")}>
                Ver clases
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Administración</Card.Title>
              <Button variant="warning" onClick={() => navigate("/admin")}>
                Ir al panel
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
