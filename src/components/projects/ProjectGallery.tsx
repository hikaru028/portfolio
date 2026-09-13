"use client";
import { useState } from "react";
import { ProjectData } from "./ProjectData";
import ProjectCard from "./ProjectCard";
const filters = [
  "All",
  "Professional",
  "Personal",
  "Academic",
  "TypeScript",
  "Java",
  "AWS",
];
export default function ProjectGallery() {
  const [filter, setFilter] = useState("All");
  const projects = ProjectData.filter(
    (project) =>
      filter === "All" ||
      project.kind === filter ||
      project.category.includes(filter),
  );
  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={filter === item ? "filter-active" : ""}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="results-count small-note" role="status">
        {projects.length} {projects.length === 1 ? "project" : "projects"} ·{" "}
        {filter}
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
