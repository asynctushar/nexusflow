'use client';

import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    return (
        <header>
            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl z-40 border-b border-blue-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                        >
                            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                            <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                NexusFlow
                            </span>
                        </motion.div>

                        <div className="hidden lg:flex items-center space-x-8">
                            {['Features', 'Why Us', 'Pricing', 'Testimonials'].map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="hover:text-blue-400 transition-colors text-sm font-medium"
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-2 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30"
                            >
                                Get Started
                            </motion.button>
                        </div>

                        <motion.button
                            className="lg:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-blue-500/20"
                        >
                            <div className="px-4 py-6 space-y-4">
                                {['Features', 'Why Us', 'Pricing', 'Testimonials'].map((item, i) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block py-2 hover:text-blue-400 transition-colors font-medium"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30"
                                >
                                    Get Started Free
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;