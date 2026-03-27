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
          className="mb-8"
        >
          <h2 className="text-3xl font-black text-white flex items-center gap-3">
            <Briefcase className="text-brand-purple" size={28} />
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card-bg/40 border border-white/5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/10 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></div>
                    <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase">{exp.period}</p>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-brand-purple transition-colors">{exp.role}</h3>
                  <p className="text-sm font-bold text-brand-teal uppercase tracking-wider">{exp.company}</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 font-medium mb-8 max-w-2xl leading-relaxed italic">
                "{exp.description}"
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.tasks.map((task, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 size={16} className="text-brand-pink shrink-0 mt-0.5" />
                    <span className="text-xs font-medium leading-relaxed">{task}</span>
                  </div>
                ))}
              </div>
              
              {/* Background Decoration */}
              <div className="absolute top-[-20%] right-[-10%] w-[30%] h-[50%] bg-brand-purple/5 rounded-full blur-[80px] -z-10 group-hover:bg-brand-purple/10 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
