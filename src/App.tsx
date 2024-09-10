import "./i18n";

import { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import GlobalStyles from "./styles/global";
import routesConfig from "./routes";
import { useIP } from "./hooks/useIP";

function App() {
  useIP();
  const location = useLocation();
  const element = useRoutes(routesConfig, location);
  return (
    <Suspense fallback={<>loading ....</>}>
      {element}
      <GlobalStyles />
    </Suspense>
  );
}

export default App;
