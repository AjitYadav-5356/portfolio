import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export default function Contact() {
  return (
    <section className="bg-white" id="contact">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-accent text-sm font-bold uppercase tracking-widest">Connect</span>
            <h2 className="text-5xl font-bold mt-4 mb-6 leading-tight">
              Ready to build <br />
              something great?
            </h2>
            <p className="text-lg text-black/60 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${resumeData.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-black/40 uppercase tracking-widest">Email</div>
                  <div className="text-lg font-bold">{resumeData.email}</div>
                </div>
              </a>
              
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-black/40 uppercase tracking-widest">LinkedIn</div>
                  <div className="text-lg font-bold">Ajit Yadav</div>
                </div>
              </a>

              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-black/40 uppercase tracking-widest">GitHub</div>
                  <div className="text-lg font-bold">@ajityadav</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-bold tracking-tight font-mono">
            ajit<span className="text-brand-accent">.dev</span>
          </div>
          <div className="text-xs font-medium text-black/40 uppercase tracking-widest">
            © 2026 {resumeData.name}. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-xs font-bold text-black/40 hover:text-black transition-colors uppercase tracking-widest">Twitter</a>
            <a href="#" className="text-xs font-bold text-black/40 hover:text-black transition-colors uppercase tracking-widest">Dribbble</a>
            <a href="#" className="text-xs font-bold text-black/40 hover:text-black transition-colors uppercase tracking-widest">Medium</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
