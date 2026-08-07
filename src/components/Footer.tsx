import React from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const bg = isDark ? 'bg-black text-white' : 'bg-white text-black';
  const subtle = isDark ? 'text-white/60' : 'text-black/60';
  const border = isDark ? 'border-white/10' : 'border-black/10';

  const stack = 'flex flex-col gap-0.5';

  return (
    <footer
      className={`w-full transition-colors duration-700 ease-in-out ${bg}`}
      style={{ fontFamily: 'var(--font-neue-haas-light)' }}
    >
      <div className="md:hidden px-6 pt-12 pb-8 space-y-10 text-sm">
        <a href="/" className="inline-flex hover:opacity-70 transition">
          <img
            src="/images/LOGOnobackground.png"
            alt="Decify logo"
            className="h-6 w-auto"
          />
        </a>

        <div className={stack}>
          <p className={subtle}>General and Business</p>
          <a
            href="mailto:hellodecify@gmail.com"
            className="block hover:opacity-70 transition"
          >
            hellodecify@gmail.com
          </a>
        </div>

        <div className={stack}>
          <p className={subtle}>Positioning</p>
          <p className="block leading-relaxed">
            Fixed-scope websites and lightweight web apps for quote-driven service businesses.
          </p>
        </div>

        <div className={stack}>
          <p className={subtle}>Focus</p>
          <p className="block leading-relaxed">
            Clear scope, quote requests, CRM handoffs and commercial outcomes.
          </p>
        </div>

        <div className={stack}>
          <p className={subtle}>Social</p>
          <a
            href="https://www.instagram.com/thedecify"
            target="_blank"
            rel="noopener noreferrer"
            className="block tracking-wider hover:opacity-70 transition"
          >
            Instagram
          </a>
        </div>

        <div className={`border-t ${border} pt-4 text-xs ${subtle}`}>
          © 2025 DECIFY
        </div>
      </div>

      <div className="hidden md:block px-8 pt-16 pb-10">
        <div className="mb-12">
          <a href="/" className="inline-flex hover:opacity-70 transition">
            <img
              src="/images/LOGOnobackground.png"
              alt="Decify logo"
              className="h-6 w-auto"
            />
          </a>
        </div>

        <div className="grid grid-cols-4 text-sm items-start gap-8">
          <div className={stack}>
            <p className={subtle}>General and Business</p>
            <a
              href="mailto:hellodecify@gmail.com"
              className="block hover:opacity-70 transition"
            >
              hellodecify@gmail.com
            </a>
          </div>

          <div className={`${stack} items-start`}>
            <p className={subtle}>Positioning</p>
            <p className="block leading-relaxed">
              Fixed-scope websites and lightweight web apps for quote-driven service businesses.
            </p>
          </div>

          <div className={`${stack} items-start`}>
            <p className={subtle}>Focus</p>
            <p className="block leading-relaxed">
              Clear scope, quote requests, CRM handoffs and commercial outcomes.
            </p>
          </div>

          <div className={`${stack} items-end text-right`}>
            <p className={subtle}>Social</p>
            <a
              href="https://www.instagram.com/thedecify"
              target="_blank"
              rel="noopener noreferrer"
              className="block tracking-wider hover:opacity-70 transition"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className={`mt-12 border-t ${border} pt-6 text-xs ${subtle}`}>
          © 2025 DECIFY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
