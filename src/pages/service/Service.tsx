import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Umbrella,
  Banknote,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { TypingText } from '@/components/ui/TypingText';

const services = [
  {
    icon: Umbrella,
    title: 'Insurance',
    subtitle: 'Comprehensive insurance solutions for businesses',
    description: 'End-to-end insurance management platform with policy administration, claims processing, and risk assessment tools designed for modern insurers and brokers.',
    features: [
      'Policy management system',
      'Automated underwriting',
      'Claims processing workflow',
      'Risk assessment tools'
    ],
    benefits: ['Reduce processing time by 60%', 'Improve claim accuracy', 'Enhanced customer experience', 'Regulatory compliance'],
    link: '/service/insurance'
  },
  {
    icon: Banknote,
    title: 'Loan',
    subtitle: 'Flexible loan products and management',
    description: 'Complete loan origination and management platform with automated approval workflows, risk scoring, and comprehensive servicing capabilities.',
    features: [
      'Loan origination system',
      'Automated risk scoring',
      'Payment scheduling',
      'Portfolio management'
    ],
    benefits: ['Faster loan approvals', 'Reduced default rates', 'Streamlined operations', 'Better customer service'],
    link: '/service/lending'
  },
  {
    icon: DollarSign,
    title: 'Financial Service',
    subtitle: 'Complete financial services platform',
    description: 'Unified platform for wealth management, investment advisory, and financial planning with advanced analytics and personalized client experiences.',
    features: [
      'Portfolio management',
      'Investment analytics',
      'Client onboarding',
      'Performance reporting'
    ],
    benefits: ['Personalized services', 'Data-driven insights', 'Regulatory compliance', 'Scalable infrastructure'],
    link: '/service/wealth'
  },
  {
    icon: Zap,
    title: 'BBPS',
    subtitle: 'Bharat Bill Pay System',
    description: 'Unified bill payment system offering interoperable and accessible bill payment services to customers through a network of agents & digital channels.',
    features: [
      '20,000+ Billers connected',
      'Instant payment confirmation',
      'Dispute management system',
      'Standardized bill payment'
    ],
    benefits: ['One-stop bill payment', 'Multiple payment modes', 'Instant receipt generation', 'Fraud protection'],
    link: '/service/bbps'
  }
];

const stats = [
  { value: '200+', label: 'Financial Institutions' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '₹50Cr+', label: 'Assets Under Management' },
  { value: '24/7', label: 'Support Available' }
];

// Service-specific mockup components
const ServiceMockup = ({ service, index }: { service: typeof services[0], index: number }) => {
  const mockupVariants = [
    // Insurance
    () => (
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-md">
              <Umbrella className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Insurance Portal</p>
              <p className="text-xs text-gray-600">Policy Management</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-gray-600">Policy Number</p>
                <p className="font-mono text-sm font-semibold text-gray-900">INS2024789456</p>
              </div>
              <div className="bg-green-50 px-2 py-1 rounded-full">
                <p className="text-xs font-semibold text-green-700">Active</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <p className="text-xs text-gray-600">Coverage</p>
                <p className="text-sm font-bold text-gray-900">₹10,00,000</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Premium</p>
                <p className="text-sm font-bold text-gray-900">₹8,450/yr</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-700">Recent Claims</p>
            {[
              { type: 'Health', amount: '₹45,000', status: 'approved' },
              { type: 'Accident', amount: '₹12,000', status: 'processing' },
            ].map((claim, i) => (
              <div key={i} className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${claim.status === 'approved' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                  <p className="text-sm text-gray-900">{claim.type}</p>
                </div>
                <p className="text-sm font-semibold text-gray-900">{claim.amount}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-3 text-center">
            <p className="text-xs mb-1">Next Premium Due</p>
            <p className="text-sm font-bold">April 15, 2024</p>
          </div>
        </div>
      </div>
    ),
    // Loan
    () => (
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-md">
                <Banknote className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Personal Loan</p>
                <p className="text-xs text-gray-600">Loan Account</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-gray-600">Loan Amount</p>
                <p className="text-2xl font-bold text-gray-900">₹5,00,000</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600">Outstanding</p>
                <p className="text-xl font-bold text-green-700">₹2,45,000</p>
              </div>
            </div>
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[51%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">51% Repaid</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Interest</p>
              <p className="text-sm font-bold text-gray-900">8.5%</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">EMI</p>
              <p className="text-sm font-bold text-gray-900">₹12,500</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Tenure</p>
              <p className="text-sm font-bold text-gray-900">48 mon</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-700">Next EMI Due</p>
              <p className="text-sm font-bold text-green-700">Mar 5, 2024</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-700">Payment History</p>
            <div className="flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-8 rounded ${i < 6 ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    // Financial Service
    () => (
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Portfolio</p>
                <p className="text-xs text-gray-600">Investment Dashboard</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">Total Value</p>
              <p className="text-xl font-bold text-gray-900">₹24,58,000</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-gray-700">Asset Allocation</p>
              <p className="text-xs text-green-600 font-semibold">+12.5% YTD</p>
            </div>
            <div className="space-y-2">
              {[
                { type: 'Equity', percentage: 45, value: '₹11.0L', color: 'purple' },
                { type: 'Debt', percentage: 30, value: '₹7.4L', color: 'blue' },
                { type: 'Gold', percentage: 15, value: '₹3.7L', color: 'yellow' },
                { type: 'Cash', percentage: 10, value: '₹2.5L', color: 'green' },
              ].map((asset) => (
                <div key={asset.type}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-700">{asset.type}</span>
                    <span className="font-semibold text-gray-900">{asset.value}</span>
                  </div>
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-${asset.color}-500 rounded-full`}
                      style={{ width: `${asset.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Returns (1Y)</p>
              <p className="text-lg font-bold text-green-600">+18.2%</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-600 mb-1">Risk Score</p>
              <p className="text-lg font-bold text-yellow-600">Moderate</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs mb-1">Next SIP</p>
                <p className="text-sm font-bold">₹10,000 on 1st</p>
              </div>
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    ),
    // BBPS
    () => (
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Bill Payments</p>
                <p className="text-xs text-gray-600">Bharat BillPay</p>
              </div>
            </div>
            <div className="bg-orange-100 px-2 py-1 rounded text-[10px] font-bold text-orange-700">
              BBPS
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Electricity Bill</p>
                <p className="text-sm font-bold text-gray-900">Tata Power Delhi</p>
              </div>
              <p className="font-bold text-gray-900">₹ 850</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Bill Date</span>
                <span className="font-medium">20 Dec 2024</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Due Date</span>
                <span className="font-medium text-red-500">05 Jan 2025</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-50">
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-orange-500 animate-[loading_2s_ease-in-out_infinite]" />
              </div>
              <p className="text-[10px] text-center text-gray-400 mt-2">Processing Payment...</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {['DTH', 'Gas', 'Mobile'].map((item, i) => (
              <div key={i} className="bg-orange-50 rounded-lg p-2 text-center border border-orange-100/50">
                <p className="text-[10px] font-medium text-orange-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  ];

  const MockupComponent = mockupVariants[index];
  return <MockupComponent />;
};

export default function Service() {
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
              <DollarSign className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Financial Services Suite</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              Complete{' '}
              <TypingText
                text="Financial Services"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                delay={0.5}
              />
              {' '}Platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            >
              Comprehensive financial services solutions including insurance, loans, and wealth management.
              Everything you need to serve your clients with excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-6 text-lg rounded-xl shadow-sm hover:shadow-md transition-all">
                <span>Schedule Consultation</span>
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

      {/* Services Overview */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold mb-4 block text-sm tracking-wider uppercase">FINANCIAL SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">service solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three essential financial service categories designed to meet all your clients' needs.
            </p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-4">Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to={service.link}>
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
                    <ServiceMockup service={service} index={index} />

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
              Ready to elevate your{' '}
              <span className="text-blue-200">financial services?</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Join leading financial institutions already using our comprehensive service platform to deliver exceptional client experiences.
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

      <Footer />
    </div>
  );
}