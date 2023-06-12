import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth_context";

export default function useAuthToken() {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const [token, setToken] = useState(authContext?.token);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    setToken(authContext?.token);
  }, [authContext?.token]);

  return token;
}
