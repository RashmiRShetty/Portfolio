import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Smartphone, Wrench, Globe, Cpu, Server, ShieldCheck, 
  Layout, FileCode, Braces, Layers, Palette, Terminal, Box, 
  HardDrive, Table, Settings, SmartphoneIcon, FileJson, 
  Calculator, Receipt, Github, CreditCard
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: 'logos/html-5' },
        { name: 'CSS3', icon: 'vscode-icons/file-type-css' },
        { name: 'JavaScript', icon: 'logos/javascript' },
        { name: 'React.js', icon: 'logos/react' },
        { name: 'Tailwind', icon: 'logos/tailwindcss-icon' }
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'PHP', icon: 'logos/php' },
        { name: 'Node.js', icon: 'logos/nodejs-icon' },
        { name: 'MySQL', icon: 'logos/mysql' },
        { name: 'SQL Server', icon: 'vscode-icons/file-type-sql' },
        { name: 'MongoDB', icon: 'logos/mongodb-icon' },
        { name: 'Supabase', icon: 'logos/supabase-icon' }
      ],
    },
    {
      title: 'Mobile & Core',
      skills: [
        { name: 'Android', icon: 'logos/android-icon' },
        { name: 'Java', icon: 'logos/java' },
        { name: 'XML', icon: 'vscode-icons/file-type-xml' },
        { name: 'Python', icon: 'logos/python' }
      ],
    },
    {
      title: 'Tools & Professional',
      skills: [
        { name: 'Git', icon: 'logos/git-icon' },
        { name: 'GitHub', icon: 'logos/github-icon' },
        { name: 'Postman', icon: 'logos/postman-icon' },
        { name: 'VS Code', icon: 'logos/visual-studio-code' }
      ],
    },
  ];

  return (
    <section id="skills" className="py-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
            Technical <span >Stack</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-medium text-sm">
            Professional toolkit for building robust and scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-accent/20 transition-all group"
            >
              <h3 className="text-sm font-black text-white/40 mb-8 uppercase tracking-[0.2em]">{category.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center gap-3 group/skill">
                    <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover/skill:scale-110">
                      <img 
                        src={`https://api.iconify.design/${skill.icon}.svg`} 
                        alt={skill.name}
                        className={`w-8 h-8 object-contain ${skill.name === 'GitHub' ? 'invert brightness-200' : ''}`}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-white/50 group-hover/skill:text-white transition-colors uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </div>
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
