import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  CreditCard,
  Building2,
  Wallet,
  Banknote,
  Globe,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Shield,
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react';
import { TypingText } from '@/components/ui/TypingText';

const payments = [
  {
    icon: CreditCard,
    title: 'Payment Gateway',
    subtitle: 'Secure payment processing infrastructure',
    description: 'Enterprise-grade payment gateway with advanced security features, multi-currency support, and seamless integration with all major payment methods.',
    features: [
      'PCI DSS Level 1 compliant',
      'Multi-currency processing',
      'Real-time fraud detection',
      'Advanced analytics dashboard'
    ],
    benefits: ['Reduce transaction failures by 95%', 'Accept 150+ currencies', 'Settle funds in real-time', 'Comprehensive API support'],
    link: '/payments/gateway'
  },
  {
    icon: Building2,
    title: 'UPI Solutions',
    subtitle: 'Unified Payments Interface integration',
    description: 'Complete UPI ecosystem with merchant solutions, QR code generation, and seamless integration with all UPI apps across India.',
    features: [
      'All UPI apps supported',
      'Dynamic QR generation',
      'Real-time notifications',
      'Merchant dashboard'
    ],
    benefits: ['Reach 200M+ UPI users', 'Instant settlements', 'Zero transaction fees', 'Mobile-first experience'],
    link: '/payments/upi'
  },
  {
    icon: CreditCard,
    title: 'Card Processing',
    subtitle: 'Global card payment acceptance',
    description: 'Accept all major credit and debit cards with tokenization, 3D Secure, and comprehensive risk management for international transactions.',
    features: [
      'Visa, Mastercard, Amex support',
      'Tokenization & encryption',
      '3D Secure authentication',
      'Chargeback management'
    ],
    benefits: ['Global card acceptance', 'Enhanced security', 'Reduced chargebacks', 'Multi-region support'],
    link: '/payments/cards'
  },
  {
    icon: Wallet,
    title: 'Digital Wallets',
    subtitle: 'Mobile wallet integration platform',
    description: 'Seamless integration with popular digital wallets including Paytm, Google Pay, PhonePe, and Amazon Pay with unified API.',
    features: [
      'Multi-wallet support',
      'One-click payments',
      'Wallet balance checks',
      'Automated reconciliation'
    ],
    benefits: ['Access 500M+ wallet users', 'Higher conversion rates', 'Simplified checkout', 'Unified reporting'],
    link: '/payments/wallets'
  },
  {
    icon: Banknote,
    title: 'BNPL',
    subtitle: 'Buy Now Pay Later solutions',
    description: 'Flexible installment payment options with customizable terms, risk assessment, and seamless merchant integration for increased conversions.',
    features: [
      'Flexible payment terms',
      'Real-time risk assessment',
      'Merchant onboarding',
      'Customer management'
    ],
    benefits: ['Increase average order value by 30%', 'Improve conversion rates', 'Reduce payment friction', 'Flexible repayment options'],
    link: '/payments/bnpl'
  },
  {
    icon: Globe,
    title: 'Cross-border Payments',
    subtitle: 'International payment processing',
    description: 'Secure cross-border payment solutions with competitive FX rates, local payment methods, and compliance with international regulations.',
    features: [
      'Competitive FX rates',
      'Local payment methods',
      'Currency conversion',
      'Regulatory compliance'
    ],
    benefits: ['Expand globally', 'Reduce currency risks', 'Local payment preferences', 'Simplified compliance'],
    link: '/payments/cross-border'
  }
];

const stats = [
  { value: '500M+', label: 'Transactions Processed' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '₹2,000Cr+', label: 'Volume Handled' },
  { value: '25K+', label: 'Active Merchants' }
];

// Payment-specific mockup components
const PaymentMockup = ({ payment, index }: { payment: typeof payments[0], index: number }) => {
  const mockupVariants = [
    // Payment Gateway
    () => (
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Payment Gateway</p>
                  <p className="text-xs text-gray-600">Live Transactions</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-2 py-1 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-green-700">Active</span>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { method: 'Visa ****4829', amount: '₹8,450', status: 'success' },
                { method: 'UPI Payment', amount: '₹2,340', status: 'success' },
                { method: 'Mastercard ****2910', amount: '₹5,120', status: 'processing' },
              ].map((txn, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${txn.status === 'success' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                      {txn.status === 'success' ? (
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      ) : (
                        <Clock className="w-3 h-3 text-yellow-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">{txn.method}</p>
                      <p className="text-[10px] text-gray-500">2m ago</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{txn.amount}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Success', value: '98.5%', color: 'green' },
              { label: 'Volume', value: '₹15K', color: 'blue' },
              { label: 'Count', value: '1.2K', color: 'purple' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100">
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                <p className="text-[10px] text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    // UPI Solutions
    () => (
      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">UPI Payments</p>
                <p className="text-xs text-gray-600">Unified Interface</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-indigo-100">
            <div className="grid grid-cols-3 gap-2 mb-3">
              {['GPay', 'PhonePe', 'Paytm'].map((app) => (
                <div key={app} className="bg-indigo-50 rounded-lg p-2 text-center">
                  <p className="text-xs font-semibold text-indigo-700">{app}</p>
                </div>
              ))}
            </div>
            <div className="text-center py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">₹24,580</p>
              <p className="text-xs text-gray-600">Total Today</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Transactions</p>
              <p className="text-lg font-bold text-gray-900">847</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Success Rate</p>
              <p className="text-lg font-bold text-green-600">99.2%</p>
            </div>
          </div>
        </div>
      </div>
    ),
    // Card Processing
    () => (
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-white shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs opacity-80">CREDIT CARD</p>
              <Zap className="w-5 h-5" />
            </div>
            <div className="mb-6">
              <p className="text-xs opacity-80 mb-1">Card Number</p>
              <p className="font-mono text-lg tracking-wider">**** **** **** 4829</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs opacity-80">Valid Thru</p>
                <p className="font-mono text-sm">12/25</p>
              </div>
              <div>
                <p className="text-xs opacity-80">CVV</p>
                <p className="font-mono text-sm">***</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {['Visa', 'Master', 'Amex'].map((card) => (
              <div key={card} className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100">
                <p className="text-xs font-semibold text-gray-700">{card}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600">Processing</p>
              <p className="text-sm font-bold text-gray-900">₹45,280</p>
            </div>
          </div>
        </div>
      </div>
    ),
    // Digital Wallets
    () => (
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-md">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Digital Wallets</p>
              <p className="text-xs text-gray-600">Multi-wallet Support</p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { wallet: 'Paytm', balance: '₹12,450', icon: '💰' },
              { wallet: 'Google Pay', balance: '₹8,340', icon: '🔵' },
              { wallet: 'PhonePe', balance: '₹15,680', icon: '🟣' },
            ].map((w) => (
              <div key={w.wallet} className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{w.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{w.wallet}</p>
                    <p className="text-xs text-gray-600">Connected</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-900">{w.balance}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-3 text-center">
            <p className="text-xs mb-1">Total Balance</p>
            <p className="text-2xl font-bold">₹36,470</p>
          </div>
        </div>
      </div>
    ),
    // BNPL
    () => (
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-md">
              <Banknote className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Buy Now Pay Later</p>
              <p className="text-xs text-gray-600">Flexible Installments</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-gray-600">Purchase Amount</p>
              <p className="text-2xl font-bold text-gray-900">₹24,999</p>
            </div>
            <div className="space-y-2">
              {[
                { month: 'Month 1', amount: '₹6,250', status: 'paid' },
                { month: 'Month 2', amount: '₹6,250', status: 'paid' },
                { month: 'Month 3', amount: '₹6,250', status: 'due' },
                { month: 'Month 4', amount: '₹6,249', status: 'pending' },
              ].map((payment) => (
                <div key={payment.month} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${payment.status === 'paid' ? 'bg-green-500' :
                      payment.status === 'due' ? 'bg-yellow-500' : 'bg-gray-200'
                      }`} />
                    <p className="text-xs text-gray-700">{payment.month}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{payment.amount}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600 mb-1">Next Payment Due</p>
            <p className="text-sm font-bold text-green-700">₹6,250 on Mar 15</p>
          </div>
        </div>
      </div>
    ),
    // Cross-border
    () => (
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Cross-border</p>
              <p className="text-xs text-gray-600">International Payments</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-gray-600">From INR</p>
                <p className="text-xl font-bold text-gray-900">₹1,00,000</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-[10px] text-gray-600">1 USD = ₹83.15</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600">To USD</p>
                <p className="text-xl font-bold text-gray-900">$1,202</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {['USD', 'EUR', 'GBP'].map((currency) => (
              <div key={currency} className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100">
                <p className="text-xs font-semibold text-gray-700">{currency}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Processing Fee</span>
              <span className="font-semibold text-gray-900">₹180</span>
            </div>
          </div>
        </div>
      </div>
    ),
  ];

  const MockupComponent = mockupVariants[index];
  return <MockupComponent />;
};

export default function Payments() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8"
            >
              <CreditCard className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Payment Solutions Suite</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              Accept Payments{' '}
              <TypingText
                text="Everywhere"
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                delay={0.5}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            >
              Comprehensive payment processing solutions that scale with your business.
              From local transactions to global commerce, we handle it all with enterprise-grade security.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <span>Start Accepting Payments</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-6 text-lg rounded-xl shadow-sm hover:shadow-md transition-all">
                <span>View Integration Guide</span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payments Overview */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold mb-4 block text-sm tracking-wider uppercase">PAYMENT SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Choose the right{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">payment method</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Six comprehensive payment solutions designed for different business models and customer preferences.
            </p>
          </motion.div>

          <div className="space-y-32">
            {payments.map((payment, index) => (
              <motion.div
                key={payment.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-6 shadow-sm">
                    <payment.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {payment.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{payment.subtitle}</p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {payment.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {payment.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Benefits</h4>
                      <ul className="space-y-3">
                        {payment.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to={payment.link}>
                    <Button className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PaymentMockup payment={payment} index={index} />

                    {/* Floating success indicator */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Ready to accept{' '}
              <span className="text-blue-200">global payments?</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Join thousands of businesses already processing payments worldwide with our comprehensive payment solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl transition-all font-semibold">
                <span>Contact Sales</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}