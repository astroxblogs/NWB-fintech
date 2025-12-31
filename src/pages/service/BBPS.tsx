import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, Zap, Smartphone, Tv, Wifi, CreditCard, Activity, CheckCircle, Globe, Wallet } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function BBPS() {
    const [step, setStep] = useState(0); // 0: Select, 1: Fetch, 2: Pay, 3: Success

    // Auto-play the bill payment animation
    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-orange-50 to-blue-50">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-200/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-200/20 blur-3xl rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/50 border border-orange-200 mb-6 backdrop-blur-sm">
                                <Zap className="w-4 h-4 text-orange-600" />
                                <span className="text-sm font-medium text-orange-700">Bharat Bill Payment System</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                                One Platform for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Every Bill Payment</span>
                            </h1>

                            <div className="text-xl text-gray-600 mb-8 flex items-center gap-2 flex-wrap">
                                <span>Pay for</span>
                                <TypingText
                                    text="Electricity. Water. DTH. Broadband. Gas. Fastag."
                                    className="font-semibold text-orange-600"
                                    delay={0.5}
                                />
                            </div>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Empower your customers with a unified bill payment interface.
                                Access 20,000+ billers across India with instant confirmation and settlement.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all">
                                        Integrate BBPS
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50 px-8 py-6 text-lg rounded-xl">
                                    Explore Categories
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual - Bill Payment Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[550px] flex items-center justify-center p-4"
                        >
                            <div className="relative z-10 w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.01]">
                                {/* Mobile Header */}
                                <div className="bg-blue-600 p-6 text-white pb-12 rounded-b-[2rem] shadow-md z-20 relative">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                            <Wallet className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-semibold">Pay Bills</span>
                                        <div className="w-8 h-8 rounded-full bg-white/20" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-blue-100 text-sm mb-1">Total Due</p>
                                        <p className="text-3xl font-bold">₹ 4,250.00</p>
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="px-6 -mt-8 relative z-30 h-[350px]">
                                    {/* Step 0: Category Grid */}
                                    {step === 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                            className="bg-white rounded-xl shadow-lg p-4 border border-gray-50 mb-4 h-full"
                                        >
                                            <p className="text-sm font-semibold text-gray-700 mb-4">Select Category</p>
                                            <div className="grid grid-cols-3 gap-4">
                                                {[
                                                    { icon: Zap, label: 'Elec', color: 'bg-yellow-100 text-yellow-600' },
                                                    { icon: Smartphone, label: 'Mobile', color: 'bg-blue-100 text-blue-600' },
                                                    { icon: Tv, label: 'DTH', color: 'bg-purple-100 text-purple-600' },
                                                    { icon: Activity, label: 'Water', color: 'bg-cyan-100 text-cyan-600' },
                                                    { icon: Wifi, label: 'Net', color: 'bg-red-100 text-red-600' },
                                                    { icon: Globe, label: 'Gas', color: 'bg-green-100 text-green-600' },
                                                ].map((item, i) => (
                                                    <div key={i} className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                                                            <item.icon className="w-6 h-6" />
                                                        </div>
                                                        <span className="text-xs font-medium text-gray-600">{item.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 1: Fetching Bill */}
                                    {step === 1 && (
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-50 h-full flex flex-col items-center justify-center text-center space-y-6"
                                        >
                                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center animate-pulse">
                                                <Zap className="w-8 h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg">Fetching Bill...</h3>
                                                <p className="text-sm text-gray-500">Connecting to Biller Network</p>
                                            </div>
                                            <div className="w-full max-w-[200px] h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 animate-[loading_1s_ease_infinite] w-1/2" />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Confirmation / Pay */}
                                    {step === 2 && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-50 h-full flex flex-col"
                                        >
                                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                                    <Zap className="w-5 h-5 text-yellow-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Tata Power</p>
                                                    <p className="text-xs text-gray-500">Consumer ID: 1029384756</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4 mb-auto">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-500">Bill Date</span>
                                                    <span className="font-medium">28 Dec 2024</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-500">Due Date</span>
                                                    <span className="font-medium text-red-500">05 Jan 2025</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-200">
                                                    <span className="font-semibold text-gray-900">Amount</span>
                                                    <span className="text-xl font-bold text-gray-900">₹ 2,450</span>
                                                </div>
                                            </div>

                                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-6">
                                                Pay Now
                                            </Button>
                                        </motion.div>
                                    )}

                                    {/* Step 3: Success */}
                                    {step === 3 && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                            className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-center text-center"
                                        >
                                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                                                <CheckCircle className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
                                            <p className="text-green-100 mb-8">Transaction ID: BBPS829102</p>
                                            <div className="bg-white/10 rounded-lg p-3 w-full backdrop-blur-sm">
                                                <p className="text-xs text-green-50 mb-1">Receipt sent to</p>
                                                <p className="font-medium">alex@example.com</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Why Choose Our BBPS?</span>
                        <h2 className="text-4xl font-bold text-primary mb-6">Simplifying Bill Collections</h2>
                        <p className="text-xl text-gray-600">
                            A robust infrastructure designed for high success rates, instant settlements, and widest category coverage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "20,000+ Billers",
                                desc: "Access the largest network of utility providers across India via a single API.",
                                icon: Globe,
                                color: "orange"
                            },
                            {
                                title: "Instant Settlement",
                                desc: "Real-time transaction processing and instant confirmation from billers.",
                                icon: Zap,
                                color: "blue"
                            },
                            {
                                title: "Smart Validations",
                                desc: "Auto-fetch bill details using consumer parameters to prevent wrong payments.",
                                icon: CheckCircle,
                                color: "green"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-primary mb-6">Covering Every <br />Payment Need</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                From recurring utility bills to one-time payments like Fastag and loan repayments, we cover it all.
                            </p>
                            <Button className="text-blue-600 bg-blue-100 hover:bg-blue-200">
                                View Biller List
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                "Electricity", "Mobile Postpaid", "DTH", "Water", "Gas Pipeline", "Broadband", "Fastag", "Loan Repayment", "Insurance Info"
                            ].map((cat, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span className="font-medium text-gray-700 text-sm">{cat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start collecting payments?</h2>
                    <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">Integration takes less than 24 hours. Get your API keys today.</p>
                    <Link to="/contact">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-lg shadow-orange-900/20">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
