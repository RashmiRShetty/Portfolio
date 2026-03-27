import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Wrench, Terminal, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={24} className="text-brand-pink" />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
      color: 'border-brand-pink/20 bg-brand-pink/5',
    },
    {
      title: 'Backend & Database',
      icon: <Database size={24} className="text-brand-teal" />,
      skills: ['PHP', 'Node.js', 'MySQL', 'SQL Server'],
      color: 'border-brand-teal/20 bg-brand-teal/5',
    },
    {
      title: 'Mobile App Development',
      icon: <Smartphone size={24} className="text-brand-purple" />,
      skills: ['Android Studio', 'Java', 'XML'],
      color: 'border-brand-purple/20 bg-brand-purple/5',
    },
    {
      title: 'Tools & Professional Skills',
      icon: <Wrench size={24} className="text-blue-500" />,
      skills: ['Tally ERP 9', 'GST Filing', 'Git / GitHub', 'Computerized Billing'],
      color: 'border-blue-500/20 bg-blue-500/5',
    },
  ];

  return (
    <section id="skills" className="py-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-black text-white mb-4">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink via-brand-purple to-blue-500">Mastery</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium leading-relaxed text-sm">
            Leveraging a diverse set of tools and languages to architect robust digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 border rounded-[2rem] hover:border-white/20 transition-all group backdrop-blur-md ${category.color}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black tracking-wider text-slate-300 uppercase hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
