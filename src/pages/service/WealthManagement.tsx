import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, TrendingUp, PieChart, Coins } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

export default function WealthManagement() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-ember-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100/50 border border-yellow-200 mb-6 backdrop-blur-sm">
                                <Coins className="w-4 h-4 text-yellow-700" />
                                <span className="text-sm font-medium text-yellow-700">Digital Wealth</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Invest. Grow. <br />
                                <span className="text-yellow-600">Prosper.</span>
                            </h1>

                            <div className="mb-8 h-8">
                                <TypingText text="Mutual Funds. Digital Gold. Fixed Deposits." className="text-xl font-medium text-gray-500" delay={0.5} />
                            </div>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Offer your customers a complete suite of investment products.
                                Embed wealth management directly into your app with our unified API.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all">
                                    Explore APIs
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual - Chart Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 relative z-10">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <p className="text-gray-500 font-medium text-sm">Total Portfolio Value</p>
                                        <h3 className="text-4xl font-bold text-gray-900">₹ 24,50,000</h3>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                        <TrendingUp className="w-4 h-4" />
                                        +12.5%
                                    </div>
                                </div>

                                <div className="h-64 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={data}>
                                            <defs>
                                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#EAB308" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#EAB308" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                            <Tooltip
                                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="pv"
                                                stroke="#EAB308"
                                                strokeWidth={3}
                                                fillOpacity={1}
                                                fill="url(#colorPv)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    {[
                                        { label: 'Gold', val: '15%', color: 'bg-yellow-500' },
                                        { label: 'Equity', val: '65%', color: 'bg-blue-500' },
                                        { label: 'Debt', val: '20%', color: 'bg-purple-500' }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                                            <div className={`w-3 h-3 rounded-full ${item.color} mx-auto mb-2`} />
                                            <p className="font-bold text-gray-900">{item.val}</p>
                                            <p className="text-xs text-gray-500">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Investment Suite Section */}
            <section className="py-24 bg-yellow-50 border-y border-yellow-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">One API, infinite assets.</h2>
                        <p className="text-xl text-gray-600">
                            Give your users access to the entire financial market. We handle the brokerage and custody.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Direct Mutual Funds", yield: "12-15%", risk: "Moderate" },
                            { title: "Digital Gold", yield: "8-10%", risk: "Low" },
                            { title: "Corporate Bonds", yield: "9-11%", risk: "Low" },
                            { title: "US Stocks", yield: "Variable", risk: "High" }
                        ].map((asset, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-100 hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{asset.title}</h3>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Avg. Yield</span>
                                    <span className="font-bold text-green-600">{asset.yield}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm mt-1">
                                    <span className="text-gray-500">Risk Profile</span>
                                    <span className={`font-bold ${asset.risk === 'High' ? 'text-red-500' : 'text-blue-500'}`}>{asset.risk}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Ready to Join CTA */}
            <section className="py-24 bg-yellow-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')] opacity-10"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Build the next wealth-tech unicorn.</h2>
                    <p className="text-yellow-100 text-lg mb-10 max-w-2xl mx-auto">
                        Zero friction onboarding. Instant KYC. Fractional investing.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button className="bg-white text-yellow-900 hover:bg-yellow-50 px-8 py-6 text-lg rounded-xl font-bold shadow-lg shadow-yellow-900/50">
                            Start Building
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
