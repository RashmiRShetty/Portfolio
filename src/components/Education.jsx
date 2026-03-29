import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'MCA',
      institution: 'Poornaprajna Institute of Management',
      score: 'Pursuing',
      status: 'Ongoing',
      subtext: 'Mangalore University',
      icon: <GraduationCap size={20} />,
      color: 'text-accent bg-accent/10',
      logo: '/pim.png'
    },
    {
      degree: 'B.SC (PMCs)',
      institution: 'Dr. G. Shankar Govt. Women\'s First Grade College',
      score: '2018 – 2021',
      status: 'Completed',
      subtext: 'Mangalore University',
      icon: <School size={20} />,
      color: 'text-white/40 bg-white/5',
      logo: '/bsc.jpg'
    },
    {
      degree: 'CLASS XII (SCIENCE)',
      institution: 'Govt Pre-University College, Hiriadka',
      score: '2017 – 2018',
      status: 'Completed',
      subtext: 'Karnataka Board',
      icon: <BookOpen size={20} />,
      color: 'text-white/40 bg-white/5',
      logo: '/k.webp'
    },
    {
      degree: 'CLASS X',
      institution: 'Govt Junior College, Kukkuje',
      score: '2015 – 2016',
      status: 'Completed',
      subtext: 'Karnataka Board',
      icon: <Calendar size={20} />,
      color: 'text-white/40 bg-white/5',
      logo: '/k.webp'
    },
  ];

  return (
    <section id="education" className="py-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
            Academic <span>Background</span>
          </h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="text-[10px] font-black tracking-widest text-accent uppercase flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
              Current Status: MCA Final Phase
            </span>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-accent/20 transition-all group relative overflow-hidden"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${edu.color} group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-white/10`}>
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.degree} className="w-full h-full object-cover" />
                  ) : (
                    edu.icon
                  )}
                </div>

                <span className="text-[9px] font-black tracking-[0.2em] text-white/30 uppercase">
                  {edu.degree}
                </span>
              </div>

              {/* Institution */}
              <h3 className="text-lg font-black text-white mb-4 group-hover:text-accent transition-colors leading-tight min-h-[3rem] uppercase tracking-tight">
                {edu.institution}
              </h3>

              {/* Score + Status */}
              <div className="mb-4">
                <p className="text-2xl font-black text-white group-hover:tracking-wider transition-all duration-300">
                  {edu.score}
                </p>

                {/* Status Badge */}
                <span className={`inline-block mt-2 px-2 py-1 text-[10px] rounded-full font-bold uppercase tracking-widest ${
                  edu.status === 'Completed'
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-yellow-500/10 text-yellow-400'
                }`}>
                  {edu.status}
                </span>
              </div>

              {/* Subtext */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/10"></div>
                  {edu.subtext}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;