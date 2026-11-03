import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Manipal Institute of Technology',
      period: 'May 2026 – Sep 2026',
      image: '/developer-anime.png',
      description: 'Developed an Internship Lifecycle Management System using React.js, Spring Boot, microservices, and PostgreSQL.',
      tasks: [
        'Built REST APIs for internship management.',
        'Developed scheduling and tracking features.',
        'Worked with a microservices architecture and PostgreSQL.',
        'Implemented certificate generation.',
      ],
    },
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
          <h2 className="text-2xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
            Professional <span >Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-accent/20 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    <p className="text-xs font-black tracking-[0.3em] text-white/30 uppercase">{exp.period}</p>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-accent transition-colors uppercase tracking-tight">{exp.role}</h3>
                  <p className="text-sm font-black text-accent uppercase tracking-[0.2em]">{exp.company}</p>
                </div>
                {exp.image && (
                  <img
                    src={exp.image}
                    alt="Developer working on a computer"
                    className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full object-cover border border-white/10"
                  />
                )}
              </div>

              <p className="text-base text-white/60 font-medium mb-6 leading-relaxed italic">
                "{exp.description}"
              </p>

              <div className="grid grid-cols-1 gap-4">
                {exp.tasks.map((task, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-4 text-white/50 group/task">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5 opacity-40 group-hover/task:opacity-100 transition-opacity" />
                    <span className="text-sm font-medium leading-relaxed group-hover/task:text-white transition-colors">{task}</span>
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
