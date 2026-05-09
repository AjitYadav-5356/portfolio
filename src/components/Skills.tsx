import { motion } from "motion/react";
import { resumeData } from "../data";

export default function Skills() {
  const categories = [
    { name: "Frontend", items: resumeData.skills.languages.filter(l => ["React", "HTML5", "CSS3", "JavaScript", "TypeScript"].includes(l)) },
    { name: "Backend", items: [".NET", "C#", ".NET Core", "REST APIs"] },
    { name: "AI & Automation", items: resumeData.skills.ai },
    { name: "Data & Cloud", items: [...resumeData.skills.databases, ...resumeData.skills.tools].filter(i => !i.startsWith("Advanced")).slice(0, 6) }
  ];

  return (
    <section className="bg-zinc-50" id="skills">
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest">Stack</span>
          <h2 className="text-4xl font-bold mt-2">Technical Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-black/5"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6 border-b border-black/5 pb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1.5 bg-zinc-50 rounded-lg text-xs font-bold text-black/60 border border-black/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Beyond the code</h3>
            <p className="text-white/60 text-sm max-w-lg">
              Strong leadership and communication skills, with experience mentoring teams and delivering high-quality architectural standards.
            </p>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="px-4 py-2 rounded-full border border-white/20 text-xs font-bold">Mentorship</div>
            <div className="px-4 py-2 rounded-full border border-white/20 text-xs font-bold">Communication</div>
            <div className="px-4 py-2 rounded-full border border-white/20 text-xs font-bold">Strategic Planning</div>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
