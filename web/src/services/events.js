import http from "./base-api";

const create = (event) => http.post("/events", event);

const listAdmin = (id) => http.get(`/events/admin/${id}`)

export default {
  create,
  listAdmin,
};
