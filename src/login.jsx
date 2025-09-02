import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    setError("");
    alert("Login exitoso (demo)!");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Iniciar Sesión</h2>
          {error && <p style={styles.error}>{error}</p>}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Ingresar</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  container: {
    width: "100%",
    maxWidth: "500px", // Más ancho para PC
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    padding: "40px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "26px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
    textAlign: "center",
  },
  input: {
    marginBottom: "15px",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
