const express = require('express');
const router = express.Router();
const users = require("../controllers/users.controllers");
const events = require("../controllers/events.controllers");
const groups = require("../controllers/groups.controllers");
const puntuations = require("../controllers/puntuations.controllers");

// USERS
router.post("/users", users.create);

//EVENTS
router.post("/events", events.create);
router.get("/events", events.list);

//GROUPS
router.post("/groups", groups.create);

//PUNTUATIONS
router.post("/puntuations", puntuations.create);

module.exports = router;
