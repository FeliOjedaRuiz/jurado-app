const express = require("express");
const router = express.router();
const events = require("../controllers/event.controllers")

router.get("/events", events.list);

module.exports = router;