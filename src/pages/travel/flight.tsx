import { motion } from 'framer-motion';
import { Plane, Zap, Check, MapPin, Calendar, Users, Search, ArrowRight, Globe } from 'lucide-react';
import { ServiceLayout } from '@/components/travel/ServiceLayout';

export default function FlightPage() {
  const features = [
    'Real-time Availability',
    'Price Comparison',
    'Seat Selection',
    'Meal Preferences',
    'E-ticketing',
    'Multi-city Support'
  ];

  const popularRoutes = [
    { from: 'DEL', to: 'BOM', duration: '2h 15m', fromCity: 'Delhi', toCity: 'Mumbai', price: '₹4,299' },
    { from: 'BLR', to: 'GOI', duration: '1h 20m', fromCity: 'Bengaluru', toCity: 'Goa', price: '₹3,199' },
    { from: 'MAA', to: 'DXB', duration: '4h 10m', fromCity: 'Chennai', toCity: 'Dubai', price: '₹12,499' },
  ];

  return (
    <ServiceLayout
      title="Flight"
      description="Integrate our comprehensive flight booking API to offer your customers access to thousands of flights worldwide with real-time availability and competitive pricing."
      icon={<Plane className="h-8 w-8" />}
      features={features}
      ctaText="Start Flight Integration"
      theme="flight"
      belowHeroContent={
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Search Flights</h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-sky-700 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full">
                      <Globe className="h-4 w-4" />
                      Global Inventory
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-sky-400" />
                        <input
                          type="text"
                          placeholder="City or Airport"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-sky-400" />
                        <input
                          type="text"
                          placeholder="City or Airport"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-sky-400" />
                        <input
                          type="text"
                          placeholder="Select date"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Travellers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3.5 h-5 w-5 text-sky-400" />
                        <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm appearance-none bg-white">
                          <option>1 Adult</option>
                          <option>2 Adults</option>
                          <option>Family (2+2)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Flights
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Popular Routes</h3>
                    <button className="text-sky-700 hover:text-sky-900 text-sm font-medium inline-flex items-center">
                      View all
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {popularRoutes.map((r, idx) => (
                      <motion.div
                        key={r.from + r.to}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 * idx }}
                        whileHover={{ y: -2 }}
                        className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-semibold text-gray-900">{r.from}</span>
                              <span className="text-gray-400">→</span>
                              <span className="text-lg font-semibold text-gray-900">{r.to}</span>
                            </div>
                            <div className="text-sm text-gray-500">{r.fromCity} to {r.toCity} • {r.duration}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-sky-700">{r.price}</div>
                            <div className="text-xs text-gray-500">starting</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 bg-sky-50 border border-sky-100 p-4 rounded-xl">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      <div className="text-sm text-gray-700">
                        Average API response time: <span className="font-semibold">&lt; 2s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      }
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-md"
      >
        <div className="relative z-10 rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <div className="text-sm font-semibold">Live Fare Pulse</div>
              <div className="w-10 h-10 rounded-2xl bg-white/15" />
            </div>
            <div className="mt-6">
              <div className="text-sm text-white/80">Best deal right now</div>
              <div className="text-3xl font-bold">DEL → BOM</div>
              <div className="text-white/80">₹4,299 • 2h 15m</div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-700">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Instant confirmation</div>
                <div className="text-sm text-gray-600">Book and issue tickets without delays.</div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-700">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Fast search</div>
                <div className="text-sm text-gray-600">Optimized responses for high conversion.</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-sky-200/30 blur-2xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-indigo-200/30 blur-2xl"
        />
      </motion.div>
    </ServiceLayout>
  );
}
