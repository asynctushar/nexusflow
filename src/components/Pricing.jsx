'use client';

import { motion, } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "29",
        description: "Perfect for side projects and small applications",
        features: ["5 Projects", "50GB Storage", "100K API Requests/mo", "Basic Support (48h)", "SSL Certificate", "Custom Domain", "Automatic Backups"]
    },
    {
        name: "Professional",
        price: "79",
        description: "Best for growing teams and production apps",
        features: ["Unlimited Projects", "500GB Storage", "1M API Requests/mo", "Priority Support (4h)", "Advanced Analytics", "Team Collaboration (10 seats)", "Custom Integrations", "SLA 99.9%"],
        popular: true
    },
    {
        name: "Enterprise",
        price: "299",
        description: "For large organizations with custom needs",
        features: ["Everything in Pro", "Unlimited Storage", "Unlimited API Requests", "Dedicated Support 24/7", "SLA 99.99%", "Unlimited Team Members", "Custom Contracts", "On-premise Option", "Security Audit"]
    }
];

const Pricing = () => {
    return (
        < section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 bg-slate-900/50" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Simple, Transparent <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
                    </h2>
                    <p className="text-md sm:text-lg text-gray-400">Choose the perfect plan that scales with your ambitions</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6 sm:gap-12">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className={`bg-linear-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur rounded-3xl p-6 sm:p-8 border relative ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/30 lg:scale-105' : 'border-blue-500/20'
                                }`}
                        >
                            {plan.popular && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-600 to-cyan-600 px-4 py-1 rounded-full text-sm font-semibold shadow-lg"
                                >
                                    Most Popular
                                </motion.div>
                            )}

                            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-sm sm:text-base mb-6">{plan.description}</p>
                            <div className="mb-8">
                                <span className="text-4xl sm:text-5xl font-bold">${plan.price}</span>
                                <span className="text-gray-400 text-lg">/month</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, j) => (
                                    <motion.li
                                        key={j}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + j * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-3"
                                    >
                                        <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className={`w-full py-3 sm:py-4 rounded-xl font-semibold ${plan.popular
                                    ? 'bg-linear-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/30'
                                    : 'bg-white/10 hover:bg-white/20'
                                    }`}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Pricing;