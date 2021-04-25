import comic from "../api/comic/";

const api = {
  comic,
};
export const apiFactory = {
  api: (name) => api[name],
};
