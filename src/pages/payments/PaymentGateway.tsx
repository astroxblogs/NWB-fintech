import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, CreditCard, Lock, Globe, ShieldCheck, Zap, CheckCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PaymentGateway() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [status, setStatus] = useState('idle'); // idle, typing, processing, success

  useEffect(() => {
    const typeCard = async () => {
      setStatus('typing');
      const number = "4242424242424242";
      for (let i = 0; i <= number.length; i++) {
        setCardNumber(number.slice(0, i).replace(/(\d{4})/g, '$1 ').trim());
        await new Promise(r => setTimeout(r, 50));
      }

      const exp = "1228";
      for (let i = 0; i <= exp.length; i++) {
        setExpiry(exp.slice(0, i).replace(/(\d{2})/, '$1/'));
        await new Promise(r => setTimeout(r, 50));
      }

      const cv = "123";
      for (let i = 0; i <= cv.length; i++) {
        setCvc(cv.slice(0, i));
        await new Promise(r => setTimeout(r, 50));
      }

      setStatus('processing');
      await new Promise(r => setTimeout(r, 1500));
      setStatus('success');
    };

    const interval = setInterval(() => {
      setCardNumber('');
      setExpiry('');
      setCvc('');
      setStatus('idle');
      setTimeout(typeCard, 500);
    }, 8000);

    typeCard();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Background Mesh */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-100">Global Processing</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Payments without <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Borders
                </span>
              </h1>

              <div className="text-xl text-gray-300 mb-8 h-8 flex items-center gap-2">
                <span>Accept</span>
                <TypingText text="Cards. Wallets. Crypto. Bank Transfers." className="font-semibold text-white" delay={0.5} />
              </div>

              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
                The most reliable payment gateway in the world.
                99.999% uptime, intelligent routing, and direct integrations with 100+ networks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg transition-all font-semibold">
                  Start Integration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  Contact Sales
                </Button>
              </div>
            </motion.div>

            {/* Visual - Typing Card Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto relative overflow-hidden">
                {status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="h-[340px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <ShieldCheck className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful</h3>
                    <p className="text-gray-500">Transaction ID: #TXN-88291</p>
                  </motion.div>
                ) : (
                  <div className="space-y-6 h-[340px]">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-lg font-bold text-gray-900">Secure Checkout</h3>
                      <Lock className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Card Number</label>
                        <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4 font-mono text-gray-800 text-lg relative">
                          {cardNumber}
                          {status === 'typing' && <span className="w-0.5 h-6 bg-blue-500 animate-pulse absolute ml-[ch]" style={{ left: `${cardNumber.length + 1}ch` }}></span>}
                          <CreditCard className="ml-auto w-5 h-5 text-gray-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Expiry</label>
                          <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4 font-mono text-gray-800 text-lg">
                            {expiry}
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">CVC</label>
                          <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4 font-mono text-gray-800 text-lg">
                            {cvc.replace(/./g, '•')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 mt-4 text-lg rounded-lg relative overflow-hidden">
                      {status === 'processing' ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </div>
                      ) : (
                        <span className="flex items-center gap-2 justify-center">
                          Pay ₹ 2,400 <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Uptime", val: "99.999%", icon: Zap },
              { label: "Currencies", val: "135+", icon: Globe },
              { label: "Time to Integrate", val: "<1 Hour", icon: Lock },
              { label: "Compliance", val: "PCI-DSS", icon: ShieldCheck },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.val}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}