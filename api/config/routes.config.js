const express = require('express');
const router = express.Router();
const users = require("../controllers/users.controllers");
const events = require("../controllers/events.controllers");
const groups = require("../controllers/groups.controllers");
const puntuations = require("../controllers/puntuations.controllers");

const usersMid = require('../middlewares/users.mid');
const eventsMid = require('../middlewares/events.mid');
// const groupsMid = require('../middlewares/groups.mid');
// const puntuationsMid = require('../middlewares/puntuations.mid');
const secure = require('../middlewares/secure.mid');

// USERS
router.post("/users", users.create);
router.get("/users", secure.auth, users.list);
// router.get("/users/:eventId", secure.auth, /*eventsMid.admin,*/ users.listJuries);
// router.patch('/users/:userId/:id', /*secure.auth, usersMid.exists, establishmentsMid.owner, usersMid.isAdmin, */ users.update);
router.delete('/users/:userId', secure.auth, usersMid.exists, usersMid.canDelete, users.delete);

router.post('/login', users.login);

//EVENTS
router.post("/events", secure.auth, events.create);
router.get("/events/:userId", secure.auth, events.listAdmin);
router.get("/events/:userId", secure.auth, events.listJury);
router.get('/events/:id', secure.auth, eventsMid.exists, eventsMid.isMember, events.detail);
router.patch('/events/:id', secure.auth, eventsMid.exists, eventsMid.isAdmin, events.update);
router.delete('/events/:id', secure.auth, eventsMid.exists, eventsMid.isAdmin, events.delete);

//GROUPS
router.post("/groups/:eventId", secure.auth, eventsMid.exists, eventsMid.isAdmin, groups.create);
router.get('/groups/:eventId', secure.auth, eventsMid.exists, eventsMid.isMember, groups.list);
router.get('/groups/:id', secure.auth, groupsMid.exists, groupMid.isAdmin, groups.detail);
router.patch('/groups/:id', secure.auth, groupsMid.exists, groupMid.isAdmin, groups.update);
router.delete('/groups/:id', secure.auth, groupsMid.exists, groupMid.isAdmin, groups.delete);

//PUNTUATIONS
router.post("/puntuations", puntuations.create);

module.exports = router;
