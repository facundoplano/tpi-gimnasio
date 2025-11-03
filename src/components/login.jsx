import { useState, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    email === "admin@admin.com" && password === "1234"
      ? navigate("/home")
      : (alert("Usuario o contraseña incorrectos"), emailRef.current.focus());
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
              name="email"
              placeholder="Ingrese su email"
              value={formData.email}
              ref={emailRef}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
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
