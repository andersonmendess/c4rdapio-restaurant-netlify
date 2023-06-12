import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth_context";
import { User } from "../models/user";

export default function useUser() {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    setUser(authContext?.user ?? null);
  }, [authContext?.user, navigate, user]);

  return user;
}
