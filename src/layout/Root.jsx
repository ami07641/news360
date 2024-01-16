import { Outlet } from "react-router-dom";
import BreakingNews from "../shared/BreakingNews";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <BreakingNews />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
