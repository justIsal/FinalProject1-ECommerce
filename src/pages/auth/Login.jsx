// Login.jsx
import React, { useState } from "react";
import { authenticate,authenticateAdmin } from "./Auth";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Mengimport file stylesheet

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const isAuthenticated = await authenticate(value);
    if(!isAuthenticated) alert("Username atau password salah. Silakan coba lagi.");
  };

  return (
    <div className="container"> {/* Menggunakan kelas container */}
      <div className="form-container"> {/* Menggunakan kelas form-container */}
        <h2 className="text-2xl font-bold mb-10"> Selamat Datang </h2>
        <div className="input-field">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            name="username"
            value={value.username}
            onChange={(e) => setValue({...value, username: e.target.value})}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            value={value.password}
            onChange={(e) => setValue({...value,password: e.target.value})}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
