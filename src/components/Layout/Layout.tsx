import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      {" "}
      <div className="bg-green-950 sticky top-0">
      <Navbar />
      </div>
      <div className="bg-green-950 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;