import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, QrCode } from 'lucide-react';

export default function UPICollection() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-6 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-sm font-medium text-blue-700">Live on UPI 2.0</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Collection <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Reimagined
                                </span>
                            </h1>

                            <div className="text-xl text-gray-600 mb-8 h-8 flex items-center gap-2">
                                <span>Accept payments</span>
                                <TypingText text="Instantly. Securely. Everywhere." className="font-semibold text-blue-600" delay={0.5} />
                            </div>

                            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                                Enable 300M+ users to pay you using their favorite UPI apps.
                                Zero friction, 99.9% success rates, and instant settlements.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                                    Start Collecting
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button variant="outline" className="border-gray-200 text-gray-700 px-8 py-6 text-lg rounded-xl hover:bg-gray-50">
                                    View API Docs
                                </Button>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-10 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                {['gpay', 'phonepe', 'paytm', 'bhim'].map((brand, i) => (
                                    <div key={i} className="h-8 w-auto font-bold text-gray-400 italic">
                                        {brand.toUpperCase()}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Visual - Realistic Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800 z-10 overflow-hidden">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-800 rounded-b-2xl z-20" />

                                {/* Screen Content */}
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                                    {/* Header */}
                                    <div className="bg-blue-600 p-6 pt-12 pb-20 rounded-b-[3rem] shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                        <div className="text-center text-white relative z-10">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center border border-white/30">
                                                <check className="w-8 h-8 text-white" />
                                                <CheckCircle className="w-8 h-8 text-white" />
                                            </div>
                                            <h2 className="text-xl font-bold mb-1">Payment Successful</h2>
                                            <p className="text-blue-100 text-sm">Transaction ID: #882992</p>
                                        </div>
                                    </div>

                                    {/* Amount Card */}
                                    <div className="px-6 -mt-10 relative z-20">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center"
                                        >
                                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Amount Paid</p>
                                            <h3 className="text-3xl font-bold text-gray-900">₹ 2,499.00</h3>
                                            <div className="mt-4 flex justify-between text-xs text-gray-500 border-t pt-4">
                                                <span>To: Merchant INC</span>
                                                <span>Aug 24, 10:42 AM</span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Recent Activity */}
                                    <div className="p-6 flex-1">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Live Updates</p>
                                        <div className="space-y-3">
                                            {[1, 2, 3].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.8 + (i * 0.2) }}
                                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                        <Zap className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-900">Payment Received</p>
                                                        <p className="text-[10px] text-gray-500">Just now</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Bar */}
                                    <div className="p-4 border-t">
                                        <div className="w-1/3 h-1 bg-gray-300 rounded-full mx-auto" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Orbs behind phone */}
                            <div className="absolute top-20 -right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                            <div className="absolute top-40 -left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-200" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything needed for UPI</h2>
                        <p className="text-gray-600">Complete stack for all your UPI collection needs, from dynamic QR to deep links.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: QrCode,
                                title: "Dynamic QR Codes",
                                desc: "Generate unique QRs for every transaction to track payments automatically.",
                                color: "bg-blue-500"
                            },
                            {
                                icon: Zap,
                                title: "Intent Flow",
                                desc: "Deep link directly into UPI apps on mobile for higher success rates.",
                                color: "bg-indigo-500"
                            },
                            {
                                icon: Shield,
                                title: "TPAP Approved",
                                desc: "Direct integration with NPCI for maximum reliability and uptime.",
                                color: "bg-purple-500"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Live Transaction Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                                Developer Friendly
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Integration in minutes, not weeks.</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our SDKs are designed for drop-in integration. With just a few lines of code,
                                you can start accepting UPI payments with real-time webhooks and callbacks.
                            </p>

                            <div className="flex flex-col gap-4">
                                {[
                                    { title: "Zero Hop Transaction", desc: " Direct-to-bank settlements with no intermediate nodal accounts." },
                                    { title: "Dynamic VPA", desc: " Create unlimited virtual addresses for automated reconciliation." },
                                    { title: "Smart Routing", desc: " Auto-switch between banking providers to ensure 99.9% uptime." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Code Mockup */}
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                                <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800 bg-gray-950">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-4 text-xs text-gray-400 font-mono">initiate_payment.js</span>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="text-sm font-mono leading-relaxed">
                                        <span className="text-purple-400">const</span> <span className="text-blue-400">payment</span> = <span className="text-purple-400">await</span> nwb.<span className="text-yellow-400">createTransaction</span>({'{'}
                                        <span className="text-blue-300">amount</span>: <span className="text-green-400">1500.00</span>,
                                        <span className="text-blue-300">currency</span>: <span className="text-green-400">"INR"</span>,
                                        <span className="text-blue-300">customer_vpa</span>: <span className="text-green-400">"user@upi"</span>,
                                        <span className="text-blue-300">callback_url</span>: <span className="text-green-400">"https://api.merchant.com/callback"</span>
                                        {'}'});

                                        <span className="text-gray-500">// Handle success</span>
                                        <span className="text-purple-400">if</span> (payment.status === <span className="text-green-400">"SUCCESS"</span>) {'{'}
                                        <span className="text-yellow-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">"Payment Verified!"</span>);
                                        {'}'}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden text-white">
                        {/* Abstract Background Shapes */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your UPI collections?</h2>
                            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                                Join 5000+ businesses using our stack to process over ₹100 Cr daily.
                                Get started with a 14-day free trial.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl font-bold shadow-lg">
                                    Get Started Now
                                </Button>
                                <Button variant="outline" className="border-blue-400 text-white hover:bg-blue-700/50 px-8 py-6 text-lg rounded-xl font-semibold backdrop-blur-sm">
                                    Talk to Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
