import { useState } from 'react';

export default function ValuesSection({ isDark }: { isDark: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const values = [
    {
      label: 'ARTISTRY',
      description:
        'WE APPROACH EVERY PROJECT AS A VISUAL COMPOSITION—CRAFTED WITH AESTHETIC DISCIPLINE.',
    },
    {
      label: 'PRECISION',
      description:
        'FROM PIXEL TO INTERACTION, WE OBSESS OVER EVERY LINE, TRANSITION AND FRAME.',
    },
    {
      label: 'OBSESSION',
      description:
        'WE’RE RELENTLESSLY COMMITTED TO DETAIL. THAT’S WHERE THE MAGIC LIVES.',
    },
  ];

  return (
    <section
      className={`w-full min-h-[100svh] md:min-h-screen px-6 md:px-24 py-32 font-sans transition-colors duration-700
        ${isDark ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    >
      {/* ------------------ MOBILE (md:hidden) ------------------ */}
      <div className="md:hidden flex flex-col gap-12">
        <h2
          className="uppercase text-[clamp(2.2rem,10vw,3.2rem)] leading-[0.95]"
          style={{
            fontFamily: 'var(--font-neue-haas-normal)',
            letterSpacing: '-0.04em',
          }}
        >
          WHAT WE DO
        </h2>

        <div className="flex flex-col gap-6">
          {values.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveIndex(isActive ? null : idx)}
                className="text-left py-2"
              >
                {/* Label */}
                <div
                  className={`uppercase transition-colors duration-500
                    ${
                      isActive
                        ? isDark
                          ? 'text-white'
                          : 'text-black'
                        : isDark
                        ? 'text-neutral-500'
                        : 'text-neutral-400'
                    }
                  `}
                  style={{
                    fontFamily: 'var(--font-neue-haas-normal)',
                    fontSize: 'clamp(2.0rem, 9vw, 2.8rem)',
                    lineHeight: 1.0,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {item.label}
                </div>

                {/* Description (smooth accordion, no max-height jank) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity,margin-top] duration-500 ease-out ${
                    isActive
                      ? 'grid-rows-[1fr] opacity-100 mt-7'
                      : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className={`text-[13px] uppercase font-light leading-[1.7] ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                      style={{ fontFamily: 'var(--font-neue-haas-light)' }}
                    >
                      {item.description}
                    </p>
                    {/* extra breathing room under expanded text */}
                    <div className="h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ------------------ DESKTOP (hidden md:block) ------------------ */}
      <div
        className="hidden md:block"
        onMouseLeave={() => setActiveIndex(null)}
      >
        <div className="flex flex-col gap-20">
          {values.map((item, idx) => (
            <div
              key={item.label}
              onMouseEnter={() => setActiveIndex(idx)}
              onTouchStart={() => setActiveIndex(idx)}
              className="grid md:grid-cols-12 items-center group cursor-pointer"
            >
              {/* TÍTULO */}
              <div
                className="col-span-5 text-[clamp(2.5rem,7vw,6rem)] uppercase tracking-tight font-normal leading-[1.1]"
                style={{ fontFamily: 'var(--font-neue-haas-normal)' }}
              >
                <span
                  className={`transition-colors duration-500 ${
                    activeIndex === idx
                      ? isDark
                        ? 'text-white'
                        : 'text-black'
                      : isDark
                      ? 'text-neutral-700'
                      : 'text-neutral-300'
                  }`}
                >
                  {item.label}
                </span>
              </div>

              {/* LÍNEA */}
              <div className="col-span-2 hidden md:flex justify-center">
                {activeIndex === idx && (
                  <div
                    className={`h-[2px] w-full transition-all duration-500 ${
                      isDark ? 'bg-white' : 'bg-black'
                    }`}
                  />
                )}
              </div>

              {/* DESCRIPCIÓN */}
              <div className="col-span-5 pl-12">
                <div
                  className={`transition-all duration-700 transform ${
                    activeIndex === idx
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4 pointer-events-none'
                  }`}
                >
                  <p
                    className={`text-base md:text-lg font-light max-w-md leading-relaxed uppercase transition-colors duration-500
                      ${isDark ? 'text-neutral-300' : 'text-neutral-700'}
                    `}
                    style={{
                      fontFamily: 'var(--font-neue-haas-light)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
