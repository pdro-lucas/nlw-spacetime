import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.26.222.76:3333",
});
