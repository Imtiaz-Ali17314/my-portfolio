import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Resume from "../pages/Resume";
import NotFound from "../pages/NotFound";

import { ROUTES } from "../constants/routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path={ROUTES.HOME}
            element={<Home />}
          />

          <Route
            path={ROUTES.PROJECTS}
            element={<Projects />}
          />

          <Route
            path={ROUTES.PROJECT_DETAILS}
            element={<ProjectDetails />}
          />

          <Route
            path={ROUTES.RESUME}
            element={<Resume />}
          />

          <Route
            path={ROUTES.NOT_FOUND}
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;