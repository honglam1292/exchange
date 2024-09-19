import "./i18n";

import { Suspense, useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import GlobalStyles from "./styles/global";
import routesConfig from "./routes";
import { useIP } from "./hooks/useIP";
import { useUserToken } from "./stores/authStore";
import { PATH } from "./constants/path";
import { AlertProvider } from "./hooks/useAlert";

function App() {
  useIP();
  const location = useLocation();
  const element = useRoutes(routesConfig, location);
  const isAuth = useUserToken((state) => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(PATH.login);
    }
  }, [isAuth]);
  return (
    <Suspense fallback={<>loading ....</>}>
      <AlertProvider>
        {element}
        <GlobalStyles />
      </AlertProvider>
    </Suspense>
  );
}

export default App;
