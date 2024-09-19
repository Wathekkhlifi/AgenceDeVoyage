var express = require("express");
var router = express.Router();

const usersRoutes = require("./users.router");
const authRoutes = require("./auth.router");
const tripsRoutes = require("./trip.router");

router.use("/users", usersRoutes);
router.use("/auth", authRoutes);
router.use("/trips", tripsRoutes);

module.exports = router;
