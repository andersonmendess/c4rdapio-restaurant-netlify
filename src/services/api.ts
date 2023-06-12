import axios, { AxiosInstance } from "axios";

const USE_REMOTE_API = true;

const buildHttpClient = (token?: string): AxiosInstance => {
  return axios.create({
    baseURL: USE_REMOTE_API
      ? "https://api-dev.c4rdapio.com"
      : "http://localhost:3000",
    timeout: 7000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

export default buildHttpClient;
