import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Heart, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap size={48} />,
    title: 'WORLD-CLASS EDUCATION',
    description: 'Top-ranked universities with cutting-edge research facilities',
  },
  {
    icon: <Award size={48} />,
    title: 'SCHOLARSHIPS AVAILABLE',
    description: 'Generous funding options for international students',
  },
  {
    icon: <Globe size={48} />,
    title: 'GLOBAL RECOGNITION',
    description: 'Degrees recognized worldwide with excellent career prospects',
  },
  {
    icon: <Heart size={48} />,
    title: 'RICH CULTURE',
    description: 'Experience ancient traditions alongside modern innovation',
  },
  {
    icon: <Users size={48} />,
    title: 'SUPPORTIVE COMMUNITY',
    description: 'International student associations and support networks',
  },
  {
    icon: <Sparkles size={48} />,
    title: 'CAREER OPPORTUNITIES',
    description: 'High demand for graduates in global companies',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-japan-cream to-japan-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            WHY STUDY IN JAPAN
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bringing Your Educational Dreams To Life
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            Discover why Japan is the premier destination for international students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-japan-red/10"
            >
              <div className="text-japan-red mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-japan-black/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;