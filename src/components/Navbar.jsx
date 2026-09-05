import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import sankalpLogo from '../assets/sankalp.jpg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  // Close mobile menu automatically on page/route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click / touch outside anywhere on screen to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Helped', path: '/helped' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="w-full bg-white border-b border-slate-100/90 sticky top-0 z-40 shadow-xs"
      >
        <div className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 h-17 sm:h-20 lg:h-22 flex items-center justify-between gap-2">

          {/* Left: Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-xl overflow-hidden flex items-center justify-center bg-white group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-2xs border border-slate-100/60 p-0.5">
              <img
                src={sankalpLogo}
                alt="Sankalp Logo"
                className="h-full w-full object-contain drop-shadow-xs"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[15px] sm:text-lg lg:text-2xl font-black text-[#0f172a] tracking-tight leading-none whitespace-nowrap">
                Sankalp Janseva
              </span>
              <span className="text-[9.5px] sm:text-[10.5px] lg:text-[12px] font-bold text-[#f59e0b] tracking-widest leading-none mt-1 uppercase">
                Foundation
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-semibold text-[15px] transition-colors py-2 ${isActive
                    ? 'text-[#f59e0b] font-bold border-b-2 border-[#f59e0b]'
                    : 'text-[#1e293b] hover:text-[#f59e0b]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Bar (Sleek & Harmonious on both Mobile & Desktop) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210?text=Namaskar%20Sankalp%20Janseva%20Foundation,%20I%20want%20to%20know%20more%20about%20your%20social%20work."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat with us on WhatsApp"
              className="h-8.5 sm:h-10 px-2.5 sm:px-4 rounded-full bg-emerald-50 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-emerald-200/80 flex items-center justify-center gap-1.5 shadow-2xs hover:shadow-sm active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">
                WhatsApp
              </span>
            </a>

            {/* Donate CTA Button */}
            <Link
              to="/donate"
              className="h-8.5 sm:h-10 px-3.5 sm:px-6 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Donate
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden h-8.5 w-8.5 sm:h-10 sm:w-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-5 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 relative z-40">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block font-semibold py-2.5 border-b border-slate-50 text-sm ${isActive ? 'text-[#f59e0b] font-bold' : 'text-slate-800 hover:text-[#f59e0b]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 space-y-2.5">
              <a
                href="https://wa.me/919876543210?text=Namaskar%20Sankalp%20Janseva%20Foundation,%20I%20want%20to%20know%20more%20about%20your%20social%20work."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-xs active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp वर संपर्क करा</span>
              </a>

              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm active:scale-95"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Backdrop Overlay - Click / tap outside to dismiss menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/35 backdrop-blur-2xs z-30 lg:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Floating Modern WhatsApp Chat Bubble */}
      <aside
        aria-label="WhatsApp Contact"
        className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center group"
      >
        <a
          href="https://wa.me/919876543210?text=Namaskar%20Sankalp%20Janseva%20Foundation,%20I%20want%20to%20know%20more%20about%20your%20social%20work."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Sankalp Foundation"
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          title="Chat with Sankalp Janseva Foundation on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
          <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </aside>
    </>
  );
};

export default Navbar;
