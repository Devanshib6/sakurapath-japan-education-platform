import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';

const tours = [
  {
    title: 'Tokyo Academic Excellence Tour',
    location: 'Tokyo',
    duration: '7 Days',
    price: '$2,500',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    universities: ['University of Tokyo', 'Waseda University'],
  },
  {
    title: 'Kyoto Cultural Immersion',
    location: 'Kyoto',
    duration: '5 Days',
    price: '$1,800',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    universities: ['Kyoto University', 'Doshisha University'],
  },
  {
    title: 'Osaka Innovation Experience',
    location: 'Osaka',
    duration: '6 Days',
    price: '$2,200',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5547?auto=format&fit=crop&w=800&q=80',
    universities: ['Osaka University', 'Kansai University'],
  },
  {
    title: 'Hokkaido Nature & Study',
    location: 'Hokkaido',
    duration: '8 Days',
    price: '$2,800',
    image: 'https://images.unsplash.com/photo-1571850920970-6e258e0224f3?auto=format&fit=crop&w=800&q=80',
    universities: ['Hokkaido University'],
  },
  {
    title: 'Fukuoka Tech Discovery',
    location: 'Fukuoka',
    duration: '5 Days',
    price: '$1,600',
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=800&q=80',
    universities: ['Kyushu University'],
  },
  {
    title: 'Nagoya Engineering Tour',
    location: 'Nagoya',
    duration: '6 Days',
    price: '$2,000',
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=800&q=80',
    universities: ['Nagoya University'],
  },
];

const PopularTours = () => {
  return (
    <section id="tours" className="py-24 bg-gradient-to-b from-japan-cream to-japan-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            POPULAR PROGRAMS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Most Requested Study Programs
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            Explore our most popular academic programs and campus tours
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-japan-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin size={16} className="text-japan-red" />
                  <span className="text-sm">{tour.location}</span>
                  <Clock size={16} className="text-japan-red ml-2" />
                  <span className="text-sm">{tour.duration}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Partner Universities:</p>
                  <div className="flex flex-wrap gap-1">
                    {tour.universities.map((uni, i) => (
                      <span key={i} className="text-xs bg-japan-red/10 text-japan-red px-2 py-1 rounded">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-japan-red text-white py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Apply Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;