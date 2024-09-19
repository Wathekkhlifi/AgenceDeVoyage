import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrips } from "../store/actions/tripActions";

const TripList = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.trips);
  const loading = useSelector((state) => state.trips.loading);

  useEffect(() => {
    dispatch(getTrips());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Available Trips</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id}>
            {trip.destination} - {trip.price}€
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
