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
      className={`w-full min-h-screen px-6 md:px-24 py-32 font-sans transition-colors duration-700
        ${isDark ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    >
      <div
        className="flex flex-col gap-20"
        onMouseLeave={() => setActiveIndex(null)}
      >
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
                    ${
                      isDark
                        ? 'text-neutral-300'
                        : 'text-neutral-700'
                    }
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
    </section>
  );
}
