import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-5 bg-[#020205] relative overflow-hidden">
      {/* Background radial glow - Galaxy/Nebula style */}
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-brand-purple/20 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-brand-pink/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-start gap-3 mb-6"
            >
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-brand-pink uppercase drop-shadow-[0_0_10px_rgba(255,0,255,0.4)]">
                WELCOME TO MY PORTFOLIO
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1a1a] border border-brand-teal/30 shadow-[0_0_15px_rgba(45,212,191,0.15)]">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-brand-teal uppercase">
                  Available for Full Stack Opportunities
                </span>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight leading-[1.05]">
             Aspiring <br />
            <span className="text-brand-pink">Full Stack </span> <br />
            <span className="text-blue-500">Developer</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-400 max-w-xl mb-10 leading-relaxed font-medium">
              Architecting digital experiences with precision and passion. Currently pursuing MCA at Poornaprajna Institute of Management with a focus on scalable web architectures and mobile innovation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full font-black text-xs md:text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,0,255,0.3)]"
              >
                View My Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/rashmi-r-shetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 bg-white/5 text-white border-2 border-white/10 rounded-full font-black text-[10px] md:text-xs tracking-widest uppercase transition-all"
                >
                  LinkedIn
                  <Linkedin size={16} />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/RashmiRShetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 bg-white/5 text-white border-2 border-white/10 rounded-full font-black text-[10px] md:text-xs tracking-widest uppercase transition-all"
                >
                  GitHub
                  <Github size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Illustration - Responsive & Spread */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Massive Planet/Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-l from-brand-purple/20 via-brand-pink/10 to-transparent rounded-full blur-[120px] -z-10"></div>
            
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 scale-90 sm:scale-100 lg:scale-110 xl:scale-125 origin-center max-w-[300px] sm:max-w-md lg:max-w-none"
            >
              <img
                src="/developer-anime.png"
                alt="Digital Illustration"
                className="w-full h-auto drop-shadow-[0_0_80px_rgba(255,0,255,0.3)] rounded-[2rem] md:rounded-[4rem]"
              />
              
              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-6 md:-left-10 p-2 md:p-4 bg-brand-purple/20 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl text-white shadow-2xl"
              >
                <span className="font-black text-[10px] md:text-sm tracking-tighter">&lt;/&gt;</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1/3 -left-10 md:-left-16 p-2 md:p-4 bg-blue-500/20 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl text-white shadow-2xl"
              >
                <span className="font-black text-[10px] md:text-sm tracking-widest">CSS</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
