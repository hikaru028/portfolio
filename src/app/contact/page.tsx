import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Form from "@/components/contact/Form";
import { profile } from "@/data/profile";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hikaru Suzuki about software engineering opportunities and collaboration.",
};
export default function Contact() {
  return (
    <main id="main-content" className="page-shell section-space">
      <div className="section-heading">
        <p className="eyebrow">CONTACT / SAY HELLO</p>
        <h1 className="page-title">
          Let’s build
          <br />
          <span className="serif-accent">something useful.</span>
        </h1>
      </div>
      <div className="contact-grid">
        <div>
          <p className="contact-intro">
            Have an opportunity, a project in mind, or just want to connect? I’d
            love to hear from you.
          </p>
          <div className="contact-information">
            <a href={`mailto:${profile.email}`}>
              <Mail size={19} />
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phoneHref}`}>
              <Phone size={19} />
              <span>{profile.phone}</span>
            </a>
            <p>
              <MapPin size={19} />
              <span>{profile.location}</span>
            </p>
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-button"
          >
            Connect on LinkedIn <ArrowUpRight size={16} />
          </a>
          <p className="contact-note">
            Interested in international teams and opportunities to build
            thoughtful software together.
          </p>
        </div>
        <Form />
      </div>
    </main>
  );
}
