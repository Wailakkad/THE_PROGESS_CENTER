
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-40 px-6">
      <div className="container mx-auto">
        <div className="bg-accent rounded-5xl p-12 md:p-24 text-center overflow-hidden relative">
          {/* Abstract circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 leading-tight">
              Ready to start <br /> your journey?
            </h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-12">
              Join a community of forward-thinkers. Enrollment for the upcoming session is now open. Seats are limited.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                Apply for Enrollment
              </button>
              <button className="px-12 py-5 bg-white text-primary rounded-full font-bold uppercase tracking-widest text-sm hover:bg-bg-light-purple transition-all">
                Request Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
