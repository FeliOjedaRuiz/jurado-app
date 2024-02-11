const express = require("express");
const router = express.Router();
const users = require("../controllers/users.controllers");
const events = require("../controllers/events.controllers");
const groups = require("../controllers/groups.controllers");
const puntuations = require("../controllers/puntuations.controllers");

const usersMid = require("../middlewares/users.mid");
const eventsMid = require("../middlewares/events.mid");
// const groupsMid = require('../middlewares/groups.mid');
// const puntuationsMid = require('../middlewares/puntuations.mid');
const secure = require("../middlewares/secure.mid");

// USERS
router.post("/users", users.create);
router.get("/users/:search", secure.auth, users.list);
router.get("/users/:id", secure.auth, usersMid.isOwner, users.detail);
router.get("/users/:eventId", secure.auth, eventsMid.exists, eventsMid.isAdmin, users.listJuries);
router.patch('/users/:id', secure.auth, usersMid.exists, usersMid.isOwner, users.update);
router.delete(
  "/users/:userId",
  secure.auth,
  usersMid.exists,
  usersMid.isOwner,
  users.delete
);

router.post("/login", users.login);

//EVENTS
router.post("/events", secure.auth, events.create);
router.get("/events/:userId", secure.auth, events.listAdmin);
router.get("/events/:userId", secure.auth, events.listJury);
router.get(
  "/events/:id",
  secure.auth,
  eventsMid.exists,
  eventsMid.isMember,
  events.detail
);
router.patch(
  "/events/:id",
  secure.auth,
  eventsMid.exists,
  eventsMid.isAdmin,
  events.update
);
router.delete(
  "/events/:id",
  secure.auth,
  eventsMid.exists,
  eventsMid.isAdmin,
  events.delete
);

//GROUPS
router.post(
  "/groups/:eventId",
  secure.auth,
  eventsMid.exists,
  eventsMid.isAdmin,
  groups.create
);
router.get(
  "/groups/:eventId",
  secure.auth,
  eventsMid.exists,
  eventsMid.isMember,
  groups.list
);
router.get(
  "/groups/:id",
  secure.auth,
  groupsMid.exists,
  groupMid.isAdmin,
  groups.detail
);
router.patch(
  "/groups/:id",
  secure.auth,
  groupsMid.exists,
  groupMid.isAdmin,
  groups.update
);
router.delete(
  "/groups/:id",
  secure.auth,
  groupsMid.exists,
  groupMid.isAdmin,
  groups.delete
);

//PUNTUATIONS
router.post(
  "/puntuations/:groupId",
  secure.auth,
  groupMid.exists,
  groupMid.isJury,
  puntuations.create
);
router.get(
  "/puntuations/:groupId",
  secure.auth,
  groupMid.exists,
  groupMid.isAdmin,
  puntuations.list
);
router.get(
  "/puntuations/:groupId/:userId",
  secure.auth,
  groupMid.isJury,
  puntuations.detail
);
router.patch(
  "/puntuations/:id",
  secure.auth,
  puntuationsMid.exists,
  groupMid.isJury,
  puntuations.update
);
router.delete(
  "/puntuations/:id",
  secure.auth,
  puntuationsMid.exists,
  groupMid.isJury,
  puntuations.delete
);
router.delete(
  "/puntuations/:eventId",
  secure.auth,
  eventMid.isAdmin,
  puntuations.deleteAll
);

module.exports = router;
