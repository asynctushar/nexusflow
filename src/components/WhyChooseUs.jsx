'use client';

import { motion, } from 'motion/react';
import { Target, Award, Clock, Lock, Headphones, Heart, } from 'lucide-react';

const whyChooseUs = [
    {
        icon: Target,
        title: "Built for Scale",
        description: "From startup to enterprise, our platform grows with you. Handle millions of users without breaking a sweat or changing your code."
    },
    {
        icon: Clock,
        title: "Lightning Fast",
        description: "Optimized infrastructure and smart caching deliver sub-50ms response times globally. Your users will feel the difference."
    },
    {
        icon: Award,
        title: "Industry Leading",
        description: "Trusted by Fortune 500 companies and innovative startups. Winner of 'Best Developer Platform 2024' by DevOps Magazine."
    },
    {
        icon: Lock,
        title: "Security First",
        description: "SOC 2 Type II certified with regular penetration testing. We protect your data like it's our own, because it is."
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Real humans, real help, anytime. Our average response time is under 2 hours, with 95% satisfaction rating."
    },
    {
        icon: Heart,
        title: "Developer Love",
        description: "Built by developers who faced the same pain points. We obsess over DX details so you can focus on building great products."
    }
];

const WhyChooseUs = () => {
    return (
        < section id="why-us" className="py-20 sm:py-32 px-4 sm:px-6" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Why Choose <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">NexusFlow</span>
                    </h2>
                    <p className="text-md sm:text-lg text-gray-400 max-w-3xl mx-auto">
                        We're not just another cloud platform. We're your partner in building the future.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {whyChooseUs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02}}
                            className="bg-linear-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur p-6 sm:p-8 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.6 }}
                                className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/40"
                            >
                                <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default WhyChooseUs;