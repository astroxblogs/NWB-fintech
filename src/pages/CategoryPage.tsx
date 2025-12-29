import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  Building2, 
  CreditCard, 
  Shield, 
  BarChart3, 
  Wallet, 
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  Users
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const categoryData: Record<string, {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; description: string }[];
  stats: { value: string; label: string }[];
}> = {
  banking: {
    icon: Building2,
    title: 'Banking Solutions',
    subtitle: 'Modern Core Banking Infrastructure',
    description: 'Transform your banking operations with our comprehensive API-first platform. From account management to loan processing, we provide the infrastructure you need to build next-generation banking experiences.',
    features: [
      { title: 'Account Management', description: 'Full-featured APIs for opening, managing, and closing accounts of all types.' },
      { title: 'Loan Processing', description: 'End-to-end loan lifecycle management with automated underwriting.' },
      { title: 'Regulatory Compliance', description: 'Built-in compliance tools for RBI, SEBI, and international regulations.' },
      { title: 'Core Banking APIs', description: 'RESTful APIs for all core banking operations with 99.99% uptime.' },
      { title: 'Multi-Currency Support', description: 'Handle transactions in 100+ currencies with real-time forex rates.' },
      { title: 'White-Label Solutions', description: 'Fully customizable banking interfaces for your brand.' },
    ],
    stats: [
      { value: '50M+', label: 'Accounts Managed' },
      { value: '₹10T+', label: 'Processed Annually' },
      { value: '99.99%', label: 'Uptime SLA' },
    ],
  },
  payments: {
    icon: CreditCard,
    title: 'Payment Processing',
    subtitle: 'Unified Payment Gateway',
    description: 'Accept payments from anywhere with our unified gateway. Support for cards, UPI, net banking, wallets, and emerging payment methods—all through a single integration.',
    features: [
      { title: 'Multi-Method Support', description: 'Cards, UPI, wallets, net banking, and BNPL in one integration.' },
      { title: 'Instant Settlements', description: 'Get funds in your account within hours, not days.' },
      { title: 'Smart Routing', description: 'AI-powered routing for optimal success rates and lower costs.' },
      { title: 'Subscription Billing', description: 'Automated recurring payments with dunning management.' },
      { title: 'International Payments', description: 'Accept payments from 100+ countries with local payment methods.' },
      { title: 'Payment Links', description: 'No-code payment collection via shareable links.' },
    ],
    stats: [
      { value: '98.5%', label: 'Success Rate' },
      { value: '<50ms', label: 'Response Time' },
      { value: '200M+', label: 'Transactions/Month' },
    ],
  },
  security: {
    icon: Shield,
    title: 'Fraud Detection',
    subtitle: 'AI-Powered Security',
    description: 'Protect your business with enterprise-grade security. Our machine learning models analyze transactions in real-time to prevent fraud before it happens.',
    features: [
      { title: 'Real-Time Detection', description: 'ML models analyze every transaction in under 10ms.' },
      { title: 'Behavioral Analysis', description: 'Track user patterns to identify anomalous behavior.' },
      { title: 'Device Fingerprinting', description: 'Advanced device identification to prevent account takeover.' },
      { title: 'Custom Rules Engine', description: 'Define your own fraud rules with our no-code builder.' },
      { title: 'Chargeback Protection', description: 'Reduce chargebacks with predictive risk scoring.' },
      { title: 'Compliance Reports', description: 'Automated audit trails and compliance reporting.' },
    ],
    stats: [
      { value: '99.9%', label: 'Detection Rate' },
      { value: '₹500Cr+', label: 'Fraud Prevented' },
      { value: '<0.1%', label: 'False Positives' },
    ],
  },
  analytics: {
    icon: BarChart3,
    title: 'Analytics Platform',
    subtitle: 'Intelligent Business Insights',
    description: 'Turn your transaction data into actionable insights. Real-time dashboards, predictive analytics, and custom reports to drive informed decisions.',
    features: [
      { title: 'Real-Time Dashboards', description: 'Live monitoring of all key business metrics.' },
      { title: 'Predictive Analytics', description: 'ML-powered forecasting for revenue and churn.' },
      { title: 'Custom Reports', description: 'Build exactly the reports you need with our query builder.' },
      { title: 'API Access', description: 'Programmatic access to all your data via REST and GraphQL.' },
      { title: 'Data Export', description: 'Export to your data warehouse in any format.' },
      { title: 'Alerts & Notifications', description: 'Set up custom alerts for any metric or threshold.' },
    ],
    stats: [
      { value: '10B+', label: 'Events Processed/Day' },
      { value: '150+', label: 'Pre-Built Metrics' },
      { value: '<1s', label: 'Query Response' },
    ],
  },
  wallets: {
    icon: Wallet,
    title: 'Digital Wallets',
    subtitle: 'Next-Gen Wallet Solutions',
    description: 'Build seamless customer experiences with our white-label wallet infrastructure. From simple stored value to full-featured financial super apps.',
    features: [
      { title: 'White-Label App', description: 'Fully customizable wallet app for iOS and Android.' },
      { title: 'P2P Transfers', description: 'Instant peer-to-peer money transfers.' },
      { title: 'Bill Payments', description: 'Integration with 1000+ billers for utility and services.' },
      { title: 'Rewards & Cashback', description: 'Built-in loyalty program management.' },
      { title: 'Virtual Cards', description: 'Issue virtual cards for online spending.' },
      { title: 'KYC Integration', description: 'Seamless eKYC and video KYC flows.' },
    ],
    stats: [
      { value: '25M+', label: 'Active Wallets' },
      { value: '₹5000Cr+', label: 'Monthly Volume' },
      { value: '4.8★', label: 'App Store Rating' },
    ],
  },
  automation: {
    icon: Zap,
    title: 'API Automation',
    subtitle: 'Streamlined Workflows',
    description: 'Automate complex financial workflows with our comprehensive API toolkit. From reconciliation to reporting, eliminate manual processes.',
    features: [
      { title: 'Workflow Builder', description: 'Visual workflow designer for complex processes.' },
      { title: 'Auto Reconciliation', description: 'Automated matching of transactions across systems.' },
      { title: 'Scheduled Jobs', description: 'Cron-like scheduling for recurring tasks.' },
      { title: 'Webhook Events', description: 'Real-time event notifications for all operations.' },
      { title: 'Error Handling', description: 'Automatic retries and fallback mechanisms.' },
      { title: 'Audit Logging', description: 'Complete audit trail of all automated actions.' },
    ],
    stats: [
      { value: '10M+', label: 'Tasks Automated/Day' },
      { value: '95%', label: 'Manual Work Reduced' },
      { value: '500+', label: 'API Endpoints' },
    ],
  },
};

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.replace('/', '') || 'banking';
  const data = categoryData[category] || categoryData.banking;
  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden gradient-hero">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">{data.title}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                {data.subtitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
              >
                {data.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="hero" size="xl" className="group">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  View Documentation
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 grid grid-cols-3 gap-8"
              >
                {data.stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-primary font-medium mb-4 block">FEATURES</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Everything you need to{' '}
                <span className="gradient-text">get started</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="feature-card"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">Global Coverage</h4>
                <p className="text-muted-foreground">Operate in 40+ countries with local compliance</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">24/7 Support</h4>
                <p className="text-muted-foreground">Round-the-clock expert support for your team</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">Dedicated Team</h4>
                <p className="text-muted-foreground">Personal account managers for enterprise clients</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Join hundreds of companies already building with SprintNXT.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="group">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
