import { Navigate, RouteObject } from 'react-router-dom'
import AppRoute from "./AppRoute";
import MainPage from "./pages/MainPage";

const AppRoutes: RouteObject[] = [
    {
        path: AppRoute.defaultWildcard,
        element: <Navigate to={AppRoute.defaultRoot} replace />,
    },
    {
        path: AppRoute.defaultEmpty,
        children: [
            {
                path: AppRoute.defaultEmpty,
                element: <MainPage markdownUrl="https://raw.githubusercontent.com/TaimurAyaz/personal_webpage/master/content/resume.md" />,
            },
            {
                path: AppRoute.projects,
                children: [
                    {
                        path: AppRoute.defaultEmpty,
                        element: <Navigate to={AppRoute.defaultRoot} replace />,
                    },
                    {
                        path: AppRoute.appKeys,
                        element: <MainPage markdownUrl="https://raw.githubusercontent.com/TaimurAyaz/personal_webpage/master/content/keys_pp.md" />,
                    },
                    {
                        path: AppRoute.appCircuit,
                        element: <MainPage markdownUrl="https://raw.githubusercontent.com/TaimurAyaz/personal_webpage/master/content/circuit_pp.md" />,
                    },
                ],
            },
        ],
    },
]

export default AppRoutes
