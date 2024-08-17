import axios from "axios";

export const goItApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  goItApi.defaults.headers.common.Authorization = "";
};
