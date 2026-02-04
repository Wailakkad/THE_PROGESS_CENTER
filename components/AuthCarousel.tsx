import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const AuthCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full h-full p-6 md:p-12 lg:p-16">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-primary shadow-2xl group">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={TESTIMONIALS[currentIndex].image}
                            alt={TESTIMONIALS[currentIndex].author}
                            className="w-full h-full object-cover scale-105"
                        />
                        {/* Dark gradient overlay for readability - positioned at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Brand Logo - Top Left */}
                <div className="absolute top-10 left-10 z-20">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl">
                        <img src="/images/logo.png" alt="Progress Center" className="h-10 w-auto" />
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-12 left-10 right-10 z-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-white text-2xl md:text-3xl font-display font-medium mb-8 leading-tight tracking-tight">
                                "{TESTIMONIALS[currentIndex].content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-10 bg-gradient-to-r from-[#FF0080] to-[#7928CA]" />
                                <div>
                                    <h4 className="text-white font-bold text-lg leading-none mb-1">
                                        {TESTIMONIALS[currentIndex].author}
                                    </h4>
                                    <p className="text-white/60 text-sm font-medium">
                                        {TESTIMONIALS[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* 5-Segment Progress Indicators */}
                    <div className="mt-12 flex gap-3">
                        {TESTIMONIALS.slice(0, 5).map((_, idx) => (
                            <div
                                key={idx}
                                className="h-[4px] flex-1 bg-white/20 rounded-full overflow-hidden"
                            >
                                {idx === currentIndex && (
                                    <motion.div
                                        key={`progress-${currentIndex}`}
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 3, ease: "linear" }}
                                        className="h-full bg-gradient-to-r from-[#FF0080] to-[#7928CA]"
                                    />
                                )}
                                {idx < currentIndex && (
                                    <div className="h-full w-full bg-white/40" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthCarousel;
