import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Bus, Hotel, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const travelServices = [
  {
    name: 'Flight',
    icon: Plane,
    href: '/travel/flight',
    description: 'Instant flight booking API with real-time availability and best price guarantee',
    features: [
      'Real-time flight search and booking',
      'Best price guarantee',
      'Seat selection & meal preferences',
      'Multi-city and round-trip support',
      'Instant booking confirmation'
    ]
  },
  {
    name: 'Bus',
    icon: Bus,
    href: '/travel/bus',
    description: 'Comprehensive bus booking API with live tracking and seat selection',
    features: [
      'Real-time bus tracking',
      'Seat selection',
      'Multi-operator support',
      'Route optimization',
      'Instant e-tickets'
    ]
  },
  {
    name: 'Hotel',
    icon: Hotel,
    href: '/travel/hotel',
    description: 'Global hotel booking API with millions of properties worldwide',
    features: [
      '5M+ properties worldwide',
      'Best price guarantee',
      'Real-time availability',
      'Guest reviews & ratings',
      'Secure instant booking'
    ]
  },
  {
    name: 'Tour',
    icon: MapPin,
    href: '/travel/tour',
    description: 'Discover and book unique experiences and guided tours',
    features: [
      '10,000+ tours & activities',
      'Local expert guides',
      'Instant confirmation',
      'Mobile tickets',
      '24/7 customer support'
    ]
  }
];

export default function TravelPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Travel <span className="text-blue-600">Solutions</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful travel APIs to integrate flight, bus, hotel, and tour booking into your platform
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.href}>
                  <Button className="w-full group">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to integrate travel services?</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive travel API solutions today and enhance your platform's capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-base">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 hover:text-white text-base">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
