import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock,
  CheckCircle,
  Users,
  BarChart3,
  CreditCard,
  Smartphone,
  Globe,
  Lock,
  Repeat
} from 'lucide-react';

const whyFeatures = [
  {
    icon: CreditCard,
    title: 'Multi-mode Payment Options',
    description: 'Now you can seamlessly process payments using various methods, such as IMPS, NEFT, RTGS, and UPI, ensuring flexibility of options.',
    color: 'from-blue-500 to-indigo-500',
    mockup: 'payment-options',
  },
  {
    icon: Clock,
    title: 'Real Time Insight',
    description: 'Gain immediate access to transactional data, providing valuable insights that improve cash flow management & support informed business decisions.',
    color: 'from-purple-500 to-pink-500',
    mockup: 'real-time',
  },
  {
    icon: BarChart3,
    title: 'Collection Tracking & Reconciliation',
    description: 'Utilise our innovative APIs to track, find, & reconcile any transaction, enhancing accuracy and transparency in your financial operations.',
    color: 'from-green-500 to-emerald-500',
    mockup: 'tracking',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Enterprise security that exceeds compliance standards. End-to-end encryption, fraud detection, and comprehensive audit trails.',
    color: 'from-orange-500 to-red-500',
    mockup: 'security',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Processing',
    description: 'Process thousands of transactions per second with sub-50ms latency. Real-time settlement and instant confirmations.',
    color: 'from-cyan-500 to-blue-500',
    mockup: 'speed',
  },
  {
    icon: Users,
    title: '24/7 Expert Support',
    description: 'Dedicated support team available round the clock. Quick resolution times and personalized assistance for your business needs.',
    color: 'from-indigo-500 to-purple-500',
    mockup: 'support',
  },
];

// Mockup components for each feature
const PaymentOptionsMockup = () => (
  <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg">
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-center mb-4">
          <div className="w-32 h-48 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-4 left-4 right-4">
              <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                <div className="h-2 bg-white/50 rounded w-16 mb-2" />
                <div className="h-1.5 bg-white/30 rounded w-12" />
              </div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold mb-2">₹2500</div>
              <div className="text-xs opacity-80">Payment Amount</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-green-400 rounded-lg py-2 text-center text-white text-sm font-semibold">
                PAY
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {[
          { name: 'NEFT', color: 'red' },
          { name: 'IMPS', color: 'blue' },
          { name: 'RTGS', color: 'green' },
          { name: 'UPI', color: 'purple' },
        ].map((method) => (
          <div key={method.name} className={`bg-${method.color}-50 rounded-lg p-2 text-center`}>
            <div className={`w-8 h-8 rounded-full bg-${method.color}-100 mx-auto mb-1 flex items-center justify-center`}>
              <CreditCard className={`w-4 h-4 text-${method.color}-600`} />
            </div>
            <p className="text-xs font-semibold text-gray-700">{method.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RealTimeInsightMockup = () => (
  <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg">
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-gray-700">Live Transactions</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-600 font-semibold">Live</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-2xl font-bold text-gray-900">₹1,24,580</p>
          <p className="text-xs text-green-600 font-semibold">+18.5% from yesterday</p>
        </div>

        <div className="h-24 flex items-end justify-between gap-1">
          {[30, 45, 35, 60, 50, 70, 55, 80, 65, 75, 60, 85].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full rounded-t bg-gradient-to-t from-purple-500 to-pink-500"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Today', value: '2.4K', icon: TrendingUp, color: 'green' },
          { label: 'This Hour', value: '247', icon: Clock, color: 'blue' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
            <p className="text-lg font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TrackingMockup = () => (
  <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg">
    <div className="space-y-3">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-gray-700">Invoice Tracker</p>
          <div className="bg-green-50 p-1.5 rounded-lg">
            <BarChart3 className="w-4 h-4 text-green-600" />
          </div>
        </div>
        
        <div className="space-y-2">
          {[
            { product: 'Product A', status: 'Paid', price: '₹12,450', order: '#ORD-001' },
            { product: 'Product B', status: 'Pending', price: '₹8,900', order: '#ORD-002' },
            { product: 'Product C', status: 'Paid', price: '₹15,200', order: '#ORD-003' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-900">{item.product}</p>
                <p className="text-[10px] text-gray-500">{item.order}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  item.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.status}
                </span>
                <p className="text-xs font-bold text-gray-900 w-16 text-right">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 bg-white rounded-lg p-3 shadow-sm border border-gray-100">
        <CheckCircle className="w-4 h-4 text-green-600" />
        <p className="text-xs font-semibold text-gray-700">Auto-reconciled</p>
      </div>
    </div>
  </div>
);

const SecurityMockup = () => (
  <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg">
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">Security Status</p>
              <p className="text-[10px] text-gray-600">All systems protected</p>
            </div>
          </div>
          <div className="bg-green-50 px-2 py-1 rounded-full">
            <p className="text-xs font-semibold text-green-700">Active</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'SSL/TLS', icon: Lock, status: 'Enabled' },
            { label: '2FA Auth', icon: CheckCircle, status: 'Active' },
            { label: 'Encryption', icon: Shield, status: 'AES-256' },
            { label: 'Monitoring', icon: Globe, status: '24/7' },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-lg p-2">
              <div className="flex items-center gap-1 mb-1">
                <item.icon className="w-3 h-3 text-orange-600" />
                <p className="text-[10px] font-semibold text-gray-700">{item.label}</p>
              </div>
              <p className="text-xs font-bold text-gray-900">{item.status}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-3 text-center">
        <p className="text-xs mb-1">Threat Detection</p>
        <p className="text-xl font-bold">0 Issues</p>
      </div>
    </div>
  </div>
);

const SpeedMockup = () => (
  <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg">
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-cyan-100">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-8 border-gray-100 flex items-center justify-center">
              <div>
                <p className="text-3xl font-bold text-cyan-600">47ms</p>
                <p className="text-xs text-gray-600 text-center">avg latency</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-8 border-cyan-500 border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Speed', value: '99.9%', icon: Zap },
            { label: 'Uptime', value: '99.99%', icon: CheckCircle },
            { label: 'TPS', value: '10K+', icon: Repeat },
          ].map((stat) => (
            <div key={stat.label} className="bg-cyan-50 rounded-lg p-2 text-center">
              <stat.icon className="w-4 h-4 text-cyan-600 mx-auto mb-1" />
              <p className="text-xs font-bold text-gray-900">{stat.value}</p>
              <p className="text-[10px] text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SupportMockup = () => (
  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg">
    <div className="space-y-3">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-indigo-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900">Support Team</p>
            <p className="text-[10px] text-green-600 font-semibold">● Online Now</p>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { time: '10:30 AM', msg: 'How can we help you today?', type: 'received' },
            { time: '10:31 AM', msg: 'Need help with integration', type: 'sent' },
            { time: '10:32 AM', msg: 'I\'ll assist you right away!', type: 'received' },
          ].map((chat, i) => (
            <div key={i} className={`flex ${chat.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-2 ${
                chat.type === 'sent' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="text-xs">{chat.msg}</p>
                <p className={`text-[9px] mt-1 ${chat.type === 'sent' ? 'text-indigo-100' : 'text-gray-500'}`}>
                  {chat.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Response', value: '<5min' },
          { label: 'Rating', value: '4.9★' },
          { label: 'Tickets', value: '24/7' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100">
            <p className="text-xs font-bold text-gray-900">{stat.value}</p>
            <p className="text-[10px] text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const mockupComponents: Record<string, () => JSX.Element> = {
  'payment-options': PaymentOptionsMockup,
  'real-time': RealTimeInsightMockup,
  'tracking': TrackingMockup,
  'security': SecurityMockup,
  'speed': SpeedMockup,
  'support': SupportMockup,
};

export const WhyNWBSection = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* <span className="text-blue-600 font-semibold mb-4 block text-sm tracking-wider uppercase">WHY NWB</span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">NWB?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of digital finance with our comprehensive suite of features designed 
            to streamline your operations and accelerate growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyFeatures.map((feature, index) => {
            const MockupComponent = mockupComponents[feature.mockup];
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Mockup */}
                  <div className="mb-6">
                    <MockupComponent />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};