import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isDark: boolean;
}

const menuItems = [
  { label: 'WORK', path: '/work' },
  { label: 'STUDIO', path: '/studio' },
  { label: 'THINKERS', path: '/thinkers' },

];

const Navigation: React.FC<NavigationProps> = ({ isDark }) => {
  const textColor = isDark ? 'text-white' : 'text-black';

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 select-none bg-transparent transition-colors duration-500">
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
          {menuItems.map((item) => (
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
  );
};

export default Navigation;
