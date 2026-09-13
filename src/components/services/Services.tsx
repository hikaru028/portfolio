import { skills } from "@/data/profile";
import { Braces, Database, Layers3 } from "lucide-react";
const icons = [Layers3, Database, Braces];
export default function Services() {
  return (
    <section id="services" className="section-space page-shell">
      <div className="section-heading">
        <p className="eyebrow">03 / TOOLKIT</p>
        <h2>
          The tools behind
          <br />
          <span className="serif-accent">the work.</span>
        </h2>
        <p className="section-description">
          A practical toolkit for building across interfaces, application logic,
          and cloud infrastructure.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((group, index) => {
          const Icon = icons[index];
          return (
            <article className="skill-card" key={group.title}>
              <Icon size={26} strokeWidth={1.5} />
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
