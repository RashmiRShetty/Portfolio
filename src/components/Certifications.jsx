import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'PHP Programming',
      issuer: 'Certification of Excellence',
      icon: 'P',
      color: 'text-accent bg-accent/10',
      logo: '/info.png'
    },
    {
      title: 'Web Development Training',
      issuer: 'Full-stack Proficiency',
      icon: 'W',
      color: 'text-white/40 bg-white/5',
      logo: '/web.jpg'
    },
    {
      title: 'NPTEL Python Certification',
      issuer: 'Advanced Logic & Scripting',
      icon: 'PY',
      color: 'text-white/40 bg-white/5',
      logo: '/np.jpeg'
    },
  ];

  return (
    <section id="certifications" className="py-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Credentials Column */}
          <div>
            <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
              Professional <span>Certifications</span>
            </h2>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xs ${cert.color} group-hover:scale-110 transition-transform overflow-hidden`}>
                    {cert.logo ? (
                      <img src={cert.logo} alt={cert.title} className="w-full h-full object-cover" />
                    ) : (
                      cert.icon
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white mb-1 uppercase tracking-tight">{cert.title}</h3>
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{cert.issuer}</p>
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
            className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-center group hover:border-accent/20 transition-all"
          >
            <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
              Workshops 
            </h2>
            
            <div className="relative z-10">
              <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">Web Development Workshop</h3>
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-6">Poornaprajna Institute of Management, Udupi</p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-xs text-white/50 font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5"></div>
                  Hands-on training in HTML, CSS, JavaScript, React & MySQL.
                </li>
                <li className="flex items-start gap-3 text-xs text-white/50 font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5"></div>
                  Developed a smooth, interactive single-page application.
                </li>
                <li className="flex items-start gap-3 text-xs text-white/50 font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5"></div>
                  Gained practical knowledge of React components & backend integration.
                </li>
              </ul>

              <div className="flex flex-wrap gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-accent/20 transition-all">
                    <img src="https://api.iconify.design/logos/react.svg" alt="React" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-white mb-0.5 tracking-tight uppercase">React</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">Frontend</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-accent/20 transition-all">
                    <img src="https://api.iconify.design/logos/nodejs-icon.svg" alt="Node.js" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-white mb-0.5 tracking-tight uppercase">Node.js</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">Backend</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-accent/20 transition-all">
                    <img src="https://api.iconify.design/logos/mysql.svg" alt="MySQL" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-accent mb-0.5 tracking-tight uppercase">MySQL</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">Database</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle accent glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 blur-3xl rounded-full -z-10 group-hover:bg-accent/10 transition-all"></div>

            {/* Decorative Graduation Cap */}
            <div className="absolute bottom-[-20px] right-[-20px] text-white/5 rotate-12 -z-10">
              <GraduationCap size={200} strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
