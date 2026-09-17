'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, FileDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Lock body scroll and handle Escape key when mobile menu drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.classList.add('overflow-hidden');
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0b2545]/95 backdrop-blur-md border-b border-[#061a30] shadow-md shadow-navy-dark/30'
          : 'bg-[#0b2545]/90 backdrop-blur-sm border-b border-[#0f2942]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            aria-label="Yoider Murillo Salazar - Ir al inicio"
            className="flex items-center gap-2.5 text-white group py-2"
          >
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
              <Code2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight">
              Yoider Murillo
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}

            {/* Quick CV Download in Navbar */}
            <a
              href={portfolioData.hero.cvDownloadUrl}
              download="cv-yoider-murillo.pdf"
              aria-label="Descargar CV en PDF"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-white/15 border border-white/25 hover:bg-white/25 transition-all duration-150 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
              <span>CV PDF</span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          data-testid="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 bg-[#0b2545] border-b border-[#061a30] px-4 pt-4 pb-6 shadow-2xl animate-fade-in"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors min-h-[44px]"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href={portfolioData.hero.cvDownloadUrl}
                download="cv-yoider-murillo.pdf"
                onClick={handleNavClick}
                aria-label="Descargar CV en PDF"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold bg-white text-[#0b2545] hover:bg-slate-100 shadow-md transition-colors min-h-[44px]"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                <span>Descargar CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
