import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", credentials);
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Invalid credentials or server error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f0f0f0]">
      <div className="bg-white shadow-md rounded px-10 py-8 w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
