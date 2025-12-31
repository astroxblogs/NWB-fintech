import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  CreditCard,
  Building2,
  Zap,
  Shield,
  BarChart3,
  Wallet,
  Banknote,
  Landmark,
  FileCheck,
  UserCheck,
  Globe,
  Lock,
  Eye,
  AlertTriangle,
  Repeat,
  QrCode,
  Umbrella,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const collectionsProducts = [
  { name: 'UPI Collection', href: '/collections/upi-collection', icon: CreditCard, description: 'Collect payments via UPI with real-time settlement' },
  { name: 'Simpli Collect', href: '/collections/simpli-collect', icon: Zap, description: 'Unique Virtual IDs for hassle-free payments' },
  { name: 'Recurring Collections', href: '/collections/recurring', icon: Repeat, description: 'Effortless automated recurring payments via UPI' },
  { name: 'QR Collection for Merchants', href: '/collections/qr-collection', icon: QrCode, description: 'Effortless, secure, real-time QR payment collections' },
];

const paymentsProducts = [
  { name: 'Payment Gateway', href: '/payments/gateway', icon: CreditCard, description: 'Secure payment processing' },
  { name: 'UPI Solutions', href: '/payments/upi', icon: Building2, description: 'Unified Payments Interface' },
  { name: 'Card Processing', href: '/payments/cards', icon: CreditCard, description: 'Credit/debit card payments' },
  { name: 'Digital Wallets', href: '/payments/wallets', icon: Wallet, description: 'Mobile wallet integration' },
  { name: 'BNPL', href: '/payments/bnpl', icon: Banknote, description: 'Buy Now Pay Later' },
  { name: 'Cross-border Payments', href: '/payments/cross-border', icon: Globe, description: 'International transfers' },
];

const serviceProducts = [
  { name: 'Insurance', href: '/service/insurance', icon: Umbrella, description: 'Comprehensive insurance solutions' },
  { name: 'Loan', href: '/service/lending', icon: Banknote, description: 'Flexible loan products' },
  { name: 'Financial Service', href: '/service/wealth', icon: DollarSign, description: 'Complete financial services' },
  { name: 'BBPS', href: '/service/bbps', icon: Zap, description: 'Bharat Bill Pay System' },
];

const navLinks = [
  { name: 'Collections', href: '#', hasDropdown: true, type: 'collections' },
  { name: 'Payments', href: '#', hasDropdown: true, type: 'payments' },
  { name: 'Service', href: '#', hasDropdown: true, type: 'service' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBankingOpen, setIsBankingOpen] = useState(false);
  const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsBankingOpen(false);
    setIsPaymentsOpen(false);
    setIsSecurityOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className={cn(
          "mx-auto max-w-7xl rounded-2xl transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border border-gray-100 px-6 py-3"
            : "bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm px-6 py-3"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="NWB Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
                    onMouseEnter={() => {
                      if (link.type === 'collections') setIsBankingOpen(true);
                      if (link.type === 'payments') setIsPaymentsOpen(true);
                      if (link.type === 'service') setIsSecurityOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (link.type === 'collections') setIsBankingOpen(false);
                      if (link.type === 'payments') setIsPaymentsOpen(false);
                      if (link.type === 'service') setIsSecurityOpen(false);
                    }}
                  >
                    {link.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      ((link.type === 'collections' && isBankingOpen) ||
                        (link.type === 'payments' && isPaymentsOpen) ||
                        (link.type === 'service' && isSecurityOpen)) && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {((link.type === 'collections' && isBankingOpen) ||
                      (link.type === 'payments' && isPaymentsOpen) ||
                      (link.type === 'service' && isSecurityOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                          onMouseEnter={() => {
                            if (link.type === 'collections') setIsBankingOpen(true);
                            if (link.type === 'payments') setIsPaymentsOpen(true);
                            if (link.type === 'service') setIsSecurityOpen(true);
                          }}
                          onMouseLeave={() => {
                            if (link.type === 'collections') setIsBankingOpen(false);
                            if (link.type === 'payments') setIsPaymentsOpen(false);
                            if (link.type === 'service') setIsSecurityOpen(false);
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[480px] grid grid-cols-2 gap-2">
                            {(link.type === 'collections' ? collectionsProducts :
                              link.type === 'payments' ? paymentsProducts :
                                serviceProducts).map((product) => (
                                  <Link
                                    key={product.name}
                                    to={link.type === 'collections' ? "/collections" :
                                      link.type === 'payments' ? "/payments" :
                                        link.type === 'service' ? "/service" :
                                          product.href}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
                                  >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-100 transition-all shadow-sm">
                                      <product.icon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                      <span className="block font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                      </span>
                                      <span className="text-xs text-gray-600 leading-snug">
                                        {product.description}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              className="text-gray-700 hover:text-gray-900 font-medium text-sm bg-transparent hover:bg-gray-50 border-0 shadow-none"
            >
              Sign In
            </Button>
            <Link to="/contact">
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold text-sm px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Get Started Today
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 mx-4 mt-2 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="space-y-3">
                      <button
                        onClick={() => setOpenMobileSection(openMobileSection === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full font-semibold text-gray-900 text-sm py-2"
                      >
                        {link.name}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          openMobileSection === link.name && "rotate-180"
                        )} />
                      </button>
                      <AnimatePresence>
                        {openMobileSection === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-2 pb-2">
                              {(link.type === 'collections' ? collectionsProducts :
                                link.type === 'payments' ? paymentsProducts :
                                  serviceProducts).map((product) => (
                                    <Link
                                      key={product.name}
                                      to={link.type === 'collections' ? "/collections" :
                                        link.type === 'payments' ? "/payments" :
                                          link.type === 'service' ? "/service" :
                                            product.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors py-2 group"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                        <product.icon className="w-4 h-4 text-blue-600" />
                                      </div>
                                      <div>
                                        <div className="text-sm font-medium">{product.name}</div>
                                        <div className="text-xs text-gray-500">{product.description}</div>
                                      </div>
                                    </Link>
                                  ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="block font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-100">
                <Button
                  className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-lg"
                >
                  Sign In
                </Button>
                <Link to="/contact">
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-lg shadow-md"
                  >
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};