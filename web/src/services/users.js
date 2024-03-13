import http from "./base-api";

const create = (user) => http.post("/users", user);

const login = (user) => http.post("/login", user);

const listJuries = (eventId) => http.get(`/users/${eventId}`)

export default {
  create,
  login,
  listJuries,
};
