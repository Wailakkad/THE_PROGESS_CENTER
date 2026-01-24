
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-primary/5 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-lg font-display font-extrabold text-primary">PROGRESS</span>
            </div>
            <p className="text-primary/60 text-sm leading-relaxed">
              Pioneering educational paths for tomorrow's leaders.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Explore</h4>
            <ul className="space-y-4 text-sm text-primary/70 font-medium">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">News & Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-primary/70 font-medium">
              <li>123 Education Lane,</li>
              <li>New York, NY 10001</li>
              <li>hello@progresscenter.edu</li>
              <li>+1 (555) 000-1234</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Follow Us</h4>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                <a key={platform} href="#" className="w-10 h-10 border border-primary/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                  <span className="sr-only">{platform}</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.4em]">
            © 2024 THE PROGRESS CENTER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.4em] hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.4em] hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
