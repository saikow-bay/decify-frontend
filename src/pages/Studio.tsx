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
        className="bg-white text-black w-full min-h-screen"
        style={{ fontFamily: 'var(--font-neue-haas-light)' }}
      >
        <Navigation isDark={false} />

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
    </motion.div>
  );
};

export default Studio;
