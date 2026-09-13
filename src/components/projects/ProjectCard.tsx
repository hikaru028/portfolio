import Image from "next/image";
import { ArrowUpRight, GitBranch, Cloud, Braces } from "lucide-react";
import type { Project } from "./ProjectData";
export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.category.includes("AWS") ? Cloud : Braces;
  return (
    <article className="project-card">
      <div
        className={`project-visual ${project.metric ? "metric-visual" : ""}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} application — ${project.title === "Hikaru’s portfolio" ? "previous design" : "project preview"}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
            className="project-image"
          />
        ) : project.metric ? (
          <div className="project-metric">
            <strong>{project.metric}</strong>
            <span>{project.metricLabel}</span>
            <span className="metric-footnote">
              Code refactoring + query optimisation
            </span>
          </div>
        ) : (
          <div className="project-placeholder">
            <Icon size={60} strokeWidth={1} />
            <span>{project.category.join(" / ")}</span>
          </div>
        )}
        <span className="project-kind">{project.kind}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.category.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <details className="project-details">
          <summary>Project details</summary>
          <p>{project.detail}</p>
        </details>
        <div className="project-links">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <GitBranch size={15} /> View code <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="small-note">
              {project.kind === "Professional"
                ? "Professional work · overview only"
                : "Project overview"}
            </span>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Live site <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
