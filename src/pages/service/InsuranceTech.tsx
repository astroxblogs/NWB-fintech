import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, Umbrella, ShieldCheck, FileText, HeartPulse, Car } from 'lucide-react';

export default function InsuranceTech() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

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
                                <span className="text-sm font-medium text-red-700">Digital Insurance</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Embed Insurance <br />
                                <span className="text-red-600">In 2 Lines of Code</span>
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
                            </div>
                        </motion.div>

                        {/* Visual - Policy Stack Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] flex items-center justify-center"
                        >
                            {/* Background Blob */}
                            <div className="absolute w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30 animate-pulse" />

                            {/* Floating Cards */}
                            <div className="relative z-10 w-full max-w-sm perspective-1000">
                                {[
                                    { title: 'Vehicle Insurance', color: 'bg-blue-600', icon: Car, price: '₹ 12,000', delay: 0 },
                                    { title: 'Health Protect', color: 'bg-green-600', icon: HeartPulse, price: '₹ 8,999', delay: 1 },
                                    { title: 'Device Protection', color: 'bg-gray-900', icon: ShieldCheck, price: '₹ 2,499', delay: 2 }
                                ].map((card, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute top-0 left-0 right-0 p-6 rounded-2xl shadow-xl text-white ${card.color} border border-white/10`}
                                        initial={{ y: 0, scale: 1, zIndex: 10 - i }}
                                        animate={{
                                            y: [i * 20, (i * 20) - 10, i * 20],
                                            rotateX: [0, 5, 0]
                                        }}
                                        style={{ top: i * 60 }} // Stacking effect
                                        transition={{ duration: 4, repeat: Infinity, delay: card.delay, ease: "easeInOut" }}
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="bg-white/20 p-2 rounded-lg">
                                                <card.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs opacity-70 uppercase tracking-widest">Premium</p>
                                                <p className="text-xl font-bold">{card.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                                            <p className="text-xs opacity-70">Coverage Active • Auto-renewal</p>
                                        </div>

                                        <div className="mt-6 flex justify-between items-center opacity-50 text-[10px]">
                                            <span>POLICY #882991{i}</span>
                                            <span>VALID THRU 12/25</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Risk Engine Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Smarter underwriting.</h2>
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
                            <div key={i} className="bg-red-50 p-8 rounded-3xl border border-red-100 hover:bg-red-100/50 transition-colors duration-300">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                                    <card.icon className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ef4444_0%,transparent_50%)] opacity-20"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Launch an insurance product in weeks.</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Don't spend months negotiating with carriers. We have the pipes ready.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-red-600 hover:bg-red-500 text-white px-8 py-6 text-lg rounded-xl font-bold shadow-lg shadow-red-900/50">
                            Build Insurance Product
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}
