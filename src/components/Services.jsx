import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Plane, Home, Briefcase, Languages, Headphones } from 'lucide-react';

const services = [
  {
    icon: <FileText size={32} />,
    title: 'Visa Assistance',
    description: 'Complete guidance through student visa application process',
  },
  {
    icon: <Plane size={32} />,
    title: 'Flight Booking',
    description: 'Best deals on flights to major Japanese cities',
  },
  {
    icon: <Home size={32} />,
    title: 'Accommodation',
    description: 'Safe and affordable housing options near campus',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Part-time Jobs',
    description: 'Job placement assistance for international students',
  },
  {
    icon: <Languages size={32} />,
    title: 'Japanese Courses',
    description: 'Free Japanese language preparation classes',
  },
  {
    icon: <Headphones size={32} />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance during your stay',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-japan-cream to-japan-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Support
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            We're with you every step of the way, from application to graduation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-japan-red/10"
            >
              <div className="w-16 h-16 bg-japan-red/10 rounded-full flex items-center justify-center text-japan-red mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-japan-black/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;