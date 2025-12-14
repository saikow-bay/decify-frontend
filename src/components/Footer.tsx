import React from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const bg = isDark ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <footer
      className={`w-full transition-colors duration-700 ease-in-out ${bg}`}
      style={{ fontFamily: 'var(--font-neue-haas-light)' }}
    >
      <div className="px-8 md:px-24 pt-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        {/* Logo + Contactos */}
        <div className="space-y-6">
        <div
  className={`${isDark ? 'text-white' : 'text-black'} text-base font-normal transition hover:opacity-70`}
  style={{
    fontFamily: 'Neue Haas Display, sans-serif',
    letterSpacing: '-0.05em',
  }}
>
  DECIFY
</div>
          <div>
            <p className="text-gray-500">General and New Business</p>
            <p>hellodecify@gmail.com</p>
          </div>
        </div>

        {/* Oficinas */}
        
      </div>

      {/* Bottom */}
      <div className="px-8 md:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
        <p>© 2025 DECIFY. All rights reserved.</p>
        <div className="flex gap-4 flex-wrap justify-center uppercase tracking-wider">
        <a
  href="https://www.instagram.com/thedecify"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:opacity-60 transition"
>
  Instagram
</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
