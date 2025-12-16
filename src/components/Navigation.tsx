import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isDark: boolean;
}

const desktopMenuItems = [
  { label: 'WORK', path: '/work' },
  { label: 'STUDIO', path: '/studio' },

];

const mobileMenuItems = [
  { label: 'HOME', path: '/' },
  { label: 'WORK', path: '/work' },
  { label: 'STUDIO', path: '/studio' },
];

const easePremium = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

const Navigation: React.FC<NavigationProps> = ({ isDark }) => {
  const textColor = isDark ? 'text-white' : 'text-black';
  const panelBg = isDark ? 'bg-black' : 'bg-white';

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  React.useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* =========================
          DESKTOP (NO TOCAR)
          ========================= */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 items-center justify-between px-8 py-5 select-none bg-transparent transition-colors duration-500">
        {/* DECIFY a la izquierda */}
        <Link
          to="/"
          className={`${textColor} text-base font-normal transition hover:opacity-70`}
          style={{
            fontFamily: 'Neue Haas Display, sans-serif',
            letterSpacing: '-0.05em',
          }}
        >
          DECIFY
        </Link>

        {/* Menú central */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8">
            {desktopMenuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`${textColor} text-base font-normal transition hover:opacity-70`}
                  style={{
                    fontFamily: 'Neue Haas Display, sans-serif',
                    letterSpacing: '-0.05em',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* HOME a la derecha */}
        <Link
          to="/"
          className={`${textColor} text-base font-normal transition hover:opacity-70`}
          style={{
            fontFamily: 'Neue Haas Display, sans-serif',
            letterSpacing: '-0.05em',
          }}
        >
          HOME
        </Link>
      </header>

      {/* =========================
          MOBILE (DECIFY + MENU)
          ========================= */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 select-none bg-transparent transition-colors duration-500">
        {/* DECIFY (logo) */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={`${textColor} text-base font-normal transition hover:opacity-70`}
          style={{
            fontFamily: 'Neue Haas Display, sans-serif',
            letterSpacing: '-0.05em',
          }}
        >
          DECIFY
        </Link>

        {/* MENU */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className={`${textColor} text-base font-normal transition hover:opacity-70`}
          style={{
            fontFamily: 'Neue Haas Display, sans-serif',
            letterSpacing: '-0.05em',
          }}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          MENU
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 z-[60] transition-opacity duration-700 ${easePremium} ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-[85vw] max-w-[360px] ${panelBg} ${
              isDark ? 'text-white' : 'text-black'
            } shadow-2xl transition-transform duration-700 ${easePremium} ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ fontFamily: 'Neue Haas Display, sans-serif' }}
          >
            {/* TOP BAR: solo CLOSE (sin "MENU") */}
            <div className="flex items-center justify-end px-6 py-5 border-b border-black/10">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-normal hover:opacity-70 transition"
                style={{ letterSpacing: '-0.05em' }}
                aria-label="Close menu"
              >
                CLOSE
              </button>
            </div>

            {/* LINKS */}
            <nav className="px-6 py-10">
              <ul className="flex flex-col gap-6">
                {mobileMenuItems.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`
                          block uppercase font-normal transition
                          hover:opacity-70
                          ${active ? 'opacity-60' : 'opacity-100'}
                        `}
                        style={{
                          letterSpacing: '-0.03em',
                          fontSize: active ? 'clamp(1.35rem,6.2vw,1.9rem)' : 'clamp(1.8rem,8vw,2.4rem)',
                          lineHeight: 1.05,
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
