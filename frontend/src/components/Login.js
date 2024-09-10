// components/Login.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authActions";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const createUser = async () => {
    const response = await axios.post(
      "http://localhost:8080/users/createUser",
      {
        firstName: "John",
        lastName: "Doe",
        password: "password",
        email: "john@example.com",
        phone: "1234567890",
      }
    );
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}

      <button onClick={createUser}>createUser</button>
    </div>
  );
};

export default Login;
