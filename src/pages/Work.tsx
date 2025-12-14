import React from 'react';
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
    type: 'DECIFY CORE',
    status: 'LIVE',
    year: '2025',
    siteUrl: 'https://magsweb.netlify.app',
  },
  {
    title: 'HORIZON',
    type: 'UI/UX',
    status: 'IN DEVELOPMENT',
    year: '2026',
  },
];

const easePremium = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

const Work: React.FC = () => {
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
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative w-full border-b border-black/10 py-12 md:py-16"
            >
              {/* FULL-WIDTH HOVER BACKGROUND (suave) */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${easePremium} pointer-events-none`}
              >
                <div className="h-full w-full bg-black/[0.015]" />
              </div>

              {/* INNER CONTENT PADDING */}
              <div className="relative z-10 w-full px-6 md:px-24">
                {/* CENTER TITLE (CLICKABLE) */}
                <div className="flex items-center justify-center">
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

                {/* LEFT — TYPE (SIN reflow: no width animation) */}
                <div className="pointer-events-none absolute left-0 top-0 h-full flex items-center">
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

                {/* RIGHT — STATUS + YEAR (SIN reflow) */}
                <div className="pointer-events-none absolute right-0 top-0 h-full flex items-center">
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
          ))}
        </div>
      </section>

      <Footer isDark={false} />
    </motion.div>
  );
};

export default Work;
