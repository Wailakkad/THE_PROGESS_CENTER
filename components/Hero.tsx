
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from './LanguageContext';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-105">
        <div className="absolute inset-0 bg-primary/60 md:bg-primary/50 z-10 backdrop-blur-[1px]"></div>
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/ugcrbandingimages%20(7).png"
          alt="The Progress Center Classroom"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-[-12deg] translate-x-1/4 z-0 opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-6xl md:text-9xl font-display font-extrabold text-white leading-[0.9] tracking-tighter">
                {t.hero.titleTop} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-accent pb-2 block">
                  {t.hero.titleBottom}
                </span>
              </h1>

              <div className="mt-16 flex flex-col md:flex-row md:items-end gap-12">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-xl">
                  {t.hero.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <Link
                    to="/register"
                    className="px-10 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-accent transition-all shadow-2xl shadow-primary/20 transform hover:-translate-y-1 text-center"
                  >
                    {t.hero.cta1}
                  </Link>
                  <Link
                    to="/register"
                    className="px-10 py-5 bg-white border border-primary/5 text-primary rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 text-center"
                  >
                    {t.hero.cta2}
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 z-20">
        <div className="w-px h-16 bg-white animate-[bounce_2s_infinite]"></div>
      </div>
    </section>
  );
};

export default Hero;
