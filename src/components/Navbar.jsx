import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import sankalpLogo from '../assets/sankalp.jpg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Helped', path: '/helped' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-100/80 sticky top-0 z-50 shadow-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Left: Brand Logo with uploaded sankalp.jpg */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl overflow-hidden flex items-center justify-center bg-white group-hover:scale-105 transition-transform duration-300">
            <img 
              src={sankalpLogo} 
              alt="Sankalp Logo" 
              className="h-full w-full object-contain drop-shadow-xs"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight leading-none">
              Sankalp Janseva
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold text-[#f59e0b] tracking-widest leading-tight mt-1 uppercase">
              Foundation
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links with NavLink Active Styling */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold text-[15px] transition-colors py-2 ${
                  isActive
                    ? 'text-[#f59e0b] font-bold border-b-2 border-[#f59e0b]'
                    : 'text-[#1e293b] hover:text-[#f59e0b]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: WhatsApp Button + Donate Us CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* WhatsApp Direct Chat Button */}
          <a
            href="https://wa.me/919876543210?text=Namaskar%20Sankalp%20Janseva%20Foundation,%20I%20want%20to%20know%20more%20about%20your%20social%20work."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xs hover:shadow-md hover:scale-105 transition-all duration-200"
            title="Chat with us on WhatsApp"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          <Link
            to="/contact"
            className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-[14px] sm:text-[15px] px-7 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            Donate Us
          </Link>
        </div>

        {/* Mobile menu toggle & actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="https://wa.me/919876543210?text=Namaskar%20Sankalp%20Janseva%20Foundation,%20I%20want%20to%20know%20more%20about%20your%20social%20work."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          <Link
            to="/contact"
            className="bg-[#f59e0b] text-white font-bold text-xs px-4 py-1.5 rounded-full sm:hidden"
          >
            Donate Us
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block font-semibold py-2 border-b border-slate-50 text-sm ${
                  isActive ? 'text-[#f59e0b] font-bold' : 'text-slate-800 hover:text-[#f59e0b]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-3 space-y-2">
            <a
              href="https://wa.me/919876543210?text=Namaskar%20Sankalp%20Janseva%20Foundation,%20I%20want%20to%20know%20more%20about%20your%20social%20work."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center bg-[#f59e0b] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm"
            >
              Donate Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
