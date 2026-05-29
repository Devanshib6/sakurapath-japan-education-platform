import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Plane, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: <FileText size={40} />,
    title: 'Choose Program',
    description: 'Select your desired university and course',
    details: 'Browse through top Japanese universities and find your perfect fit'
  },
  {
    icon: <CheckCircle size={40} />,
    title: 'Apply & Get Accepted',
    description: 'Submit application and receive admission',
    details: 'Our counselors guide you through every step of the application process'
  },
  {
    icon: <Plane size={40} />,
    title: 'Visa & Travel',
    description: 'Get your student visa and book flights',
    details: 'Complete visa assistance and pre-departure orientation'
  },
  {
    icon: <BookOpen size={40} />,
    title: 'Start Your Journey',
    description: 'Begin your educational adventure',
    details: 'Airport pickup, accommodation, and ongoing support'
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-japan-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            HOW TO APPLY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Application Process
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            4 simple steps to start your educational journey in Japan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center p-6 glass rounded-2xl h-full">
                <div className="w-20 h-20 bg-japan-red/10 rounded-full flex items-center justify-center text-japan-red mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-japan-red text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
                <p className="text-japan-black/80 font-semibold mb-2">{step.description}</p>
                <p className="text-sm text-japan-black/60">{step.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;