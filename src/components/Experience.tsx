import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { resumeData } from "../data";

export default function Experience() {
  return (
    <section className="bg-bg-panel/20 border-y border-border-subtle relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" id="experience">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-transparent to-bg-base pointer-events-none opacity-80" />
      <div className="section-padding relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand-accent text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent" />
              Career Journey
            </span>
            <h2 className="text-4xl font-bold mt-2 text-text-primary tracking-tight">System Deployments</h2>
          </div>
          <p className="text-text-secondary text-sm max-w-xs font-medium">
            Architecting scalable infrastructure and autonomous systems in high-velocity environments.
          </p>
        </div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-bg-panel hover:bg-bg-panel-hover transition-colors border border-border-subtle hover:border-brand-accent/30 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent/0 group-hover:bg-brand-accent transition-colors" />
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-bg-base border border-border-subtle text-text-primary flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-brand-accent">
                      <Briefcase size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-none text-text-primary">{exp.role}</h3>
                      <p className="text-text-secondary font-medium mt-1">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-text-secondary font-medium font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-brand-accent/70" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-brand-accent/70" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                        <span className="mt-1.5 font-mono text-brand-accent text-xs">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
