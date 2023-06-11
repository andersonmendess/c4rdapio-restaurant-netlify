import axios, { AxiosInstance } from "axios";

const DEV_MODE = false;

interface HttpClientConfig {
  baseURL: string;
  timeout: number;
}

const buildHttpClient = (): AxiosInstance => {
  const httpClientConfig: HttpClientConfig = {
    baseURL: DEV_MODE ? "http://localhost:3000" : "http://localhost:3000",
    timeout: 7000,
  };

  return axios.create(httpClientConfig);
};

export default buildHttpClient;
