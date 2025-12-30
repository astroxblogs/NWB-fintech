import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, CalendarClock, Repeat, Check, CreditCard } from 'lucide-react';

export default function RecurringCollections() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
                                <Repeat className="w-4 h-4 text-green-700" />
                                <span className="text-sm font-medium text-green-700">Subscription Engine</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Predictable Revenue <br />
                                <span className="text-green-600">On Autopilot</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Automate your billing for subscriptions, SIPs, and EMIs.
                                Support for UPI Autopay, eNACH, and Card Mandates.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                    Set up Autopay
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual - Timeline Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-md mx-auto z-10">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-4">Subscription Lifecycle</h3>

                                <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                                    {/* Step 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[39px] w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-md flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                            <p className="font-bold text-gray-900 text-sm">Mandate Created</p>
                                            <p className="text-xs text-gray-600">User authorizes recurring debit</p>
                                        </div>
                                    </motion.div>

                                    {/* Step 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[39px] w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-md flex items-center justify-center">
                                            <CreditCard className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="font-bold text-gray-900 text-sm">Auto-Debit</p>
                                                <span className="text-[10px] bg-gray-100 px-2 rounded">1st of Month</span>
                                            </div>
                                            <p className="text-xs text-gray-600">₹ 999 deducted successfully</p>
                                        </div>
                                    </motion.div>

                                    {/* Step 3 */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.5 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[39px] w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md flex items-center justify-center animate-pulse">
                                            <CalendarClock className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-dashed border-gray-300">
                                            <p className="font-bold text-gray-400 text-sm">Next Debit</p>
                                            <p className="text-xs text-gray-400">Scheduled for next month</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Decor */}
                            <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 animate-float">
                                <p className="text-xs text-gray-500 mb-1">Success Rate</p>
                                <p className="text-2xl font-bold text-green-600">99.2%</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Comprehensive Subscription Flow */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
                                End-to-End Automation
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Designed for retention.</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Recover failed payments automatically with smart retries. Get notified instantly when a mandate is paused or cancelled.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                                        <Repeat className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Smart Retries</h4>
                                        <p className="text-gray-600">
                                            Auto-retry failed debits on optimal days when balance is liely to be sufficient.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                        <CreditCard className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Multi-Instrument</h4>
                                        <p className="text-gray-600">
                                            Support for UPI Autopay, eNACH, and Credit Card Standing Instructions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                    <span className="font-bold text-gray-700">Active Subscriptions</span>
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Live Data</span>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {[
                                        { user: "Netflix Premium", amount: "₹ 649", status: "Auto-Debited", date: "Today" },
                                        { user: "Spotify Individual", amount: "₹ 119", status: "Scheduled", date: "Tomorrow" },
                                        { user: "AWS Invoice", amount: "₹ 4,500", status: "Retrying", date: "Failed" },
                                        { user: "Gym Membership", amount: "₹ 2,000", status: "Auto-Debited", date: "Yesterday" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                            <div>
                                                <p className="font-semibold text-gray-900">{item.user}</p>
                                                <p className="text-xs text-gray-500">Billing: {item.date}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-900">{item.amount}</p>
                                                <p className={`text-xs font-medium ${item.status === 'Failed' ? 'text-red-500' : 'text-green-600'}`}>{item.status}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-green-900 relative overflow-hidden">
                {/* Geometric Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-400 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Build a predictable revenue stream.</h2>
                    <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                        Start automating your recurring collections today. Zero setup fees.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-white text-green-900 hover:bg-green-50 px-8 py-4 text-lg rounded-xl font-bold shadow-lg">
                            Get Started
                        </Button>
                        <Button variant="outline" className="border-green-400 text-white hover:bg-green-800/50 px-8 py-4 text-lg rounded-xl font-semibold backdrop-blur-sm">
                            View Pricing
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
