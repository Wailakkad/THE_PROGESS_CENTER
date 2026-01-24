
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
              Establishment
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-primary leading-tight">
              Educational Excellence <br /> Beyond the Classroom.
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-lg text-primary/70 leading-relaxed">
                Founded on the belief that education should be as dynamic as the world we live in, The Progress Center provides a sanctuary for intellectual curiosity. Our approach transcends rote memorization, focusing instead on critical thinking and real-world application.
              </p>
              <p className="text-lg text-primary/70 leading-relaxed">
                Whether it's mastering complex algorithms or exploring the depths of classical literature, our students are guided by industry veterans and world-class academics who act as mentors, not just lecturers.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-display font-extrabold text-accent">98%</span>
                <span className="text-sm font-bold text-primary/50 uppercase tracking-widest">Alumni Success</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-extrabold text-accent">15+</span>
                <span className="text-sm font-bold text-primary/50 uppercase tracking-widest">Unique Labs</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-accent rounded-5xl rotate-3 group-hover:rotate-6 transition-transform duration-500 -z-10"></div>
            <img 
              src="https://picsum.photos/seed/learn/800/1000" 
              alt="Students learning" 
              className="w-full aspect-[4/5] object-cover rounded-5xl shadow-2xl transition-transform duration-500 group-hover:-rotate-2"
            />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-8 rounded-4xl shadow-2xl flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-display font-black text-primary italic">"Think"</span>
              <span className="text-xs font-bold text-accent uppercase tracking-widest mt-2">Our Motto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
