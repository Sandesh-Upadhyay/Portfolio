'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import data from '../data/portfolio.json';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm {data.personal.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 mb-6">
              {data.personal.title}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              {data.personal.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <motion.a
                href={data.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.div 
                className="flex items-center gap-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <MapPin className="w-5 h-5" />
                {data.personal.location}
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 max-w-md relative h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={data.personal.image}
              alt={data.personal.name}
              fill
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}