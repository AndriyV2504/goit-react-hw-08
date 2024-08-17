import axios from "axios";

export const goItApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
