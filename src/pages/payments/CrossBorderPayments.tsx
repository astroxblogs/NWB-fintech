import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, Globe, ArrowLeftRight, Coins, Plane } from 'lucide-react';

export default function CrossBorderPayments() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Exchange UI w/ Animations */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            {/* Spinning Globe Background */}
                            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse" />

                            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative z-10 w-full max-w-md mx-auto backdrop-blur-xl bg-white/80">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <Globe className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">Global Transfer</h3>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        Lowest Fees
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    {/* From Card */}
                                    <div className="bg-gray-50 rounded-t-2xl p-6 border border-gray-100 hover:bg-gray-100 transition-colors group cursor-pointer">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-500 text-xs font-medium uppercase">You Send</span>
                                            <span className="font-bold text-gray-900 group-hover:text-blue-600">USD</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-3xl font-bold text-gray-900">1,000.00</span>
                                            <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border-2 border-white">
                                                <img src="https://flagcdn.com/w80/us.png" alt="US Flag" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    <div className="h-0 relative z-20">
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                                            <ArrowLeftRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    {/* To Card */}
                                    <div className="bg-gray-50 rounded-b-2xl p-6 border border-gray-100 hover:bg-gray-100 transition-colors group cursor-pointer pt-8">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-500 text-xs font-medium uppercase">Recipient Gets</span>
                                            <span className="font-bold text-gray-900 group-hover:text-green-600">INR</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-3xl font-bold text-gray-900">83,450.00</span>
                                            <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border-2 border-white">
                                                <img src="https://flagcdn.com/w80/in.png" alt="India Flag" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-between text-xs text-gray-500 px-2 bg-gray-50/50 p-3 rounded-lg border border-dashed border-gray-200">
                                    <span className="flex items-center gap-1"><Plane className="w-3 h-3" /> Arrives: Instant</span>
                                    <span className="font-mono">Rate: $1 = ₹83.45</span>
                                </div>
                            </div>

                            {/* Flying Coins Animation */}
                            {Array.from({ length: 4 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{ top: '30%', left: '40%' }}
                                    animate={{
                                        x: [0, 100 + (i * 30), 120 + (i * 20)],
                                        y: [0, -60 - (i * 20), 150],
                                        opacity: [0, 1, 0],
                                        rotate: [0, 180, 720],
                                        scale: [0.5, 1, 0.8]
                                    }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
                                >
                                    <Coins className="w-8 h-8 text-yellow-500 fill-yellow-400 drop-shadow-lg" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Content */}
                        <motion.div className="order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-6 backdrop-blur-sm">
                                <Globe className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-700">100+ Currencies</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Global Payments <br />
                                <span className="text-blue-600">Local Feel</span>
                            </h1>

                            <div className="mb-8 h-8">
                                <TypingText text="Pay USD. Receive INR. Zero Hassle." className="text-xl font-medium text-gray-500" delay={0.5} />
                            </div>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Accept international payments as easily as local ones.
                                We handle the complexity of local regulations, FIRC, and currency conversion.
                            </p>

                            <div className="flex gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                    Go Global
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Comparison Section */}
            <section className="py-24 bg-blue-50 border-y border-blue-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Receive money like a local.</h2>
                        <p className="text-xl text-gray-600">
                            Give your international customers local bank details in 35+ currencies.
                            Collect payments without them paying wire fees.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { flag: "us", code: "USD", name: "United States" },
                            { flag: "eu", code: "EUR", name: "Europe" },
                            { flag: "gb", code: "GBP", name: "United Kingdom" },
                            { flag: "jp", code: "JPY", name: "Japan" },
                            { flag: "au", code: "AUD", name: "Australia" },
                            { flag: "ca", code: "CAD", name: "Canada" },
                            { flag: "sg", code: "SGD", name: "Singapore" },
                            { flag: "ae", code: "AED", name: "UAE" },
                        ].map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 rounded-full overflow-hidden shadow-inner border border-gray-100">
                                    <img
                                        src={`https://flagcdn.com/w80/${c.flag}.png`}
                                        alt={c.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{c.code}</p>
                                    <p className="text-xs text-gray-500">{c.name}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-10"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Expand your business globally.</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Open your multi-currency account today. No physical presence required.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl font-bold shadow-lg">
                            Start Collecting Globally
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}
