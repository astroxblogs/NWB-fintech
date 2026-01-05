import { motion } from 'framer-motion';
import { Hotel, MapPin, Star, Check, Shield, Wifi, Utensils, Calendar, Users, Search, ArrowRight } from 'lucide-react';
import { ServiceLayout } from '@/components/travel/ServiceLayout';

export default function HotelPage() {
  const features = [
    '5M+ Properties',
    'Best Price Guarantee',
    'Real-time Availability',
    'Guest Reviews',
    'Flexible Booking',
    '24/7 Support'
  ];

  const popularHotels = [
    { name: 'Taj Mahal Palace', city: 'Mumbai', rating: 4.8, price: '₹12,999', emoji: '🏨' },
    { name: 'The Leela Palace', city: 'New Delhi', rating: 4.7, price: '₹10,499', emoji: '🏛️' },
    { name: 'ITC Grand Chola', city: 'Chennai', rating: 4.6, price: '₹8,999', emoji: '🏰' },
  ];

  return (
    <ServiceLayout
      title="Hotel"
      description="Integrate our hotel booking API to offer your customers access to millions of properties worldwide with real-time availability and competitive pricing."
      icon={<Hotel className="h-8 w-8" />}
      features={features}
      ctaText="Start Hotel Integration"
      theme="hotel"
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
                    <h3 className="text-xl font-bold text-gray-900">Search Hotels</h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-full">
                      <Wifi className="h-4 w-4" />
                      Verified stays
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-purple-400" />
                        <input
                          type="text"
                          placeholder="City, area, landmark"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-purple-400" />
                        <input
                          type="text"
                          placeholder="Select date"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3.5 h-5 w-5 text-purple-400" />
                        <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm appearance-none bg-white">
                          <option>2 Guests</option>
                          <option>1 Guest</option>
                          <option>3 Guests</option>
                          <option>4+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Hotels
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
                    <h3 className="text-xl font-bold text-gray-900">Popular Stays</h3>
                    <button className="text-purple-700 hover:text-purple-900 text-sm font-medium inline-flex items-center">
                      View all
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {popularHotels.map((h, idx) => (
                      <motion.div
                        key={h.name}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 * idx }}
                        whileHover={{ y: -2 }}
                        className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-2xl">
                              {h.emoji}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{h.name}</div>
                              <div className="text-sm text-gray-500">{h.city}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end text-sm text-gray-700">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              {h.rating}
                            </div>
                            <div className="text-lg font-bold text-purple-700">{h.price}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 bg-purple-50 border border-purple-100 p-4 rounded-xl">
                    <div className="flex items-center">
                      <Utensils className="h-5 w-5 text-purple-700 mr-2" />
                      <div className="text-sm text-gray-700">
                        Amenities + policies delivered in one clean API.
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
          <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                <Hotel className="w-5 h-5" />
              </div>
              <div className="text-sm font-semibold">Stay Finder</div>
              <div className="w-10 h-10 rounded-2xl bg-white/15" />
            </div>
            <div className="mt-6">
              <div className="text-sm text-white/80">Tonight’s upgrade</div>
              <div className="text-3xl font-bold">Suite deal unlocked</div>
              <div className="text-white/80">Mumbai • ₹12,999</div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-700">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Real-time rooms</div>
                <div className="text-sm text-gray-600">Accurate availability + pricing.</div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-700">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Flexible policies</div>
                <div className="text-sm text-gray-600">Modify / cancel easily.</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-purple-200/30 blur-2xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-pink-200/30 blur-2xl"
        />
      </motion.div>
    </ServiceLayout>
  );
}
