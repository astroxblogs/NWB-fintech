import { motion } from 'framer-motion';
import { MapPin, Globe, Clock, Check, Shield, Star, Users, Search, Calendar, ArrowRight, Compass } from 'lucide-react';
import { ServiceLayout } from '@/components/travel/ServiceLayout';

export default function TourPage() {
  const features = [
    '10,000+ Tours',
    'Local Experts',
    'Instant Confirmation',
    'Customer Reviews',
    'Mobile Tickets',
    '24/7 Support'
  ];

  const popularTours = [
    { title: 'Old Delhi Food Walk', city: 'Delhi', duration: '3h', rating: 4.7, price: '₹1,299', emoji: '🍲' },
    { title: 'Goa Sunset Cruise', city: 'Goa', duration: '2h', rating: 4.6, price: '₹1,799', emoji: '⛵' },
    { title: 'Jaipur Heritage Tour', city: 'Jaipur', duration: '6h', rating: 4.8, price: '₹2,499', emoji: '🏰' },
  ];

  return (
    <ServiceLayout
      title="Tour"
      description="Integrate our tour and activities API to offer your customers unique experiences, guided tours, and local attractions with instant booking."
      icon={<MapPin className="h-8 w-8" />}
      features={features}
      ctaText="Start Tour Integration"
      theme="tour"
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
                    <h3 className="text-xl font-bold text-gray-900">Search Experiences</h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
                      <Compass className="h-4 w-4" />
                      Curated
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-emerald-400" />
                        <input
                          type="text"
                          placeholder="City or attraction"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-emerald-400" />
                        <input
                          type="text"
                          placeholder="Select date"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Group size</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3.5 h-5 w-5 text-emerald-400" />
                        <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm appearance-none bg-white">
                          <option>2 People</option>
                          <option>1 Person</option>
                          <option>3-4 People</option>
                          <option>5+ People</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Tours
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
                    <h3 className="text-xl font-bold text-gray-900">Popular Picks</h3>
                    <button className="text-emerald-700 hover:text-emerald-900 text-sm font-medium inline-flex items-center">
                      View all
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {popularTours.map((t, idx) => (
                      <motion.div
                        key={t.title}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 * idx }}
                        whileHover={{ y: -2 }}
                        className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl">
                              {t.emoji}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{t.title}</div>
                              <div className="text-sm text-gray-500">{t.city} • {t.duration}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end text-sm text-gray-700">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              {t.rating}
                            </div>
                            <div className="text-lg font-bold text-emerald-700">{t.price}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-emerald-700 mr-2" />
                      <div className="text-sm text-gray-700">
                        Instant confirmation + mobile tickets.
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
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-sm font-semibold">Experience Drop</div>
              <div className="w-10 h-10 rounded-2xl bg-white/15" />
            </div>
            <div className="mt-6">
              <div className="text-sm text-white/80">Trending today</div>
              <div className="text-3xl font-bold">Goa Sunset Cruise</div>
              <div className="text-white/80">₹1,799 • 2h</div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Instant confirmation</div>
                <div className="text-sm text-gray-600">No waiting, no manual approvals.</div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mobile tickets</div>
                <div className="text-sm text-gray-600">QR entry + easy sharing.</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-emerald-200/30 blur-2xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-teal-200/30 blur-2xl"
        />
      </motion.div>
    </ServiceLayout>
  );
}
