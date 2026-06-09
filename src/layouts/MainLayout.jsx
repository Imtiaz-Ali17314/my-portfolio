import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        min-h-screen transition-colors duration-300
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"}
      `}
    >
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;