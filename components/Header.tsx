import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((v) => !v);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`glass-panel rounded-2xl flex items-center justify-between px-6 h-16 transition-all duration-500 ${scrolled ? 'bg-brand-dark/80 translate-y-0' : 'bg-transparent border-transparent shadow-none'
          }`}>
          {/* Logo */}
          <Link href="#home" className="relative h-20 w-72 group flex items-center">
            <Logo className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/9613046224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-2 text-sm font-bold text-white shadow-lg shadow-brand-accent/20 hover:bg-brand-gold-dark transition-all hover:scale-105 active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-brand-accent transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full px-4 pt-2 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}>
        <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-gray-200 hover:text-brand-accent hover:bg-white/5 rounded-xl transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/9613046224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand-accent px-5 py-4 text-base font-bold text-white shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}