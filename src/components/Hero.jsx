'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id='hero' className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-950/20 via-slate-950 to-cyan-950/20" />
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 2, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/30 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-300 text-sm font-medium">Trusted by 10,000+ Companies Worldwide</span>
                        </motion.div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                            >
                                <span className="bg-linear-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                                    The Modern
                                </span>
                                <br />
                                <span className="text-white">
                                    Platform for
                                </span>
                                <br />
                                <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    Cloud Development
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg  text-gray-400 max-w-xl leading-relaxed"
                            >
                                Deploy applications faster, scale effortlessly, and focus on what matters—building exceptional products that users love.
                            </motion.p>
                        </div>

                        {/* Feature List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                        >
                            {[
                                'No credit card required',
                                '14-day free trial',
                                'Setup in 2 minutes'
                            ].map((feature, i) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span className="text-sm text-gray-300">{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-start gap-4 mt-24"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg flex items-center gap-3 shadow-lg shadow-blue-500/50 overflow-hidden cursor-pointer"
                            >
                                <span className="relative z-10">Start Free Trial</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg font-semibold text-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all flex items-center gap-3 cursor-pointer"
                            >
                                <Play className="w-5 h-5 text-blue-400" />
                                <span>Watch Demo</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative lg:h-150 h-100 flex items-center justify-center"
                    >
                        {/* Glowing Background Effect */}
                        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

                        {/* Main Visual Container */}
                        <div className="relative w-full h-full">
                            {/* Dashboard/App Preview */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="relative w-full h-full bg-linear-to-br from-slate-900/90 to-slate-800/90 rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden backdrop-blur-sm"
                            >
                                {/* Mock Dashboard Content */}
                                <div className="p-6 space-y-4">
                                    {/* Header Bar */}
                                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                                <Sparkles className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="h-3 w-24 bg-white/20 rounded mb-1" />
                                                <div className="h-2 w-16 bg-white/10 rounded" />
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-400" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                            <div className="w-2 h-2 rounded-full bg-green-400" />
                                        </div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.7 + i * 0.1 }}
                                                className="p-4 rounded-lg bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
                                            >
                                                <div className="h-2 w-12 bg-blue-400/50 rounded mb-2" />
                                                <div className="h-6 w-16 bg-white/30 rounded" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Chart Area */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1 }}
                                        className="h-48 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-700/50 border border-white/5 p-4 relative overflow-hidden"
                                    >
                                        {/* Animated Chart Bars */}
                                        <div className="flex items-end justify-around h-full gap-2">
                                            {[60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${height}%` }}
                                                    transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                                                    className="flex-1 bg-linear-to-t from-blue-500 to-cyan-400 rounded-t"
                                                />
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Activity List */}
                                    <div className="space-y-2">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.5 + i * 0.1 }}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-cyan-500" />
                                                <div className="flex-1 space-y-1">
                                                    <div className="h-2 w-32 bg-white/30 rounded" />
                                                    <div className="h-2 w-24 bg-white/20 rounded" />
                                                </div>
                                                <div className="w-12 h-6 bg-green-500/20 rounded" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{
                                        y: [-10, 10, -10],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl shadow-cyan-500/50 flex items-center justify-center"
                                >
                                    <Sparkles className="w-12 h-12" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [10, -10, 10],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl shadow-2xl shadow-purple-500/50"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;