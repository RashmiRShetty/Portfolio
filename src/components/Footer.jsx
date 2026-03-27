import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-pink via-brand-purple to-blue-500 mb-2">
              Rashmi R Shetty
            </span>
            <p className="text-[10px] font-black text-slate-600 tracking-widest uppercase">
              © {currentYear} RASHMI R SHETTY
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/rashmi-r-shetty" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-slate-500 hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://github.com/RashmiRShetty" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-slate-500 hover:text-white transition-colors">GITHUB</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
