'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-24 sm:pt-20 px-4 sm:px-6">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 2, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30"
                    >
                        <span className="text-blue-300 text-sm sm:text-base">✨ Trusted by 10,000+ Companies Worldwide</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent leading-tight px-4">
                        The Modern Platform<br />for Cloud Development
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-md sm:text-lg  text-gray-400 mb-12 max-w-3xl mx-auto px-4"
                    >
                        Deploy applications faster, scale effortlessly, and focus on what matters—building exceptional products that users love.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-sm font-semibold text-base sm:text-lg flex items-center justify-center space-x-2   cursor-pointer"
                        >
                            <span>Start Free Trial</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur rounded-sm font-semibold text-base sm:text-lg border border-white/20  cursor-pointer"
                        >
                            Watch Demo
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 text-gray-500 text-sm sm:text-md px-4"
                    >
                        No credit card required • 14-day free trial • Cancel anytime • Setup in 2 minutes
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-16 sm:mt-20"
                >
                    <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto animate-bounce text-blue-400" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;