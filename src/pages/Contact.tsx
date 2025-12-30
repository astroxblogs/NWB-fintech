import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Globe } from 'lucide-react';
import { TypingText } from '@/components/ui/TypingText';

export default function Contact() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Get in touch with our <br />
                            <span className="text-blue-600">Financial Experts</span>
                        </h1>
                        <div className="text-xl text-gray-600 mb-8 h-8 flex items-center justify-center gap-2">
                            <TypingText
                                text={["24/7 Support.", "Custom Integration.", "Enterprise Solutions."]}
                                className="font-semibold text-indigo-600"
                                delay={0.5}
                                typingSpeed={100}
                                deletingSpeed={50}
                                waitTime={2000}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Global Network Background Animation */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Left: Contact Info & Visuals */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">We are here to help you grow.</h2>
                                <p className="text-gray-600 text-lg">
                                    Whether you have questions about our API, pricing, or need a custom solution, our team is ready to answer all your questions.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {[
                                    { icon: Mail, title: "Email Us", content: "support@nwb.finance", color: "text-blue-600", bg: "bg-blue-50" },
                                    { icon: Phone, title: "Call Us", content: "+1 (888) 123-4567", color: "text-green-600", bg: "bg-green-50" },
                                    { icon: MapPin, title: "Visit Us", content: "123 Fintech Blvd, New York, NY", color: "text-purple-600", bg: "bg-purple-50" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{item.title}</p>
                                            <p className="text-gray-600">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust Visual */}
                            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Shield className="w-8 h-8 text-green-400" />
                                        <h3 className="text-xl font-bold">Enterprise Grade Security</h3>
                                    </div>
                                    <p className="text-gray-400 mb-6">Your data is protected with military-grade encryption and compliant with global standards.</p>
                                    <div className="flex gap-4">
                                        {['ISO 27001', 'SOC 2', 'PCI DSS'].map(cert => (
                                            <span key={cert} className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono">{cert}</span>
                                        ))}
                                    </div>
                                </div>
                                {/* Abstract Lines */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            </div>

                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative"
                        >
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">First Name</label>
                                            <Input placeholder="John" className="rounded-xl border-gray-200 focus:ring-blue-500" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Last Name</label>
                                            <Input placeholder="Doe" className="rounded-xl border-gray-200 focus:ring-blue-500" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Work Email</label>
                                        <Input type="email" placeholder="john@company.com" className="rounded-xl border-gray-200 focus:ring-blue-500" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Company Name</label>
                                        <Input placeholder="Acme Corp" className="rounded-xl border-gray-200 focus:ring-blue-500" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Inquiry Type</label>
                                        <Select>
                                            <SelectTrigger className="rounded-xl border-gray-200 focus:ring-blue-500">
                                                <SelectValue placeholder="Select a topic" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="payments">Payments & Gateway</SelectItem>
                                                <SelectItem value="lending">Lending Solutions</SelectItem>
                                                <SelectItem value="banking">Banking as a Service</SelectItem>
                                                <SelectItem value="partnership">Partnership</SelectItem>
                                                <SelectItem value="support">Technical Support</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Message</label>
                                        <Textarea placeholder="Tell us about your project needs..." className="min-h-[120px] rounded-xl border-gray-200 focus:ring-blue-500" />
                                    </div>

                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25">
                                        Send Message
                                        <Send className="w-5 h-5 ml-2" />
                                    </Button>

                                    <p className="text-xs text-center text-gray-500 mt-4">
                                        By clicking send, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
