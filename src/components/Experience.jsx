import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Accountant & Inside Sales',
      company: 'Sri Durga Electronics and Furniture',
      period: 'Jan 2022 – Dec 2024',
      description: 'Handled critical business operations, financial management, and customer relations.',
      tasks: [
        'Managed billing and invoicing with accurate financial transactions.',
        'Maintained accounts using Tally (sales, expenses, inventory).',
        'Handled monthly GST filing and compliance.',
        'Assisted customers with product selection and purchases.',
        'Performed cold calling to promote schemes, offers, and discounts.',
        'Maintained organized financial and sales records.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
            Professional <span >Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:border-accent/20 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    <p className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">{exp.period}</p>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-accent transition-colors uppercase tracking-tight">{exp.role}</h3>
                  <p className="text-xs font-black text-accent uppercase tracking-[0.2em]">{exp.company}</p>
                </div>
              </div>

              <p className="text-sm text-white/60 font-medium mb-10 max-w-2xl leading-relaxed italic">
                "{exp.description}"
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.tasks.map((task, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-4 text-white/50 group/task">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5 opacity-40 group-hover/task:opacity-100 transition-opacity" />
                    <span className="text-xs font-medium leading-relaxed group-hover/task:text-white transition-colors">{task}</span>
                  </div>
                ))}
              </div>
              
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -z-10 group-hover:bg-accent/10 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
