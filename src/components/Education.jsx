import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'MCA',
      institution: 'Poornaprajna Institute of Management',
      score: 'Pursuing',
      subtext: 'Mangalore University',
      icon: <GraduationCap size={20} />,
      color: 'text-brand-pink bg-brand-pink/10',
    },
    {
      degree: 'B.SC (PMCs)',
      institution: 'Dr. G. Shankar Govt. Women\'s First Grade College',
      score: '2018 – 2021',
      subtext: 'Mangalore University',
      icon: <School size={20} />,
      color: 'text-brand-teal bg-brand-teal/10',
    },
    {
      degree: 'CLASS XII (SCIENCE)',
      institution: 'Govt Pre-University College, Hiriadka',
      score: '2017 – 2018',
      subtext: 'Karnataka Board',
      icon: <BookOpen size={20} />,
      color: 'text-brand-purple bg-brand-purple/10',
    },
    {
      degree: 'CLASS X',
      institution: 'Govt Junior College, Kukkuje',
      score: '2015 – 2016',
      subtext: 'Karnataka Board',
      icon: <Calendar size={20} />,
      color: 'text-blue-500 bg-blue-500/10',
    },
  ];

  return (
    <section id="education" className="py-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl font-black text-white flex items-center gap-3">
            <span className="w-2 h-8 bg-brand-pink rounded-full"></span>
            Academic Foundation
          </h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 rounded-2xl bg-brand-teal/5 border border-brand-teal/20 backdrop-blur-sm shadow-[0_0_20px_rgba(45,212,191,0.1)]"
          >
            <span className="text-[10px] font-black tracking-widest text-brand-teal uppercase flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></div>
              Current Status: MCA Final Phase
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-card-bg/40 border border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all group relative overflow-hidden"
            >
              {/* Card Header: Icon & Degree */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${edu.color} group-hover:scale-110 transition-transform duration-300`}>
                  {edu.icon}
                </div>
                <span className="text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">{edu.degree}</span>
              </div>

              {/* Institution */}
              <h3 className="text-lg font-black text-white mb-4 group-hover:text-brand-pink transition-colors leading-tight min-h-[3rem]">
                {edu.institution}
              </h3>

              {/* Score/Period */}
              <div className="mb-4">
                <p className="text-2xl font-black text-white group-hover:tracking-wider transition-all duration-300">{edu.score}</p>
              </div>

              {/* Subtext/University */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                  {edu.subtext}
                </p>
              </div>

              {/* Hover Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
