import App from "./../App";
import { MainRoutes } from "../modules/main/routes/MainRoutes";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
     ...MainRoutes,

    ],
  },
];
