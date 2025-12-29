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
  Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const products = [
  { name: 'Banking Solutions', href: '/banking', icon: Building2, description: 'Modern banking infrastructure' },
  { name: 'Payment Processing', href: '/payments', icon: CreditCard, description: 'Seamless payment solutions' },
  { name: 'Fraud Detection', href: '/security', icon: Shield, description: 'AI-powered security' },
  { name: 'Analytics Platform', href: '/analytics', icon: BarChart3, description: 'Real-time insights' },
  { name: 'Digital Wallets', href: '/wallets', icon: Wallet, description: 'Next-gen wallet solutions' },
  { name: 'API Automation', href: '/automation', icon: Zap, description: 'Streamlined workflows' },
];

const navLinks = [
  { name: 'Products', href: '#', hasDropdown: true },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsProductsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className={cn(
          "mx-auto max-w-7xl transition-all duration-500",
          isScrolled ? "glass-nav px-6 py-3" : "bg-transparent py-3"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-primary flex items-center justify-center overflow-hidden">
              <span className="font-display font-bold text-xl text-primary-foreground">S</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-display font-semibold text-xl text-foreground">
              Sprint<span className="text-primary">NXT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isProductsOpen && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium underline-gradient"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Products Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                      >
                        <div className="glass-nav p-4 min-w-[480px] grid grid-cols-2 gap-2">
                          {products.map((product) => (
                            <Link
                              key={product.name}
                              to={product.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors duration-200 group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <product.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <span className="block font-medium text-foreground group-hover:text-primary transition-colors">
                                  {product.name}
                                </span>
                                <span className="text-sm text-muted-foreground">
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
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="lg">
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
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
            className="lg:hidden glass-nav mx-4 mt-2 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <span className="block font-medium text-foreground">Products</span>
                      <div className="pl-4 space-y-2">
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            to={product.href}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            <product.icon className="w-4 h-4" />
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="block font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" className="w-full">
                  Book Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
