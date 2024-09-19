// TripForm.js
import React, { useState } from "react";
import axios from "axios";

const TripForm = ({ editMode = false, trip = {} }) => {
  const [destination, setDestination] = useState(trip.destination || "");
  const [price, setPrice] = useState(trip.price || 0);
  const [date, setDate] = useState(trip.date || "");
  const [accommodations, setAccommodations] = useState(
    trip.accommodations || ""
  );
  const [activities, setActivities] = useState(trip.activities || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripData = { destination, price, date, accommodations, activities };

    if (editMode) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/trips/${trip._id}`, tripData)
        .then((response) => {
          console.log("Trip updated:", response.data);
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/trips`, tripData)
        .then((response) => {
          console.log("Trip added:", response.data);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Accommodations"
        value={accommodations}
        onChange={(e) => setAccommodations(e.target.value)}
      />
      <input
        type="text"
        placeholder="Activities"
        value={activities}
        onChange={(e) => setActivities(e.target.value)}
      />
      <button type="submit">{editMode ? "Update Trip" : "Add Trip"}</button>
    </form>
  );
};

export default TripForm;
