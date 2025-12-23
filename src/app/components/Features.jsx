'use client';

import { motion, } from 'motion/react';
import { Shield, Users, Rocket, Database, BarChart3, Layers, Workflow, Cloud, Terminal, } from 'lucide-react';


const features = [
    { icon: Rocket, title: "Rapid Development", desc: "Build and deploy applications 10x faster with our optimized workflow and pre-built components. Save weeks of development time." },
    { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption, SOC 2 compliance, and automated security patches. Your data is protected at every layer." },
    { icon: Cloud, title: "Global Infrastructure", desc: "Deploy to 150+ edge locations worldwide. Automatic scaling and 99.99% uptime guarantee with zero configuration." },
    { icon: BarChart3, title: "Advanced Analytics", desc: "Real-time insights, custom dashboards, and AI-powered predictions. Make data-driven decisions with confidence." },
    { icon: Users, title: "Seamless Collaboration", desc: "Built-in code review, real-time editing, and project management. Keep your entire team synchronized effortlessly." },
    { icon: Terminal, title: "Developer Experience", desc: "Intuitive CLI, comprehensive APIs, and extensive documentation. Built by developers who understand your workflow." },
    { icon: Database, title: "Smart Database", desc: "Auto-scaling database with built-in caching, backup, and migration tools. Zero maintenance required." },
    { icon: Workflow, title: "CI/CD Pipeline", desc: "Automated testing, staging environments, and one-click rollbacks. Ship with confidence every time." },
    { icon: Layers, title: "Microservices Ready", desc: "Built for modern architecture with container support, service mesh, and API gateway out of the box." }
];


const Features = () => {
    return (
        < section id="features" className="py-20 sm:py-32 px-4 sm:px-6 bg-slate-900/50" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Powerful Features for <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Modern Teams</span>
                    </h2>
                    <p className="text-md sm:text-lg text-gray-400 max-w-3xl mx-auto">
                        Everything you need to build, deploy, and scale applications with confidence and speed.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-linear-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur p-6 sm:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30"
                            >
                                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Features;