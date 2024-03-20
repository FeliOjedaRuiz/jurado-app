import http from "./base-api";

const create = (event) => http.post("/events", event);

const listAdminEvents = (userId) => http.get(`/events/admin/${userId}`);

const listJuryEvents = (userId) => http.get(`/events/jury/${userId}`);

const detail = (eventId) => http.get(`/events/${eventId}`);

const update = (eventId, event) => http.patch(`/events/${eventId}`, event);

const addJury = (eventId, event) =>
  http.patch(`/events/${eventId}/juries`, event);

export default {
  create,
  listAdminEvents,
  listJuryEvents,
  detail,
  update,
  addJury,
};
