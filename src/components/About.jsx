import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const strengths = ['Self-Motivated', 'Quick Learner', 'Eager to learn new things', 'Easily Adaptable'];

  return (
    <section id="about" className="py-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Career Objective Card */}
          

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8"
          >
            <p className="text-[12px] font-black tracking-[0.3em] text-white/30 uppercase mb-8 text-center">Core Strengths</p>
            <div className="flex flex-wrap justify-center gap-6">
              {strengths.map((strength, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                  className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-black text-white/70 uppercase tracking-widest transition-all"
                >
                  {strength}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
