import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, QrCode, Volume2, Wifi } from 'lucide-react';

export default function QRCollection() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual - Soundbox Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative lg:order-2 flex justify-center"
                        >
                            <div className="relative w-64 aspect-[3/4] preserve-3d">
                                {/* Soundbox Body */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] shadow-2xl flex flex-col items-center pt-8 border-4 border-gray-800 z-20">
                                    {/* Display */}
                                    <div className="w-48 h-32 bg-gray-950 rounded-xl border border-gray-700 flex flex-col items-center justify-center mb-8 relative overflow-hidden">
                                        <div className="flex gap-1 absolute top-3 right-3">
                                            <Wifi className="w-3 h-3 text-green-500" />
                                            <div className="w-4 h-2 bg-green-500 rounded-[1px]" />
                                        </div>
                                        <p className="text-gray-400 text-xs mb-1">Received</p>
                                        <p className="text-white text-3xl font-bold">₹ 500</p>
                                    </div>

                                    {/* Speaker Grille */}
                                    <div className="w-full flex-1 bg-gray-800 relative overflow-hidden rounded-b-[1.7rem]">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.5)_2px,transparent_2px)] bg-[length:8px_8px] opacity-50"></div>

                                        {/* Brand Logo Area */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                                            <h3 className="text-white font-bold tracking-[0.2em] text-sm opacity-50">SOUNDBOX</h3>
                                        </div>
                                    </div>

                                    {/* Sound Waves Animation */}
                                    <motion.div
                                        className="absolute -right-10 top-1/2 -translate-y-1/2 flex gap-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        {[1, 1.5, 1].map((scale, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [10, 40 * scale, 10] }}
                                                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                                className="w-1.5 bg-blue-500 rounded-full"
                                            />
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Shadow */}
                                <div className="absolute -bottom-8 left-10 right-10 h-8 bg-black/20 blur-xl rounded-full" />
                            </div>
                        </motion.div>


                        {/* Content */}
                        <motion.div
                            className="lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                                <Volume2 className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-700">IoT Enabled</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Listen to your <br />
                                <span className="text-blue-600">Payments</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Smart soundboxes that announce payments in real-time.
                                Supports 10+ languages and 4G connectivity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                    Order Soundbox
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">3 Days</p>
                                    <p className="text-sm text-gray-600">Battery Life</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">4G</p>
                                    <p className="text-sm text-gray-600">Instant Alert</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Hardware Features Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                            Next-Gen Hardware
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for the Indian Market.</h2>
                        <p className="text-xl text-gray-600">
                            Rugged, loud, and reliable. Our soundboxes are designed to withstand dust, heat, and high payment volumes.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Volume2,
                                title: "Super Loud Audio",
                                desc: "85dB speaker ensures you never miss a payment alert, even in a noisy market.",
                                img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                icon: Wifi,
                                title: "Always Connected",
                                desc: "Built-in 4G SIM with multi-network roaming. Works even when WiFi is down.",
                                img: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                icon: QrCode,
                                title: "Instant Display",
                                desc: "Large LED display shows the amount paid instantly for varying amount transactions.",
                                img: "https://images.unsplash.com/photo-1622630998477-20aa696fab05?q=80&w=800&auto=format&fit=crop"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30 z-20">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#ffffff_20px,#ffffff_21px)]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Upgrade your counter today.</h2>
                    <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
                        Order your Soundbox now and get the first month rental for free.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl font-bold shadow-lg">
                            Order Now
                        </Button>
                        <Button variant="outline" className="border-blue-400 text-white hover:bg-blue-800/50 px-8 py-4 text-lg rounded-xl font-semibold backdrop-blur-sm">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
