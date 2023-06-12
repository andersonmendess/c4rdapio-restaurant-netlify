import axios, { AxiosInstance } from "axios";

const DEV_MODE = false;

const buildHttpClient = (token?: string): AxiosInstance => {
  return axios.create({
    baseURL: DEV_MODE
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
