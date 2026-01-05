import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, CalendarClock, PieChart, Percent, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

export default function BNPL() {
    const [amount, setAmount] = useState([24000]);

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* <Navbar /> */}

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/50 border border-green-200 mb-6 backdrop-blur-sm">
                                <CalendarClock className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-green-700">Buy Now Pay Later</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                                Sales up by 30%. <br />
                                <span className="text-secondary">Risk down to 0%.</span>
                            </h1>

                            <div className="mb-8 h-8">
                                <TypingText text="No Cost EMI. Pay in 3. Pay Later." className="text-xl font-medium text-gray-500" delay={0.5} />
                            </div>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Empower your customers with affordability.
                                We settle the full amount to your bank upfront while your customer pays over time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                    Enable BNPL
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual - Interactive EMI Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex justify-center"
                        >
                            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-sm relative z-10 transition-transform hover:-translate-y-2 duration-300">
                                <div className="mb-8 text-center bg-gray-50 rounded-2xl p-6">
                                    <p className="text-gray-500 mb-2 font-medium">Order Total</p>
                                    <h3 className="text-4xl font-bold text-gray-900">₹ {amount[0].toLocaleString()}</h3>

                                    <div className="mt-4 px-4">
                                        <Slider
                                            value={amount}
                                            onValueChange={setAmount}
                                            min={5000}
                                            max={100000}
                                            step={1000}
                                            className="touch-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {/* Plan 1 */}
                                    <div className="bg-green-50 rounded-xl p-4 border border-green-200 flex items-center justify-between cursor-pointer ring-2 ring-green-500 relative overflow-hidden group">
                                        <div className="absolute right-0 top-0 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold">POPULAR</div>
                                        <div>
                                            <p className="font-bold text-lg text-gray-900">3 Months</p>
                                            <p className="text-xs text-green-700 font-semibold bg-green-200 px-2 py-0.5 rounded-md inline-block mt-1">No Cost EMI</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg text-gray-900">₹ {(amount[0] / 3).toLocaleString()}</p>
                                            <p className="text-xs text-gray-500">per month</p>
                                        </div>
                                    </div>

                                    {/* Plan 2 */}
                                    <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
                                        <div>
                                            <p className="font-bold text-lg text-gray-900">6 Months</p>
                                            <p className="text-xs text-gray-500">14% p.a.</p>
                                        </div>
                                        <div className="text-right group-hover:opacity-100 transition-opacity">
                                            <p className="font-bold text-lg text-gray-900">₹ {Math.ceil((amount[0] * 1.07) / 6).toLocaleString()}</p>
                                            <p className="text-xs text-gray-500">per month</p>
                                        </div>
                                    </div>

                                    {/* Plan 3 */}
                                    <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
                                        <div>
                                            <p className="font-bold text-lg text-gray-900">9 Months</p>
                                            <p className="text-xs text-gray-500">14% p.a.</p>
                                        </div>
                                        <div className="text-right group-hover:opacity-100 transition-opacity">
                                            <p className="font-bold text-lg text-gray-900">₹ {Math.ceil((amount[0] * 1.105) / 9).toLocaleString()}</p>
                                            <p className="text-xs text-gray-500">per month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Credit Engine Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                            Instant Approvals
                        </div>
                        <h2 className="text-4xl font-bold text-primary mb-6">Underwriting in milliseconds.</h2>
                        <p className="text-xl text-gray-600">
                            Our AI-driven credit engine analyzes 500+ data points to approve customers instantly, without any paperwork.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {[
                                { title: "Identity Check", icon: CreditCard, desc: "Instant KYC using PAN and Aadhaar databases.", delay: 0 },
                                { title: "Credit AI", icon: PieChart, desc: "Alternative data scoring for customers with thin credit files.", delay: 0.2 },
                                { title: "Instant Limit", icon: Percent, desc: "Real-time credit limit assignment and EMI generation.", delay: 0.4 }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: step.delay }}
                                    className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-8 ring-white">
                                        <step.icon className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-green-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Boost your sales today.</h2>
                    <p className="text-xl text-green-200 mb-10 max-w-2xl mx-auto">
                        Merchants using our BNPL engine see a 25% increase in average order value.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-white text-primary hover:bg-green-50 px-8 py-6 text-lg rounded-xl font-bold shadow-lg">
                            Activate BNPL
                        </Button>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div >
    );
}
