import React from "react";
import { Navigate, RouteObject } from 'react-router-dom'
import AppRoute from "./AppRoute";
import MainPage from "./pages/MainPage";
import LoadingPage from "./pages/LoadingPage";

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
                element: <MainPage />,
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
                        element: <LoadingPage />,
                    },
                    {
                        path: AppRoute.appCircuit,
                        element: <MainPage />,
                    },
                ],
            },
        ],
    },
]

export default AppRoutes
