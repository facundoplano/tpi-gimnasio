import { useState, useRef } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ejemplo simple de validación (hardcodeado)
    if (email === "admin@admin.com" && password === "1234") {
      navigate("/home"); // 👉 Redirige a la página de Home
    } else {
      alert("Usuario o contraseña incorrectos");
      emailRef.current.focus(); // 👉 Uso de ref: devuelve el foco al campo email
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "25rem" }} className="shadow-lg p-4 rounded-4">
        <h3 className="text-center mb-4">Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              value={email}
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
