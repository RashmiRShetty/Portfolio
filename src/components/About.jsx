import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Languages, Target } from 'lucide-react';

const About = () => {
  const profile = [
    { label: 'IDENTITY', value: 'Rashmi R Shetty', icon: <User size={14} /> },
    { label: 'ORIGIN', value: 'Indian Citizen' },
    { label: 'BIRTH DATE', value: '10-03-2001' },
    { label: 'FATHER\'S NAME', value: 'Rathnakar Shetty' },
    { label: 'MOTHER\'S NAME', value: 'Prema R Shetty' },
  ];

  const languages = ['English', 'Kannada', 'Tulu', 'Hindi'];
  const strengths = ['Self-Motivated', 'Quick Learner', 'Eager to learn new things', 'Easily Adaptable'];
  const hobbies = ['Listening to music', 'Watching movies', 'Travelling'];

  return (
    <section id="about" className="py-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Career Objective Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card-bg/30 border border-white/5 rounded-[2rem] p-6 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
              <Target size={24} />
            </div>
            <p className="text-sm md:text-base text-slate-300 font-medium italic leading-relaxed text-center md:text-left">
              "Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings."
            </p>
          </motion.div>

          {/* Biometric Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card-bg/50 border border-white/5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-pink"></span>
                Biometric Profile
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {profile.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-10 right-10 text-white/5 hidden md:block">
              <User size={120} strokeWidth={1} />
            </div>
          </motion.div>

          {/* Languages & Hobbies column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card-bg/50 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group"
            >
              <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                <Languages className="text-brand-teal" size={20} />
                Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10 text-[10px] font-black tracking-wider text-brand-teal uppercase">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card-bg/50 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group"
            >
              <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                <Heart className="text-brand-pink" size={20} />
                Hobbies
              </h2>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-brand-pink/5 border border-brand-pink/10 text-[10px] font-black tracking-wider text-brand-pink uppercase">
                    {hobby}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Strengths - Full width bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card-bg/30 border border-white/5 rounded-[2rem] p-8"
          >
            <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-4 text-center">Core Strengths</p>
            <div className="flex flex-wrap justify-center gap-4">
              {strengths.map((strength, idx) => (
                <div key={idx} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-widest hover:border-brand-purple/50 transition-colors">
                  {strength}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
