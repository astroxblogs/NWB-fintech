import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, Umbrella, ShieldCheck, FileText, HeartPulse, Car, Zap, Check, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InsuranceTech() {
    const [step, setStep] = useState(0); // 0: Input, 1: Analyzing, 2: Generated

    // Auto-play the policy generator animation
    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* <Navbar /> */}

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-red-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/50 border border-red-200 mb-6 backdrop-blur-sm">
                                <Umbrella className="w-4 h-4 text-red-600" />
                                <span className="text-sm font-medium text-red-700">Digital Insurance Infrastructure</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                                Embed Insurance <br />
                                <span className="text-accent">In 2 Lines of Code</span>
                            </h1>

                            <div className="text-xl text-gray-600 mb-8 h-8 flex items-center gap-2">
                                <span>Protect</span>
                                <TypingText text="Health. Travel. Vehicles. Assets." className="font-semibold text-red-600" delay={0.5} />
                            </div>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Connect your users with top insurers. Instant policy issuance, automated claims processing, and seamless API integration.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-red-500/25 transition-all">
                                    Start Integration
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 px-8 py-6 text-lg rounded-xl">
                                    View API Docs
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual - Instant Policy Generator Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] flex items-center justify-center"
                        >
                            {/* Background Blob */}
                            <div className="absolute w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30 animate-pulse" />

                            <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                                <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
                                    <span className="font-bold">NWB Insure API</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                </div>
                                <div className="p-6 h-[320px] flex flex-col justify-center">
                                    {step === 0 && (
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            className="space-y-4"
                                        >
                                            <p className="text-sm font-semibold text-gray-500">USER INPUT</p>
                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm">
                                                <span className="text-gray-400">Type:</span> <span className="text-gray-900 font-medium">Travel Insurance</span>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm">
                                                <span className="text-gray-400">Destination:</span> <span className="text-gray-900 font-medium">Bali, Indonesia</span>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm">
                                                <span className="text-gray-400">Duration:</span> <span className="text-gray-900 font-medium">7 Days</span>
                                            </div>
                                            <Button className="w-full bg-gray-200 text-gray-400 cursor-wait">Generating Quote...</Button>
                                        </motion.div>
                                    )}

                                    {step === 1 && (
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            className="flex flex-col items-center text-center space-y-4"
                                        >
                                            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
                                            <p className="font-semibold text-gray-700">Analyzing Risk Factors...</p>
                                            <div className="text-xs text-gray-400 space-y-1">
                                                <p>Checking Travel Advisories...</p>
                                                <p>Calculating Premium...</p>
                                                <p>Connecting to Insurer...</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                                            className="bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-xl p-6 shadow-lg transform rotate-2"
                                        >
                                            <div className="flex justify-between items-start mb-6">
                                                <Umbrella className="w-8 h-8 text-white/90" />
                                                <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">ACTIVE</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-1">Travel Protect +</h3>
                                            <p className="text-sm text-red-100 mb-6">Policy #882190-X</p>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-xs text-red-100 mb-1">Premium</p>
                                                    <p className="text-2xl font-bold">₹ 499</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] text-red-100">Powered by</p>
                                                    <p className="font-bold text-sm">NWB</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Animated Claims Processing Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 mb-4">
                            <Zap className="w-3 h-3 text-green-600" />
                            <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Flash Claims</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-6">Claims settled in seconds.</h2>
                        <p className="text-xl text-gray-600">
                            Our parametric claims engine triggers payouts automatically based on trusted third-party data.
                        </p>
                    </div>

                    {/* Horizontal Auto-scrolling Timeline */}
                    <div className="relative max-w-6xl mx-auto">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

                        <div className="grid md:grid-cols-4 gap-4 relative z-10">
                            {[
                                { icon: AlertCircle, title: "Event Detected", desc: "Flight delayed > 3 hrs", color: "text-orange-500", bg: "bg-orange-50" },
                                { icon: Zap, title: "Auto-Trigger", desc: "Oracle verifies data", color: "text-blue-500", bg: "bg-blue-50" },
                                { icon: FileText, title: "Claim Created", desc: "No paperwork needed", color: "text-purple-500", bg: "bg-purple-50" },
                                { icon: Check, title: "Instant Payout", desc: "Funds -> Bank Account", color: "text-green-500", bg: "bg-green-50" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <div className={`w-14 h-14 mx-auto rounded-full ${item.bg} flex items-center justify-center mb-4 ring-4 ring-white shadow-sm`}>
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk Engine Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-6">Smarter underwriting.</h2>
                        <p className="text-xl text-gray-600">
                            Move from static actuarial tables to dynamic, real-time risk assessment using alternative data.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Dynamic Pricing", icon: FileText, desc: "Adjust premiums in real-time based on usage and behavior." },
                            { title: "Fraud Detection", icon: ShieldCheck, desc: "AI models checking 100+ variables to flag suspicious claims." },
                            { title: "Auto-Claims", icon: Umbrella, desc: "Parametric insurance triggers for instant payouts on flight delays." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                                    <card.icon className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ef4444_0%,transparent_50%)] opacity-20"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Launch an insurance product in weeks.</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Don't spend months negotiating with carriers. We have the pipes ready.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-red-600 hover:bg-red-500 text-white px-8 py-6 text-lg rounded-xl font-bold shadow-lg shadow-red-900/50 transition-all transform hover:scale-105">
                            Build Insurance Product
                        </Button>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div >
    );
}
