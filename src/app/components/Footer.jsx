'use client';

import { motion } from 'motion/react';
import { Sparkles, Linkedin, Twitter, Github, MessageSquare, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-blue-500/20 py-12 sm:py-16 px-4 sm:px-6 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 mb-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                            <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                NexusFlow
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-sm">
                            Empowering developers to build, deploy, and scale applications without complexity. Building the future of cloud development.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: MessageSquare, href: "#" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 bg-blue-500/20 hover:bg-blue-500/40 rounded-full flex items-center justify-center border border-blue-500/30 transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-base sm:text-lg">Product</h4>
                        <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                            {['Features', 'Pricing', 'Security', 'Roadmap', 'Updates', 'Beta Program'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "tween", stiffness: 300 }}
                                >
                                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-base sm:text-lg">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                            {['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Contact'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "tween", stiffness: 300 }}
                                >
                                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-base sm:text-lg">Resources</h4>
                        <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                            {['Documentation', 'API Reference', 'Tutorials', 'Community', 'Support', 'Status'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "tween", stiffness: 300 }}
                                >
                                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-base sm:text-lg">Legal</h4>
                        <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Compliance', 'Licenses'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "tween", stiffness: 300 }}
                                >
                                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-500/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400 text-sm">
                        <p>&copy; 2025 NexusFlow. All rights reserved.</p>
                        <div className="flex items-center space-x-4">
                            <MapPin className="w-4 h-4" />
                            <span>San Francisco, CA</span>
                            <span className="hidden sm:inline">•</span>
                            <Mail className="w-4 h-4 hidden sm:inline" />
                            <span className="hidden sm:inline">hello@nexusflow.io</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;