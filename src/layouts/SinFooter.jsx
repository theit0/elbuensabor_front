import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
const SinFooter = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default SinFooter