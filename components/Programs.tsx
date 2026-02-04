
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../constants';
import { useLang } from './LanguageContext';

const Programs: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section id="programs" className="py-24 md:py-40 bg-bg-light-purple">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-6">
              {t.programs_section.title} <span className="text-secondary italic">{t.programs_section.italic}</span>
            </h2>
            <p className="text-lg text-primary/70">
              {t.programs_section.desc}
            </p>
          </div>
          <button className="flex items-center gap-2 group text-primary font-bold uppercase tracking-widest text-sm whitespace-nowrap">
            {t.programs_section.viewAll}
            <ArrowRight className={`w-5 h-5 transition-transform ${isRtl ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-5xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={program.image}
                  alt={isRtl ? program.title_ar : program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3 block">
                  {isRtl ? program.category_ar : program.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {isRtl ? program.title_ar : program.title}
                </h3>
                <p className="text-primary/60 mb-8 leading-relaxed">
                  {isRtl ? program.description_ar : program.description}
                </p>
                <button className="px-6 py-3 border border-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all">
                  {t.programs_section.learnMore}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
