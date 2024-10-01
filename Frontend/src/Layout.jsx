import { Navbar, Footer, SearchBar } from "./components";
import { Outlet } from "react-router-dom";

//import for toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
