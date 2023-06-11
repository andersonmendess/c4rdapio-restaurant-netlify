import buildHttpClient from "../services/api";
import  { AxiosInstance } from "axios";

class AuthRepository {
  constructor() {
    this.http = buildHttpClient();
  }

  http: AxiosInstance;

  login(params: Object) {
    return this.http.post("/", params);
  }

  signup(params: Object) {
    return this.http.post("/restaurants", params);
  }
}

const authRepository = new AuthRepository();

export default authRepository;
