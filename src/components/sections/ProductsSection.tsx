import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Building2, 
  Shield, 
  BarChart3, 
  Wallet, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: Building2,
    title: 'Banking Solutions',
    description: 'Modern core banking infrastructure with APIs for account management, loans, and compliance.',
    href: '/banking',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Accept payments anywhere with our unified gateway. Cards, UPI, wallets, and more.',
    href: '/payments',
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: Shield,
    title: 'Fraud Detection',
    description: 'AI-powered risk assessment and fraud prevention in real-time.',
    href: '/security',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: BarChart3,
    title: 'Analytics Platform',
    description: 'Transform transaction data into actionable business intelligence.',
    href: '/analytics',
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: Wallet,
    title: 'Digital Wallets',
    description: 'White-label wallet solutions for seamless customer experiences.',
    href: '/wallets',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Zap,
    title: 'API Automation',
    description: 'Streamline workflows with our comprehensive automation toolkit.',
    href: '/automation',
    color: 'from-accent/20 to-accent/5',
  },
];

export const ProductsSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
          <span className="text-primary font-medium mb-4 block">OUR PRODUCTS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need to{' '}
            <span className="gradient-text">scale fintech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of financial infrastructure products designed to 
            power every aspect of your digital finance operations.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={product.href} className="block group">
                <div className="premium-card p-8 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-7 h-7 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {product.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
