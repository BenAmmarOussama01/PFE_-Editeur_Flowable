import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Modeler = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Modeler;
