import { useState, createContext, useEffect } from "react";
import { AuthRepository } from "../repositories/auth_repository";
import { SignInDto, SignUpDto } from "../dtos/auth.dto";
import { User } from "../models/user";

export interface AuthContextProps {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  onAuthTokenChange: (token: string | null) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
  onAppReady: (isAuthorized: boolean) => void;
}

export default function AuthProvider({
  children,
  onAppReady,
}: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!token;

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    loadUser();
  }, [token]);

  const onAuthTokenChange = (newToken: string | null) => {
    setToken(newToken);
    localStorage.setItem("token", newToken ?? "");
    loadUser();
  };

  const loadUser = async () => {
    if (!token) {
      return null;
    }

    try {
      const repo = new AuthRepository(token);
      const response = await repo.getProfile();
      setUser(response.data);
      onAppReady(true);
    } catch (e) {
      setUser(null);
    }
  };

  const signOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUser(null);
    onAppReady(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        onAuthTokenChange,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
