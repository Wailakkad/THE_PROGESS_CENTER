
import React, { useState, useEffect } from 'react';
import { useLang } from './LanguageContext';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t, isRtl } = useLang();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: t.nav.about },
    { href: '/#programs', label: t.nav.programs },
    { href: '/#educators', label: t.nav.team },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled || isAuthPage ? 'bg-white/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="The Progress Center Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-8 items-center border-r border-primary/10 px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/60 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <div className="bg-primary/5 p-1 rounded-full flex relative">
              <motion.div
                layoutId="activeLang"
                className="absolute inset-y-1 bg-white rounded-full shadow-sm"
                style={{
                  width: 'calc(50% - 4px)',
                  left: lang === 'fr' ? '4px' : 'calc(50% + 1px)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setLang('fr')}
                className={`relative z-10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-colors ${lang === 'fr' ? 'text-primary' : 'text-primary/40'}`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`relative z-10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-colors ${lang === 'ar' ? 'text-primary' : 'text-primary/40'}`}
              >
                AR
              </button>
            </div>

            <div className="flex items-center gap-4 border-l border-primary/10 pl-6">
              <Link
                to="/login"
                className="text-[11px] font-black uppercase tracking-widest text-primary/60 hover:text-primary transition-colors"
              >
                {lang === 'ar' ? 'تسجيل الدخول' : 'Connexion'}
              </Link>
              <Link
                to="/register"
                className="px-8 py-3.5 bg-primary text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-accent transition-all transform hover:scale-105 shadow-xl shadow-primary/10"
              >
                {t.nav.enroll}
              </Link>
            </div>
          </div>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <div className="w-6 h-0.5 bg-primary"></div>
          <div className="w-4 h-0.5 bg-primary self-end"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
