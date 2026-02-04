import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '../components/LanguageContext';
import AuthCarousel from '../components/AuthCarousel';

const Register: React.FC = () => {
    const { t, isRtl } = useLang();

    return (
        <div className={`min-h-screen bg-white flex flex-col md:flex-row ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>

            {/* Left Side: Auth Form (40% width) */}
            <div className="w-full md:w-[40%] flex items-center justify-center py-12 px-6 md:px-16 lg:px-20 bg-white">
                <div className="w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-12">
                            <h1 className="text-4xl font-display font-black text-primary mb-4 leading-tight">
                                {t.auth.register.title}
                            </h1>
                            <p className="text-gray-500 font-medium italic mb-2">
                                {t.auth.register.subtitle} <Link to="/login" className="text-blue-600 font-bold hover:underline">{t.auth.register.login}</Link>
                            </p>
                        </div>

                        {/* Google Signup */}
                        <button className="w-full flex items-center justify-center gap-4 px-6 py-4 border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all mb-10 shadow-sm group">
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.87 0-5.3-1.94-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.86-2.59 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            <span className="text-[13px] font-black uppercase tracking-wider">{t.auth.register.google}</span>
                        </button>

                        {/* Separator */}
                        <div className="relative mb-10">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                            <span className="relative flex justify-center text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] bg-white px-6">
                                {t.auth.register.or}
                            </span>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] ml-1">
                                    {t.auth.register.fullName}
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all text-primary font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] ml-1">
                                    {t.auth.register.email}
                                </label>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all text-primary font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] ml-1">
                                    {t.auth.register.password}
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all text-primary font-medium"
                                />
                            </div>

                            <div className="flex items-start gap-4 pt-2">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary mt-1 cursor-pointer" />
                                <span className="text-xs font-bold text-gray-500 leading-relaxed uppercase tracking-tight">
                                    {t.auth.register.agree} <a href="#" className="text-blue-600 hover:underline cursor-pointer">{t.auth.register.terms}</a> {t.auth.register.and} <a href="#" className="text-blue-600 hover:underline cursor-pointer">{t.auth.register.privacy}</a>.
                                </span>
                            </div>

                            <button className="w-full py-5 bg-primary text-white rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all shadow-xl shadow-primary/10 mt-6 active:scale-[0.99] transition-transform">
                                {t.auth.register.cta}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Image/Teacher Section (60% width) */}
            <div className="hidden md:block md:w-[60%] h-screen sticky top-0 bg-gray-50/30">
                <AuthCarousel />
            </div>

            {/* Mobile Carousel - Displayed at bottom for context */}
            <div className="md:hidden w-full pb-12">
                <AuthCarousel />
            </div>
        </div>
    );
};

export default Register;
