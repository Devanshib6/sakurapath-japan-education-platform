import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    country: 'USA',
    program: 'Engineering, University of Tokyo',
    text: 'Studying in Japan transformed my career. The education quality is exceptional and the support from SakuraPath made everything seamless.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Michael Chen',
    country: 'Singapore',
    program: 'AI Research, Kyoto University',
    text: 'The best decision I ever made. The scholarship assistance and pre-departure guidance were invaluable.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Emma Williams',
    country: 'UK',
    program: 'Business, Waseda University',
    text: 'From visa application to finding accommodation, everything was handled professionally. Highly recommended!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-japan-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-blue/5"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-blue font-semibold text-sm uppercase tracking-wider mb-2 block">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted By Hundreds Of Happy Students
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary-blue text-primary-blue" />
              ))}
            </div>
            <span className="text-japan-black/70">4.9 out of 5 · 500+ reviews</span>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <Quote className="text-primary-blue/20 w-16 h-16 absolute top-4 right-4" />
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary-blue mb-4"
                />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-blue text-primary-blue" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-japan-black/80 mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <h4 className="font-bold text-xl mb-1">{testimonials[current].name}</h4>
                <p className="text-primary-blue">{testimonials[current].program}</p>
                <p className="text-sm text-japan-black/60">{testimonials[current].country}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? 'bg-primary-blue w-8' : 'bg-primary-blue/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;