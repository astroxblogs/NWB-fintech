import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, Landmark, CheckCircle2, TrendingUp, Clock, Users, ChevronRight, Wallet } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LendingPlatform() {
    const [disbursed, setDisbursed] = useState(false);

    // Cycle the disbursal animation
    useEffect(() => {
        const interval = setInterval(() => {
            setDisbursed(true);
            setTimeout(() => setDisbursed(false), 3000);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cyan-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual - Loan Meter Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-md mx-auto relative z-10">
                                <div className="text-center mb-8">
                                    <p className="text-gray-500 font-medium mb-1">Credit Limit Approved</p>
                                    <motion.h3
                                        className="text-5xl font-bold text-gray-900"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2 }}
                                    >
                                        ₹ 5,00,000
                                    </motion.h3>
                                </div>

                                {/* Gauge Animation */}
                                <div className="relative h-40 overflow-hidden flex justify-center mb-6">
                                    <div className="w-64 h-32 border-[20px] border-gray-100 rounded-t-full absolute top-0" />
                                    <motion.div
                                        className="w-64 h-32 border-[20px] border-cyan-500 rounded-t-full absolute top-0 border-r-transparent border-b-transparent border-l-transparent"
                                        style={{ rotate: -180, transformOrigin: "bottom center" }}
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 2, ease: "circOut" }}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 w-full text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <p className="text-2xl font-bold text-cyan-600">Excellent</p>
                                    </motion.div>
                                </div>

                                {/* Disbursal Animation Overlay */}
                                {disbursed && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, y: 0 }}
                                        animate={{ opacity: [0, 1, 0], scale: 1.2, y: -100 }}
                                        transition={{ duration: 1.5 }}
                                        className="absolute inset-x-0 bottom-20 flex justify-center pointer-events-none"
                                    >
                                        <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Disbursed!
                                        </div>
                                    </motion.div>
                                )}

                                {/* Steps */}
                                <div className="space-y-3">
                                    {[
                                        { step: 'KYC Verified', delay: 0.5 },
                                        { step: 'Credit Score Added', delay: 1 },
                                        { step: 'Offer Generated', delay: 1.5 },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: item.delay }}
                                            className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100"
                                        >
                                            <div className="bg-green-100 p-1 rounded-full">
                                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="font-semibold text-gray-700 text-sm">{item.step}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.5 }}
                                    className="mt-6"
                                >
                                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-lg py-6 rounded-xl relative overflow-hidden group">
                                        <span className="relative z-10 transition-colors group-hover:text-white">Disburse Now</span>
                                        <div className="absolute inset-0 h-full w-full bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-200 mb-6 backdrop-blur-sm">
                                <Landmark className="w-4 h-4 text-cyan-700" />
                                <span className="text-sm font-medium text-cyan-700">Lending OS</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Loans disbursed <br />
                                <span className="text-cyan-600">in Minutes</span>
                            </h1>

                            <div className="mb-8 h-8">
                                <TypingText text="Instant KYC. Credit Underwriting. Disbursal." className="text-xl font-medium text-gray-500" delay={0.5} />
                            </div>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Full-stack lending platform connecting borrowers to lenders.
                                We handle the heavy lifting: verifying identities, assessing risk, and moving money.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                    Launch Lending
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Graph Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">The Lending Ecosystem</h2>
                        <p className="text-xl text-gray-600">
                            Connecting capital to credit-worthy borrowers through our unified API.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto flex items-center justify-between">
                        {/* Connector Lines */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10" />
                        <motion.div
                            className="absolute top-1/2 left-0 w-20 h-0.5 bg-cyan-500 z-0"
                            animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Left Node: Lenders */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center w-64 z-10">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Landmark className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-lg">Lenders</h3>
                            <p className="text-sm text-gray-500">Banks & NBFCs</p>
                        </div>

                        {/* Center Node: NWB Engine */}
                        <div className="bg-gray-900 text-white p-8 rounded-full shadow-2xl z-20 w-48 h-48 flex flex-col items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border border-cyan-500/30 animate-[spin_5s_linear_infinite_reverse]" />
                            <h3 className="font-bold text-xl mb-1">NWB</h3>
                            <p className="text-xs text-cyan-400">Core Engine</p>
                        </div>

                        {/* Right Node: Borrowers */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center w-64 z-10">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="font-bold text-lg">Borrowers</h3>
                            <p className="text-sm text-gray-500">SMEs & Individuals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loan Journey Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">End-to-end loan lifecycle.</h2>
                        <p className="text-xl text-gray-600">
                            Manage everything from origination to collections on a single dashboard.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { title: "Origination", icon: Users, color: "text-blue-500", bg: "bg-blue-50", desc: "Customer application & documents upload." },
                                { title: "Underwriting", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-50", desc: "AI-risk scoring & verification." },
                                { title: "Disbursal", icon: Wallet, color: "text-green-500", bg: "bg-green-50", desc: "Instant fund transfer to bank account." },
                                { title: "Collections", icon: Clock, color: "text-orange-500", bg: "bg-orange-50", desc: "Automated repayment scheduling." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="relative bg-white pt-8 group rounded-3xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className={`w-16 h-16 rounded-full ${step.bg} border-4 border-white shadow-lg flex items-center justify-center mb-6 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className={`w-8 h-8 ${step.color}`} />
                                    </div>
                                    <div className="text-center p-6 border-t border-gray-50">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-[3.5rem] -right-4 text-gray-300 z-0">
                                            <ChevronRight className="w-8 h-8" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-cyan-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Become a lender today.</h2>
                    <p className="text-cyan-100 text-lg mb-10 max-w-2xl mx-auto">
                        Partner with us to offer credit products to your customers.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 py-6 text-lg rounded-xl font-bold shadow-lg shadow-cyan-900/50 transition-all transform hover:scale-105">
                            Partner Application
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
