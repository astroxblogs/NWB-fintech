import { Link } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight
} from 'lucide-react';



const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/netweb-bharat-private-limited/', icon: Linkedin },

];

export const Footer = () => {
  // Defined inside component or outside, but sticking to existing pattern
  const footerLinks = {
    services: [
      { name: 'Collections', href: '/collections', type: 'category' },
      { name: 'UPI Data', href: '/collections/upi', type: 'sub' },
      { name: 'QR Collection', href: '/collections/qr', type: 'sub' },

      { name: 'Payments', href: '/payments', type: 'category' },
      { name: 'Payment Gateway', href: '/payments/gateway', type: 'sub' },
      { name: 'UPI Solutions', href: '/payments/upi', type: 'sub' },

      { name: 'Financial Services', href: '/service', type: 'category' },
      { name: 'Insurance Tech', href: '/service/insurance', type: 'sub' },
      { name: 'Wealth Management', href: '/service/wealth', type: 'sub' },
    ],
    company: [
      { name: 'About Us' },
      { name: 'Careers' },
      { name: 'Blog' },
      { name: 'Press' },
      { name: 'Partners' },
    ],
    resources: [
      { name: 'Documentation' },
      { name: 'API Reference' },
      { name: 'Status' },
      { name: 'Changelog' },
      { name: 'Support' },
    ],
    legal: [
      { name: 'Privacy Policy' },
      { name: 'Terms of Service' },
      { name: 'Cookie Policy' },
      { name: 'Security' },
    ],
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="NWB Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Next-generation fintech infrastructure powering the future of digital finance.
              Built for scale, designed for innovation.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Corporate Add.: TC-719, 7th Floor,
                  Capital Highstreet, Bhiwadi (Raj.), 301019, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@finsmartpay.in" className="hover:text-primary transition-colors">
                  info@finsmartpay.in
                </a>

              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:9116116269" className="hover:text-primary transition-colors">
                  +91 9116116269
                </a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-sm transition-colors inline-flex items-center gap-1 group w-full ${link.type === 'category'
                      ? 'text-foreground font-semibold mt-3 first:mt-0 hover:text-primary'
                      : 'text-muted-foreground hover:text-primary pl-3'
                      }`}
                  >
                    {link.name}
                    {link.type === 'category' && <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group cursor-default"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group cursor-default"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group cursor-default"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NWB. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
