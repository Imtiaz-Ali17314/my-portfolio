// src/utils/projectFilters.js

export const filterProjects = (projects, filter) => {
  if (!filter || filter === "all") {
    return projects;
  }

  return projects.filter((project) => {
    return project.category === filter;
  });
};

export const searchProjects = (projects, query) => {
  if (!query) return projects;

  const lowerQuery = query.toLowerCase();

  return projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.techStack?.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
    );
  });
};

export const sortProjectsByDate = (projects) => {
  return [...projects].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

export const getFeaturedProjects = (projects) => {
  return projects.filter((project) => project.featured === true);
};