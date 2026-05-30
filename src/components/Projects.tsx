import { motion } from "motion/react";
import { ExternalLink, Code2, Sparkles, Globe } from "lucide-react";
import { resumeData } from "../data";

export default function Projects() {
  return (
    <section className="bg-bg-base relative overflow-hidden" id="projects">
      {/* Dynamic background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-fuchsia-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-brand-accent text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent" />
              Featured Work
            </span>
            <h2 className="text-4xl font-bold mt-2 text-text-primary tracking-tight">System Deployments</h2>
          </div>
          <p className="text-text-secondary text-sm max-w-sm font-medium">
            Production-grade utilities, developer tools, and heavy-duty agentic frameworks built for the web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col h-full p-8 md:p-10 rounded-[2rem] bg-bg-panel hover:bg-bg-panel-hover transition-all duration-300 border border-border-subtle hover:border-brand-accent/30 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Featured Tag */}
              {project.featured && (
                <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles size={10} className="animate-pulse" />
                  Featured
                </div>
              )}

              {/* Icon / Code box */}
              <div className="w-12 h-12 rounded-2xl bg-bg-base border border-border-subtle flex items-center justify-center text-brand-accent mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300">
                {project.title.toLowerCase().includes("tax") ? <Globe size={22} /> : <Code2 size={22} />}
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-1 font-medium">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-bg-base/60 text-xs font-semibold text-text-secondary rounded-lg border border-border-subtle/40 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External link button */}
                <div className="pt-4 border-t border-border-subtle/30 mt-auto">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-text-primary hover:text-brand-accent transition-colors group/link"
                  >
                    <span>Launch Application</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
