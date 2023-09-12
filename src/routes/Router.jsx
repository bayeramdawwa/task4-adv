import App from "./../App";
import Main from "./../modules/main/pages/Main";
import { teacherRoutes } from "../modules/teachers/routes/TeacherRoutes";
import { studentsRoutes } from "../modules/students/routes/StudentsRoutes";
import { MainRoutes } from "../modules/main/routes/MainRoutes";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
     ...MainRoutes,
      ...teacherRoutes,
      ...studentsRoutes,
    ],
  },
];
