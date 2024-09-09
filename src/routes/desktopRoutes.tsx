import { PATH } from "@/constants/path";
import DefaultLayout from "@/layout/DefaultLayout";
import Homepage from "@/pages/Homepage";

import { RouteObject } from "react-router-dom";

export const desktopRoutes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: PATH.home,
        element: <Homepage />,
      },
    ],
  },
];