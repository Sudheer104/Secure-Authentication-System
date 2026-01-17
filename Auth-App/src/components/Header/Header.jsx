import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../Services/AuthService';

function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if user is logged in
  const isLoggedIn = AuthService.isLoggedIn(); // Make sure your AuthService has this method

  // Logout function
  const logOutUser = async () => {
    await AuthService.logoutUser();
    navigate('/login', { replace: true });
  };

  // Logout click handler with confirmation
  const handleLogoutClick = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to logout?')) {
      logOutUser();
    }
  };

  return (
    <header className="bg-teal-600 text-white font-semibold px-5 py-3">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/layout/home" className="link link-hover">Home</Link>
          <Link to="/layout/about" className="hover:underline">About</Link>
          <Link to="/layout/contact" className="hover:underline">Contact</Link>
          <Link to="/layout/updateProfile" className="hover:underline">Profile</Link>
          {isLoggedIn && (
            <button
              onClick={handleLogoutClick}
              className="text-white hover:underline"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Auth Buttons */}
        {!isLoggedIn && (
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => navigate('/login')}
              className="rounded-md bg-white text-teal-600 px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="rounded-md bg-white text-teal-600 px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              Register
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded bg-white text-teal-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-teal-500 text-white px-5 py-3">
          <ul className="flex flex-col gap-4">
            <li><Link to="/layout/home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/layout/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/layout/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/layout/updateProfile" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link></li>
            {isLoggedIn ? (
              <li>
                <button onClick={handleLogoutClick} className="w-full text-left">Logout</button>
              </li>
            ) : (
              <>
                <li><button onClick={() => { navigate('/login'); setIsMobileMenuOpen(false); }}>Login</button></li>
                <li><button onClick={() => { navigate('/register'); setIsMobileMenuOpen(false); }}>Register</button></li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
