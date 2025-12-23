'use client';

import { motion, } from 'motion/react';
import { Star, } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Anderson",
        role: "CTO at DataFlow Inc",
        content: "We migrated our entire infrastructure to this platform and saw a 300% increase in deployment speed. The security features alone justify the investment. Absolutely game-changing for our team.",
        rating: 5,
        avatar: "SA",
        color: "from-blue-500 to-cyan-500"
    },
    {
        name: "Marcus Chen",
        role: "Lead Developer at TechNova",
        content: "The developer experience is unmatched. From local development to production deployment, everything just works. Our team productivity has never been higher. Best decision we made this year.",
        rating: 5,
        avatar: "MC",
        color: "from-purple-500 to-pink-500"
    },
    {
        name: "Emma Thompson",
        role: "Product Manager at CloudStart",
        content: "Finally, a platform that balances power with simplicity. Our non-technical team members can deploy features independently. The analytics dashboard provides insights we never had before.",
        rating: 5,
        avatar: "ET",
        color: "from-green-500 to-emerald-500"
    },
    {
        name: "David Rodriguez",
        role: "Founder at StartupLabs",
        content: "As a startup, we needed to move fast without compromising on quality. This platform gave us enterprise-grade infrastructure at a fraction of the cost. We've scaled to 100K users seamlessly.",
        rating: 5,
        avatar: "DR",
        color: "from-orange-500 to-red-500"
    },
    {
        name: "Lisa Wang",
        role: "Engineering Director at FinTech Pro",
        content: "Security and compliance were our top priorities. The built-in SOC 2 compliance and audit logs saved us months of work. Support team is incredibly knowledgeable and responsive.",
        rating: 5,
        avatar: "LW",
        color: "from-indigo-500 to-blue-500"
    },
    {
        name: "James Wilson",
        role: "Senior Architect at GlobalCorp",
        content: "The microservices architecture support is exactly what we needed. Migration was smooth, documentation is excellent, and the performance improvements exceeded our expectations.",
        rating: 5,
        avatar: "JW",
        color: "from-teal-500 to-cyan-500"
    }
];

const Testimonials = () => {
    return (
        < section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Loved by <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Developers</span>
                    </h2>
                    <p className="text-md sm:text-lg text-gray-400">See what our community has to say about their experience</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{  scale: 1.02 }}
                            className="bg-linear-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur p-6 sm:p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/50 transition-all"
                        >
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <motion.div
                                        key={j}
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.5 + j * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed italic">"{testimonial.content}"</p>
                            <div className="flex items-center space-x-4">
                                <motion.div
                                    whileHover={{ scale: 1.1,}}
                                    transition={{ duration: 0.5 }}
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-r ${testimonial.color} flex items-center justify-center font-bold text-base sm:text-lg shadow-lg`}
                                >
                                    {testimonial.avatar}
                                </motion.div>
                                <div>
                                    <div className="font-bold text-sm sm:text-base">{testimonial.name}</div>
                                    <div className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >

    );
};

export default Testimonials;