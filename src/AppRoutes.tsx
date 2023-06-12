import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import CadastroPage from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function AppRoutes({ isAuthorized }: { isAuthorized: boolean }) {
  if(!isAuthorized) {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
