import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectData } from "./ProjectData";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <section id="work" className="work-section">
      <div className="page-shell section-space">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>
              From ideas
              <br />
              <span className="serif-accent">to working software.</span>
            </h2>
          </div>
          <Link href="/projects" className="text-button">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="projects-grid">
          {ProjectData.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
