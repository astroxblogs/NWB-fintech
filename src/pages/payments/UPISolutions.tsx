import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, Smartphone, QrCode, Shield, Bell, LayoutDashboard } from 'lucide-react';

export default function UPISolutions() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/50 border border-indigo-200 mb-6 backdrop-blur-sm">
                                <Smartphone className="w-4 h-4 text-indigo-600" />
                                <span className="text-sm font-medium text-indigo-700">Next Gen UPI</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Empower your Business with <br />
                                <span className="text-indigo-600">Unified Payments</span>
                            </h1>

                            <div className="text-xl text-gray-600 mb-8 h-8 flex items-center gap-2">
                                <TypingText text="Real-time. Zero-cost. Instant." className="font-semibold text-indigo-600" delay={0.5} />
                            </div>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Unlock the potential of 300 million+ active UPI users. Real-time settlements, zero merchant discount rate (MDR) for small merchants, and deeply integrated SDKs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button variant="outline" className="border-gray-200 text-gray-700 px-8 py-6 text-lg rounded-xl">
                                    View Docs
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Advanced Dashboard Mockup */}
                            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative z-10 w-full max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                                {/* Header */}
                                <div className="bg-gray-900 text-white p-6 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                                            <LayoutDashboard className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-bold">Merchant Panel</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                </div>

                                <div className="p-6 bg-gray-50">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">Total Collections</p>
                                            <h3 className="text-3xl font-bold text-gray-900">₹ 12,45,000</h3>
                                        </div>
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                            <QrCode className="w-6 h-6 text-indigo-600" />
                                        </div>
                                    </div>

                                    {/* Graph Mockup */}
                                    <div className="h-24 w-full bg-white rounded-xl shadow-sm border border-gray-100 mb-6 flex items-end justify-between px-4 pb-2 pt-8 gap-1">
                                        {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55, 85, 60].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ delay: 0.5 + (i * 0.05) }}
                                                className="w-full bg-indigo-100 rounded-t-sm hover:bg-indigo-500 transition-colors"
                                            />
                                        ))}
                                    </div>

                                    <p className="font-semibold text-gray-900 mb-4 text-sm">Recent Transactions</p>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: -10, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 1 + (i * 0.1) }}
                                                className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs ring-2 ring-indigo-50">
                                                        {['GP', 'PP', 'PT'][i]}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-sm text-gray-900">Order #{2039 + i}</p>
                                                        <p className="text-[10px] text-gray-500">Via UPI Intent</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-sm text-gray-900">+ ₹ {[850, 2400, 150][i]}</p>
                                                    <p className="text-[10px] text-green-600 font-medium">Success</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 z-20"
                            >
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <Shield className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Security</p>
                                    <p className="font-bold text-sm text-gray-900">Enterpise Grade</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Comparison Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why switch to NWB UPI?</h2>
                        <p className="text-xl text-gray-600">
                            We don't just process payments; we help you grow with data-driven insights.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Smart Routing", metric: "99.9%", label: "Success Rate", desc: "Auto-switches between banks during downtime." },
                            { title: "Instant Settlement", metric: "T+0", label: "Settlement Cycle", desc: "Get money in your bank account immediately." },
                            { title: "Zero MDR", metric: "0%", label: "Transaction Fee", desc: "For transactions under ₹2,000 for small merchants." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                                <div className="text-4xl font-bold text-indigo-600 mb-2">{card.metric}</div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">{card.label}</div>
                                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#818cf8)] opacity-20"></div>
                {/* Animated Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-200"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Unlock exponential growth.</h2>
                    <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
                        Join the UPI revolution with the most advanced stack in India.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 text-lg rounded-xl font-bold shadow-lg">
                            Get Started Now
                        </Button>
                        <Button variant="outline" className="border-indigo-400 text-white hover:bg-indigo-800/50 px-8 py-4 text-lg rounded-xl font-semibold backdrop-blur-sm">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}
