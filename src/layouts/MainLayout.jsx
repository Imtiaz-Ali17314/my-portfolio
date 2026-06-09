import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import ScrollToTopButton from "../components/common/ScrollToTopButton";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Future Feature */}
      {/* <ScrollToTopButton /> */}
    </div>
  );
};

export default MainLayout;