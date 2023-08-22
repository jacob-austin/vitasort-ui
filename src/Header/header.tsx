// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Utilities/theme-context';
import './header.scss';

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <div className="logo-container">
        {/* Wrap the logo in a Link component */}
        <Link to="/">
          {/* This is a placeholder. Replace this div with your SVG logo */}
          <div className="logo-placeholder">LOGO</div>
        </Link>
      </div>

      <nav>
        <Link to="/search">Search</Link>
      </nav>

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
}


export default Header;