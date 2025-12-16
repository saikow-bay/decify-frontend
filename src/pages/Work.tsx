import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  type: string;
  status: string;
  year: string;
  siteUrl?: string;
};

const projects: Project[] = [
  {
    title: 'MAGS',
    type: 'DECIFY CORE/PRO',
    status: 'LAUNCHED/PAUSED',
    year: '2025',
    siteUrl: 'https://magsweb.netlify.app',
  },
  {
    title: 'HORIZON',
    type: 'DECIFY CORE',
    status: 'IN DEVELOPMENT',
    year: '2026',
  },
];

const easePremium = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

const Work: React.FC = () => {
  // MOBILE: tap-to-reveal (desktop stays hover-based)
  const [activeMobile, setActiveMobile] = useState<string | null>(null);

  const toggleMobile = (title: string) => {
    setActiveMobile((prev) => (prev === title ? null : title));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white text-black"
      style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
    >
      <Navigation isDark={false} />

      {/* HERO — SE QUEDA TAL CUAL */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-24 text-center">
        <h1
          className="uppercase font-normal leading-[0.83] text-[clamp(3rem,14vw,15rem)] tracking-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          YOU<br />
          IMAGINE<br />
          WE<br />
          CODE
        </h1>
      </section>

      {/* PROJECT LIST — FULL WIDTH ROWS */}
      <section className="w-full pb-40">
        <div className="w-full border-t border-black/10">
          {projects.map((p) => {
            const isOpenMobile = activeMobile === p.title;

            return (
              <div
                key={p.title}
                className="group relative w-full border-b border-black/10 py-10 md:py-16"
              >
                {/* FULL-WIDTH HOVER BACKGROUND (suave) */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${easePremium} pointer-events-none`}
                >
                  <div className="h-full w-full bg-black/[0.015]" />
                </div>

                {/* INNER CONTENT PADDING */}
                <div className="relative z-10 w-full px-6 md:px-24">
                  {/* CENTER TITLE */}
                  <div className="flex flex-col items-center justify-center">
                    {/* DESKTOP: same as before */}
                    <div className="hidden md:flex items-center justify-center w-full">
                      {p.siteUrl ? (
                        <a
                          href={p.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${p.title} site`}
                          className={`
                            uppercase font-normal
                            text-[clamp(2.5rem,8vw,7rem)]
                            leading-[0.9]
                            cursor-pointer
                            transition-all duration-700 ${easePremium}
                            group-hover:opacity-80
                          `}
                          style={{ letterSpacing: '-0.03em' }}
                        >
                          {p.title}
                        </a>
                      ) : (
                        <div
                          className="uppercase font-normal text-[clamp(2.5rem,8vw,7rem)] leading-[0.9]"
                          style={{ letterSpacing: '-0.03em' }}
                        >
                          {p.title}
                        </div>
                      )}
                    </div>

                    {/* MOBILE: tap-to-reveal title (prevents overlap) */}
                    <div className="md:hidden w-full flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => toggleMobile(p.title)}
                        className="w-full text-center"
                        aria-expanded={isOpenMobile}
                        aria-controls={`project-details-${p.title}`}
                      >
                        <div
                          className={`
                            uppercase font-normal
                            text-[clamp(2.2rem,10vw,3.4rem)]
                            leading-[0.92]
                            transition-opacity duration-500 ${easePremium}
                            ${isOpenMobile ? 'opacity-80' : 'opacity-100'}
                          `}
                          style={{ letterSpacing: '-0.03em' }}
                        >
                          {p.title}
                        </div>

                        {/* Small helper line – gives breathing room + guides interaction */}
                        <div className="mt-3 uppercase text-[11px] tracking-[0.28em] opacity-55">
                          TAP TO {isOpenMobile ? 'CLOSE' : 'REVEAL'}
                        </div>
                      </button>

                      {/* MOBILE DETAILS (stacked below title, no absolute, no overlap) */}
                      <div
                        id={`project-details-${p.title}`}
                        className={`w-full mt-6 grid transition-[grid-template-rows,opacity] duration-700 ${easePremium} ${
                          isOpenMobile ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="w-full max-w-[520px] mx-auto">
                            <div className="grid grid-cols-2 gap-6 text-left">
                              <div>
                                <div className="uppercase text-[11px] tracking-[0.28em] opacity-55">
                                  TYPE
                                </div>
                                <div className="uppercase mt-2 text-[15px] tracking-tight leading-snug">
                                  {p.type}
                                </div>
                              </div>

                              <div className="text-right">
                                <div className="uppercase text-[11px] tracking-[0.28em] opacity-55">
                                  STATUS
                                </div>
                                <div className="uppercase mt-2 text-[15px] tracking-tight leading-snug">
                                  {p.status} — {p.year}
                                </div>
                              </div>
                            </div>

                            {/* OPTIONAL: site link in mobile (only when exists) */}
                            {p.siteUrl ? (
                              <div className="mt-7 flex justify-center">
                                <a
                                  href={p.siteUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`
                                    uppercase text-[11px] tracking-[0.28em]
                                    opacity-70 hover:opacity-100 transition-opacity duration-500 ${easePremium}
                                  `}
                                >
                                  OPEN SITE
                                </a>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP LEFT — TYPE (SIN reflow: no width animation) */}
                  <div className="hidden md:flex pointer-events-none absolute left-0 top-0 h-full items-center">
                    <div
                      className={`
                        w-[46vw] md:w-[36vw]
                        origin-left
                        scale-x-0 opacity-0 -translate-x-2
                        group-hover:scale-x-100 group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-700 ${easePremium}
                        will-change-transform
                      `}
                    >
                      <div className="pl-6 md:pl-24 pr-6 md:pr-12">
                        <div className="uppercase text-xs tracking-[0.25em] opacity-50">
                          TYPE
                        </div>
                        <div className="uppercase mt-2 text-base md:text-lg tracking-tight">
                          {p.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP RIGHT — STATUS + YEAR (SIN reflow) */}
                  <div className="hidden md:flex pointer-events-none absolute right-0 top-0 h-full items-center">
                    <div
                      className={`
                        w-[46vw] md:w-[36vw]
                        origin-right
                        scale-x-0 opacity-0 translate-x-2
                        group-hover:scale-x-100 group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-700 ${easePremium}
                        will-change-transform
                      `}
                    >
                      <div className="pr-6 md:pr-24 pl-6 md:pl-12 text-right">
                        <div className="uppercase text-xs tracking-[0.25em] opacity-50">
                          STATUS
                        </div>
                        <div className="uppercase mt-2 text-base md:text-lg tracking-tight">
                          {p.status} — {p.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer isDark={false} />
    </motion.div>
  );
};

export default Work;
