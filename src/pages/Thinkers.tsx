import React, { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, className }: { src: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '-300px']);

  return (
    <motion.img
      ref={ref}
      src={src}
      style={{ y }}
      className={className}
    />
  );
};

const Thinkers = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  // Smooth rotations
  const rotateMinds = useTransform(scrollYProgress, [0, 1], ['0deg', '10deg']);
  const rotateThat = useTransform(scrollYProgress, [0, 1], ['0deg', '10deg']);
  const rotateShape = useTransform(scrollYProgress, [0, 1], ['0deg', '15deg']);
  const rotateOur = useTransform(scrollYProgress, [0, 1], ['0deg', '-15deg']);
  const rotateDirection = useTransform(scrollYProgress, [0, 1], ['0deg', '-8deg']);

  // One single intense color for all words
  const themeColor = '#2A2A2A';


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="bg-white text-black min-h-screen"
        style={{ fontFamily: 'var(--font-neue-haas-light)' }}
      >
        <Navigation isDark={false} />

        {/* HERO */}
        <section
          ref={heroRef}
          className="w-full min-h-screen relative px-8 md:px-24 overflow-hidden mt-[-10px]"
        >
          <motion.div
  style={{ color: themeColor, rotate: rotateMinds }}
  className="absolute top-[15%] left-[8%] text-[clamp(3rem,7vw,6rem)] uppercase"
>
  "Minds"
</motion.div>

<motion.div
  style={{ color: themeColor, rotate: rotateThat }}
  className="absolute top-[45%] left-[25%] text-[clamp(3rem,7vw,6rem)] uppercase"
>
  "That"
</motion.div>

<motion.div
  style={{ color: themeColor, rotate: rotateShape }}
  className="absolute top-[25%] right-[10%] text-[clamp(3rem,7vw,6rem)] uppercase"
>
  "Shape"
</motion.div>

<motion.div
  style={{ color: themeColor, rotate: rotateOur }}
  className="absolute bottom-[30%] left-[18%] text-[clamp(3rem,7vw,6rem)] uppercase"
>
  "Our"
</motion.div>

<motion.div
  style={{ color: themeColor, rotate: rotateDirection }}
  className="absolute bottom-[10%] right-[18%] text-[clamp(3rem,7vw,6rem)] uppercase"
>
  "Direction"
</motion.div>

        </section>

        {/* COLLAGE SECTION */}
        <section className="relative w-full min-h-[300vh] px-8 md:px-24 py-24 grid grid-cols-12 gap-4">
          <ParallaxImage
            src="/images/inspo1.jpg"
            className="col-span-12 h-[800px] object-cover transform rotate-2 mt-[-150px]"
          />
          <ParallaxImage
            src="/images/inspo3.jpg"
            className="col-span-6 col-start-10 h-[600px] object-cover transform -rotate-3 shadow-lg mt-[-1280px]"
          />
          <ParallaxImage
            src="/images/inspo2.jpg"
            className="col-span-6 col-start-9 h-[800px] object-cover transform rotate-3 shadow-lg mt-[-900px]"
          />
          <ParallaxImage
            src="/images/inspo4.jpg"
            className="col-span-12 col-start-2 h-[650px] object-cover transform -rotate-3 mt-[-850px]"
          />
        </section>

        <Footer isDark={false} />
      </div>
    </motion.div>
  );
};

export default Thinkers;
