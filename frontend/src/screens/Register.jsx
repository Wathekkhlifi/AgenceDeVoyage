import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/actions/authActions";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(credentials));
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="First Name"
        value={credentials.firstName}
        onChange={(e) =>
          setCredentials({ ...credentials, firstName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={credentials.lastName}
        onChange={(e) =>
          setCredentials({ ...credentials, lastName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Phone"
        value={credentials.phone}
        onChange={(e) =>
          setCredentials({ ...credentials, phone: e.target.value })
        }
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
