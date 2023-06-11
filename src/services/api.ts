import axios, { AxiosInstance } from "axios";

const DEV_MODE = false;

interface HttpClientConfig {
  baseURL: string;
  timeout: number;
  headers: Object;
}

const buildHttpClient = (): AxiosInstance => {
  const httpClientConfig: HttpClientConfig = {
    baseURL: DEV_MODE
      ? "https://api-dev.c4rdapio.com"
      : "http://localhost:3000",
    timeout: 7000,
    headers: {
      Accept: "application/json",
    },
  };

  return axios.create(httpClientConfig);
};

export default buildHttpClient;
