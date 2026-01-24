
import React from 'react';
import { EDUCATORS } from '../constants';

const Educators: React.FC = () => {
  return (
    <section id="educators" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-6">
            Meet the <span className="text-accent">Visionaries.</span>
          </h2>
          <p className="text-lg text-primary/70">
            Our educators are leaders in their respective fields, bringing decades of experience and a passion for mentorship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {EDUCATORS.map((educator) => (
            <div key={educator.id} className="group">
              <div className="relative overflow-hidden rounded-5xl mb-8 aspect-[4/5]">
                <img 
                  src={educator.image} 
                  alt={educator.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <p className="text-white/90 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {educator.bio}
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                {educator.name}
              </h3>
              <p className="text-primary/50 font-bold text-xs uppercase tracking-widest mt-2">
                {educator.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educators;
