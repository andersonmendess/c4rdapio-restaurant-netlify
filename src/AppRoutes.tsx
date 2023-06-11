import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import CadastroPage from "./pages/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </Routes>
  );
}
