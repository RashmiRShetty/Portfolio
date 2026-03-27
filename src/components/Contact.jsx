import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <Mail className="text-brand-pink" size={24} />, 
      label: 'EMAIL', 
      value: 'rashmishettykukkuje@gmail.com', 
      href: 'mailto:rashmishettykukkuje@gmail.com' 
    },
    { 
      icon: <Github className="text-brand-teal" size={24} />, 
      label: 'GITHUB', 
      value: 'github.com/RashmiRShetty', 
      href: 'https://github.com/RashmiRShetty' 
    },
    { 
      icon: <Linkedin className="text-brand-purple" size={24} />, 
      label: 'LINKEDIN', 
      value: 'linkedin.com/in/rashmi-r-shetty', 
      href: 'https://www.linkedin.com/in/rashmi-r-shetty' 
    },
  ];

  return (
    <section id="contact" className="py-8 bg-dark-bg relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-5xl font-black text-white mb-6">
            Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple">Connect.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-widest text-[10px]">
            Open for collaborations, junior developer roles, and technical discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-card-bg/20 border border-white/5 rounded-3xl hover:border-white/10 transition-all group"
            >
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <p className="text-[10px] font-black tracking-[0.2em] text-slate-600 mb-2">{info.label}</p>
              <p className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
