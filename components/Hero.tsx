
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from './LanguageContext';

const Hero: React.FC = () => {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-[-12deg] translate-x-1/4 -z-10 opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-6xl md:text-9xl font-display font-extrabold text-primary leading-[0.9] tracking-tighter">
                {t.hero.titleTop} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent pb-2 block">
                  {t.hero.titleBottom}
                </span>
              </h1>

              <div className="mt-16 flex flex-col md:flex-row md:items-end gap-12">
                <p className="text-xl md:text-2xl text-primary/50 leading-relaxed font-medium max-w-xl">
                  {t.hero.desc}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <button className="px-10 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-accent transition-all shadow-2xl shadow-primary/20 transform hover:-translate-y-1">
                    {t.hero.cta1}
                  </button>
                  <button className="px-10 py-5 bg-white border border-primary/5 text-primary rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                    {t.hero.cta2}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-px h-16 bg-primary animate-[bounce_2s_infinite]"></div>
      </div>
    </section>
  );
};

export default Hero;
