import React from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const bg = isDark ? 'bg-black text-white' : 'bg-white text-black';
  const subtle = isDark ? 'text-white/60' : 'text-black/60';
  const border = isDark ? 'border-white/10' : 'border-black/10';

  // ✅ Consistent title/subtitle spacing everywhere (mobile + desktop)
  // Using gap instead of space-y to avoid inline <a> spacing inconsistencies.
  const stack = 'flex flex-col gap-0.5';

  return (
    <footer
      className={`w-full transition-colors duration-700 ease-in-out ${bg}`}
      style={{ fontFamily: 'var(--font-neue-haas-light)' }}
    >
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6 pt-12 pb-8 space-y-10 text-sm">
        {/* Logo */}
        <a href="/" className="inline-flex hover:opacity-70 transition">
          <img
            src="/images/LOGOnobackground.png"
            alt="Decify logo"
            className="h-6 w-auto"
          />
        </a>

        {/* 1) General and Business */}
        <div className={stack}>
          <p className={subtle}>General and Business</p>
          <a
            href="mailto:hellodecify@gmail.com"
            className="block hover:opacity-70 transition"
          >
            hellodecify@gmail.com
          </a>
        </div>

        {/* 2) Studio */}
        <div className={stack}>
          <p className={subtle}>Studio</p>
          <p className="block leading-relaxed">
            Any idea, any mindset, to experience.
          </p>
        </div>

        {/* 3) Social */}
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

        {/* Bottom */}
        <div className={`border-t ${border} pt-4 text-xs ${subtle}`}>
          © 2025 DECIFY
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block px-8 pt-16 pb-10">
        {/* Logo */}
        <div className="mb-12">
          <a href="/" className="inline-flex hover:opacity-70 transition">
            <img
              src="/images/LOGOnobackground.png"
              alt="Decify logo"
              className="h-6 w-auto"
            />
          </a>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-3 text-sm items-start">
          {/* LEFT */}
          <div className={stack}>
            <p className={subtle}>General and Business</p>
            <a
              href="mailto:hellodecify@gmail.com"
              className="block hover:opacity-70 transition"
            >
              hellodecify@gmail.com
            </a>
          </div>

          {/* CENTER */}
          <div className={`${stack} items-center text-center`}>
            <p className={subtle}>Studio</p>
            <p className="block leading-relaxed">
              Any idea, any mindset, to experience.
            </p>
          </div>

          {/* RIGHT */}
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

        {/* Bottom */}
        <div className={`mt-12 border-t ${border} pt-6 text-xs ${subtle}`}>
          © 2025 DECIFY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
