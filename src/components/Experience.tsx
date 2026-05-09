import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { resumeData } from "../data";

export default function Experience() {
  return (
    <section className="bg-white border-y border-black/5" id="experience">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand-accent text-sm font-bold uppercase tracking-widest">Career Journey</span>
            <h2 className="text-4xl font-bold mt-2">Professional Experience</h2>
          </div>
          <p className="text-black/40 text-sm max-w-xs font-medium">
            A track record of delivering end-to-end solutions in fast-paced environments.
          </p>
        </div>

        <div className="space-y-4">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-black/5"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-none">{exp.role}</h3>
                      <p className="text-black/60 font-medium mt-1">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-black/40 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3 text-sm leading-relaxed text-black/60">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
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
