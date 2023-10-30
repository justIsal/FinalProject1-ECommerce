
import React, { useState } from "react";
import { authenticate } from "./Auth"; // Impor fungsi autentikasi

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Panggil fungsi autentikasi dari auth.js
    const isAuthenticated = authenticate(username, password);

    if (isAuthenticated) {
      // Jika autentikasi berhasil, atur isLoggedIn menjadi true
      setIsLoggedIn(true);
    } else {
      // Jika autentikasi gagal, tampilkan pesan kesalahan atau lakukan tindakan yang sesuai
      alert("Username atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Form Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
