import http from "./base-api";

const create = (event) => http.post("/events", event);

const listAdmin = (id) => http.get(`/events/admin/${id}`)

const detail = (eventId) => http.get(`/events/${eventId}`)

export default {
  create,
  listAdmin,
  detail,
};
