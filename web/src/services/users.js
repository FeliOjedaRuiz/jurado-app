import http from "./base-api";

const create = (user) => http.post("/users", user);

const login = (user) => http.post("/login", user);

const listJuries = (eventId) => http.get(`/users/${eventId}`);

const detail = (userId) => http.get(`/juries/${userId}`);

const update = (userId, user) => http.patch(`/users/${userId}`, user);

const remove = (userId) => http.delete(`/users/${userId}`);

export default {
  create,
  login,
  listJuries,
  detail,
  update,
  remove,
};
