import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users, GraduationCap, Heart, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: <GraduationCap size={40} />,
    title: 'World-Class Education',
    description: 'Home to 10 Nobel laureates and top-ranked universities globally',
  },
  {
    icon: <Award size={40} />,
    title: 'Cutting-Edge Technology',
    description: 'Experience innovation at the forefront of global research',
  },
  {
    icon: <Globe size={40} />,
    title: 'Global Recognition',
    description: 'Degrees recognized worldwide with excellent career prospects',
  },
  {
    icon: <Heart size={40} />,
    title: 'Rich Cultural Heritage',
    description: 'Perfect blend of ancient traditions and modern lifestyle',
  },
  {
    icon: <Users size={40} />,
    title: 'Safe Environment',
    description: 'One of the safest countries with excellent healthcare',
  },
  {
    icon: <Sparkles size={40} />,
    title: 'Scholarship Opportunities',
    description: 'Generous government and university scholarships available',
  },
];

const WhyJapan = () => {
  return (
    <section id="why-japan" className="py-24 bg-japan-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-japan-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            Why Japan?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Gateway to Excellence
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            Discover why thousands of international students choose Japan for their higher education journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-japan-red mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-japan-black">{reason.title}</h3>
              <p className="text-japan-black/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJapan;