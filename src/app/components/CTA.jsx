'use client';

import { motion, } from 'motion/react';
import { Rocket } from 'lucide-react';

const CTA = () => {
    return (

        < section className="py-20 sm:py-32 px-4 sm:px-6 bg-slate-900/50" >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center bg-linear-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur rounded-3xl p-8 sm:p-12 md:p-16 border border-blue-500/30"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block p-4 bg-blue-500/20 rounded-2xl mb-6"
                >
                    <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
                </motion.div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                    Ready to Transform Your Development?
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 mb-10">
                    Join 10,000+ companies building the future with NexusFlow. Start your free 14-day trial today.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 sm:px-12 py-4 sm:py-5 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-lg sm:text-xl shadow-2xl shadow-blue-500/40"
                >
                    Start Your Free Trial
                </motion.button>
                <p className="text-gray-500 text-sm mt-6">No credit card required • Full access • Cancel anytime</p>
            </motion.div>
        </section >
    );
};

export default CTA;