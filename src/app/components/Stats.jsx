'use client';

import { motion } from 'motion/react';

const stats = [
    { value: "10M+", label: "Active Developers" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "150+", label: "Global Regions" },
    { value: "<50ms", label: "Response Time" }
];

const Stats = () => {
    return (
        < section className="py-16 sm:py-20 border-y border-blue-500/20 bg-slate-900/50 backdrop-blur" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", delay: i * 0.1 + 0.2 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Stats;