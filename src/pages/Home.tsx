import React, { useState, useEffect } from 'react';
import WhatWeDoSection from './WhatWeDoSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const services = [
  {
    image: '/images/uiux.jpg',
    title: 'DECIFY CORE',
    description:
      'Professional, brand-aligned website design using your logo, fonts, colors and imagery, with a clear and intentional structure.',
  },
  {
    image: '/images/frontend.png',
    title: 'DECIFY PRO',
    description:
      'Everything from CORE + advanced catalog, filters, admin panel, product editing, SEO and performance upgrades.',
  },
  {
    image: '/images/one.png',
    title: 'DECIFY ONE',
    description:
      'Includes everything from PRO + full visual identity, campaign landing pages, blog/editorial section, email automations, cart recovery, advanced API integrations, premium optimization.',
  },
];

// STUDIO / INSPIRATION MEETS FUNCTION — interactive blocks (no images)
const studioItems = [
  {
    title: 'DESIGN',
    description:
      'WE DESIGN SYSTEMS THAT FEEL EXPENSIVE. TYPOGRAPHY, SPACING AND RHYTHM DONE WITH DISCIPLINE.',
  },
  {
    title: 'LOGIC',
    description:
      'WE BUILD STRUCTURE BEFORE STYLE. NAVIGATION, FLOW AND INFORMATION ARCHITECTURE THAT MAKES SENSE.',
  },
  {
    title: 'PRECISION',
    description:
      'MICRO-DETAILS MATTER: SPACING, TIMING, TRANSITIONS AND CONSISTENCY ACROSS EVERY BREAKPOINT.',
  },
  {
    title: 'IMPACT',
    description:
      'PERFORMANCE, CLARITY AND LONGEVITY. SO YOUR PRODUCT DOESN’T JUST LOOK GOOD, IT LASTS.',
  },
];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const titles = ['DECIFY', 'IMAGINE', 'DEFINE', 'CODE'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsFading(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [currentPage, setCurrentPage] = useState('HOME');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    const section = document.getElementById(page);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  // Mobile: “hover” reemplazado por tap
  const [activeService, setActiveService] = useState<number | null>(null);

  // STUDIO: hover (desktop) + tap (mobile)
  const [activeStudio, setActiveStudio] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-black"
    >
      {/* NAVBAR */}
      <Navigation isDark={false} />

      {/* ====================================================== */}
      {/* DESKTOP VERSION */}
      {/* ====================================================== */}
      <div className="hidden md:block">
        {/* ---------------------- HERO ---------------------- */}
        <section
  id="HOME"
  className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden px-6 md:px-24"
  style={{
    fontFamily: 'var(--font-neue-haas-normal)',
    letterSpacing: '-0.03em',
  }}
>
  <div className="w-full flex flex-col items-center justify-center text-center">
  <h1 className="uppercase text-[clamp(7.5rem,11vw,11.5rem)] font-normal leading-[0.98]">
      <span className="block mb-4">WE</span>

      <span
        className={`inline-block ${
          isFading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
      >
        {titles[currentTitle].toUpperCase()}
      </span>

      <span className="block mt-4">BIG</span>
    </h1>
  </div>
</section>


        {/* ✅ MOVED: SERVICES now right after HERO */}
        {/* -------------------- SERVICES (DESKTOP) — UPDATED -------------------- */}
        <section id="SERVICES" className="w-full h-screen grid grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden h-screen"
            >
              {/* Image only on hover */}
              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute inset-0 w-full h-full object-cover object-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                  brightness-[0.6]
                "
                draggable={false}
              />

              {/* Soft wash only on hover */}
              <div
                className="
                  absolute inset-0 bg-white
                  opacity-0 group-hover:opacity-5
                  transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                  z-[5]
                "
              />

              {/* Content */}
              <div
                className="
                  absolute inset-0 z-10 flex flex-col items-start justify-end p-8
                  text-black group-hover:text-white
                  transition-colors duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              >
                <div className="flex flex-col justify-end h-[240px]">
                  <h3
                    className="
                      uppercase font-normal mb-3
                      transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                      text-3xl group-hover:text-2xl
                    "
                    style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
                  >
                    {service.title}
                  </h3>

                  <div
                    className="
                      overflow-hidden
                      transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                      max-h-0 opacity-0 translate-y-2
                      group-hover:max-h-48 group-hover:opacity-100 group-hover:translate-y-0
                    "
                  >
                    <p
                      className="font-light text-base"
                      style={{
                        fontFamily: 'var(--font-neue-haas-light)',
                        maxWidth: 320,
                        lineHeight: 1.25,
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ✅ MOVED DOWN: WHAT WE BUILD now after SERVICES */}
        {/* ------------------- WHAT WE BUILD ------------------- */}
        <section
          id="WORK"
          className="relative w-full min-h-screen flex flex-col"
          style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
        >
          <div className="w-full pt-24 pl-16">
            <h2
              className="text-[7.5rem] font-normal leading-[0.98] uppercase"
              style={{ letterSpacing: '-0.04em', textAlign: 'left' }}
            >
              WHAT WE’RE <br />
              BUILDING
            </h2>
          </div>

          <div className="flex-1 w-full flex items-center justify-end">
            <p
              className="max-w-2xl text-2xl font-light uppercase pr-16 text-right"
              style={{
                fontFamily: 'var(--font-neue-haas-light)',
                lineHeight: 1.2,
              }}
            >
              DECIFY BUILDS MODERN, HIGH-END DIGITAL EXPERIENCES THAT COMBINE
              ART, PERFORMANCE AND TECHNOLOGY DELIVERED WITH OBSESSIVE DETAIL.
            </p>
          </div>
        </section>

        {/* ====================================================== */}
        {/* STUDIO (DESKTOP) — RESTART: title never moves, item grows a bit on hover */}
        {/* ====================================================== */}
        <section
          id="STUDIO"
          className="w-full flex flex-col px-0 overflow-hidden"
          style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
        >
          {studioItems.map((item, idx) => {
            const active = activeStudio === idx;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveStudio(idx)}
                onMouseLeave={() => setActiveStudio(null)}
                className={[
                  'relative w-full cursor-pointer select-none overflow-hidden',
                  'bg-white hover:bg-neutral-200',
                  'transition-[min-height,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  active ? 'min-h-[46vh]' : 'min-h-[36vh]',
                ].join(' ')}
              >
                {/* TITLE — perfectly centered, never moves */}
                <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
                  <div
                    className="uppercase font-normal text-[clamp(2.5rem,8vw,7rem)] leading-[0.9]"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {item.title}
                  </div>
                </div>

                {/* TEXT — anchored lower; when the block grows, it naturally drops */}
                <div
                  className={[
                    'absolute left-0 right-0 bottom-[10%] mx-auto',
                    'grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    active
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  ].join(' ')}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className="uppercase font-light mx-auto text-center"
                      style={{
                        fontFamily: 'var(--font-neue-haas-light)',
                        lineHeight: 1.5,
                        maxWidth: '72ch',
                        fontSize: '1rem',
                        opacity: 0.92,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <WhatWeDoSection />
        <Footer isDark={false} />
      </div>

      {/* ====================================================== */}
      {/* MOBILE VERSION */}
      <div className="block md:hidden">
      <section
  id="HOME"
  className="w-full h-[100dvh] px-6 flex items-center justify-center"
  style={{
    fontFamily: 'var(--font-neue-haas-normal)',
    letterSpacing: '-0.03em',
  }}
>
  <div className="w-full text-center">
  <h1 className="uppercase text-[clamp(5.2rem,20vw,7.8rem)] font-normal leading-[1.05]">

      WE
      <br />
      <span
        className={`inline-block ${
          isFading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
      >
        {titles[currentTitle].toUpperCase()}
      </span>
      <br />
      BIG
    </h1>
  </div>
</section>


        {/* ✅ MOVED: SERVICES now right after HERO (MOBILE) */}
        {/* -------------------- SERVICES (MOBILE) — UPDATED -------------------- */}
        <section id="SERVICES" className="px-6 pb-24 space-y-0">
          {services.map((service, idx) => {
            const open = activeService === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  setActiveService((prev) => (prev === idx ? null : idx))
                }
                className="block w-full text-left leading-none"
                style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
              >
                <div className="relative overflow-hidden h-[52svh] w-screen left-1/2 -translate-x-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    draggable={false}
                    className={`
                      absolute inset-0 w-full h-full object-cover object-center brightness-[0.65]
                      transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${open ? 'opacity-100' : 'opacity-0'}
                    `}
                  />

                  <div
                    className={`
                      absolute inset-0 bg-white
                      transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${open ? 'opacity-10' : 'opacity-0'}
                    `}
                  />

                  <div
                    className={`
                      absolute inset-0 z-10 flex flex-col items-start justify-end p-6
                      transition-colors duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${open ? 'text-white' : 'text-black'}
                    `}
                  >
                    <h3
                      className={`
                        uppercase mb-2
                        transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${open ? 'text-2xl' : 'text-[28px]'}
                      `}
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {service.title}
                    </h3>

                    <div
                      className={`
                        overflow-hidden
                        transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          open
                            ? 'max-h-48 opacity-100 translate-y-0'
                            : 'max-h-0 opacity-0 translate-y-2'
                        }
                      `}
                    >
                      <p
                        className="font-light text-base"
                        style={{
                          fontFamily: 'var(--font-neue-haas-light)',
                          maxWidth: 420,
                          lineHeight: 1.25,
                        }}
                      >
                        {service.description}
                      </p>
                    </div>

                    <span className="mt-5 text-xs uppercase tracking-widest opacity-70">
                      tap to {open ? 'close' : 'reveal'}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </section>

        {/* ------------------ WHAT WE BUILD (MOBILE) ------------------ */}
        <section
  id="WORK"
  className="px-4 pt-6 pb-10 h-[100svh] flex flex-col justify-between"
>
  {/* TITLE — más grande y arriba */}
  <h2
    className="uppercase leading-[0.95]"
    style={{
      fontSize: 'clamp(3.2rem, 12vw, 4.6rem)',
      letterSpacing: '-0.04em',
    }}
  >
    WHAT WE’RE
    <br />
    BUILDING
  </h2>

  {/* TEXT — más grande y hasta abajo */}
  <p
    className="uppercase font-light"
    style={{
      fontFamily: 'var(--font-neue-haas-light)',
      fontSize: '1.05rem',
      lineHeight: 1.35,
      maxWidth: '34ch',
    }}
  >
    DECIFY BUILDS MODERN, HIGH-END DIGITAL EXPERIENCES THAT COMBINE ART,
    PERFORMANCE AND TECHNOLOGY DELIVERED WITH OBSESSIVE DETAIL.
  </p>
</section>


        {/* ====================================================== */}
        {/* STUDIO (MOBILE) */}
        {/* ====================================================== */}
        <section
          id="STUDIO"
          className="min-h-[100svh] px-0 py-24 flex items-center justify-center"
          style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
        >
          <div className="w-full">
            <div className="flex flex-col gap-0 w-full">
              {studioItems.map((item, idx) => {
                const open = activeStudio === idx;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() =>
                      setActiveStudio((prev) => (prev === idx ? null : idx))
                    }
                    className={[
                      'w-full text-center select-none transition-colors duration-300',
                      open ? 'bg-neutral-200' : 'bg-white',
                    ].join(' ')}
                    style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
                  >
                    <div className="relative px-7 h-[50svh] text-center">
                      {/* TITLE — sube al abrir */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`
                            uppercase text-[clamp(2.5rem,8vw,7rem)] leading-[0.9]
                            transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${open ? '-translate-y-6' : 'translate-y-0'}
                          `}
                          style={{ letterSpacing: '-0.03em' }}
                        >
                          {item.title}
                        </div>
                      </div>

                      {/* TAP LABEL — sube JUNTO con el título */}
                      <div
                        className={`
                          absolute left-0 right-0 bottom-[22%]
                          uppercase tracking-widest text-[11px]
                          transition-transform transition-opacity duration-700
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${open ? '-translate-y-4 opacity-90' : 'translate-y-0 opacity-70'}
                        `}
                        style={{ fontFamily: 'var(--font-neue-haas-light)' }}
                      >
                        {open ? 'TAP TO HIDE' : 'TAP TO REVEAL'}
                      </div>

                      {/* TEXT — aparece abajo, independiente */}
                      <div className="absolute left-0 right-0 bottom-[6%] mx-auto">
                        <div
                          className={`
                            grid transition-[grid-template-rows,opacity,transform]
                            duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${
                              open
                                ? 'grid-rows-[1fr] opacity-100 -translate-y-3'
                                : 'grid-rows-[0fr] opacity-0 translate-y-2'
                            }
                          `}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <p
                              className="uppercase font-light mx-auto"
                              style={{
                                fontFamily: 'var(--font-neue-haas-light)',
                                lineHeight: 1.55,
                                fontSize: '13px',
                                maxWidth: '46ch',
                                opacity: 0.92,
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <WhatWeDoSection />
        <Footer isDark={false} />
      </div>
    </motion.div>
  );
};

export default Home;
