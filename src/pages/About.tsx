import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Globe, Award, Target, Heart } from 'lucide-react';
import { TypingText } from '@/components/ui/TypingText';

export default function About() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
                        >
                            <Award className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Our Mission</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Building the <br />
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Backbone of Finance</span>
                        </h1>

                        <div className="text-2xl text-gray-600 mb-10 leading-relaxed font-light">
                            We’re on a mission to simplify money movement for <br />
                            <TypingText
                                text={["startups.", "enterprises.", "banks.", "platforms."]}
                                className="font-semibold text-gray-900"
                                delay={1}
                                typingSpeed={100}
                                deletingSpeed={50}
                                waitTime={2000}
                            />
                        </div>
                    </div>
                </div>

                {/* Ambient background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_70%)] z-0"></div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-gray-100 bg-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Annual Volume", value: "$50B+" },
                            { label: "Transactions", value: "2M+" },
                            { label: "Team Members", value: "150+" },
                            { label: "Global Presence", value: "12 Countries" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story / Timeline */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>

                        <div className="space-y-12 relative border-l-2 border-gray-100 ml-6 md:ml-0">
                            {[
                                { year: "2020", title: "The Beginning", desc: "Founded with a vision to democratize financial infrastructure.", icon: Target },
                                { year: "2021", title: "Series A", desc: "Raised $20M to expand our engineering team and product suite.", icon: TrendingUp },
                                { year: "2022", title: "Global Expansion", desc: "Launched in Southeast Asia and MENA regions.", icon: Globe },
                                { year: "2024", title: "Market Leader", desc: "Serving 500+ enterprise clients processing billions daily.", icon: Users },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="relative pl-12 md:pl-0"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    {/* Dot for mobile / Timeline center for desktop could be complex, keeping simple list layout but impactful */}
                                    <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white md:hidden"></div>

                                    <div className="md:flex items-start gap-8 group">
                                        <div className="hidden md:flex w-32 flex-col items-end text-right pt-2">
                                            <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                                        </div>

                                        {/* Center Icon (Desktop) */}
                                        <div className="hidden md:flex flex-col items-center relative z-10">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            {i !== 3 && <div className="h-full w-0.5 bg-gray-100 absolute top-12 mt-4"></div>}
                                        </div>

                                        <div className="flex-1 pb-12">
                                            <span className="md:hidden text-xl font-bold text-blue-600 mb-2 block">{item.year}</span>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Values that drive us</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            We're building a company for the long term, guided by principles that put our customers first.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Customer Obsession", desc: "We start with the customer and work backwards.", icon: Heart },
                            { title: "Think Big", desc: "We create and communicate a bold direction that inspires results.", icon: Target },
                            { title: "Earn Trust", desc: "We listen attentively, speak candidly, and treat others respectfully.", icon: Users },
                        ].map((card, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                                    <card.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Abstract Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
            </section>

            <Footer />
        </div>
    );
}
