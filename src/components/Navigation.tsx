import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isDark: boolean;
}

const pages = [
  { label: 'HOME', path: '/' },
  { label: 'WORK', path: '/work' },
  { label: 'STUDIO', path: '/studio' },
];

const easePremium = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

const Navigation: React.FC<NavigationProps> = ({ isDark }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // ============================
  // Hide on scroll down / show on scroll up
  // ============================
  const [navVisible, setNavVisible] = React.useState(true);
  const lastYRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const appEl = document.getElementById('app');
    const scrollEl: HTMLElement | Window = appEl ?? window;

    const getY = () =>
      scrollEl === window ? window.scrollY || 0 : (scrollEl as HTMLElement).scrollTop || 0;

    lastYRef.current = getY();
    setNavVisible(true);

    const onScroll = () => {
      if (isMenuOpen) return;

      const y = getY();
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        const delta = y - lastYRef.current;
        const DEADZONE = 6;

        if (y <= 8) setNavVisible(true);
        else if (Math.abs(delta) > DEADZONE) setNavVisible(delta < 0);

        lastYRef.current = y;
        rafRef.current = null;
      });
    };

    if (scrollEl === window) window.addEventListener('scroll', onScroll, { passive: true });
    else (scrollEl as HTMLElement).addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (scrollEl === window) window.removeEventListener('scroll', onScroll);
      else (scrollEl as HTMLElement).removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMenuOpen]);

  // Lock scroll
  React.useEffect(() => {
    const appEl = document.getElementById('app');
    if (isMenuOpen) {
      if (appEl) appEl.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      if (appEl) appEl.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const pathname = location.pathname || '/';
  const currentLabel =
    pathname === '/'
      ? 'HOME'
      : pathname.startsWith('/work')
      ? 'WORK'
      : 'STUDIO';

  const centerItems = pages.filter((p) => p.label !== currentLabel);

  const centerColor = isDark ? 'text-white' : 'text-black';
  const rightColor = isDark ? 'text-white/60' : 'text-black/45';

  const navMotion =
    'transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ' +
    (navVisible ? 'translate-y-0' : '-translate-y-full');

  const textStyle: React.CSSProperties = {
    fontFamily: 'Neue Haas Display, sans-serif',
    letterSpacing: '-0.05em',
  };

  return (
    <>
      {/* =========================
          DESKTOP
          ========================= */}
      <header className={`hidden md:block fixed top-0 left-0 w-full z-50 ${navMotion}`}>
        <div className="px-8 py-3 select-none">
          <div className="grid grid-cols-4 items-center">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <Link to="/" className="hover:opacity-70 transition">
                <img
                  src="/images/LOGOnobackground.png"
                  alt="Decify logo"
                  className="h-5 w-auto"
                  draggable={false}
                />
              </Link>
            </div>

            {/* Center 1 */}
            <div className="flex justify-center">
              <Link
                to={centerItems[0].path}
                className={`${centerColor} hover:opacity-70 transition uppercase`}
                style={textStyle}
              >
                {centerItems[0].label}
              </Link>
            </div>

            {/* Center 2 */}
            <div className="flex justify-center">
              <Link
                to={centerItems[1].path}
                className={`${centerColor} hover:opacity-70 transition uppercase`}
                style={textStyle}
              >
                {centerItems[1].label}
              </Link>
            </div>

            {/* Current */}
            <div className="flex justify-end">
              <span className={`${rightColor} uppercase`} style={textStyle}>
                {currentLabel}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================
          MOBILE
          ========================= */}
      <header className={`md:hidden fixed top-0 left-0 w-full z-50 ${navMotion}`}>
        <div className="px-6 py-3 flex items-center justify-between select-none">
          <Link to="/" className="hover:opacity-70 transition">
            <img
              src="/images/LOGOnobackground.png"
              alt="Decify logo"
              className="h-5 w-auto"
              draggable={false}
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            className={`${centerColor} hover:opacity-70 transition`}
            style={textStyle}
          >
            MENU
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE OVERLAY
          ========================= */}
      <div
        className={`fixed inset-0 z-[90] transition-opacity duration-700 ${easePremium} ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute inset-0 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
          style={{ fontFamily: 'Neue Haas Display, sans-serif' }}
        >
          <div className="flex items-center justify-between px-6 py-3">
            <img
              src="/images/LOGOnobackground.png"
              alt="Decify logo"
              className="h-5 w-auto"
              draggable={false}
            />

            <button onClick={() => setIsMenuOpen(false)} style={textStyle}>
              CLOSE
            </button>
          </div>

          <nav className="px-6 pt-8">
            <ul className="flex flex-col gap-5">
              {pages.map((p) => (
                <li key={p.label}>
                  <Link
                    to={p.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="uppercase hover:opacity-70 transition block"
                    style={{
                      fontSize: 'clamp(1.8rem,8vw,2.4rem)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
