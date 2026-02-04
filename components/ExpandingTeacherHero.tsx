
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from './LanguageContext';
import { Link } from 'react-router-dom';

const ExpandingTeacherHero: React.FC = () => {
    const { t, isRtl } = useLang();
    const [activeIndex, setActiveIndex] = useState(0);

    const teachers = [
        {
            name: "Madiha El Achiki",
            subject: isRtl ? "الاقتصاد العام والإحصاء" : "Économie Générale et Statistique",
            shortName: isRtl ? "اقتصاد" : "G. Économique",
            image: "/images/ecomomic_generale_stastique.png",
            topics: "120"
        },
        {
            name: "Badr MAHDI",
            subject: isRtl ? "تنظيم المقاولات" : "Économie & Organisation Administrative",
            shortName: isRtl ? "تنظيم" : "Organisation",
            image: "/images/economic_organization.png",
            topics: "85"
        },
        {
            name: "Az eddine TEODORO",
            subject: isRtl ? "المحاسبة والرياضيات المالية" : "Comptabilité & Math Financières",
            shortName: isRtl ? "محاسبة" : "Gestion",
            image: "/images/ugcrbandingimages%20(1).png",
            topics: "110"
        },
        {
            name: "Rachid DAMOUH",
            subject: isRtl ? "الرياضيات" : "Mathématiques",
            shortName: isRtl ? "رياضيات" : "Mathématiques",
            image: "/images/ugcrbandingimages%20(6).png",
            topics: "150"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

                    {/* Left Content (40%) */}
                    <div className="w-full lg:w-[40%] space-y-10 text-start">
                        <h1 className="text-[5rem] font-bold leading-[1] text-[#1A1A1A] tracking-tighter font-sans">
                            {t.expanding_hero.watch}<br />{t.expanding_hero.learn}<br />{t.expanding_hero.grow}
                        </h1>

                        <div className="flex max-w-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder={t.expanding_hero.placeholder}
                                className="flex-1 px-6 py-5 bg-white border-none focus:outline-none text-lg"
                            />
                            <Link
                                to="/register"
                                className="bg-[#9BC085] text-white px-10 py-5 font-bold text-lg hover:bg-opacity-90 transition-all text-center"
                            >
                                {t.expanding_hero.go}
                            </Link>
                        </div>
                    </div>

                    {/* Right Gallery (60%) */}
                    <div className="w-full lg:w-[60%] flex gap-4 h-[600px]">
                        {teachers.map((teacher, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    initial={false}
                                    animate={{
                                        flex: isActive ? 3 : 0.5,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.32, 0.72, 0, 1]
                                    }}
                                    className="relative h-full cursor-pointer rounded-[20px] overflow-hidden group shadow-2xl"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={teacher.image}
                                        alt={teacher.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay for Inactive */}
                                    <div className={`absolute inset-0 bg-primary/40 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />

                                    {/* Vertical Label (Inactive) */}
                                    <AnimatePresence>
                                        {!isActive && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
                                            >
                                                <span
                                                    className="text-white font-bold text-xl whitespace-nowrap tracking-[0.2em] uppercase"
                                                    style={{
                                                        writingMode: 'vertical-rl',
                                                        transform: 'rotate(180deg)',
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    {teacher.shortName}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Horizontal Info (Active) */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ delay: 0.2 }}
                                                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent text-white"
                                            >
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <h3 className="text-3xl font-bold font-display">{teacher.subject}</h3>
                                                        <p className="text-white/70 text-lg font-medium">{teacher.name}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="block text-4xl font-black">{teacher.topics}</span>
                                                        <span className="text-xs font-bold uppercase tracking-widest opacity-60">Topics</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExpandingTeacherHero;
