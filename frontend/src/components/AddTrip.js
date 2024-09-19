import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrip } from "../store/actions/tripActions";

const AddTrip = () => {
  const [tripData, setTripData] = useState({
    title: "",
    description: "",
    price: "",
    date: ""
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTrip(tripData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddTrip;
