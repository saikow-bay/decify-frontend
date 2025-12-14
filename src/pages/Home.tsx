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
      'Premium website, basic catalog, cart + Supabase, real payments, fast delivery.',
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-black"
    >

      {/* NAVBAR */}
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} isDark={false} />

      {/* ====================================================== */}
      {/* DESKTOP VERSION */}
      {/* ====================================================== */}
      <div className="hidden md:block">

        {/* ---------------------- HERO ---------------------- */}
        <section
          id="HOME"
          className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden px-24 pt-24"
          style={{
            fontFamily: 'var(--font-neue-haas-normal)',
            letterSpacing: '-0.03em',
          }}
        >
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex-1 flex flex-col justify-start">
              <h1 className="text-[7rem] font-normal leading-[1.05]">
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

            <div className="flex-1 flex flex-col justify-end items-end">
              <h2
                className="text-4xl font-normal text-right"
                style={{ letterSpacing: '-0.01em', maxWidth: '23ch' }}
              >
               ANY IDEA, ANY MINDSET
                <br />
                TO EXPERIENCE
              </h2>
              <span className="mt-8 tracking-widest text-sm uppercase font-thin">
                code & brand studio
              </span>
            </div>
          </div>
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
              ART, PERFORMANCE AND TECHNOLOGY — DELIVERED WITH OBSESSIVE DETAIL.
            </p>
          </div>
        </section>

        {/* -------------------- SERVICES -------------------- */}
        <section id="SERVICES" className="w-full grid grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden h-[71.43vh]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 brightness-[0.6]"
                draggable={false}
              />

              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-700 z-[5]" />

              <div className="absolute inset-0 z-10 flex flex-col items-start justify-end p-8 transition-all duration-500 group-hover:text-white">
                <div className="flex flex-col justify-end h-[200px]">
                  <h3
                    className="text-2xl font-normal uppercase mb-3 transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="font-light text-base transition-colors duration-500"
                    style={{
                      fontFamily: 'var(--font-neue-haas-light)',
                      maxWidth: 300,
                      lineHeight: 1.25,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ------------------ STATIC SECTION ------------------ */}
        <section
          id="STUDIO"
          className="w-full min-h-screen flex flex-col justify-start pt-24 px-24"
          style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
        >
          <h2
            className="text-[7.5rem] font-normal leading-[0.98] uppercase mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            INSPIRATION <br /> MEETS FUNCTION
          </h2>

          <p
            className="max-w-2xl text-2xl font-light uppercase mt-28"
            style={{
              fontFamily: 'var(--font-neue-haas-light)',
              lineHeight: 1.2,
            }}
          >
            We combine design, logic and precision to craft digital systems built
            for longevity, clarity and impact.
          </p>
        </section>

        <WhatWeDoSection />
        <Footer isDark={false} />
      </div>

      {/* ====================================================== */}
      {/* MOBILE VERSION */}
      {/* ====================================================== */}
      <div className="block md:hidden">

        {/* ---------------------- HERO ---------------------- */}
        {/* ---------------------- HERO (MOBILE) ---------------------- */}
<section
  id="HOME"
  className="w-full min-h-[110vh] px-6 flex flex-col justify-between py-20"
  style={{
    fontFamily: 'var(--font-neue-haas-normal)',
    letterSpacing: '-0.03em',
  }}
>

  {/* TEXT ABOVE */}
  <div className="pt-10">
    <h1 className="text-[clamp(3.5rem,17vw,6rem)] font-normal leading-[1.05] uppercase">
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

  {/* SUBTITLE BELOW */}
  <div className="pb-12">
    <p className="text-lg uppercase font-light opacity-90 tracking-wide text-left">
      FROM VISION TO EXPERIENCE
    </p>
  </div>

</section>


        {/* ------------------ WHAT WE BUILD ------------------ */}
        <section
          id="WORK"
          className="px-6 py-20"
          style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
        >
          <h2 className="text-[clamp(2.5rem,10vw,4rem)] leading-[1] uppercase mb-10">
            WHAT WE’RE
            <br />
            BUILDING
          </h2>

          <p
            className="text-base uppercase font-light opacity-90"
            style={{ fontFamily: 'var(--font-neue-haas-light)' }}
          >
            DECIFY BUILDS HIGH-END DIGITAL EXPERIENCES THAT COMBINE ART,
            PERFORMANCE AND TECHNOLOGY.
          </p>
        </section>

        {/* -------------------- SERVICES -------------------- */}
        <section id="SERVICES" className="px-6 space-y-10">
          {services.map((service, idx) => (
            <div key={idx} className="w-full">
              <img
                src={service.image}
                className="w-full h-[45vh] object-cover rounded-md mb-4"
              />

              <h3 className="text-2xl uppercase mb-2">{service.title}</h3>

              <p
                className="text-base font-light opacity-90"
                style={{ fontFamily: 'var(--font-neue-haas-light)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </section>

        {/* ------------------ STATIC SECTION ------------------ */}
        <section className="px-6 py-24">
          <h2 className="text-[clamp(2.5rem,10vw,4rem)] leading-[1] uppercase mb-10">
            INSPIRATION
            <br />
            MEETS FUNCTION
          </h2>

          <p
            className="text-base uppercase font-light opacity-90"
            style={{ fontFamily: 'var(--font-neue-haas-light)' }}
          >
            We combine design, logic and precision to craft systems built
            for clarity and impact.
          </p>
        </section>

        <Footer isDark={false} />
      </div>

    </motion.div>
  );
};

export default Home;
