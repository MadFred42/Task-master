import { MainPage, TaskPage } from "./pages";
import { MAIN_ROUTE, TASK_ROUTE } from "./utils/consts";

export const authRoute = [
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