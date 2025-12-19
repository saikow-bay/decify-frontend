import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Studio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
  className="bg-white text-black w-full min-h-[100svh] md:min-h-screen"
  style={{ fontFamily: 'var(--font-neue-haas-light)' }}
>

        <Navigation isDark={false} />

        {/* ========================= */}
        {/* MOBILE VERSION ( < md ) */}
        {/* Each section = full screen */}
        {/* ========================= */}
        <div className="md:hidden">
          {/* HERO (MOBILE) */}
          <section className="w-full h-[100svh] px-6 pt-16 pb-24 flex flex-col justify-between">
            <div className="pt-6">
              <h1
                className="uppercase leading-[0.95]"
                style={{
                  fontSize: 'clamp(2.8rem, 11vw, 4.2rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                STAY CURIOUS.
                <br />
                COLLABORATE.
                <br />
                THINK DIFFERENT.
                <br />
                DESIGN FOR THE FUTURE.
              </h1>
            </div>

            <div className="pb-6">
              <p
                className="uppercase font-light"
                style={{
                  fontFamily: 'var(--font-neue-haas-light)',
                  fontSize: '1.05rem',
                  lineHeight: 1.35,
                  maxWidth: '34ch',
                  opacity: 0.92,
                }}
              >
                A STUDIO THAT BUILDS WITH DISCIPLINE, RHYTHM AND CLARITY.
              </p>
            </div>
          </section>

          {/* SECTION 2 (MOBILE) */}
          <section className="w-full h-[100svh] px-6 pt-16 pb-24 flex flex-col justify-between">
            <div className="pt-6">
              <h2
                className="uppercase leading-[0.95]"
                style={{
                  fontSize: 'clamp(2.6rem, 10.5vw, 4rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                WE SHAPE IDEAS
                <br />
                INTO TIMELESS DIGITAL
                <br />
                EXPERIENCES.
              </h2>
            </div>

            <div className="pb-6">
              <p
                className="uppercase font-light"
                style={{
                  fontFamily: 'var(--font-neue-haas-light)',
                  fontSize: '1.05rem',
                  lineHeight: 1.35,
                  maxWidth: '36ch',
                  opacity: 0.92,
                }}
              >
                EVERY DETAIL MATTERS. EVERY PIXEL COUNTS. WE BLEND CREATIVE
                THINKING WITH SHARP EXECUTION TO BUILD BRANDS THAT DON’T JUST
                LOOK GOOD — BUT LAST.
              </p>
            </div>
          </section>

          {/* SECTION 3 (MOBILE) */}
          <section className="w-full h-[100svh] px-6 pt-16 pb-24 flex flex-col justify-between">
            <div className="pt-6">
              <h2
                className="uppercase leading-[0.95]"
                style={{
                  fontSize: 'clamp(2.6rem, 10.5vw, 4rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                DRIVEN BY DESIGN,
                <br />
                ENGINEERED WITH
                <br />
                PRECISION.
              </h2>
            </div>

            <div className="pb-6">
              <p
                className="uppercase font-light"
                style={{
                  fontFamily: 'var(--font-neue-haas-light)',
                  fontSize: '1.05rem',
                  lineHeight: 1.35,
                  maxWidth: '36ch',
                  opacity: 0.92,
                }}
              >
                WE DON’T JUST DESIGN PRETTY THINGS. WE CRAFT THOUGHTFUL SYSTEMS —
                FRONT TO BACK, CONCEPT TO CODE — WITH LOGIC, CLARITY AND VISION.
              </p>
            </div>
          </section>

          <Footer isDark={false} />
        </div>

        {/* ========================= */}
        {/* DESKTOP VERSION ( md+ ) */}
        {/* Your original code intact */}
        {/* ========================= */}
        <div className="hidden md:block">
          {/* HERO */}
          <section className="w-full min-h-[60vh] flex flex-col justify-start items-start px-8 md:px-24 pt-24 pb-24 space-y-24">
            <div className="max-w-6xl">
              <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] leading-tight uppercase mb-12">
                Stay curious.<br />
                Collaborate.<br />
                Think Different.<br />
                Design for the future.
              </h1>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="w-full flex flex-col justify-start items-start px-8 md:px-24 pt-32 pb-32 space-y-24">
            <div className="max-w-6xl">
              <h2 className="text-[clamp(2rem,6vw,5rem)] leading-tight uppercase mb-6 mt-[-3.5rem]">
                We shape ideas<br />
                into timeless digital<br />
                experiences.
              </h2>
              <p className="max-w-3xl text-lg md:text-2xl uppercase font-light leading-relaxed tracking-wide mt-20">
                Every detail matters. Every pixel counts. We blend creative thinking with sharp execution to build brands that don’t just look good—but last.
              </p>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="w-full flex flex-col justify-start items-start px-8 md:px-24 pt-24 pb-40 space-y-24">
            <div className="max-w-6xl">
              <h2 className="text-[clamp(2rem,6vw,5rem)] leading-tight uppercase mb-12">
                Driven by design,<br />
                engineered with precision.
              </h2>
              <p className="max-w-3xl text-lg md:text-2xl uppercase font-light leading-relaxed tracking-wide">
                We don’t just design pretty things. We craft thoughtful systems—front to back, concept to code—with logic, clarity and vision.
              </p>
            </div>
          </section>

          <Footer isDark={false} />
        </div>
      </div>
    </motion.div>
  );
};

export default Studio;
