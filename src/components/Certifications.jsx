import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'PHP Programming',
      issuer: 'Certification of Excellence',
      logo: '/info.png',
      certificateImage: '/1 (2).png'
    },
    {
      title: 'PHP Web Development Training',
      issuer: 'Full-stack Proficiency',
      logo: '/info.png',
      certificateImage: '/1 (1).png'
    },
    {
      title: 'NPTEL Python Certification',
      issuer: 'Advanced Logic & Scripting',
      logo: '/np.jpeg',
    },
    {
      title: 'NPTEL Cloud Computing',
      issuer: 'NPTEL',
      logo: '/np.jpeg',
    },
    {
      title: 'Udemy Full Stack Web Development',
      issuer: 'Full-stack Development Mastery',
      logo: '/u.png',
      certificateImage: '/udemy.jpeg'
    },
  ];

  return (
    <section id="certifications" className="py-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8 items-start">

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">
              Professional <span>Certifications</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 min-h-24 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/20 hover:bg-white/[0.04] transition-all group"
                >
                  {/* Logo */}
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    {cert.certificateImage ? (
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="text-left text-xs font-black text-white mb-1 uppercase tracking-tight cursor-pointer hover:text-accent transition"
                      >
                        {cert.title}
                      </button>
                    ) : (
                      <h3 className="text-xs font-black text-white mb-1 uppercase tracking-tight">
                        {cert.title}
                      </h3>
                    )}
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-7 relative overflow-hidden group hover:border-accent/20 transition-all"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-1">
                    Workshop
                  </h2>
                  <h3 className="text-base font-black text-white uppercase tracking-tight">
                    Web Development Workshop
                  </h3>
                </div>
              </div>
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-5">
                Poornaprajna Institute of Management, Udupi
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[11px] leading-relaxed text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0"></div>
                  Hands-on training in HTML, CSS, JavaScript, React & MySQL.
                </li>
                <li className="flex items-start gap-3 text-[11px] leading-relaxed text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0"></div>
                  Developed a smooth, interactive single-page application.
                </li>
                <li className="flex items-start gap-3 text-[11px] leading-relaxed text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0"></div>
                  Gained practical knowledge of React & backend integration.
                </li>
              </ul>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 blur-3xl rounded-full"></div>

            {/* Icon */}
            <div className="absolute bottom-[-20px] right-[-20px] text-white/5 rotate-12">
              <GraduationCap size={140} strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert?.certificateImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full p-4">

            {/* Close */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedCert.certificateImage}
              alt={selectedCert.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;