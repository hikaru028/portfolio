import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Cta() {
  return (
    <section className="contact-band">
      <div className="page-shell">
        <p className="eyebrow">LET’S CONNECT</p>
        <div className="contact-band-row">
          <h2>
            Good work starts with
            <br />
            <span className="serif-accent">a conversation.</span>
          </h2>
          <Link href="/contact" className="action-button">
            Get in touch <ArrowUpRight size={18} />
          </Link>
        </div>
        <p>
          I’m interested in international teams, thoughtful products, and
          opportunities to keep growing.
        </p>
      </div>
    </section>
  );
}
