import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Clapperboard, Droplets, Home } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Movie Ticket Booking',
      label: 'PHP / SQL',
      description: 'A full-stack reservation system managing cinema slots, user authentication, and dynamic seat allocation.',
      icon: <Clapperboard size={32} />,
      github: 'https://github.com/RashmiRShetty',
      linkText: 'EXPLORE REPO',
    },
    {
      title: 'Blood Donation App',
      label: 'ANDROID / JAVA',
      description: 'Native mobile application facilitating real-time connections between donors and emergency recipients.',
      icon: <Droplets size={32} />,
      github: 'https://github.com/RashmiRShetty',
      linkText: 'VIEW CASE STUDY',
    },
    {
      title: 'House Rental Management',
      label: 'REACT / NODE',
      description: 'Scalable property management dashboard featuring CRUD operations and modern state management.',
      icon: <Home size={32} />,
      github: 'https://elite-nest.vercel.app/',
      linkText: 'LAUNCH DEMO',
    },
  ];

  return (
    <section id="projects" className="py-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-white mb-4">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium leading-relaxed">
            Bridging the gap between conceptual logic and production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card-bg/40 border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:border-white/10 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 mb-10 group-hover:scale-110 group-hover:bg-brand-pink/10 group-hover:text-brand-pink transition-all duration-500">
                {project.icon}
              </div>

              <p className="text-[10px] font-black tracking-widest text-brand-purple uppercase mb-4">{project.label}</p>
              <h3 className="text-xl font-black text-white mb-4">{project.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black tracking-widest text-brand-pink hover:text-white transition-colors flex items-center gap-2 group/link"
              >
                {project.linkText}
                <ExternalLink size={12} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
