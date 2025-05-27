import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import ArticleDetails from "../pages/ArticleDetails";

function Layout() {
    return (

        <>
            <Outlet />
        </>

    );


}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path:"/", element:<Home/>},
            {path:"/articleDetails/:id", element:<ArticleDetails/>}
            
        ],
    },
]);


export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

