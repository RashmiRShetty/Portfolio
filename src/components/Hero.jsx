import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Github, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-5 bg-dark-bg relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-accent/10 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Side - Text Content */}
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
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-accent uppercase">
                WELCOME TO MY PORTFOLIO
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-white/70 uppercase">
                  Available for Full Stack Opportunities
                </span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight leading-[1.05]">
              Aspiring <br />
              <span>Full Stack Developer</span> <br />
              
            </h1>

            <p className="text-sm md:text-base text-white/70 max-w-xl mb-10 leading-relaxed font-medium">
Motivated and detail-oriented MCA student with a strong foundation in software development, web technologies, and problem-solving. Passionate about building user-friendly applications and continuously learning new technologies. Seeking opportunities to apply my skills in real-world projects and contribute effectively to organizational growth.            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* View Projects Button */}
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-accent text-white rounded-full font-black text-xs md:text-sm tracking-widest uppercase transition-all"
              >
                View My Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Rashmi_R_Shetty_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/5 text-white border-2 border-accent/40 rounded-full font-black text-xs md:text-sm tracking-widest uppercase transition-all hover:bg-accent/10"
              >
                Download Resume
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              {/* Social Links */}
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

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-start lg:pl-10"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[120px] -z-10"></div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]"
            >
              <img
                src="/rashmi r s.jpeg"
                alt="Rashmi R Shetty"
                className="w-full h-full object-cover rounded-full drop-shadow-[0_0_50px_rgba(59,130,246,0.2)] border-4 border-white/10"
              />

              {/* Floating Icon - Code */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-6 md:-left-10 p-2 md:p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl text-white shadow-2xl"
              >
                <span className="font-black text-[10px] md:text-sm tracking-tighter">&lt;/&gt;</span>
              </motion.div>

              {/* Floating Icon - Dev */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1/3 -left-10 md:-left-16 p-2 md:p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl text-white shadow-2xl"
              >
                <span className="font-black text-[10px] md:text-sm tracking-widest">DEV</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;