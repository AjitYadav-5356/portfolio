import { motion } from "motion/react";
import { ArrowRight, Code2, Cpu, Globe, Bot } from "lucide-react";
import { resumeData } from "../data";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5 bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_0%,_transparent_70%)]" />
      
      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Crafting robust <br />
            <span className="text-black/40">enterprise solutions.</span>
          </h1>
          
          <p className="text-lg text-black/60 max-w-lg mb-8 leading-relaxed">
            I'm <span className="font-bold text-black">{resumeData.name}</span>, a {resumeData.title} with 4 years of experience building scalable systems across the full stack.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors group"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#experience" 
              className="px-8 py-4 border border-black/10 rounded-full font-bold hover:bg-black/5 transition-colors"
            >
              View Work
            </a>
          </div>

          <div className="mt-12 flex gap-8 items-center border-t border-black/5 pt-10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">4</span>
              <span className="text-xs font-medium text-black/40 uppercase tracking-widest">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">10+</span>
              <span className="text-xs font-medium text-black/40 uppercase tracking-widest">Modules Delivered</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[500px] flex items-center justify-center"
        >
          {/* Abstract Tech Stack Visual */}
          <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl border border-black/5 p-8 flex flex-col gap-6 shadow-2xl shadow-black/5">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Code2 size={24} />
              </div>
              <div className="flex-1">
                <div className="h-4 w-24 bg-black/10 rounded-full mb-2" />
                <div className="h-6 w-full bg-black/5 rounded-lg" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-black/5">
                <Code2 className="text-brand-accent mb-2" size={20} />
                <div className="text-sm font-bold">Full Stack</div>
                <div className="text-xs text-black/40">React / .NET</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-black/5">
                <Bot className="text-brand-accent mb-2" size={20} />
                <div className="text-sm font-bold">AI Systems</div>
                <div className="text-xs text-black/40">Autonomous Agents</div>
              </div>
            </div>

            <div className="flex-1 bg-black text-white p-6 rounded-2xl font-mono text-sm overflow-hidden relative flex flex-col justify-center">
              <div className="text-zinc-500">// AI Accessibility Agent</div>
              <div className="mt-2 text-zinc-300">
                <span className="text-blue-400">const</span> aiAgent = {'{'}
              </div>
              <div className="ml-4 text-zinc-300">
                loop: [<span className="text-orange-400">"Audit"</span>, <span className="text-orange-400">"Remediate"</span>, <span className="text-orange-400">"Verify"</span>],
              </div>
              <div className="ml-4 text-zinc-300">
                autonomous: <span className="text-green-400">true</span>,
              </div>
              <div className="ml-4 text-zinc-300">
                status: <span className="text-orange-400">"Resolved"</span>
              </div>
              <div className="text-zinc-300">{'}'};</div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-accent/20 blur-3xl rounded-full" />
            </div>
          </div>

          {/* Floating tags */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 bg-white px-4 py-2 rounded-full shadow-lg border border-black/5 text-sm font-bold hidden md:block"
          >
            AWS Certified ☁️
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-0 bg-white px-4 py-2 rounded-full shadow-lg border border-black/5 text-sm font-bold hidden md:block"
          >
            AI Automation Architect 🤖
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
