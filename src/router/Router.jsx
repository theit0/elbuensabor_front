import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Index from '../pages/Index'
import Login from '../pages/Login'
import Carrito from '../pages/Carrito'

const Router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Index/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/carrito',
                element: <Carrito/>
            }
        ]
    },
    {
       
    }
])

export default Router;