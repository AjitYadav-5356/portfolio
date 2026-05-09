import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export default function Contact() {
  return (
    <section className="bg-bg-base" id="contact">
      <div className="section-padding relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="text-brand-accent text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent" />
              Connect
            </span>
            <h2 className="text-5xl font-bold mt-4 mb-6 leading-tight text-text-primary">
              Ready to build <br />
              something great?
            </h2>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6 flex flex-col">
              <a
                href={`mailto:${resumeData.email}`}
                aria-label="Send an email"
                className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-bg-panel transition-colors border border-transparent hover:border-border-subtle w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
              >
                <div className="w-12 h-12 rounded-full bg-bg-base border border-border-subtle flex items-center justify-center group-hover:bg-brand-accent text-text-primary group-hover:text-white transition-all group-hover:border-brand-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    Email
                  </div>
                  <div className="text-lg font-bold text-text-primary group-hover:text-brand-accent transition-colors">
                    {resumeData.email}
                  </div>
                </div>
              </a>

              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-bg-panel transition-colors border border-transparent hover:border-border-subtle w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
              >
                <div className="w-12 h-12 rounded-full bg-bg-base border border-border-subtle flex items-center justify-center group-hover:bg-[#0077b5] text-text-primary group-hover:text-white transition-all group-hover:border-[#0077b5]">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    LinkedIn
                  </div>
                  <div className="text-lg font-bold text-text-primary group-hover:text-[#0077b5] transition-colors">
                    {resumeData.name}
                  </div>
                </div>
              </a>

              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-bg-panel transition-colors border border-transparent hover:border-border-subtle w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
              >
                <div className="w-12 h-12 rounded-full bg-bg-base border border-border-subtle flex items-center justify-center group-hover:bg-text-primary text-text-primary group-hover:text-bg-base transition-all group-hover:border-text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    GitHub
                  </div>
                  <div className="text-lg font-bold text-text-primary transition-colors">
                    @ajityadav
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-bold tracking-tight font-mono text-text-primary">
            ajit<span className="text-brand-accent">.dev</span>
          </div>
          <div className="text-xs font-medium text-text-secondary uppercase tracking-widest">
            © 2026 {resumeData.name}. All Rights Reserved.
          </div>
        </footer>
      </div>
    </section>
  );
}
