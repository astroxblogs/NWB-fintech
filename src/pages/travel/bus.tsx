import { motion } from 'framer-motion';
import { Bus, Clock, MapPin, Shield, Check, Users, Search, Calendar, ArrowRight, Route } from 'lucide-react';
import { ServiceLayout } from '@/components/travel/ServiceLayout';

export default function BusPage() {
  const features = [
    'Real-time Tracking',
    'Multi-operator Support',
    'Seat Selection',
    'Route Information',
    'Mobile Boarding Pass',
    '24/7 Customer Support'
  ];

  const popularRoutes = [
    { from: 'Mumbai', to: 'Pune', duration: '3h 30m', price: '₹499', tag: 'AC Sleeper' },
    { from: 'Delhi', to: 'Jaipur', duration: '5h 10m', price: '₹699', tag: 'Volvo AC' },
    { from: 'Bengaluru', to: 'Chennai', duration: '6h 40m', price: '₹799', tag: 'Sleeper' },
  ];

  return (
    <ServiceLayout
      title="Bus"
      description="Integrate our bus booking API to provide your customers with access to thousands of bus routes, real-time tracking, and seamless booking experience."
      icon={<Bus className="h-8 w-8" />}
      features={features}
      ctaText="Start Bus Integration"
      theme="bus"
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
                    <h3 className="text-xl font-bold text-gray-900">Search Buses</h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-orange-700 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full">
                      <Route className="h-4 w-4" />
                      50k+ routes
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-orange-400" />
                        <input
                          type="text"
                          placeholder="Leaving from"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-orange-400" />
                        <input
                          type="text"
                          placeholder="Going to"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-orange-400" />
                        <input
                          type="text"
                          placeholder="Select date"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3.5 h-5 w-5 text-orange-400" />
                        <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm appearance-none bg-white">
                          <option>1 Passenger</option>
                          <option>2 Passengers</option>
                          <option>3 Passengers</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Buses
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
                    <button className="text-orange-700 hover:text-orange-900 text-sm font-medium inline-flex items-center">
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
                            <div className="text-sm text-gray-500">{r.duration} • {r.tag}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-orange-700">{r.price}</div>
                            <div className="text-xs text-gray-500">starting</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 bg-orange-50 border border-orange-100 p-4 rounded-xl">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-orange-600 mr-2" />
                      <div className="text-sm text-gray-700">
                        Live tracking + ETA updates built-in.
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
          <div className="p-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <div className="text-sm font-semibold">Smart Ticket</div>
              <div className="w-10 h-10 rounded-2xl bg-white/15" />
            </div>
            <div className="mt-6">
              <div className="text-sm text-white/80">Next departure</div>
              <div className="text-3xl font-bold">Mumbai → Pune</div>
              <div className="text-white/80">Today • 07:30 PM</div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-700">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Seat selection</div>
                <div className="text-sm text-gray-600">Choose preferred seats before you pay.</div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-800">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Secure booking</div>
                <div className="text-sm text-gray-600">Safe payments + instant confirmation.</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-orange-200/30 blur-2xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-amber-200/30 blur-2xl"
        />
      </motion.div>
    </ServiceLayout>
  );
}
