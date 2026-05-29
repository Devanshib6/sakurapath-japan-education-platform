import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Cpu, Building, Microscope, Palette, Globe } from 'lucide-react';

const programs = {
  undergraduate: [
    { name: 'Engineering', duration: '4 Years', icon: <Cpu />, tuition: '¥535,800/year' },
    { name: 'Business Administration', duration: '4 Years', icon: <Building />, tuition: '¥535,800/year' },
    { name: 'International Studies', duration: '4 Years', icon: <Globe />, tuition: '¥535,800/year' },
  ],
  postgraduate: [
    { name: 'AI & Robotics', duration: '2 Years', icon: <Cpu />, tuition: '¥535,800/year' },
    { name: 'Biotechnology', duration: '2 Years', icon: <Microscope />, tuition: '¥535,800/year' },
    { name: 'Fine Arts', duration: '2 Years', icon: <Palette />, tuition: '¥535,800/year' },
  ],
  language: [
    { name: 'Japanese Language', duration: '1-2 Years', icon: <BookOpen />, tuition: '¥400,000/semester' },
    { name: 'Business Japanese', duration: '6 Months', icon: <Building />, tuition: '¥350,000/semester' },
  ],
};

const StudyPrograms = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  return (
    <section id="programs" className="py-24 bg-japan-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            Study Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Program
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            Diverse programs designed for international students
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { id: 'undergraduate', label: 'Undergraduate' },
            { id: 'postgraduate', label: 'Postgraduate' },
            { id: 'language', label: 'Language Courses' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-japan-red text-white'
                  : 'bg-japan-gray text-japan-black hover:bg-japan-red/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programs[activeTab].map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-japan-cream rounded-2xl p-6 shadow-lg border border-japan-red/10"
              >
                <div className="text-japan-red mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                <div className="space-y-2 text-sm text-japan-black/70">
                  <p>⏱️ {program.duration}</p>
                  <p>💰 {program.tuition}</p>
                </div>
                <button className="mt-4 text-japan-red font-semibold hover:underline">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StudyPrograms;