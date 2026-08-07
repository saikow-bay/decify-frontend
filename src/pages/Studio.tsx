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

        <div className="md:hidden">
          <section className="w-full h-[100svh] px-6 pt-16 pb-24 flex flex-col justify-between">
            <div className="pt-6">
              <h1
                className="uppercase leading-[0.95]"
                style={{
                  fontSize: 'clamp(2.8rem, 11vw, 4.2rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                CLEAR SCOPE.
                <br />
                FASTER LAUNCHES.
                <br />
                BETTER QUOTE
                <br />
                CONVERSION.
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
                DECIFY PARTNERS WITH QUOTE-DRIVEN SERVICE BUSINESSES THROUGH FIXED-SCOPE BUILDS DESIGNED TO TURN VISITORS INTO QUALIFIED INQUIRIES.
              </p>
            </div>
          </section>

          <section className="w-full h-[100svh] px-6 pt-16 pb-24 flex flex-col justify-between">
            <div className="pt-6">
              <h2
                className="uppercase leading-[0.95]"
                style={{
                  fontSize: 'clamp(2.6rem, 10.5vw, 4rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                WE MAP THE OFFER,
                <br />
                THE JOURNEY AND
                <br />
                THE QUOTE PATH.
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
                BEFORE DESIGN OR DEVELOPMENT, WE DEFINE PAGES, FEATURES, FORMS, INTEGRATIONS AND DECISION POINTS SO EVERY PROJECT HAS A CLEAR PLAN AND A COMMERCIAL PURPOSE.
              </p>
            </div>
          </section>

          <section className="w-full h-[100svh] px-6 pt-16 pb-24 flex flex-col justify-between">
            <div className="pt-6">
              <h2
                className="uppercase leading-[0.95]"
                style={{
                  fontSize: 'clamp(2.6rem, 10.5vw, 4rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                WE BUILD SYSTEMS
                <br />
                THAT SUPPORT SALES,
                <br />
                DELIVERY AND FOLLOW-UP.
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
                FROM QUOTE FORMS TO CRM HANDOFFS AND BOOKING FLOWS, WE CREATE PRACTICAL DIGITAL TOOLS THAT HELP SERVICE BUSINESSES RESPOND FASTER AND CLOSE WITH MORE CONFIDENCE.
              </p>
            </div>
          </section>

          <Footer isDark={false} />
        </div>

        <div className="hidden md:block">
          <section className="w-full min-h-[60vh] flex flex-col justify-start items-start px-8 md:px-24 pt-24 pb-24 space-y-24">
            <div className="max-w-6xl">
              <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] leading-tight uppercase mb-12">
                Clear scope.<br />
                Faster launches.<br />
                Better quote<br />
                conversion.
              </h1>
            </div>
          </section>

          <section className="w-full flex flex-col justify-start items-start px-8 md:px-24 pt-32 pb-32 space-y-24">
            <div className="max-w-6xl">
              <h2 className="text-[clamp(2rem,6vw,5rem)] leading-tight uppercase mb-6 mt-[-3.5rem]">
                We map the offer,<br />
                the journey and<br />
                the quote path.
              </h2>
              <p className="max-w-3xl text-lg md:text-2xl uppercase font-light leading-relaxed tracking-wide mt-20">
                Before design or development, we define pages, features, forms, integrations and decision points so every project has a clear plan and a commercial purpose.
              </p>
            </div>
          </section>

          <section className="w-full flex flex-col justify-start items-start px-8 md:px-24 pt-24 pb-40 space-y-24">
            <div className="max-w-6xl">
              <h2 className="text-[clamp(2rem,6vw,5rem)] leading-tight uppercase mb-12">
                We build systems<br />
                that support sales,<br />
                delivery and follow-up.
              </h2>
              <p className="max-w-3xl text-lg md:text-2xl uppercase font-light leading-relaxed tracking-wide">
                From quote forms to CRM handoffs and booking flows, we create practical digital tools that help service businesses respond faster and close with more confidence.
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
