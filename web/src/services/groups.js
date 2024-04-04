import http from "./base-api";

const create = (group, eventId) => http.post(`/groups/${eventId}`, group);

const list = (eventId) => http.get(`/groups/${eventId}`);

const detail = (groupId) => http.get(`/group/${groupId}`);

export default {
  create,
  list,
  detail,
};
