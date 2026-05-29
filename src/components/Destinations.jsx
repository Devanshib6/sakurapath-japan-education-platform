import React from 'react';
import { motion } from 'framer-motion';

const regions = [
  { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80', count: '45+ Universities' },
  { name: 'Kyoto', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', count: '30+ Universities' },
  { name: 'Osaka', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5547?auto=format&fit=crop&w=800&q=80', count: '35+ Universities' },
  { name: 'Hokkaido', image: 'https://images.unsplash.com/photo-1571850920970-6e258e0224f3?auto=format&fit=crop&w=800&q=80', count: '20+ Universities' },
  { name: 'Fukuoka', image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=800&q=80', count: '25+ Universities' },
  { name: 'Nagoya', image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=800&q=80', count: '28+ Universities' },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-japan-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            STUDY DESTINATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Top Cities For International Students
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            Choose from Japan's most vibrant and educational cities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={region.image}
                alt={region.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-japan-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{region.name}</h3>
                <p className="text-sm opacity-90">{region.count}</p>
                <button className="mt-3 text-japan-red bg-white px-4 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;