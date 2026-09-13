import type { Metadata } from "next";
import ProjectGallery from "@/components/projects/ProjectGallery";
import Cta from "@/components/cta/Cta";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected enterprise, web, mobile, and cloud projects by Hikaru Suzuki.",
};
export default function Projects() {
  return (
    <main id="main-content">
      <section className="page-shell section-space">
        <div className="section-heading">
          <p className="eyebrow">WORK / PROJECT ARCHIVE</p>
          <h1 className="page-title">
            Built with purpose.
            <br />
            <span className="serif-accent">Made to work.</span>
          </h1>
          <p className="section-description">
            A selection of professional work, personal experiments, and academic
            projects. Explore the details or dive into the available source
            code.
          </p>
        </div>
        <ProjectGallery />
      </section>
      <Cta />
    </main>
  );
}
