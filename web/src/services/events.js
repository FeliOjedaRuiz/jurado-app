import http from "./base-api";

const create = (event) => http.post("/events", event);

const listAdminEvents = (id) => http.get(`/events/admin/${id}`);

const detail = (eventId) => http.get(`/events/${eventId}`);

const update = (eventId, event) => http.patch(`/events/${eventId}`, event);

const addJury = (eventId, event) =>
  http.patch(`/events/${eventId}/juries`, event);

const enableVoting = (eventId, event) => http.patch(`/events/${eventId}/voting`, event);

export default {
  create,
  listAdminEvents,
  detail,
  update,
  addJury,
  enableVoting,
};
