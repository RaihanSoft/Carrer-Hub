import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Statistics from "../Pages/Statistics";
import AppliedJobs from "../Pages/AppliedJobs";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {
                path: '/statistics',
                element: <Statistics />,
            },
            {
                path: '/appliedJobs',
                element: <AppliedJobs />
            }, {
                path: '/blog',
                element: <Blog />
            },
        ]
    },
]);
export default router