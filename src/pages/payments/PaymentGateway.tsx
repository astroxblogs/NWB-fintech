import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';
import { ArrowRight, CreditCard, Lock, Globe, ShieldCheck, Zap, Code, Terminal, Check } from 'lucide-react';
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
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white text-foreground">
        {/* Global Network Background Effect */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/60 via-white to-white" />
          {/* Animated Dots/Network */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-400 rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 backdrop-blur-md">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Global Payment Infrastructure</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                Payments without <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  Borders
                </span>
              </h1>

              <div className="text-xl text-gray-600 mb-8 h-8 flex items-center gap-2">
                <span>Accept</span>
                <TypingText text="Cards. Wallets. Crypto. Bank Transfers." className="font-semibold text-primary" delay={0.5} />
              </div>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                The most reliable payment gateway in the world.
                99.999% uptime, intelligent routing, and direct integrations with 100+ networks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all font-semibold border-0">
                    Start Integration
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-transparent border border-gray-200 text-gray-900 hover:bg-gray-50 px-8 py-6 text-lg rounded-xl transition-all">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Visual - Typing Card Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative perspective-1000"
            >
              {/* 3D Tilt Effect Wrapper could go here */}
              {/* Floating Elements around Card */}
              <motion.div
                className="absolute -right-8 top-20 bg-gray-800/80 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl z-20 flex items-center gap-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Security</p>
                  <p className="text-sm font-bold text-white">PCI-DSS Level 1</p>
                </div>
              </motion.div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-auto relative overflow-hidden transform rotate-y-6 rotate-x-6 hover:rotate-0 transition-transform duration-500">
                {status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="h-[340px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 relative">
                      <motion.div
                        className="absolute inset-0 bg-green-100 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <Check className="w-12 h-12 text-green-600 relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful</h3>
                    <p className="text-gray-500 mb-6">Transaction ID: #TXN-88291</p>
                    <div className="w-full bg-gray-50 rounded-xl p-4 flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Amount Paid</span>
                      <span className="text-gray-900 font-bold text-lg">₹ 2,400.00</span>
                    </div>
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
                        <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4 font-mono text-gray-800 text-lg relative transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
                          {cardNumber}
                          {status === 'typing' && <span className="w-0.5 h-6 bg-primary animate-pulse absolute ml-[ch]" style={{ left: `${cardNumber.length + 1}ch` }}></span>}
                          <CreditCard className="ml-auto w-5 h-5 text-gray-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Expiry</label>
                          <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4 font-mono text-gray-800 text-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
                            {expiry}
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">CVC</label>
                          <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4 font-mono text-gray-800 text-lg transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
                            {cvc.replace(/./g, '•')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 h-12 mt-4 text-lg rounded-lg relative overflow-hidden transition-all shadow-lg hover:shadow-primary/30">
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

      {/* Ticker Section - Supported Methods */}
      <section className="py-10 bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto px-6 mb-4">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted by 50,000+ businesses globally</p>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex gap-16 items-center min-w-full pl-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                <span className="text-2xl font-bold text-gray-400">VISA</span>
                <span className="text-2xl font-bold text-gray-400">Mastercard</span>
                <span className="text-2xl font-bold text-gray-400">PayPal</span>
                <span className="text-2xl font-bold text-gray-400">Stripe</span>
                <span className="text-2xl font-bold text-gray-400">Razorpay</span>
                <span className="text-2xl font-bold text-gray-400">Chase</span>
                <span className="text-2xl font-bold text-gray-400">American Express</span>
                <span className="text-2xl font-bold text-gray-400">RuPay</span>
                <span className="text-2xl font-bold text-gray-400">UPI</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6 font-display">
                Designed for Developers
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Integrate our payment gateway in minutes with our robust, well-documented APIs and SDKs. We provide libraries for Ruby, Python, PHP, Java, Node.js, and more.
              </p>
              <ul className="space-y-4 mb-8">
                {['99.999% Uptime SLA', 'Sandbox Environment', 'Webhooks & Events', 'Comprehensive Logs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-50">
                View Documentation
              </Button>
            </div>

            {/* Values Block */}
            <div className="bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden font-mono text-sm relative group">
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#333]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-gray-500 text-xs">create-payment.js</div>
              </div>
              <div className="p-6 text-gray-300 overflow-x-auto">
                <pre><code>{`const payment = await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method_types: ['card'],
  receipt_email: 'jenny.rosen@example.com',
});

// Confirm the payment
const confirmed = await stripe.confirmCardPayment(
  payment.client_secret
);

console.log(confirmed.status); // 'succeeded'`}</code></pre>
                <motion.div
                  className="absolute bottom-6 right-6"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-3 h-5 bg-primary" />
                </motion.div>
              </div>
            </div>
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
                className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
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

      {/* <Footer /> */}
    </div>
  );
}