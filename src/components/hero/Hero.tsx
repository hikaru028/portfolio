import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero-section page-shell">
      <div className="hero-topline">
        <span className="eyebrow">
          <span className="status-dot" /> SOFTWARE ENGINEER
        </span>
        <span className="small-note">Based in {profile.location}</span>
      </div>
      <div className="hero-grid">
        <div>
          <p className="hero-intro">Hi, I’m Hikaru Suzuki.</p>
          <h1>
            Thoughtful code.
            <br />
            Useful <span className="serif-accent">experiences.</span>
          </h1>
          <p className="hero-description">
            I build web and mobile applications that connect clear interfaces
            with dependable systems. From Japan to New Zealand, I bring
            curiosity, care, and a collaborative mindset to every project.
          </p>
          <div className="button-row">
            <Link className="action-button" href="/projects">
              Explore my work <ArrowUpRight size={18} />
            </Link>
            <a
              className="text-button"
              href="/CV.pdf"
              download="Hikaru-Suzuki-CV.pdf"
            >
              Download CV <Download size={16} />
            </a>
          </div>
        </div>
        <div
          className="engineering-card"
          aria-label="Engineering focus: interfaces, APIs, and reliable systems"
        >
          <div className="card-topline">
            <span>THE WAY I BUILD</span>
            <span>01 / 03</span>
          </div>
          <div className="system-illustration" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="system-core">
              hs<span>.</span>
            </div>
            <span className="system-node node-one">UI</span>
            <span className="system-node node-two">API</span>
            <span className="system-node node-three">DATA</span>
          </div>
          <div className="engineering-caption">
            <span className="status-dot" />
            <span>
              Considered interfaces.
              <br />
              <strong>Connected systems.</strong>
            </span>
            <ArrowUpRight size={23} />
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#about" className="text-button">
          A little about me <ArrowDown size={16} />
        </a>
        <span>
          Angular <i /> TypeScript <i /> Java <i /> Next.js
        </span>
      </div>
    </section>
  );
}
