import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  CreditCard,
  Zap,
  Repeat,
  QrCode,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';

const collections = [
  {
    icon: CreditCard,
    title: 'UPI Collection',
    subtitle: 'Collect payments via UPI with real-time settlement',
    description: 'Accept UPI payments from millions of users across India with instant settlement and zero transaction fees. Our UPI collection solution integrates seamlessly with your existing systems.',
    features: [
      'Real-time payment confirmation',
      'Instant fund settlement',
      'Multi-bank UPI support',
      'Secure transaction processing'
    ],
    benefits: ['Reduce collection time by 90%', 'Zero transaction fees', 'Instant settlements', 'High success rates'],
    link: '/collections/upi'
  },
  {
    icon: Zap,
    title: 'Simpli Collect',
    subtitle: 'Unique Virtual IDs for hassle-free payments',
    description: 'Generate unique virtual payment IDs for each transaction, eliminating the need for sharing sensitive banking details. Perfect for businesses requiring secure, one-time payment links.',
    features: [
      'Unique virtual payment IDs',
      'One-time use links',
      'Customizable payment pages',
      'Payment status tracking'
    ],
    benefits: ['Enhanced security', 'Simplified payment flow', 'Reduced payment errors', 'Better user experience'],
    link: '/collections/simpli-collect'
  },
  {
    icon: Repeat,
    title: 'Recurring Collections',
    subtitle: 'Effortless automated recurring payments via UPI',
    description: 'Set up automated recurring payments for subscriptions, EMI collections, and regular billing. Customers can manage their subscriptions with ease through our intuitive dashboard.',
    features: [
      'Automated payment scheduling',
      'Flexible billing cycles',
      'Customer subscription management',
      'Failed payment retry logic'
    ],
    benefits: ['Improved cash flow', 'Reduced manual effort', 'Higher retention rates', 'Predictable revenue'],
    link: '/collections/recurring'
  },
  {
    icon: QrCode,
    title: 'QR Collection for Merchants',
    subtitle: 'Effortless, secure, real-time QR payment collections',
    description: 'Generate dynamic QR codes for instant payments at physical locations. Accept payments from any UPI app with real-time updates and comprehensive transaction reporting.',
    features: [
      'Dynamic QR code generation',
      'Real-time payment notifications',
      'Transaction reconciliation',
      'Multi-currency support'
    ],
    benefits: ['Contactless payments', 'Faster checkout', 'Reduced cash handling', 'Enhanced security'],
    link: '/collections/qr'
  }
];

const stats = [
  { value: '10M+', label: 'Transactions Processed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '₹500Cr+', label: 'Volume Handled' },
  { value: '50K+', label: 'Active Merchants' }
];

// Collection-specific mockup components
const CollectionMockup = ({ collection, index }: { collection: typeof collections[0], index: number }) => {
  const mockupVariants = [
    // UPI Collection
    () => (
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-md">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">UPI Payment</p>
                <p className="text-xs text-gray-600">Instant Settlement</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">₹2,450</p>
              <p className="text-xs text-green-600 font-semibold">+12.5%</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-600">Transaction Status</span>
              <span className="text-xs font-semibold text-green-600">SUCCESS</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">UPI ID:</span>
                <span className="font-mono text-gray-900">user@paytm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Txn ID:</span>
                <span className="font-mono text-gray-900">UPI2024...</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xl font-bold text-gray-900">247</p>
              <p className="text-xs text-gray-600">Today</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xl font-bold text-gray-900">1.4K</p>
              <p className="text-xs text-gray-600">Week</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xl font-bold text-green-600">99.8%</p>
              <p className="text-xs text-gray-600">Success</p>
            </div>
          </div>
        </div>
      </div>
    ),
    // Simpli Collect
    () => (
      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Virtual ID</p>
                <p className="text-xs text-gray-600">Unique Payment Link</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-indigo-100">
            <div className="mb-3">
              <p className="text-xs text-gray-600 mb-2">Virtual Payment ID</p>
              <div className="bg-indigo-50 rounded-lg p-3 font-mono text-sm text-indigo-700 break-all">
                VPA2024XY789ABCD
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-3/4" />
              </div>
              <span className="text-xs font-semibold text-gray-600">18h left</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Amount</p>
              <p className="text-lg font-bold text-gray-900">₹15,000</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Status</p>
              <p className="text-sm font-semibold text-yellow-600">Pending</p>
            </div>
          </div>
        </div>
      </div>
    ),
    // Recurring Collections
    () => (
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-md">
                <Repeat className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Auto Collection</p>
                <p className="text-xs text-gray-600">Monthly Subscription</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { date: 'Jan 15', amount: '₹999', status: 'success' },
              { date: 'Feb 15', amount: '₹999', status: 'success' },
              { date: 'Mar 15', amount: '₹999', status: 'pending' },
            ].map((payment, i) => (
              <div key={i} className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${payment.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{payment.date}</p>
                    <p className="text-xs text-gray-600">Auto-debit</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{payment.amount}</p>
                  <p className={`text-xs font-semibold ${payment.status === 'success' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {payment.status === 'success' ? 'Paid' : 'Scheduled'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-4 text-center">
            <p className="text-xs mb-1">Next Payment</p>
            <p className="text-xl font-bold">Apr 15, 2024</p>
          </div>
        </div>
      </div>
    ),
    // QR Collection
    () => (
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center shadow-md">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">QR Payment</p>
                <p className="text-xs text-gray-600">Scan & Pay</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-sm ${Math.random() > 0.5 ? 'bg-purple-900' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Scans</p>
              <p className="text-xl font-bold text-gray-900">1,247</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Payments</p>
              <p className="text-xl font-bold text-green-600">1,189</p>
            </div>
          </div>
        </div>
      </div>
    ),
  ];

  const MockupComponent = mockupVariants[index];
  return <MockupComponent />;
};

export default function Collections() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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
              <span className="text-sm font-medium text-blue-700">UPI Collections Suite</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              Smart{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                UPI Collections
              </span>
              {' '}for Modern Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            >
              Comprehensive UPI collection solutions that streamline payments, enhance security,
              and accelerate your business growth with real-time settlements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                <span>Start Collecting</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-6 text-lg rounded-xl shadow-sm hover:shadow-md transition-all">
                <span>View Demo</span>
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

      {/* Collections Overview */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold mb-4 block text-sm tracking-wider uppercase">COLLECTION SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Choose the right{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">collection method</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four powerful UPI collection solutions designed for different business needs and customer preferences.
            </p>
          </motion.div>

          <div className="space-y-32">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
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
                    <collection.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {collection.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{collection.subtitle}</p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {collection.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {collection.features.map((feature) => (
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
                        {collection.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to={collection.link}>
                    <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
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
                    <CollectionMockup collection={collection} index={index} />

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
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
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
              Ready to revolutionize your{' '}
              <span className="text-blue-200">payment collections?</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Join thousands of businesses already using our UPI collection solutions to streamline payments and boost revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl transition-all font-semibold">
                <span>Contact Sales</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}