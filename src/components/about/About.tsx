import { education, experience } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section-space page-shell">
      <div className="section-heading">
        <p className="eyebrow">01 / ABOUT & EXPERIENCE</p>
        <h2>
          A different path.
          <br />
          <span className="serif-accent">A people-first perspective.</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-story">
          <p>
            I’m a software engineer with a background in education and a Master
            of Information Technology from the University of Auckland.
          </p>
          <p>
            My path into technology began with self-directed learning while
            living in Australia and New Zealand. Today, I work on enterprise
            applications in Japan, bringing frontend and backend features
            together.
          </p>
          <p>
            Teaching taught me to listen, explain complex ideas clearly, and
            adapt. Those habits shape how I write code and work with a team.
          </p>
          <div className="education-block">
            <h3 className="eyebrow">EDUCATION</h3>
            {education.map((item) => (
              <div className="education-item" key={item.school}>
                <h4>{item.qualification}</h4>
                <p>{item.school}</p>
                <span className="small-note">{item.period}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-meta">
                <span>{item.period}</span>
                {index === 0 && <span className="current-label">CURRENT</span>}
              </div>
              <h3>{item.role}</h3>
              <p className="company-name">
                {item.company} <span> / {item.location}</span>
              </p>
              <p className="experience-description">{item.description}</p>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
