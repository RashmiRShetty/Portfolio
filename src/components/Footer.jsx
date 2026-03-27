import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-black text-white mb-2 uppercase tracking-tighter">
              Rashmi <span className="text-accent">R</span> Shetty
            </span>
            <p className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase">
              © {currentYear} ALL RIGHTS RESERVED
            </p>
          </div>

          <div className="flex items-center gap-10">
            <a href="https://www.linkedin.com/in/rashmi-r-shetty" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-white/40 hover:text-accent transition-colors uppercase">LINKEDIN</a>
            <a href="https://github.com/RashmiRShetty" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-white/40 hover:text-accent transition-colors uppercase">GITHUB</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
