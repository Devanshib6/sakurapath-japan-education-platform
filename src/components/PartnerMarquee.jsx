import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'University of Tokyo', logo: '🏛️' },
  { name: 'Kyoto University', logo: '⛩️' },
  { name: 'Osaka University', logo: '🏯' },
  { name: 'Tohoku University', logo: '🗻' },
  { name: 'Nagoya University', logo: '🎌' },
  { name: 'Hokkaido University', logo: '❄️' },
  { name: 'Kyushu University', logo: '🌊' },
  { name: 'Waseda University', logo: '📚' },
];

const PartnerMarquee = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-japan-cream to-japan-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-sm uppercase tracking-wider text-japan-red font-semibold mb-2">
            Trusted Partners
          </h3>
          <p className="text-japan-black/70">Proudly associated with Japan's finest institutions</p>
        </motion.div>

        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 mx-8 px-6 py-3 glass rounded-full"
              >
                <span className="text-3xl">{partner.logo}</span>
                <span className="font-semibold text-japan-black whitespace-normal">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;