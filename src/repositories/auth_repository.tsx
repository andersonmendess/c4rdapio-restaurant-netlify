import buildHttpClient from "../services/api";
import axios, { AxiosInstance } from "axios";

class AuthRepository {
  constructor() {
    this.http = buildHttpClient();
  }

  http: AxiosInstance;

  login(params: Map<string, any>) {
    return this.http.post("/", params);
  }

  signup(params: Map<string, any>) {
    return this.http.post("/restaurants", {
      email: params.get("email"),
      name: params.get("name"),
      password: params.get("password"),
      cnpj: params.get("document"),
    });
  }
}

export default new AuthRepository();
