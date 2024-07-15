import { Outlet } from "react-router-dom"
import Slider from "../Slider/Slider"

const MasterLayout = () => {
  return (
   <div className='lg:grid lg:grid-cols-12 lg:gap-0'>
   <Slider/>
   <Outlet/>
   </div>
  )
}

export default MasterLayout