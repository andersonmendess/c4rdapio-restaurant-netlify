import { SignInDto, SignUpDto } from "../dtos/auth.dto";
import buildHttpClient from "../services/api";
import { AxiosInstance } from "axios";

class PublicAuthRepository {
  private http: AxiosInstance;

  constructor() {
    this.http = buildHttpClient();
  }

  signIn(params: SignInDto) {
    return this.http.post("/auth/signin", params);
  }

  signUp(params: SignUpDto) {
    return this.http.post("/auth/signup", params);
  }
}

class AuthRepository {
  private http: AxiosInstance;

  constructor(token: string) {
    this.http = buildHttpClient(token);
  }

  getProfile() {
    return this.http.get("/auth/profile");
  }
}

export { PublicAuthRepository, AuthRepository };
