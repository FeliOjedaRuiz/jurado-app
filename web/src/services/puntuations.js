import http from "./base-api";

const create = (eventId, puntuation) => http.post(`/puntuations/${eventId}`, puntuation);

const exists = (eventId, juryId, groupId) => http.get(`/puntuations/${eventId}/${juryId}/${groupId}`);

const update = (puntuationId, puntuation) => http.patch(`/puntuations/${puntuationId}`, puntuation);

export default {
  create,
  exists,
  update,
};
