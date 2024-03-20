import http from "./base-api";

const create = (eventId, puntuation) => http.post(`/puntuations/${eventId}`, puntuation);
const exists = (eventId, juryId, groupId) => http.get(`/puntuations/${eventId}/${juryId}/${groupId}`);

export default {
  create,
  exists,
};
