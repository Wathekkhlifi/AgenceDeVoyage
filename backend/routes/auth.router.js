// routes/auth.js
const express = require("express");

const { login } = require("../controllers/auth.controller");
const router = express.Router();

// POST: Login Voyageur
router.post("/login", login);

module.exports = router;
