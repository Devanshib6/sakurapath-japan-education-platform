import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Award, Globe } from 'lucide-react';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

const Statistics = () => {
  const stats = [
    { icon: <Users size={40} />, value: 5000, label: 'Students Placed', suffix: '+' },
    { icon: <Building size={40} />, value: 50, label: 'Partner Universities', suffix: '+' },
    { icon: <Award size={40} />, value: 95, label: 'Visa Success Rate', suffix: '%' },
    { icon: <Globe size={40} />, value: 30, label: 'Countries Served', suffix: '+' },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-japan-red to-japan-dark text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4 text-white/90">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter end={stat.value} />{stat.suffix}
              </div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;