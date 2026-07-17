import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function DefaultLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-slate-900">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
