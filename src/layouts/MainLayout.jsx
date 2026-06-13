import { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import { useTheme } from "../context/ThemeContext";
import projects from "../data/projects";

const MainLayout = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const params = useParams();

  // Dynamic SEO Page Resolution
  useEffect(() => {
    let title = "Imtiaz Ali | Full Stack Software Engineer";
    let desc = "Professional developer portfolio of Imtiaz Ali. Showcasing 29+ personal projects and 6+ client applications built using React, Vue, Laravel, Tailwind CSS, and Electron.js.";

    const path = location.pathname;

    if (path === "/projects") {
      title = "Projects Showcase | Imtiaz Ali";
      desc = "Browse through all 29+ web development and desktop projects built by Imtiaz Ali. Filter by React, Vue, Laravel, and Electron.";
    } else if (path === "/resume") {
      title = "Resume & Technical Skills | Imtiaz Ali";
      desc = "Download the official software engineering resume of Imtiaz Ali. Review full-stack development achievements and core qualifications.";
    } else if (path.startsWith("/projects/")) {
      const projId = Number(params.id || path.split("/").pop());
      const project = projects.find((p) => p.id === projId);
      if (project) {
        title = `${project.title} | Imtiaz Ali`;
        desc = project.description || desc;
      } else {
        title = "Project Details | Imtiaz Ali";
      }
    } else if (path !== "/") {
      title = "404 Not Found | Imtiaz.dev";
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", desc.slice(0, 160));
    }
  }, [location.pathname, params]);

  return (
    <div
      className={`
        min-h-screen transition-colors duration-300
        ${theme === "dark" ? "bg-[#0a0a0c] text-slate-100" : "bg-white text-slate-900"}
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