const express = require("express");
const router = express.Router();
const users = require("../controllers/users.controllers");
const events = require("../controllers/events.controllers");
const groups = require("../controllers/groups.controllers");
const puntuations = require("../controllers/puntuations.controllers");
const categorys = require("../controllers/categorys.controllers");

const usersMid = require("../middlewares/users.mid");
const eventsMid = require("../middlewares/events.mid");
const groupsMid = require("../middlewares/groups.mid");
const puntuationsMid = require("../middlewares/puntuations.mid");
const categorysMid = require("../middlewares/categorys.mid");
const secure = require("../middlewares/secure.mid");

// USERS
router.post("/users", users.create);
// router.get("/users/:id", secure.auth, usersMid.isOwner, users.detail);
router.get(
  "/users/:eventId",
  secure.auth,
  eventsMid.exists,
  eventsMid.isAdmin,
  users.listJuries
);
router.get(
  "/juries/:userId",
  secure.auth,  
  users.detail
);
// router.patch('/users/:id', secure.auth, usersMid.exists, usersMid.isOwner, users.update);
// router.delete(
//   "/users/:userId",
//   secure.auth,
//   usersMid.exists,
//   usersMid.isOwner,
//   users.delete
// );
router.post("/login", users.login);

//EVENTS
router.post("/events", secure.auth, events.create);
router.get("/events/admin/:userId", secure.auth, events.listAdminEvents);
router.get("/events/jury/:userId", secure.auth, events.listJuryEvents);
router.get(
  "/events/:eventId",
  secure.auth,
  eventsMid.exists,
  eventsMid.isMember,
  events.detail
);
router.patch(
  "/events/:eventId",
  secure.auth,
  eventsMid.exists,
  eventsMid.isAdmin,
  events.update
);
router.patch(
  "/events/:eventId/juries",
  secure.auth,
  eventsMid.exists,
  eventsMid.isAdmin,
  usersMid.juryExists,
  events.updateJuries
);
// router.delete(
//   "/events/:id",
//   secure.auth,
//   eventsMid.exists,
//   eventsMid.isAdmin,
//   events.delete
// );

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
  "/group/:groupId",
  secure.auth,
  groupsMid.exists,
  /*groupsMid.isAdmin,*/
  groups.detail
);
// router.patch(
//   "/groups/:groupId",
//   secure.auth,
//   groupsMid.exists,
//   groupsMid.isAdmin,
//   groups.update
// );
// router.delete(
//   "/groups/:groupId",
//   secure.auth,
//   groupsMid.exists,
//   groupsMid.isAdmin,
//   groups.delete
// );

//PUNTUATIONS
router.post(
  "/puntuations/:eventId",
  secure.auth,
  eventsMid.exists,
  puntuationsMid.isOpen,
  groupsMid.exists,
  eventsMid.isJury,
  puntuationsMid.notExists,
  puntuations.create
);
router.get(
  "/puntuations/:eventId/:juryId/:groupId",
  secure.auth,
  eventsMid.exists,
  groupsMid.exists,
  eventsMid.isJury,
  puntuations.exists
);
router.get(
  "/puntuations/:groupId",
  secure.auth,
  groupsMid.exists,
  groupsMid.isAdmin,
  puntuations.list
);
router.patch(
  "/puntuations/:puntuationId",
  secure.auth,
  puntuationsMid.exists,
  puntuationsMid.isOpen,
  puntuationsMid.isJury,
  puntuations.update
);
// router.get(
//   "/puntuations/:groupId/:userId",
//   secure.auth,
//   groupsMid.isJury,
//   puntuations.detail
// );
// router.delete(
//   "/puntuations/:id",
//   secure.auth,
//   puntuationsMid.exists,
//   groupsMid.isJury,
//   puntuations.delete
// );
// router.delete(
//   "/puntuations/:eventId",
//   secure.auth,
//   eventsMid.isAdmin,
//   puntuations.deleteAll
// );


//CATEGORYS
router.post(
  "/categorys/:eventId",
  secure.auth,
  eventsMid.exists,
  eventsMid.isAdmin,
  categorys.create
);
router.get(
  "/categorys/:eventId",
  secure.auth,
  eventsMid.exists,
  eventsMid.isMember,
  categorys.list
);
router.delete(
  "/categorys/:categoryId",
  secure.auth,
  categorysMid.exists,
  categorysMid.isAdmin,
  categorys.delete
);

module.exports = router;
