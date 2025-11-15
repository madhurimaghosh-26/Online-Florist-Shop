import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext"; // ✅ import context

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ use context function

  const handleSubmit = (e) => {
    e.preventDefault();
    // accept any email & password
    login(); // ✅ instantly updates Navbar
    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Sign In to FloraFiesta 🌸</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
