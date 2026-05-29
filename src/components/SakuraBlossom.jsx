import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SakuraBlossom = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const createPetal = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 7,
      size: 15 + Math.random() * 15,
    });

    setPetals(Array.from({ length: 30 }, createPetal));

    const interval = setInterval(() => {
      setPetals(prev => {
        const newPetals = [...prev];
        if (newPetals.length < 40) {
          newPetals.push(createPetal());
        }
        return newPetals;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-japan-red/20"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            fontSize: `${petal.size}px`,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default SakuraBlossom;