import http from "./base-api";

const create = (event) => http.post("/events", event);

export default {
  create,
};
