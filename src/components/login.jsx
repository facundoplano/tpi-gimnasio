import { useState, useRef } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@admin.com" && password === "1234") {
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrectos");
      emailRef.current.focus();
    }
  };

  return (
    <div className="main-container">
      <Card className="card-custom">
        <h3 className="text-center title">Inicio de sesión</h3>
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

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" className="btn-custom">
              Ingresar
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
