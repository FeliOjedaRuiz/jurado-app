import http from "./base-api";

const create = (user) => http.post("/users", user);

const login = (user) => http.post("/login", user);

const listJuries = (eventId) => http.get(`/users/${eventId}`);

const detail = (userId) => http.get(`/juries/${userId}`);

export default {
  create,
  login,
  listJuries,
  detail,
};
