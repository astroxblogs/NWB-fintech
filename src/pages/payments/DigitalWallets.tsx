import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, Wallet, Radio, Zap } from 'lucide-react';

export default function DigitalWallets() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* <Navbar /> */}

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-vr from-orange-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/50 border border-orange-200 mb-6 backdrop-blur-sm">
                                <Wallet className="w-4 h-4 text-orange-600" />
                                <span className="text-sm font-medium text-orange-700">Mobile First</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
                                One Tap. <br />
                                <span className="text-accent">Done.</span>
                            </h1>

                            <div className="flex justify-center mb-10">
                                <TypingText text="Amazon Pay. PhonePe. Paytm. Freecharge." className="text-xl font-semibold text-gray-500" delay={0.5} />
                            </div>

                            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                                Offer your customers the fastest checkout experience.
                                Pre-integrated with India's leading digital wallets for instant payments.
                            </p>

                            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105">
                                Integrate Wallets
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Orbit Animation Visual */}
                    <div className="relative max-w-5xl mx-auto h-[400px] flex items-center justify-center">
                        {/* Center Core */}
                        <div className="absolute w-24 h-24 bg-white rounded-full shadow-2xl border-4 border-orange-100 flex items-center justify-center z-10">
                            <Zap className="w-10 h-10 text-orange-500" />
                        </div>

                        {/* Orbit Rings */}
                        <div className="absolute w-[300px] h-[300px] border border-dashed border-gray-300 rounded-full animate-spin-slow opacity-50" style={{ animationDuration: '20s' }} />
                        <div className="absolute w-[500px] h-[500px] border border-dashed border-gray-200 rounded-full animate-spin-slow opacity-30" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

                        {/* Floating Wallets - Inner Orbit */}
                        {[
                            { color: 'bg-yellow-500', name: 'AP' },
                            { color: 'bg-purple-600', name: 'PP' },
                            { color: 'bg-blue-400', name: 'PT' },
                        ].map((w, i) => (
                            <motion.div
                                key={i}
                                className={`absolute w-16 h-16 rounded-2xl ${w.color} shadow-lg flex items-center justify-center text-white font-bold text-lg border-4 border-white`}
                                animate={{ rotate: 360 }}
                                style={{
                                    offsetPath: "path('M 0 -150 A 150 150 0 1 1 0 150 A 150 150 0 1 1 0 -150')",
                                    offsetDistance: `${i * 33}%`,
                                }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                {w.name}
                            </motion.div>
                        ))}

                        {/* Static Grid (Fallback for animation complexity) */}
                        <div className="grid grid-cols-4 gap-8 absolute w-full top-1/2 -translate-y-1/2 opacity-0 lg:opacity-100 pointer-events-none">
                            {[
                                { name: 'Amazon Pay', color: 'bg-yellow-500', rotate: -10, y: -40 },
                                { name: 'PhonePe', color: 'bg-purple-600', rotate: 5, y: 20 },
                                { name: 'Paytm', color: 'bg-blue-400', rotate: -5, y: -30 },
                                { name: 'Mobikwik', color: 'bg-blue-600', rotate: 10, y: 10 },
                            ].map((wallet, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [wallet.y, wallet.y - 20, wallet.y] }}
                                    transition={{ duration: 4, delay: i, repeat: Infinity, ease: "easeInOut" }}
                                    className={`mx-auto w-20 h-20 rounded-2xl ${wallet.color} flex items-center justify-center text-white font-bold shadow-xl border-4 border-white transform rotate-${wallet.rotate}`}
                                >
                                    <Wallet className="w-8 h-8" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Comparison Section */}
            <section className="py-24 bg-orange-50 border-y border-orange-100/50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-6">Why customers love wallets.</h2>
                        <p className="text-xl text-gray-600">
                            Remove friction from value-shoppers. Wallets users convert 20% higher than card users.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Cashback Offers", icon: Zap, color: "text-amber-500", desc: "Native integration with wallet loyalty programs and scratch cards." },
                            { title: "One-Tap Auth", icon: Radio, color: "text-blue-500", desc: "No OTP required for small value transactions on supported networks." },
                            { title: "InstantRefunds™", icon: Wallet, color: "text-green-500", desc: "Refunds hit the customer's wallet in 2 seconds, not 5 days." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6`}>
                                    <card.icon className={`w-7 h-7 ${card.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-tr from-orange-500 to-amber-500 rounded-[3rem] p-12 shadow-[0_20px_50px_rgba(249,115,22,0.3)] relative overflow-hidden text-white">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6">Capture the Gen-Z market.</h2>
                            <p className="text-orange-50 text-lg mb-10 max-w-2xl mx-auto">
                                Enable all major digital wallets with a single line of code.
                            </p>

                            <div className="flex justify-center gap-4">
                                <Button className="bg-white text-primary hover:bg-orange-50 px-8 py-6 text-lg rounded-xl font-bold shadow-lg">
                                    Start Integration
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div >
    );
}
