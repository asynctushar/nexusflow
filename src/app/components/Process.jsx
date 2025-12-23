'use client';

import { Globe, TrendingUp, Code, Rocket, } from 'lucide-react';
import { motion } from 'motion/react';

const process = [
    {
        step: "01",
        title: "Sign Up & Setup",
        description: "Create your account in 30 seconds. Connect your Git repository and configure your project with our intuitive setup wizard.",
        icon: Rocket
    },
    {
        step: "02",
        title: "Build & Test",
        description: "Write code in your favorite IDE. Push to Git and watch our CI/CD pipeline automatically test and build your application.",
        icon: Code
    },
    {
        step: "03",
        title: "Deploy Globally",
        description: "One click to deploy to production. Your app goes live on our global edge network in under 60 seconds.",
        icon: Globe
    },
    {
        step: "04",
        title: "Monitor & Scale",
        description: "Watch real-time metrics, receive intelligent alerts, and let auto-scaling handle traffic spikes automatically.",
        icon: TrendingUp
    }
];

const Process = () => {
    return (
        < section className="py-20 sm:py-32 px-4 sm:px-6" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block p-3 bg-blue-500/20 rounded-2xl mb-6"
                    >
                        <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        What We Do
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                        We provide a complete cloud platform that empowers developers and teams to build, deploy, and scale applications without infrastructure complexity.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
                    {process.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-linear-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur p-6 sm:p-8 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all h-full"
                            >
                                <div className="text-5xl sm:text-6xl font-bold text-blue-500/30 mb-4">{item.step}</div>
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6"
                                >
                                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                </motion.div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
                            </motion.div>
                            {i < process.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-blue-500 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Process;