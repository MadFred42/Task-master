import { MainPage, TaskPage } from "./pages";
import { MAIN_ROUTE, TASK_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: TASK_ROUTE,
        Component: TaskPage
    }
];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    }
];