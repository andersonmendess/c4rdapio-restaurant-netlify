import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import CadastroPage from "./pages/register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </Routes>
  );
}
