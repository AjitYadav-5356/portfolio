import { motion } from "motion/react";
import { resumeData } from "../data";

export default function Skills() {
  const categories = [
    { name: "AI & Agentic Systems", items: resumeData.skills.ai },
    { name: "Languages & Frameworks", items: resumeData.skills.languagesAndFrameworks },
    { name: "Cloud & DevOps", items: resumeData.skills.devops },
    { name: "Databases & Storage", items: resumeData.skills.databases }
  ];

  return (
    <section className="bg-bg-inverted relative" id="skills">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--color-brand-accent)_0%,_transparent_50%)] opacity-[0.03] pointer-events-none blur-3xl" />
      <div className="section-padding relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-brand-accent" />
            Stack
            <span className="w-4 h-[1px] bg-brand-accent" />
          </span>
          <h2 className="text-4xl font-bold mt-2 text-text-inverted">Technical Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-bg-panel/5 border border-border-subtle hover:border-brand-accent/30 transition-all hover:-translate-y-1 backdrop-blur-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-inverted mb-6 border-b border-border-subtle pb-4 flex items-center justify-between">
                {category.name}
                <span className="text-brand-accent/50 font-mono text-xs">0{index + 1}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1.5 bg-bg-panel/10 rounded-lg text-xs font-bold text-text-inverted/80 border border-border-subtle hover:border-brand-accent/50 hover:text-text-inverted transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-bg-panel/5 shadow-2xl border border-border-subtle text-text-inverted flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group hover:border-brand-accent/20 transition-colors">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              Beyond the code
            </h3>
            <p className="text-text-inverted/70 text-sm max-w-lg">
              Strong leadership and communication skills, with experience mentoring teams and delivering high-quality architectural standards.
            </p>
          </div>
          <div className="flex gap-4 relative z-10 flex-wrap md:flex-nowrap">
            <div className="px-4 py-2 rounded-full border border-border-subtle bg-bg-base/10 text-xs font-bold text-text-inverted/80">Mentorship</div>
            <div className="px-4 py-2 rounded-full border border-border-subtle bg-bg-base/10 text-xs font-bold text-text-inverted/80">Communication</div>
            <div className="px-4 py-2 rounded-full border border-border-subtle bg-bg-base/10 text-xs font-bold text-text-inverted/80">Strategic Planning</div>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full group-hover:bg-brand-accent/20 transition-colors" />
        </div>
      </div>
    </section>
  );
}
