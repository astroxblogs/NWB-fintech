import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, MapPin, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { TypingText } from '@/components/ui/TypingText';

interface ServiceLayoutProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  children?: ReactNode;
  belowHeroContent?: ReactNode;
  theme?: 'flight' | 'bus' | 'hotel' | 'tour';
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServiceLayout({
  title,
  description,
  icon,
  features,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  children,
  belowHeroContent,
  theme
}: ServiceLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();

  const themeStyles: Record<NonNullable<ServiceLayoutProps['theme']>, {
    hero: string;
    blobA: string;
    blobB: string;
    badge: string;
    badgeText: string;
    badgeBorder: string;
    gradientText: string;
    typingText: string;
    primaryBtn: string;
    primaryBtnHover: string;
    primaryBtnShadow: string;
    outlineBtn: string;
    outlineBtnHover: string;
    featureIconBg: string;
    featureIconText: string;
    ctaSection: string;
    ctaBtnText: string;
  }> = {
    flight: {
      hero: 'bg-gradient-to-br from-sky-50 to-indigo-50',
      blobA: 'bg-sky-200/20',
      blobB: 'bg-indigo-200/20',
      badge: 'bg-sky-100/50',
      badgeText: 'text-sky-700',
      badgeBorder: 'border-sky-200',
      gradientText: 'bg-gradient-to-r from-sky-600 to-indigo-600',
      typingText: 'text-sky-600',
      primaryBtn: 'bg-sky-600',
      primaryBtnHover: 'hover:bg-sky-700',
      primaryBtnShadow: 'hover:shadow-sky-500/25',
      outlineBtn: 'border-sky-200 text-sky-700',
      outlineBtnHover: 'hover:bg-sky-50',
      featureIconBg: 'bg-sky-100',
      featureIconText: 'text-sky-600',
      ctaSection: 'bg-gradient-to-r from-sky-600 to-indigo-600',
      ctaBtnText: 'text-sky-600',
    },
    bus: {
      hero: 'bg-gradient-to-br from-orange-50 to-amber-50',
      blobA: 'bg-orange-200/20',
      blobB: 'bg-amber-200/20',
      badge: 'bg-orange-100/50',
      badgeText: 'text-orange-700',
      badgeBorder: 'border-orange-200',
      gradientText: 'bg-gradient-to-r from-orange-600 to-amber-600',
      typingText: 'text-orange-600',
      primaryBtn: 'bg-orange-600',
      primaryBtnHover: 'hover:bg-orange-700',
      primaryBtnShadow: 'hover:shadow-orange-500/25',
      outlineBtn: 'border-orange-200 text-orange-700',
      outlineBtnHover: 'hover:bg-orange-50',
      featureIconBg: 'bg-orange-100',
      featureIconText: 'text-orange-600',
      ctaSection: 'bg-gradient-to-r from-orange-600 to-amber-600',
      ctaBtnText: 'text-orange-600',
    },
    hotel: {
      hero: 'bg-gradient-to-br from-purple-50 to-pink-50',
      blobA: 'bg-purple-200/20',
      blobB: 'bg-pink-200/20',
      badge: 'bg-purple-100/50',
      badgeText: 'text-purple-700',
      badgeBorder: 'border-purple-200',
      gradientText: 'bg-gradient-to-r from-purple-600 to-pink-600',
      typingText: 'text-purple-600',
      primaryBtn: 'bg-purple-600',
      primaryBtnHover: 'hover:bg-purple-700',
      primaryBtnShadow: 'hover:shadow-purple-500/25',
      outlineBtn: 'border-purple-200 text-purple-700',
      outlineBtnHover: 'hover:bg-purple-50',
      featureIconBg: 'bg-purple-100',
      featureIconText: 'text-purple-600',
      ctaSection: 'bg-gradient-to-r from-purple-600 to-pink-600',
      ctaBtnText: 'text-purple-600',
    },
    tour: {
      hero: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      blobA: 'bg-emerald-200/20',
      blobB: 'bg-teal-200/20',
      badge: 'bg-emerald-100/50',
      badgeText: 'text-emerald-700',
      badgeBorder: 'border-emerald-200',
      gradientText: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      typingText: 'text-emerald-600',
      primaryBtn: 'bg-emerald-600',
      primaryBtnHover: 'hover:bg-emerald-700',
      primaryBtnShadow: 'hover:shadow-emerald-500/25',
      outlineBtn: 'border-emerald-200 text-emerald-700',
      outlineBtnHover: 'hover:bg-emerald-50',
      featureIconBg: 'bg-emerald-100',
      featureIconText: 'text-emerald-600',
      ctaSection: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      ctaBtnText: 'text-emerald-600',
    },
  };

  const styles = theme ? themeStyles[theme] : themeStyles.flight;

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!isMounted) return null;

  return (
    <motion.div 
      className="min-h-screen bg-white font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 overflow-hidden ${styles.hero}`}>
        <div className={`absolute top-0 right-0 w-1/3 h-1/3 ${styles.blobA} blur-3xl rounded-full`} />
        <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 ${styles.blobB} blur-3xl rounded-full`} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${styles.badge} border ${styles.badgeBorder} mb-6 backdrop-blur-sm`}>
                {icon}
                <span className={`text-sm font-medium ${styles.badgeText}`}>Travel Solutions</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {title} <br />
                <span className={`text-transparent bg-clip-text ${styles.gradientText}`}>API Integration</span>
              </h1>

              <div className="text-xl text-gray-600 mb-8 flex items-center gap-2 flex-wrap">
                <span>Access</span>
                <TypingText
                  text="Real-time Availability. Best Prices. Instant Confirmation."
                  className={`font-semibold ${styles.typingText}`}
                  delay={0.5}
                />
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={ctaLink}>
                  <Button className={`${styles.primaryBtn} ${styles.primaryBtnHover} text-white px-8 py-6 text-lg rounded-xl shadow-lg ${styles.primaryBtnShadow} transition-all`}>
                    {ctaText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className={`${styles.outlineBtn} ${styles.outlineBtnHover} px-8 py-6 text-lg rounded-xl`}>
                  View Documentation
                </Button>
              </div>
            </motion.div>

            {/* Visual - Travel Booking Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[550px] w-full flex items-center justify-center p-4"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>

      {belowHeroContent}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our {title} API?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features to enhance your travel booking experience
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                variants={item}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className={`w-12 h-12 rounded-xl ${styles.featureIconBg} flex items-center justify-center ${styles.featureIconText} mb-6`}>
                  {index % 3 === 0 ? <Globe className="w-6 h-6" /> : 
                   index % 3 === 1 ? <MapPin className="w-6 h-6" /> : 
                   <Clock className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature}</h3>
                <p className="text-gray-600">
                  {getFeatureDescription(title, feature)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-20 ${styles.ctaSection} overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Travel Business?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Integrate our {title} API and start offering seamless travel booking experiences to your customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={ctaLink}>
                <Button size="lg" className={`bg-white ${styles.ctaBtnText} hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-lg`}>
                  {ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

// Helper function to generate feature descriptions
function getFeatureDescription(service: string, feature: string): string {
  const descriptions: Record<string, Record<string, string>> = {
    'Flight': {
      'Real-time Availability': 'Get up-to-the-minute flight availability across all major airlines.',
      'Price Comparison': 'Compare prices across multiple airlines to find the best deals.',
      'Seat Selection': 'Allow customers to choose their preferred seats during booking.',
      'Meal Preferences': 'Enable meal preference selection for a better travel experience.',
      'E-ticketing': 'Issue electronic tickets instantly after booking.',
      'Multi-city Support': 'Let customers plan complex itineraries with multi-city bookings.'
    },
    'Bus': {
      'Real-time Tracking': 'Track buses in real-time with our advanced tracking system.',
      'Multi-operator Support': 'Access multiple bus operators from a single integration.',
      'Seat Selection': 'Let customers choose their preferred seats on the bus.',
      'Route Information': 'Get detailed route information including stops and timings.',
      'Mobile Boarding Pass': 'Provide convenient mobile boarding passes to your customers.',
      '24/7 Customer Support': 'Get round-the-clock support for bookings, cancellations, and reschedules.'
    },
    'Hotel': {
      '5M+ Properties': 'Offer your customers a huge inventory across budget to luxury stays.',
      'Best Price Guarantee': 'Lock in the best available rates with transparent pricing.',
      'Real-time Availability': 'Show accurate room availability and rates instantly.',
      'Guest Reviews': 'Show genuine guest reviews and ratings.',
      'Flexible Booking': 'Enable easy cancellations, modifications, and flexible policies.',
      '24/7 Support': 'Provide round-the-clock assistance for booking and stay-related queries.'
    },
    'Tour': {
      '10,000+ Tours': 'Offer a wide range of experiences across destinations and categories.',
      'Local Experts': 'Connect with verified local guides and experts.',
      'Instant Confirmation': 'Get instant confirmation for all bookings.',
      'Customer Reviews': 'Access genuine customer reviews and ratings.',
      'Mobile Tickets': 'Deliver tickets instantly with QR-based mobile entry.',
      '24/7 Support': 'Round-the-clock customer support for all bookings.'
    }
  };

  return descriptions[service]?.[feature] || `Premium ${service.toLowerCase()} feature for enhanced user experience.`;
}
