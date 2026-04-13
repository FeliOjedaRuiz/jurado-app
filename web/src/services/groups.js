import http from "./base-api";

const create = (group, eventId) => http.post(`/groups/${eventId}`, group);

const list = (eventId) => http.get(`/groups/${eventId}`);

const detail = (groupId) => http.get(`/group/${groupId}`);

const update = (groupId, group) => http.patch(`/groups/${groupId}`, group);

const remove = (groupId) => http.delete(`/groups/${groupId}`);

export default {
  create,
  list,
  detail,
  update,
  remove,
};
