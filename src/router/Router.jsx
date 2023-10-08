import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Index from '../pages/Index'
import Login from '../pages/Login'
import Carrito from '../pages/Carrito'
import ArticuloManufacturadoDetalle from '../pages/ArticuloManufacturadoDetalle'
import SinFooter from "../layouts/SinFooter";

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
            },
            
        ]
    },
    {
        path: '',
        element: <SinFooter/>,
        children: [
            {
                path:'/articulosManufacturados/:id',
                element: <ArticuloManufacturadoDetalle/>
            }
        ]  
    }
])

export default Router;