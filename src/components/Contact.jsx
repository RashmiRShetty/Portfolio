import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <Mail className="text-accent" size={24} />, 
      label: 'EMAIL', 
      value: 'rashmishettykukkuje@gmail.com', 
      href: 'mailto:rashmishettykukkuje@gmail.com' 
    },
    { 
      icon: <Github className="text-white/40" size={24} />, 
      label: 'GITHUB', 
      value: 'github.com/RashmiRShetty', 
      href: 'https://github.com/RashmiRShetty' 
    },
    { 
      icon: <Linkedin className="text-accent" size={24} />, 
      label: 'LINKEDIN', 
      value: 'linkedin.com/in/rashmi-r-shetty', 
      href: 'https://www.linkedin.com/in/rashmi-r-shetty' 
    },
  ];

  return (
    <section id="contact" className="py-12 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Get In <span className="text-accent">Touch.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-medium uppercase tracking-[0.3em] text-[10px]">
            Available for professional collaborations and technical roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-accent/20 transition-all group"
            >
              <div className="flex justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <p className="text-[10px] font-black tracking-[0.3em] text-white/20 mb-3 uppercase">{info.label}</p>
              <p className="text-sm font-bold text-white group-hover:text-accent transition-colors">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
