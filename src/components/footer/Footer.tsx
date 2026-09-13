import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
export default function Footer() {
  return (
    <footer className="site-footer page-shell">
      <div>
        <a className="footer-name" href="mailto:h.suzuki.028@gmail.com">
          Hikaru Suzuki
        </a>
        <p>Software engineer. Always learning.</p>
      </div>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub <ArrowUpRight size={14} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <ArrowUpRight size={14} />
        </a>
        <span>© {new Date().getFullYear()} Hikaru Suzuki</span>
      </div>
    </footer>
  );
}
