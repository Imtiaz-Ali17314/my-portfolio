import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import FilterButton from "../components/ui/FilterButton";
import SearchBar from "../components/ui/SearchBar";
import SectionTitle from "../components/common/SectionTitle";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const categories = ["all", "html", "bootstrap", "laravel", "vue", "react", "electron"];

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      filter === "all" || project.category === filter;

    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <SectionTitle title="All Projects" subtitle="Showcasing my work" />

      {/* Search */}
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 my-4">
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            active={filter === cat}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;