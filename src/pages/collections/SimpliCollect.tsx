import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, RefreshCw, CheckCircle2, BarChart3, Layers } from 'lucide-react';

export default function SimpliCollect() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Visual - Dashboard Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative w-full max-w-xl mx-auto">
                                {/* Main Dashboard Card */}
                                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative z-10">
                                    {/* Fake Browser Header */}
                                    <div className="bg-gray-50 border-b border-gray-200 p-3 flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <h3 className="font-bold text-gray-900">Reconciliation Status</h3>
                                                <p className="text-xs text-gray-500">Real-time sync active</p>
                                            </div>
                                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                <RefreshCw className="w-3 h-3 animate-spin" />
                                                Syncing
                                            </div>
                                        </div>

                                        {/* Progress Bars */}
                                        <div className="space-y-6">
                                            {[
                                                { label: 'Payment Gateway', val: 100, color: 'bg-blue-500' },
                                                { label: 'Bank Settlements', val: 85, color: 'bg-indigo-500' },
                                                { label: 'Vendor Payouts', val: 60, color: 'bg-purple-500' }
                                            ].map((item, i) => (
                                                <div key={i}>
                                                    <div className="flex justify-between text-sm mb-2">
                                                        <span className="font-medium text-gray-700">{item.label}</span>
                                                        <span className="font-bold text-gray-900">{item.val}%</span>
                                                    </div>
                                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${item.val}%` }}
                                                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                                                            className={`h-full rounded-full ${item.color}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <p className="text-xs text-gray-500">Unreconciled</p>
                                                <p className="text-xl font-bold text-red-500">0.00</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <p className="text-xs text-gray-500">Processed</p>
                                                <p className="text-xl font-bold text-green-600">₹ 1.2 Cr</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Background Decor */}
                                <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-100 rounded-2xl -z-10" />
                                <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-2xl -z-20" />
                            </div>
                        </motion.div>


                        {/* Content */}
                        <motion.div
                            className="order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition-colors cursor-pointer border border-indigo-200 mb-6">
                                <Layers className="w-4 h-4 text-indigo-700" />
                                <span className="text-sm font-medium text-indigo-700">Automated Reconciliation</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                SimpliCollect <br />
                                <span className="text-indigo-600">Automate Everything</span>
                            </h1>

                            <div className="h-16 mb-2">
                                <p className="text-xl text-gray-600">Stop doing manual work. Let our AI handle:</p>
                                <TypingText text="Reconciliation. Settlements. Reports." className="text-xl font-bold text-indigo-600" delay={1} />
                            </div>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Connect all your payment sources in one place. Automatically match payments with orders, invoices, and refunds in real-time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                        Request Demo
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>

                            <div className="mt-10 space-y-3">
                                {['99% Reduction in manual errors', 'Save 40+ hours per week', 'Tally & SAP Integration'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Dashboard Insights Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                            Powerful Analytics
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">See where your money is.</h2>
                        <p className="text-xl text-gray-600">
                            Our dashboard gives you a bird's eye view of all your collections, settlements, and pending reconciliations in real-time.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                        {/* Table Header */}
                        <div className="bg-gray-50 border-b border-gray-200 px-8 py-4 grid grid-cols-12 text-sm font-bold text-gray-500 uppercase tracking-wider">
                            <div className="col-span-3">Transaction ID</div>
                            <div className="col-span-2">Date</div>
                            <div className="col-span-2">Source</div>
                            <div className="col-span-2 text-right">Amount</div>
                            <div className="col-span-3 text-center">Reconciliation Status</div>
                        </div>

                        {/* Table Rows */}
                        {[
                            { id: "TXN_88329_A", date: "Today, 10:42 AM", src: "HDFC Payment Gateway", amt: "₹ 12,450.00", status: "Matched", color: "bg-green-100 text-green-700" },
                            { id: "TXN_88329_B", date: "Today, 10:38 AM", src: "Razorpay Standard", amt: "₹ 8,320.00", status: "Matched", color: "bg-green-100 text-green-700" },
                            { id: "TXN_88329_C", date: "Today, 10:35 AM", src: "Stripe Connect", amt: "₹ 4,100.00", status: "Pending", color: "bg-yellow-100 text-yellow-700" },
                            { id: "TXN_88329_D", date: "Today, 10:15 AM", src: "Direct Bank Transfer", amt: "₹ 55,000.00", status: "Matched", color: "bg-green-100 text-green-700" },
                            { id: "TXN_88329_E", date: "Yesterday, 11:59 PM", src: "UPI Collection", amt: "₹ 2,499.00", status: "Matched", color: "bg-green-100 text-green-700" },
                        ].map((row, i) => (
                            <div key={i} className="px-8 py-5 grid grid-cols-12 items-center border-b border-gray-100 hover:bg-indigo-50/30 transition-colors">
                                <div className="col-span-3 font-mono text-sm font-medium text-gray-900">{row.id}</div>
                                <div className="col-span-2 text-sm text-gray-600">{row.date}</div>
                                <div className="col-span-2 text-sm text-gray-600">{row.src}</div>
                                <div className="col-span-2 text-right font-semibold text-gray-900">{row.amt}</div>
                                <div className="col-span-3 flex justify-center">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${row.color}`}>
                                        {row.status === 'Matched' && <CheckCircle2 className="w-3 h-3" />}
                                        {row.status}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Table Footer */}
                        <div className="bg-gray-50 px-8 py-4 flex justify-between items-center text-sm text-gray-500">
                            <span>Showing latest 5 transactions</span>
                            <button className="text-indigo-600 font-semibold hover:underline">View All History &rarr;</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Stop chasing payments manually.</h2>
                    <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
                        Switch to SimpliCollect today and save 20+ hours every week on financial operations.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Link to="/contact">
                            <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-bold">
                                Start Free Trial
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
