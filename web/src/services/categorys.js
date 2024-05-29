import http from "./base-api";

const create = (category, eventId) => http.post(`/categorys/${eventId}`, category);

const list = (eventId) => http.get(`/categorys/${eventId}`);

const deleteCategory = (categoryId) => http.delete(`/categorys/${categoryId}`);

export default {
  create,
  list,
  deleteCategory,
};