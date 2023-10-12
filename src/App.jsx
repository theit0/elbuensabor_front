
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './router/Router'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { get_articulo_carrito } from './store/actions/CarritoActions';
function App() {

  const dispatch = useDispatch();

  // Cargar el carrito desde el localStorage al iniciar la aplicación
  useEffect(() => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.forEach((articulo) => {
      dispatch(get_articulo_carrito(articulo));
    });
  }, []);

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
