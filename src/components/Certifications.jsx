import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Braces, Code2, Database, Eye, GraduationCap, Sparkles } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'PHP Programming Introduction',
      issuer: 'Certification of Excellence',
      logo: '/info.png',
      certificateImage: '/in1.pdf'
    },
    {
      title: 'PHP Web Development Training',
      issuer: 'Full-stack Proficiency',
      logo: '/info.png',
      certificateImage: '/in3.pdf'
    },
    {
      title: 'Big Data',
      issuer: 'Infosys',
      logo: '/info.png',
      certificateImage: '/in2.pdf'
    },
    {
      title: 'Research Paper Presentation',
      issuer: 'Indo-Kenyan International Conference · PIM, 2025',
      logo: '/pim.png',
      certificateImage: '/research.png'
    },
    {
      title: 'NPTEL Python Certification',
      issuer: 'Advanced Logic & Scripting',
      logo: '/np.jpeg',
      certificateImage: '/np1.pdf'
    },
    {
      title: 'NPTEL Cloud Computing',
      issuer: 'NPTEL',
      logo: '/np.jpeg',
      certificateImage: '/np2.pdf'
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
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
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
                    <h3 className="text-sm font-black text-white mb-1 uppercase tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed font-bold text-white/40 uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                    {cert.certificateImage && (
                      cert.certificateImage.toLowerCase().endsWith('.pdf') ? (
                        <a
                          href={cert.certificateImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
                        >
                          <Eye size={12} />
                          View Certificate
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
                        >
                          <Eye size={12} />
                          View Certificate
                        </button>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
              Workshops
            </h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/[0.12] via-white/[0.03] to-white/[0.01] border border-accent/15 rounded-3xl p-6 md:p-7 relative overflow-hidden group hover:border-accent/35 transition-all"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center border border-accent/20">
                      <GraduationCap size={20} />
                    </div>
                    <p className="flex items-center gap-1.5 text-xs font-black text-accent uppercase tracking-[0.2em]">
                      <Sparkles size={12} />
                      Hands-on learning
                    </p>
                  </div>
                  <div className="relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 text-accent group-hover:scale-105 transition-transform">
                    <Code2 size={26} />
                    <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-dark-bg border border-white/10 text-white/70">
                      <Braces size={13} />
                    </span>
                  </div>
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">
                  Web Development Workshop
                </h3>
                <p className="text-[11px] leading-relaxed font-bold text-accent/80 uppercase tracking-wider mb-5">
                  Poornaprajna Institute of Management, Udupi
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'MySQL'].map((technology) => (
                    <span
                      key={technology}
                      className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] font-bold text-white/70 uppercase tracking-wider"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 border-t border-white/[0.08] pt-5">
                  <li className="flex items-start gap-3 text-[13px] leading-relaxed text-white/70">
                    <Code2 size={16} className="text-accent mt-0.5 shrink-0" />
                    Hands-on training in HTML, CSS, JavaScript, React & MySQL.
                  </li>
                  <li className="flex items-start gap-3 text-[13px] leading-relaxed text-white/70">
                    <Braces size={16} className="text-accent mt-0.5 shrink-0" />
                    Developed a smooth, interactive single-page application.
                  </li>
                  <li className="flex items-start gap-3 text-[13px] leading-relaxed text-white/70">
                    <Database size={16} className="text-accent mt-0.5 shrink-0" />
                    Gained practical knowledge of React & backend integration.
                  </li>
                </ul>
              </div>

              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>
            </motion.div>
          </div>
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