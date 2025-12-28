import React from 'react';

type HomeHeroProps = {
  variant: 'desktop' | 'mobile';
  titles: string[];
  currentTitle: number;
  isFading: boolean;
};

const HomeHero: React.FC<HomeHeroProps> = ({
  variant,
  titles,
  currentTitle,
  isFading,
}) => {
  if (variant === 'desktop') {
    return (
      <section
        id="HOME"
        className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden px-6 md:px-24"
        style={{
          fontFamily: 'var(--font-neue-haas-normal)',
          letterSpacing: '-0.03em',
          // ✅ stronger blue gradient, bottom MUST be white
          background:
            'linear-gradient(180deg, #D6DEFF 0%, #EEF2FF 45%, #FFFFFF 75%, #FFFFFF 100%)',
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
    );
  }

  // MOBILE
  return (
    <section
      id="HOME"
      className="w-full h-[100dvh] px-6 flex items-center justify-center"
      style={{
        fontFamily: 'var(--font-neue-haas-normal)',
        letterSpacing: '-0.03em',
        // ✅ gradient, bottom MUST be white
        background: 'linear-gradient(180deg, #D6DEFF 0%, #EEF2FF 30%, #FFFFFF 60%, #FFFFFF 100%)',
      }}
    >
      <div className="w-full text-center">
      <h1 className="uppercase text-[clamp(5.6rem,22vw,8.4rem)] font-normal leading-[1]">
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
  );
};

export default HomeHero;
