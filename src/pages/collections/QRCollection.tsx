import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, QrCode, Smartphone, Store, Truck, Zap, CheckCircle, ChevronRight, ShieldCheck } from 'lucide-react';

// Mockup Components
const PaymentFormMockup = () => (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="text-xs font-semibold text-gray-400">PAYMENT LINK</div>
        </div>
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500">Amount Due</p>
                    <p className="text-3xl font-bold text-gray-900">₹ 2,499.00</p>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                </div>
            </div>

            <div className="space-y-4">
                <label className="block">
                    <span className="text-xs text-gray-500 font-medium ml-1">Card Number</span>
                    <div className="mt-1 relative">
                        <input type="text" className="block w-full rounded-xl border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 text-sm py-3 px-4" placeholder="0000 0000 0000 0000" disabled />
                        <div className="absolute right-3 top-3">
                            <div className="flex gap-1">
                                <div className="w-6 h-4 bg-gray-300 rounded-sm" />
                                <div className="w-6 h-4 bg-gray-300 rounded-sm" />
                            </div>
                        </div>
                    </div>
                </label>
                <div className="grid grid-cols-2 gap-4">
                    <label className="block">
                        <span className="text-xs text-gray-500 font-medium ml-1">Expiry</span>
                        <input type="text" className="mt-1 block w-full rounded-xl border-gray-200 bg-gray-50 text-sm py-3 px-4" placeholder="MM/YY" disabled />
                    </label>
                    <label className="block">
                        <span className="text-xs text-gray-500 font-medium ml-1">CVC</span>
                        <input type="text" className="mt-1 block w-full rounded-xl border-gray-200 bg-gray-50 text-sm py-3 px-4" placeholder="123" disabled />
                    </label>
                </div>
                <label className="block">
                    <span className="text-xs text-gray-500 font-medium ml-1">Cardholder Name</span>
                    <input type="text" className="mt-1 block w-full rounded-xl border-gray-200 bg-gray-50 text-sm py-3 px-4" placeholder="JOHN DOE" disabled />
                </label>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-200 mt-2">
                Pay Now
            </button>
        </div>
    </div>
);

const PhoneQRMockup = ({ type }: { type: 'static' | 'dynamic' }) => (
    <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
        <div className="w-full h-full bg-white relative">
            {/* Header */}
            <div className="h-16 bg-blue-600 flex items-end p-4 pb-2 justify-between">
                <div className="w-6 h-6 bg-white/20 rounded-full" />
                <div className="text-white font-bold text-sm">Scan & Pay</div>
                <div className="w-6 h-6 bg-white/20 rounded-full" />
            </div>

            {/* Screen Content */}
            <div className="p-6 flex flex-col items-center h-full pt-12">
                {type === 'static' ? (
                    <>
                        <div className="text-center mb-8">
                            <h3 className="font-bold text-gray-800 text-lg">Store Payment</h3>
                            <p className="text-xs text-gray-500">Scan payload for fast checkout</p>
                        </div>
                        <div className="w-48 h-48 border-4 border-blue-500 rounded-2xl p-2 relative mb-8">
                            <div className="w-full h-full bg-gray-900 p-2">
                                <div className="w-full h-full bg-white grid grid-cols-6 gap-0.5 p-1">
                                    {Array.from({ length: 36 }).map((_, i) => (
                                        <div key={i} className={`bg-black ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`} />
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-[-2px] left-[-2px] w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-xl" />
                            <div className="absolute top-[-2px] right-[-2px] w-8 h-8 border-t-4 border-r-4 border-blue-500 rounded-tr-xl" />
                            <div className="absolute bottom-[-2px] right-[-2px] w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-xl" />
                            <div className="absolute bottom-[-2px] left-[-2px] w-8 h-8 border-b-4 border-l-4 border-blue-500 rounded-bl-xl" />

                            {/* Scanning Line */}
                            <motion.div
                                className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                                animate={{ top: ['10%', '90%', '10%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />
                        </div>
                        <div className="w-32 h-10 bg-gray-100 rounded-lg animate-pulse" />
                    </>
                ) : (
                    <>
                        <div className="w-full bg-gray-50 p-4 rounded-xl mb-6">
                            <div className="text-xs text-gray-500 mb-1">Total Bill</div>
                            <div className="text-2xl font-bold text-gray-900">₹ 840.00</div>
                        </div>
                        <div className="w-40 h-40 bg-white shadow-lg p-3 rounded-xl mb-8 relative">
                            <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs">Dynamic QR</div>
                        </div>
                        <div className="w-full space-y-3">
                            <div className="h-12 w-full bg-blue-600 rounded-xl flex items-center justify-center text-white font-semibold">Confirm Payment</div>
                            <div className="h-12 w-full border border-gray-200 rounded-xl flex items-center justify-center text-gray-500">Cancel</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
);

export default function QRCollection() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50 -skew-y-3 origin-top-left transform scale-110" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm mb-6">
                                Unified Payments
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight font-sans">
                                One sample <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    QR Collection
                                </span> <br />
                                for Payments
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-lg">
                                Accept payments from any UPI app, card, or wallet with a single powerful QR code solution.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                                        Get Started
                                    </Button>
                                </Link>
                                <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full">
                                    Contact Sales <ChevronRight className="ml-1 w-5 h-5" />
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

                            <PaymentFormMockup />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TYPES OF QR SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of QR</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-20">
                        {/* Static QR */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-50 rounded-[3rem] p-10 hover:bg-blue-50 transition-colors duration-500 group"
                        >
                            <div className="mb-10 text-center">
                                <PhoneQRMockup type="static" />
                            </div>
                            <div className="text-center max-w-sm mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Static QR</h3>
                                <p className="text-gray-600">Perfect for shops and counters. Print once, earn forever. Compatible with all UPI apps.</p>
                            </div>
                        </motion.div>

                        {/* Dynamic QR */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gray-50 rounded-[3rem] p-10 hover:bg-indigo-50 transition-colors duration-500 group"
                        >
                            <div className="mb-10 text-center">
                                <PhoneQRMockup type="dynamic" />
                            </div>
                            <div className="text-center max-w-sm mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">Dynamic QR</h3>
                                <p className="text-gray-600">Generate amount-specific QRs on screens or POS devices. Ideal for supermarkets and deliveries.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* USE CASES SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            QR Collection for Every Business
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From small kiosks to large retail chains, our QR solutions scale with your needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Store,
                                title: "Retail Stores",
                                desc: "Fast checkout at counters with high footfall. Audio alerts for instant confirmation.",
                                color: "blue"
                            },
                            {
                                icon: Truck,
                                title: "Delivery & Logistics",
                                desc: "Enable agents to collect payments on the go with mobile Dynamic QRs.",
                                color: "green"
                            },
                            {
                                icon: Smartphone,
                                title: "Services & Freelancers",
                                desc: "Share payment links and QRs via WhatsApp or SMS for remote collections.",
                                color: "purple"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110`} />
                                <div className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-6 relative z-10 text-${item.color}-600`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES / SCROLLING SECTION */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Payments Made <br />
                                <span className="text-blue-600">Simple & Secure</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Bank-grade security compliant",
                                    "99.9% uptime guarantee",
                                    "Real-time settlement dashboard",
                                    "24/7 Merchant Support"
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        </div>
                                        <span className="text-lg text-gray-700 font-medium">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] opacity-20 blur-xl" />
                                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
                                    <div className="p-6 bg-gray-50 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div className="font-bold text-gray-900">Transaction History</div>
                                            <div className="text-blue-600 text-sm font-medium">View All</div>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-gray-100 max-h-[400px] overflow-hidden relative">
                                        {/* Gradient Overlay for scroll effect */}
                                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />

                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                                        <ShieldCheck className="w-6 h-6 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-900">Payment Received</div>
                                                        <div className="text-sm text-gray-500">Today, 10:2{i} AM</div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-bold text-green-600">+ ₹{(1500 * (i + 1)).toLocaleString()}</div>
                                                    <div className="text-xs text-gray-400">Success</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to modernize your collections?</h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                        Get verified, set up your QR, and start accepting payments in less than 10 minutes.
                    </p>
                    <Link to="/contact">
                        <Button className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-8 text-xl rounded-full font-bold shadow-2xl transition-transform hover:scale-105">
                            Create Free Account
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
