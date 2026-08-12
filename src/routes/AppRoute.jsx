import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Landing from "../pages/landing/Landing";

const AppRoute = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Landing />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoute;
