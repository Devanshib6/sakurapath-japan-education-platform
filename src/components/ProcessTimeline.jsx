import React from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, Plane, Heart } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} />,
    title: 'Free Consultation',
    description: 'Discuss your goals and find the right program',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'Application & Visa',
    description: 'We guide you through paperwork and visa process',
  },
  {
    icon: <Plane size={32} />,
    title: 'Pre-departure',
    description: 'Orientation and preparation for your journey',
  },
  {
    icon: <Heart size={32} />,
    title: 'Arrival & Support',
    description: 'Welcome and ongoing assistance in Japan',
  },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-japan-cream to-japan-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Journey to Japan
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            Simple 4-step process to make your dream a reality
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-japan-red/20 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className={`bg-white rounded-2xl p-6 shadow-lg mx-4 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <div className="text-japan-red mb-3">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-japan-black/70">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex justify-center items-center w-12 h-12 bg-japan-red rounded-full text-white font-bold z-10">
                  {index + 1}
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;