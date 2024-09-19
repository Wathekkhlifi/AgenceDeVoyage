import axios from "axios";

export const login = (credentials) => async (dispatch) => {
  try {
    const { email, password } = credentials;
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      { email, password }
    );
    const { token, user } = res.data;

    // Save token in localStorage
    localStorage.setItem("token", token);

    // Dispatch login success action
    dispatch({ type: "LOGIN_SUCCESS", payload: { token, user } });
  } catch (err) {
    dispatch({ type: "LOGIN_FAIL", payload: err.response.data.msg });
  }
};

export const register = (credentials) => async (dispatch) => {
  try {
    const { email, password, firstName, lastName, phone } = credentials;
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/createUser`,
      { email, password, firstName, lastName, phone }
    );
  } catch (err) {
    dispatch({ type: "REGISTER_FAIL", payload: err.response.data.msg });
  }
};
