import React, { useState, useEffect, useRef } from 'react';
import WhatWeDoSection from './WhatWeDoSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion, useInView } from 'framer-motion';

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

// STUDIO (longer text)
const studioItems = [
  {
    title: 'DESIGN',
    description:
      'WE DESIGN SYSTEMS, NOT SCREENS. TYPOGRAPHY, SPACING AND RHYTHM ARE TREATED LIKE ARCHITECTURE. EVERY BLOCK HAS PURPOSE, EVERY LINE HAS WEIGHT, AND EVERY DETAIL SUPPORTS THE BRAND — SO IT FEELS EXPENSIVE WITHOUT TRYING.',
  },
  {
    title: 'LOGIC',
    description:
      'WE BUILD STRUCTURE BEFORE STYLE. NAVIGATION, FLOW AND INFORMATION ARCHITECTURE ARE PLANNED LIKE A PRODUCT, NOT A POSTER. THE RESULT IS CLARITY: USERS KNOW WHERE THEY ARE, WHAT TO DO NEXT, AND WHY IT MATTERS.',
  },
  {
    title: 'PRECISION',
    description:
      'MICRO-DETAILS ARE NOT OPTIONAL: SPACING, TIMING, TYPE SCALE, ALIGNMENT, AND CONSISTENCY ACROSS BREAKPOINTS. WE TUNE THE EXPERIENCE UNTIL IT FEELS QUIETLY PERFECT — THE KIND OF POLISH YOU NOTICE WITHOUT REALIZING WHY.',
  },
  {
    title: 'IMPACT',
    description:
      'PERFORMANCE, CLARITY AND LONGEVITY. WE OPTIMIZE FOR SPEED, ACCESSIBILITY AND REAL-WORLD USAGE. SO THE PRODUCT DOESN’T JUST LOOK GOOD TODAY — IT HOLDS UP UNDER TRAFFIC, CONTENT CHANGES, AND GROWTH TOMORROW.',
  },
];

// ===============================
// RANDOM WORD REVEAL (STUDIO)
// ===============================
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function RandomWordReveal({
  text,
  active,
  durationMs = 1000,
  className = '',
  style = {},
}: {
  text: string;
  active: boolean;
  durationMs?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = React.useMemo(() => text.trim().split(/\s+/), [text]);

  // Random order (re-randomize each time it becomes active)
  const order = React.useMemo(() => {
    const idxs = words.map((_, i) => i);
    return shuffle(idxs);
  }, [active, words.length]);

  const [revealedCount, setRevealedCount] = React.useState(0);

  React.useEffect(() => {
    if (!active) {
      setRevealedCount(0);
      return;
    }

    setRevealedCount(0);

    const total = words.length || 1;
    const step = Math.max(22, Math.floor(durationMs / total));

    const t = window.setInterval(() => {
      setRevealedCount((c) => {
        if (c >= total) {
          window.clearInterval(t);
          return total;
        }
        return c + 1;
      });
    }, step);

    return () => window.clearInterval(t);
  }, [active, durationMs, words.length]);

  const revealedSet = React.useMemo(() => {
    const set = new Set<number>();
    for (let k = 0; k < revealedCount; k++) {
      const idx = order[k];
      if (idx !== undefined) set.add(idx);
    }
    return set;
  }, [order, revealedCount]);

  return (
    <p className={className} style={style}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block transition-opacity duration-150"
          style={{
            opacity: active && revealedSet.has(i) ? 1 : 0,
            marginRight: '0.33em',
            willChange: 'opacity',
          }}
        >
          {w}
        </span>
      ))}
    </p>
  );
}

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

  // STUDIO state
  const [activeStudio, setActiveStudio] = useState<number | null>(null);

  // ✅ SERVICES (MOBILE) — Scroll-to-reveal
  const trig0 = useRef<HTMLDivElement | null>(null);
  const trig1 = useRef<HTMLDivElement | null>(null);
  const trig2 = useRef<HTMLDivElement | null>(null);

  const open0 = useInView(trig0, { amount: 0.6, once: false });
  const open1 = useInView(trig1, { amount: 0.6, once: false });
  const open2 = useInView(trig2, { amount: 0.6, once: false });

  const trigRefs = [trig0, trig1, trig2];
  const opens = [open0, open1, open2];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-black"
    >
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

        {/* -------------------- SERVICES (DESKTOP) -------------------- */}
        <section id="SERVICES" className="w-full h-screen grid grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden h-screen"
            >
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

              <div
                className="
                  absolute inset-0 bg-white
                  opacity-0 group-hover:opacity-5
                  transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                  z-[5]
                "
              />

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
        {/* STUDIO (DESKTOP) — HOVER ACTIVATED, slow smooth title fade */}
        {/* ====================================================== */}
        <section
          id="STUDIO"
          className="w-full flex flex-col px-0 overflow-hidden"
          style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
        >
          {studioItems.map((item, idx) => {
            const open = activeStudio === idx;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveStudio(idx)}
                onMouseLeave={() => setActiveStudio(null)}
                onFocus={() => setActiveStudio(idx)}
                onBlur={() => setActiveStudio(null)}
                tabIndex={0}
                className={[
                  'relative w-full select-none overflow-hidden',
                  open ? 'bg-neutral-200' : 'bg-white hover:bg-neutral-200',
                  'transition-[min-height,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  // minimal expansion
                  open ? 'min-h-[34vh]' : 'min-h-[30vh]',
                  'outline-none',
                ].join(' ')}
              >
                {/* TITLE — centered, disappears (slower + smoother) */}
                <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
                  <div
                    className={[
                      'uppercase font-normal text-[clamp(2.5rem,8vw,7rem)] leading-[0.9]',
                      'transition-[opacity,transform,filter] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                      open
                        ? 'opacity-0 scale-[0.985] blur-[1px]'
                        : 'opacity-100 scale-100 blur-0',
                    ].join(' ')}
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {item.title}
                  </div>
                </div>

                {/* TEXT — centered */}
                <div className="absolute inset-0 flex items-center justify-center px-10">
                  <div
                    className={[
                      'grid w-full transition-[grid-template-rows,opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                      open
                        ? 'grid-rows-[1fr] opacity-100 translate-y-0'
                        : 'grid-rows-[0fr] opacity-0 translate-y-[6px]',
                    ].join(' ')}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <RandomWordReveal
                        text={item.description}
                        active={open}
                        durationMs={1750}
                        className="uppercase font-light mx-auto text-center"
                        style={{
                          fontFamily: 'var(--font-neue-haas-light)',
                          lineHeight: 1.6,
                          maxWidth: '78ch',
                          fontSize: '0.98rem',
                          opacity: 0.92,
                        }}
                      />
                    </div>
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
      {/* ====================================================== */}
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

        {/* -------------------- SERVICES (MOBILE) — SCROLL REVEAL -------------------- */}
        <section id="SERVICES" className="w-full">
          {services.map((service, idx) => {
            const open = opens[idx];
            const trigRef = trigRefs[idx];

            return (
              <div key={idx} className="relative h-[100dvh]">
                <div
                  ref={trigRef}
                  className="absolute top-[50%] left-0 right-0 h-[2px] w-full opacity-0 pointer-events-none"
                />

                <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.65]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: open ? 1 : 0 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: open ? 0.1 : 0 }}
                    transition={{
                      duration: 1.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-10">
                    <motion.h3
                      className="uppercase text-[28px] font-normal"
                      style={{
                        letterSpacing: '-0.02em',
                        fontFamily: 'var(--font-neue-haas-normal)',
                      }}
                      initial={{ y: 10, opacity: 0.9, color: '#000' }}
                      animate={{
                        y: open ? -8 : 10,
                        opacity: 1,
                        color: open ? '#fff' : '#000',
                      }}
                      transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0, y: 6 }}
                      animate={{
                        height: open ? 'auto' : 0,
                        opacity: open ? 1 : 0,
                        y: open ? 0 : 6,
                      }}
                      transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <p
                        className="uppercase font-light text-base mt-3"
                        style={{
                          fontFamily: 'var(--font-neue-haas-light)',
                          lineHeight: 1.25,
                          maxWidth: 420,
                          color: '#fff',
                          opacity: 0.92,
                        }}
                      >
                        {service.description}
                      </p>
                    </motion.div>

                    <motion.div
                      className="mt-6 text-xs uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-neue-haas-light)' }}
                      initial={{ opacity: 0.55, color: '#000' }}
                      animate={{
                        opacity: open ? 0.75 : 0.55,
                        color: open ? '#fff' : '#000',
                      }}
                      transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      SCROLL
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ------------------ WHAT WE BUILD (MOBILE) ------------------ */}
        <section
          id="WORK"
          className="px-4 pt-6 pb-10 h-[100svh] flex flex-col justify-between"
        >
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
        {/* STUDIO (MOBILE) — TAP ONLY, hint text changes */}
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
                    <div className="relative px-7 h-[44svh] text-center">
                      {/* TITLE */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`
                            uppercase text-[clamp(2.4rem,8vw,6.2rem)] leading-[0.9]
                            transition-[opacity,transform,filter] duration-[1150ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${open ? 'opacity-0 scale-[0.985] blur-[1px]' : 'opacity-100 scale-100 blur-0'}
                          `}
                          style={{ letterSpacing: '-0.03em' }}
                        >
                          {item.title}
                        </div>
                      </div>

                      {/* TEXT */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`
                            grid w-full transition-[grid-template-rows,opacity,transform]
                            duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${open ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 translate-y-[6px]'}
                          `}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <RandomWordReveal
                              text={item.description}
                              active={open}
                              durationMs={1850}
                              className="uppercase font-light mx-auto text-center"
                              style={{
                                fontFamily: 'var(--font-neue-haas-light)',
                                lineHeight: 1.65,
                                fontSize: '13px',
                                maxWidth: '48ch',
                                opacity: 0.92,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hint — changes depending on state */}
                      <div
                        className={`
                          absolute left-0 right-0 bottom-[9%]
                          uppercase tracking-widest text-[11px]
                          transition-opacity duration-400
                          ${open ? 'opacity-80' : 'opacity-70'}
                        `}
                        style={{ fontFamily: 'var(--font-neue-haas-light)' }}
                      >
                        {open ? 'TAP TO HIDE' : 'TAP TO REVEAL'}
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
