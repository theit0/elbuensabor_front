import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Index from '../components/Index'

const Router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Index/>
            }
        ]
    },
    {

    }
])

export default Router;