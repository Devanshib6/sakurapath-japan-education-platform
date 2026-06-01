import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-blue to-japan-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plan Your Study Adventure Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Create memories that last a lifetime
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-accent-yellow text-japan-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Contact us now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-blue transition-all duration-300">
              Download Brochure
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <Phone className="text-accent-yellow mt-1" size={20} />
              <div>
                <p className="font-semibold">Call us anytime</p>
                <p className="text-white/80">+81 3-1234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-accent-yellow mt-1" size={20} />
              <div>
                <p className="font-semibold">Our Office</p>
                <p className="text-white/80">Tokyo, Japan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-accent-yellow mt-1" size={20} />
              <div>
                <p className="font-semibold">Email us</p>
                <p className="text-white/80">info@sakurapath.com</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            We respond within a few hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;