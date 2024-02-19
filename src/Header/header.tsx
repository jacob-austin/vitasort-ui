// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Utilities/theme-context';
import logo from '../logo.svg';
import './header.scss';

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <div className="logo-container">
        <Link to="/">
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