const TripModel = require("../models/trip.model");
var express = require("express");
var router = express.Router();

// Add a new trip
router.post("/", async (req, res) => {
  const newTrip = new TripModel(req.body);
  try {
    const savedTrip = await newTrip.save();
    res.json(savedTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Modify a trip
router.put("/:id", async (req, res) => {
  try {
    const updatedTrip = await TripModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a trip
router.delete("/:id", async (req, res) => {
  try {
    const removedTrip = await TripModel.findByIdAndRemove(req.params.id);
    res.json(removedTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all trips
router.get("/", async (req, res) => {
  try {
    const trips = await TripModel.find();
    res.json(trips);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
