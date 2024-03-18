import { Outlet } from 'react-router-dom'
import ProcessesNavbar from '../components/navbar/ProcessesNavbar'

const Modeler = () => {
  return (
    <>
      <ProcessesNavbar />
      <Outlet />
    </>
  )
}

export default Modeler
