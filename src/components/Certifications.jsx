import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'PHP Programming',
      issuer: 'Certification of Excellence',
      icon: 'P',
      color: 'text-brand-teal bg-brand-teal/10',
    },
    {
      title: 'Web Development Training',
      issuer: 'Full-stack Proficiency',
      icon: 'W',
      color: 'text-brand-purple bg-brand-purple/10',
    },
    {
      title: 'NPTEL Python Certification',
      issuer: 'Advanced Logic & Scripting',
      icon: 'PY',
      color: 'text-slate-400 bg-white/5',
    },
  ];

  return (
    <section id="certifications" className="py-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Credentials Column */}
          <div>
            <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
              <Award className="text-brand-teal" size={24} />
              Certifications
            </h2>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-4 rounded-2xl bg-card-bg/30 border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xs ${cert.color}`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white mb-1">{cert.title}</h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-bg/50 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-center"
          >
            <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
              <BookOpen className="text-brand-pink" size={24} />
              Workshops & Outreach
            </h2>
            
            <div className="relative z-10">
              <h3 className="text-lg font-black text-white mb-2">Web Development Workshop</h3>
              <p className="text-[10px] font-bold text-brand-pink uppercase tracking-widest mb-4">Poornaprajna Institute of Management, Udupi</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-xs text-slate-400 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1"></div>
                  Hands-on training in HTML, CSS, JavaScript, React & MySQL.
                </li>
                <li className="flex items-start gap-3 text-xs text-slate-400 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1"></div>
                  Developed a smooth, interactive single-page application.
                </li>
                <li className="flex items-start gap-3 text-xs text-slate-400 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1"></div>
                  Gained practical knowledge of React components & backend integration.
                </li>
              </ul>

              <div className="flex gap-12">
                <div>
                  <p className="text-2xl font-black text-brand-pink mb-1">React</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Core Tech</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-brand-teal mb-1">MySQL</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Database</p>
                </div>
              </div>
            </div>

            {/* Decorative Graduation Cap */}
            <div className="absolute bottom-[-20px] right-[-20px] text-white/5 rotate-12">
              <GraduationCap size={200} strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
