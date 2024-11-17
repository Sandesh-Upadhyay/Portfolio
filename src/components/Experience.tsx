'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import data from '../data/portfolio.json';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {data.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 pb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600"></div>
              <motion.div 
                className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
              ></motion.div>
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                </div>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}