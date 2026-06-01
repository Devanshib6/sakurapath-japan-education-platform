import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=2070&q=80"
          alt="Japanese Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-japan-white/85 to-japan-cream/75"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              ✨ STUDY & TRAVEL
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-japan-black">EXPLORE</span>
            <br />
            <span className="text-primary-blue">THE LAND OF</span>
            <br />
            <span className="bg-gradient-to-r from-primary-blue to-accent-yellow bg-clip-text text-transparent">
              THE RISING SUN
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-japan-dark/80 mb-8 max-w-2xl mx-auto"
          >
            Your journey to study in Japan ensures a seamless and memorable educational adventure
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="group bg-primary-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-blue hover:text-white transition-all duration-300">
              Explore Programs
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto glass rounded-2xl p-6"
          >
            <div className="text-center">
              <MapPin className="text-primary-blue mx-auto mb-2" size={24} />
              <p className="text-sm font-semibold">300+</p>
              <p className="text-xs text-japan-black/60">Universities</p>
            </div>
            <div className="text-center">
              <Calendar className="text-primary-blue mx-auto mb-2" size={24} />
              <p className="text-sm font-semibold">98%</p>
              <p className="text-xs text-japan-black/60">Success Rate</p>
            </div>
            <div className="text-center">
              <Users className="text-primary-blue mx-auto mb-2" size={24} />
              <p className="text-sm font-semibold">40K+</p>
              <p className="text-xs text-japan-black/60">Students</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="text-primary-blue w-6 h-6 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;