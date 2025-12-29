import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, BarChart3, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning-Fast Transactions',
    description: 'Process thousands of transactions per second with our optimized infrastructure. Real-time settlement and instant confirmations.',
    highlights: ['Sub-50ms latency', 'Real-time processing', 'Instant settlements'],
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Enterprise security that exceeds compliance standards. End-to-end encryption, fraud detection, and comprehensive audit trails.',
    highlights: ['PCI DSS Level 1', 'SOC 2 Type II', 'GDPR Compliant'],
  },
  {
    icon: BarChart3,
    title: 'Intelligent Analytics',
    description: 'Turn transaction data into actionable insights. Machine learning-powered predictions and customizable dashboards.',
    highlights: ['Predictive insights', 'Custom dashboards', 'API access'],
  },
];

export const StickyScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

  return (
    <section ref={containerRef} className="relative bg-background py-20 lg:py-0">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:min-h-[300vh]">
          {/* Left: Scrolling Content */}
          <div className="space-y-32 lg:space-y-0 py-20 lg:py-32">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-20 lg:mb-0 lg:h-screen lg:flex lg:flex-col lg:justify-center"
            >
              <span className="text-primary font-medium mb-4 block">WHY SPRINTNXT</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Built for the demands of{' '}
                <span className="gradient-text">modern finance</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Our platform combines cutting-edge technology with battle-tested reliability 
                to deliver the infrastructure your business needs.
              </p>
            </motion.div>

            {/* Feature Blocks */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="lg:h-screen lg:flex lg:flex-col lg:justify-center"
              >
                <div className="feature-card">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky Dashboard Mockup */}
          <div className="hidden lg:block relative">
            <div className="sticky-content h-screen flex items-center">
              <motion.div 
                style={{ y: imageY, scale: imageScale }}
                className="relative w-full"
              >
                {/* Dashboard Mockup */}
                <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
                  {/* Glow Effect */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
                  
                  {/* Dashboard Header */}
                  <div className="relative bg-muted/50 px-6 py-4 border-b border-border flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 rounded-lg bg-background/50 text-sm text-muted-foreground">
                        dashboard.sprintnxt.com
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="relative p-6 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Volume Today', value: '$2.4M', change: '+12%' },
                        { label: 'Transactions', value: '14,238', change: '+8%' },
                        { label: 'Success Rate', value: '99.8%', change: '+0.2%' },
                      ].map((stat) => (
                        <div key={stat.label} className="p-4 rounded-xl bg-muted/30 border border-border/50">
                          <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                          <p className="text-xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-xs text-green-500">{stat.change}</p>
                        </div>
                      ))}
                    </div>

                    {/* Chart Placeholder */}
                    <div className="h-48 rounded-xl bg-muted/30 border border-border/50 p-4">
                      <div className="flex items-end justify-between h-full gap-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-primary/50"
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="space-y-3">
                      {[
                        { id: 'TXN-8294', amount: '$1,234.00', status: 'Completed' },
                        { id: 'TXN-8293', amount: '$567.89', status: 'Processing' },
                        { id: 'TXN-8292', amount: '$2,345.67', status: 'Completed' },
                      ].map((txn) => (
                        <div key={txn.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/30">
                          <span className="text-sm font-medium text-foreground">{txn.id}</span>
                          <span className="text-sm text-foreground">{txn.amount}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            txn.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {txn.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Accent Elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-primary/20 blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl bg-accent/20 blur-2xl"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Dashboard Image */}
          <div className="lg:hidden mt-12">
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Volume', value: '$2.4M' },
                    { label: 'Txns', value: '14K' },
                    { label: 'Rate', value: '99.8%' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-lg bg-muted/30 text-center">
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-sm font-bold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="h-32 rounded-lg bg-muted/30 flex items-end justify-between gap-1 p-3">
                  {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-primary/50"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
