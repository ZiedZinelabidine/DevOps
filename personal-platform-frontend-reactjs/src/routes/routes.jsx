import { useRoutes } from "react-router-dom";
import { RoutesConfig } from "../core/config/routes.config";

// writze initUserRoutes function
function initUserRoutes(route) {
  return {
    path: route.path,
    element: route.element,
    children: route.children,
  };
}

// export Router component
export function Router() {
  const UserRoutesConfig = RoutesConfig.map((route) => {
    return initUserRoutes(route);
  });
  return useRoutes(UserRoutesConfig);
}
