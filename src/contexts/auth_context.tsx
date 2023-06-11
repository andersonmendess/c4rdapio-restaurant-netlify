import { useState, createContext } from "react";
import AuthRepository from "../repositories/auth_repository";
import { Restaurant } from "../models/restaurant";
import { SignupDto } from "../dtos/auth/signup_dto";

export interface AuthContextProps {
  isAuthenticated: boolean;
  restaurant: Restaurant | null;
  signup: (params: SignupDto) => Promise<Restaurant | null>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
  onAppReady: () => void;
}

export default function AuthProvider({
  children,
  onAppReady,
}: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  const signup = async (params: Object): Promise<Restaurant | null> => {
    const response = await AuthRepository.signup(params);
    setRestaurant(response.data);
    setIsAuthenticated(true);
    return restaurant;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        restaurant,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
