import { useState, createContext } from "react";
import AuthRepository from "../repositories/auth_repository";
import { Restaurant } from "../models/restaurant";

export interface AuthContextProps {
  isAuthenticated: boolean;
  restaurant: Restaurant | null;
  signup: (params: Map<string, any>) => Promise<void>;
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

  const signup = (params: Map<string, any>): Promise<void> => {

    return new Promise<void>((resolve, reject) => {
      try {
        AuthRepository.signup(params);
        setIsAuthenticated(true);
        resolve();
      } catch (e) {
        console.error("Erro ao realizar o signup:", e);
        reject(e);
      }
    });
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
