import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./contexts/auth_context";

function App() {
  return (
    <AuthProvider
      onAppReady={() => {
        console.log("app ready");
      }}
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
