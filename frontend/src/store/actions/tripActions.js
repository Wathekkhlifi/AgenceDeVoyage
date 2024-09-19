import axios from "axios";

export const getTrips = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/trips`);
    dispatch({
      type: "GET_TRIPS",
      payload: response.data,
    });
  } catch (error) {
    console.error("Fetching trips error:", error);
  }
};


export const addTrip = (tripData) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/trips`, tripData);
    dispatch({ type: "ADD_TRIP_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "ADD_TRIP_FAIL", payload: err.response.data.msg });
  }
};
