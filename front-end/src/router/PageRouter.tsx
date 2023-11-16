import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            },
            {
                path: "daashboard",
                element: <Dashboard/>,
            },
        ]
    }
]);

const PageRouter = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default PageRouter;