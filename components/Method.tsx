
import React from 'react';
import { useLang } from './LanguageContext';
import { motion } from 'framer-motion';

const Method: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section className="py-24 md:py-48 bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-24 items-center">
          <div className="lg:col-span-1">
            <div className="relative mb-12 lg:mb-0 group">
              <div className="absolute inset-0 bg-accent rounded-4xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <img
                src="/images/ugcrbandingimages (3).png"
                alt="Teaching Method"
                className="w-full aspect-[4/5] object-cover rounded-4xl shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 block">The Protocol</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-none">
              {t.method.title} <br />
              <span className="text-accent italic font-light">{t.method.dna}</span>
            </h2>
            <p className="text-white/40 text-xl leading-relaxed mb-12 max-w-sm">
              {t.method.desc}
            </p>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-16 gap-y-20">
            {t.method.steps.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border-b border-white/5 pb-12"
              >
                <span className="text-accent font-display text-4xl font-black block mb-6 opacity-20 group-hover:opacity-100 transition-all duration-700">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-accent transition-colors">
                  {method.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  {method.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
