import { motion } from "motion/react";
import { ArrowRight, Code2, Cpu, Globe, Bot } from "lucide-react";
import { resumeData } from "../data";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-bg-base -z-20 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_0%,_transparent_50%)] blur-[100px]" />
      
      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-border-subtle shadow-xl relative z-10 bg-bg-panel">
                <img 
                  src="./profile-pic.png" 
                  alt={resumeData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full z-0 pointer-events-none scale-150" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-xs font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              System Online / Building AI Agents
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-text-primary text-balance">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-fuchsia-500">Autonomous Systems.</span>
          </h1>
          
          <p className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
            I'm <span className="font-bold text-text-primary">{resumeData.name}</span>, a {resumeData.title} with 4 years of experience building scalable infrastructure and autonomous AI verification loops.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-bg-inverted text-text-inverted rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all group shadow-md"
            >
              Initialize Contact
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#experience" 
              className="px-8 py-4 border border-border-subtle text-text-primary rounded-full font-bold hover:bg-bg-panel transition-colors"
            >
              View Logs
            </a>
          </div>

          <div className="mt-12 flex gap-8 items-center border-t border-border-subtle pt-10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-text-primary">4+</span>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-widest">Years Runtime</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-text-primary">10+</span>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-widest">Systems Deployed</span>
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
          <div className="relative w-full max-w-md aspect-square bg-bg-panel rounded-3xl border border-border-subtle p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="flex gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent border border-brand-accent/30 shadow-[0_0_15px_var(--color-brand-accent-glow)]">
                <Code2 size={24} className="scale-75 sm:scale-100" />
              </div>
              <div className="flex-1 pt-1">
                <div className="h-3 sm:h-4 w-20 sm:w-24 bg-border-subtle rounded-full mb-2" />
                <div className="h-5 sm:h-6 w-full bg-border-subtle rounded-lg border border-border-subtle" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-bg-base/50 rounded-2xl border border-border-subtle hover:border-brand-accent/30 transition-colors">
                <Code2 className="text-brand-accent mb-1 sm:mb-2 w-4 h-4 sm:w-5 sm:h-5" />
                <div className="text-xs sm:text-sm font-bold text-text-primary">Full Stack</div>
                <div className="text-[10px] sm:text-xs text-text-secondary">React / .NET</div>
              </div>
              <div className="p-3 sm:p-4 bg-bg-base/50 rounded-2xl border border-border-subtle hover:border-brand-accent/30 transition-colors">
                <Bot className="text-brand-accent mb-1 sm:mb-2 w-4 h-4 sm:w-5 sm:h-5" />
                <div className="text-xs sm:text-sm font-bold text-text-primary">AI Systems</div>
                <div className="text-[10px] sm:text-xs text-text-secondary">Autonomous Agents</div>
              </div>
            </div>

            <div className="flex-1 bg-zinc-950 text-white p-4 sm:p-6 rounded-2xl font-mono text-[11px] sm:text-sm overflow-x-auto overflow-hidden relative flex flex-col justify-center border border-white/5 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] before:[background-size:100%_4px] before:pointer-events-none">
              <div className="text-zinc-600 whitespace-nowrap">// AI Accessibility Agent</div>
              <div className="mt-2 text-zinc-300 whitespace-nowrap">
                <span className="text-brand-accent">const</span> <span className="text-blue-400">aiAgent</span> = {'{'}
              </div>
              <div className="ml-3 sm:ml-4 text-zinc-300 whitespace-nowrap">
                loop: [<span className="text-emerald-400">"Audit"</span>, <span className="text-emerald-400">"Remediate"</span>, <span className="text-emerald-400">"Verify"</span>],
              </div>
              <div className="ml-3 sm:ml-4 text-zinc-300 whitespace-nowrap">
                autonomous: <span className="text-amber-400">true</span>,
              </div>
              <div className="ml-3 sm:ml-4 text-zinc-300 whitespace-nowrap">
                status: <span className="text-emerald-400">"Resolved"</span>
              </div>
              <div className="text-zinc-300">{'}'};</div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent/20 blur-3xl rounded-full mix-blend-screen pointer-events-none" />
            </div>
          </div>

          {/* Floating tags */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 bg-bg-panel/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border-subtle text-sm font-bold hidden md:flex items-center gap-2 text-text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            AWS Certified ☁️
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-0 bg-bg-panel/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border-subtle text-sm font-bold hidden md:flex items-center gap-2 text-text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            AI Automation Architect 🤖
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
