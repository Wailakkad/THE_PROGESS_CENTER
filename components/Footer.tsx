
import React from 'react';
import { useLang } from './LanguageContext';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLang();

  const socialLinks = [
    { platform: 'Facebook', icon: Facebook, href: '#' },
    { platform: 'Instagram', icon: Instagram, href: '#' },
    { platform: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="py-20 border-t border-primary/5 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/images/logo.png"
                alt="The Progress Center Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-primary/60 text-sm leading-relaxed">
              {t.hero.desc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Explore</h4>
            <ul className="space-y-4 text-sm text-primary/70 font-medium">
              <li><a href="#about" className="hover:text-accent transition-colors">{t.nav.about}</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">{t.nav.programs}</a></li>
              <li><a href="#educators" className="hover:text-accent transition-colors">{t.nav.team}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-primary/70 font-medium">
              <li>{t.footer.address}</li>
              <li>{t.footer.email}</li>
              <li>{t.footer.phone}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ platform, icon: Icon, href }) => (
                <a key={platform} href={href} className="w-10 h-10 border border-primary/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all text-primary/60">
                  <span className="sr-only">{platform}</span>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.4em]">
            {t.footer.rights}
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
