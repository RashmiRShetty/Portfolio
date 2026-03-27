import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force dark mode as per reference
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'ACADEMIC', href: '#education' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-dark-bg/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-black flex items-center gap-1">
              <span className="text-white">Rashmi</span>
              <span className="text-white">R</span>
              <span className="text-white">Shetty</span>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center gap-4 ml-4">
                <a
                  href="#contact"
                  className="px-6 py-2 bg-accent text-white rounded-full text-[11px] font-black tracking-wider shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all active:scale-95"
                >
                  Hire Me
                </a>
                <div className="flex items-center gap-3 ml-2">
                  <a href="mailto:rashmishettykukkuje@gmail.com" className="text-white/70 hover:text-accent transition-colors">
                    <Mail size={18} strokeWidth={2.5} />
                  </a>
                  <a href="https://www.linkedin.com/in/rashmi-r-shetty" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                    <Linkedin size={18} strokeWidth={2.5} />
                  </a>
                  <a href="https://github.com/RashmiRShetty" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                    <Github size={18} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white/70 hover:text-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-white/5 p-6 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-[0.2em] text-white/70 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-8 mt-4 pt-6 border-t border-white/5 w-full justify-center">
              <a href="mailto:rashmishettykukkuje@gmail.com" className="text-white/70 hover:text-accent">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rashmi-r-shetty" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/RashmiRShetty" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
