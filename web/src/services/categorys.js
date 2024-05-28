import http from "./base-api";

const create = (category, eventId) => http.post(`/categorys/${eventId}`, category);

const list = (eventId) => http.get(`/categorys/${eventId}`);

export default {
  create,
  list,
};