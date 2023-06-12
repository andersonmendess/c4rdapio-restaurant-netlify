import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./contexts/auth_context";
import { useState } from "react";
import { Center, Spinner } from "@chakra-ui/react";

function App() {
  const [appReady, setAppReady] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AuthProvider
      onAppReady={(isAuthOk) => {
        setAppReady(true);
        setIsAuthorized(isAuthOk);
      }}
    >
      {appReady ? (
        <BrowserRouter>
          <AppRoutes isAuthorized={isAuthorized} />
        </BrowserRouter>
      ) : (
        <Center bg={"white"} h={"100vh"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
          />
        </Center>
      )}
    </AuthProvider>
  );
}

export default App;
