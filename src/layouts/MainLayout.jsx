import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import { useTheme } from "../context/ThemeContext";
import projects from "../data/projects";
import MagicFlowerTrail from "../components/ui/MagicFlowerTrail";
import CodeWorldBackground from "../components/ui/CodeWorldBackground";
import LightCodeWorldBackground from "../components/ui/LightCodeWorldBackground";

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
        min-h-screen transition-colors duration-500
        ${theme === "dark" ? "bg-[#080416] text-slate-100" : "bg-[#fcfaff] text-slate-900"}
      `}
    >
      {/* 3D background based on active theme */}
      {theme === "dark" ? <CodeWorldBackground /> : <LightCodeWorldBackground />}

      {/* Magical canvas flower trail — floats above everything */}
      <MagicFlowerTrail />

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