import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, Smartphone, QrCode, Shield, Zap, LayoutDashboard, ArrowUpRight, CheckCircle2, TrendingUp, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function UPISolutions() {
    const [transactions, setTransactions] = useState([
        { id: 'TXN8821', app: 'GPay', amount: 850, status: 'Success', time: 'Just now' },
        { id: 'TXN8820', app: 'PhonePe', amount: 2400, status: 'Success', time: '2s ago' },
        { id: 'TXN8819', app: 'Paytm', amount: 150, status: 'Success', time: '5s ago' },
        { id: 'TXN8818', app: 'Amazon', amount: 4500, status: 'Success', time: '12s ago' },
        { id: 'TXN8817', app: 'GPay', amount: 920, status: 'Success', time: '15s ago' },
    ]);

    // Simulate live transactions
    useEffect(() => {
        const interval = setInterval(() => {
            const newTxn = {
                id: `TXN${Math.floor(Math.random() * 10000)}`,
                app: ['GPay', 'PhonePe', 'Paytm', 'Amazon'][Math.floor(Math.random() * 4)],
                amount: [150, 450, 1200, 2500, 800, 340][Math.floor(Math.random() * 6)],
                status: 'Success',
                time: 'Just now'
            };
            setTransactions(prev => [newTxn, ...prev.slice(0, 4)]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
                                <span className="text-sm font-medium text-indigo-700">Next Gen UPI Stack</span>
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
                                <Link to="/contact">
                                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <Button variant="outline" className="border-gray-200 text-gray-700 px-8 py-6 text-lg rounded-xl hover:bg-gray-50">
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
                            {/* Visual - Live Dashboard Mockup */}
                            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative z-10 w-full max-w-md mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                                {/* Header */}
                                <div className="bg-[#1e1b4b] text-white p-6 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                                            <Activity className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Live Monitor</p>
                                            <div className="flex items-center gap-1.5">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                </span>
                                                <span className="text-[10px] text-gray-400">Real-time updates</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-indigo-300">Total Volume</p>
                                        <p className="font-bold text-lg">₹ 4,28,900</p>
                                    </div>
                                </div>

                                <div className="p-0 bg-gray-50">
                                    {/* Graph Area */}
                                    <div className="bg-white p-4 border-b border-gray-100">
                                        <div className="flex justify-between items-end h-20 gap-1">
                                            {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55, 85, 95, 60, 75, 50].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: 0.5 + (i * 0.05), type: 'spring' }}
                                                    className="w-full bg-indigo-100 rounded-t-sm hover:bg-indigo-500 transition-colors cursor-pointer"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Transaction List */}
                                    <div className="p-4">
                                        <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Recent Transactions</p>
                                        <div className="space-y-2">
                                            {transactions.map((txn, i) => (
                                                <motion.div
                                                    key={txn.id}
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ring-2 ring-offset-1 ${txn.app === 'GPay' ? 'bg-blue-100 text-blue-600 ring-blue-50' :
                                                            txn.app === 'PhonePe' ? 'bg-purple-100 text-purple-600 ring-purple-50' :
                                                                'bg-gray-100 text-gray-600 ring-gray-50'
                                                            }`}>
                                                            {txn.app[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-sm text-gray-900">{txn.app}</p>
                                                            <p className="text-[10px] text-gray-500 font-mono">{txn.id}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-sm text-gray-900">+₹{txn.amount}</p>
                                                        <p className="text-[10px] text-green-600 font-medium flex items-center justify-end gap-1">
                                                            {txn.status} <CheckCircle2 className="w-3 h-3" />
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Animated UPI Intent Flow Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless Intent Flow</h2>
                        <p className="text-xl text-gray-600">
                            Direct App-to-App payments with highest success rates in the industry.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto h-[400px] bg-gray-50 rounded-[3rem] border border-gray-100 flex items-center justify-around px-10 overflow-hidden">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0" />

                        {/* Moving Particle */}
                        <motion.div
                            className="absolute top-1/2 left-0 w-20 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent z-0"
                            animate={{ left: ['0%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Step 1: Merchant App */}
                        <div className="relative z-10 text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-64 h-64 flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Merchant App</h3>
                            <p className="text-sm text-gray-500">User clicks "Pay via UPI"</p>
                        </div>

                        {/* Step 2: UPI App */}
                        <div className="relative z-10 text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-64 h-64 flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform">
                            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 text-indigo-600">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">UPI App</h3>
                            <p className="text-sm text-gray-500">User authorizes payment</p>
                        </div>

                        {/* Step 3: Bank Server */}
                        <div className="relative z-10 text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-64 h-64 flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform">
                            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4 text-green-600">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Bank Server</h3>
                            <p className="text-sm text-gray-500">Instant debit & settlement</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
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

            {/* CTA Section */}
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
                        <Link to="/contact">
                            <Button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 text-lg rounded-xl font-bold shadow-lg">
                                Get Started Now
                            </Button>
                        </Link>
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
