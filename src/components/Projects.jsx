import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Clapperboard, Droplets, Home, Layout } from 'lucide-react';

const Projects = () => {
  const projects = [
     {
      title: 'House Rental Management',
      label: 'REACT / NODE / SUPABASE',
      description: 'Scalable property management dashboard featuring CRUD operations and modern state management.',
      icon: <Home size={32} />,
      image: '/elitenest.png',
      github: 'https://elite-nest.vercel.app/',
      linkText: 'LAUNCH DEMO',
    },
    {
      title: 'Furniture Images Catalog',
      label: 'REACT / SUPABASE / NODE',
      description: 'A comprehensive catalog system for furniture products with real-time database integration.',
      icon: <Layout size={32} />,
      image: '/fur.jpeg',
      github: 'https://sri-durga-images.vercel.app/',
      linkText: 'VIEW PROJECT',
    },
    {
      title: 'Movie Ticket Booking',
      label: 'PHP / MYSQL / JS',
      description: 'A full-stack reservation system managing cinema slots, user authentication, and dynamic seat allocation.',
      icon: <Clapperboard size={32} />,
      image: '/movie.jpg',
      github: 'https://github.com/RashmiRShetty',
      linkText: 'EXPLORE PROJECT',
    },
    {
      title: 'Blood Donation App',
      label: 'ANDROID / JAVA / XML',
      description: 'Native mobile application facilitating real-time connections between donors and emergency recipients.',
      icon: <Droplets size={32} />,
      image: '/life.jpeg',
      github: 'https://github.com/RashmiRShetty',
      linkText: 'VIEW PROJECT',
    },
  ];

  return (
    <section id="projects" className="py-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
            Featured <span >Projects</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-medium text-sm">
            Selected work showcasing technical proficiency and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 flex flex-col items-center text-center group hover:border-accent/20 transition-all overflow-hidden"
            >
              <div className="w-full aspect-video rounded-2xl bg-white/5 mb-8 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20">
                    {project.icon}
                  </div>
                )}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <p className="text-[10px] font-black tracking-widest text-accent uppercase mb-3">{project.label}</p>
              <h3 className="text-lg font-black text-white mb-3 uppercase tracking-tight">{project.title}</h3>
              <p className="text-xs text-white/50 font-medium leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black tracking-widest text-white/30 hover:text-accent transition-colors flex items-center gap-2 group/link uppercase mt-auto"
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
