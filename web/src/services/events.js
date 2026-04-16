import http from "./base-api";

const create = (event) => http.post("/events", event);

const listAdminEvents = (userId) => http.get(`/events/admin/${userId}`);

const listJuryEvents = (userId) => http.get(`/events/jury/${userId}`);

const detail = (eventId) => http.get(`/events/${eventId}`);

const update = (eventId, data) => {
  const formData = new FormData();

  if (data.name !== undefined) formData.append("name", data.name);
  if (data.image instanceof File) formData.append("image", data.image);

  return http.patch(`/events/${eventId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const addJury = (eventId, event) =>
  http.patch(`/events/${eventId}/juries`, event);

export default {
  create,
  listAdminEvents,
  listJuryEvents,
  detail,
  update,
  addJury,
};
