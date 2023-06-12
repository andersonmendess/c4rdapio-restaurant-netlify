import { Restaurant } from "./restaurant";

export interface User {
  restaurant: Restaurant;
  name: string;
  cpf: string;
  email: string;
  password: string;
  email_verified: boolean;
  is_blocked: boolean;
  blocked_at: Date | null;
  blocked_reason: string | null;
  created_at: Date;
}
