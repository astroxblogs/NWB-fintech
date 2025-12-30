import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, CreditCard, Lock, Globe, Zap, Shield } from 'lucide-react';

export default function CardProcessing() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual - 3D Card Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1 perspective-1000"
                        >
                            <div className="relative w-full max-w-md mx-auto aspect-[1.586/1]">
                                {/* Card Container */}
                                <motion.div
                                    initial={{ rotateY: 15, rotateX: 10 }}
                                    animate={{
                                        rotateY: [15, -15, 15],
                                        rotateX: [10, 5, 10],
                                        y: [-10, 10, -10]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 shadow-2xl relative z-20 border border-gray-700 overflow-hidden group"
                                >
                                    {/* Holographic Glint */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-shine opacity-50" />

                                    {/* Metal Texture */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>

                                    <div className="flex justify-between items-start mb-12 relative z-10">
                                        <div className="flex gap-2">
                                            <div className="w-8 h-5 rounded bg-amber-200/20 border border-amber-200/50 backdrop-blur-sm" />
                                            <CreditCard className="w-10 h-10 text-purple-400" />
                                        </div>
                                        <Zap className="w-6 h-6 text-yellow-400" />
                                    </div>

                                    <div className="space-y-6 relative z-10">
                                        <div className="text-2xl font-mono tracking-[0.15em] text-white/90 drop-shadow-md">
                                            4829 1193 4293 8821
                                        </div>
                                        <div className="flex justify-between items-end text-white/80">
                                            <div>
                                                <p className="text-[9px] uppercase tracking-widest mb-1 opacity-70">Card Holder</p>
                                                <p className="font-medium tracking-wide">PRIYANSHU SOLANKI</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] uppercase tracking-widest mb-1 opacity-70">Expires</p>
                                                <p className="font-medium tracking-wide">12/28</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visa/Mastercard Logo */}
                                    <div className="absolute bottom-6 right-8 opacity-80">
                                        <div className="flex -space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/80" />
                                            <div className="w-8 h-8 rounded-full bg-orange-500/80" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Shadow */}
                                <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/30 blur-2xl rounded-full transform rotateY-15 opacity-60 animate-shadow-pulse" />
                            </div>

                            {/* Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -20, y: 20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 max-w-xs z-30"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">3D Secure 2.0</p>
                                        <p className="text-xs text-gray-500">Liability Shift Active</p>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>

                        {/* Content */}
                        <motion.div className="order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 border border-purple-200 mb-6 backdrop-blur-sm">
                                <CreditCard className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-purple-700">Global Processing</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Accept Cards <br />
                                <span className="text-purple-600">With Confidence</span>
                            </h1>

                            <div className="text-xl text-gray-600 mb-8 h-8 flex items-center gap-2">
                                <TypingText text="Visa. Mastercard. Amex. Rupay." className="font-semibold text-purple-600" delay={0.5} />
                            </div>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Direct integration with card networks for higher success rates, lower latency, and reduced fees.
                                Smart routing automatically retries failed transactions via alternate paths.
                            </p>

                            <div className="flex gap-4">
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                    Enable Card Payments
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Global Scale Section */}
            <section className="py-24 bg-gray-900 overflow-hidden relative">
                {/* Map Background */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-center bg-no-repeat bg-contain"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-6 border border-purple-500/30">
                            borderless payments
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Sell to the world.</h2>
                        <p className="text-xl text-gray-400">
                            Automatically present prices in local currencies. We handle the forex, compliance, and settlement.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-6">
                        {[
                            { country: "United States", currency: "USD", rate: "2.9%", vol: "$50M+" },
                            { country: "United Kingdom", currency: "GBP", rate: "2.9%", vol: "£22M+" },
                            { country: "European Union", currency: "EUR", rate: "2.9%", vol: "€35M+" },
                            { country: "UAE", currency: "AED", rate: "3.5%", vol: "AED 100M+" }
                        ].map((region, i) => (
                            <div key={i} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold group-hover:bg-purple-600 transition-colors">
                                        {region.currency.charAt(0)}
                                    </div>
                                    <Globe className="w-5 h-5 text-gray-500 group-hover:text-purple-400" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">{region.country}</h4>
                                <p className="text-sm text-gray-400 mb-4">{region.currency} Processing</p>
                                <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-4">
                                    <span className="text-gray-500">Success Rate</span>
                                    <span className="text-green-400 font-bold">98.5%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6">Ready to go global?</h2>
                            <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
                                Start accepting international cards in less than 10 minutes.
                            </p>

                            <div className="flex justify-center gap-4">
                                <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-xl font-bold shadow-lg">
                                    Enable International Payments
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
